import React, { useContext } from 'react'
import { MyContext, MyContextNew } from './App'


function Child2() {

   // const sharedData = useContext(MyContext);
   // console.log(sharedData)

   return (
      <>
         <h2>Child 2 Component</h2>

         <MyContext.Consumer>
            {
               (sharedData) => {
                  return (
                     <MyContextNew.Consumer>
                        {
                           (newSharedData) => {
                              return <p>{sharedData} = {newSharedData}</p>
                           }
                        }
                     </MyContextNew.Consumer>
                  )

               }
            }
         </MyContext.Consumer >

      </>
   )
}

export default Child2