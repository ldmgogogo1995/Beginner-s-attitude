import effectRunnerMap from './effectRunnerMap';
/**
 * Co的原理 自动运行迭代器
 * @param {*} env 
 * @param {*} iterator 
 */
export default function proc(env,iterator){
   function next(args){debugger
     let result;
     result = iterator.next(args);//{done:false,value:{type:'TAKE',payload:{pattern:'ASYNC_ADD'}}}
     if(!result.done){
        runEffect(result.value,next);
     }
   }
   function runEffect(effect,next){
     if(effect){
         //为了能够处理不同类型的effect走不同的执行流程
        const effectRunner = effectRunnerMap[effect.type];
        effectRunner(env,effect.payload,next);
     }else{
        next();
     }
   }
   next();
}