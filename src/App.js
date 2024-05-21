import React from 'react';
import './App.css';
import ReuseableButtton from './ReuseableButtton';
import ReuseableList from './ReuseableList';
function App() {

  // Example 1

  const handleButton = () => {
    console.log("Clicked")
  }


  // Example 2
  const country = ["india", "uk", "USA", "JAPAN"]

  return (
    <>
      <div className="App">
        <h1>Reuseable Component In React.</h1>

        {/* Example 1 */}

        <ReuseableButtton text="Click" onClick={handleButton} />

        <ReuseableButtton text="Press" onClick={handleButton} />


        <ReuseableList items={country} />


      </div>
    </>
  );
}

export default App;