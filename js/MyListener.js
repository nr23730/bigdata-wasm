const BigDataListener = require('../parser/BigDataListener').BigDataListener;

class DataType {
    constructor(wat, wasm) {
        this.wat = wat;
        this.wasm = wasm;
    }
}

const Types = {
    Boolean: new DataType("i32", 127),
    Int: new DataType("i32", 127),
    Long: new DataType("i64", 126),
    Float: new DataType("f32", 125),
    Double: new DataType("f64", 124)
};


class MyVisitor extends BigDataListener {

    constructor() {
        super();
        this.wat = "";
        this.binaryMagic = [
            0, 97, 115, 109, //WASM Binary Magic
            1, 0, 0, 0, //WASM Version
        ];
        this.typeSection = [
            1, //section code
            0, //section size calculated afterwards
            0, //num types (will get increased when new type added)
        ];
        this.functionSection = [
            3, //section code
            0, //section size calculated afterwards
            0 //number of functions
        ];
        this.bodySection = [];
        this.codeSection = [
            10, //section code
            0, //section size calculated afterwards
            0, //number of functions inserted afterwards
        ];
        this.variables = new Map();
        this.currentFunc = "";
        this.exportCounter = 0;
        this.exportSection = [7, 0, 0];
        this.bodySectionlength = 0;
        this.functions = new Map();
        this.funcReplace = [];
        this.typeStack = [];

    }

    enterInput(ctx) {
        this.wat += "(module\n";
    }

    exitInput(ctx) {
        console.log(this.funcReplace);
        for (var i = 0; i < this.funcReplace.length; i++) {
            console.log(this.bodySection[this.funcReplace[i]]);
            this.bodySection[this.funcReplace[i]] = this.functions.get(this.bodySection[this.funcReplace[i]]);
            console.log(this.bodySection[this.funcReplace[i]]);
        }
        this.wat += ")";
    }

    exitDiv(ctx) {
        var type = this.typeStack.pop();
        if (type == this.typeStack.pop()) {
            switch (type) {
                case Types.Int:
                    this.wat += type.wat + ".div_u\n";
                    this.bodySection.push(110);
                    break;
                case Types.Long:
                    this.wat += type.wat + ".div_u\n";
                    this.bodySection.push(128);
                    break;
                case Types.Float:
                    this.wat += type.wat + ".div\n";
                    this.bodySection.push(149);
                    break;
                case Types.Double:
                    this.wat += type.wat + ".div\n";
                    this.bodySection.push(163);
                    break;
            }
            this.typeStack.push(type);
        }
    }

    exitMult(ctx) {
        var type = this.typeStack.pop();
        if (type == this.typeStack.pop()) {
            switch (type) {
                case Types.Int:
                    this.wat += type.wat + ".mul\n";
                    this.bodySection.push(108);
                    break;
                case Types.Long:
                    this.wat += type.wat + ".mul\n";
                    this.bodySection.push(126);
                    break;
                case Types.Float:
                    this.wat += type.wat + ".mul\n";
                    this.bodySection.push(148);
                    break;
                case Types.Double:
                    this.wat += type.wat + ".mul\n";
                    this.bodySection.push(162);
                    break;
            }
            this.typeStack.push(type);
        }
    }

    exitPlus(ctx) {
        var type = this.typeStack.pop();
        if (type == this.typeStack.pop()) {
            switch (type) {
                case Types.Int:
                    this.wat += type.wat + ".add\n";
                    this.bodySection.push(106);
                    break;
                case Types.Long:
                    this.wat += type.wat + ".add\n";
                    this.bodySection.push(124);
                    break;
                case Types.Float:
                    this.wat += type.wat + ".add\n";
                    this.bodySection.push(146);
                    break;
                case Types.Double:
                    this.wat += type.wat + ".add\n";
                    this.bodySection.push(160);
                    break;
            }
            this.typeStack.push(type);
        }
    }

    exitMinus(ctx) {
        var type = this.typeStack.pop();
        if (type == this.typeStack.pop()) {
            switch (type) {
                case Types.Int:
                    this.wat += type.wat + ".sub\n";
                    this.bodySection.push(107);
                    break;
                case Types.Long:
                    this.wat += type.wat + ".sub\n";
                    this.bodySection.push(125);
                    break;
                case Types.Float:
                    this.wat += type.wat + ".sub\n";
                    this.bodySection.push(147);
                    break;
                case Types.Double:
                    this.wat += type.wat + ".sub\n";
                    this.bodySection.push(161);
                    break;
            }
            this.typeStack.push(type);
        }
    }

