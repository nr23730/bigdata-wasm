const BigDataListener = require('../parser/BigDataListener').BigDataListener;

class DataType {
    constructor(wat, wasm) {
        this.wat = wat;
        this.wasm = wasm;
    }
}

const Types = {
    Int: new DataType("i32", 127),
    Long: new DataType("i64", 126),
    Float: new DataType("f32", 125),
    Double: new DataType("f64", 124),
    Boolean: new DataType("i32", 127)
};


class MyVisitor extends BigDataListener {

    constructor() {
        super();
        this.wat = "";
        this.wasm = [];
        this.variables = new Map();
        this.varcounter = new Map();
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
        this.wat += this.typeStack.pop().wat + ".div_u\n";
        this.typeStack.pop();
        this.wasm.push(110);
        this.typeStack.push(Types.Int);
    }

    exitMult(ctx) {
        this.wat += this.typeStack.pop().wat + ".mul\n";
        this.typeStack.pop();
        this.wasm.push(108);
        this.typeStack.push(Types.Int);
    }

    exitPlus(ctx) {
        this.wat += this.typeStack.pop().wat + ".add\n";
        this.typeStack.pop();
        this.wasm.push(106);
        this.typeStack.push(Types.Int);
    }

    exitMinus(ctx) {
        this.wat += this.typeStack.pop().wat + ".sub\n";
        this.typeStack.pop();
        this.wasm.push(107);
        this.typeStack.push(Types.Int);
    }

    enterNumber(ctx) {
        this.wat += "i32.const " + ctx.getText() + "\n";
        this.wasm.push(65);
        this.wasm.push(parseInt(ctx.getText()));
        this.typeStack.push(Types.Int);
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
        this.variables.get(this.currentFunc).set(ctx.varName.text, this.variables.get(this.currentFunc).size);
        if (ctx.expr != null)
            this.exitAssignment(ctx);
        this.varcounter.set(this.currentFunc, this.varcounter.get(this.currentFunc) + 1);
    }

    exitVarHanding(ctx) {
        this.variables.get(this.currentFunc).set(ctx.varName.text, this.variables.get(this.currentFunc).size);
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
        this.varcounter.set(ctx.funcName.text, 0);
        this.functions.set(ctx.funcName.text, this.functions.size);
        this.variables.set(this.currentFunc, new Map());
        this.wat += "(export \"" + this.currentFunc + "\" (func $" + this.currentFunc + "))\n" +
            "(func $" + this.currentFunc + " (param i32) (result i32)\n" +
            "(local " + this.currentFunc + ")\n";
        this.exportSection.push(this.currentFunc.length);
        this.exportSection = this.exportSection.concat([].slice.call(this.getUInt8(this.currentFunc)));
        this.exportSection.push(0, this.exportCounter - 1);
        this.exportSection[2] = this.exportCounter;
        this.exportSection[1] = this.exportSection.length - 2;
        this.wasm.push(0); //temporary length
        this.wasmlength = this.wasm.length;
        this.wasm.push(1, 0, 127);
    }

    exitFunctionDefinition(ctx) {
        this.wat += ")\n";
        this.wasm.push(11);
        this.wasm[this.wasmlength + 1] = this.varcounter.get(ctx.funcName.text);
        var local = "(local";
        for (var i = 0; i < this.varcounter.get(ctx.funcName.text); i++)
            local += " i32";
        local += ")\n";
        if (local == "(local)\n")
            local = "";
        this.wat = this.wat.replace("(local " + this.currentFunc + ")\n", local);
        this.wasm[this.wasmlength - 1] = this.wasm.length - this.wasmlength;
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
        return this.variables.get(this.currentFunc).get(ctx);
    }

    getVarCount(functionName) {
        return this.varcounter.get(functionName);
    }

}

module.exports = MyVisitor;