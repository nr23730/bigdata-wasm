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
        this.wat += ")";
    }

    exitDiv(ctx) {
        let type = this.typeStack.pop();
        if (type == this.typeStack.pop()) {
            switch (type) {
                case Types.Int:
                    this.wat += type.wat + ".div_s\n";
                    this.bodySection.push(109);
                    break;
                case Types.Long:
                    this.wat += type.wat + ".div_s\n";
                    this.bodySection.push(127);
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
        let type = this.typeStack.pop();
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
        let type = this.typeStack.pop();
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
        let type = this.typeStack.pop();
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
        this.bodySection = this.bodySection.concat(this.getLEB128(ctx.getText()));
        this.typeStack.push(Types.Int);
    }

    enterLong(ctx) {
        this.wat += "i64.const " + ctx.getText().replace("L", "") + "\n";
        this.bodySection.push(66);
        this.bodySection = this.bodySection.concat(this.getLEB128(parseInt(ctx.getText())));
        this.typeStack.push(Types.Long);
    }

    enterFloat(ctx) {
        let text = ctx.getText().replace("F", "");
        this.wat += "f32.const " + text + "\n";
        this.bodySection.push(67);
        this.bodySection = this.bodySection.concat([].slice.call(this.getFloat32(text)));
        this.typeStack.push(Types.Float);
    }

    enterDouble(ctx) {
        this.wat += "f64.const " + ctx.getText() + "\n";
        this.bodySection.push(68);
        this.bodySection = this.bodySection.concat([].slice.call(this.getFloat64(ctx.getText())));
        this.typeStack.push(Types.Double);
    }

    enterBoolean(ctx) {
        let value = -1;
        switch (ctx.getText()) {
            case "true":
                value = 1;
                break;
            case "false":
                value = 0;
                break;
        }
        this.wat += "i32.const " + value + "\n";
        this.bodySection.push(65);
        this.bodySection.push(value);
        this.typeStack.push(Types.Boolean);
    }

    exitLT(ctx) {
        let type = this.typeStack.pop();
        if (type == this.typeStack.pop()) {
            switch (type) {
                case Types.Int:
                    this.wat += type.wat + ".lt_s\n";
                    this.bodySection.push(72);
                    break;
                case Types.Long:
                    this.wat += type.wat + ".lt_s\n";
                    this.bodySection.push(83);
                    break;
                case Types.Float:
                    this.wat += type.wat + ".lt\n";
                    this.bodySection.push(93);
                    break;
                case Types.Double:
                    this.wat += type.wat + ".lt\n";
                    this.bodySection.push(99);
                    break;
            }
            this.typeStack.push(Types.Boolean);
        }
    }

    exitLEQ(ctx) {
        let type = this.typeStack.pop();
        if (type == this.typeStack.pop()) {
            switch (type) {
                case Types.Int:
                    this.wat += type.wat + ".le_s\n";
                    this.bodySection.push(76);
                    break;
                case Types.Long:
                    this.wat += type.wat + ".le_s\n";
                    this.bodySection.push(87);
                    break;
                case Types.Float:
                    this.wat += type.wat + ".le\n";
                    this.bodySection.push(95);
                    break;
                case Types.Double:
                    this.wat += type.wat + ".le\n";
                    this.bodySection.push(101);
                    break;
            }
            this.typeStack.push(Types.Boolean);
        }
    }

    exitGT(ctx) {
        let type = this.typeStack.pop();
        if (type == this.typeStack.pop()) {
            switch (type) {
                case Types.Int:
                    this.wat += type.wat + ".gt_s\n";
                    this.bodySection.push(74);
                    break;
                case Types.Long:
                    this.wat += type.wat + ".gt_s\n";
                    this.bodySection.push(85);
                    break;
                case Types.Float:
                    this.wat += type.wat + ".gt\n";
                    this.bodySection.push(94);
                    break;
                case Types.Double:
                    this.wat += type.wat + ".gt\n";
                    this.bodySection.push(100);
                    break;
            }
            this.typeStack.push(Types.Boolean);
        }
    }

    exitGEQ(ctx) {
        let type = this.typeStack.pop();
        if (type == this.typeStack.pop()) {
            switch (type) {
                case Types.Int:
                    this.wat += type.wat + ".ge_s\n";
                    this.bodySection.push(78);
                    break;
                case Types.Long:
                    this.wat += type.wat + ".ge_s\n";
                    this.bodySection.push(89);
                    break;
                case Types.Float:
                    this.wat += type.wat + ".ge\n";
                    this.bodySection.push(96);
                    break;
                case Types.Double:
                    this.wat += type.wat + ".ge\n";
                    this.bodySection.push(102);
                    break;
            }
            this.typeStack.push(Types.Boolean);
        }
    }

    exitEQ(ctx) {
        let type = this.typeStack.pop();
        if (type == this.typeStack.pop()) {
            switch (type) {
                case Types.Boolean:
                    this.wat += type.wat + ".eq\n";
                    this.bodySection.push(70);
                    break;
                case Types.Int:
                    this.wat += type.wat + ".eq\n";
                    this.bodySection.push(70);
                    break;
                case Types.Long:
                    this.wat += type.wat + ".eq\n";
                    this.bodySection.push(81);
                    break;
                case Types.Float:
                    this.wat += type.wat + ".eq\n";
                    this.bodySection.push(91);
                    break;
                case Types.Double:
                    this.wat += type.wat + ".eq\n";
                    this.bodySection.push(97);
                    break;
            }
            this.typeStack.push(Types.Boolean);
        }
    }

    exitNEQ(ctx) {
        let type = this.typeStack.pop();
        if (type == this.typeStack.pop()) {
            switch (type) {
                case Types.Boolean:
                    this.wat += type.wat + ".ne\n";
                    this.bodySection.push(71);
                    break;
                case Types.Int:
                    this.wat += type.wat + ".ne\n";
                    this.bodySection.push(71);
                    break;
                case Types.Long:
                    this.wat += type.wat + ".ne\n";
                    this.bodySection.push(82);
                    break;
                case Types.Float:
                    this.wat += type.wat + ".ne\n";
                    this.bodySection.push(92);
                    break;
                case Types.Double:
                    this.wat += type.wat + ".ne\n";
                    this.bodySection.push(98);
                    break;
            }
            this.typeStack.push(Types.Boolean);
        }
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
        this.typeStack.push(this.getVarType(ctx.varName.text));
        this.wat += "get_local " + this.getVarIndex(ctx.varName.text) + "\n";
        this.bodySection.push(32);
        this.bodySection.push(this.getVarIndex(ctx.varName.text));

    }

    exitVarDeclaration(ctx) {
        this.variables.get(this.currentFunc).set(ctx.varName.text, [this.variables.get(this.currentFunc).size, this.getTypeObject(ctx.type.text), false]);
        if (ctx.expr != null)
            this.exitAssignment(ctx);
    }

    exitVarHanding(ctx) {
        this.variables.get(this.currentFunc).set(ctx.varName.text, [this.variables.get(this.currentFunc).size, this.getTypeObject(ctx.type.text), true]);
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

        for (let i = 0; i < this.funcReplace.length; i++) {
            if (this.bodySection[this.funcReplace[i]] == this.currentFunc) {
                this.bodySection[this.funcReplace[i]] = this.functions.get(this.bodySection[this.funcReplace[i]]);
                this.funcReplace.splice(i, 1);
            }
        }

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
        let local_wat = "";
        let local_wasm = [];
        let params_wat = "";
        let params_wasm = [];
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
        this.typeSection.push(96, //func
            params_wasm.length); //number of parameters
        this.typeSection = this.typeSection.concat(params_wasm);
        this.functionSection.push(this.functionSection[2] - 1);

        if (ctx.type) {
            this.typeSection.push(1, this.getTypeObject(ctx.type.text).wasm);
            this.wat = this.wat.replace("(result " + this.currentFunc + ")", "(result " + this.getTypeObject(ctx.type.text).wat + ")");
        } else {
            this.typeSection.push(0);
            this.wat = this.wat.replace("(result " + this.currentFunc + ")", "");

        }

        this.wat = this.wat.replace("(param " + this.currentFunc + ")", params_wat);
        this.wat = this.wat.replace("(local " + this.currentFunc + ")\n", local_wat);
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
            default:
                return Types.Int;
        }
    }

    getUInt8(string) {
        return new TextEncoder("utf-8").encode(string);
    }

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

    getWasm() {
        this.typeSection[1] = this.typeSection.length - 2; //set section length

        this.functionSection[1] = this.functionSection.length - 2;

        this.codeSection = this.codeSection.concat(this.bodySection);
        this.codeSection[1] = this.codeSection.length - 2;

        return this.binaryMagic
            .concat(this.typeSection)
            .concat(this.functionSection)
            .concat(this.exportSection)
            .concat(this.codeSection);
    }
}

module.exports = MyVisitor;