import React, { useState, useSyncExternalStore } from 'react'
import './App.css'


function App() {

  // Example 1

  const width = useSyncExternalStore((listener) => {
    window.addEventListener("resize", listener);
    return () => {
      window.removeEventListener("resize", listener)
    }
  }, () => window.innerWidth)


  return (
    <div className='App'>

      <h1>useSyncExternalStore hook in React.</h1>
      {/* Example 1 */}
      <p>Window Size : {width}</p>
    </div >
  )
}

export default App
