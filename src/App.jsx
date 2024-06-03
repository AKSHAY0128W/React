import React, { useEffect, useState, useDeferredValue } from 'react'
import './App.css'
import CounterComp from './CounterComp'
import GetMethod from './GetMethod'
function App() {
  return (
    <div className='App'>
      <h1>Fetch Api GET Method in React.</h1>

      <GetMethod />
    </div >
  )
}

export default App  