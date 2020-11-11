import React from 'react';
import ReactDOM from 'react-dom';
let hookStates = [];//保存状态的数组 [0,0]
let hookIndex = 0;//索引
function useState(initialState){
   hookStates[hookIndex] = hookStates[hookIndex]||initialState;
   let currentIndex = hookIndex;
   function setState(newState){
     if(typeof newState ==='function'){
      newState=newState(hookStates[hookIndex]);
     }
     hookStates[currentIndex]=newState;
     render();
   }
   return [hookStates[hookIndex++],setState];
}
function Counter(){
  let [number1,setNumber1] = useState(0);//hookStates[0]=0 0
  let [number2,setNumber2] = useState(0);//hookStates[1]=0 1
  return (
    <div>
      <p>{number1}</p>
      <button onClick={()=>setNumber1(number1+1)}>+</button>
      <hr/>
      <p>{number2}</p>
      <button onClick={()=>setNumber2(number2+1)}>+</button>
    </div>
  )
}
function render(){
  hookIndex = 0;
  ReactDOM.render(
    <Counter/>,
    document.getElementById('root')
  );
}
render();