import React, { useState, useRef, useLayoutEffect } from 'react'
import './App.css'

function App() {

  const [width, setWidth] = useState(0)


  const elementRef = useRef(null)

  useLayoutEffect(() => {
    if (elementRef.current) {
      setWidth(elementRef.current.getBoundingClientRect().width)
    }
  }, [])

  return (
    <div className='App'>

      <h1>useLayoutEffect hook in React.</h1>
      <div>
        <h2>Width Measurement Example</h2>
        <div ref={elementRef} style={{ width: "300px", background: "lightblue", margin: "auto", textAlign: "center" }}>Element Whose Width is Measured.</div>
      </div>
      <p>Width:{width}px</p>
    </div >
  )
}

export default App
