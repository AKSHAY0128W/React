import React from 'react'
import useCounter from './useCounter'
function CounterComp() {

   const { count, increment, decrement } = useCounter();


   return (
      <>
         <p>Count : {count}</p>
         <button onClick={increment}>Increment</button>

         <br />
         <br />
         <button onClick={decrement}>Decrement</button>
      </>
   )
}

export default CounterComp