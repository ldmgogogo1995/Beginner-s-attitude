/** @format */

namespace typeInference {
    let x = 1 //类型推断 number
}
//此时变量会被推断为数字,大多情况下类型推断比较直接。

/* 最佳通用类型 */
let newx = [0, 1, null]
//当我们需要 数组里没有的候选类型时   会变成联合类型

// let zoo: Animal[] = [new Rhino(), new Elephant(), new Snake()];
//此时 zoo没有合适的类型，于是自动推断为(Rhion|Elephant|Snake)

/*上下文类型*/
//ts  类型推断也可能按照相反的方向进行。这被叫做“按上下文归类”。按上下文归类会发生在表达式的类型与所处位置相关是。比如：
window.onmousedown = function (mouseEvent:any) {
    console.log(mouseEvent.button) //ERROR
}
//这里会得到一个错误类型，TS类型检查器使用Window.onmousedown函数的类型来推断右边函数表达式的类型。因此，就能推断出mouseEvent参数的类型
//不是很懂