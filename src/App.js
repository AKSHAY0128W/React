import React, { useState, useEffect } from 'react';
import './App.css';
import UserTotal from './Components/UserTotal';
function App(props) {


  const [count, setCount] = useState(0);

  const [total, setTotal] = useState(100);


  useEffect(() => {
    // console.log("After render Count !!");

  }, [count])

  useEffect(() => {
    // console.log("After render Total !!");

  }, [total])


  return (
    <>
      <div className="App">
        <h1>useEffect Condition Hook</h1>

        <UserTotal count={count} total={total} />

        {/* <h2>Count: {count}</h2> */}

        <button onClick={() => setCount(count + 1)} >Update Count</button>

        {/* <h2>Total: {total}</h2> */}

        <button onClick={() => setTotal(total + 1)} >Update Total</button>
      </div>
    </>
  );
}

export default App;