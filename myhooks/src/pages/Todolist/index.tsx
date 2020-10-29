import React from 'react'
import { createModel } from 'hox'

/** 
 * hox  初体验
*/

type item = {
  readonly id: number,
  title: string,
  content: string
}
const HoxTodoList: React.FC<{
  list: Array<item>
}> = ({ list }) => {
  return <ul>
    {(list ?? []).map((item) => <li key={item.id} title={item.title}>
      {item.content}
    </li>)}
  </ul>
}
export default HoxTodoList