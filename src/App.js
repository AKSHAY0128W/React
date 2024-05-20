import React from 'react';
import './App.css';

// Example 2
import './styles.css'

// Example 4
import Style from './style.module.css'

// Example 5

import "./style.scss"

function App() {


  // Example 3

  const headline = {
    backgroundColor: "blue",
    color: "$333",
    padding: "10px"
  }

  return (
    <>
      <div className="App">
        <h1>Styles Type in React.</h1>

        {/* Example 1 Inline Css */}

        <h1 style={{ color: "red", backgroundColor: "green", border: "20px solid black" }}>Inline Method</h1>

        {/* Example 2 Normal Css */}
        <h1 className='primary'>Normal Method</h1>

        {/* Example 3 CSS in JS */}
        <h1 style={headline}>CSS in JS</h1>

        {/* Example 4 CSS in Module */}
        <h1 className={Style.title}>Css In Module</h1>

        {/* Example 5 CSS in Sass */}
        <h1 className="primary-sass">sass & <span>scss</span> In Module</h1>


      </div>
    </>
  );
}

export default App;