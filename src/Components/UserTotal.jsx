import React, { useState, useEffect } from 'react';
function UserTotal(props) {

   let { count, total } = props;

   useEffect(() => {
      console.log("Called With Props");
   })


   useEffect(() => {
      console.log("Count is", count);
   }, [count, total])

   return (
      <>
         <div className="App">

            <h2>Count: {count}</h2>
            <h2>Total: {total}</h2>
         </div>
      </>
   );
}

export default UserTotal;