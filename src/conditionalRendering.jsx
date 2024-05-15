import React from 'react'

function CondtionalRendering() {

   const isLoggedIn = false;


   const items = ['Apple', 'Banana', 'Cherry']


   const isAutenticate = true;
   return (
      <>
         <h1>Conditional Rendering In React.</h1>

         {/* Example  1 */}
         {isLoggedIn ? <h2>Welcome User</h2> : <h2>Welcome Guest</h2>}

         {/* Example  2 */}
         <div>
            {
               items.length > 0 ? (
                  <ul>
                     {
                        items.map((item, index) => {
                           return <li key={index}>{item}</li>
                        })
                     }
                  </ul>
               ) : (
                  <p>No items found</p>
               )}
         </div>

         {/* Example  3 */}


         <div>
            {
               isAutenticate && <button onClick={() => console.log("Logged Out")}>Logout</button>
            }
         </div>


      </>
   )
}

export default CondtionalRendering
