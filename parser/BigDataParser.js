// Generated from BigData.g4 by ANTLR 4.7.1
// jshint ignore: start
var antlr4 = require('antlr4/index');
var BigDataListener = require('./BigDataListener').BigDataListener;
var grammarFileName = "BigData.g4";

var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u00032\u0122\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004",
    "\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010\u0004",
    "\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0004\u0014\t",
    "\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017\t\u0017\u0004",
    "\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a\t\u001a\u0004\u001b\t",
    "\u001b\u0004\u001c\t\u001c\u0003\u0002\u0006\u0002:\n\u0002\r\u0002",
    "\u000e\u0002;\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0005\u0004F\n\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0005\u0004K\n\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0005\u0003\u0005\u0003\u0005\u0007\u0005R\n\u0005\f\u0005",
    "\u000e\u0005U\u000b\u0005\u0003\u0006\u0003\u0006\u0003\u0006\u0003",
    "\u0006\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0005\u0007_",
    "\n\u0007\u0005\u0007a\n\u0007\u0003\b\u0003\b\u0003\b\u0003\b\u0003",
    "\b\u0005\bh\n\b\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003",
    "\t\u0003\t\u0003\t\u0005\ts\n\t\u0003\n\u0007\nv\n\n\f\n\u000e\ny\u000b",
    "\n\u0003\u000b\u0003\u000b\u0003\u000b\u0007\u000b~\n\u000b\f\u000b",
    "\u000e\u000b\u0081\u000b\u000b\u0003\u000b\u0003\u000b\u0003\f\u0003",
    "\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0005\f\u008c\n\f\u0003\r",
    "\u0003\r\u0003\u000e\u0003\u000e\u0003\u000f\u0003\u000f\u0003\u000f",
    "\u0003\u0010\u0003\u0010\u0003\u0010\u0005\u0010\u0098\n\u0010\u0003",
    "\u0011\u0003\u0011\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003",
    "\u0012\u0003\u0012\u0003\u0012\u0003\u0013\u0003\u0013\u0003\u0013\u0003",
    "\u0013\u0003\u0013\u0003\u0013\u0003\u0014\u0003\u0014\u0003\u0014\u0003",
    "\u0014\u0005\u0014\u00ad\n\u0014\u0003\u0014\u0003\u0014\u0003\u0014",
    "\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0015\u0003\u0015",
    "\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0016",
    "\u0003\u0016\u0003\u0017\u0003\u0017\u0003\u0017\u0003\u0017\u0003\u0017",
    "\u0003\u0017\u0003\u0017\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0018",
    "\u0003\u0019\u0003\u0019\u0003\u0019\u0003\u0019\u0003\u0019\u0003\u0019",
    "\u0003\u0019\u0003\u001a\u0003\u001a\u0003\u001a\u0003\u001a\u0003\u001a",
    "\u0003\u001b\u0003\u001b\u0003\u001b\u0003\u001b\u0003\u001b\u0003\u001b",
    "\u0003\u001b\u0003\u001b\u0003\u001b\u0003\u001b\u0003\u001b\u0003\u001b",
    "\u0003\u001b\u0003\u001b\u0003\u001b\u0003\u001b\u0003\u001b\u0003\u001b",
    "\u0003\u001b\u0003\u001b\u0003\u001b\u0003\u001b\u0003\u001b\u0003\u001b",
    "\u0003\u001b\u0005\u001b\u00ef\n\u001b\u0003\u001b\u0003\u001b\u0003",
    "\u001b\u0003\u001b\u0003\u001b\u0003\u001b\u0003\u001b\u0003\u001b\u0003",
    "\u001b\u0003\u001b\u0003\u001b\u0003\u001b\u0003\u001b\u0003\u001b\u0003",
    "\u001b\u0003\u001b\u0003\u001b\u0003\u001b\u0003\u001b\u0003\u001b\u0003",
    "\u001b\u0003\u001b\u0003\u001b\u0003\u001b\u0003\u001b\u0003\u001b\u0003",
    "\u001b\u0003\u001b\u0003\u001b\u0003\u001b\u0003\u001b\u0003\u001b\u0003",
    "\u001b\u0003\u001b\u0003\u001b\u0003\u001b\u0007\u001b\u0115\n\u001b",
    "\f\u001b\u000e\u001b\u0118\u000b\u001b\u0003\u001c\u0003\u001c\u0003",
    "\u001c\u0007\u001c\u011d\n\u001c\f\u001c\u000e\u001c\u0120\u000b\u001c",
    "\u0003\u001c\u0002\u00034\u001d\u0002\u0004\u0006\b\n\f\u000e\u0010",
    "\u0012\u0014\u0016\u0018\u001a\u001c\u001e \"$&(*,.0246\u0002\u0003",
    "\u0003\u0002.1\u0002\u0134\u00029\u0003\u0002\u0002\u0002\u0004?\u0003",
    "\u0002\u0002\u0002\u0006A\u0003\u0002\u0002\u0002\bN\u0003\u0002\u0002",
    "\u0002\nV\u0003\u0002\u0002\u0002\f`\u0003\u0002\u0002\u0002\u000eg",
    "\u0003\u0002\u0002\u0002\u0010r\u0003\u0002\u0002\u0002\u0012w\u0003",
    "\u0002\u0002\u0002\u0014z\u0003\u0002\u0002\u0002\u0016\u0084\u0003",
    "\u0002\u0002\u0002\u0018\u008d\u0003\u0002\u0002\u0002\u001a\u008f\u0003",
    "\u0002\u0002\u0002\u001c\u0091\u0003\u0002\u0002\u0002\u001e\u0097\u0003",
    "\u0002\u0002\u0002 \u0099\u0003\u0002\u0002\u0002\"\u009b\u0003\u0002",
    "\u0002\u0002$\u00a2\u0003\u0002\u0002\u0002&\u00a8\u0003\u0002\u0002",
    "\u0002(\u00b5\u0003\u0002\u0002\u0002*\u00b7\u0003\u0002\u0002\u0002",
    ",\u00be\u0003\u0002\u0002\u0002.\u00c5\u0003\u0002\u0002\u00020\u00c9",
    "\u0003\u0002\u0002\u00022\u00d0\u0003\u0002\u0002\u00024\u00ee\u0003",
    "\u0002\u0002\u00026\u0119\u0003\u0002\u0002\u00028:\u0005\u0004\u0003",
    "\u000298\u0003\u0002\u0002\u0002:;\u0003\u0002\u0002\u0002;9\u0003\u0002",
    "\u0002\u0002;<\u0003\u0002\u0002\u0002<=\u0003\u0002\u0002\u0002=>\u0007",
    "\u0002\u0002\u0003>\u0003\u0003\u0002\u0002\u0002?@\u0005\u0006\u0004",
    "\u0002@\u0005\u0003\u0002\u0002\u0002AB\u0007\u0003\u0002\u0002BC\u0007",
    "-\u0002\u0002CE\u0007\u0004\u0002\u0002DF\u0005\b\u0005\u0002ED\u0003",
    "\u0002\u0002\u0002EF\u0003\u0002\u0002\u0002FG\u0003\u0002\u0002\u0002",
    "GJ\u0007\u0005\u0002\u0002HI\u0007\u0006\u0002\u0002IK\u0007&\u0002",
    "\u0002JH\u0003\u0002\u0002\u0002JK\u0003\u0002\u0002\u0002KL\u0003\u0002",
    "\u0002\u0002LM\u0005\f\u0007\u0002M\u0007\u0003\u0002\u0002\u0002NS",
    "\u0005\n\u0006\u0002OP\u0007\u0007\u0002\u0002PR\u0005\n\u0006\u0002",
    "QO\u0003\u0002\u0002\u0002RU\u0003\u0002\u0002\u0002SQ\u0003\u0002\u0002",
    "\u0002ST\u0003\u0002\u0002\u0002T\t\u0003\u0002\u0002\u0002US\u0003",
    "\u0002\u0002\u0002VW\u0007-\u0002\u0002WX\u0007\u0006\u0002\u0002XY",
    "\u0007&\u0002\u0002Y\u000b\u0003\u0002\u0002\u0002Za\u0005\u000e\b\u0002",
    "[^\u0007\b\u0002\u0002\\_\u00054\u001b\u0002]_\u0005\u0010\t\u0002^",
    "\\\u0003\u0002\u0002\u0002^]\u0003\u0002\u0002\u0002_a\u0003\u0002\u0002",
    "\u0002`Z\u0003\u0002\u0002\u0002`[\u0003\u0002\u0002\u0002a\r\u0003",
    "\u0002\u0002\u0002bh\u0005\u0010\t\u0002cd\u0007\t\u0002\u0002de\u0005",
    "\u0012\n\u0002ef\u0007\n\u0002\u0002fh\u0003\u0002\u0002\u0002gb\u0003",
    "\u0002\u0002\u0002gc\u0003\u0002\u0002\u0002h\u000f\u0003\u0002\u0002",
    "\u0002is\u0005\u0014\u000b\u0002js\u0005\u0016\f\u0002ks\u0005\u001c",
    "\u000f\u0002ls\u0005\u001e\u0010\u0002ms\u0005*\u0016\u0002ns\u0005",
    ",\u0017\u0002os\u0005.\u0018\u0002ps\u00050\u0019\u0002qs\u00052\u001a",
    "\u0002ri\u0003\u0002\u0002\u0002rj\u0003\u0002\u0002\u0002rk\u0003\u0002",
    "\u0002\u0002rl\u0003\u0002\u0002\u0002rm\u0003\u0002\u0002\u0002rn\u0003",
    "\u0002\u0002\u0002ro\u0003\u0002\u0002\u0002rp\u0003\u0002\u0002\u0002",
    "rq\u0003\u0002\u0002\u0002s\u0011\u0003\u0002\u0002\u0002tv\u0005\u0010",
    "\t\u0002ut\u0003\u0002\u0002\u0002vy\u0003\u0002\u0002\u0002wu\u0003",
    "\u0002\u0002\u0002wx\u0003\u0002\u0002\u0002x\u0013\u0003\u0002\u0002",
    "\u0002yw\u0003\u0002\u0002\u0002z{\u0007-\u0002\u0002{\u007f\u0007\u0004",
    "\u0002\u0002|~\u00056\u001c\u0002}|\u0003\u0002\u0002\u0002~\u0081\u0003",
    "\u0002\u0002\u0002\u007f}\u0003\u0002\u0002\u0002\u007f\u0080\u0003",
    "\u0002\u0002\u0002\u0080\u0082\u0003\u0002\u0002\u0002\u0081\u007f\u0003",
    "\u0002\u0002\u0002\u0082\u0083\u0007\u0005\u0002\u0002\u0083\u0015\u0003",
    "\u0002\u0002\u0002\u0084\u0085\u0007\u000b\u0002\u0002\u0085\u0086\u0007",
    "\u0004\u0002\u0002\u0086\u0087\u00054\u001b\u0002\u0087\u0088\u0007",
    "\u0005\u0002\u0002\u0088\u008b\u0005\u0018\r\u0002\u0089\u008a\u0007",
    "\f\u0002\u0002\u008a\u008c\u0005\u001a\u000e\u0002\u008b\u0089\u0003",
    "\u0002\u0002\u0002\u008b\u008c\u0003\u0002\u0002\u0002\u008c\u0017\u0003",
    "\u0002\u0002\u0002\u008d\u008e\u0005\u000e\b\u0002\u008e\u0019\u0003",
    "\u0002\u0002\u0002\u008f\u0090\u0005\u000e\b\u0002\u0090\u001b\u0003",
    "\u0002\u0002\u0002\u0091\u0092\u0007\r\u0002\u0002\u0092\u0093\u0005",
    "4\u001b\u0002\u0093\u001d\u0003\u0002\u0002\u0002\u0094\u0098\u0005",
    "\"\u0012\u0002\u0095\u0098\u0005$\u0013\u0002\u0096\u0098\u0005&\u0014",
    "\u0002\u0097\u0094\u0003\u0002\u0002\u0002\u0097\u0095\u0003\u0002\u0002",
    "\u0002\u0097\u0096\u0003\u0002\u0002\u0002\u0098\u001f\u0003\u0002\u0002",
    "\u0002\u0099\u009a\u00054\u001b\u0002\u009a!\u0003\u0002\u0002\u0002",
    "\u009b\u009c\u0007\u000e\u0002\u0002\u009c\u009d\u0005\u000e\b\u0002",
    "\u009d\u009e\u0007\u000f\u0002\u0002\u009e\u009f\u0007\u0004\u0002\u0002",
    "\u009f\u00a0\u00054\u001b\u0002\u00a0\u00a1\u0007\u0005\u0002\u0002",
    "\u00a1#\u0003\u0002\u0002\u0002\u00a2\u00a3\u0007\u000f\u0002\u0002",
    "\u00a3\u00a4\u0007\u0004\u0002\u0002\u00a4\u00a5\u0005 \u0011\u0002",
    "\u00a5\u00a6\u0007\u0005\u0002\u0002\u00a6\u00a7\u0005\u000e\b\u0002",
    "\u00a7%\u0003\u0002\u0002\u0002\u00a8\u00a9\u0007\u0010\u0002\u0002",
    "\u00a9\u00ac\u0007\u0004\u0002\u0002\u00aa\u00ad\u0005*\u0016\u0002",
    "\u00ab\u00ad\u0005.\u0018\u0002\u00ac\u00aa\u0003\u0002\u0002\u0002",
    "\u00ac\u00ab\u0003\u0002\u0002\u0002\u00ad\u00ae\u0003\u0002\u0002\u0002",
    "\u00ae\u00af\u0007\u0011\u0002\u0002\u00af\u00b0\u0005 \u0011\u0002",
    "\u00b0\u00b1\u0007\u0011\u0002\u0002\u00b1\u00b2\u0005(\u0015\u0002",
    "\u00b2\u00b3\u0007\u0005\u0002\u0002\u00b3\u00b4\u0005\u000e\b\u0002",
    "\u00b4\'\u0003\u0002\u0002\u0002\u00b5\u00b6\u00054\u001b\u0002\u00b6",
    ")\u0003\u0002\u0002\u0002\u00b7\u00b8\u0007\u0012\u0002\u0002\u00b8",
    "\u00b9\u0007-\u0002\u0002\u00b9\u00ba\u0007\u0006\u0002\u0002\u00ba",
    "\u00bb\u0007&\u0002\u0002\u00bb\u00bc\u0007\b\u0002\u0002\u00bc\u00bd",
    "\u00054\u001b\u0002\u00bd+\u0003\u0002\u0002\u0002\u00be\u00bf\u0007",
    "\u0013\u0002\u0002\u00bf\u00c0\u0007-\u0002\u0002\u00c0\u00c1\u0007",
    "\u0006\u0002\u0002\u00c1\u00c2\u0007&\u0002\u0002\u00c2\u00c3\u0007",
    "\b\u0002\u0002\u00c3\u00c4\t\u0002\u0002\u0002\u00c4-\u0003\u0002\u0002",
    "\u0002\u00c5\u00c6\u0007-\u0002\u0002\u00c6\u00c7\u0007\b\u0002\u0002",
    "\u00c7\u00c8\u00054\u001b\u0002\u00c8/\u0003\u0002\u0002\u0002\u00c9",
    "\u00ca\u0007\u0014\u0002\u0002\u00ca\u00cb\u0007\u0015\u0002\u0002\u00cb",
    "\u00cc\u00054\u001b\u0002\u00cc\u00cd\u0007\u0016\u0002\u0002\u00cd",
    "\u00ce\u0007\b\u0002\u0002\u00ce\u00cf\u00056\u001c\u0002\u00cf1\u0003",
    "\u0002\u0002\u0002\u00d0\u00d1\u0007\u0017\u0002\u0002\u00d1\u00d2\u0007",
    "\u0004\u0002\u0002\u00d2\u00d3\u00054\u001b\u0002\u00d3\u00d4\u0007",
    "\u0005\u0002\u0002\u00d43\u0003\u0002\u0002\u0002\u00d5\u00d6\b\u001b",
    "\u0001\u0002\u00d6\u00d7\u0007\u0004\u0002\u0002\u00d7\u00d8\u00054",
    "\u001b\u0002\u00d8\u00d9\u0007\u0005\u0002\u0002\u00d9\u00ef\u0003\u0002",
    "\u0002\u0002\u00da\u00db\u0007-\u0002\u0002\u00db\u00ef\u0007\u0018",
    "\u0002\u0002\u00dc\u00dd\u0007-\u0002\u0002\u00dd\u00ef\u0007\u0019",
    "\u0002\u0002\u00de\u00df\u0007\u0018\u0002\u0002\u00df\u00ef\u0007-",
    "\u0002\u0002\u00e0\u00e1\u0007\u0019\u0002\u0002\u00e1\u00ef\u0007-",
    "\u0002\u0002\u00e2\u00ef\u0007-\u0002\u0002\u00e3\u00e4\u0007\u0014",
    "\u0002\u0002\u00e4\u00e5\u0007\u0015\u0002\u0002\u00e5\u00e6\u00054",
    "\u001b\u0002\u00e6\u00e7\u0007\u0016\u0002\u0002\u00e7\u00ef\u0003\u0002",
    "\u0002\u0002\u00e8\u00ef\u0007.\u0002\u0002\u00e9\u00ef\u0007/\u0002",
    "\u0002\u00ea\u00ef\u00070\u0002\u0002\u00eb\u00ef\u00071\u0002\u0002",
    "\u00ec\u00ef\u0007,\u0002\u0002\u00ed\u00ef\u0005\u0014\u000b\u0002",
    "\u00ee\u00d5\u0003\u0002\u0002\u0002\u00ee\u00da\u0003\u0002\u0002\u0002",
    "\u00ee\u00dc\u0003\u0002\u0002\u0002\u00ee\u00de\u0003\u0002\u0002\u0002",
    "\u00ee\u00e0\u0003\u0002\u0002\u0002\u00ee\u00e2\u0003\u0002\u0002\u0002",
    "\u00ee\u00e3\u0003\u0002\u0002\u0002\u00ee\u00e8\u0003\u0002\u0002\u0002",
    "\u00ee\u00e9\u0003\u0002\u0002\u0002\u00ee\u00ea\u0003\u0002\u0002\u0002",
    "\u00ee\u00eb\u0003\u0002\u0002\u0002\u00ee\u00ec\u0003\u0002\u0002\u0002",
    "\u00ee\u00ed\u0003\u0002\u0002\u0002\u00ef\u0116\u0003\u0002\u0002\u0002",
    "\u00f0\u00f1\f\u0016\u0002\u0002\u00f1\u00f2\u0007\u001a\u0002\u0002",
    "\u00f2\u0115\u00054\u001b\u0017\u00f3\u00f4\f\u0015\u0002\u0002\u00f4",
    "\u00f5\u0007\u001b\u0002\u0002\u00f5\u0115\u00054\u001b\u0016\u00f6",
    "\u00f7\f\u0014\u0002\u0002\u00f7\u00f8\u0007\u001c\u0002\u0002\u00f8",
    "\u0115\u00054\u001b\u0015\u00f9\u00fa\f\u0013\u0002\u0002\u00fa\u00fb",
    "\u0007\u001d\u0002\u0002\u00fb\u0115\u00054\u001b\u0014\u00fc\u00fd",
    "\f\n\u0002\u0002\u00fd\u00fe\u0007\u001e\u0002\u0002\u00fe\u0115\u0005",
    "4\u001b\u000b\u00ff\u0100\f\t\u0002\u0002\u0100\u0101\u0007\u001f\u0002",
    "\u0002\u0101\u0115\u00054\u001b\n\u0102\u0103\f\b\u0002\u0002\u0103",
    "\u0104\u0007 \u0002\u0002\u0104\u0115\u00054\u001b\t\u0105\u0106\f\u0007",
    "\u0002\u0002\u0106\u0107\u0007!\u0002\u0002\u0107\u0115\u00054\u001b",
    "\b\u0108\u0109\f\u0006\u0002\u0002\u0109\u010a\u0007\"\u0002\u0002\u010a",
    "\u0115\u00054\u001b\u0007\u010b\u010c\f\u0005\u0002\u0002\u010c\u010d",
    "\u0007#\u0002\u0002\u010d\u0115\u00054\u001b\u0006\u010e\u010f\f\u0004",
    "\u0002\u0002\u010f\u0110\u0007$\u0002\u0002\u0110\u0115\u00054\u001b",
    "\u0005\u0111\u0112\f\u0003\u0002\u0002\u0112\u0113\u0007%\u0002\u0002",
    "\u0113\u0115\u00054\u001b\u0004\u0114\u00f0\u0003\u0002\u0002\u0002",
    "\u0114\u00f3\u0003\u0002\u0002\u0002\u0114\u00f6\u0003\u0002\u0002\u0002",
    "\u0114\u00f9\u0003\u0002\u0002\u0002\u0114\u00fc\u0003\u0002\u0002\u0002",
    "\u0114\u00ff\u0003\u0002\u0002\u0002\u0114\u0102\u0003\u0002\u0002\u0002",
    "\u0114\u0105\u0003\u0002\u0002\u0002\u0114\u0108\u0003\u0002\u0002\u0002",
    "\u0114\u010b\u0003\u0002\u0002\u0002\u0114\u010e\u0003\u0002\u0002\u0002",
    "\u0114\u0111\u0003\u0002\u0002\u0002\u0115\u0118\u0003\u0002\u0002\u0002",
    "\u0116\u0114\u0003\u0002\u0002\u0002\u0116\u0117\u0003\u0002\u0002\u0002",
    "\u01175\u0003\u0002\u0002\u0002\u0118\u0116\u0003\u0002\u0002\u0002",
    "\u0119\u011e\u00054\u001b\u0002\u011a\u011b\u0007\u0007\u0002\u0002",
    "\u011b\u011d\u00054\u001b\u0002\u011c\u011a\u0003\u0002\u0002\u0002",
    "\u011d\u0120\u0003\u0002\u0002\u0002\u011e\u011c\u0003\u0002\u0002\u0002",
    "\u011e\u011f\u0003\u0002\u0002\u0002\u011f7\u0003\u0002\u0002\u0002",
    "\u0120\u011e\u0003\u0002\u0002\u0002\u0013;EJS^`grw\u007f\u008b\u0097",
    "\u00ac\u00ee\u0114\u0116\u011e"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'fun'", "'('", "')'", "':'", "','", "'='", "'{'", 
                     "'}'", "'if'", "'else'", "'return'", "'do'", "'while'",
    "'for'", "';'", "'var'", "'val'", "'memory'", "'['",
    "']'", "'println'", "'++'", "'--'", "'/'", "'*'", "'-'",
    "'+'", "'<'", "'<='", "'>'", "'>='", "'=='", "'!='",
    "'&&'", "'||'", null, "'Boolean'", "'Int'", "'Long'",
    "'Float'", "'Double'"];

