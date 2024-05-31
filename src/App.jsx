import React, { useEffect, useState, useDeferredValue } from 'react'
import './App.css'
import CounterComp from './CounterComp'
function App() {
  return (
    <div className='App'>
      <h1>custom hook in React.</h1>

      <CounterComp />
    </div >
  )
}

export default App  