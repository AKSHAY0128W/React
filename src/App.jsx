import React from 'react'
import './App.css'
import { useState } from 'react'
import ChildComp from './ChildComp'
function App() {

  const [count, setCount] = useState(0)

  console.log("Parent Component")
  return (
    <div className='App'>
      <h1>useMemo hook in React.</h1>
      <ChildComp />

      <h2>Count:{count}</h2>
      <button onClick={() => setCount(count + 1)}>Count Plus</button>
    </div>
  )
}

export default App
