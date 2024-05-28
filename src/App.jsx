import React, { useState } from 'react'
import './App.css'
import Counter from './Counter'

function App() {

  // Example 1

  const [count, setCount] = useState(0)
  return (
    <div className='App'>
      <h1>useReducer hook in React.</h1>

      {/* Example 1 */}

      <p>Count : {count}</p>

      <button onClick={() => { setCount(count + 1) }}>INCREMENT</button>
      <br />
      <br />
      <button onClick={() => { setCount(count - 1) }}>DECREMENT</button>


      {/* Example 2 */}

      <Counter />




    </div>
  )
}

export default App