    enterInteger(ctx) {
        this.wat += "i32.const " + ctx.getText() + "\n";
        this.bodySection.push(65);
        this.bodySection.push(parseInt(ctx.getText()));
        this.typeStack.push(Types.Int);
    }

    enterLong(ctx) {
        this.wat += "i64.const " + ctx.getText() + "\n";
        this.bodySection.push(66);
        this.bodySection.push(parseInt(ctx.getText()));
        this.typeStack.push(Types.Long);
    }

    enterFloat(ctx) {
        this.wat += "f32.const " + ctx.getText() + "\n";
        this.bodySection.push(67);
        this.bodySection.push(parseInt(ctx.getText()));
        this.typeStack.push(Types.Float);
    }

    enterDouble(ctx) {
        this.wat += "f64.const " + ctx.getText() + "\n";
        this.bodySection.push(68);
        this.bodySection.push(parseInt(ctx.getText()));
        this.typeStack.push(Types.Double);
    }

    enterBoolean(ctx) {
        this.wat += this.typeStack.pop().wat + ".const " + ctx.getText() + "\n";
        this.bodySection.push(65);
        this.bodySection.push(parseInt(ctx.getText()));
        this.typeStack.push(Types.Boolean);
    }

    exitLT(ctx) {
        this.wat += this.typeStack.pop().wat + ".lt_u\n";
        this.typeStack.pop();
        this.bodySection.push(73);
        this.typeStack.push(Types.Boolean);
    }

    exitLEQ(ctx) {
        this.wat += this.typeStack.pop().wat + ".le_u\n";
        this.typeStack.pop();
        this.bodySection.push(77);
        this.typeStack.push(Types.Boolean);
    }

    exitGT(ctx) {
        this.wat += this.typeStack.pop().wat + ".gt_u\n";
        this.typeStack.pop();
        this.bodySection.push(75);
        this.typeStack.push(Types.Boolean);
    }

    exitGEQ(ctx) {
        this.wat += this.typeStack.pop().wat + ".ge_u\n";
        this.typeStack.pop();
        this.bodySection.push(79);
        this.typeStack.push(Types.Boolean);
    }

    exitEQ(ctx) {
        this.wat += this.typeStack.pop().wat + ".eq\n";
        this.typeStack.pop();
        this.bodySection.push(70);
        this.typeStack.push(Types.Boolean);
    }

    exitNEQ(ctx) {
        this.wat += this.typeStack.pop().wat + ".ne\n";
        this.typeStack.pop();
        this.bodySection.push(71);
        this.typeStack.push(Types.Boolean);
    }

    exitLAND(ctx) {
        this.wat += this.typeStack.pop().wat + ".and\n";
        this.typeStack.pop();
        this.bodySection.push(113);
        this.typeStack.push(Types.Boolean)
    }

    exitLOR(ctx) {
        this.wat += this.typeStack.pop().wat + ".or\n";
        this.typeStack.pop();
        this.bodySection.push(114);
        this.typeStack.push(Types.Boolean)
    }

    enterVariable(ctx) {
        this.typeStack.push(Types.Int);
        this.wat += "get_local " + this.getVarIndex(ctx.varName.text) + "\n";
        this.bodySection.push(32);
        this.bodySection.push(this.getVarIndex(ctx.varName.text));

    }

    exitVarDeclaration(ctx) {
        this.variables.get(this.currentFunc).set(ctx.varName.text, [this.variables.get(this.currentFunc).size, this.getVarType(ctx.type.text), false]);
        if (ctx.expr != null)
            this.exitAssignment(ctx);
    }

    exitVarHanding(ctx) {
        this.variables.get(this.currentFunc).set(ctx.varName.text, [this.variables.get(this.currentFunc).size, this.getVarType(ctx.type.text), true]);
    };

    exitAssignment(ctx) {
        this.wat += "set_local " + this.getVarIndex(ctx.varName.text) + "\n";
        this.bodySection.push(33);
        this.bodySection.push(this.getVarIndex(ctx.varName.text));
        this.typeStack.pop()
    }

