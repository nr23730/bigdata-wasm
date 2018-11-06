// Generated from BigData.g4 by ANTLR 4.7.1
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by BigDataParser.
function BigDataListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

BigDataListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
BigDataListener.prototype.constructor = BigDataListener;

// Enter a parse tree produced by BigDataParser#program.
BigDataListener.prototype.enterProgram = function(ctx) {
};

// Exit a parse tree produced by BigDataParser#program.
BigDataListener.prototype.exitProgram = function(ctx) {
};


// Enter a parse tree produced by BigDataParser#ProgPartFunctionDefinition.
BigDataListener.prototype.enterProgPartFunctionDefinition = function(ctx) {
};

// Exit a parse tree produced by BigDataParser#ProgPartFunctionDefinition.
BigDataListener.prototype.exitProgPartFunctionDefinition = function(ctx) {
};


// Enter a parse tree produced by BigDataParser#functionDefinition.
BigDataListener.prototype.enterFunctionDefinition = function(ctx) {
};

// Exit a parse tree produced by BigDataParser#functionDefinition.
BigDataListener.prototype.exitFunctionDefinition = function(ctx) {
};


// Enter a parse tree produced by BigDataParser#parameterDeclaration.
BigDataListener.prototype.enterParameterDeclaration = function(ctx) {
};

// Exit a parse tree produced by BigDataParser#parameterDeclaration.
BigDataListener.prototype.exitParameterDeclaration = function(ctx) {
};


// Enter a parse tree produced by BigDataParser#functionParameter.
BigDataListener.prototype.enterFunctionParameter = function(ctx) {
};

// Exit a parse tree produced by BigDataParser#functionParameter.
BigDataListener.prototype.exitFunctionParameter = function(ctx) {
};


// Enter a parse tree produced by BigDataParser#functionBody.
BigDataListener.prototype.enterFunctionBody = function(ctx) {
};

// Exit a parse tree produced by BigDataParser#functionBody.
BigDataListener.prototype.exitFunctionBody = function(ctx) {
};


// Enter a parse tree produced by BigDataParser#block.
BigDataListener.prototype.enterBlock = function(ctx) {
};

// Exit a parse tree produced by BigDataParser#block.
BigDataListener.prototype.exitBlock = function(ctx) {
};


// Enter a parse tree produced by BigDataParser#statement.
BigDataListener.prototype.enterStatement = function(ctx) {
};

// Exit a parse tree produced by BigDataParser#statement.
BigDataListener.prototype.exitStatement = function(ctx) {
};


// Enter a parse tree produced by BigDataParser#statementList.
BigDataListener.prototype.enterStatementList = function(ctx) {
};

// Exit a parse tree produced by BigDataParser#statementList.
BigDataListener.prototype.exitStatementList = function(ctx) {
};


// Enter a parse tree produced by BigDataParser#functionCall.
BigDataListener.prototype.enterFunctionCall = function(ctx) {
};

// Exit a parse tree produced by BigDataParser#functionCall.
BigDataListener.prototype.exitFunctionCall = function(ctx) {
};


// Enter a parse tree produced by BigDataParser#ifStatement.
BigDataListener.prototype.enterIfStatement = function(ctx) {
};

// Exit a parse tree produced by BigDataParser#ifStatement.
BigDataListener.prototype.exitIfStatement = function(ctx) {
};


// Enter a parse tree produced by BigDataParser#trueBlock.
BigDataListener.prototype.enterTrueBlock = function(ctx) {
};

// Exit a parse tree produced by BigDataParser#trueBlock.
BigDataListener.prototype.exitTrueBlock = function(ctx) {
};


// Enter a parse tree produced by BigDataParser#falseBlock.
BigDataListener.prototype.enterFalseBlock = function(ctx) {
};

// Exit a parse tree produced by BigDataParser#falseBlock.
BigDataListener.prototype.exitFalseBlock = function(ctx) {
};


// Enter a parse tree produced by BigDataParser#Return.
BigDataListener.prototype.enterReturn = function (ctx) {
};

// Exit a parse tree produced by BigDataParser#Return.
BigDataListener.prototype.exitReturn = function (ctx) {
};


// Enter a parse tree produced by BigDataParser#loop.
BigDataListener.prototype.enterLoop = function(ctx) {
};

// Exit a parse tree produced by BigDataParser#loop.
BigDataListener.prototype.exitLoop = function(ctx) {
};


// Enter a parse tree produced by BigDataParser#loopBool.
BigDataListener.prototype.enterLoopBool = function(ctx) {
};

