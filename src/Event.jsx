import React from 'react'


function Event() {


   let data = "Hello Akshay";
   const demo = () => {
      data = "Bhaskar"
      alert(data);
   }
   return (
      <div>
         <h1>{data}</h1>
         <button onClick={demo}>Click</button>
         {/* <button onClick={() => alert("Hello Everyone")}>Click</button> */}
         {/* <button onClick={() => demo()}>Click</button> */}
      </div >
   )
}

export default Event
