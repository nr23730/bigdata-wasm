const BigDataListener = require('../parser/BigDataListener').BigDataListener;

//Create an object containing instructions for data types in text and byte code representation
class DataType {
    constructor(wat, wasm, string) {
        this.wat = wat;
        this.wasm = wasm;
        this.string = string;
    }
}

//Assign data types and their representation in wat/wasm
const Types = {
    Boolean: new DataType("i32", 0x7f, "Boolean"),
    Int: new DataType("i32", 0x7f, "Int"),
    Long: new DataType("i64", 0x7e, "Long"),
    Float: new DataType("f32", 0x7d, "Float"),
    Double: new DataType("f64", 0x7c, "Double")
};


class MyVisitor extends BigDataListener {
    constructor() {
        super();
        this.wat = "";
        this.binaryMagic = [
            0x00, 0x61, 0x73, 0x6d, //WASM Binary Magic
            0x01, 0x00, 0x00, 0x00, //WASM Version
        ];
        this.typeSection = [
            0x01, //section code
            0x00, //section size calculated afterwards
            0x00, //num types (will get increased when new type added)
        ];
        this.importSection = [
            0x02, //section code
            0x00, //section size calculated afterwards
            0x00, //number of imports
        ];
        this.useMemory = false;
        this.functionSection = [
            0x03, //section code
            0x00, //section size calculated afterwards
            0x00 //number of functions
        ];
        this.bodySection = [];
        this.codeSection = [
            0x0a, //section code
            0x00, //section size calculated afterwards
            0x00, //number of functions inserted afterwards
        ];

        //this map will contain maps with variables of specified functions
        this.variables = new Map();

        //TODO: currently: representing current function for var scopes
        this.currentFunc = "";

        //TODO: currently: representing numer of functions
        this.exportCounter = 0;
        this.exportSection = [0x07, 0x00, 0x00];

        //temporary variable for fixup of length values
        this.bodySectionlength = 0;
        this.functions = new Map();
        this.funcReplace = [];

        //type stack to ensure type safeness
        this.typeStack = [];

        //cache for temporary instruction storing
        this.temp_wat = "";
        this.temp_wasm = [];

        //store boolean condition of loops
        this.loophelper_wat = [];
        this.loophelper_wasm = [];
    }

    enterProgram(ctx) {
        this.wat += "(module\n" +
        "(memory (import \"js\" \"mem\") 1)\n";
    }

    exitProgram(ctx) {
        this.wat += ")";
    }

    //DATA TYPES

    enterInteger(ctx) {
        //put instruction for 32bit integer on stack
        this.wat += "i32.const " + ctx.getText() + "\n";
        this.bodySection.push(0x41);

        //put the integer on stack
        this.bodySection = this.bodySection.concat(this.getLEB128(ctx.getText()));
        this.typeStack.push(Types.Int);
    }

    enterLong(ctx) {
        //put instruction for 64bit integer on stack
        this.wat += "i64.const " + ctx.getText().replace("L", "") + "\n";
        this.bodySection.push(0x42);

        //put the long on stack
        this.bodySection = this.bodySection.concat(this.getLEB128(parseInt(ctx.getText())));
        this.typeStack.push(Types.Long);
    }

    enterFloat(ctx) {
        //put instruction for 32bit float on stack
        let text = ctx.getText().replace("F", "");
        this.wat += "f32.const " + text + "\n";

        //put the float on stack
        this.bodySection.push(0x43);
        this.bodySection = this.bodySection.concat([].slice.call(this.getFloat32(text)));
        this.typeStack.push(Types.Float);
    }

    enterDouble(ctx) {
        //put instruction for 64bit float on stack
        this.wat += "f64.const " + ctx.getText() + "\n";
        this.bodySection.push(0x44);

        //put the double on stack
        this.bodySection = this.bodySection.concat([].slice.call(this.getFloat64(ctx.getText())));
        this.typeStack.push(Types.Double);
    }

    enterBoolean(ctx) {
        //switch atomar values to 0/1
        let value = -1;
        switch (ctx.getText()) {
            case "true":
                value = 1;
                break;
            case "false":
                value = 0;
                break;
        }

        //put instruction for boolean on stack
        this.wat += "i32.const " + value + "\n";
        this.bodySection.push(0x41);

        //put the boolean on stack
        this.bodySection.push(value);
        this.typeStack.push(Types.Boolean);
    }

