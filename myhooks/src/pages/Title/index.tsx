import React from 'react'
import { useState } from '../../hooks'
interface Props {
    title: 'string'
}
function Title(): React.ReactElement {
    const [title, setTitle] = useState('title')

    return (
        <div>
            <input type="text" onChange={e => setTitle(e.target.value)} />
            {title}
        </div>
    )
}
export default Title