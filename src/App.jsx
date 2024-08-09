import React, { useRef } from 'react'
import './App.css'
function App() {

  // Example 1
  const inputRef = useRef(null)


  // Example 2
  const handleButtonClick = () => {
    const value = inputRef.current.value
    alert(`Input Value: ${value}`)
    console.log(value);
  }

  return (
    <div className='App'>
      <h1>useRef Hook in React.</h1>

      {/* Example 1 */}

      <input ref={inputRef} type='text' />
      <button onClick={handleButtonClick}>Get Input Value</button>

    </div>
  )
}

export default App
