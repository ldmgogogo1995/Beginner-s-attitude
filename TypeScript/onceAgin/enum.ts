/**
 * 枚
 * 举
 **/


/** 数字枚举 */
enum Direction {
  Up = 1,
  Down,
  Left,
  Right
}
//定义一个如上数字枚举，up使用初始化为1.其余的成员会从1开始自增

/** 数字枚举 （不适用初始化器）*/
enum DirectionNoInitial {
  Up,
  Down,
  Left,
  Right
}
//此时 up为0后面的数值递增

//使用枚举的方法：通过枚举的属性来方问枚举的成员，和枚举的名称来方问枚举的类型：
enum ResponseEnum {
  No = 0,
  Yse = 1,
}
function respond(rescipient: string, message: ResponseEnum): void {
  console.log(2 * message);
}
// respond('please:', ResponseEnum.Yse)

/*
  数字枚举可以被混入到 计算过的和常量成员（如下所示）。简短的说，不带初始化器的枚举或者
  被放在第一的位置，或者被放在使用了数字常量或者其他常量初始话的枚举后面。换句话说，下面的情况是
  不被允许的：
*/
const getSomeValue = () => 1 // 此时枚举成员必须有初始化表达式
enum E {
  A = getSomeValue(),
  // B,
  B = 1
}
/** 字符串枚举*/
//字符串的感念很简单，但是有细微的运行时的差别。在一个字符串枚举里，每个成员必须是字符串字面量或者另外一个字符串枚举成员进行初始化
enum DirectionString {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT",
}
//字符串枚举没有自增长的行为，字符串枚举可以很好的序列化。

/** 异构枚举（不建议这么做） */
enum BooleanLikeHeterogeneousEnum {
  No = 0,
  Yes = 'YES'
}

/**计算的和常量成员 */
// 每个枚举成员都带一个值，它可以使常量 或计算结果，当满足如下条件时，枚举成员被当作常量：

//（1）它是枚举 的第一个成员且没有初始化器，这种情况下它被赋予值0

enum EX {
  X
}
//（2）它不带有初始化器且它之前的枚举成员是一个数字常量。这种情况下，当前枚举成员的值为它上一个枚举成员的值加1.
// All enum members in 'E1' and 'E2' are constant.

enum E1 { X, Y, Z }

enum E2 {
  A = 1, B, C
}
//枚举成员使用 常量枚举表达式初始话。常数枚举表达式是TypeScript的子集，它可以在编译阶段求值。当一个表达式满足下面条件之一时，它就是一个常量枚举表达式：
//（一）一个枚举表达式字面量（主要是字符串字面量或数字字面量）
//（二）一个对之前定义的常量枚举成员的引用（可以是在不同的枚举类型中定义的）
//（三）带括号的常量枚举表达式
//（四）一元运算符+，-，~其中之一运用在了常量枚举表达式
//（五）常量枚举表达式做为二元运算符+，-，*，/，%，<<，>>，>>>，&，|，^的操作对象。若常熟枚举表达式球之后NaN或Intinity，则会在编译阶段报错。
enum FileAccess {
  //constant members
  None,
  Read = 1 << 1,
  Write = 1 << 2,
  ReadWrite = Read | Write,
  G = '123'.length
}
// console.log(FileAccess.Read, FileAccess.Write, 'look');

/**联合枚举与枚举成员的类型 */
//存在一种特殊的非计算的常量枚举成员的子集：字面量枚举成员。字面量枚举成员是指不带初始值的常量美剧成员或者是被初始化为：
//（1）任何字符串字面量，（2）任何数字字面量，（3）应用了一元-符号的数字字面量

//当所有枚举长远都拥有字面量枚举时，它就带有了一种特殊的语义。

//首先枚举成员成了类型！例如,我们额可以说某些成员 只能是枚举成员的值：
enum ShapeKind {
  Cricle,
  Square
}
interface Cricle {
  kind: ShapeKind.Cricle;
  radius: number;
}
interface Square {
  kind: ShapeKind.Square;
  sideLength: number;
}
// let c: Cricle = {
//   kind: ShapeKind.Square,//~~~~~~~~Error!
//   radius: 100
// }

//另一个变化是枚举本身变成了每个枚举成员的联合。虽然我们还没有讨论【联合类型】,但是你只要知道通过联合美剧，类型系统能够利用这样一个事实，它可以知道枚举里的值的集合。因此，TypeScript能够捕获在值比较时犯的愚蠢的错误。：例如
enum EtoFoo {
  Foo,
  Bar
}
function f(x: EtoFoo) {
  if (x !== EtoFoo.Bar || x !== EtoFoo.Bar) {

  }
}

/**运行时的枚举 */
//枚举是运行时真正存在的对象。例如下面的枚举

enum Eoperation {
  X, Y, Z
}
function Fenum(obj: { X: number }) {
  return obj.X
}
//运行时 发现 Eoperation 有一个X 值为0
// console.log(Fenum(Eoperation));

/** 反向映射 */
//除了创建一个以属性名为对象成员的对象之外，数字枚举成员还具有了反向映射，从枚举值到枚举枚举名字。例如，在下面的例子中：
enum Enum {
  A
}
let studyEnumA = Enum.A
let nameOfA = Enum[studyEnumA]
console.log("studyEnumA:", studyEnumA, 'nameOfA:', nameOfA);
/**var Enum;
(function (Enum) {
    Enum[Enum["A"] = 0] = "A";
})(Enum || (Enum = {}));
var studyEnumA = Enum.A;
var nameOfA = Enum[studyEnumA];
 */
//生成的代码中，枚举类型呗编译成一个对象，它包含了正向映射，（name->value）和方向映射（vlaue->name）引用枚举成员总会生成为对属性方问并且永远不会内敛代码
//注意：不会为字符串枚举成员生成反向映射。

/**const 枚举 */
// 常量枚举 通过在枚举上 使用 CONST 修饰符来定义
const enum constEnum {
  A = 1,
  B = A * 2
}
/**常量枚举只能使用常量枚举表达式，并且不同于常规的枚举，它们在编译阶段会被删除。 常量枚举成员在使用的地方会被内联进来。 之所以可以这么做是因为，常量枚举不允许包含计算成员。 */
/**外部枚举 */
declare enum EnumDeclare {
  A = 1,
  B,
  C = 2
}
//外部枚举和非外部枚举之间有一个重要的区别，在正常的枚举里，没有初始化方法的成员被当成常数成员。 对于非常数的外部枚举而言，没有初始化方法时被当做需要经过计算的。