// Exit a parse tree produced by BigDataParser#loopBool.
BigDataListener.prototype.exitLoopBool = function(ctx) {
};


// Enter a parse tree produced by BigDataParser#doWhileLoop.
BigDataListener.prototype.enterDoWhileLoop = function(ctx) {
};

// Exit a parse tree produced by BigDataParser#doWhileLoop.
BigDataListener.prototype.exitDoWhileLoop = function(ctx) {
};


// Enter a parse tree produced by BigDataParser#whileLoop.
BigDataListener.prototype.enterWhileLoop = function(ctx) {
};

// Exit a parse tree produced by BigDataParser#whileLoop.
BigDataListener.prototype.exitWhileLoop = function(ctx) {
};


// Enter a parse tree produced by BigDataParser#forLoop.
BigDataListener.prototype.enterForLoop = function(ctx) {
};

// Exit a parse tree produced by BigDataParser#forLoop.
BigDataListener.prototype.exitForLoop = function(ctx) {
};


// Enter a parse tree produced by BigDataParser#forExpression.
BigDataListener.prototype.enterForExpression = function(ctx) {
};

// Exit a parse tree produced by BigDataParser#forExpression.
BigDataListener.prototype.exitForExpression = function(ctx) {
};


// Enter a parse tree produced by BigDataParser#varDeclaration.
BigDataListener.prototype.enterVarDeclaration = function(ctx) {
};

// Exit a parse tree produced by BigDataParser#varDeclaration.
BigDataListener.prototype.exitVarDeclaration = function(ctx) {
};


// Enter a parse tree produced by BigDataParser#assignment.
BigDataListener.prototype.enterAssignment = function(ctx) {
};

// Exit a parse tree produced by BigDataParser#assignment.
BigDataListener.prototype.exitAssignment = function(ctx) {
};


// Enter a parse tree produced by BigDataParser#memAssignment.
BigDataListener.prototype.enterMemAssignment = function(ctx) {
};

// Exit a parse tree produced by BigDataParser#memAssignment.
BigDataListener.prototype.exitMemAssignment = function(ctx) {
};


// Enter a parse tree produced by BigDataParser#PreIncrement.
BigDataListener.prototype.enterPreIncrement = function(ctx) {
};

// Exit a parse tree produced by BigDataParser#PreIncrement.
BigDataListener.prototype.exitPreIncrement = function(ctx) {
};


// Enter a parse tree produced by BigDataParser#Variable.
BigDataListener.prototype.enterVariable = function(ctx) {
};

// Exit a parse tree produced by BigDataParser#Variable.
BigDataListener.prototype.exitVariable = function(ctx) {
};


// Enter a parse tree produced by BigDataParser#Memory.
BigDataListener.prototype.enterMemory = function(ctx) {
};

// Exit a parse tree produced by BigDataParser#Memory.
BigDataListener.prototype.exitMemory = function(ctx) {
};


// Enter a parse tree produced by BigDataParser#LT.
BigDataListener.prototype.enterLT = function(ctx) {
};

// Exit a parse tree produced by BigDataParser#LT.
BigDataListener.prototype.exitLT = function(ctx) {
};


// Enter a parse tree produced by BigDataParser#LAND.
BigDataListener.prototype.enterLAND = function(ctx) {
};

// Exit a parse tree produced by BigDataParser#LAND.
BigDataListener.prototype.exitLAND = function(ctx) {
};


// Enter a parse tree produced by BigDataParser#Parenthesis.
BigDataListener.prototype.enterParenthesis = function(ctx) {
};

// Exit a parse tree produced by BigDataParser#Parenthesis.
BigDataListener.prototype.exitParenthesis = function(ctx) {
};


// Enter a parse tree produced by BigDataParser#PostIncrement.
BigDataListener.prototype.enterPostIncrement = function(ctx) {
};

// Exit a parse tree produced by BigDataParser#PostIncrement.
BigDataListener.prototype.exitPostIncrement = function(ctx) {
};


// Enter a parse tree produced by BigDataParser#Boolean.
BigDataListener.prototype.enterBoolean = function(ctx) {
};

// Exit a parse tree produced by BigDataParser#Boolean.
BigDataListener.prototype.exitBoolean = function(ctx) {
};


// Enter a parse tree produced by BigDataParser#Plus.
BigDataListener.prototype.enterPlus = function(ctx) {
};

// Exit a parse tree produced by BigDataParser#Plus.
BigDataListener.prototype.exitPlus = function(ctx) {
};