    // VARIABLES / PARAMETERS

    enterVariable(ctx) {
        //put variable on type stack
        this.typeStack.push(this.getVarType(ctx.varName.text));
        //put instrunctino to get a local variable on stack
        this.wat += "get_local " + this.getVarIndex(ctx.varName.text) + "\n";
        this.bodySection.push(0x20);

        //put var index on stack
        this.bodySection.push(this.getVarIndex(ctx.varName.text));
    }

    enterVarDeclaration(ctx) {
        //save new variable
        this.variables.get(this.currentFunc).set(ctx.varName.text, [this.variables.get(this.currentFunc).size, this.getTypeObject(ctx.type.text), false]);
    }

    exitVarDeclaration(ctx) {
        //save value if it already has been initialized
        if (ctx.expr != null)
            this.exitAssignment(ctx);
    }

    exitFunctionParameter(ctx) {
        //save new variable
        this.variables.get(this.currentFunc).set(ctx.varName.text, [this.variables.get(this.currentFunc).size, this.getTypeObject(ctx.type.text), true]);
    }

    exitAssignment(ctx) {
        if (this.typeStack.pop() != this.getVarType(ctx.varName.text))
            throw("Assigning wrong datatype. Expected: " + this.getVarType(ctx.varName.text).string);
        this.wat += "set_local " + this.getVarIndex(ctx.varName.text) + "\n";
        this.bodySection.push(0x21);
        this.bodySection.push(this.getVarIndex(ctx.varName.text));
    }

    //MATHEMATICAL OPERATIONS

    exitDiv(ctx) {
        //check if both operands have the same type
        let type = this.typeStack.pop();
        if (type == this.typeStack.pop()) {
            //put instruction for determined type on stack
            switch (type) {
                case Types.Int:
                    this.wat += type.wat + ".div_s\n";
                    this.bodySection.push(0x6d);
                    break;
                case Types.Long:
                    this.wat += type.wat + ".div_s\n";
                    this.bodySection.push(0x7f);
                    break;
                case Types.Float:
                    this.wat += type.wat + ".div\n";
                    this.bodySection.push(0x95);
                    break;
                case Types.Double:
                    this.wat += type.wat + ".div\n";
                    this.bodySection.push(0xa3);
                    break;
            }
            //result will be the same type as input
            this.typeStack.push(type);
        } else {
            throw("Division of two non-equal types!");
        }
    }

    exitMult(ctx) {
        let type = this.typeStack.pop();
        if (type == this.typeStack.pop()) {
            //put instruction for determined type on stack
            switch (type) {
                case Types.Int:
                    this.wat += type.wat + ".mul\n";
                    this.bodySection.push(0x6c);
                    break;
                case Types.Long:
                    this.wat += type.wat + ".mul\n";
                    this.bodySection.push(0x7e);
                    break;
                case Types.Float:
                    this.wat += type.wat + ".mul\n";
                    this.bodySection.push(0x94);
                    break;
                case Types.Double:
                    this.wat += type.wat + ".mul\n";
                    this.bodySection.push(0xa2);
                    break;
            }
            //result will be the same type as input
            this.typeStack.push(type);
        } else {
            throw("Multiplication of two non-equal types!");
        }
    }

    exitPlus(ctx) {
        let type = this.typeStack.pop();
        if (type == this.typeStack.pop()) {
            //put instruction for determined type on stack
            switch (type) {
                case Types.Int:
                    this.wat += type.wat + ".add\n";
                    this.bodySection.push(0x6a);
                    break;
                case Types.Long:
                    this.wat += type.wat + ".add\n";
                    this.bodySection.push(0x7c);
                    break;
                case Types.Float:
                    this.wat += type.wat + ".add\n";
                    this.bodySection.push(0x92);
                    break;
                case Types.Double:
                    this.wat += type.wat + ".add\n";
                    this.bodySection.push(0xa0);
                    break;
            }
            //result will be the same type as input
            this.typeStack.push(type);
        } else {
            throw("Addition of two non-equal types!");
        }
    }

