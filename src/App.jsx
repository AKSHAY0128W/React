import React, { useEffect, useState, useDeferredValue } from 'react'
import './App.css'
import PostMethod from './PostMethod'
function App() {
  return (
    <div className='App'>
      <h1>Fetch Api Post Method in React.</h1>

      {/* Example 1 */}
      <PostMethod />
    </div >
  )
}

export default App  