var symbolicNames = [ null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null,
    null, null, null, null, null, null, null, null, null,
    "TYPES", "BOOLTYPE", "INTTYPE", "LONGTYPE", "FLOATTYPE",
    "DOUBLETYPE", "BOOLEANLITERAL", "IDENTIFIER", "INTEGER",
    "LONG", "FLOAT", "DOUBLE", "WHITESPACE"];

var ruleNames =  [ "program", "programPart", "functionDefinition", "parameterDeclaration", 
                   "functionParameter", "functionBody", "block", "statement", 
                   "statementList", "functionCall", "ifStatement", "trueBlock", 
                   "falseBlock", "jump", "loop", "loopBool", "doWhileLoop", 
                   "whileLoop", "forLoop", "forExpression", "varDeclaration",
    "valDeclaration", "assignment", "memAssignment", "println",
    "expression", "expressionList"];

function BigDataParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

BigDataParser.prototype = Object.create(antlr4.Parser.prototype);
BigDataParser.prototype.constructor = BigDataParser;

Object.defineProperty(BigDataParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

BigDataParser.EOF = antlr4.Token.EOF;
BigDataParser.T__0 = 1;
BigDataParser.T__1 = 2;
BigDataParser.T__2 = 3;
BigDataParser.T__3 = 4;
BigDataParser.T__4 = 5;
BigDataParser.T__5 = 6;
BigDataParser.T__6 = 7;
BigDataParser.T__7 = 8;
BigDataParser.T__8 = 9;
BigDataParser.T__9 = 10;
BigDataParser.T__10 = 11;
BigDataParser.T__11 = 12;
BigDataParser.T__12 = 13;
BigDataParser.T__13 = 14;
BigDataParser.T__14 = 15;
BigDataParser.T__15 = 16;
BigDataParser.T__16 = 17;
BigDataParser.T__17 = 18;
BigDataParser.T__18 = 19;
BigDataParser.T__19 = 20;
BigDataParser.T__20 = 21;
BigDataParser.T__21 = 22;
BigDataParser.T__22 = 23;
BigDataParser.T__23 = 24;
BigDataParser.T__24 = 25;
BigDataParser.T__25 = 26;
BigDataParser.T__26 = 27;
BigDataParser.T__27 = 28;
BigDataParser.T__28 = 29;
BigDataParser.T__29 = 30;
BigDataParser.T__30 = 31;
BigDataParser.T__31 = 32;
BigDataParser.T__32 = 33;
BigDataParser.T__33 = 34;
BigDataParser.T__34 = 35;
BigDataParser.TYPES = 36;
BigDataParser.BOOLTYPE = 37;
BigDataParser.INTTYPE = 38;
BigDataParser.LONGTYPE = 39;
BigDataParser.FLOATTYPE = 40;
BigDataParser.DOUBLETYPE = 41;
BigDataParser.BOOLEANLITERAL = 42;
BigDataParser.IDENTIFIER = 43;
BigDataParser.INTEGER = 44;
BigDataParser.LONG = 45;
BigDataParser.FLOAT = 46;
BigDataParser.DOUBLE = 47;
BigDataParser.WHITESPACE = 48;

BigDataParser.RULE_program = 0;
BigDataParser.RULE_programPart = 1;
BigDataParser.RULE_functionDefinition = 2;
BigDataParser.RULE_parameterDeclaration = 3;
BigDataParser.RULE_functionParameter = 4;
BigDataParser.RULE_functionBody = 5;
BigDataParser.RULE_block = 6;
BigDataParser.RULE_statement = 7;
BigDataParser.RULE_statementList = 8;
BigDataParser.RULE_functionCall = 9;
BigDataParser.RULE_ifStatement = 10;
BigDataParser.RULE_trueBlock = 11;
BigDataParser.RULE_falseBlock = 12;
BigDataParser.RULE_jump = 13;
BigDataParser.RULE_loop = 14;
BigDataParser.RULE_loopBool = 15;
BigDataParser.RULE_doWhileLoop = 16;
BigDataParser.RULE_whileLoop = 17;
BigDataParser.RULE_forLoop = 18;
BigDataParser.RULE_forExpression = 19;
BigDataParser.RULE_varDeclaration = 20;
BigDataParser.RULE_valDeclaration = 21;
BigDataParser.RULE_assignment = 22;
BigDataParser.RULE_memAssignment = 23;
BigDataParser.RULE_println = 24;
BigDataParser.RULE_expression = 25;
BigDataParser.RULE_expressionList = 26;

function ProgramContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BigDataParser.RULE_program;
    return this;
}

ProgramContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ProgramContext.prototype.constructor = ProgramContext;

ProgramContext.prototype.EOF = function() {
    return this.getToken(BigDataParser.EOF, 0);
};

ProgramContext.prototype.programPart = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ProgramPartContext);
    } else {
        return this.getTypedRuleContext(ProgramPartContext,i);
    }
};

ProgramContext.prototype.enterRule = function(listener) {
    if(listener instanceof BigDataListener ) {
        listener.enterProgram(this);
	}
};

ProgramContext.prototype.exitRule = function(listener) {
    if(listener instanceof BigDataListener ) {
        listener.exitProgram(this);
	}
};




BigDataParser.ProgramContext = ProgramContext;

BigDataParser.prototype.program = function() {

    var localctx = new ProgramContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, BigDataParser.RULE_program);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 55; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 54;
            this.programPart();
            this.state = 57; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===BigDataParser.T__0);
        this.state = 59;
        this.match(BigDataParser.EOF);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ProgramPartContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BigDataParser.RULE_programPart;
    return this;
}

ProgramPartContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ProgramPartContext.prototype.constructor = ProgramPartContext;


 
ProgramPartContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function ProgPartFunctionDefinitionContext(parser, ctx) {
	ProgramPartContext.call(this, parser);
    ProgramPartContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ProgPartFunctionDefinitionContext.prototype = Object.create(ProgramPartContext.prototype);
ProgPartFunctionDefinitionContext.prototype.constructor = ProgPartFunctionDefinitionContext;

BigDataParser.ProgPartFunctionDefinitionContext = ProgPartFunctionDefinitionContext;

ProgPartFunctionDefinitionContext.prototype.functionDefinition = function() {
    return this.getTypedRuleContext(FunctionDefinitionContext,0);
};
ProgPartFunctionDefinitionContext.prototype.enterRule = function(listener) {
    if(listener instanceof BigDataListener ) {
        listener.enterProgPartFunctionDefinition(this);
	}
};

ProgPartFunctionDefinitionContext.prototype.exitRule = function(listener) {
    if(listener instanceof BigDataListener ) {
        listener.exitProgPartFunctionDefinition(this);
	}
};



BigDataParser.ProgramPartContext = ProgramPartContext;

BigDataParser.prototype.programPart = function() {

    var localctx = new ProgramPartContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, BigDataParser.RULE_programPart);
    try {
        localctx = new ProgPartFunctionDefinitionContext(this, localctx);
        this.enterOuterAlt(localctx, 1);
        this.state = 61;
        this.functionDefinition();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function FunctionDefinitionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BigDataParser.RULE_functionDefinition;
    this.funcName = null; // Token
    this.params = null; // ParameterDeclarationContext
    this.type = null; // Token
    return this;
}

FunctionDefinitionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FunctionDefinitionContext.prototype.constructor = FunctionDefinitionContext;

FunctionDefinitionContext.prototype.functionBody = function() {
    return this.getTypedRuleContext(FunctionBodyContext,0);
};

FunctionDefinitionContext.prototype.IDENTIFIER = function() {
    return this.getToken(BigDataParser.IDENTIFIER, 0);
};

FunctionDefinitionContext.prototype.parameterDeclaration = function() {
    return this.getTypedRuleContext(ParameterDeclarationContext,0);
};

FunctionDefinitionContext.prototype.TYPES = function() {
    return this.getToken(BigDataParser.TYPES, 0);
};

FunctionDefinitionContext.prototype.enterRule = function(listener) {
    if(listener instanceof BigDataListener ) {
        listener.enterFunctionDefinition(this);
	}
};

FunctionDefinitionContext.prototype.exitRule = function(listener) {
    if(listener instanceof BigDataListener ) {
        listener.exitFunctionDefinition(this);
	}
};




BigDataParser.FunctionDefinitionContext = FunctionDefinitionContext;

BigDataParser.prototype.functionDefinition = function() {

    var localctx = new FunctionDefinitionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, BigDataParser.RULE_functionDefinition);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 63;
        this.match(BigDataParser.T__0);
        this.state = 64;
        localctx.funcName = this.match(BigDataParser.IDENTIFIER);
        this.state = 65;
        this.match(BigDataParser.T__1);
        this.state = 67;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===BigDataParser.IDENTIFIER) {
            this.state = 66;
            localctx.params = this.parameterDeclaration();
        }

        this.state = 69;
        this.match(BigDataParser.T__2);
        this.state = 72;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===BigDataParser.T__3) {
            this.state = 70;
            this.match(BigDataParser.T__3);
            this.state = 71;
            localctx.type = this.match(BigDataParser.TYPES);
        }

        this.state = 74;
        this.functionBody();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ParameterDeclarationContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BigDataParser.RULE_parameterDeclaration;
    return this;
}

ParameterDeclarationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ParameterDeclarationContext.prototype.constructor = ParameterDeclarationContext;

ParameterDeclarationContext.prototype.functionParameter = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(FunctionParameterContext);
    } else {
        return this.getTypedRuleContext(FunctionParameterContext,i);
    }
};

ParameterDeclarationContext.prototype.enterRule = function(listener) {
    if(listener instanceof BigDataListener ) {
        listener.enterParameterDeclaration(this);
	}
};

ParameterDeclarationContext.prototype.exitRule = function(listener) {
    if(listener instanceof BigDataListener ) {
        listener.exitParameterDeclaration(this);
	}
};




BigDataParser.ParameterDeclarationContext = ParameterDeclarationContext;

BigDataParser.prototype.parameterDeclaration = function() {

    var localctx = new ParameterDeclarationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, BigDataParser.RULE_parameterDeclaration);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 76;
        this.functionParameter();
        this.state = 81;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===BigDataParser.T__4) {
            this.state = 77;
            this.match(BigDataParser.T__4);
            this.state = 78;
            this.functionParameter();
            this.state = 83;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function FunctionParameterContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BigDataParser.RULE_functionParameter;
    this.varName = null; // Token
    this.type = null; // Token
    return this;
}

FunctionParameterContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FunctionParameterContext.prototype.constructor = FunctionParameterContext;

FunctionParameterContext.prototype.IDENTIFIER = function() {
    return this.getToken(BigDataParser.IDENTIFIER, 0);
};

FunctionParameterContext.prototype.TYPES = function() {
    return this.getToken(BigDataParser.TYPES, 0);
};

FunctionParameterContext.prototype.enterRule = function(listener) {
    if(listener instanceof BigDataListener ) {
        listener.enterFunctionParameter(this);
	}
};

FunctionParameterContext.prototype.exitRule = function(listener) {
    if(listener instanceof BigDataListener ) {
        listener.exitFunctionParameter(this);
	}
};




BigDataParser.FunctionParameterContext = FunctionParameterContext;

BigDataParser.prototype.functionParameter = function() {

    var localctx = new FunctionParameterContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, BigDataParser.RULE_functionParameter);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 84;
        localctx.varName = this.match(BigDataParser.IDENTIFIER);
        this.state = 85;
        this.match(BigDataParser.T__3);
        this.state = 86;
        localctx.type = this.match(BigDataParser.TYPES);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function FunctionBodyContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BigDataParser.RULE_functionBody;
    return this;
}

FunctionBodyContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FunctionBodyContext.prototype.constructor = FunctionBodyContext;

FunctionBodyContext.prototype.block = function() {
    return this.getTypedRuleContext(BlockContext,0);
};

FunctionBodyContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

FunctionBodyContext.prototype.statement = function () {
    return this.getTypedRuleContext(StatementContext, 0);
};

FunctionBodyContext.prototype.enterRule = function(listener) {
    if(listener instanceof BigDataListener ) {
        listener.enterFunctionBody(this);
	}
};

FunctionBodyContext.prototype.exitRule = function(listener) {
    if(listener instanceof BigDataListener ) {
        listener.exitFunctionBody(this);
	}
};




BigDataParser.FunctionBodyContext = FunctionBodyContext;

BigDataParser.prototype.functionBody = function() {

    var localctx = new FunctionBodyContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, BigDataParser.RULE_functionBody);
    try {
        this.state = 94;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case BigDataParser.T__6:
        case BigDataParser.T__8:
        case BigDataParser.T__10:
        case BigDataParser.T__11:
        case BigDataParser.T__12:
        case BigDataParser.T__13:
        case BigDataParser.T__15:
        case BigDataParser.T__16:
            case BigDataParser.T__17:
            case BigDataParser.T__20:
        case BigDataParser.IDENTIFIER:
            this.enterOuterAlt(localctx, 1);
            this.state = 88;
            this.block();
            break;
        case BigDataParser.T__5:
            this.enterOuterAlt(localctx, 2);
            this.state = 89;
            this.match(BigDataParser.T__5);
            this.state = 92;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input, 4, this._ctx);
            switch (la_) {
                case 1:
                    this.state = 90;
                    this.expression(0);
                    break;

                case 2:
                    this.state = 91;
                    this.statement();
                    break;

            }
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function BlockContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BigDataParser.RULE_block;
    return this;
}

BlockContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BlockContext.prototype.constructor = BlockContext;

BlockContext.prototype.statement = function() {
    return this.getTypedRuleContext(StatementContext,0);
};

BlockContext.prototype.statementList = function() {
    return this.getTypedRuleContext(StatementListContext,0);
};

BlockContext.prototype.enterRule = function(listener) {
    if(listener instanceof BigDataListener ) {
        listener.enterBlock(this);
	}
};

BlockContext.prototype.exitRule = function(listener) {
    if(listener instanceof BigDataListener ) {
        listener.exitBlock(this);
	}
};




BigDataParser.BlockContext = BlockContext;

BigDataParser.prototype.block = function() {

    var localctx = new BlockContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, BigDataParser.RULE_block);
    try {
        this.state = 101;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case BigDataParser.T__8:
        case BigDataParser.T__10:
        case BigDataParser.T__11:
        case BigDataParser.T__12:
        case BigDataParser.T__13:
        case BigDataParser.T__15:
        case BigDataParser.T__16:
            case BigDataParser.T__17:
            case BigDataParser.T__20:
        case BigDataParser.IDENTIFIER:
            this.enterOuterAlt(localctx, 1);
            this.state = 96;
            this.statement();
            break;
        case BigDataParser.T__6:
            this.enterOuterAlt(localctx, 2);
            this.state = 97;
            this.match(BigDataParser.T__6);
            this.state = 98;
            this.statementList();
            this.state = 99;
            this.match(BigDataParser.T__7);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function StatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BigDataParser.RULE_statement;
    return this;
}

StatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StatementContext.prototype.constructor = StatementContext;

StatementContext.prototype.functionCall = function() {
    return this.getTypedRuleContext(FunctionCallContext,0);
};

StatementContext.prototype.ifStatement = function() {
    return this.getTypedRuleContext(IfStatementContext,0);
};

StatementContext.prototype.jump = function() {
    return this.getTypedRuleContext(JumpContext,0);
};

StatementContext.prototype.loop = function() {
    return this.getTypedRuleContext(LoopContext,0);
};

StatementContext.prototype.varDeclaration = function() {
    return this.getTypedRuleContext(VarDeclarationContext,0);
};

StatementContext.prototype.valDeclaration = function () {
    return this.getTypedRuleContext(ValDeclarationContext, 0);
};

StatementContext.prototype.assignment = function() {
    return this.getTypedRuleContext(AssignmentContext,0);
};

StatementContext.prototype.memAssignment = function() {
    return this.getTypedRuleContext(MemAssignmentContext,0);
};

StatementContext.prototype.println = function() {
    return this.getTypedRuleContext(PrintlnContext,0);
};

StatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof BigDataListener ) {
        listener.enterStatement(this);
	}
};

StatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof BigDataListener ) {
        listener.exitStatement(this);
	}
};




BigDataParser.StatementContext = StatementContext;

BigDataParser.prototype.statement = function() {

    var localctx = new StatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, BigDataParser.RULE_statement);
    try {
        this.state = 112;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input, 7, this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 103;
            this.functionCall();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 104;
            this.ifStatement();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 105;
            this.jump();
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 106;
            this.loop();
            break;

        case 5:
            this.enterOuterAlt(localctx, 5);
            this.state = 107;
            this.varDeclaration();
            break;

        case 6:
            this.enterOuterAlt(localctx, 6);
            this.state = 108;
            this.valDeclaration();
            break;

        case 7:
            this.enterOuterAlt(localctx, 7);
            this.state = 109;
            this.assignment();
            break;

        case 8:
            this.enterOuterAlt(localctx, 8);
            this.state = 110;
            this.memAssignment();
            break;

            case 9:
                this.enterOuterAlt(localctx, 9);
                this.state = 111;
            this.println();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function StatementListContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BigDataParser.RULE_statementList;
    return this;
}

StatementListContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StatementListContext.prototype.constructor = StatementListContext;

StatementListContext.prototype.statement = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(StatementContext);
    } else {
        return this.getTypedRuleContext(StatementContext,i);
    }
};

StatementListContext.prototype.enterRule = function(listener) {
    if(listener instanceof BigDataListener ) {
        listener.enterStatementList(this);
	}
};

StatementListContext.prototype.exitRule = function(listener) {
    if(listener instanceof BigDataListener ) {
        listener.exitStatementList(this);
	}
};




BigDataParser.StatementListContext = StatementListContext;

BigDataParser.prototype.statementList = function() {

    var localctx = new StatementListContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, BigDataParser.RULE_statementList);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 117;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while ((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << BigDataParser.T__8) | (1 << BigDataParser.T__10) | (1 << BigDataParser.T__11) | (1 << BigDataParser.T__12) | (1 << BigDataParser.T__13) | (1 << BigDataParser.T__15) | (1 << BigDataParser.T__16) | (1 << BigDataParser.T__17) | (1 << BigDataParser.T__20))) !== 0) || _la === BigDataParser.IDENTIFIER) {
            this.state = 114;
            this.statement();
            this.state = 119;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function FunctionCallContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BigDataParser.RULE_functionCall;
    this.funcName = null; // Token
    return this;
}

FunctionCallContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FunctionCallContext.prototype.constructor = FunctionCallContext;

FunctionCallContext.prototype.IDENTIFIER = function() {
    return this.getToken(BigDataParser.IDENTIFIER, 0);
};

FunctionCallContext.prototype.expressionList = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionListContext);
    } else {
        return this.getTypedRuleContext(ExpressionListContext,i);
    }
};

FunctionCallContext.prototype.enterRule = function(listener) {
    if(listener instanceof BigDataListener ) {
        listener.enterFunctionCall(this);
	}
};

FunctionCallContext.prototype.exitRule = function(listener) {
    if(listener instanceof BigDataListener ) {
        listener.exitFunctionCall(this);
	}
};




BigDataParser.FunctionCallContext = FunctionCallContext;