    exitMinus(ctx) {
        let type = this.typeStack.pop();
        if (type == this.typeStack.pop()) {
            //put instruction for determined type on stack
            switch (type) {
                case Types.Int:
                    this.wat += type.wat + ".sub\n";
                    this.bodySection.push(0x6b);
                    break;
                case Types.Long:
                    this.wat += type.wat + ".sub\n";
                    this.bodySection.push(0x7d);
                    break;
                case Types.Float:
                    this.wat += type.wat + ".sub\n";
                    this.bodySection.push(0x93);
                    break;
                case Types.Double:
                    this.wat += type.wat + ".sub\n";
                    this.bodySection.push(0xa1);
                    break;
            }
            //result will be the same type as input
            this.typeStack.push(type);
        } else {
            throw("Subtraction of two non-equal types!");
        }
    }

    // PRE / POST INCREMENTATION / DECREMENTATION

    exitPreDecrement(ctx) {
        this.wat += "get_local " + this.getVarIndex(ctx.varName.text) + "\n" +
            "i32.const 1\n" +
            "i32.sub\n" +
            "tee_local " + this.getVarIndex(ctx.varName.text) + "\n";
        this.bodySection.push(0x20, this.getVarIndex(ctx.varName.text), 0x41, 0x01, 0x6b, 0x22, this.getVarIndex(ctx.varName.text));
    }

    exitPreIncrement(ctx) {
        this.wat += "get_local " + this.getVarIndex(ctx.varName.text) + "\n" +
            "i32.const 1\n" +
            "i32.add\n" +
            "tee_local " + this.getVarIndex(ctx.varName.text) + "\n";
        this.bodySection.push(0x20, this.getVarIndex(ctx.varName.text), 0x41, 0x01, 0x6a, 0x22, this.getVarIndex(ctx.varName.text));
    }

    exitPostDecrement(ctx) {
        this.wat += "get_local " + this.getVarIndex(ctx.varName.text) + "\n" +
            "get_local " + this.getVarIndex(ctx.varName.text) + "\n" +
            "i32.const 1\n" +
            "i32.sub\n" +
            "set_local " + this.getVarIndex(ctx.varName.text) + "\n";
        this.bodySection.push(0x20, this.getVarIndex(ctx.varName.text), 0x20, this.getVarIndex(ctx.varName.text), 0x41, 0x01, 0x6b, 0x21, this.getVarIndex(ctx.varName.text));
    }

    exitPostIncrement(ctx) {
        this.wat += "get_local " + this.getVarIndex(ctx.varName.text) + "\n" +
            "get_local " + this.getVarIndex(ctx.varName.text) + "\n" +
            "i32.const 1\n" +
            "i32.add\n" +
            "set_local " + this.getVarIndex(ctx.varName.text) + "\n";
        this.bodySection.push(0x20, this.getVarIndex(ctx.varName.text), 0x20, this.getVarIndex(ctx.varName.text), 0x41, 0x01, 0x6a, 0x21, this.getVarIndex(ctx.varName.text));
    }

    //COMPARE OPERATIONS

    exitLT(ctx) {
        let type = this.typeStack.pop();
        if (type == this.typeStack.pop()) {
            //put instruction for determined type on stack
            switch (type) {
                case Types.Int:
                    this.wat += type.wat + ".lt_s\n";
                    this.bodySection.push(0x48);
                    break;
                case Types.Long:
                    this.wat += type.wat + ".lt_s\n";
                    this.bodySection.push(0x53);
                    break;
                case Types.Float:
                    this.wat += type.wat + ".lt\n";
                    this.bodySection.push(0x3f);
                    break;
                case Types.Double:
                    this.wat += type.wat + ".lt\n";
                    this.bodySection.push(0x63);
                    break;
            }
            //result will be boolean
            this.typeStack.push(Types.Boolean);
        } else {
            throw("Comparison of two non-equal types!");
        }
    }

    exitLEQ(ctx) {
        let type = this.typeStack.pop();
        if (type == this.typeStack.pop()) {
            //put instruction for determined type on stack
            switch (type) {
                case Types.Int:
                    this.wat += type.wat + ".le_s\n";
                    this.bodySection.push(0x4c);
                    break;
                case Types.Long:
                    this.wat += type.wat + ".le_s\n";
                    this.bodySection.push(0x57);
                    break;
                case Types.Float:
                    this.wat += type.wat + ".le\n";
                    this.bodySection.push(0x5f);
                    break;
                case Types.Double:
                    this.wat += type.wat + ".le\n";
                    this.bodySection.push(0x65);
                    break;
            }
            //result will be boolean
            this.typeStack.push(Types.Boolean);
        } else {
            throw("Comparison of two non-equal types!");
        }
    }

