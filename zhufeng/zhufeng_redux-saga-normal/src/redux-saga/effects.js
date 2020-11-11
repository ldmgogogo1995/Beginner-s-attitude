import * as effectTypes from './effectTypes';
const makeEffect = (type,payload)=>{
    return {type,payload}
}
export function take(pattern){//动作类型
    return makeEffect(effectTypes.TAKE,{pattern});//{type:'TAKE',payload:{pattern:'ASYNC_ADD'}}
}
export function put(action){//动作类型
    return makeEffect(effectTypes.PUT,{action});//{type:'PUT',payload:{action:{type:'ADD'}}}
}