BigDataParser.prototype.functionCall = function() {

    var localctx = new FunctionCallContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, BigDataParser.RULE_functionCall);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 120;
        localctx.funcName = this.match(BigDataParser.IDENTIFIER);
        this.state = 121;
        this.match(BigDataParser.T__1);
        this.state = 125;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while ((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << BigDataParser.T__1) | (1 << BigDataParser.T__17) | (1 << BigDataParser.T__21) | (1 << BigDataParser.T__22))) !== 0) || ((((_la - 42)) & ~0x1f) == 0 && ((1 << (_la - 42)) & ((1 << (BigDataParser.BOOLEANLITERAL - 42)) | (1 << (BigDataParser.IDENTIFIER - 42)) | (1 << (BigDataParser.INTEGER - 42)) | (1 << (BigDataParser.LONG - 42)) | (1 << (BigDataParser.FLOAT - 42)) | (1 << (BigDataParser.DOUBLE - 42)))) !== 0)) {
            this.state = 122;
            this.expressionList();
            this.state = 127;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 128;
        this.match(BigDataParser.T__2);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function IfStatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BigDataParser.RULE_ifStatement;
    return this;
}

IfStatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
IfStatementContext.prototype.constructor = IfStatementContext;

IfStatementContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

IfStatementContext.prototype.trueBlock = function() {
    return this.getTypedRuleContext(TrueBlockContext,0);
};

IfStatementContext.prototype.falseBlock = function() {
    return this.getTypedRuleContext(FalseBlockContext,0);
};

IfStatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof BigDataListener ) {
        listener.enterIfStatement(this);
	}
};

IfStatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof BigDataListener ) {
        listener.exitIfStatement(this);
	}
};




BigDataParser.IfStatementContext = IfStatementContext;

BigDataParser.prototype.ifStatement = function() {

    var localctx = new IfStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, BigDataParser.RULE_ifStatement);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 130;
        this.match(BigDataParser.T__8);
        this.state = 131;
        this.match(BigDataParser.T__1);
        this.state = 132;
        this.expression(0);
        this.state = 133;
        this.match(BigDataParser.T__2);
        this.state = 134;
        this.trueBlock();
        this.state = 137;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input, 10, this._ctx);
        if(la_===1) {
            this.state = 135;
            this.match(BigDataParser.T__9);
            this.state = 136;
            this.falseBlock();

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function TrueBlockContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BigDataParser.RULE_trueBlock;
    return this;
}

TrueBlockContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TrueBlockContext.prototype.constructor = TrueBlockContext;

TrueBlockContext.prototype.block = function() {
    return this.getTypedRuleContext(BlockContext,0);
};

TrueBlockContext.prototype.enterRule = function(listener) {
    if(listener instanceof BigDataListener ) {
        listener.enterTrueBlock(this);
	}
};

TrueBlockContext.prototype.exitRule = function(listener) {
    if(listener instanceof BigDataListener ) {
        listener.exitTrueBlock(this);
	}
};




BigDataParser.TrueBlockContext = TrueBlockContext;

BigDataParser.prototype.trueBlock = function() {

    var localctx = new TrueBlockContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, BigDataParser.RULE_trueBlock);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 139;
        this.block();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function FalseBlockContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BigDataParser.RULE_falseBlock;
    return this;
}

FalseBlockContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FalseBlockContext.prototype.constructor = FalseBlockContext;

FalseBlockContext.prototype.block = function() {
    return this.getTypedRuleContext(BlockContext,0);
};

FalseBlockContext.prototype.enterRule = function(listener) {
    if(listener instanceof BigDataListener ) {
        listener.enterFalseBlock(this);
	}
};

FalseBlockContext.prototype.exitRule = function(listener) {
    if(listener instanceof BigDataListener ) {
        listener.exitFalseBlock(this);
	}
};




BigDataParser.FalseBlockContext = FalseBlockContext;

BigDataParser.prototype.falseBlock = function() {

    var localctx = new FalseBlockContext(this, this._ctx, this.state);
    this.enterRule(localctx, 24, BigDataParser.RULE_falseBlock);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 141;
        this.block();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function JumpContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BigDataParser.RULE_jump;
    return this;
}

JumpContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
JumpContext.prototype.constructor = JumpContext;


 
JumpContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function ReturnContext(parser, ctx) {
	JumpContext.call(this, parser);
    JumpContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ReturnContext.prototype = Object.create(JumpContext.prototype);
ReturnContext.prototype.constructor = ReturnContext;

BigDataParser.ReturnContext = ReturnContext;

ReturnContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};
ReturnContext.prototype.enterRule = function(listener) {
    if(listener instanceof BigDataListener ) {
        listener.enterReturn(this);
	}
};

ReturnContext.prototype.exitRule = function(listener) {
    if(listener instanceof BigDataListener ) {
        listener.exitReturn(this);
	}
};



BigDataParser.JumpContext = JumpContext;

BigDataParser.prototype.jump = function() {

    var localctx = new JumpContext(this, this._ctx, this.state);
    this.enterRule(localctx, 26, BigDataParser.RULE_jump);
    try {
        localctx = new ReturnContext(this, localctx);
        this.enterOuterAlt(localctx, 1);
        this.state = 143;
        this.match(BigDataParser.T__10);
        this.state = 144;
        this.expression(0);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function LoopContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BigDataParser.RULE_loop;
    return this;
}

LoopContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
LoopContext.prototype.constructor = LoopContext;

LoopContext.prototype.doWhileLoop = function() {
    return this.getTypedRuleContext(DoWhileLoopContext,0);
};

LoopContext.prototype.whileLoop = function() {
    return this.getTypedRuleContext(WhileLoopContext,0);
};

LoopContext.prototype.forLoop = function() {
    return this.getTypedRuleContext(ForLoopContext,0);
};

LoopContext.prototype.enterRule = function(listener) {
    if(listener instanceof BigDataListener ) {
        listener.enterLoop(this);
	}
};

LoopContext.prototype.exitRule = function(listener) {
    if(listener instanceof BigDataListener ) {
        listener.exitLoop(this);
	}
};




BigDataParser.LoopContext = LoopContext;

BigDataParser.prototype.loop = function() {

    var localctx = new LoopContext(this, this._ctx, this.state);
    this.enterRule(localctx, 28, BigDataParser.RULE_loop);
    try {
        this.state = 149;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case BigDataParser.T__11:
            this.enterOuterAlt(localctx, 1);
            this.state = 146;
            this.doWhileLoop();
            break;
        case BigDataParser.T__12:
            this.enterOuterAlt(localctx, 2);
            this.state = 147;
            this.whileLoop();
            break;
        case BigDataParser.T__13:
            this.enterOuterAlt(localctx, 3);
            this.state = 148;
            this.forLoop();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function LoopBoolContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BigDataParser.RULE_loopBool;
    return this;
}

LoopBoolContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
LoopBoolContext.prototype.constructor = LoopBoolContext;

LoopBoolContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

LoopBoolContext.prototype.enterRule = function(listener) {
    if(listener instanceof BigDataListener ) {
        listener.enterLoopBool(this);
	}
};

LoopBoolContext.prototype.exitRule = function(listener) {
    if(listener instanceof BigDataListener ) {
        listener.exitLoopBool(this);
	}
};




BigDataParser.LoopBoolContext = LoopBoolContext;

BigDataParser.prototype.loopBool = function() {

    var localctx = new LoopBoolContext(this, this._ctx, this.state);
    this.enterRule(localctx, 30, BigDataParser.RULE_loopBool);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 151;
        this.expression(0);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function DoWhileLoopContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BigDataParser.RULE_doWhileLoop;
    return this;
}

DoWhileLoopContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DoWhileLoopContext.prototype.constructor = DoWhileLoopContext;

DoWhileLoopContext.prototype.block = function() {
    return this.getTypedRuleContext(BlockContext,0);
};

DoWhileLoopContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

DoWhileLoopContext.prototype.enterRule = function(listener) {
    if(listener instanceof BigDataListener ) {
        listener.enterDoWhileLoop(this);
	}
};

DoWhileLoopContext.prototype.exitRule = function(listener) {
    if(listener instanceof BigDataListener ) {
        listener.exitDoWhileLoop(this);
	}
};




BigDataParser.DoWhileLoopContext = DoWhileLoopContext;

BigDataParser.prototype.doWhileLoop = function() {

    var localctx = new DoWhileLoopContext(this, this._ctx, this.state);
    this.enterRule(localctx, 32, BigDataParser.RULE_doWhileLoop);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 153;
        this.match(BigDataParser.T__11);
        this.state = 154;
        this.block();
        this.state = 155;
        this.match(BigDataParser.T__12);
        this.state = 156;
        this.match(BigDataParser.T__1);
        this.state = 157;
        this.expression(0);
        this.state = 158;
        this.match(BigDataParser.T__2);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function WhileLoopContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BigDataParser.RULE_whileLoop;
    return this;
}

WhileLoopContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
WhileLoopContext.prototype.constructor = WhileLoopContext;

WhileLoopContext.prototype.loopBool = function() {
    return this.getTypedRuleContext(LoopBoolContext,0);
};

WhileLoopContext.prototype.block = function() {
    return this.getTypedRuleContext(BlockContext,0);
};

WhileLoopContext.prototype.enterRule = function(listener) {
    if(listener instanceof BigDataListener ) {
        listener.enterWhileLoop(this);
	}
};

WhileLoopContext.prototype.exitRule = function(listener) {
    if(listener instanceof BigDataListener ) {
        listener.exitWhileLoop(this);
	}
};




BigDataParser.WhileLoopContext = WhileLoopContext;

BigDataParser.prototype.whileLoop = function() {

    var localctx = new WhileLoopContext(this, this._ctx, this.state);
    this.enterRule(localctx, 34, BigDataParser.RULE_whileLoop);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 160;
        this.match(BigDataParser.T__12);
        this.state = 161;
        this.match(BigDataParser.T__1);
        this.state = 162;
        this.loopBool();
        this.state = 163;
        this.match(BigDataParser.T__2);
        this.state = 164;
        this.block();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ForLoopContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BigDataParser.RULE_forLoop;
    return this;
}

ForLoopContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ForLoopContext.prototype.constructor = ForLoopContext;

ForLoopContext.prototype.loopBool = function() {
    return this.getTypedRuleContext(LoopBoolContext,0);
};

ForLoopContext.prototype.forExpression = function() {
    return this.getTypedRuleContext(ForExpressionContext,0);
};

ForLoopContext.prototype.block = function() {
    return this.getTypedRuleContext(BlockContext,0);
};

ForLoopContext.prototype.varDeclaration = function() {
    return this.getTypedRuleContext(VarDeclarationContext,0);
};

ForLoopContext.prototype.assignment = function() {
    return this.getTypedRuleContext(AssignmentContext,0);
};

ForLoopContext.prototype.enterRule = function(listener) {
    if(listener instanceof BigDataListener ) {
        listener.enterForLoop(this);
	}
};

ForLoopContext.prototype.exitRule = function(listener) {
    if(listener instanceof BigDataListener ) {
        listener.exitForLoop(this);
	}
};




BigDataParser.ForLoopContext = ForLoopContext;

BigDataParser.prototype.forLoop = function() {

    var localctx = new ForLoopContext(this, this._ctx, this.state);
    this.enterRule(localctx, 36, BigDataParser.RULE_forLoop);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 166;
        this.match(BigDataParser.T__13);
        this.state = 167;
        this.match(BigDataParser.T__1);
        this.state = 170;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case BigDataParser.T__15:
            this.state = 168;
            this.varDeclaration();
            break;
        case BigDataParser.IDENTIFIER:
            this.state = 169;
            this.assignment();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
        this.state = 172;
        this.match(BigDataParser.T__14);
        this.state = 173;
        this.loopBool();
        this.state = 174;
        this.match(BigDataParser.T__14);
        this.state = 175;
        this.forExpression();
        this.state = 176;
        this.match(BigDataParser.T__2);
        this.state = 177;
        this.block();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ForExpressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BigDataParser.RULE_forExpression;
    return this;
}

ForExpressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ForExpressionContext.prototype.constructor = ForExpressionContext;

ForExpressionContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

ForExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof BigDataListener ) {
        listener.enterForExpression(this);
	}
};

ForExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof BigDataListener ) {
        listener.exitForExpression(this);
	}
};




BigDataParser.ForExpressionContext = ForExpressionContext;

BigDataParser.prototype.forExpression = function() {

    var localctx = new ForExpressionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 38, BigDataParser.RULE_forExpression);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 179;
        this.expression(0);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function VarDeclarationContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BigDataParser.RULE_varDeclaration;
    this.varName = null; // Token
    this.type = null; // Token
    return this;
}

VarDeclarationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
VarDeclarationContext.prototype.constructor = VarDeclarationContext;

VarDeclarationContext.prototype.expression = function () {
    return this.getTypedRuleContext(ExpressionContext, 0);
};

VarDeclarationContext.prototype.IDENTIFIER = function() {
    return this.getToken(BigDataParser.IDENTIFIER, 0);
};

VarDeclarationContext.prototype.TYPES = function() {
    return this.getToken(BigDataParser.TYPES, 0);
};

VarDeclarationContext.prototype.enterRule = function(listener) {
    if(listener instanceof BigDataListener ) {
        listener.enterVarDeclaration(this);
	}
};

VarDeclarationContext.prototype.exitRule = function(listener) {
    if(listener instanceof BigDataListener ) {
        listener.exitVarDeclaration(this);
	}
};




BigDataParser.VarDeclarationContext = VarDeclarationContext;

BigDataParser.prototype.varDeclaration = function() {

    var localctx = new VarDeclarationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 40, BigDataParser.RULE_varDeclaration);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 181;
        this.match(BigDataParser.T__15);
        this.state = 182;
        localctx.varName = this.match(BigDataParser.IDENTIFIER);
        this.state = 183;
        this.match(BigDataParser.T__3);
        this.state = 184;
        localctx.type = this.match(BigDataParser.TYPES);
        this.state = 185;
        this.match(BigDataParser.T__5);
        this.state = 186;
        this.expression(0);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ValDeclarationContext(parser, parent, invokingState) {
    if (parent === undefined) {
        parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
        invokingState = -1;
    }
    antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BigDataParser.RULE_valDeclaration;
    this.valName = null; // Token
    this.type = null; // Token
    this.value = null; // Token
    return this;
}

ValDeclarationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ValDeclarationContext.prototype.constructor = ValDeclarationContext;

ValDeclarationContext.prototype.IDENTIFIER = function () {
    return this.getToken(BigDataParser.IDENTIFIER, 0);
};

ValDeclarationContext.prototype.TYPES = function () {
    return this.getToken(BigDataParser.TYPES, 0);
};

ValDeclarationContext.prototype.INTEGER = function () {
    return this.getToken(BigDataParser.INTEGER, 0);
};

ValDeclarationContext.prototype.LONG = function () {
    return this.getToken(BigDataParser.LONG, 0);
};

ValDeclarationContext.prototype.FLOAT = function () {
    return this.getToken(BigDataParser.FLOAT, 0);
};

ValDeclarationContext.prototype.DOUBLE = function () {
    return this.getToken(BigDataParser.DOUBLE, 0);
};

ValDeclarationContext.prototype.enterRule = function (listener) {
    if (listener instanceof BigDataListener) {
        listener.enterValDeclaration(this);
    }
};

ValDeclarationContext.prototype.exitRule = function (listener) {
    if (listener instanceof BigDataListener) {
        listener.exitValDeclaration(this);
    }
};


BigDataParser.ValDeclarationContext = ValDeclarationContext;

BigDataParser.prototype.valDeclaration = function () {

    var localctx = new ValDeclarationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 42, BigDataParser.RULE_valDeclaration);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 188;
        this.match(BigDataParser.T__16);
        this.state = 189;
        localctx.valName = this.match(BigDataParser.IDENTIFIER);
        this.state = 190;
        this.match(BigDataParser.T__3);
        this.state = 191;
        localctx.type = this.match(BigDataParser.TYPES);
        this.state = 192;
        this.match(BigDataParser.T__5);
        this.state = 193;
        localctx.value = this._input.LT(1);
        _la = this._input.LA(1);
        if (!(((((_la - 44)) & ~0x1f) == 0 && ((1 << (_la - 44)) & ((1 << (BigDataParser.INTEGER - 44)) | (1 << (BigDataParser.LONG - 44)) | (1 << (BigDataParser.FLOAT - 44)) | (1 << (BigDataParser.DOUBLE - 44)))) !== 0))) {
            localctx.value = this._errHandler.recoverInline(this);
        }
        else {
            this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
        if (re instanceof antlr4.error.RecognitionException) {
            localctx.exception = re;
            this._errHandler.reportError(this, re);
            this._errHandler.recover(this, re);
        } else {
            throw re;
        }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function AssignmentContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BigDataParser.RULE_assignment;
    this.varName = null; // Token
    return this;
}

AssignmentContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AssignmentContext.prototype.constructor = AssignmentContext;

AssignmentContext.prototype.expression = function () {
    return this.getTypedRuleContext(ExpressionContext, 0);
};

AssignmentContext.prototype.IDENTIFIER = function() {
    return this.getToken(BigDataParser.IDENTIFIER, 0);
};

AssignmentContext.prototype.enterRule = function(listener) {
    if(listener instanceof BigDataListener ) {
        listener.enterAssignment(this);
	}
};

AssignmentContext.prototype.exitRule = function(listener) {
    if(listener instanceof BigDataListener ) {
        listener.exitAssignment(this);
	}
};




BigDataParser.AssignmentContext = AssignmentContext;

BigDataParser.prototype.assignment = function() {

    var localctx = new AssignmentContext(this, this._ctx, this.state);
    this.enterRule(localctx, 44, BigDataParser.RULE_assignment);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 195;
        localctx.varName = this.match(BigDataParser.IDENTIFIER);
        this.state = 196;
        this.match(BigDataParser.T__5);
        this.state = 197;
        this.expression(0);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function MemAssignmentContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BigDataParser.RULE_memAssignment;
    return this;
}

MemAssignmentContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MemAssignmentContext.prototype.constructor = MemAssignmentContext;

MemAssignmentContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

MemAssignmentContext.prototype.expressionList = function() {
    return this.getTypedRuleContext(ExpressionListContext,0);
};

MemAssignmentContext.prototype.enterRule = function(listener) {
    if(listener instanceof BigDataListener ) {
        listener.enterMemAssignment(this);
	}
};

MemAssignmentContext.prototype.exitRule = function(listener) {
    if(listener instanceof BigDataListener ) {
        listener.exitMemAssignment(this);
	}
};




BigDataParser.MemAssignmentContext = MemAssignmentContext;

BigDataParser.prototype.memAssignment = function() {

    var localctx = new MemAssignmentContext(this, this._ctx, this.state);
    this.enterRule(localctx, 46, BigDataParser.RULE_memAssignment);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 199;
        this.match(BigDataParser.T__17);
        this.state = 200;
        this.match(BigDataParser.T__18);
        this.state = 201;
        this.expression(0);
        this.state = 202;
        this.match(BigDataParser.T__19);
        this.state = 203;
        this.match(BigDataParser.T__5);
        this.state = 204;
        this.expressionList();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function PrintlnContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BigDataParser.RULE_println;
    return this;
}

PrintlnContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PrintlnContext.prototype.constructor = PrintlnContext;

PrintlnContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

PrintlnContext.prototype.enterRule = function(listener) {
    if(listener instanceof BigDataListener ) {
        listener.enterPrintln(this);
	}
};

PrintlnContext.prototype.exitRule = function(listener) {
    if(listener instanceof BigDataListener ) {
        listener.exitPrintln(this);
	}
};




BigDataParser.PrintlnContext = PrintlnContext;

BigDataParser.prototype.println = function() {

    var localctx = new PrintlnContext(this, this._ctx, this.state);
    this.enterRule(localctx, 48, BigDataParser.RULE_println);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 206;
        this.match(BigDataParser.T__20);
        this.state = 207;
        this.match(BigDataParser.T__1);
        this.state = 208;
        this.expression(0);
        this.state = 209;
        this.match(BigDataParser.T__2);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ExpressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BigDataParser.RULE_expression;
    return this;
}

ExpressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExpressionContext.prototype.constructor = ExpressionContext;


 
ExpressionContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};

function PreIncrementContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    this.varName = null; // Token;
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

PreIncrementContext.prototype = Object.create(ExpressionContext.prototype);
PreIncrementContext.prototype.constructor = PreIncrementContext;

BigDataParser.PreIncrementContext = PreIncrementContext;

PreIncrementContext.prototype.IDENTIFIER = function() {
    return this.getToken(BigDataParser.IDENTIFIER, 0);
};
PreIncrementContext.prototype.enterRule = function(listener) {
    if(listener instanceof BigDataListener ) {
        listener.enterPreIncrement(this);
	}
};

PreIncrementContext.prototype.exitRule = function(listener) {
    if(listener instanceof BigDataListener ) {
        listener.exitPreIncrement(this);
	}
};


function MemoryContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

MemoryContext.prototype = Object.create(ExpressionContext.prototype);
MemoryContext.prototype.constructor = MemoryContext;

BigDataParser.MemoryContext = MemoryContext;

MemoryContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};
MemoryContext.prototype.enterRule = function(listener) {
    if(listener instanceof BigDataListener ) {
        listener.enterMemory(this);
	}
};

MemoryContext.prototype.exitRule = function(listener) {
    if(listener instanceof BigDataListener ) {
        listener.exitMemory(this);
	}
};


function LTContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

LTContext.prototype = Object.create(ExpressionContext.prototype);
LTContext.prototype.constructor = LTContext;

BigDataParser.LTContext = LTContext;

LTContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};
LTContext.prototype.enterRule = function(listener) {
    if(listener instanceof BigDataListener ) {
        listener.enterLT(this);
	}
};

LTContext.prototype.exitRule = function(listener) {
    if(listener instanceof BigDataListener ) {
        listener.exitLT(this);
	}
};


function LANDContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

LANDContext.prototype = Object.create(ExpressionContext.prototype);
LANDContext.prototype.constructor = LANDContext;

BigDataParser.LANDContext = LANDContext;

LANDContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};
LANDContext.prototype.enterRule = function(listener) {
    if(listener instanceof BigDataListener ) {
        listener.enterLAND(this);
	}
};

LANDContext.prototype.exitRule = function(listener) {
    if(listener instanceof BigDataListener ) {
        listener.exitLAND(this);
	}
};


function ParenthesisContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ParenthesisContext.prototype = Object.create(ExpressionContext.prototype);
ParenthesisContext.prototype.constructor = ParenthesisContext;

BigDataParser.ParenthesisContext = ParenthesisContext;

ParenthesisContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};
ParenthesisContext.prototype.enterRule = function(listener) {
    if(listener instanceof BigDataListener ) {
        listener.enterParenthesis(this);
	}
};

ParenthesisContext.prototype.exitRule = function(listener) {
    if(listener instanceof BigDataListener ) {
        listener.exitParenthesis(this);
	}
};


function PostIncrementContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    this.varName = null; // Token;
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

PostIncrementContext.prototype = Object.create(ExpressionContext.prototype);
PostIncrementContext.prototype.constructor = PostIncrementContext;

BigDataParser.PostIncrementContext = PostIncrementContext;

PostIncrementContext.prototype.IDENTIFIER = function() {
    return this.getToken(BigDataParser.IDENTIFIER, 0);
};
PostIncrementContext.prototype.enterRule = function(listener) {
    if(listener instanceof BigDataListener ) {
        listener.enterPostIncrement(this);
	}
};

PostIncrementContext.prototype.exitRule = function(listener) {
    if(listener instanceof BigDataListener ) {
        listener.exitPostIncrement(this);
	}
};


function BooleanContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

BooleanContext.prototype = Object.create(ExpressionContext.prototype);
BooleanContext.prototype.constructor = BooleanContext;

BigDataParser.BooleanContext = BooleanContext;

BooleanContext.prototype.BOOLEANLITERAL = function() {
    return this.getToken(BigDataParser.BOOLEANLITERAL, 0);
};
BooleanContext.prototype.enterRule = function(listener) {
    if(listener instanceof BigDataListener ) {
        listener.enterBoolean(this);
	}
};

BooleanContext.prototype.exitRule = function(listener) {
    if(listener instanceof BigDataListener ) {
        listener.exitBoolean(this);
	}
};


function PlusContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

PlusContext.prototype = Object.create(ExpressionContext.prototype);
PlusContext.prototype.constructor = PlusContext;

BigDataParser.PlusContext = PlusContext;

PlusContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};
PlusContext.prototype.enterRule = function(listener) {
    if(listener instanceof BigDataListener ) {
        listener.enterPlus(this);
	}
};

PlusContext.prototype.exitRule = function(listener) {
    if(listener instanceof BigDataListener ) {
        listener.exitPlus(this);
	}
};


function IdentContext(parser, ctx) {
    ExpressionContext.call(this, parser);
    this.varName = null; // Token;
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

IdentContext.prototype = Object.create(ExpressionContext.prototype);
IdentContext.prototype.constructor = IdentContext;

BigDataParser.IdentContext = IdentContext;

IdentContext.prototype.IDENTIFIER = function () {
    return this.getToken(BigDataParser.IDENTIFIER, 0);
};
IdentContext.prototype.enterRule = function (listener) {
    if (listener instanceof BigDataListener) {
        listener.enterIdent(this);
    }
};

IdentContext.prototype.exitRule = function (listener) {
    if (listener instanceof BigDataListener) {
        listener.exitIdent(this);
    }
};


function PostDecrementContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    this.varName = null; // Token;
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

PostDecrementContext.prototype = Object.create(ExpressionContext.prototype);
PostDecrementContext.prototype.constructor = PostDecrementContext;

BigDataParser.PostDecrementContext = PostDecrementContext;

PostDecrementContext.prototype.IDENTIFIER = function() {
    return this.getToken(BigDataParser.IDENTIFIER, 0);
};
PostDecrementContext.prototype.enterRule = function(listener) {
    if(listener instanceof BigDataListener ) {
        listener.enterPostDecrement(this);
	}
};

PostDecrementContext.prototype.exitRule = function(listener) {
    if(listener instanceof BigDataListener ) {
        listener.exitPostDecrement(this);
	}
};


function FcallContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

FcallContext.prototype = Object.create(ExpressionContext.prototype);
FcallContext.prototype.constructor = FcallContext;

BigDataParser.FcallContext = FcallContext;

FcallContext.prototype.functionCall = function() {
    return this.getTypedRuleContext(FunctionCallContext,0);
};
FcallContext.prototype.enterRule = function(listener) {
    if(listener instanceof BigDataListener ) {
        listener.enterFcall(this);
	}
};

FcallContext.prototype.exitRule = function(listener) {
    if(listener instanceof BigDataListener ) {
        listener.exitFcall(this);
	}
};


function EQContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

EQContext.prototype = Object.create(ExpressionContext.prototype);
EQContext.prototype.constructor = EQContext;

BigDataParser.EQContext = EQContext;

EQContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};
EQContext.prototype.enterRule = function(listener) {
    if(listener instanceof BigDataListener ) {
        listener.enterEQ(this);
	}
};

EQContext.prototype.exitRule = function(listener) {
    if(listener instanceof BigDataListener ) {
        listener.exitEQ(this);
	}
};


function DoubleContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

DoubleContext.prototype = Object.create(ExpressionContext.prototype);
DoubleContext.prototype.constructor = DoubleContext;

BigDataParser.DoubleContext = DoubleContext;

DoubleContext.prototype.DOUBLE = function() {
    return this.getToken(BigDataParser.DOUBLE, 0);
};
DoubleContext.prototype.enterRule = function(listener) {
    if(listener instanceof BigDataListener ) {
        listener.enterDouble(this);
	}
};

DoubleContext.prototype.exitRule = function(listener) {
    if(listener instanceof BigDataListener ) {
        listener.exitDouble(this);
	}
};


function GTContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

GTContext.prototype = Object.create(ExpressionContext.prototype);
GTContext.prototype.constructor = GTContext;

BigDataParser.GTContext = GTContext;

GTContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};
GTContext.prototype.enterRule = function(listener) {
    if(listener instanceof BigDataListener ) {
        listener.enterGT(this);
	}
};

GTContext.prototype.exitRule = function(listener) {
    if(listener instanceof BigDataListener ) {
        listener.exitGT(this);
	}
};


function LORContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

LORContext.prototype = Object.create(ExpressionContext.prototype);
LORContext.prototype.constructor = LORContext;

BigDataParser.LORContext = LORContext;

LORContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};
LORContext.prototype.enterRule = function(listener) {
    if(listener instanceof BigDataListener ) {
        listener.enterLOR(this);
	}
};

LORContext.prototype.exitRule = function(listener) {
    if(listener instanceof BigDataListener ) {
        listener.exitLOR(this);
	}
};


function IntegerContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

IntegerContext.prototype = Object.create(ExpressionContext.prototype);
IntegerContext.prototype.constructor = IntegerContext;

BigDataParser.IntegerContext = IntegerContext;

IntegerContext.prototype.INTEGER = function() {
    return this.getToken(BigDataParser.INTEGER, 0);
};
IntegerContext.prototype.enterRule = function(listener) {
    if(listener instanceof BigDataListener ) {
        listener.enterInteger(this);
	}
};

IntegerContext.prototype.exitRule = function(listener) {
    if(listener instanceof BigDataListener ) {
        listener.exitInteger(this);
	}
};


function DivContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

DivContext.prototype = Object.create(ExpressionContext.prototype);
DivContext.prototype.constructor = DivContext;

BigDataParser.DivContext = DivContext;

DivContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};
DivContext.prototype.enterRule = function(listener) {
    if(listener instanceof BigDataListener ) {
        listener.enterDiv(this);
	}
};

DivContext.prototype.exitRule = function(listener) {
    if(listener instanceof BigDataListener ) {
        listener.exitDiv(this);
	}
};


function FloatContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

FloatContext.prototype = Object.create(ExpressionContext.prototype);
FloatContext.prototype.constructor = FloatContext;

BigDataParser.FloatContext = FloatContext;

FloatContext.prototype.FLOAT = function() {
    return this.getToken(BigDataParser.FLOAT, 0);
};
FloatContext.prototype.enterRule = function(listener) {
    if(listener instanceof BigDataListener ) {
        listener.enterFloat(this);
	}
};

FloatContext.prototype.exitRule = function(listener) {
    if(listener instanceof BigDataListener ) {
        listener.exitFloat(this);
	}
};


function GEQContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

GEQContext.prototype = Object.create(ExpressionContext.prototype);
GEQContext.prototype.constructor = GEQContext;

BigDataParser.GEQContext = GEQContext;

GEQContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};
GEQContext.prototype.enterRule = function(listener) {
    if(listener instanceof BigDataListener ) {
        listener.enterGEQ(this);
	}
};

GEQContext.prototype.exitRule = function(listener) {
    if(listener instanceof BigDataListener ) {
        listener.exitGEQ(this);
	}
};


function MultContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

MultContext.prototype = Object.create(ExpressionContext.prototype);
MultContext.prototype.constructor = MultContext;

BigDataParser.MultContext = MultContext;

MultContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};
MultContext.prototype.enterRule = function(listener) {
    if(listener instanceof BigDataListener ) {
        listener.enterMult(this);
	}
};

MultContext.prototype.exitRule = function(listener) {
    if(listener instanceof BigDataListener ) {
        listener.exitMult(this);
	}
};


function LongContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

LongContext.prototype = Object.create(ExpressionContext.prototype);
LongContext.prototype.constructor = LongContext;

BigDataParser.LongContext = LongContext;

LongContext.prototype.LONG = function() {
    return this.getToken(BigDataParser.LONG, 0);
};
LongContext.prototype.enterRule = function(listener) {
    if(listener instanceof BigDataListener ) {
        listener.enterLong(this);
	}
};

LongContext.prototype.exitRule = function(listener) {
    if(listener instanceof BigDataListener ) {
        listener.exitLong(this);
	}
};


function LEQContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

LEQContext.prototype = Object.create(ExpressionContext.prototype);
LEQContext.prototype.constructor = LEQContext;

BigDataParser.LEQContext = LEQContext;

LEQContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};
LEQContext.prototype.enterRule = function(listener) {
    if(listener instanceof BigDataListener ) {
        listener.enterLEQ(this);
	}
};

LEQContext.prototype.exitRule = function(listener) {
    if(listener instanceof BigDataListener ) {
        listener.exitLEQ(this);
	}
};


function NEQContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

NEQContext.prototype = Object.create(ExpressionContext.prototype);
NEQContext.prototype.constructor = NEQContext;

BigDataParser.NEQContext = NEQContext;

NEQContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};
NEQContext.prototype.enterRule = function(listener) {
    if(listener instanceof BigDataListener ) {
        listener.enterNEQ(this);
	}
};

NEQContext.prototype.exitRule = function(listener) {
    if(listener instanceof BigDataListener ) {
        listener.exitNEQ(this);
	}
};


function PreDecrementContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    this.varName = null; // Token;
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

PreDecrementContext.prototype = Object.create(ExpressionContext.prototype);
PreDecrementContext.prototype.constructor = PreDecrementContext;

BigDataParser.PreDecrementContext = PreDecrementContext;

PreDecrementContext.prototype.IDENTIFIER = function() {
    return this.getToken(BigDataParser.IDENTIFIER, 0);
};
PreDecrementContext.prototype.enterRule = function(listener) {
    if(listener instanceof BigDataListener ) {
        listener.enterPreDecrement(this);
	}
};

PreDecrementContext.prototype.exitRule = function(listener) {
    if(listener instanceof BigDataListener ) {
        listener.exitPreDecrement(this);
	}
};


function MinusContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

MinusContext.prototype = Object.create(ExpressionContext.prototype);
MinusContext.prototype.constructor = MinusContext;

BigDataParser.MinusContext = MinusContext;

MinusContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};
MinusContext.prototype.enterRule = function(listener) {
    if(listener instanceof BigDataListener ) {
        listener.enterMinus(this);
	}
};

MinusContext.prototype.exitRule = function(listener) {
    if(listener instanceof BigDataListener ) {
        listener.exitMinus(this);
	}
};



BigDataParser.prototype.expression = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new ExpressionContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 50;
    this.enterRecursionRule(localctx, 50, BigDataParser.RULE_expression, _p);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 236;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input, 13, this._ctx);
        switch(la_) {
        case 1:
            localctx = new ParenthesisContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;

            this.state = 212;
            this.match(BigDataParser.T__1);
            this.state = 213;
            this.expression(0);
            this.state = 214;
            this.match(BigDataParser.T__2);
            break;

        case 2:
            localctx = new PostIncrementContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 216;
            localctx.varName = this.match(BigDataParser.IDENTIFIER);
            this.state = 217;
            this.match(BigDataParser.T__21);
            break;

        case 3:
            localctx = new PostDecrementContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 218;
            localctx.varName = this.match(BigDataParser.IDENTIFIER);
            this.state = 219;
            this.match(BigDataParser.T__22);
            break;

        case 4:
            localctx = new PreIncrementContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 220;
            this.match(BigDataParser.T__21);
            this.state = 221;
            localctx.varName = this.match(BigDataParser.IDENTIFIER);
            break;

        case 5:
            localctx = new PreDecrementContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 222;
            this.match(BigDataParser.T__22);
            this.state = 223;
            localctx.varName = this.match(BigDataParser.IDENTIFIER);
            break;

        case 6:
            localctx = new IdentContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 224;
            localctx.varName = this.match(BigDataParser.IDENTIFIER);
            break;

        case 7:
            localctx = new MemoryContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 225;
            this.match(BigDataParser.T__17);
            this.state = 226;
            this.match(BigDataParser.T__18);
            this.state = 227;
            this.expression(0);
            this.state = 228;
            this.match(BigDataParser.T__19);
            break;

        case 8:
            localctx = new IntegerContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 230;
            this.match(BigDataParser.INTEGER);
            break;

        case 9:
            localctx = new LongContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 231;
            this.match(BigDataParser.LONG);
            break;

        case 10:
            localctx = new FloatContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 232;
            this.match(BigDataParser.FLOAT);
            break;

        case 11:
            localctx = new DoubleContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 233;
            this.match(BigDataParser.DOUBLE);
            break;

        case 12:
            localctx = new BooleanContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 234;
            this.match(BigDataParser.BOOLEANLITERAL);
            break;

        case 13:
            localctx = new FcallContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 235;
            this.functionCall();
            break;

        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 276;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input, 15, this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 274;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input, 14, this._ctx);
                switch(la_) {
                case 1:
                    localctx = new DivContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, BigDataParser.RULE_expression);
                    this.state = 238;
                    if (!( this.precpred(this._ctx, 20))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 20)");
                    }
                    this.state = 239;
                    this.match(BigDataParser.T__23);
                    this.state = 240;
                    this.expression(21);
                    break;

                case 2:
                    localctx = new MultContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, BigDataParser.RULE_expression);
                    this.state = 241;
                    if (!( this.precpred(this._ctx, 19))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 19)");
                    }
                    this.state = 242;
                    this.match(BigDataParser.T__24);
                    this.state = 243;
                    this.expression(20);
                    break;

                case 3:
                    localctx = new MinusContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, BigDataParser.RULE_expression);
                    this.state = 244;
                    if (!( this.precpred(this._ctx, 18))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 18)");
                    }
                    this.state = 245;
                    this.match(BigDataParser.T__25);
                    this.state = 246;
                    this.expression(19);
                    break;

                case 4:
                    localctx = new PlusContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, BigDataParser.RULE_expression);
                    this.state = 247;
                    if (!( this.precpred(this._ctx, 17))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 17)");
                    }
                    this.state = 248;
                    this.match(BigDataParser.T__26);
                    this.state = 249;
                    this.expression(18);
                    break;

                case 5:
                    localctx = new LTContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, BigDataParser.RULE_expression);
                    this.state = 250;
                    if (!( this.precpred(this._ctx, 8))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 8)");
                    }
                    this.state = 251;
                    this.match(BigDataParser.T__27);
                    this.state = 252;
                    this.expression(9);
                    break;

                case 6:
                    localctx = new LEQContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, BigDataParser.RULE_expression);
                    this.state = 253;
                    if (!( this.precpred(this._ctx, 7))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 7)");
                    }
                    this.state = 254;
                    this.match(BigDataParser.T__28);
                    this.state = 255;
                    this.expression(8);
                    break;

                case 7:
                    localctx = new GTContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, BigDataParser.RULE_expression);
                    this.state = 256;
                    if (!( this.precpred(this._ctx, 6))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
                    }
                    this.state = 257;
                    this.match(BigDataParser.T__29);
                    this.state = 258;
                    this.expression(7);
                    break;

                case 8:
                    localctx = new GEQContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, BigDataParser.RULE_expression);
                    this.state = 259;
                    if (!( this.precpred(this._ctx, 5))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
                    }
                    this.state = 260;
                    this.match(BigDataParser.T__30);
                    this.state = 261;
                    this.expression(6);
                    break;

                case 9:
                    localctx = new EQContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, BigDataParser.RULE_expression);
                    this.state = 262;
                    if (!( this.precpred(this._ctx, 4))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
                    }
                    this.state = 263;
                    this.match(BigDataParser.T__31);
                    this.state = 264;
                    this.expression(5);
                    break;

                case 10:
                    localctx = new NEQContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, BigDataParser.RULE_expression);
                    this.state = 265;
                    if (!( this.precpred(this._ctx, 3))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
                    }
                    this.state = 266;
                    this.match(BigDataParser.T__32);
                    this.state = 267;
                    this.expression(4);
                    break;

                case 11:
                    localctx = new LANDContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, BigDataParser.RULE_expression);
                    this.state = 268;
                    if (!( this.precpred(this._ctx, 2))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                    }
                    this.state = 269;
                    this.match(BigDataParser.T__33);
                    this.state = 270;
                    this.expression(3);
                    break;

                case 12:
                    localctx = new LORContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, BigDataParser.RULE_expression);
                    this.state = 271;
                    if (!( this.precpred(this._ctx, 1))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                    }
                    this.state = 272;
                    this.match(BigDataParser.T__34);
                    this.state = 273;
                    this.expression(2);
                    break;

                } 
            }
            this.state = 278;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 15, this._ctx);
        }

    } catch( error) {
        if(error instanceof antlr4.error.RecognitionException) {
	        localctx.exception = error;
	        this._errHandler.reportError(this, error);
	        this._errHandler.recover(this, error);
	    } else {
	    	throw error;
	    }
    } finally {
        this.unrollRecursionContexts(_parentctx)
    }
    return localctx;
};

function ExpressionListContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BigDataParser.RULE_expressionList;
    return this;
}

ExpressionListContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExpressionListContext.prototype.constructor = ExpressionListContext;

ExpressionListContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

ExpressionListContext.prototype.enterRule = function(listener) {
    if(listener instanceof BigDataListener ) {
        listener.enterExpressionList(this);
	}
};

ExpressionListContext.prototype.exitRule = function(listener) {
    if(listener instanceof BigDataListener ) {
        listener.exitExpressionList(this);
	}
};




BigDataParser.ExpressionListContext = ExpressionListContext;

BigDataParser.prototype.expressionList = function() {

    var localctx = new ExpressionListContext(this, this._ctx, this.state);
    this.enterRule(localctx, 52, BigDataParser.RULE_expressionList);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 279;
        this.expression(0);
        this.state = 284;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===BigDataParser.T__4) {
            this.state = 280;
            this.match(BigDataParser.T__4);
            this.state = 281;
            this.expression(0);
            this.state = 286;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


BigDataParser.prototype.sempred = function(localctx, ruleIndex, predIndex) {
	switch(ruleIndex) {
        case 25:
			return this.expression_sempred(localctx, predIndex);
    default:
        throw "No predicate with index:" + ruleIndex;
   }
};

BigDataParser.prototype.expression_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 0:
			return this.precpred(this._ctx, 20);
		case 1:
			return this.precpred(this._ctx, 19);
		case 2:
			return this.precpred(this._ctx, 18);
		case 3:
			return this.precpred(this._ctx, 17);
		case 4:
			return this.precpred(this._ctx, 8);
		case 5:
			return this.precpred(this._ctx, 7);
		case 6:
			return this.precpred(this._ctx, 6);
		case 7:
			return this.precpred(this._ctx, 5);
		case 8:
			return this.precpred(this._ctx, 4);
		case 9:
			return this.precpred(this._ctx, 3);
		case 10:
			return this.precpred(this._ctx, 2);
		case 11:
			return this.precpred(this._ctx, 1);
		default:
			throw "No predicate with index:" + predIndex;
	}
};


exports.BigDataParser = BigDataParser;