    exitGT(ctx) {
        let type = this.typeStack.pop();
        if (type == this.typeStack.pop()) {
            //put instruction for determined type on stack
            switch (type) {
                case Types.Int:
                    this.wat += type.wat + ".gt_s\n";
                    this.bodySection.push(0x4a);
                    break;
                case Types.Long:
                    this.wat += type.wat + ".gt_s\n";
                    this.bodySection.push(0x55);
                    break;
                case Types.Float:
                    this.wat += type.wat + ".gt\n";
                    this.bodySection.push(0x5e);
                    break;
                case Types.Double:
                    this.wat += type.wat + ".gt\n";
                    this.bodySection.push(0x64);
                    break;
            }
            //result will be boolean
            this.typeStack.push(Types.Boolean);
        } else {
            throw("Comparison of two non-equal types!");
        }
    }

    exitGEQ(ctx) {
        let type = this.typeStack.pop();
        if (type == this.typeStack.pop()) {
            //put instruction for determined type on stack
            switch (type) {
                case Types.Int:
                    this.wat += type.wat + ".ge_s\n";
                    this.bodySection.push(0x7e);
                    break;
                case Types.Long:
                    this.wat += type.wat + ".ge_s\n";
                    this.bodySection.push(0x59);
                    break;
                case Types.Float:
                    this.wat += type.wat + ".ge\n";
                    this.bodySection.push(0x60);
                    break;
                case Types.Double:
                    this.wat += type.wat + ".ge\n";
                    this.bodySection.push(0x66);
                    break;
            }
            //result will be boolean
            this.typeStack.push(Types.Boolean);
        } else {
            throw("Comparison of two non-equal types!");
        }
    }

    exitEQ(ctx) {
        let type = this.typeStack.pop();
        if (type == this.typeStack.pop()) {
            //put instruction for determined type on stack
            switch (type) {
                case Types.Boolean:
                    this.wat += type.wat + ".eq\n";
                    this.bodySection.push(0x46);
                    break;
                case Types.Int:
                    this.wat += type.wat + ".eq\n";
                    this.bodySection.push(0x46);
                    break;
                case Types.Long:
                    this.wat += type.wat + ".eq\n";
                    this.bodySection.push(0x51);
                    break;
                case Types.Float:
                    this.wat += type.wat + ".eq\n";
                    this.bodySection.push(0x5b);
                    break;
                case Types.Double:
                    this.wat += type.wat + ".eq\n";
                    this.bodySection.push(0x61);
                    break;
            }
            //result will be boolean
            this.typeStack.push(Types.Boolean);
        } else {
            throw("Comparison of two non-equal types!");
        }
    }

    exitNEQ(ctx) {
        let type = this.typeStack.pop();
        if (type == this.typeStack.pop()) {
            //put instruction for determined type on stack
            switch (type) {
                case Types.Boolean:
                    this.wat += type.wat + ".ne\n";
                    this.bodySection.push(0x47);
                    break;
                case Types.Int:
                    this.wat += type.wat + ".ne\n";
                    this.bodySection.push(0x47);
                    break;
                case Types.Long:
                    this.wat += type.wat + ".ne\n";
                    this.bodySection.push(0x52);
                    break;
                case Types.Float:
                    this.wat += type.wat + ".ne\n";
                    this.bodySection.push(0x5c);
                    break;
                case Types.Double:
                    this.wat += type.wat + ".ne\n";
                    this.bodySection.push(0x62);
                    break;
            }
            //result will be boolean
            this.typeStack.push(Types.Boolean);
        } else {
            throw("Comparison of two non-equal types!");
        }
    }

    //LOGIC OPERATIONS

    exitLAND(ctx) {
        this.wat += this.typeStack.pop().wat + ".and\n";
        this.typeStack.pop();

        //result will be boolean
        this.bodySection.push(0x71);
        this.typeStack.push(Types.Boolean)
    }

    exitLOR(ctx) {
        this.wat += this.typeStack.pop().wat + ".or\n";
        this.typeStack.pop();

        //result will be boolean
        this.bodySection.push(0x72);
        this.typeStack.push(Types.Boolean)
    }

    // FUNCTION DEFINITION / FUNCTION CALL

