//如果一个函数返回一个React元素，那么它就是一个JSX元素的构造器
type JSXElementConstructor<P>= ((props:P)=>ReactElement|null)|(new(props:P)=>Component<P,any>)
interface ReactElement<P=any,T extends string|JSXElementConstructor<any>=string>{
    type:T,
    props:P
}

interface DOMElement extends ReactElement{

}
interface ReactHTML {
    div:HTMLDivElement,
    span:HTMLSpanElement
}
interface DetailedReactHTMLElement extends DOMElement{
    type:keyof ReactHTML
}

type ReactText = string|number;
type ReactChild = ReactElement | ReactText;
type ReactNode = ReactChild | boolean|null|undefined;


interface FunctionComponent<P={}> {
    (props:P):ReactElement|null
}
interface FunctionComponentElement<P> extends ReactElement<P,FunctionComponent<P>>{

}
type ComponentState = any;
declare class Component<P,S>{
    setState(state:any):void
    render():ReactNode
}
interface ComponentClass<P={},S=ComponentState>{
    new(props:P):Component<P,S>// 函数前面如果加new,表示这是一个类的构造函数
}
//{type:ComponentClass<P>,props:P}
interface ComponentElement<P> extends ReactElement<P,ComponentClass<P>>{

}
//ComponentClass是指的类还是类的实例
export declare function createElement<P>(
    type:ComponentClass<P>,//是类这个构造 函数 
    props:P,
    ...children:ReactNode[]):ComponentElement<P>;
export declare function createElement<P>(
    type:FunctionComponent<P>,//函数组件
    props:P,
    ...children:ReactNode[]):FunctionComponentElement<P>;
export declare function createElement<P>(
    type:string,//type是一个字符串，它就是一个原生的组件div span p
    props:P,
    ...children:ReactNode[]):ReactElement;