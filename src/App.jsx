import React, { useEffect, useState, useTransition } from 'react'
import './App.css'


function App() {

  // Example 1
  const [isPending, startTransition] = useTransition()
  const [count, setCount] = useState(0) // Use useState here, not useEffect


  // Example 2

  const [input, setInput] = useState()
  const [dataList, setDataList] = useState([])


  const dataSize = 10000;

  // Function 
  const handleChange = (e) => {

    setInput(e.target.value);
    startTransition(() => {
      const a = [];
      for (let i = 0; i < dataSize; i++) {
        a.push(e.target.value)
      }
      setDataList(a);
    })
  };



  return (
    <div className='App'>
      <h1>useTransition hook in React.</h1>

      {/* Example 2 */}

      <input type="text" value={input} onChange={handleChange} />
      {
        isPending ?
          <div className="spinner-border mt-5 text-primary" role="status">
            <span className="sr-only"></span>
          </div> : // Display a spinner when isPending is true
          dataList.map((item, index) => {
            return <div key={index}>{item}</div>
          })
      }


    </div >
  )
}

export default App  