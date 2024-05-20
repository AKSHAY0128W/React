import React from 'react'

function FuncProps(props) {

   // destructuring

   const { handleClick, increment, count } = props;


   console.log(props);
   return (
      <div>
         <h1>Users Component</h1>

         <h1>Count:{count}</h1>
         <button onClickCapture={handleClick}>Click Me</button>
         <button onClickCapture={increment}>Count ++</button>
      </div>
   )
}

export default FuncProps
