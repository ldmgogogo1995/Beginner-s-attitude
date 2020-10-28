
import React, { useCallback } from 'react'
import { atom, useRecoilState, useRecoilValue, selector } from 'recoil'

import './index.css'
const numberState = atom({
  key: 'numnberState',
  default: 0
})
interface CountProps {

}
const Count: React.FC<CountProps> = (props) => {
  // const [number, setNumber] = useState<number>(0)

  const [number, setNumber] = useRecoilState(numberState)
  // const charNumberState = selector({
  //   key: 'charNumberState',
  //   get: ({ get }) => {
  //     const numberValue = get(numberState)
  //     console.log(numberValue, 'numberValue');

  //     return numberValue
  //   }
  // })
  // const count = useRecoilValue(charNumberState)

  // console.log(count, 'count');

  const edit = (type: any) => {
    switch (type) {
      case 'add':
        setNumber(number + 1)
        break;
      case 'del':
        setNumber(number - 1)

        break;
      default:
        break;
    }
  }

  return (
    <div className='count-wrap'>
      <button onClick={() => { edit('add') }}>+</button>
      <div>{number??0}</div>
      <button onClick={() => { edit('del') }}>-</button>
    </div>
  )
}
export default Count