    enterFunctionDefinition(ctx) {
        //assume it will be exported / function is public
        this.exportCounter++;

        //this will be the current function for var scope
        this.currentFunc = ctx.funcName.text;

        //assign a new number
        this.functions.set(ctx.funcName.text, this.functions.size);

        //replace placeholders calling this function with its id
        for (let i = 0; i < this.funcReplace.length; i++) {
            if (this.bodySection[this.funcReplace[i]] == this.currentFunc) {
                this.bodySection[this.funcReplace[i]] = this.functions.get(this.bodySection[this.funcReplace[i]]);
                this.funcReplace.splice(i, 1);
            }
        }

        //get a new map to store vars
        this.variables.set(this.currentFunc, new Map());

        //export the function
        this.wat += "(export \"" + this.currentFunc + "\" (func $" + this.currentFunc + "))\n" +
            "(func $" + this.currentFunc + " (param " + this.currentFunc + ") (result " + this.currentFunc + ")\n" +
            "(local " + this.currentFunc + ")\n";
        this.exportSection.push(this.currentFunc.length);
        this.exportSection = this.exportSection.concat([].slice.call(this.getUInt8(this.currentFunc)));
        this.exportSection.push(0x00, this.exportCounter - 1);
        this.exportSection[2] = this.exportCounter;
        this.exportSection[1] = this.exportSection.length - 2;

        //init function body
        this.bodySection.push(0x00, 0x00); //temporary length
        this.bodySectionlength = this.bodySection.length;

        //init block containing function
        this.wat += "block $b0\n";
        this.bodySection.push(0x02, 0x40); //block void
    }

    exitFunctionDefinition(ctx) {
        let type = this.getTypeObject(ctx.type.text);

        //end the block containing the function
        this.wat += "end\n";
        this.bodySection.push(0x0b);

        //put pseudo value to stack
        this.wat += type.wat + ".const 0\n";
        switch(type) {
        case Types.Boolean:
            this.bodySection.push(0x41,0x00);
            break;
        case Types.Int:
            this.bodySection.push(0x41,0x00);
            break;
        case Types.Long:
            this.bodySection.push(0x42,0x00);
            break;
        case Types.Float:
            this.bodySection.push(0x43,0x00,0x00,0x00,0x00);
            break;
        case Types.Double:
            this.bodySection.push(0x44,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00);
            break;
        }

        //end the function
        this.wat += ")\n";
        this.bodySection.push(0x0b);

        //preparations for fixing function body
        let local_wat = "";
        let local_wasm = [];
        let params_wat = "";
        let params_wasm = [];

        //inserting used parameters in the correct sections
        this.variables.get(ctx.funcName.text).forEach(function (value, key, map) {
            if (!value[2]) {
                local_wat += ("(local " + value[1].wat + ")\n");
                local_wasm.push(1, value[1].wasm);
            } else {
                params_wat += " (param " + value[1].wat + ")";
                params_wasm.push(value[1].wasm);
            }
        });
        this.bodySection[this.bodySectionlength - 1] = (local_wasm.length / 2);
        for (let i = 0; i < local_wasm.length; i++) {
            this.bodySection.splice(this.bodySectionlength + i, 0, local_wasm[i]);
        }
        for (let i = 0; i < this.funcReplace.length; i++)
            this.funcReplace[i] = this.funcReplace[i] + local_wasm.length;

        this.typeSection[2]++;
        this.functionSection[2]++;
        this.codeSection[2]++;
        this.typeSection.push(0x60, //func
            params_wasm.length); //number of parameters
        this.typeSection = this.typeSection.concat(params_wasm);
        this.functionSection.push(this.functionSection[2] - 1);

        if (ctx.type) {
            this.typeSection.push(0x01, type.wasm);
            this.wat = this.wat.replace("(result " + this.currentFunc + ")", "(result " + type.wat + ")");
        } else {
            this.typeSection.push(0x00);
            this.wat = this.wat.replace("(result " + this.currentFunc + ")", "");

        }

        this.wat = this.wat.replace("(param " + this.currentFunc + ")", params_wat);
        this.wat = this.wat.replace("(local " + this.currentFunc + ")\n", local_wat);

        //fixup function body size
        this.bodySection[this.bodySectionlength - 2] = this.bodySection.length - this.bodySectionlength + 1;
    }

    exitFunctionCall(ctx) {
        //bring the call to the stack
        this.wat += "call $" + ctx.funcName.text + "\n";
        this.bodySection.push(0x10, ctx.funcName.text);

        //function name has to be replaced afterwards
        this.funcReplace.push(this.bodySection.length - 1);
    }

