import React, { useState } from 'react'

function InputBox() {

   const [inputValue, setInputValue] = useState('')

   const handleChange = (event) => {
      console.log(event.target.value);
      setInputValue(event.target.value)

      setInputValueHide(false)
   }

   const [inputValueShow, setInputValueHide] = useState(false)


   return (
      <div>
         {/* get input box value */}

         <h1>Get Input Box Value</h1>

         <input type="text" onChange={handleChange} />


         <button onClick={() => setInputValueHide(true)}>Submit</button>

         <p>{inputValueShow ? inputValue : ''} </p>
      </div>
   )
}

export default InputBox
