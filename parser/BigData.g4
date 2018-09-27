grammar BigData;

program
    : programPart+;

programPart
    : //varDeclaration      #ProgPartVarDeclaration
	functionDefinition	#ProgPartFunctionDefinition
	;
			
statement
    : varDeclaration
	| assignment
	| branch
	| whileloop
	| forloop
	//| println
	;

//println: argument=expression;

branch
    : 'if' '(' condition=expression ')' onTrue=trueBlock 'else' onFalse=elseBlock
    ;

block
    : statement
    | '{' statementList '}'
    ;

trueBlock
    : block
    ;

elseBlock
    : block
    ;

whileloop
    : 'while' '(' expression ')' block
    ;

forloop
    : 'for' '(' (varDeclaration | assignment) ';' expression ';' assignment ')' block
    ;

expression
    : left=expression '/' right=expression      #Div
    |	left=expression '*' right=expression    #Mult
    |	left=expression '-' right=expression    #Minus
    |	left=expression '+' right=expression    #Plus
    |	number=NUMBER                           #Number
    |	varName=IDENTIFIER                      #Variable
    |	functionCall                            #FuncCallExpression
    |   txt=STRING                              #String
	|   left=expression '<' right=expression    #LT
    |   left=expression '<=' right=expression   #LEQ
    |   left=expression '>' right=expression    #GT
    |   left=expression '>=' right=expression   #GEQ
    |   left=expression '==' right=expression   #EQ
    |   left=expression '!=' right=expression   #NEQ
    |   left=expression '&&' right=expression   #LAND
    |   left=expression '||' right=expression   #LOR
    ;
			
varDeclaration
    : 'var' varName=IDENTIFIER ':' TYPES '=' expr=expression
    |   'var' varName=IDENTIFIER ':' TYPES
    ;
			
varHanding
    : varName=IDENTIFIER ':' TYPES
    ;

assignment
    : varName=IDENTIFIER '=' expr=expression
    ;

functionDefinition
    : 'fun' funcName=IDENTIFIER '(' params=parameterDeclaration? ')' ':' TYPES '{' statements=statementList 'return' returnValue=expression'}'
    | 'fun' funcName=IDENTIFIER '(' params=parameterDeclaration? ')' '{' statements=statementList '}'
    ;

parameterDeclaration
    : declarations+=varHanding (',' declarations+=varHanding)*
    ;

statementList
    : (statement)*
    ;

functionCall
    : funcName=IDENTIFIER '(' arguments=expressionList ')'
    ;

expressionList
    : expressions+=expression (',' expressions+=expression)*
    ;

TYPES
    : INTTYPE
    | STRINGTYPE
    | BOOLTYPE
    ;

STRINGTYPE: 'String';
BOOLTYPE: 'Boolean';
INTTYPE: 'Int';
//LONGTYPE: 'Long';
//FLOATTYPE: 'Float';
//DOUBLETYPE: 'Double';

IDENTIFIER: [a-zA-Z][a-zA-Z0-9]*;

NUMBER: [0-9]+;
STRING: '"' .*? '"';

WHITESPACE: [ \t\n\r]+ -> skip;