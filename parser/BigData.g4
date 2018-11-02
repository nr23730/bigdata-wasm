grammar BigData;

program
    :   programPart+ EOF
    ;

programPart
    :   //varDeclaration      #ProgPartVarDeclaration
	    functionDefinition	#ProgPartFunctionDefinition
	;

functionDefinition
    :   'fun' funcName=IDENTIFIER '(' params=parameterDeclaration? ')' (':' type=TYPES)? functionBody
    ;

parameterDeclaration
    :   declarations+=functionParameter (',' declarations+=functionParameter)*
    ;

functionParameter
    :   varName=IDENTIFIER ':' type=TYPES
    ;

functionBody
    :   block
    |   '=' expression;

block
    :   statement
    |   '{' statementList '}'
    ;
			
statement
    :   functionCall
	|   ifStatement
	|   jump
	|   loop
	|   varDeclaration
	|   assignment
	|   memAssignment
	;

statementList
    :   (statement)*
    ;

functionCall
    :   funcName=IDENTIFIER '(' arguments=expressionList* ')'
    ;

ifStatement
    :   'if' '(' condition=expression ')' onTrue=trueBlock ('else' onFalse=falseBlock)?
    ;

trueBlock
    :   block
    ;

falseBlock
    :   block
    ;

jump
    :   'return' expression
    ;

loop
    :   doWhileLoop
    |   whileLoop
    |   forLoop
    ;

loopBool
    :   expression
    ;

doWhileLoop
    :   'do' block 'while' '(' expression ')'
    ;

whileLoop
    :   'while' '(' loopBool ')' block
    ;

forLoop
    :   'for' '(' (varDeclaration | assignment) ';' loopBool ';' forExpression ')' block
    ;

forExpression
    :   expression
    ;

varDeclaration
    :   'var' varName=IDENTIFIER ':' type=TYPES '=' expr=expression
    ;

assignment
    :   varName=IDENTIFIER '=' expr=expression
    ;

memAssignment
    :   'memory' '[' expression ']' '=' expr=expressionList
    ;

expression
    :   '(' expression ')'                      #Parenthesis

    |   varName=IDENTIFIER '++'                 #PostIncrement
    |   varName=IDENTIFIER '--'                 #PostDecrement

    |   '++' varName=IDENTIFIER                 #PreIncrement
    |   '--' varName=IDENTIFIER                 #PreDecrement

    |   left=expression '/' right=expression    #Div
    |	left=expression '*' right=expression    #Mult

    |   left=expression '-' right=expression    #Minus
    |	left=expression '+' right=expression    #Plus

    |	varName=IDENTIFIER                      #Variable
    |   'memory' '[' expression ']'                #Memory
    |	INTEGER                                 #Integer
    |   LONG                                    #Long
    |   FLOAT                                   #Float
    |   DOUBLE                                  #Double
    |   BOOLEANLITERAL                          #Boolean
    |   functionCall                            #Fcall

    |   left=expression '<' right=expression    #LT
    |   left=expression '<=' right=expression   #LEQ
    |   left=expression '>' right=expression    #GT
    |   left=expression '>=' right=expression   #GEQ

    |   left=expression '==' right=expression   #EQ
    |   left=expression '!=' right=expression   #NEQ

    |   left=expression '&&' right=expression   #LAND
    |   left=expression '||' right=expression   #LOR
    ;

expressionList
    :   expressions+=expression (',' expressions+=expression)*
    ;

TYPES
    :   INTTYPE
    |   BOOLTYPE
    |   LONGTYPE
    |   FLOATTYPE
    |   DOUBLETYPE
    ;

BOOLTYPE:   'Boolean';
INTTYPE:    'Int';
LONGTYPE:   'Long';
FLOATTYPE:  'Float';
DOUBLETYPE: 'Double';

BOOLEANLITERAL: 'true' | 'false';
IDENTIFIER: [a-zA-Z][a-zA-Z0-9]*;

INTEGER:    ('+' | '-')? ([1-9][0-9]*|[0]);
LONG:   INTEGER 'L';
FLOAT:  DOUBLE 'F';
DOUBLE: ('+' | '-')? ([0-9]* '.')? [0-9]+ (('e'|'E') [0-9]+)*;
STRING: '"' .*? '"';

WHITESPACE: [ \t\n\r]+ -> skip;