
import React, { useCallback, useState } from 'react'
import './index.css'
interface CountProps {

}
const Count: React.FC<CountProps> = (props) => {
  const [number, setNumber] = useState<number>(0)
  const edit = useCallback((type) => {
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
  }, [number])

  return (
    <div className='count-wrap'>
      <button onClick={() => { edit('add') }}>+</button>
      <div>{number}</div>
      <button onClick={() => { edit('del') }}>-</button>
    </div>
  )
}
export default Count