import React, { act, useReducer } from 'react'


// reducer function

const reducer = (state, action) => {
   console.log(state, action)

   switch (action.type) {
      case "INCREMENT":
         return { count: state.count + 1 }

      case "DECREMENT":
         return { count: state.count - 1 }

      default:
         return state;
   }
}


function Counter() {

   // Example 2

   const initialState = { count: 0 };

   const [state, dispatch] = useReducer(reducer, initialState);



   return (
      <>

         <br /><br /><br />
         <h1>Using useReducer hook.</h1>
         <p>Count : {state.count}</p>


         <button onClick={() => { dispatch({ type: "INCREMENT" }) }}>INCREMENT</button>
         <br />
         <br />
         <button onClick={() => { dispatch({ type: "DECREMENT" }) }}>DECREMENT</button>


      </>
   )
}

export default Counter
