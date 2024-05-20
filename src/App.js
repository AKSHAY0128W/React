import React, { useState, useEffect } from 'react';
import './App.css';
function App() {


  const [count, setCount] = useState(0);

  // Example 1
  useEffect(() => {
    console.log("useEffect is called");
    // alert("useEffect is called");
    console.log("Updating");
  }, [count])

  return (
    <>
      <div className="App">
        <h1>useEffect Hook</h1>

        <p>Count:{count}</p>

        <button onClick={() => setCount(count + 1)}>Click Me</button>

      </div>
    </>
  );
}

export default App;