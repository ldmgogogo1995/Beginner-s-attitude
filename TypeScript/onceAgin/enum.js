/**
 * 枚
 * 举
 **/
/** 数字枚举 */
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 1] = "Up";
    Direction[Direction["Down"] = 2] = "Down";
    Direction[Direction["Left"] = 3] = "Left";
    Direction[Direction["Right"] = 4] = "Right";
})(Direction || (Direction = {}));
//定义一个如上数字枚举，up使用初始化为1.其余的成员会从1开始自增
/** 数字枚举 （不适用初始化器）*/
var DirectionNoInitial;
(function (DirectionNoInitial) {
    DirectionNoInitial[DirectionNoInitial["Up"] = 0] = "Up";
    DirectionNoInitial[DirectionNoInitial["Down"] = 1] = "Down";
    DirectionNoInitial[DirectionNoInitial["Left"] = 2] = "Left";
    DirectionNoInitial[DirectionNoInitial["Right"] = 3] = "Right";
})(DirectionNoInitial || (DirectionNoInitial = {}));
//此时 up为0后面的数值递增
//使用枚举的方法：通过枚举的属性来方问枚举的成员，和枚举的名称来方问枚举的类型：
var ResponseEnum;
(function (ResponseEnum) {
    ResponseEnum[ResponseEnum["No"] = 0] = "No";
    ResponseEnum[ResponseEnum["Yse"] = 1] = "Yse";
})(ResponseEnum || (ResponseEnum = {}));
function respond(rescipient, message) {
    console.log(2 * message);
}
// respond('please:', ResponseEnum.Yse)
/*
  数字枚举可以被混入到 计算过的和常量成员（如下所示）。简短的说，不带初始化器的枚举或者
  被放在第一的位置，或者被放在使用了数字常量或者其他常量初始话的枚举后面。换句话说，下面的情况是
  不被允许的：
*/
var getSomeValue = function () { return 1; }; // 此时枚举成员必须有初始化表达式
var E;
(function (E) {
    E[E["A"] = getSomeValue()] = "A";
    // B,
    E[E["B"] = 1] = "B";
})(E || (E = {}));
/** 字符串枚举*/
//字符串的感念很简单，但是有细微的运行时的差别。在一个字符串枚举里，每个成员必须是字符串字面量或者另外一个字符串枚举成员进行初始化
var DirectionString;
(function (DirectionString) {
    DirectionString["Up"] = "UP";
    DirectionString["Down"] = "DOWN";
    DirectionString["Left"] = "LEFT";
    DirectionString["Right"] = "RIGHT";
})(DirectionString || (DirectionString = {}));
//字符串枚举没有自增长的行为，字符串枚举可以很好的序列化。
/** 异构枚举（不建议这么做） */
var BooleanLikeHeterogeneousEnum;
(function (BooleanLikeHeterogeneousEnum) {
    BooleanLikeHeterogeneousEnum[BooleanLikeHeterogeneousEnum["No"] = 0] = "No";
    BooleanLikeHeterogeneousEnum["Yes"] = "YES";
})(BooleanLikeHeterogeneousEnum || (BooleanLikeHeterogeneousEnum = {}));
/**计算的和常量成员 */
// 每个枚举成员都带一个值，它可以使常量 或计算结果，当满足如下条件时，枚举成员被当作常量：
//（1）它是枚举 的第一个成员且没有初始化器，这种情况下它被赋予值0
var EX;
(function (EX) {
    EX[EX["X"] = 0] = "X";
})(EX || (EX = {}));
//（2）它不带有初始化器且它之前的枚举成员是一个数字常量。这种情况下，当前枚举成员的值为它上一个枚举成员的值加1.
// All enum members in 'E1' and 'E2' are constant.
var E1;
(function (E1) {
    E1[E1["X"] = 0] = "X";
    E1[E1["Y"] = 1] = "Y";
    E1[E1["Z"] = 2] = "Z";
})(E1 || (E1 = {}));
var E2;
(function (E2) {
    E2[E2["A"] = 1] = "A";
    E2[E2["B"] = 2] = "B";
    E2[E2["C"] = 3] = "C";
})(E2 || (E2 = {}));
//枚举成员使用 常量枚举表达式初始话。常数枚举表达式是TypeScript的子集，它可以在编译阶段求值。当一个表达式满足下面条件之一时，它就是一个常量枚举表达式：
//（一）一个枚举表达式字面量（主要是字符串字面量或数字字面量）
//（二）一个对之前定义的常量枚举成员的引用（可以是在不同的枚举类型中定义的）
//（三）带括号的常量枚举表达式
//（四）一元运算符+，-，~其中之一运用在了常量枚举表达式
//（五）常量枚举表达式做为二元运算符+，-，*，/，%，<<，>>，>>>，&，|，^的操作对象。若常熟枚举表达式球之后NaN或Intinity，则会在编译阶段报错。
var FileAccess;
(function (FileAccess) {
    //constant members
    FileAccess[FileAccess["None"] = 0] = "None";
    FileAccess[FileAccess["Read"] = 2] = "Read";
    FileAccess[FileAccess["Write"] = 4] = "Write";
    FileAccess[FileAccess["ReadWrite"] = 6] = "ReadWrite";
    FileAccess[FileAccess["G"] = '123'.length] = "G";
})(FileAccess || (FileAccess = {}));
console.log(FileAccess.Read, FileAccess.Write, 'look');
/**联合枚举与枚举成员的类型 */ 
