import React from 'react'

function ChildrenCompA({ sharedState, handleChange }) {

   // Example 1

   const handleInputChange = (event) => {
      const newValue = event.target.value;
      handleChange(newValue);
   }

   return (
      <>
         <input type='text' value={sharedState} onChange={handleInputChange}></input>
      </>
   )
}

export default ChildrenCompA
