import * as effectTypes from './effectTypes';
function runTakeEffect(env,payload,next){
   const matcher = actions=>actions.type === payload.pattern;//ASYNC_ADD
   env.channel.take(next,matcher);//?    
}
/**
 * 向仓库派发动作
 * @param {*} env 
 * @param {*} payload 
 * @param {*} next 
 */
function runPutEffect(env,payload,next){
    //dispatch是经过中间件改造过后的 store.dispatch
    env.dispatch(payload.action);
    next();
}
const effectRunnerMap = {
    [effectTypes.TAKE]:runTakeEffect,
    [effectTypes.PUT]:runPutEffect
}
export default effectRunnerMap;