import React, { useRef } from 'react'
import './App.css'
function App() {


  // Example 1

  const inputRef = useRef(null)
  const inputRef2 = useRef(null)

  const submitForm = (e) => {
    e.preventDefault();
    console.log("First Input Value:", inputRef.current.value);
    console.log("Second Input Value:", inputRef2.current.value);

    let input3 = document.getElementById("input").value;
    console.log("Third Input Value:", input3);

  }



  return (
    <div className='App'>

      <h1>UnControlled Component in React.</h1>
      <form action="" onSubmit={submitForm}>
        <input type="text" ref={inputRef} />
        <input type="text" ref={inputRef2} />
        <input type="text" id='input' />
        <button>Submit</button>
      </form>

    </div>
  )
}

export default App