    enterTrueBlock(ctx) {
        this.wat += "if\n";
        this.bodySection.push(4, 64);
        this.typeStack.pop();
    }

    exitBranch(ctx) {
        this.wat += "end\n";
        this.bodySection.push(11);
    }

    enterElseBlock(ctx) {
        this.wat += "else\n";
        this.bodySection.push(5);
    }

    enterFunctionDefinition(ctx) {
        this.exportCounter++;
        this.currentFunc = ctx.funcName.text;
        this.functions.set(ctx.funcName.text, this.functions.size);
        this.variables.set(this.currentFunc, new Map());
        this.wat += "(export \"" + this.currentFunc + "\" (func $" + this.currentFunc + "))\n" +
            "(func $" + this.currentFunc + " (param " + this.currentFunc + ") (result " + this.currentFunc + ")\n" +
            "(local " + this.currentFunc + ")\n";
        this.exportSection.push(this.currentFunc.length);
        this.exportSection = this.exportSection.concat([].slice.call(this.getUInt8(this.currentFunc)));
        this.exportSection.push(0, this.exportCounter - 1);
        this.exportSection[2] = this.exportCounter;
        this.exportSection[1] = this.exportSection.length - 2;
        this.bodySection.push(0, 0); //temporary length
        this.bodySectionlength = this.bodySection.length;
    }

    exitFunctionDefinition(ctx) {
        this.wat += ")\n";
        this.bodySection.push(11);
        var local = "";
        var types = [];
        var params_wat = "";
        var params_wasm = [];
        this.variables.get(ctx.funcName.text).forEach(function (value, key, map) {
            if (!value[2]) {
                local += ("(local " + value[1].wat + ")\n");
                types.push(1, value[1].wasm);
            } else {
                params_wat += " (param " + value[1].wat + ")";
                params_wasm.push(value[1].wasm);
            }
        });
        this.bodySection[this.bodySectionlength - 1] = (types.length / 2);
        for (var i = 0; i < types.length; i++) {
            this.bodySection.splice(this.bodySectionlength + i, 0, types[i]);
        }
        for (var i = 0; i < this.funcReplace.length; i++)
            this.funcReplace[i] = this.funcReplace[i] + types.length;

        this.typeSection[2]++;
        this.functionSection[2]++;
        this.codeSection[2]++;
        this.typeSection.push(96, //func
            params_wasm.length); //number of parameters
        this.typeSection = this.typeSection.concat(params_wasm);
        this.functionSection.push(this.functionSection[2] - 1);

        if (ctx.type.text) {
            this.typeSection.push(1, this.getVarType(ctx.type.text).wasm);
            this.wat = this.wat.replace("(result " + this.currentFunc + ")", "(result " + this.getVarType(ctx.type.text).wat + ")");
        } else {
            this.typeSection.push(0);
            this.wat = this.wat.replace("(result " + this.currentFunc + ")", "");

        }


        this.wat = this.wat.replace("(param " + this.currentFunc + ")", params_wat);
        this.wat = this.wat.replace("(local " + this.currentFunc + ")\n", local);
        this.bodySection[this.bodySectionlength - 2] = this.bodySection.length - this.bodySectionlength + 1;
    }

    exitFunctionCall(ctx) {
        this.wat += "call $" + ctx.funcName.text + "\n";
        this.bodySection.push(16, ctx.funcName.text);
        this.funcReplace.push(this.bodySection.length - 1);
    }

    enterForloop(ctx) {
        //this.wat += "(loop $label$0\n";
    }

    exitForloop(ctx) {
        //this.wat += "br_if $label$0\n)\n";
    }

    getVarType(type) {
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
            default:
                return Types.Int;
        }
    }


    getUInt8(string) {
        return new TextEncoder("utf-8").encode(string);
    }

    getVarIndex(ctx) {
        return this.variables.get(this.currentFunc).get(ctx)[0];
    }

    getWasm() {
        this.typeSection[1] = this.typeSection.length - 2; //set section length

        this.functionSection[1] = this.functionSection.length - 2;

        this.codeSection = this.codeSection.concat(this.bodySection)
        this.codeSection[1] = this.codeSection.length - 2;

        return this.binaryMagic
            .concat(this.typeSection)
            .concat(this.functionSection)
            .concat(this.exportSection)
            .concat(this.codeSection);
    }
}



module.exports = MyVisitor;