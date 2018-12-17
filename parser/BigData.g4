grammar BigData;

program
    :   programPart+ EOF
    ;

programPart
	:   functionDefinition
	|   globalVarDeclaration
	;

globalVarDeclaration
    :   'var' varName=IDENTIFIER ':' type=TYPES '=' expression
    ;

functionDefinition
    :   modifier=('private'|'public')? 'fun' funcName=IDENTIFIER '(' params=parameterDeclaration? ')' (':' type=TYPES)? functionBody
    ;

parameterDeclaration
    :   functionParameter (',' functionParameter)*
    ;

functionParameter
    :   varName=IDENTIFIER ':' type=TYPES
    ;

functionBody
    :   block
    |   '=' (expression | statement);

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
	|   valDeclaration
	|   assignment
	|   memAssignment
	|   println
	;

statementList
    :   (statement)*
    ;

functionCall
    :   funcName=IDENTIFIER '(' expressionList* ')'
    ;

ifStatement
    :   'if' '(' expression ')' trueBlock ('else' falseBlock)?
    ;

trueBlock
    :   block
    ;

falseBlock
    :   block
    ;

jump
    :   'return' expression #Return
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
    :   'var' varName=IDENTIFIER ':' type=TYPES '=' expression
    ;

valDeclaration
    :   'val' valName=IDENTIFIER ':' type=TYPES '=' value=(INTEGER | LONG | FLOAT | DOUBLE)
    ;

assignment
    :   varName=IDENTIFIER '=' expression
    ;

memAssignment
    :   'memory' '[' expression ']' '=' expression
    ;

println
    :   'println' '(' expression ')'
    ;

expression
    :   '(' expression ')'          #Parenthesis

    |   varName=IDENTIFIER '++'     #PostIncrement
    |   varName=IDENTIFIER '--'     #PostDecrement

    |   '++' varName=IDENTIFIER     #PreIncrement
    |   '--' varName=IDENTIFIER     #PreDecrement

    |   expression '/' expression   #Div
    |	expression '*' expression   #Mult

    |   expression '-' expression   #Minus
    |	expression '+' expression   #Plus

    |	varName=IDENTIFIER          #Ident
    |   'memory' '[' expression ']' #Memory
    |	INTEGER                     #Integer
    |   LONG                        #Long
    |   FLOAT                       #Float
    |   DOUBLE                      #Double
    |   BOOLEANLITERAL              #Boolean
    |   functionCall                #Fcall

    |   expression '<' expression   #LT
    |   expression '<=' expression  #LEQ
    |   expression '>' expression   #GT
    |   expression '>=' expression  #GEQ

    |   expression '==' expression  #EQ
    |   expression '!=' expression  #NEQ

    |   expression '&&' expression  #LAND
    |   expression '||' expression  #LOR
    ;

expressionList
    :   expression (',' expression)*
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

WHITESPACE: [ \t\n\r]+ -> skip;