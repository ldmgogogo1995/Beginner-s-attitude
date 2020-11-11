
export function stdChannel(){
    let currentTakers = [];
    /**
     * @param {*} cb 回调函数
     * @param {*} matcher 匹配器
     */
    function take(taker,matcher){//订阅
        taker['MATCH']=matcher;
        taker.cancel = ()=>{
            currentTakers=currentTakers.filter(item=>item!==taker);
        }
        currentTakers.push(taker);
    }
    function put(input){//发布
        for(let i=0;i<currentTakers.length;i++){
            let taker = currentTakers[i];
            let matcher = taker['MATCH'];
            if(matcher(input)){
                taker.cancel();
                taker(input);
            }
        }
    }
    return {take,put};
}
/* let channel = stdChannel();
function next(input){
    console.log('我要继续执行next了',input);
}
function matcher(input){
    return  input.type === 'ASYNC_ADD';
}
channel.take(next,matcher);
channel.put({type:'ASYNC_ADD'});
channel.put({type:'ASYNC_ADD'}); */
