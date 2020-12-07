/** 
 * 搞着玩封装一个运动函数
 * @param id:string 传入需要控制的dom元素
*/
const action = (id) => {
  let timer;
  let x, y = 10
  const dom = document.getElementById(id)
  console.log(dom.style)
  timer = setInterval(() => {
    dom.style.left = dom.offsetLeft + x + 'px';
    console.log(dom.style.left,'????')
  }, 500)
  
}