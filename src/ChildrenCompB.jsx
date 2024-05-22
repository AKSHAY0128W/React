import React from 'react'

function ChildrenCompB({ sharedState, alert }) {

   const data = {
      name: "Aksahy",
      age: 12
   }

   return (
      <div>
         <h1>Shared State: {sharedState}</h1>
         <button onClick={() => alert(data)}>Click</button>
      </div>
   )
}

export default ChildrenCompB
