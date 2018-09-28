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
        this.wasm = [];
        this.variables = new Map();
        this.funcCounter = 0;
        this.currentFunc = "";
        this.exportCounter = 0;
        this.exportSection = [7, 0, 0];
        this.wasmlength = 0;
        this.functions = new Map();
        this.funcReplace = [];
        this.typeStack = [];
    }

    exitDiv(ctx) {
        var type = this.typeStack.pop();
        if (type == this.typeStack.pop()) {
            switch (type) {
                case Types.Int:
                    this.wat += type.wat + ".div_u\n";
                    this.wasm.push(110);
                    break;
                case Types.Long:
                    this.wat += type.wat + ".div_u\n";
                    this.wasm.push(128);
                    break;
                case Types.Float:
                    this.wat += type.wat + ".div\n";
                    this.wasm.push(149);
                    break;
                case Types.Double:
                    this.wat += type.wat + ".div\n";
                    this.wasm.push(163);
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
                    this.wasm.push(108);
                    break;
                case Types.Long:
                    this.wat += type.wat + ".mul\n";
                    this.wasm.push(126);
                    break;
                case Types.Float:
                    this.wat += type.wat + ".mul\n";
                    this.wasm.push(148);
                    break;
                case Types.Double:
                    this.wat += type.wat + ".mul\n";
                    this.wasm.push(162);
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
                    this.wasm.push(106);
                    break;
                case Types.Long:
                    this.wat += type.wat + ".add\n";
                    this.wasm.push(124);
                    break;
                case Types.Float:
                    this.wat += type.wat + ".add\n";
                    this.wasm.push(146);
                    break;
                case Types.Double:
                    this.wat += type.wat + ".add\n";
                    this.wasm.push(160);
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
                    this.wasm.push(107);
                    break;
                case Types.Long:
                    this.wat += type.wat + ".sub\n";
                    this.wasm.push(125);
                    break;
                case Types.Float:
                    this.wat += type.wat + ".sub\n";
                    this.wasm.push(147);
                    break;
                case Types.Double:
                    this.wat += type.wat + ".sub\n";
                    this.wasm.push(161);
                    break;
            }
            this.typeStack.push(type);
        }
    }

    enterInteger(ctx) {
        this.wat += "i32.const " + ctx.getText() + "\n";
        this.wasm.push(65);
        this.wasm.push(parseInt(ctx.getText()));
        this.typeStack.push(Types.Int);
    }

    enterLong(ctx) {
        this.wat += "i64.const " + ctx.getText() + "\n";
        this.wasm.push(66);
        this.wasm.push(parseInt(ctx.getText()));
        this.typeStack.push(Types.Long);
    }

    enterFloat(ctx) {
        this.wat += "f32.const " + ctx.getText() + "\n";
        this.wasm.push(67);
        this.wasm.push(parseInt(ctx.getText()));
        this.typeStack.push(Types.Float);
    }

    enterDouble(ctx) {
        this.wat += "f64.const " + ctx.getText() + "\n";
        this.wasm.push(68);
        this.wasm.push(parseInt(ctx.getText()));
        this.typeStack.push(Types.Double);
    }

    enterBoolean(ctx) {
        this.wat += this.typeStack.pop().wat + ".const " + ctx.getText() + "\n";
        this.wasm.push(65);
        this.wasm.push(parseInt(ctx.getText()));
        this.typeStack.push(Types.Boolean);
    }

    exitLT(ctx) {
        this.wat += this.typeStack.pop().wat + ".lt_u\n";
        this.typeStack.pop();
        this.wasm.push(73);
        this.typeStack.push(Types.Boolean);
    }

    exitLEQ(ctx) {
        this.wat += this.typeStack.pop().wat + ".le_u\n";
        this.typeStack.pop();
        this.wasm.push(77);
        this.typeStack.push(Types.Boolean);
    }

    exitGT(ctx) {
        this.wat += this.typeStack.pop().wat + ".gt_u\n";
        this.typeStack.pop();
        this.wasm.push(75);
        this.typeStack.push(Types.Boolean);
    }

    exitGEQ(ctx) {
        this.wat += this.typeStack.pop().wat + ".ge_u\n";
        this.typeStack.pop();
        this.wasm.push(79);
        this.typeStack.push(Types.Boolean);
    }

    exitEQ(ctx) {
        this.wat += this.typeStack.pop().wat + ".eq\n";
        this.typeStack.pop();
        this.wasm.push(70);
        this.typeStack.push(Types.Boolean);
    }

    exitNEQ(ctx) {
        this.wat += this.typeStack.pop().wat + ".ne\n";
        this.typeStack.pop();
        this.wasm.push(71);
        this.typeStack.push(Types.Boolean);
    }

    exitLAND(ctx) {
        this.wat += this.typeStack.pop().wat + ".and\n";
        this.typeStack.pop();
        this.wasm.push(113);
        this.typeStack.push(Types.Boolean)
    }

    exitLOR(ctx) {
        this.wat += this.typeStack.pop().wat + ".or\n";
        this.typeStack.pop();
        this.wasm.push(114);
        this.typeStack.push(Types.Boolean)
    }

    enterVariable(ctx) {
        this.typeStack.push(Types.Int);
        this.wat += "get_local " + this.getVarIndex(ctx.varName.text) + "\n";
        this.wasm.push(32);
        this.wasm.push(this.getVarIndex(ctx.varName.text));

    }

    exitVarDeclaration(ctx) {
        var type;
        switch (ctx.type.text) {
            case "Boolean":
                type = Types.Boolean;
                break;
            case "Int":
                type = Types.Int;
                break;
            case "Long":
                type = Types.Long;
                break;
            case "Float":
                type = Types.Float;
                break;
            case "Double":
                type = Types.Double;
                break;
            default:
                type = Types.Int;
        }
        this.variables.get(this.currentFunc).set(ctx.varName.text, [this.variables.get(this.currentFunc).size, type, false]);
        if (ctx.expr != null)
            this.exitAssignment(ctx);
    }

    exitVarHanding(ctx) {
        var type;
        switch (ctx.type.text) {
            case "Boolean":
                type = Types.Boolean;
                break;
            case "Int":
                type = Types.Int;
                break;
            case "Long":
                type = Types.Long;
                break;
            case "Float":
                type = Types.Float;
                break;
            case "Double":
                type = Types.Double;
                break;
            default:
                type = Types.Int;
        }
        this.variables.get(this.currentFunc).set(ctx.varName.text, [this.variables.get(this.currentFunc).size, type, true]);
    };

    exitAssignment(ctx) {
        this.wat += "set_local " + this.getVarIndex(ctx.varName.text) + "\n";
        this.wasm.push(33);
        this.wasm.push(this.getVarIndex(ctx.varName.text));
        this.typeStack.pop()
    }

    enterTrueBlock(ctx) {
        this.wat += "if\n";
        this.wasm.push(4, 64);
        this.typeStack.pop();
    }

    exitBranch(ctx) {
        this.wat += "end\n";
        this.wasm.push(11);
    }

    enterElseBlock(ctx) {
        this.wat += "else\n";
        this.wasm.push(5);
    }

    enterFunctionDefinition(ctx) {
        this.funcCounter++;
        this.exportCounter++;
        this.currentFunc = ctx.funcName.text;
        this.functions.set(ctx.funcName.text, this.functions.size);
        this.variables.set(this.currentFunc, new Map());
        this.wat += "(export \"" + this.currentFunc + "\" (func $" + this.currentFunc + "))\n" +
            "(func $" + this.currentFunc + " (param " + this.currentFunc + ") (result i32)\n" +
            "(local " + this.currentFunc + ")\n";
        this.exportSection.push(this.currentFunc.length);
        this.exportSection = this.exportSection.concat([].slice.call(this.getUInt8(this.currentFunc)));
        this.exportSection.push(0, this.exportCounter - 1);
        this.exportSection[2] = this.exportCounter;
        this.exportSection[1] = this.exportSection.length - 2;
        this.wasm.push(0, 0); //temporary length
        this.wasmlength = this.wasm.length;
    }

    exitFunctionDefinition(ctx) {
        this.wat += ")\n";
        this.wasm.push(11);
        var local = "";
        var types = [];
        var params_wat = "";
        var params_wasm = [];
        console.log(this.variables.get(ctx.funcName.text));
        this.variables.get(ctx.funcName.text).forEach(function (value, key, map) {
            if (!value[2]) {
                local += ("(local " + value[1].wat + ")\n");
                types.push(1, value[1].wasm);
            } else {
                params_wat += " (param " + value[1].wat + ")";
                params_wasm.push(1, value[1].wasm);
            }
        });
        this.wasm[this.wasmlength - 1] = (types.length / 2);
        for (var i = 0; i < types.length; i++) {
            this.wasm.splice(this.wasmlength + i, 0, types[i]);
            console.log(types[i]);
        }
        this.wat = this.wat.replace("(param " + this.currentFunc + ")", params_wat);
        this.wat = this.wat.replace("(local " + this.currentFunc + ")\n", local);
        this.wasm[this.wasmlength - 2] = this.wasm.length - this.wasmlength + 1;
    }

    exitFunctionCall(ctx) {
        this.wat += "call $" + ctx.funcName.text + "\n";
        this.wasm.push(16, ctx.funcName.text);
        this.funcReplace.push(this.wasm.length - 1);
    }

    exitProgram(ctx) {
        for (var i = 0; i < this.funcReplace.length; i++) {
            this.wasm[this.funcReplace[i]] = this.functions.get(this.wasm[this.funcReplace[i]]);
        }
    }

    enterForloop(ctx) {
        //this.wat += "(loop $label$0\n";
    }

    exitForloop(ctx) {
        //this.wat += "br_if $label$0\n)\n";
    }


    getUInt8(string) {
        return new TextEncoder("utf-8").encode(string);
    }

    getVarIndex(ctx) {
        return this.variables.get(this.currentFunc).get(ctx)[0];
    }

}

module.exports = MyVisitor;