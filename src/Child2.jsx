import React, { useContext } from 'react'
import { MyContext } from './App'



function Child2() {

   const sharedData = useContext(MyContext);
   console.log(sharedData)

   return (
      <>
         <h2>Child 2 Component</h2>
         <p>{sharedData}</p>
      </>
   )
}

export default Child2