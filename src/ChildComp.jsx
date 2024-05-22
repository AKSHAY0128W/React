import React, { memo } from 'react'

function ChildComp() {
   console.log("Children Component");
   return (
      <>
         <h3>Children Component</h3>
      </>
   )
}

export default memo(ChildComp)


