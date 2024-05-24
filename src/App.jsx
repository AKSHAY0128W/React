import React, { useRef } from 'react'
import './App.css'
import ChildComp from './ChildComp'
function App() {

  // Example 1

  const inputRef = useRef(null);

  const updateInput = () => {
    inputRef.current.value = "1000";
    inputRef.current.focus()
    // inputRef.current.style.color = "white";
    // inputRef.current.style.background = "blue";
  }


  // Example 2


  const childRef = useRef();


  const handleButtonClick = () => {
    if (childRef.current) {
      childRef.current.handleButtonClick()
    }
  }


  return (
    <div className='App'>
      <h1>forwardRef in React.</h1>

      {/* Example 1 */}

      {/* <ChildComp ref={inputRef} />

      <button onClick={updateInput}>Update Button</button> */}


      {/* Example 2 */}
      <ChildComp ref={childRef} />

      <button onClick={handleButtonClick}>Click Child Button From Parent</button>
    </div>
  )
}

export default App
