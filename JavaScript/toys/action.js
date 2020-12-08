/** 
 * 搞着玩封装一个运动函数
 * @param ele:string 传入需要控制的dom元素
 * @param target:number
*/
let timer;
const action = (ele, target) => {
  clearInterval(ele.timer);
  let x = 5
  let y = 10
  const dom = document.querySelector(ele)
  ele.timer = setInterval(() => {
    if (dom.offsetLeft >= target) {
      return
    }
    dom.style.left = dom.offsetLeft + x + 'px';
  }, 17)
}