import React from 'react';
import {connect} from 'react-redux';
import actions from './store/actions';
class Counter extends React.Component{
    render(){
        return (
            <div>
                <p>{this.props.number}</p>
                <button onClick={this.props.add}>+</button>
            </div>
        )
    }
}
let mapStateToProps = state=>state;
export default connect(
    mapStateToProps,//把仓库的状态映射为组件的属性对象
    actions
)(Counter);
/**
 * 组件如何连接仓库
 * 输入 把仓库中的状态输入到组件中来 读仓库状态
 * 输出 把组件中派发的动作发射到仓库中去  写仓库状态
 */