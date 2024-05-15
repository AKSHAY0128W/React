import React from 'react'

function FuncProps(props) {

   // destructuring

   const { handleClick, increment, count } = props;


   console.log(props);
   return (
      <div>
         <h1>Users Component</h1>

         <h1>{count}</h1>
         <button onClickCapture={increment}>Click Me</button>
      </div>
   )
}

export default FuncProps