// Enter a parse tree produced by BigDataParser#PostDecrement.
BigDataListener.prototype.enterPostDecrement = function(ctx) {
};

// Exit a parse tree produced by BigDataParser#PostDecrement.
BigDataListener.prototype.exitPostDecrement = function(ctx) {
};


// Enter a parse tree produced by BigDataParser#Fcall.
BigDataListener.prototype.enterFcall = function(ctx) {
};

// Exit a parse tree produced by BigDataParser#Fcall.
BigDataListener.prototype.exitFcall = function(ctx) {
};


// Enter a parse tree produced by BigDataParser#EQ.
BigDataListener.prototype.enterEQ = function(ctx) {
};

// Exit a parse tree produced by BigDataParser#EQ.
BigDataListener.prototype.exitEQ = function(ctx) {
};


// Enter a parse tree produced by BigDataParser#Double.
BigDataListener.prototype.enterDouble = function(ctx) {
};

// Exit a parse tree produced by BigDataParser#Double.
BigDataListener.prototype.exitDouble = function(ctx) {
};


// Enter a parse tree produced by BigDataParser#GT.
BigDataListener.prototype.enterGT = function(ctx) {
};

// Exit a parse tree produced by BigDataParser#GT.
BigDataListener.prototype.exitGT = function(ctx) {
};


// Enter a parse tree produced by BigDataParser#LOR.
BigDataListener.prototype.enterLOR = function(ctx) {
};

// Exit a parse tree produced by BigDataParser#LOR.
BigDataListener.prototype.exitLOR = function(ctx) {
};


// Enter a parse tree produced by BigDataParser#Integer.
BigDataListener.prototype.enterInteger = function(ctx) {
};

// Exit a parse tree produced by BigDataParser#Integer.
BigDataListener.prototype.exitInteger = function(ctx) {
};


// Enter a parse tree produced by BigDataParser#Div.
BigDataListener.prototype.enterDiv = function(ctx) {
};

// Exit a parse tree produced by BigDataParser#Div.
BigDataListener.prototype.exitDiv = function(ctx) {
};


// Enter a parse tree produced by BigDataParser#Float.
BigDataListener.prototype.enterFloat = function(ctx) {
};

// Exit a parse tree produced by BigDataParser#Float.
BigDataListener.prototype.exitFloat = function(ctx) {
};


// Enter a parse tree produced by BigDataParser#GEQ.
BigDataListener.prototype.enterGEQ = function(ctx) {
};

// Exit a parse tree produced by BigDataParser#GEQ.
BigDataListener.prototype.exitGEQ = function(ctx) {
};


// Enter a parse tree produced by BigDataParser#Mult.
BigDataListener.prototype.enterMult = function(ctx) {
};

// Exit a parse tree produced by BigDataParser#Mult.
BigDataListener.prototype.exitMult = function(ctx) {
};


// Enter a parse tree produced by BigDataParser#Long.
BigDataListener.prototype.enterLong = function(ctx) {
};

// Exit a parse tree produced by BigDataParser#Long.
BigDataListener.prototype.exitLong = function(ctx) {
};


// Enter a parse tree produced by BigDataParser#LEQ.
BigDataListener.prototype.enterLEQ = function(ctx) {
};

// Exit a parse tree produced by BigDataParser#LEQ.
BigDataListener.prototype.exitLEQ = function(ctx) {
};


// Enter a parse tree produced by BigDataParser#NEQ.
BigDataListener.prototype.enterNEQ = function(ctx) {
};

// Exit a parse tree produced by BigDataParser#NEQ.
BigDataListener.prototype.exitNEQ = function(ctx) {
};


// Enter a parse tree produced by BigDataParser#PreDecrement.
BigDataListener.prototype.enterPreDecrement = function(ctx) {
};

// Exit a parse tree produced by BigDataParser#PreDecrement.
BigDataListener.prototype.exitPreDecrement = function(ctx) {
};


// Enter a parse tree produced by BigDataParser#Minus.
BigDataListener.prototype.enterMinus = function(ctx) {
};

// Exit a parse tree produced by BigDataParser#Minus.
BigDataListener.prototype.exitMinus = function(ctx) {
};


// Enter a parse tree produced by BigDataParser#expressionList.
BigDataListener.prototype.enterExpressionList = function(ctx) {
};

// Exit a parse tree produced by BigDataParser#expressionList.
BigDataListener.prototype.exitExpressionList = function(ctx) {
};



exports.BigDataListener = BigDataListener;