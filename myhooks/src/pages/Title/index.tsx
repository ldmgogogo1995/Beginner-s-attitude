import React, { ChangeEvent,  } from 'react'
import {useState, useCallback, useMemo } from '../../hooks'
interface Props {
    title: 'string'
}
/** 
 * 记录一个知识点 当调用e ChangeEvent 对象时 可以写  e.target as HTMLInputElement
 * 
*/
function Title(): React.ReactElement {
    const [title, setTitle] = useState('title')
    const [count, setCount] = useState(0)
    // const [name, setName] = useState('title')
    const changeTitle = useCallback((e: ChangeEvent) => {
        console.log(title, 'title');

        setTitle((e.target as HTMLInputElement).value)
    }, [])
    // const memoCount = useMemo(() => count + 1, [count])
    return (
        <div>
            <input type="text" onChange={changeTitle} />
            {title}
            <button onClick={() => setCount(count => count + 1)}>{count}</button>
        </div>
    )
}
export default Title