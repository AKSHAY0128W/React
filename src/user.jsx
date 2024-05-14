import React from 'react';

export default function UserJsx() {
   return (
      <>
         <h1>Hello User From User.jsx</h1>
         <p>this is p </p>

         {/* {2 * 2} */}
      </>
   )

   // return React.createElement("h1", null, "Hello JSX", React.createElement("p", null, "child  element of h1"));
}