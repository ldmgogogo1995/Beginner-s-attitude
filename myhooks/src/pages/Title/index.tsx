import React, { ChangeEvent } from 'react'
import {
    useState,
    useMemo,
    useCallback
} from '../../hooks'
/** 
 * 记录一个知识点 当调用e ChangeEvent 对象时 可以写  e.target as HTMLInputElement
 * 
*/
function Title(): React.ReactElement {
    const [title, setTitle] = useState<string>('title')
    const [count, setCount] = useState<number>(0)
    const changeTitle = useCallback((e: ChangeEvent) => {
        console.log(title, (e.target as HTMLInputElement).value, 'title');
        setTitle((e.target as HTMLInputElement).value)
    }, [])
    // const memoCount = useMemo(() => count + 1, [count])
    return (
        <div style={{ margin: '200px auto', width: 500 }}>
            <input type="text" onChange={changeTitle} /><span>{title}</span>
            <button onClick={() => setCount(Math.random())}>{count}</button>
        </div>
    )
}
export default Title