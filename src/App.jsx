import React, { useState } from 'react'
import './App.css'
function App() {

  // Example 1

  const [inputValue, setInputValue] = useState("")

  const handleChange = (e) => {
    setInputValue(e.target.value)
    console.log(inputValue);
  }

  return (
    <div className='App'>

      <h1>Controlled Component in React.</h1>

      <input type="text" value={inputValue} onChange={handleChange} />

      <p>Value:{inputValue}</p>
    </div>
  )
}

export default App
