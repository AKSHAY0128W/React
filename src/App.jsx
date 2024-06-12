import React, { useEffect, useState, useDeferredValue } from 'react'
import './App.css'
import GetDataAPI from './GetDataAPI.jsx'

function App() {
  return (
    <div className='App'>
      <h1>Axios Library</h1>

      {/* Example 1 */}
      <GetDataAPI />
    </div >
  )
}

export default App  