    exitReturn(ctx) {
        this.wat += "return\n";
        this.bodySection.push(0x0f);
    }

    // IF/ELSE STATEMENTS

    enterTrueBlock(ctx) {
        if (this.typeStack.pop() != Types.Boolean)
            throw("Non expected data type. Expected: " + Types.Boolean.string)
        //branch if integer on stack indicates so
        this.wat += "if\n";
        this.bodySection.push(0x04, 0x40);
    }

    enterFalseBlock(ctx) {
        this.wat += "else\n";
        this.bodySection.push(0x05);
    }

    exitIfStatement(ctx) {
        this.wat += "end\n";
        this.bodySection.push(0x0b);
    }

    // LOOPS

    enterLoopBool(ctx) {
        this.temp_wat = this.wat;
        this.wat = "";
        this.temp_wasm = this.bodySection;
        this.bodySection = [];
    }

    exitLoopBool(ctx) {
        //cache wat/wasm from before to save boolean condition
        this.loophelper_wat.push(this.wat);
        this.loophelper_wasm.push(this.bodySection);
        this.wat = this.temp_wat + this.loophelper_wat[this.loophelper_wat.length - 1];
        this.bodySection = this.temp_wasm.concat(this.loophelper_wasm[this.loophelper_wasm.length - 1]);
        this.temp_wat = "";
        this.temp_wasm = [];
        //evaluate boolean condition to see if there is need to branch
        this.wat += "i32.eqz\n" +
            "br_if $b0\n" +
            "loop $l0\n";
        this.bodySection.push(0x45, 0x0d, 0x00, 0x03, 0x40);
    }

    // DO...WHILE LOOP

    enterDoWhileLoop(ctx) {
        this.wat += "loop $l0\n";
        this.bodySection.push(0x03, 0x40);
    }

    exitDoWhileLoop(ctx) {
        this.wat += "br_if $l0\n" +
            "end\n";
        this.bodySection.push(0x0d, 0x00, 0x0b);
    }

    // WHILE LOOP

    enterWhileLoop(ctx) {
        this.wat += "block $b0\n";
        this.bodySection.push(0x02, 0x40);
    }

    exitWhileLoop(ctx) {
        //at the end of the loop look if we run through it again
        this.wat += this.loophelper_wat.pop();
        this.wat += "br_if $l0\n" +
            "end\n" +
            "end\n";
        this.bodySection = this.bodySection.concat(this.loophelper_wasm.pop());
        this.bodySection.push(0x0d, 0x00, 0x0b, 0x0b);
    }

    // FOR LOOP

    enterForLoop(ctx) {
        this.wat += "block $b0\n";
        this.bodySection.push(0x02, 0x40);
    }

    exitForLoop(ctx) {
        //drop the counting var from stack
        this.wat += this.loophelper_wat.pop() + "drop\n";
        //at the end of the loop look if we run through it again
        this.wat += this.loophelper_wat.pop();
        this.wat += "br_if $l0\n" +
            "end\n" +
            "end\n";
        this.bodySection = this.bodySection.concat(this.loophelper_wasm.pop());
        this.bodySection.push(0x1a);
        this.typeStack.pop();
        this.bodySection = this.bodySection.concat(this.loophelper_wasm.pop());
        this.bodySection.push(0x0d, 0x00, 0x0b, 0x0b);
    }

    enterForExpression(ctx) {
        this.temp_wat = this.wat;
        this.wat = "";
        this.temp_wasm = this.bodySection;
        this.bodySection = [];
    }

    exitForExpression(ctx) {
        this.loophelper_wat.push(this.wat);
        this.loophelper_wasm.push(this.bodySection);
        this.wat = this.temp_wat;
        this.bodySection = this.temp_wasm;
        this.temp_wat = "";
        this.temp_wasm = [];
    }

    //MEMORY

    exitMemAssignment(ctx) {
        this.useMemory = true;
        let type = this.typeStack.pop();
        if (this.typeStack.pop() == Types.Int) {
            switch (type) {
                case Types.Boolean:
                    this.wat += type.wat + ".store8\n";
                    this.bodySection.push(0x3a);
                    break;
                case Types.Int:
                    this.wat += type.wat + ".store\n";
                    this.bodySection.push(0x36);
                    break;
                case Types.Long:
                    this.wat += type.wat + ".store\n";
                    this.bodySection.push(0x37);
                    break;
                case Types.Float:
                    this.wat += type.wat + ".store\n";
                    this.bodySection.push(0x38);
                    break;
                case Types.Double:
                    this.wat += type.wat + ".store\n";
                    this.bodySection.push(0x39);
                    break;
            }
            this.bodySection.push(0x02, 0x00);
        } else {
            throw("Invalid data type for memory index")
        }
    }

