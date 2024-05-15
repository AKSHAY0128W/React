import React, { useState } from 'react'

function Toggle() {
   const [status, setStatus] = useState(true)

   return (
      <div>
         <h1>Show,Hide & Toggle</h1>
         {/* example 1 SHOW & HIDE */}
         <button onClick={() => setStatus(false)}>Hide</button>
         <button onClick={() => setStatus(true)}>Show</button>

         {/* example 2 TOOGLE */}

         <button onClick={() => setStatus(!status)}>Toggle</button>

         {/* example 1 TOGGLE WITH SHOW AND CHANGE  */}
         <button onClick={() => setStatus(!status)}>{status ? 'Hide' : 'Show'}</button>

         {
            status ? <div className='status'>Content</div> : null
         }
      </div >
   )
}

export default Toggle
