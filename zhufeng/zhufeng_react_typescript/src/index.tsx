import * as React from 'react';
import * as ReactDOM from 'react-dom';

let root:HTMLElement | null = document.getElementById('root');
interface Props {//类组件属性类型
    className:'title'
}
let props:Props = {className:'title'};
interface State {//类组件的状态类型
    count:number
}
class Welcome extends React.Component<Props,State>{
    render():React.DetailedReactHTMLElement<Props, HTMLDivElement>{
        return React.createElement<Props,HTMLDivElement>("div",props,"hello",null,undefined,true,20);
    }
}


let element= React.createElement(Welcome,props);

ReactDOM.render(element,root);
