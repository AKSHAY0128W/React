import React, { memo } from 'react'

function ChildComp(props) {

   console.log("Child Rendered!!");
   return (
      <>
         <button onClick={props.increment}>Increment2</button>
      </>
   )
}


export default memo(ChildComp);