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
        this.usages = [];
        this.binaryMagic = [
            0x00, 0x61, 0x73, 0x6d, //WASM Binary Magic
            0x01, 0x00, 0x00, 0x00, //WASM Version
        ];
        this.typeSection = [
            0x01, //section code
            //section size calculated afterwards
            0x04, //num types (will get increased when new type added)
            //int
            0x60,
            0x01,
            0x7f,
            0x00,
            //long
            0x60,
            0x01,
            0x7e,
            0x00,
            //float
            0x60,
            0x01,
            0x7d,
            0x00,
            //double
            0x60,
            0x01,
            0x7c,
            0x00
        ];
        this.importSection = [
            0x02, //section code
            //section size calculated afterwards
            0x04, //number of imports
            //int
            0x05,
            0x70, 0x72, 0x69, 0x6e, 0x74,
            0x03,
            0x69, 0x6e, 0x74,
            0x00,
            0x00,
            //long
            0x05,
            0x70, 0x72, 0x69, 0x6e, 0x74,
            0x04,
            0x6c, 0x6f, 0x6e, 0x67,
            0x00,
            0x01,
            //float
            0x05,
            0x70, 0x72, 0x69, 0x6e, 0x74,
            0x05,
            0x66, 0x6c, 0x6f, 0x61, 0x74,
            0x00,
            0x02,
            //double
            0x05,
            0x70, 0x72, 0x69, 0x6e, 0x74,
            0x06,
            0x64, 0x6f, 0x75, 0x62, 0x6c, 0x65,
            0x00,
            0x03
        ];
        this.usages["memory"] = false;
        this.functionSection = [
            0x03, //section code
            //section size calculated afterwards
            0x00 //number of functions
        ];
        this.bodySection = [];
        this.codeSection = [
            0x0a, //section code
            //section size calculated afterwards
            0x00, //number of functions inserted afterwards
        ];

        //this map will contain maps with values of specified functions
        this.values = new Map();

        //this map will contain maps with variables of specified functions
        this.variables = new Map();

        //this map will contain global variables
        this.globalVariables = new Map();

        this.currentFunc = "";

        this.globalSection = [
            0x06, //section code
            //section size calculated afterwards
            0x00 //number of global vars
        ];

        this.exportCounter = 0;
        this.exportSection = [0x07, 0x00];

        //temporary variable for fixup of length values
        this.bodySectionlength = 0;
        this.functions = new Map();
        this.functions.set("printint", 0);
        this.functions.set("printlong", 1);
        this.functions.set("printfloat", 2);
        this.functions.set("printdouble", 3);
        this.funcReplace = [];

        //type stack to ensure type safeness
        this.typeStack = [];

        //cache for temporary instruction storing
        this.temp_wat = "";
        this.temp_wasm = [];

        //store boolean condition of loops
        this.loophelper_wat = [];
        this.loophelper_wasm = [];

        //automatic glue and export generation
        this.glue = {
            print: {int: console.log, long: console.log, float: console.log, double: console.log}
        };
        this.exportCode = "";
    }

    enterProgram(ctx) {
        this.wat += "(module\n" +
            "(import \"print\" \"int\" (func $printint (param i32)))\n" +
            "(import \"print\" \"long\" (func $printlong (param i64)))\n" +
            "(import \"print\" \"float\" (func $printfloat (param f32)))\n" +
            "(import \"print\" \"double\" (func $printdouble (param f64)))\n" +
            "(memory (import \"js\" \"mem\") 1)\n";
    }

    exitProgram(ctx) {
        this.wat += ")";
    }

    //DATA TYPES

    enterInteger(ctx) {
        //put instruction for 32bit integer on stack
        this.wat += "i32.const " + ctx.getText() + "\n";

        //put the integer on stack
        if(this.currentFunc != "") {
            this.bodySection.push(0x41);
            this.bodySection = this.bodySection.concat(this.getSignedLEB128(ctx.getText()));
            this.typeStack.push(Types.Int);
        } else {
            this.globalSection.push(0x41);
            this.globalSection = this.globalSection.concat(this.getSignedLEB128(ctx.getText()));
        }
    }

    enterLong(ctx) {
        //put instruction for 64bit integer on stack
        this.wat += "i64.const " + ctx.getText().replace("L", "") + "\n";

        //put the long on stack
        if(this.currentFunc != "") {
            this.bodySection.push(0x42);
            this.bodySection = this.bodySection.concat(this.getSignedLEB128(ctx.getText()));
            this.typeStack.push(Types.Long);
        } else {
            this.globalSection.push(0x42);
            this.globalSection = this.globalSection.concat(this.getSignedLEB128(ctx.getText()));
        }
    }

    enterFloat(ctx) {
        //put instruction for 32bit float on stack
        let text = ctx.getText().replace("F", "");
        this.wat += "f32.const " + text + "\n";

        //put the float on stack
        if(this.currentFunc != "") {
            this.bodySection.push(0x43);
            this.bodySection = this.bodySection.concat([].slice.call(this.getFloat32(text)));
            this.typeStack.push(Types.Float);
        } else {
            this.globalSection.push(0x43);
            this.globalSection = this.globalSection.concat([].slice.call(this.getFloat32(text)));
        }
    }

    enterDouble(ctx) {
        //put instruction for 64bit float on stack
        this.wat += "f64.const " + ctx.getText() + "\n";

        //put the double on stack
        if(this.currentFunc != "") {
            this.bodySection.push(0x44);
            this.bodySection = this.bodySection.concat([].slice.call(this.getFloat64(ctx.getText())));
            this.typeStack.push(Types.Double);
        } else {
            this.globalSection.push(0x44);
            this.globalSection = this.globalSection.concat([].slice.call(this.getFloat64(ctx.getText())));
        }
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
    enterIdent(ctx) {
        if (this.values.get(this.currentFunc).has(ctx.varName.text))
            this.enterValue(ctx);
        else
            this.enterVariable(ctx);
    }

    enterValue(ctx) {
        let type = this.values.get(this.currentFunc).get(ctx.varName.text)[1];
        let value = this.values.get(this.currentFunc).get(ctx.varName.text)[0];
        this.typeStack.push(type);
        switch (type) {
            case Types.Int:
                this.bodySection.push(0x41);
                this.bodySection = this.bodySection.concat(this.getSignedLEB128(value));
                break;
            case Types.Long:
                this.bodySection.push(0x42);
                this.bodySection = this.bodySection.concat(this.getSignedLEB128(value));
                break;
            case Types.Float:
                this.bodySection = this.bodySection.concat([].slice.call(this.getFloat32(text)));
                break;
            case Types.Double:
                this.bodySection = this.bodySection.concat([].slice.call(this.getFloat64(text)));
                break;
        }
        this.wat += type.wat + ".const " + value + "\n";
    }

    enterVariable(ctx) {
        //put variable on type stack
        this.typeStack.push(this.getVarType(ctx.varName.text));
        //put instruction to get a local/global variable on stack
        if(this.currentFunc != null && this.variables.get(this.currentFunc).has(ctx.varName.text)) {
            this.wat += "get_local " + this.getVarIndex(ctx.varName.text) + "\n";
            this.bodySection.push(0x20);
        } else {
            this.wat += "get_global " + this.getVarIndex(ctx.varName.text) + "\n";
            this.bodySection.push(0x23);
        }

        //put var index on stack
        this.bodySection.push(this.getVarIndex(ctx.varName.text));
    }

    enterValDeclaration(ctx) {
        this.values.get(this.currentFunc).set(ctx.valName.text, [ctx.value.text, this.getTypeObject(ctx.type.text)]);
    }

    enterVarDeclaration(ctx) {
        //save new variable
        this.variables.get(this.currentFunc).set(ctx.varName.text, [this.variables.get(this.currentFunc).size, this.getTypeObject(ctx.type.text), false]);
    }

    exitVarDeclaration(ctx) {
        this.exitAssignment(ctx);
    }

    enterGlobalVarDeclaration(ctx) {
        let type = this.getTypeObject(ctx.type.text);
        //save new global variable
        this.globalVariables.set(ctx.varName.text, [this.globalVariables.size, type, false]);

        this.globalSection[1]++;
        this.globalSection.push(type.wasm, 0x01); //type and mutability
        this.wat += "(global (mut i32) (";

    }

    exitGlobalVarDeclaration(ctx) {
        this.globalSection.push(0x0b);
        this.wat += "))\n";
    }

    exitFunctionParameter(ctx) {
        //save new variable
        this.variables.get(this.currentFunc).set(ctx.varName.text, [this.variables.get(this.currentFunc).size, this.getTypeObject(ctx.type.text), true]);
    }

    exitAssignment(ctx) {
        let type = this.typeStack.pop();
        if(this.variables.get(this.currentFunc).has(ctx.varName.text)) {
            if (type != this.getVarType(ctx.varName.text))
                throw("Assigning wrong datatype. Expected: " + this.getVarType(ctx.varName.text).string) + ", Found: " + type.string;
            this.wat += "set_local " + this.getVarIndex(ctx.varName.text) + "\n";
            this.bodySection.push(0x21);
        } else {
            this.wat += "set_global " + this.getVarIndex(ctx.varName.text) + "\n";
            this.bodySection.push(0x24);
        }
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
        this.typeStack.push(Types.Int);
    }

    exitPostIncrement(ctx) {
        this.wat += "get_local " + this.getVarIndex(ctx.varName.text) + "\n" +
            "get_local " + this.getVarIndex(ctx.varName.text) + "\n" +
            "i32.const 1\n" +
            "i32.add\n" +
            "set_local " + this.getVarIndex(ctx.varName.text) + "\n";
        this.bodySection.push(0x20, this.getVarIndex(ctx.varName.text), 0x20, this.getVarIndex(ctx.varName.text), 0x41, 0x01, 0x6a, 0x21, this.getVarIndex(ctx.varName.text));
        this.typeStack.push(Types.Int);
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
                    this.bodySection.push(0x5d);
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
        let type = this.typeStack.pop();
        if (type == this.typeStack.pop()) {
            //put instruction for determined type on stack
            switch (type) {
                case Types.Boolean:
                    this.wat += type.wat + ".and\n";
                    this.bodySection.push(0x71);
                    break;
                case Types.Int:
                    this.wat += type.wat + ".and\n";
                    this.bodySection.push(0x71);
                    break;
                case Types.Long:
                    this.wat += type.wat + ".and\n";
                    this.bodySection.push(0x83);
                    break;
            }
            //result will be boolean
            this.typeStack.push(Types.Boolean)
        } else {
            throw("Comparison of two non-equal types!");
        }
    }

    exitLOR(ctx) {
        let type = this.typeStack.pop();
        if (type == this.typeStack.pop()) {
            //put instruction for determined type on stack
            switch (type) {
                case Types.Boolean:
                    this.wat += type.wat + ".or\n";
                    this.bodySection.push(0x72);
                    break;
                case Types.Int:
                    this.wat += type.wat + ".or\n";
                    this.bodySection.push(0x72);
                    break;
                case Types.Long:
                    this.wat += type.wat + ".or\n";
                    this.bodySection.push(0x84);
                    break;
            }
            //result will be boolean
            this.typeStack.push(Types.Boolean)
        } else {
            throw("Comparison of two non-equal types!");
        }
    }

    // FUNCTION DEFINITION / FUNCTION CALL

    enterFunctionDefinition(ctx) {

        //this will be the current function for var scope
        this.currentFunc = ctx.funcName.text;

        //assign a new number
        this.functions.set(ctx.funcName.text, this.functions.size);

        //get a new map to store vars
        this.variables.set(this.currentFunc, new Map());
        this.values.set(this.currentFunc, new Map());


        //export the function
        if (ctx.modifier == null || ctx.modifier.text == "public") {
            this.exportCounter++;
            this.wat += "(export \"" + this.currentFunc + "\" (func $" + this.currentFunc + "))\n";
            this.exportSection.push(this.currentFunc.length);
            this.exportSection = this.exportSection.concat([].slice.call(this.getUInt8(this.currentFunc)));
            this.exportSection.push(0x00, this.typeSection[1]);
            this.exportSection[1] = this.exportCounter;
            this.exportCode += "" + this.currentFunc + " = wasmInstance.exports." + this.currentFunc + "; ";
        }

        this.wat +=  "(func $" + this.currentFunc + " (param " + this.currentFunc + ") (result " + this.currentFunc + ")\n" +
                     "(local " + this.currentFunc + ")\n";

        //init function body
        this.bodySection.push(0x00); //temporary length
        this.bodySectionlength = this.bodySection.length;

        //init block containing function
        this.wat += "block $b0\n";
        this.bodySection.push(0x02, 0x40); //block void
    }

    exitFunctionDefinition(ctx) {
        //replace placeholders calling this function with its id
        for (let i = 0; i < this.funcReplace.length; i++) {
            if (this.bodySection[this.funcReplace[i]] == this.currentFunc) {
                this.bodySection[this.funcReplace[i]] = this.functions.get(this.bodySection[this.funcReplace[i]]);
                this.funcReplace.splice(i, 1);
                i--;
            }
        }

        let type = null;

        //end the block containing the function
        this.wat += "end\n";
        this.bodySection.push(0x0b);

        //put pseudo value to stack
        if(ctx.type) {
            type = this.getTypeObject(ctx.type.text);
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

        this.typeSection[1]++;
        this.functionSection[1]++;
        this.codeSection[1]++;
        this.typeSection.push(0x60, //func
            params_wasm.length); //number of parameters
        this.typeSection = this.typeSection.concat(params_wasm);
        this.functionSection.push(this.typeSection[1] - 1);

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
        let newLength = this.getUnsignedLEB128(this.bodySection.length - this.bodySectionlength + 1);
        for (let i = 0; i < newLength.length; i++)
            this.bodySection.splice(this.bodySectionlength - 1 + i, 0, newLength[i]);
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
            throw("Non expected data type. Expected: " + Types.Boolean.string);
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
        this.usages["memory"] = true;
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
            throw(ctx.start.line + "Invalid data type for memory index")
        }
    }

    exitMemory(ctx) {
        this.usages["memory"] = true;
        let type = Types.Int;
        if (ctx.parentCtx.varName != undefined)
            type = this.getVarType(ctx.parentCtx.varName.text);
        else if (this.typeStack.length > 0)
            type = this.typeStack[this.typeStack.length - 2];
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

    // PRINTLN
    exitPrintln(ctx) {
        let type = this.typeStack.pop();
        switch(type) {
            case Types.Int:
                this.wat += "call $printint\n";
                this.bodySection.push(0x10, 0);
                break;
            case Types.Long:
                this.wat += "call $printlong\n";
                this.bodySection.push(0x10, 1);
                break;
            case Types.Float:
                this.wat += "call $printfloat\n";
                this.bodySection.push(0x10, 2);
                break;
            case Types.Double:
                this.wat += "call $printdouble\n";
                this.bodySection.push(0x10, 3);
                break;
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
    getSignedLEB128(int) {
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

    getUnsignedLEB128(int) {
        let leb = [];
        while (int) {
            let temp = int & 127;
            int = int >> 7;
            if (int)
                leb.push(temp | 128);
            else
                leb.push(temp);
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
        if(this.currentFunc != "" && this.variables.get(this.currentFunc).has(ctx))
            return this.variables.get(this.currentFunc).get(ctx)[0];
        return this.globalVariables.get(ctx)[0];
    }

    getVarType(ctx) {
        if(this.currentFunc != "" && this.variables.get(this.currentFunc).has(ctx))
            return this.variables.get(this.currentFunc).get(ctx)[1];
        return this.globalVariables.get(ctx)[1];
    }

    /**
     * Constructs wasm code by concating all single parts
     * @returns {Uint8Array} code constructed through compiling
     */
    getWasm() {
        if(this.usages["memory"]) {
            this.importSection[1]++;

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
        }

        //set section length
        let typeLength = this.getUnsignedLEB128(this.typeSection.length - 1);
        for (let i = 0; i < typeLength.length; i++)
            this.typeSection.splice(1 + i, 0, typeLength[i]);

        let importLength = this.getUnsignedLEB128(this.importSection.length - 1);
        for (let i = 0; i < importLength.length; i++)
            this.importSection.splice(1 + i, 0, importLength[i]);

        let functionLength = this.getUnsignedLEB128(this.functionSection.length - 1);
        for (let i = 0; i < functionLength.length; i++)
            this.functionSection.splice(1 + i, 0, functionLength[i]);

        let globalLength = this.getUnsignedLEB128(this.globalSection.length - 1);
        for (let i = 0; i < globalLength.length; i++)
            this.globalSection.splice(1 + i, 0, globalLength[i]);

        let exportLength = this.getUnsignedLEB128(this.exportSection.length - 1);
        for (let i = 0; i < exportLength.length; i++)
            this.exportSection.splice(1 + i, 0, exportLength[i]);

        this.codeSection = this.codeSection.concat(this.bodySection); //body section is part of the code section
        let codeLength = this.getUnsignedLEB128(this.codeSection.length - 1);
        for (let i = 0; i < codeLength.length; i++)
            this.codeSection.splice(1 + i, 0, codeLength[i]);

        //concat all parts to a wasm binary
        return new Uint8Array(this.binaryMagic
            .concat(this.typeSection)
            .concat(this.importSection)
            .concat(this.functionSection)
            .concat(this.globalSection)
            .concat(this.exportSection)
            .concat(this.codeSection));
    }
}

module.exports = MyVisitor;