import React from 'react'
import Child2 from './Child2'

function Child1() {
   return (
      <>
         <h2>Child 1 Component</h2>

         {/* Example 1 */}

         <Child2 />
      </>
   )
}

export default Child1