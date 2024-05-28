import React, { useState, createContext } from 'react'
import './App.css'
import Child1 from './Child1'

// Create, Provider, Consumer

const MyContext = createContext();
const MyContextNew = createContext();


function App() {

  const sharedData = "Hello From Parent!!";
  const newSharedData = "Multiple Entry!!";


  return (
    <div className='App'>
      <MyContext.Provider value={sharedData}>
        <MyContextNew.Provider value={newSharedData}>
          <h1>Context API in React.</h1>
          <Child1 />
        </MyContextNew.Provider>
      </MyContext.Provider>
    </div>
  )
}

export default App
export { MyContext, MyContextNew }