    exitMemory(ctx) {
        this.useMemory = true;
        let type = Types.Int;
        if (ctx.parentCtx.varName != undefined)
            type = this.getVarType(ctx.parentCtx.varName.text);
        if (this.typeStack.pop() == Types.Int) {
            switch (type) {
                case Types.Boolean:
                    this.wat += type.wat + ".load8\n";
                    this.bodySection.push(0x2f);
                    break;
                case Types.Int:
                    this.wat += type.wat + ".load\n";
                    this.bodySection.push(0x28);
                    break;
                case Types.Long:
                    this.wat += type.wat + ".load\n";
                    this.bodySection.push(0x29);
                    break;
                case Types.Float:
                    this.wat += type.wat + ".load\n";
                    this.bodySection.push(0x2a);
                    this.typeStack.push(Types.Float);
                    break;
                case Types.Double:
                    this.wat += type.wat + ".load\n";
                    this.bodySection.push(0x2b);
                    break;
            }
            this.typeStack.push(type);
            this.bodySection.push(0x02, 0x00);
        } else {
            throw("Invalid data type for memory index")
        }
    }

    //HELP FUNCTIONS

    /**
     * Converts a String with a DataType into an object
     * @param type
     * @returns {DataType}
     */
    getTypeObject(type) {
        switch (type) {
            case "Boolean":
                return Types.Boolean;
                break;
            case "Int":
                return Types.Int;
                break;
            case "Long":
                return Types.Long;
                break;
            case "Float":
                return Types.Float;
                break;
            case "Double":
                return Types.Double;
                break;
        }
    }

    /**
     * Convert strings to ASCII characters (for method names)
     * @param string to be converted
     * @returns {Uint8Array} with converted string
     */
    getUInt8(string) {
        return new TextEncoder("utf-8").encode(string);
    }

    /**
     * Converts an int and long to leb128 format as its required by wasm
     * @param int to be converted
     * @returns {Array} value of int in leb128
     */
    getLEB128(int) {
        let size = Math.ceil(Math.log2(int.length));
        let leb = [];
        let running = true;
        while (running) {
            let temp = int & 127;
            if (int < 0)
                temp = temp | (-(1 << (size - 7)));
            int = int >> 7;
            if ((int == 0 && ((temp & 64) == 0)) || ((int == -1 && ((temp & 64) == 64)))) {
                leb.push(temp);
                running = false;
            }
            else
                leb.push(temp | 128);
        }
        return leb;
    }

    getFloat32(float) {
        return new Uint8Array(Float32Array.of(float).buffer);
    }

    getFloat64(float) {
        return new Uint8Array(Float64Array.of(float).buffer);
    }

    getVarIndex(ctx) {
        return this.variables.get(this.currentFunc).get(ctx)[0];
    }

    getVarType(ctx) {
        return this.variables.get(this.currentFunc).get(ctx)[1];
    }

    /**
     * Constructs wasm code by concating all single parts
     * @returns {number[]} wasm code generated through compiling
     */
    getWasm() {
        this.typeSection[1] = this.typeSection.length - 2; //set section length


        if(this.useMemory)
            this.importSection.push(
                //import memory
                0x02, //string length
                0x6a, 0x73, //"js" in hex
                0x03, //string length
                0x6d, 0x65, 0x6d, //"mem" in hex
                0x02, //import kind
                0x00, //limits: flags
                0x01 //limits: initial
            );
        this.importSection[1] = this.importSection.length -2;

        this.functionSection[1] = this.functionSection.length - 2; //set section length

        this.codeSection = this.codeSection.concat(this.bodySection); //body section is part of the code section
        this.codeSection[1] = this.codeSection.length - 2; //set section length

        //concat all parts to a wasm binary
        return this.binaryMagic
            .concat(this.typeSection)
            .concat(this.importSection)
            .concat(this.functionSection)
            .concat(this.exportSection)
            .concat(this.codeSection);
    }
}

module.exports = MyVisitor;