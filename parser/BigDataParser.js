// Generated from BigData.g4 by ANTLR 4.7.1
// jshint ignore: start
var antlr4 = require('antlr4/index');
var BigDataListener = require('./BigDataListener').BigDataListener;
var grammarFileName = "BigData.g4";

var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003.\u00ff\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004",
    "\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010\u0004",
    "\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0004\u0014\t",
    "\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0003\u0002\u0006\u0002",
    ".\n\u0002\r\u0002\u000e\u0002/\u0003\u0002\u0003\u0002\u0003\u0003\u0003",
    "\u0003\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0005\u0004=\n\u0004\u0003\u0005\u0003\u0005\u0003",
    "\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003",
    "\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0005\u0006L",
    "\n\u0006\u0003\u0007\u0003\u0007\u0003\b\u0003\b\u0003\t\u0003\t\u0003",
    "\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\u000b\u0003\u000b\u0003",
    "\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\f\u0003",
    "\f\u0003\r\u0003\r\u0003\r\u0003\r\u0005\rg\n\r\u0003\r\u0003\r\u0003",
    "\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003\u000e\u0003\u000e\u0003\u000e",
    "\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e",
    "\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e",
    "\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0005\u000e",
    "\u0084\n\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003",
    "\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003",
    "\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003",
    "\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003",
    "\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003",
    "\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003",
    "\u000e\u0003\u000e\u0007\u000e\u00aa\n\u000e\f\u000e\u000e\u000e\u00ad",
    "\u000b\u000e\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f",
    "\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0005\u000f",
    "\u00b9\n\u000f\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003",
    "\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0012\u0003\u0012\u0003",
    "\u0012\u0003\u0012\u0005\u0012\u00c7\n\u0012\u0003\u0012\u0003\u0012",
    "\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012",
    "\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0005\u0012",
    "\u00d6\n\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003",
    "\u0012\u0005\u0012\u00dd\n\u0012\u0003\u0013\u0003\u0013\u0003\u0013",
    "\u0007\u0013\u00e2\n\u0013\f\u0013\u000e\u0013\u00e5\u000b\u0013\u0003",
    "\u0014\u0007\u0014\u00e8\n\u0014\f\u0014\u000e\u0014\u00eb\u000b\u0014",
    "\u0003\u0015\u0003\u0015\u0003\u0015\u0007\u0015\u00f0\n\u0015\f\u0015",
    "\u000e\u0015\u00f3\u000b\u0015\u0003\u0015\u0003\u0015\u0003\u0016\u0003",
    "\u0016\u0003\u0016\u0007\u0016\u00fa\n\u0016\f\u0016\u000e\u0016\u00fd",
    "\u000b\u0016\u0003\u0016\u0002\u0003\u001a\u0017\u0002\u0004\u0006\b",
    "\n\f\u000e\u0010\u0012\u0014\u0016\u0018\u001a\u001c\u001e \"$&(*\u0002",
    "\u0002\u0002\u0111\u0002-\u0003\u0002\u0002\u0002\u00043\u0003\u0002",
    "\u0002\u0002\u0006<\u0003\u0002\u0002\u0002\b>\u0003\u0002\u0002\u0002",
    "\nK\u0003\u0002\u0002\u0002\fM\u0003\u0002\u0002\u0002\u000eO\u0003",
    "\u0002\u0002\u0002\u0010Q\u0003\u0002\u0002\u0002\u0012S\u0003\u0002",
    "\u0002\u0002\u0014Y\u0003\u0002\u0002\u0002\u0016`\u0003\u0002\u0002",
    "\u0002\u0018b\u0003\u0002\u0002\u0002\u001a\u0083\u0003\u0002\u0002",
    "\u0002\u001c\u00b8\u0003\u0002\u0002\u0002\u001e\u00ba\u0003\u0002\u0002",
    "\u0002 \u00be\u0003\u0002\u0002\u0002\"\u00dc\u0003\u0002\u0002\u0002",
    "$\u00de\u0003\u0002\u0002\u0002&\u00e9\u0003\u0002\u0002\u0002(\u00ec",
    "\u0003\u0002\u0002\u0002*\u00f6\u0003\u0002\u0002\u0002,.\u0005\u0004",
    "\u0003\u0002-,\u0003\u0002\u0002\u0002./\u0003\u0002\u0002\u0002/-\u0003",
    "\u0002\u0002\u0002/0\u0003\u0002\u0002\u000201\u0003\u0002\u0002\u0002",
    "12\u0007\u0002\u0002\u00032\u0003\u0003\u0002\u0002\u000234\u0005\"",
    "\u0012\u00024\u0005\u0003\u0002\u0002\u00025=\u0005\u001c\u000f\u0002",
    "6=\u0005 \u0011\u00027=\u0005\b\u0005\u00028=\u0005\u0012\n\u00029=",
    "\u0005\u0018\r\u0002:=\u0005\u0014\u000b\u0002;=\u0005(\u0015\u0002",
    "<5\u0003\u0002\u0002\u0002<6\u0003\u0002\u0002\u0002<7\u0003\u0002\u0002",
    "\u0002<8\u0003\u0002\u0002\u0002<9\u0003\u0002\u0002\u0002<:\u0003\u0002",
    "\u0002\u0002<;\u0003\u0002\u0002\u0002=\u0007\u0003\u0002\u0002\u0002",
    ">?\u0007\u0003\u0002\u0002?@\u0007\u0004\u0002\u0002@A\u0005\u001a\u000e",
    "\u0002AB\u0007\u0005\u0002\u0002BC\u0005\f\u0007\u0002CD\u0007\u0006",
    "\u0002\u0002DE\u0005\u000e\b\u0002E\t\u0003\u0002\u0002\u0002FL\u0005",
    "\u0006\u0004\u0002GH\u0007\u0007\u0002\u0002HI\u0005&\u0014\u0002IJ",
    "\u0007\b\u0002\u0002JL\u0003\u0002\u0002\u0002KF\u0003\u0002\u0002\u0002",
    "KG\u0003\u0002\u0002\u0002L\u000b\u0003\u0002\u0002\u0002MN\u0005\n",
    "\u0006\u0002N\r\u0003\u0002\u0002\u0002OP\u0005\n\u0006\u0002P\u000f",
    "\u0003\u0002\u0002\u0002QR\u0005\u001a\u000e\u0002R\u0011\u0003\u0002",
    "\u0002\u0002ST\u0007\t\u0002\u0002TU\u0007\u0004\u0002\u0002UV\u0005",
    "\u0010\t\u0002VW\u0007\u0005\u0002\u0002WX\u0005\n\u0006\u0002X\u0013",
    "\u0003\u0002\u0002\u0002YZ\u0007\n\u0002\u0002Z[\u0005\n\u0006\u0002",
    "[\\\u0007\t\u0002\u0002\\]\u0007\u0004\u0002\u0002]^\u0005\u001a\u000e",
    "\u0002^_\u0007\u0005\u0002\u0002_\u0015\u0003\u0002\u0002\u0002`a\u0005",
    "\u001a\u000e\u0002a\u0017\u0003\u0002\u0002\u0002bc\u0007\u000b\u0002",
    "\u0002cf\u0007\u0004\u0002\u0002dg\u0005\u001c\u000f\u0002eg\u0005 ",
    "\u0011\u0002fd\u0003\u0002\u0002\u0002fe\u0003\u0002\u0002\u0002gh\u0003",
    "\u0002\u0002\u0002hi\u0007\f\u0002\u0002ij\u0005\u0010\t\u0002jk\u0007",
    "\f\u0002\u0002kl\u0005\u0016\f\u0002lm\u0007\u0005\u0002\u0002mn\u0005",
    "\n\u0006\u0002n\u0019\u0003\u0002\u0002\u0002op\b\u000e\u0001\u0002",
    "p\u0084\u0007)\u0002\u0002q\u0084\u0007*\u0002\u0002r\u0084\u0007+\u0002",
    "\u0002s\u0084\u0007,\u0002\u0002t\u0084\u0007\'\u0002\u0002u\u0084\u0007",
    "(\u0002\u0002v\u0084\u0005(\u0015\u0002wx\u0007\u0004\u0002\u0002xy",
    "\u0005\u001a\u000e\u0002yz\u0007\u0005\u0002\u0002z\u0084\u0003\u0002",
    "\u0002\u0002{|\u0007(\u0002\u0002|\u0084\u0007\u0019\u0002\u0002}~\u0007",
    "\u0019\u0002\u0002~\u0084\u0007(\u0002\u0002\u007f\u0080\u0007(\u0002",
    "\u0002\u0080\u0084\u0007\u001a\u0002\u0002\u0081\u0082\u0007\u001a\u0002",
    "\u0002\u0082\u0084\u0007(\u0002\u0002\u0083o\u0003\u0002\u0002\u0002",
    "\u0083q\u0003\u0002\u0002\u0002\u0083r\u0003\u0002\u0002\u0002\u0083",
    "s\u0003\u0002\u0002\u0002\u0083t\u0003\u0002\u0002\u0002\u0083u\u0003",
    "\u0002\u0002\u0002\u0083v\u0003\u0002\u0002\u0002\u0083w\u0003\u0002",
    "\u0002\u0002\u0083{\u0003\u0002\u0002\u0002\u0083}\u0003\u0002\u0002",
    "\u0002\u0083\u007f\u0003\u0002\u0002\u0002\u0083\u0081\u0003\u0002\u0002",
    "\u0002\u0084\u00ab\u0003\u0002\u0002\u0002\u0085\u0086\f\u001a\u0002",
    "\u0002\u0086\u0087\u0007\r\u0002\u0002\u0087\u00aa\u0005\u001a\u000e",
    "\u001b\u0088\u0089\f\u0019\u0002\u0002\u0089\u008a\u0007\u000e\u0002",
    "\u0002\u008a\u00aa\u0005\u001a\u000e\u001a\u008b\u008c\f\u0018\u0002",
    "\u0002\u008c\u008d\u0007\u000f\u0002\u0002\u008d\u00aa\u0005\u001a\u000e",
    "\u0019\u008e\u008f\f\u0017\u0002\u0002\u008f\u0090\u0007\u0010\u0002",
    "\u0002\u0090\u00aa\u0005\u001a\u000e\u0018\u0091\u0092\f\u000f\u0002",
    "\u0002\u0092\u0093\u0007\u0011\u0002\u0002\u0093\u00aa\u0005\u001a\u000e",
    "\u0010\u0094\u0095\f\u000e\u0002\u0002\u0095\u0096\u0007\u0012\u0002",
    "\u0002\u0096\u00aa\u0005\u001a\u000e\u000f\u0097\u0098\f\r\u0002\u0002",
    "\u0098\u0099\u0007\u0013\u0002\u0002\u0099\u00aa\u0005\u001a\u000e\u000e",
    "\u009a\u009b\f\f\u0002\u0002\u009b\u009c\u0007\u0014\u0002\u0002\u009c",
    "\u00aa\u0005\u001a\u000e\r\u009d\u009e\f\u000b\u0002\u0002\u009e\u009f",
    "\u0007\u0015\u0002\u0002\u009f\u00aa\u0005\u001a\u000e\f\u00a0\u00a1",
    "\f\n\u0002\u0002\u00a1\u00a2\u0007\u0016\u0002\u0002\u00a2\u00aa\u0005",
    "\u001a\u000e\u000b\u00a3\u00a4\f\t\u0002\u0002\u00a4\u00a5\u0007\u0017",
    "\u0002\u0002\u00a5\u00aa\u0005\u001a\u000e\n\u00a6\u00a7\f\b\u0002\u0002",
    "\u00a7\u00a8\u0007\u0018\u0002\u0002\u00a8\u00aa\u0005\u001a\u000e\t",
    "\u00a9\u0085\u0003\u0002\u0002\u0002\u00a9\u0088\u0003\u0002\u0002\u0002",
    "\u00a9\u008b\u0003\u0002\u0002\u0002\u00a9\u008e\u0003\u0002\u0002\u0002",
    "\u00a9\u0091\u0003\u0002\u0002\u0002\u00a9\u0094\u0003\u0002\u0002\u0002",
    "\u00a9\u0097\u0003\u0002\u0002\u0002\u00a9\u009a\u0003\u0002\u0002\u0002",
    "\u00a9\u009d\u0003\u0002\u0002\u0002\u00a9\u00a0\u0003\u0002\u0002\u0002",
    "\u00a9\u00a3\u0003\u0002\u0002\u0002\u00a9\u00a6\u0003\u0002\u0002\u0002",
    "\u00aa\u00ad\u0003\u0002\u0002\u0002\u00ab\u00a9\u0003\u0002\u0002\u0002",
    "\u00ab\u00ac\u0003\u0002\u0002\u0002\u00ac\u001b\u0003\u0002\u0002\u0002",
    "\u00ad\u00ab\u0003\u0002\u0002\u0002\u00ae\u00af\u0007\u001b\u0002\u0002",
    "\u00af\u00b0\u0007(\u0002\u0002\u00b0\u00b1\u0007\u001c\u0002\u0002",
    "\u00b1\u00b2\u0007!\u0002\u0002\u00b2\u00b3\u0007\u001d\u0002\u0002",
    "\u00b3\u00b9\u0005\u001a\u000e\u0002\u00b4\u00b5\u0007\u001b\u0002\u0002",
    "\u00b5\u00b6\u0007(\u0002\u0002\u00b6\u00b7\u0007\u001c\u0002\u0002",
    "\u00b7\u00b9\u0007!\u0002\u0002\u00b8\u00ae\u0003\u0002\u0002\u0002",
    "\u00b8\u00b4\u0003\u0002\u0002\u0002\u00b9\u001d\u0003\u0002\u0002\u0002",
    "\u00ba\u00bb\u0007(\u0002\u0002\u00bb\u00bc\u0007\u001c\u0002\u0002",
    "\u00bc\u00bd\u0007!\u0002\u0002\u00bd\u001f\u0003\u0002\u0002\u0002",
    "\u00be\u00bf\u0007(\u0002\u0002\u00bf\u00c0\u0007\u001d\u0002\u0002",
    "\u00c0\u00c1\u0005\u001a\u000e\u0002\u00c1!\u0003\u0002\u0002\u0002",
    "\u00c2\u00c3\u0007\u001e\u0002\u0002\u00c3\u00c4\u0007(\u0002\u0002",
    "\u00c4\u00c6\u0007\u0004\u0002\u0002\u00c5\u00c7\u0005$\u0013\u0002",
    "\u00c6\u00c5\u0003\u0002\u0002\u0002\u00c6\u00c7\u0003\u0002\u0002\u0002",
    "\u00c7\u00c8\u0003\u0002\u0002\u0002\u00c8\u00c9\u0007\u0005\u0002\u0002",
    "\u00c9\u00ca\u0007\u001c\u0002\u0002\u00ca\u00cb\u0007!\u0002\u0002",
    "\u00cb\u00cc\u0007\u0007\u0002\u0002\u00cc\u00cd\u0005&\u0014\u0002",
    "\u00cd\u00ce\u0007\u001f\u0002\u0002\u00ce\u00cf\u0005\u001a\u000e\u0002",
    "\u00cf\u00d0\u0007\b\u0002\u0002\u00d0\u00dd\u0003\u0002\u0002\u0002",
    "\u00d1\u00d2\u0007\u001e\u0002\u0002\u00d2\u00d3\u0007(\u0002\u0002",
    "\u00d3\u00d5\u0007\u0004\u0002\u0002\u00d4\u00d6\u0005$\u0013\u0002",
    "\u00d5\u00d4\u0003\u0002\u0002\u0002\u00d5\u00d6\u0003\u0002\u0002\u0002",
    "\u00d6\u00d7\u0003\u0002\u0002\u0002\u00d7\u00d8\u0007\u0005\u0002\u0002",
    "\u00d8\u00d9\u0007\u0007\u0002\u0002\u00d9\u00da\u0005&\u0014\u0002",
    "\u00da\u00db\u0007\b\u0002\u0002\u00db\u00dd\u0003\u0002\u0002\u0002",
    "\u00dc\u00c2\u0003\u0002\u0002\u0002\u00dc\u00d1\u0003\u0002\u0002\u0002",
    "\u00dd#\u0003\u0002\u0002\u0002\u00de\u00e3\u0005\u001e\u0010\u0002",
    "\u00df\u00e0\u0007 \u0002\u0002\u00e0\u00e2\u0005\u001e\u0010\u0002",
    "\u00e1\u00df\u0003\u0002\u0002\u0002\u00e2\u00e5\u0003\u0002\u0002\u0002",
    "\u00e3\u00e1\u0003\u0002\u0002\u0002\u00e3\u00e4\u0003\u0002\u0002\u0002",
    "\u00e4%\u0003\u0002\u0002\u0002\u00e5\u00e3\u0003\u0002\u0002\u0002",
    "\u00e6\u00e8\u0005\u0006\u0004\u0002\u00e7\u00e6\u0003\u0002\u0002\u0002",
    "\u00e8\u00eb\u0003\u0002\u0002\u0002\u00e9\u00e7\u0003\u0002\u0002\u0002",
    "\u00e9\u00ea\u0003\u0002\u0002\u0002\u00ea\'\u0003\u0002\u0002\u0002",
    "\u00eb\u00e9\u0003\u0002\u0002\u0002\u00ec\u00ed\u0007(\u0002\u0002",
    "\u00ed\u00f1\u0007\u0004\u0002\u0002\u00ee\u00f0\u0005*\u0016\u0002",
    "\u00ef\u00ee\u0003\u0002\u0002\u0002\u00f0\u00f3\u0003\u0002\u0002\u0002",
    "\u00f1\u00ef\u0003\u0002\u0002\u0002\u00f1\u00f2\u0003\u0002\u0002\u0002",
    "\u00f2\u00f4\u0003\u0002\u0002\u0002\u00f3\u00f1\u0003\u0002\u0002\u0002",
    "\u00f4\u00f5\u0007\u0005\u0002\u0002\u00f5)\u0003\u0002\u0002\u0002",
    "\u00f6\u00fb\u0005\u001a\u000e\u0002\u00f7\u00f8\u0007 \u0002\u0002",
    "\u00f8\u00fa\u0005\u001a\u000e\u0002\u00f9\u00f7\u0003\u0002\u0002\u0002",
    "\u00fa\u00fd\u0003\u0002\u0002\u0002\u00fb\u00f9\u0003\u0002\u0002\u0002",
    "\u00fb\u00fc\u0003\u0002\u0002\u0002\u00fc+\u0003\u0002\u0002\u0002",
    "\u00fd\u00fb\u0003\u0002\u0002\u0002\u0011/<Kf\u0083\u00a9\u00ab\u00b8",
    "\u00c6\u00d5\u00dc\u00e3\u00e9\u00f1\u00fb"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map(function (ds, index) {
    return new antlr4.dfa.DFA(ds, index);
});

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [null, "'if'", "'('", "')'", "'else'", "'{'", "'}'",
    "'while'", "'do'", "'for'", "';'", "'/'", "'*'", "'-'",
    "'+'", "'<'", "'<='", "'>'", "'>='", "'=='", "'!='",
    "'&&'", "'||'", "'++'", "'--'", "'var'", "':'", "'='",
    "'fun'", "'return'", "','", null, "'Boolean'", "'Int'",
    "'Long'", "'Float'", "'Double'"];

