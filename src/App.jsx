import React, { useState, useCallback } from 'react'
import './App.css'
import ChildComp from './ChildComp';


function App() {
  // Normal Example 
  const [count1, setCount1] = useState(0)

  console.log("Parent Rendered!!");


  // Example 2

  const [count2, setCount2] = useState(0)

  const incrementCount2 = useCallback(() => {
    setCount2((prevCount) => prevCount + 1)
    console.log("useCallback Hook")
  }, [])

  return (
    <div className='App'>
      <h1>useCallback hook in React.</h1>





      {/* Example 1 */}
      <p>Count1 : {count1}</p>

      <button onClick={() => setCount1(count1 + 1)}>Increment Count1</button>


      <br /><br /><br />

      {/* Example 2 */}

      <p>Count 2 : {count2}</p>
      <ChildComp increment={incrementCount2} />

    </div>
  )
}

export default App
