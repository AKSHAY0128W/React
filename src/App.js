import React, { Fragment, useState } from 'react';
import './App.css';
import ChildrenCompA from './ChildrenCompA';
import ChildrenCompB from './ChildrenCompB';
function App() {

  // Example 1
  const [sharedState, setSharedState] = useState("")

  const handleChange = (newValue) => {
    console.log(newValue);
    setSharedState(newValue)
  }

  // Example 2

  const parentAlert = (data) => {
    alert(data.name);
    console.log(data);
  }




  return (
    <>
      <div className='App'>
        <h1>Lifting State Up In React.</h1>

        <ChildrenCompA sharedState={sharedState} handleChange={handleChange} />

        <ChildrenCompB sharedState={sharedState} alert={parentAlert} />

      </div>
    </>

  );
}

export default App;