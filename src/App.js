import React, { Fragment } from 'react';
import './App.css';
function App() {
  return (

    // Example 1
    // <React.Fragment>
    //   <h1>Fragment In React.</h1>
    //   <h2>Fragment In React.</h2 >
    // </React.Fragment>


    // Example 2
    // <Fragment>
    //   <h1>Fragment In React.</h1>
    //   <h2>Fragment In React.</h2>
    // </Fragment>

    // Example 3
    <>
      <h1>Fragment In React.</h1>
      <h2>Fragment In React.</h2>
    </>

  );
}

export default App;