var symbolicNames = [null, null, null, null, null, null, null, null, null,
    null, null, null, null, null, null, null, null, null,
    null, null, null, null, null, null, null, null, null,
    null, null, null, null, "TYPES", "BOOLTYPE", "INTTYPE",
    "LONGTYPE", "FLOATTYPE", "DOUBLETYPE", "BOOLEANLITERAL",
    "IDENTIFIER", "INTEGER", "LONG", "FLOAT", "DOUBLE",
    "STRING", "WHITESPACE"];

var ruleNames = ["input", "programPart", "statement", "branch", "block",
    "trueBlock", "elseBlock", "loopBool", "whileloop", "dowhileloop",
    "forExpression", "forloop", "expression", "varDeclaration",
    "varHanding", "assignment", "functionDefinition", "parameterDeclaration",
    "statementList", "functionCall", "expressionList"];

function BigDataParser(input) {
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
    get: function () {
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
BigDataParser.TYPES = 31;
BigDataParser.BOOLTYPE = 32;
BigDataParser.INTTYPE = 33;
BigDataParser.LONGTYPE = 34;
BigDataParser.FLOATTYPE = 35;
BigDataParser.DOUBLETYPE = 36;
BigDataParser.BOOLEANLITERAL = 37;
BigDataParser.IDENTIFIER = 38;
BigDataParser.INTEGER = 39;
BigDataParser.LONG = 40;
BigDataParser.FLOAT = 41;
BigDataParser.DOUBLE = 42;
BigDataParser.STRING = 43;
BigDataParser.WHITESPACE = 44;

BigDataParser.RULE_input = 0;
BigDataParser.RULE_programPart = 1;
BigDataParser.RULE_statement = 2;
BigDataParser.RULE_branch = 3;
BigDataParser.RULE_block = 4;
BigDataParser.RULE_trueBlock = 5;
BigDataParser.RULE_elseBlock = 6;
BigDataParser.RULE_loopBool = 7;
BigDataParser.RULE_whileloop = 8;
BigDataParser.RULE_dowhileloop = 9;
BigDataParser.RULE_forExpression = 10;
BigDataParser.RULE_forloop = 11;
BigDataParser.RULE_expression = 12;
BigDataParser.RULE_varDeclaration = 13;
BigDataParser.RULE_varHanding = 14;
BigDataParser.RULE_assignment = 15;
BigDataParser.RULE_functionDefinition = 16;
BigDataParser.RULE_parameterDeclaration = 17;
BigDataParser.RULE_statementList = 18;
BigDataParser.RULE_functionCall = 19;
BigDataParser.RULE_expressionList = 20;

function InputContext(parser, parent, invokingState) {
    if (parent === undefined) {
        parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
        invokingState = -1;
    }
    antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BigDataParser.RULE_input;
    return this;
}

InputContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
InputContext.prototype.constructor = InputContext;

InputContext.prototype.EOF = function () {
    return this.getToken(BigDataParser.EOF, 0);
};

InputContext.prototype.programPart = function (i) {
    if (i === undefined) {
        i = null;
    }
    if (i === null) {
        return this.getTypedRuleContexts(ProgramPartContext);
    } else {
        return this.getTypedRuleContext(ProgramPartContext, i);
    }
};

InputContext.prototype.enterRule = function (listener) {
    if (listener instanceof BigDataListener) {
        listener.enterInput(this);
    }
};

InputContext.prototype.exitRule = function (listener) {
    if (listener instanceof BigDataListener) {
        listener.exitInput(this);
    }
};


BigDataParser.InputContext = InputContext;

BigDataParser.prototype.input = function () {

    var localctx = new InputContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, BigDataParser.RULE_input);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 43; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 42;
            this.programPart();
            this.state = 45; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while (_la === BigDataParser.T__27);
        this.state = 47;
        this.match(BigDataParser.EOF);
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

function ProgramPartContext(parser, parent, invokingState) {
    if (parent === undefined) {
        parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
        invokingState = -1;
    }
    antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BigDataParser.RULE_programPart;
    return this;
}

ProgramPartContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ProgramPartContext.prototype.constructor = ProgramPartContext;


ProgramPartContext.prototype.copyFrom = function (ctx) {
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

ProgPartFunctionDefinitionContext.prototype.functionDefinition = function () {
    return this.getTypedRuleContext(FunctionDefinitionContext, 0);
};
ProgPartFunctionDefinitionContext.prototype.enterRule = function (listener) {
    if (listener instanceof BigDataListener) {
        listener.enterProgPartFunctionDefinition(this);
    }
};

ProgPartFunctionDefinitionContext.prototype.exitRule = function (listener) {
    if (listener instanceof BigDataListener) {
        listener.exitProgPartFunctionDefinition(this);
    }
};



BigDataParser.ProgramPartContext = ProgramPartContext;

BigDataParser.prototype.programPart = function () {

    var localctx = new ProgramPartContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, BigDataParser.RULE_programPart);
    try {
        localctx = new ProgPartFunctionDefinitionContext(this, localctx);
        this.enterOuterAlt(localctx, 1);
        this.state = 49;
        this.functionDefinition();
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

function StatementContext(parser, parent, invokingState) {
    if (parent === undefined) {
        parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
        invokingState = -1;
    }
    antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BigDataParser.RULE_statement;
    return this;
}

StatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StatementContext.prototype.constructor = StatementContext;

StatementContext.prototype.varDeclaration = function () {
    return this.getTypedRuleContext(VarDeclarationContext, 0);
};

StatementContext.prototype.assignment = function () {
    return this.getTypedRuleContext(AssignmentContext, 0);
};

StatementContext.prototype.branch = function () {
    return this.getTypedRuleContext(BranchContext, 0);
};

StatementContext.prototype.whileloop = function () {
    return this.getTypedRuleContext(WhileloopContext, 0);
};

StatementContext.prototype.forloop = function () {
    return this.getTypedRuleContext(ForloopContext, 0);
};

StatementContext.prototype.dowhileloop = function () {
    return this.getTypedRuleContext(DowhileloopContext, 0);
};

StatementContext.prototype.functionCall = function () {
    return this.getTypedRuleContext(FunctionCallContext, 0);
};

StatementContext.prototype.enterRule = function (listener) {
    if (listener instanceof BigDataListener) {
        listener.enterStatement(this);
    }
};

StatementContext.prototype.exitRule = function (listener) {
    if (listener instanceof BigDataListener) {
        listener.exitStatement(this);
    }
};


BigDataParser.StatementContext = StatementContext;

BigDataParser.prototype.statement = function () {

    var localctx = new StatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, BigDataParser.RULE_statement);
    try {
        this.state = 58;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input, 1, this._ctx);
        switch (la_) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                this.state = 51;
                this.varDeclaration();
                break;

            case 2:
                this.enterOuterAlt(localctx, 2);
                this.state = 52;
                this.assignment();
                break;

            case 3:
                this.enterOuterAlt(localctx, 3);
                this.state = 53;
                this.branch();
                break;

            case 4:
                this.enterOuterAlt(localctx, 4);
                this.state = 54;
                this.whileloop();
                break;

            case 5:
                this.enterOuterAlt(localctx, 5);
                this.state = 55;
                this.forloop();
                break;

            case 6:
                this.enterOuterAlt(localctx, 6);
                this.state = 56;
                this.dowhileloop();
                break;

            case 7:
                this.enterOuterAlt(localctx, 7);
                this.state = 57;
                this.functionCall();
                break;

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

function BranchContext(parser, parent, invokingState) {
    if (parent === undefined) {
        parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
        invokingState = -1;
    }
    antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BigDataParser.RULE_branch;
    this.condition = null; // ExpressionContext
    this.onTrue = null; // TrueBlockContext
    this.onFalse = null; // ElseBlockContext
    return this;
}

BranchContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BranchContext.prototype.constructor = BranchContext;

BranchContext.prototype.expression = function () {
    return this.getTypedRuleContext(ExpressionContext, 0);
};

BranchContext.prototype.trueBlock = function () {
    return this.getTypedRuleContext(TrueBlockContext, 0);
};

BranchContext.prototype.elseBlock = function () {
    return this.getTypedRuleContext(ElseBlockContext, 0);
};

BranchContext.prototype.enterRule = function (listener) {
    if (listener instanceof BigDataListener) {
        listener.enterBranch(this);
    }
};

BranchContext.prototype.exitRule = function (listener) {
    if (listener instanceof BigDataListener) {
        listener.exitBranch(this);
    }
};


BigDataParser.BranchContext = BranchContext;

BigDataParser.prototype.branch = function () {

    var localctx = new BranchContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, BigDataParser.RULE_branch);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 60;
        this.match(BigDataParser.T__0);
        this.state = 61;
        this.match(BigDataParser.T__1);
        this.state = 62;
        localctx.condition = this.expression(0);
        this.state = 63;
        this.match(BigDataParser.T__2);
        this.state = 64;
        localctx.onTrue = this.trueBlock();
        this.state = 65;
        this.match(BigDataParser.T__3);
        this.state = 66;
        localctx.onFalse = this.elseBlock();
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

function BlockContext(parser, parent, invokingState) {
    if (parent === undefined) {
        parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
        invokingState = -1;
    }
    antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BigDataParser.RULE_block;
    return this;
}

BlockContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BlockContext.prototype.constructor = BlockContext;

BlockContext.prototype.statement = function () {
    return this.getTypedRuleContext(StatementContext, 0);
};

BlockContext.prototype.statementList = function () {
    return this.getTypedRuleContext(StatementListContext, 0);
};

BlockContext.prototype.enterRule = function (listener) {
    if (listener instanceof BigDataListener) {
        listener.enterBlock(this);
    }
};

BlockContext.prototype.exitRule = function (listener) {
    if (listener instanceof BigDataListener) {
        listener.exitBlock(this);
    }
};


BigDataParser.BlockContext = BlockContext;

BigDataParser.prototype.block = function () {

    var localctx = new BlockContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, BigDataParser.RULE_block);
    try {
        this.state = 73;
        this._errHandler.sync(this);
        switch (this._input.LA(1)) {
            case BigDataParser.T__0:
            case BigDataParser.T__6:
            case BigDataParser.T__7:
            case BigDataParser.T__8:
            case BigDataParser.T__24:
            case BigDataParser.IDENTIFIER:
                this.enterOuterAlt(localctx, 1);
                this.state = 68;
                this.statement();
                break;
            case BigDataParser.T__4:
                this.enterOuterAlt(localctx, 2);
                this.state = 69;
                this.match(BigDataParser.T__4);
                this.state = 70;
                this.statementList();
                this.state = 71;
                this.match(BigDataParser.T__5);
                break;
            default:
                throw new antlr4.error.NoViableAltException(this);
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

function TrueBlockContext(parser, parent, invokingState) {
    if (parent === undefined) {
        parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
        invokingState = -1;
    }
    antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BigDataParser.RULE_trueBlock;
    return this;
}

TrueBlockContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TrueBlockContext.prototype.constructor = TrueBlockContext;

TrueBlockContext.prototype.block = function () {
    return this.getTypedRuleContext(BlockContext, 0);
};

TrueBlockContext.prototype.enterRule = function (listener) {
    if (listener instanceof BigDataListener) {
        listener.enterTrueBlock(this);
    }
};

TrueBlockContext.prototype.exitRule = function (listener) {
    if (listener instanceof BigDataListener) {
        listener.exitTrueBlock(this);
    }
};


BigDataParser.TrueBlockContext = TrueBlockContext;

BigDataParser.prototype.trueBlock = function () {

    var localctx = new TrueBlockContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, BigDataParser.RULE_trueBlock);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 75;
        this.block();
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

function ElseBlockContext(parser, parent, invokingState) {
    if (parent === undefined) {
        parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
        invokingState = -1;
    }
    antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BigDataParser.RULE_elseBlock;
    return this;
}

ElseBlockContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ElseBlockContext.prototype.constructor = ElseBlockContext;

ElseBlockContext.prototype.block = function () {
    return this.getTypedRuleContext(BlockContext, 0);
};

ElseBlockContext.prototype.enterRule = function (listener) {
    if (listener instanceof BigDataListener) {
        listener.enterElseBlock(this);
    }
};

ElseBlockContext.prototype.exitRule = function (listener) {
    if (listener instanceof BigDataListener) {
        listener.exitElseBlock(this);
    }
};


BigDataParser.ElseBlockContext = ElseBlockContext;

BigDataParser.prototype.elseBlock = function () {

    var localctx = new ElseBlockContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, BigDataParser.RULE_elseBlock);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 77;
        this.block();
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

function LoopBoolContext(parser, parent, invokingState) {
    if (parent === undefined) {
        parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
        invokingState = -1;
    }
    antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BigDataParser.RULE_loopBool;
    return this;
}

LoopBoolContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
LoopBoolContext.prototype.constructor = LoopBoolContext;

LoopBoolContext.prototype.expression = function () {
    return this.getTypedRuleContext(ExpressionContext, 0);
};

LoopBoolContext.prototype.enterRule = function (listener) {
    if (listener instanceof BigDataListener) {
        listener.enterLoopBool(this);
    }
};

LoopBoolContext.prototype.exitRule = function (listener) {
    if (listener instanceof BigDataListener) {
        listener.exitLoopBool(this);
    }
};


BigDataParser.LoopBoolContext = LoopBoolContext;

BigDataParser.prototype.loopBool = function () {

    var localctx = new LoopBoolContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, BigDataParser.RULE_loopBool);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 79;
        this.expression(0);
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

function WhileloopContext(parser, parent, invokingState) {
    if (parent === undefined) {
        parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
        invokingState = -1;
    }
    antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BigDataParser.RULE_whileloop;
    return this;
}

WhileloopContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
WhileloopContext.prototype.constructor = WhileloopContext;

WhileloopContext.prototype.loopBool = function () {
    return this.getTypedRuleContext(LoopBoolContext, 0);
};

WhileloopContext.prototype.block = function () {
    return this.getTypedRuleContext(BlockContext, 0);
};

WhileloopContext.prototype.enterRule = function (listener) {
    if (listener instanceof BigDataListener) {
        listener.enterWhileloop(this);
    }
};

WhileloopContext.prototype.exitRule = function (listener) {
    if (listener instanceof BigDataListener) {
        listener.exitWhileloop(this);
    }
};


BigDataParser.WhileloopContext = WhileloopContext;

BigDataParser.prototype.whileloop = function () {

    var localctx = new WhileloopContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, BigDataParser.RULE_whileloop);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 81;
        this.match(BigDataParser.T__6);
        this.state = 82;
        this.match(BigDataParser.T__1);
        this.state = 83;
        this.loopBool();
        this.state = 84;
        this.match(BigDataParser.T__2);
        this.state = 85;
        this.block();
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

function DowhileloopContext(parser, parent, invokingState) {
    if (parent === undefined) {
        parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
        invokingState = -1;
    }
    antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BigDataParser.RULE_dowhileloop;
    return this;
}

DowhileloopContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DowhileloopContext.prototype.constructor = DowhileloopContext;

DowhileloopContext.prototype.block = function () {
    return this.getTypedRuleContext(BlockContext, 0);
};

DowhileloopContext.prototype.expression = function () {
    return this.getTypedRuleContext(ExpressionContext, 0);
};

DowhileloopContext.prototype.enterRule = function (listener) {
    if (listener instanceof BigDataListener) {
        listener.enterDowhileloop(this);
    }
};

DowhileloopContext.prototype.exitRule = function (listener) {
    if (listener instanceof BigDataListener) {
        listener.exitDowhileloop(this);
    }
};


BigDataParser.DowhileloopContext = DowhileloopContext;

BigDataParser.prototype.dowhileloop = function () {

    var localctx = new DowhileloopContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, BigDataParser.RULE_dowhileloop);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 87;
        this.match(BigDataParser.T__7);
        this.state = 88;
        this.block();
        this.state = 89;
        this.match(BigDataParser.T__6);
        this.state = 90;
        this.match(BigDataParser.T__1);
        this.state = 91;
        this.expression(0);
        this.state = 92;
        this.match(BigDataParser.T__2);
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

function ForExpressionContext(parser, parent, invokingState) {
    if (parent === undefined) {
        parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
        invokingState = -1;
    }
    antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BigDataParser.RULE_forExpression;
    return this;
}

ForExpressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ForExpressionContext.prototype.constructor = ForExpressionContext;

ForExpressionContext.prototype.expression = function () {
    return this.getTypedRuleContext(ExpressionContext, 0);
};

ForExpressionContext.prototype.enterRule = function (listener) {
    if (listener instanceof BigDataListener) {
        listener.enterForExpression(this);
    }
};

ForExpressionContext.prototype.exitRule = function (listener) {
    if (listener instanceof BigDataListener) {
        listener.exitForExpression(this);
    }
};


BigDataParser.ForExpressionContext = ForExpressionContext;

BigDataParser.prototype.forExpression = function () {

    var localctx = new ForExpressionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, BigDataParser.RULE_forExpression);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 94;
        this.expression(0);
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

function ForloopContext(parser, parent, invokingState) {
    if (parent === undefined) {
        parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
        invokingState = -1;
    }
    antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BigDataParser.RULE_forloop;
    return this;
}

ForloopContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ForloopContext.prototype.constructor = ForloopContext;

ForloopContext.prototype.loopBool = function () {
    return this.getTypedRuleContext(LoopBoolContext, 0);
};

ForloopContext.prototype.forExpression = function () {
    return this.getTypedRuleContext(ForExpressionContext, 0);
};

ForloopContext.prototype.block = function () {
    return this.getTypedRuleContext(BlockContext, 0);
};

ForloopContext.prototype.varDeclaration = function () {
    return this.getTypedRuleContext(VarDeclarationContext, 0);
};

ForloopContext.prototype.assignment = function () {
    return this.getTypedRuleContext(AssignmentContext, 0);
};

ForloopContext.prototype.enterRule = function (listener) {
    if (listener instanceof BigDataListener) {
        listener.enterForloop(this);
    }
};

ForloopContext.prototype.exitRule = function (listener) {
    if (listener instanceof BigDataListener) {
        listener.exitForloop(this);
    }
};


BigDataParser.ForloopContext = ForloopContext;

BigDataParser.prototype.forloop = function () {

    var localctx = new ForloopContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, BigDataParser.RULE_forloop);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 96;
        this.match(BigDataParser.T__8);
        this.state = 97;
        this.match(BigDataParser.T__1);
        this.state = 100;
        this._errHandler.sync(this);
        switch (this._input.LA(1)) {
            case BigDataParser.T__24:
                this.state = 98;
                this.varDeclaration();
                break;
            case BigDataParser.IDENTIFIER:
                this.state = 99;
                this.assignment();
                break;
            default:
                throw new antlr4.error.NoViableAltException(this);
        }
        this.state = 102;
        this.match(BigDataParser.T__9);
        this.state = 103;
        this.loopBool();
        this.state = 104;
        this.match(BigDataParser.T__9);
        this.state = 105;
        this.forExpression();
        this.state = 106;
        this.match(BigDataParser.T__2);
        this.state = 107;
        this.block();
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

function ExpressionContext(parser, parent, invokingState) {
    if (parent === undefined) {
        parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
        invokingState = -1;
    }
    antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BigDataParser.RULE_expression;
    return this;
}

ExpressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExpressionContext.prototype.constructor = ExpressionContext;


ExpressionContext.prototype.copyFrom = function (ctx) {
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

PreIncrementContext.prototype.IDENTIFIER = function () {
    return this.getToken(BigDataParser.IDENTIFIER, 0);
};
PreIncrementContext.prototype.enterRule = function (listener) {
    if (listener instanceof BigDataListener) {
        listener.enterPreIncrement(this);
    }
};

PreIncrementContext.prototype.exitRule = function (listener) {
    if (listener instanceof BigDataListener) {
        listener.exitPreIncrement(this);
    }
};


function VariableContext(parser, ctx) {
    ExpressionContext.call(this, parser);
    this.varName = null; // Token;
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

VariableContext.prototype = Object.create(ExpressionContext.prototype);
VariableContext.prototype.constructor = VariableContext;

BigDataParser.VariableContext = VariableContext;

VariableContext.prototype.IDENTIFIER = function () {
    return this.getToken(BigDataParser.IDENTIFIER, 0);
};
VariableContext.prototype.enterRule = function (listener) {
    if (listener instanceof BigDataListener) {
        listener.enterVariable(this);
    }
};

VariableContext.prototype.exitRule = function (listener) {
    if (listener instanceof BigDataListener) {
        listener.exitVariable(this);
    }
};


function FuncCallExpressionContext(parser, ctx) {
    ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

FuncCallExpressionContext.prototype = Object.create(ExpressionContext.prototype);
FuncCallExpressionContext.prototype.constructor = FuncCallExpressionContext;

BigDataParser.FuncCallExpressionContext = FuncCallExpressionContext;

FuncCallExpressionContext.prototype.functionCall = function () {
    return this.getTypedRuleContext(FunctionCallContext, 0);
};
FuncCallExpressionContext.prototype.enterRule = function (listener) {
    if (listener instanceof BigDataListener) {
        listener.enterFuncCallExpression(this);
    }
};

FuncCallExpressionContext.prototype.exitRule = function (listener) {
    if (listener instanceof BigDataListener) {
        listener.exitFuncCallExpression(this);
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

PostDecrementContext.prototype.IDENTIFIER = function () {
    return this.getToken(BigDataParser.IDENTIFIER, 0);
};
PostDecrementContext.prototype.enterRule = function (listener) {
    if (listener instanceof BigDataListener) {
        listener.enterPostDecrement(this);
    }
};

PostDecrementContext.prototype.exitRule = function (listener) {
    if (listener instanceof BigDataListener) {
        listener.exitPostDecrement(this);
    }
};


function LTContext(parser, ctx) {
    ExpressionContext.call(this, parser);
    this.left = null; // ExpressionContext;
    this.right = null; // ExpressionContext;
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

LTContext.prototype = Object.create(ExpressionContext.prototype);
LTContext.prototype.constructor = LTContext;

BigDataParser.LTContext = LTContext;

LTContext.prototype.expression = function (i) {
    if (i === undefined) {
        i = null;
    }
    if (i === null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext, i);
    }
};
LTContext.prototype.enterRule = function (listener) {
    if (listener instanceof BigDataListener) {
        listener.enterLT(this);
    }
};

LTContext.prototype.exitRule = function (listener) {
    if (listener instanceof BigDataListener) {
        listener.exitLT(this);
    }
};


function LANDContext(parser, ctx) {
    ExpressionContext.call(this, parser);
    this.left = null; // ExpressionContext;
    this.right = null; // ExpressionContext;
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

LANDContext.prototype = Object.create(ExpressionContext.prototype);
LANDContext.prototype.constructor = LANDContext;

BigDataParser.LANDContext = LANDContext;

LANDContext.prototype.expression = function (i) {
    if (i === undefined) {
        i = null;
    }
    if (i === null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext, i);
    }
};
LANDContext.prototype.enterRule = function (listener) {
    if (listener instanceof BigDataListener) {
        listener.enterLAND(this);
    }
};

LANDContext.prototype.exitRule = function (listener) {
    if (listener instanceof BigDataListener) {
        listener.exitLAND(this);
    }
};


function EQContext(parser, ctx) {
    ExpressionContext.call(this, parser);
    this.left = null; // ExpressionContext;
    this.right = null; // ExpressionContext;
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

EQContext.prototype = Object.create(ExpressionContext.prototype);
EQContext.prototype.constructor = EQContext;

BigDataParser.EQContext = EQContext;

EQContext.prototype.expression = function (i) {
    if (i === undefined) {
        i = null;
    }
    if (i === null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext, i);
    }
};
EQContext.prototype.enterRule = function (listener) {
    if (listener instanceof BigDataListener) {
        listener.enterEQ(this);
    }
};

EQContext.prototype.exitRule = function (listener) {
    if (listener instanceof BigDataListener) {
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

DoubleContext.prototype.DOUBLE = function () {
    return this.getToken(BigDataParser.DOUBLE, 0);
};
DoubleContext.prototype.enterRule = function (listener) {
    if (listener instanceof BigDataListener) {
        listener.enterDouble(this);
    }
};

DoubleContext.prototype.exitRule = function (listener) {
    if (listener instanceof BigDataListener) {
        listener.exitDouble(this);
    }
};


function GTContext(parser, ctx) {
    ExpressionContext.call(this, parser);
    this.left = null; // ExpressionContext;
    this.right = null; // ExpressionContext;
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

GTContext.prototype = Object.create(ExpressionContext.prototype);
GTContext.prototype.constructor = GTContext;

BigDataParser.GTContext = GTContext;

GTContext.prototype.expression = function (i) {
    if (i === undefined) {
        i = null;
    }
    if (i === null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext, i);
    }
};
GTContext.prototype.enterRule = function (listener) {
    if (listener instanceof BigDataListener) {
        listener.enterGT(this);
    }
};

GTContext.prototype.exitRule = function (listener) {
    if (listener instanceof BigDataListener) {
        listener.exitGT(this);
    }
};


function LORContext(parser, ctx) {
    ExpressionContext.call(this, parser);
    this.left = null; // ExpressionContext;
    this.right = null; // ExpressionContext;
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

LORContext.prototype = Object.create(ExpressionContext.prototype);
LORContext.prototype.constructor = LORContext;

BigDataParser.LORContext = LORContext;

LORContext.prototype.expression = function (i) {
    if (i === undefined) {
        i = null;
    }
    if (i === null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext, i);
    }
};
LORContext.prototype.enterRule = function (listener) {
    if (listener instanceof BigDataListener) {
        listener.enterLOR(this);
    }
};

LORContext.prototype.exitRule = function (listener) {
    if (listener instanceof BigDataListener) {
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

IntegerContext.prototype.INTEGER = function () {
    return this.getToken(BigDataParser.INTEGER, 0);
};
IntegerContext.prototype.enterRule = function (listener) {
    if (listener instanceof BigDataListener) {
        listener.enterInteger(this);
    }
};

IntegerContext.prototype.exitRule = function (listener) {
    if (listener instanceof BigDataListener) {
        listener.exitInteger(this);
    }
};


function DivContext(parser, ctx) {
    ExpressionContext.call(this, parser);
    this.left = null; // ExpressionContext;
    this.right = null; // ExpressionContext;
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

DivContext.prototype = Object.create(ExpressionContext.prototype);
DivContext.prototype.constructor = DivContext;

BigDataParser.DivContext = DivContext;

DivContext.prototype.expression = function (i) {
    if (i === undefined) {
        i = null;
    }
    if (i === null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext, i);
    }
};
DivContext.prototype.enterRule = function (listener) {
    if (listener instanceof BigDataListener) {
        listener.enterDiv(this);
    }
};

DivContext.prototype.exitRule = function (listener) {
    if (listener instanceof BigDataListener) {
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

FloatContext.prototype.FLOAT = function () {
    return this.getToken(BigDataParser.FLOAT, 0);
};
FloatContext.prototype.enterRule = function (listener) {
    if (listener instanceof BigDataListener) {
        listener.enterFloat(this);
    }
};

FloatContext.prototype.exitRule = function (listener) {
    if (listener instanceof BigDataListener) {
        listener.exitFloat(this);
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

ParenthesisContext.prototype.expression = function () {
    return this.getTypedRuleContext(ExpressionContext, 0);
};
ParenthesisContext.prototype.enterRule = function (listener) {
    if (listener instanceof BigDataListener) {
        listener.enterParenthesis(this);
    }
};

ParenthesisContext.prototype.exitRule = function (listener) {
    if (listener instanceof BigDataListener) {
        listener.exitParenthesis(this);
    }
};


function GEQContext(parser, ctx) {
    ExpressionContext.call(this, parser);
    this.left = null; // ExpressionContext;
    this.right = null; // ExpressionContext;
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

GEQContext.prototype = Object.create(ExpressionContext.prototype);
GEQContext.prototype.constructor = GEQContext;

BigDataParser.GEQContext = GEQContext;

GEQContext.prototype.expression = function (i) {
    if (i === undefined) {
        i = null;
    }
    if (i === null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext, i);
    }
};
GEQContext.prototype.enterRule = function (listener) {
    if (listener instanceof BigDataListener) {
        listener.enterGEQ(this);
    }
};

GEQContext.prototype.exitRule = function (listener) {
    if (listener instanceof BigDataListener) {
        listener.exitGEQ(this);
    }
};


function MultContext(parser, ctx) {
    ExpressionContext.call(this, parser);
    this.left = null; // ExpressionContext;
    this.right = null; // ExpressionContext;
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

MultContext.prototype = Object.create(ExpressionContext.prototype);
MultContext.prototype.constructor = MultContext;

BigDataParser.MultContext = MultContext;

MultContext.prototype.expression = function (i) {
    if (i === undefined) {
        i = null;
    }
    if (i === null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext, i);
    }
};
MultContext.prototype.enterRule = function (listener) {
    if (listener instanceof BigDataListener) {
        listener.enterMult(this);
    }
};

MultContext.prototype.exitRule = function (listener) {
    if (listener instanceof BigDataListener) {
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

LongContext.prototype.LONG = function () {
    return this.getToken(BigDataParser.LONG, 0);
};
LongContext.prototype.enterRule = function (listener) {
    if (listener instanceof BigDataListener) {
        listener.enterLong(this);
    }
};

LongContext.prototype.exitRule = function (listener) {
    if (listener instanceof BigDataListener) {
        listener.exitLong(this);
    }
};


function LEQContext(parser, ctx) {
    ExpressionContext.call(this, parser);
    this.left = null; // ExpressionContext;
    this.right = null; // ExpressionContext;
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

LEQContext.prototype = Object.create(ExpressionContext.prototype);
LEQContext.prototype.constructor = LEQContext;

BigDataParser.LEQContext = LEQContext;

LEQContext.prototype.expression = function (i) {
    if (i === undefined) {
        i = null;
    }
    if (i === null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext, i);
    }
};
LEQContext.prototype.enterRule = function (listener) {
    if (listener instanceof BigDataListener) {
        listener.enterLEQ(this);
    }
};

LEQContext.prototype.exitRule = function (listener) {
    if (listener instanceof BigDataListener) {
        listener.exitLEQ(this);
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

PostIncrementContext.prototype.IDENTIFIER = function () {
    return this.getToken(BigDataParser.IDENTIFIER, 0);
};
PostIncrementContext.prototype.enterRule = function (listener) {
    if (listener instanceof BigDataListener) {
        listener.enterPostIncrement(this);
    }
};

PostIncrementContext.prototype.exitRule = function (listener) {
    if (listener instanceof BigDataListener) {
        listener.exitPostIncrement(this);
    }
};


function NEQContext(parser, ctx) {
    ExpressionContext.call(this, parser);
    this.left = null; // ExpressionContext;
    this.right = null; // ExpressionContext;
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

NEQContext.prototype = Object.create(ExpressionContext.prototype);
NEQContext.prototype.constructor = NEQContext;

BigDataParser.NEQContext = NEQContext;

NEQContext.prototype.expression = function (i) {
    if (i === undefined) {
        i = null;
    }
    if (i === null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext, i);
    }
};
NEQContext.prototype.enterRule = function (listener) {
    if (listener instanceof BigDataListener) {
        listener.enterNEQ(this);
    }
};

NEQContext.prototype.exitRule = function (listener) {
    if (listener instanceof BigDataListener) {
        listener.exitNEQ(this);
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

BooleanContext.prototype.BOOLEANLITERAL = function () {
    return this.getToken(BigDataParser.BOOLEANLITERAL, 0);
};
BooleanContext.prototype.enterRule = function (listener) {
    if (listener instanceof BigDataListener) {
        listener.enterBoolean(this);
    }
};

BooleanContext.prototype.exitRule = function (listener) {
    if (listener instanceof BigDataListener) {
        listener.exitBoolean(this);
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

PreDecrementContext.prototype.IDENTIFIER = function () {
    return this.getToken(BigDataParser.IDENTIFIER, 0);
};
PreDecrementContext.prototype.enterRule = function (listener) {
    if (listener instanceof BigDataListener) {
        listener.enterPreDecrement(this);
    }
};

PreDecrementContext.prototype.exitRule = function (listener) {
    if (listener instanceof BigDataListener) {
        listener.exitPreDecrement(this);
    }
};


function PlusContext(parser, ctx) {
    ExpressionContext.call(this, parser);
    this.left = null; // ExpressionContext;
    this.right = null; // ExpressionContext;
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

PlusContext.prototype = Object.create(ExpressionContext.prototype);
PlusContext.prototype.constructor = PlusContext;

BigDataParser.PlusContext = PlusContext;

PlusContext.prototype.expression = function (i) {
    if (i === undefined) {
        i = null;
    }
    if (i === null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext, i);
    }
};
PlusContext.prototype.enterRule = function (listener) {
    if (listener instanceof BigDataListener) {
        listener.enterPlus(this);
    }
};

PlusContext.prototype.exitRule = function (listener) {
    if (listener instanceof BigDataListener) {
        listener.exitPlus(this);
    }
};


function MinusContext(parser, ctx) {
    ExpressionContext.call(this, parser);
    this.left = null; // ExpressionContext;
    this.right = null; // ExpressionContext;
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

MinusContext.prototype = Object.create(ExpressionContext.prototype);
MinusContext.prototype.constructor = MinusContext;

BigDataParser.MinusContext = MinusContext;

MinusContext.prototype.expression = function (i) {
    if (i === undefined) {
        i = null;
    }
    if (i === null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext, i);
    }
};
MinusContext.prototype.enterRule = function (listener) {
    if (listener instanceof BigDataListener) {
        listener.enterMinus(this);
    }
};

MinusContext.prototype.exitRule = function (listener) {
    if (listener instanceof BigDataListener) {
        listener.exitMinus(this);
    }
};


BigDataParser.prototype.expression = function (_p) {
    if (_p === undefined) {
        _p = 0;
    }
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new ExpressionContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 24;
    this.enterRecursionRule(localctx, 24, BigDataParser.RULE_expression, _p);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 129;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input, 4, this._ctx);
        switch (la_) {
            case 1:
                localctx = new IntegerContext(this, localctx);
                this._ctx = localctx;
                _prevctx = localctx;

                this.state = 110;
                this.match(BigDataParser.INTEGER);
                break;

            case 2:
                localctx = new LongContext(this, localctx);
                this._ctx = localctx;
                _prevctx = localctx;
                this.state = 111;
                this.match(BigDataParser.LONG);
                break;

            case 3:
                localctx = new FloatContext(this, localctx);
                this._ctx = localctx;
                _prevctx = localctx;
                this.state = 112;
                this.match(BigDataParser.FLOAT);
                break;

            case 4:
                localctx = new DoubleContext(this, localctx);
                this._ctx = localctx;
                _prevctx = localctx;
                this.state = 113;
                this.match(BigDataParser.DOUBLE);
                break;

            case 5:
                localctx = new BooleanContext(this, localctx);
                this._ctx = localctx;
                _prevctx = localctx;
                this.state = 114;
                this.match(BigDataParser.BOOLEANLITERAL);
                break;

            case 6:
                localctx = new VariableContext(this, localctx);
                this._ctx = localctx;
                _prevctx = localctx;
                this.state = 115;
                localctx.varName = this.match(BigDataParser.IDENTIFIER);
                break;

            case 7:
                localctx = new FuncCallExpressionContext(this, localctx);
                this._ctx = localctx;
                _prevctx = localctx;
                this.state = 116;
                this.functionCall();
                break;

            case 8:
                localctx = new ParenthesisContext(this, localctx);
                this._ctx = localctx;
                _prevctx = localctx;
                this.state = 117;
                this.match(BigDataParser.T__1);
                this.state = 118;
                this.expression(0);
                this.state = 119;
                this.match(BigDataParser.T__2);
                break;

            case 9:
                localctx = new PostIncrementContext(this, localctx);
                this._ctx = localctx;
                _prevctx = localctx;
                this.state = 121;
                localctx.varName = this.match(BigDataParser.IDENTIFIER);
                this.state = 122;
                this.match(BigDataParser.T__22);
                break;

            case 10:
                localctx = new PreIncrementContext(this, localctx);
                this._ctx = localctx;
                _prevctx = localctx;
                this.state = 123;
                this.match(BigDataParser.T__22);
                this.state = 124;
                localctx.varName = this.match(BigDataParser.IDENTIFIER);
                break;

            case 11:
                localctx = new PostDecrementContext(this, localctx);
                this._ctx = localctx;
                _prevctx = localctx;
                this.state = 125;
                localctx.varName = this.match(BigDataParser.IDENTIFIER);
                this.state = 126;
                this.match(BigDataParser.T__23);
                break;

            case 12:
                localctx = new PreDecrementContext(this, localctx);
                this._ctx = localctx;
                _prevctx = localctx;
                this.state = 127;
                this.match(BigDataParser.T__23);
                this.state = 128;
                localctx.varName = this.match(BigDataParser.IDENTIFIER);
                break;

        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 169;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input, 6, this._ctx)
        while (_alt != 2 && _alt != antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if (_alt === 1) {
                if (this._parseListeners !== null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 167;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input, 5, this._ctx);
                switch (la_) {
                    case 1:
                        localctx = new DivContext(this, new ExpressionContext(this, _parentctx, _parentState));
                        localctx.left = _prevctx;
                        this.pushNewRecursionContext(localctx, _startState, BigDataParser.RULE_expression);
                        this.state = 131;
                        if (!(this.precpred(this._ctx, 24))) {
                            throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 24)");
                        }
                        this.state = 132;
                        this.match(BigDataParser.T__10);
                        this.state = 133;
                        localctx.right = this.expression(25);
                        break;

                    case 2:
                        localctx = new MultContext(this, new ExpressionContext(this, _parentctx, _parentState));
                        localctx.left = _prevctx;
                        this.pushNewRecursionContext(localctx, _startState, BigDataParser.RULE_expression);
                        this.state = 134;
                        if (!(this.precpred(this._ctx, 23))) {
                            throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 23)");
                        }
                        this.state = 135;
                        this.match(BigDataParser.T__11);
                        this.state = 136;
                        localctx.right = this.expression(24);
                        break;

                    case 3:
                        localctx = new MinusContext(this, new ExpressionContext(this, _parentctx, _parentState));
                        localctx.left = _prevctx;
                        this.pushNewRecursionContext(localctx, _startState, BigDataParser.RULE_expression);
                        this.state = 137;
                        if (!(this.precpred(this._ctx, 22))) {
                            throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 22)");
                        }
                        this.state = 138;
                        this.match(BigDataParser.T__12);
                        this.state = 139;
                        localctx.right = this.expression(23);
                        break;

                    case 4:
                        localctx = new PlusContext(this, new ExpressionContext(this, _parentctx, _parentState));
                        localctx.left = _prevctx;
                        this.pushNewRecursionContext(localctx, _startState, BigDataParser.RULE_expression);
                        this.state = 140;
                        if (!(this.precpred(this._ctx, 21))) {
                            throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 21)");
                        }
                        this.state = 141;
                        this.match(BigDataParser.T__13);
                        this.state = 142;
                        localctx.right = this.expression(22);
                        break;

                    case 5:
                        localctx = new LTContext(this, new ExpressionContext(this, _parentctx, _parentState));
                        localctx.left = _prevctx;
                        this.pushNewRecursionContext(localctx, _startState, BigDataParser.RULE_expression);
                        this.state = 143;
                        if (!(this.precpred(this._ctx, 13))) {
                            throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 13)");
                        }
                        this.state = 144;
                        this.match(BigDataParser.T__14);
                        this.state = 145;
                        localctx.right = this.expression(14);
                        break;

                    case 6:
                        localctx = new LEQContext(this, new ExpressionContext(this, _parentctx, _parentState));
                        localctx.left = _prevctx;
                        this.pushNewRecursionContext(localctx, _startState, BigDataParser.RULE_expression);
                        this.state = 146;
                        if (!(this.precpred(this._ctx, 12))) {
                            throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 12)");
                        }
                        this.state = 147;
                        this.match(BigDataParser.T__15);
                        this.state = 148;
                        localctx.right = this.expression(13);
                        break;

                    case 7:
                        localctx = new GTContext(this, new ExpressionContext(this, _parentctx, _parentState));
                        localctx.left = _prevctx;
                        this.pushNewRecursionContext(localctx, _startState, BigDataParser.RULE_expression);
                        this.state = 149;
                        if (!(this.precpred(this._ctx, 11))) {
                            throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 11)");
                        }
                        this.state = 150;
                        this.match(BigDataParser.T__16);
                        this.state = 151;
                        localctx.right = this.expression(12);
                        break;

                    case 8:
                        localctx = new GEQContext(this, new ExpressionContext(this, _parentctx, _parentState));
                        localctx.left = _prevctx;
                        this.pushNewRecursionContext(localctx, _startState, BigDataParser.RULE_expression);
                        this.state = 152;
                        if (!(this.precpred(this._ctx, 10))) {
                            throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 10)");
                        }
                        this.state = 153;
                        this.match(BigDataParser.T__17);
                        this.state = 154;
                        localctx.right = this.expression(11);
                        break;

                    case 9:
                        localctx = new EQContext(this, new ExpressionContext(this, _parentctx, _parentState));
                        localctx.left = _prevctx;
                        this.pushNewRecursionContext(localctx, _startState, BigDataParser.RULE_expression);
                        this.state = 155;
                        if (!(this.precpred(this._ctx, 9))) {
                            throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 9)");
                        }
                        this.state = 156;
                        this.match(BigDataParser.T__18);
                        this.state = 157;
                        localctx.right = this.expression(10);
                        break;

                    case 10:
                        localctx = new NEQContext(this, new ExpressionContext(this, _parentctx, _parentState));
                        localctx.left = _prevctx;
                        this.pushNewRecursionContext(localctx, _startState, BigDataParser.RULE_expression);
                        this.state = 158;
                        if (!(this.precpred(this._ctx, 8))) {
                            throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 8)");
                        }
                        this.state = 159;
                        this.match(BigDataParser.T__19);
                        this.state = 160;
                        localctx.right = this.expression(9);
                        break;

                    case 11:
                        localctx = new LANDContext(this, new ExpressionContext(this, _parentctx, _parentState));
                        localctx.left = _prevctx;
                        this.pushNewRecursionContext(localctx, _startState, BigDataParser.RULE_expression);
                        this.state = 161;
                        if (!(this.precpred(this._ctx, 7))) {
                            throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 7)");
                        }
                        this.state = 162;
                        this.match(BigDataParser.T__20);
                        this.state = 163;
                        localctx.right = this.expression(8);
                        break;

                    case 12:
                        localctx = new LORContext(this, new ExpressionContext(this, _parentctx, _parentState));
                        localctx.left = _prevctx;
                        this.pushNewRecursionContext(localctx, _startState, BigDataParser.RULE_expression);
                        this.state = 164;
                        if (!(this.precpred(this._ctx, 6))) {
                            throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
                        }
                        this.state = 165;
                        this.match(BigDataParser.T__21);
                        this.state = 166;
                        localctx.right = this.expression(7);
                        break;

                } 
            }
            this.state = 171;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 6, this._ctx);
        }

    } catch (error) {
        if (error instanceof antlr4.error.RecognitionException) {
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

function VarDeclarationContext(parser, parent, invokingState) {
    if (parent === undefined) {
        parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
        invokingState = -1;
    }
    antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BigDataParser.RULE_varDeclaration;
    this.varName = null; // Token
    this.type = null; // Token
    this.expr = null; // ExpressionContext
    return this;
}

VarDeclarationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
VarDeclarationContext.prototype.constructor = VarDeclarationContext;

VarDeclarationContext.prototype.IDENTIFIER = function () {
    return this.getToken(BigDataParser.IDENTIFIER, 0);
};

VarDeclarationContext.prototype.TYPES = function () {
    return this.getToken(BigDataParser.TYPES, 0);
};

VarDeclarationContext.prototype.expression = function () {
    return this.getTypedRuleContext(ExpressionContext, 0);
};

VarDeclarationContext.prototype.enterRule = function (listener) {
    if (listener instanceof BigDataListener) {
        listener.enterVarDeclaration(this);
    }
};

VarDeclarationContext.prototype.exitRule = function (listener) {
    if (listener instanceof BigDataListener) {
        listener.exitVarDeclaration(this);
    }
};


BigDataParser.VarDeclarationContext = VarDeclarationContext;

BigDataParser.prototype.varDeclaration = function () {

    var localctx = new VarDeclarationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 26, BigDataParser.RULE_varDeclaration);
    try {
        this.state = 182;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input, 7, this._ctx);
        switch (la_) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                this.state = 172;
                this.match(BigDataParser.T__24);
                this.state = 173;
                localctx.varName = this.match(BigDataParser.IDENTIFIER);
                this.state = 174;
                this.match(BigDataParser.T__25);
                this.state = 175;
                localctx.type = this.match(BigDataParser.TYPES);
                this.state = 176;
                this.match(BigDataParser.T__26);
                this.state = 177;
                localctx.expr = this.expression(0);
                break;

            case 2:
                this.enterOuterAlt(localctx, 2);
                this.state = 178;
                this.match(BigDataParser.T__24);
                this.state = 179;
                localctx.varName = this.match(BigDataParser.IDENTIFIER);
                this.state = 180;
                this.match(BigDataParser.T__25);
                this.state = 181;
                localctx.type = this.match(BigDataParser.TYPES);
                break;

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

function VarHandingContext(parser, parent, invokingState) {
    if (parent === undefined) {
        parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
        invokingState = -1;
    }
    antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BigDataParser.RULE_varHanding;
    this.varName = null; // Token
    this.type = null; // Token
    return this;
}

VarHandingContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
VarHandingContext.prototype.constructor = VarHandingContext;

VarHandingContext.prototype.IDENTIFIER = function () {
    return this.getToken(BigDataParser.IDENTIFIER, 0);
};

VarHandingContext.prototype.TYPES = function () {
    return this.getToken(BigDataParser.TYPES, 0);
};

VarHandingContext.prototype.enterRule = function (listener) {
    if (listener instanceof BigDataListener) {
        listener.enterVarHanding(this);
    }
};

VarHandingContext.prototype.exitRule = function (listener) {
    if (listener instanceof BigDataListener) {
        listener.exitVarHanding(this);
    }
};


BigDataParser.VarHandingContext = VarHandingContext;

BigDataParser.prototype.varHanding = function () {

    var localctx = new VarHandingContext(this, this._ctx, this.state);
    this.enterRule(localctx, 28, BigDataParser.RULE_varHanding);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 184;
        localctx.varName = this.match(BigDataParser.IDENTIFIER);
        this.state = 185;
        this.match(BigDataParser.T__25);
        this.state = 186;
        localctx.type = this.match(BigDataParser.TYPES);
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
    if (parent === undefined) {
        parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
        invokingState = -1;
    }
    antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BigDataParser.RULE_assignment;
    this.varName = null; // Token
    this.expr = null; // ExpressionContext
    return this;
}

AssignmentContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AssignmentContext.prototype.constructor = AssignmentContext;

AssignmentContext.prototype.IDENTIFIER = function () {
    return this.getToken(BigDataParser.IDENTIFIER, 0);
};

AssignmentContext.prototype.expression = function () {
    return this.getTypedRuleContext(ExpressionContext, 0);
};

AssignmentContext.prototype.enterRule = function (listener) {
    if (listener instanceof BigDataListener) {
        listener.enterAssignment(this);
    }
};

AssignmentContext.prototype.exitRule = function (listener) {
    if (listener instanceof BigDataListener) {
        listener.exitAssignment(this);
    }
};


BigDataParser.AssignmentContext = AssignmentContext;

BigDataParser.prototype.assignment = function () {

    var localctx = new AssignmentContext(this, this._ctx, this.state);
    this.enterRule(localctx, 30, BigDataParser.RULE_assignment);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 188;
        localctx.varName = this.match(BigDataParser.IDENTIFIER);
        this.state = 189;
        this.match(BigDataParser.T__26);
        this.state = 190;
        localctx.expr = this.expression(0);
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

function FunctionDefinitionContext(parser, parent, invokingState) {
    if (parent === undefined) {
        parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
        invokingState = -1;
    }
    antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BigDataParser.RULE_functionDefinition;
    this.funcName = null; // Token
    this.params = null; // ParameterDeclarationContext
    this.type = null; // Token
    this.statements = null; // StatementListContext
    this.returnValue = null; // ExpressionContext
    return this;
}

FunctionDefinitionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FunctionDefinitionContext.prototype.constructor = FunctionDefinitionContext;

FunctionDefinitionContext.prototype.IDENTIFIER = function () {
    return this.getToken(BigDataParser.IDENTIFIER, 0);
};

FunctionDefinitionContext.prototype.TYPES = function () {
    return this.getToken(BigDataParser.TYPES, 0);
};

FunctionDefinitionContext.prototype.statementList = function () {
    return this.getTypedRuleContext(StatementListContext, 0);
};

FunctionDefinitionContext.prototype.expression = function () {
    return this.getTypedRuleContext(ExpressionContext, 0);
};

FunctionDefinitionContext.prototype.parameterDeclaration = function () {
    return this.getTypedRuleContext(ParameterDeclarationContext, 0);
};

FunctionDefinitionContext.prototype.enterRule = function (listener) {
    if (listener instanceof BigDataListener) {
        listener.enterFunctionDefinition(this);
    }
};

FunctionDefinitionContext.prototype.exitRule = function (listener) {
    if (listener instanceof BigDataListener) {
        listener.exitFunctionDefinition(this);
    }
};


BigDataParser.FunctionDefinitionContext = FunctionDefinitionContext;

BigDataParser.prototype.functionDefinition = function () {

    var localctx = new FunctionDefinitionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 32, BigDataParser.RULE_functionDefinition);
    var _la = 0; // Token type
    try {
        this.state = 218;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input, 10, this._ctx);
        switch (la_) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                this.state = 192;
                this.match(BigDataParser.T__27);
                this.state = 193;
                localctx.funcName = this.match(BigDataParser.IDENTIFIER);
                this.state = 194;
                this.match(BigDataParser.T__1);
                this.state = 196;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === BigDataParser.IDENTIFIER) {
                    this.state = 195;
                    localctx.params = this.parameterDeclaration();
                }

                this.state = 198;
                this.match(BigDataParser.T__2);
                this.state = 199;
                this.match(BigDataParser.T__25);
                this.state = 200;
                localctx.type = this.match(BigDataParser.TYPES);
                this.state = 201;
                this.match(BigDataParser.T__4);
                this.state = 202;
                localctx.statements = this.statementList();
                this.state = 203;
                this.match(BigDataParser.T__28);
                this.state = 204;
                localctx.returnValue = this.expression(0);
                this.state = 205;
                this.match(BigDataParser.T__5);
                break;

            case 2:
                this.enterOuterAlt(localctx, 2);
                this.state = 207;
                this.match(BigDataParser.T__27);
                this.state = 208;
                localctx.funcName = this.match(BigDataParser.IDENTIFIER);
                this.state = 209;
                this.match(BigDataParser.T__1);
                this.state = 211;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === BigDataParser.IDENTIFIER) {
                    this.state = 210;
                    localctx.params = this.parameterDeclaration();
                }

                this.state = 213;
                this.match(BigDataParser.T__2);
                this.state = 214;
                this.match(BigDataParser.T__4);
                this.state = 215;
                localctx.statements = this.statementList();
                this.state = 216;
                this.match(BigDataParser.T__5);
                break;

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

function ParameterDeclarationContext(parser, parent, invokingState) {
    if (parent === undefined) {
        parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
        invokingState = -1;
    }
    antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BigDataParser.RULE_parameterDeclaration;
    this._varHanding = null; // VarHandingContext
    this.declarations = []; // of VarHandingContexts
    return this;
}

ParameterDeclarationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ParameterDeclarationContext.prototype.constructor = ParameterDeclarationContext;

ParameterDeclarationContext.prototype.varHanding = function (i) {
    if (i === undefined) {
        i = null;
    }
    if (i === null) {
        return this.getTypedRuleContexts(VarHandingContext);
    } else {
        return this.getTypedRuleContext(VarHandingContext, i);
    }
};

ParameterDeclarationContext.prototype.enterRule = function (listener) {
    if (listener instanceof BigDataListener) {
        listener.enterParameterDeclaration(this);
    }
};

ParameterDeclarationContext.prototype.exitRule = function (listener) {
    if (listener instanceof BigDataListener) {
        listener.exitParameterDeclaration(this);
    }
};


BigDataParser.ParameterDeclarationContext = ParameterDeclarationContext;

BigDataParser.prototype.parameterDeclaration = function () {

    var localctx = new ParameterDeclarationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 34, BigDataParser.RULE_parameterDeclaration);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 220;
        localctx._varHanding = this.varHanding();
        localctx.declarations.push(localctx._varHanding);
        this.state = 225;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (_la === BigDataParser.T__29) {
            this.state = 221;
            this.match(BigDataParser.T__29);
            this.state = 222;
            localctx._varHanding = this.varHanding();
            localctx.declarations.push(localctx._varHanding);
            this.state = 227;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
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

function StatementListContext(parser, parent, invokingState) {
    if (parent === undefined) {
        parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
        invokingState = -1;
    }
    antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BigDataParser.RULE_statementList;
    return this;
}

StatementListContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StatementListContext.prototype.constructor = StatementListContext;

StatementListContext.prototype.statement = function (i) {
    if (i === undefined) {
        i = null;
    }
    if (i === null) {
        return this.getTypedRuleContexts(StatementContext);
    } else {
        return this.getTypedRuleContext(StatementContext, i);
    }
};

StatementListContext.prototype.enterRule = function (listener) {
    if (listener instanceof BigDataListener) {
        listener.enterStatementList(this);
    }
};

StatementListContext.prototype.exitRule = function (listener) {
    if (listener instanceof BigDataListener) {
        listener.exitStatementList(this);
    }
};


BigDataParser.StatementListContext = StatementListContext;

BigDataParser.prototype.statementList = function () {

    var localctx = new StatementListContext(this, this._ctx, this.state);
    this.enterRule(localctx, 36, BigDataParser.RULE_statementList);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 231;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while ((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << BigDataParser.T__0) | (1 << BigDataParser.T__6) | (1 << BigDataParser.T__7) | (1 << BigDataParser.T__8) | (1 << BigDataParser.T__24))) !== 0) || _la === BigDataParser.IDENTIFIER) {
            this.state = 228;
            this.statement();
            this.state = 233;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
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

function FunctionCallContext(parser, parent, invokingState) {
    if (parent === undefined) {
        parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
        invokingState = -1;
    }
    antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BigDataParser.RULE_functionCall;
    this.funcName = null; // Token
    this.arguments = null; // ExpressionListContext
    return this;
}

FunctionCallContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FunctionCallContext.prototype.constructor = FunctionCallContext;

FunctionCallContext.prototype.IDENTIFIER = function () {
    return this.getToken(BigDataParser.IDENTIFIER, 0);
};

FunctionCallContext.prototype.expressionList = function (i) {
    if (i === undefined) {
        i = null;
    }
    if (i === null) {
        return this.getTypedRuleContexts(ExpressionListContext);
    } else {
        return this.getTypedRuleContext(ExpressionListContext, i);
    }
};

FunctionCallContext.prototype.enterRule = function (listener) {
    if (listener instanceof BigDataListener) {
        listener.enterFunctionCall(this);
    }
};

FunctionCallContext.prototype.exitRule = function (listener) {
    if (listener instanceof BigDataListener) {
        listener.exitFunctionCall(this);
    }
};


BigDataParser.FunctionCallContext = FunctionCallContext;

BigDataParser.prototype.functionCall = function () {

    var localctx = new FunctionCallContext(this, this._ctx, this.state);
    this.enterRule(localctx, 38, BigDataParser.RULE_functionCall);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 234;
        localctx.funcName = this.match(BigDataParser.IDENTIFIER);
        this.state = 235;
        this.match(BigDataParser.T__1);
        this.state = 239;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while ((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << BigDataParser.T__1) | (1 << BigDataParser.T__22) | (1 << BigDataParser.T__23))) !== 0) || ((((_la - 37)) & ~0x1f) == 0 && ((1 << (_la - 37)) & ((1 << (BigDataParser.BOOLEANLITERAL - 37)) | (1 << (BigDataParser.IDENTIFIER - 37)) | (1 << (BigDataParser.INTEGER - 37)) | (1 << (BigDataParser.LONG - 37)) | (1 << (BigDataParser.FLOAT - 37)) | (1 << (BigDataParser.DOUBLE - 37)))) !== 0)) {
            this.state = 236;
            localctx.arguments = this.expressionList();
            this.state = 241;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 242;
        this.match(BigDataParser.T__2);
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

function ExpressionListContext(parser, parent, invokingState) {
    if (parent === undefined) {
        parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
        invokingState = -1;
    }
    antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BigDataParser.RULE_expressionList;
    this._expression = null; // ExpressionContext
    this.expressions = []; // of ExpressionContexts
    return this;
}

ExpressionListContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExpressionListContext.prototype.constructor = ExpressionListContext;

ExpressionListContext.prototype.expression = function (i) {
    if (i === undefined) {
        i = null;
    }
    if (i === null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext, i);
    }
};

ExpressionListContext.prototype.enterRule = function (listener) {
    if (listener instanceof BigDataListener) {
        listener.enterExpressionList(this);
    }
};

ExpressionListContext.prototype.exitRule = function (listener) {
    if (listener instanceof BigDataListener) {
        listener.exitExpressionList(this);
    }
};


BigDataParser.ExpressionListContext = ExpressionListContext;

BigDataParser.prototype.expressionList = function () {

    var localctx = new ExpressionListContext(this, this._ctx, this.state);
    this.enterRule(localctx, 40, BigDataParser.RULE_expressionList);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 244;
        localctx._expression = this.expression(0);
        localctx.expressions.push(localctx._expression);
        this.state = 249;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (_la === BigDataParser.T__29) {
            this.state = 245;
            this.match(BigDataParser.T__29);
            this.state = 246;
            localctx._expression = this.expression(0);
            localctx.expressions.push(localctx._expression);
            this.state = 251;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
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


BigDataParser.prototype.sempred = function (localctx, ruleIndex, predIndex) {
    switch (ruleIndex) {
        case 12:
            return this.expression_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
    }
};

BigDataParser.prototype.expression_sempred = function (localctx, predIndex) {
    switch (predIndex) {
        case 0:
            return this.precpred(this._ctx, 24);
        case 1:
            return this.precpred(this._ctx, 23);
        case 2:
            return this.precpred(this._ctx, 22);
        case 3:
            return this.precpred(this._ctx, 21);
        case 4:
            return this.precpred(this._ctx, 13);
        case 5:
            return this.precpred(this._ctx, 12);
        case 6:
            return this.precpred(this._ctx, 11);
        case 7:
            return this.precpred(this._ctx, 10);
        case 8:
            return this.precpred(this._ctx, 9);
        case 9:
            return this.precpred(this._ctx, 8);
        case 10:
            return this.precpred(this._ctx, 7);
        case 11:
            return this.precpred(this._ctx, 6);
        default:
            throw "No predicate with index:" + predIndex;
    }
};


exports.BigDataParser = BigDataParser;
