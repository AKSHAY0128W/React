import React, { useState } from 'react';


function State() {

   let [data, setData] = useState("Akshay");


   const updateData = () => {
      setData("David");
      // alert(data);
   }

   console.log("RENDER.......");

   return (
      <div>
         <h1>{data}</h1>
         <button onClick={updateData}>Update Button</button>
      </div>
   )
}

export default State
