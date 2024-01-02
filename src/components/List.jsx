import { forwardRef } from "react"

const List = forwardRef((props, ref) => {
  return (
   <ul ref={ref}>
        <li>Work 1</li>
        <li>Work 2</li>
        <li>Work 3</li>
        <li>Work 4</li>
   </ul>
  )
})

export default List