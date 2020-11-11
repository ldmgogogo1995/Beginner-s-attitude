
import * as actionTypes from './action-types';
import {put,take} from '../redux-saga/effects';

export function* rootSaga(){
   for(let i=0;i<3;i++){
       console.log(`等待${actionTypes.ASYNC_ADD}动作`);
       //我在要卡住了，我要等有人向我发出一个ASYNC_ADD的动作指令,我才会接着往下走
       const action = yield take(actionTypes.ASYNC_ADD);
       console.log(`等到了`,action);
       yield put({type:actionTypes.ADD});//store.dispatch({type:actionTypes.ADD});
       console.log(`继续入下执行`);
   }
   console.log(`for结束之后`);
}
/**
 * 在saga里面我们三种generator =saga
 * 1.根saga 它是入口
 * 2.watcher saga 监听者
 * 3.worker saga  工作者
 * 
 * effects 指令对象 告诉监听SAGA我想干啥 ，我想做什么工作
 * take 接收
 * put 真正向仓库派发动作{type:actionTypes.ADD}
 */