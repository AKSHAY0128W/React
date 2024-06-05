import React, { useEffect, useState, useDeferredValue } from 'react'
import './App.css'
import DeleteMethod from './DeleteMethod'
function App() {
  return (
    <div className='App'>
      <h1>Fetch Api Delete Method in React.</h1>

      {/* Example 1 */}
      <DeleteMethod />
    </div >
  )
}

export default App  