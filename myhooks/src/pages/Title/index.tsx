import React, { ChangeEvent } from 'react'
import { useState, useCallback } from '../../hooks'
interface Props {
    title: 'string'
}
/** 
 * 记录一个知识点 当调用e ChangeEvent 对象时 可以写  e.target as HTMLInputElement
 * 
*/
function Title(): React.ReactElement {
    const [title, setTitle] = useState('title')
    const changeTitle = useCallback((e: ChangeEvent) => {
        setTitle((e.target as HTMLInputElement).value)
    }, [])
    return (
        <div>
            <input type="text" onChange={changeTitle} />
            {title}
        </div>
    )
}
export default Title