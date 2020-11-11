import {stdChannel} from './channel';
import {runSaga} from './runSaga';
/**
 * 中间件其实是对store.dispatch的改造和增强
 * store.dispatch(action);
 */
function sagaMiddlewareFactory(){
    const channel = stdChannel();
    let boundRunSaga;//开始执行saga
    function sagaMiddleware({getState,dispatch}){
        boundRunSaga = runSaga.bind(null,{
            channel,dispatch,getState
        }); 
       return function(next){//调用下一个中间件 只有一个中间件话，next=store.dispatch
        return function(action){//{type:'ADD'}
            let result = next(action);//以后调用dispatch的时候，除了调用老的store.dispatch
            channel.put(action);//调用channel.put方法
            return result;
        }
       }
    }
    sagaMiddleware.run = (saga)=>{
        boundRunSaga(saga);
    }
    return sagaMiddleware;
}

export default sagaMiddlewareFactory;
/**
  store.dispatch();
   return function(action){
            let result = store.originDispatch(action);
            return result;
  }
 */