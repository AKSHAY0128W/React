import React, { useEffect, useState, useDeferredValue } from 'react'
import './App.css'
import UpdateMethod from './UpdateMethod'
function App() {
  return (
    <div className='App'>
      <h1>Fetch Api Put Method in React.</h1>

      {/* Example 1 */}
      <UpdateMethod />
    </div >
  )
}

export default App  