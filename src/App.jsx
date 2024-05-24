import React, { useState } from 'react'
import './App.css'
function App() {
  // Example 1


  // HOC


  const withCounter = (WrappedComponent) => {
    return function WithCounter(props) {
      const [count, setCount] = useState(0)
      const increment = () => {
        setCount(count + 1)
      }
      return (
        <WrappedComponent {...props} count={count} increment={increment} />
      )
    }
  }



  // Functional

  const Counter = ({ count, increment }) => {

    return (
      <div>
        <p>Count:{count}</p>
        <button onClick={increment}>Increment</button>
      </div>
    )
  }



  // Wrap Counter Componetn with withCounter HOC

  const CounterWithEnhanceMent = withCounter(Counter);

  return (
    <div className='App'>

      <h1>Higher Order Component in React.</h1>

      {/* Example 1 */}

      {/* <h1>Count:{count}</h1>

      <button onClick={() => setCount(count + 14)}>Count ++</button> */}



      {/* Example 2 */}

      <CounterWithEnhanceMent />
    </div>
  )
}

export default App
