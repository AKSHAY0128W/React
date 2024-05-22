import React from 'react'
import { useState, useMemo } from 'react'
import './App.css'

function App() {

  const [number1, setNumber1] = useState(0)
  const [number2, setNumber2] = useState(0)
  const [count, setCount] = useState(0)


  // Example 1

  // const sum = () => {
  //   console.log("Calculate sum....!")

  //   return number1 + number2;
  // }

  // Example 2
  const sum = useMemo(
    () => {
      console.log("Calculate sum....!")

      return number1 + number2;
    }, [number1, number2]
  )

  return (
    <div className='App'>
      <h1>useMemo hook in React.</h1>

      {/* Example 1 */}
      <div>
        <input
          type="number"
          value={number1}
          onChange={(e) => setNumber1(Number(e.target.value))} />


        <input
          type="number"
          value={number2}
          onChange={(e) => setNumber2(Number(e.target.value))} />

        {/* <p>Sum :{sum()}</p> */}

        {/* Example 2 call function with useMemo */}
        <p>Sum :{sum}</p>





      </div>

      <p>Count : {count}</p>
      <button onClick={() => setCount(count + 1)}>Count ++</button>
    </div>
  )
}

export default App
