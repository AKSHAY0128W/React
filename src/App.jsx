import React, { createContext, useState } from 'react'
import './App.css'
import Child1 from './Child1'

// create,provide,useContext
const MyContext = createContext();

function App() {

  const sharedData = "Hello from Parent!!";

  return (
    <div className='App'>
      <MyContext.Provider value={sharedData}>

        <h1>useContext hook in React.</h1>

        {/* example 1 */}

        <Child1 />

      </MyContext.Provider>

    </div>
  )
}

export default App
export { MyContext };