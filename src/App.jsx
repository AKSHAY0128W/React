import React, { Component, createRef } from 'react'
import './App.css'

class App extends Component {

  constructor() {
    super()
    this.myInputRef = createRef();

  }

  // Example 1

  // componentDidMount() {
  //   this.myInputRef.current.value = "Bhaskar Gupta";
  //   console.log(this.myInputRef.current.value);
  // }

  // Example 2 

  handleClick = () => {
    this.myInputRef.current.focus()
    this.myInputRef.current.style.background = "green";
    this.myInputRef.current.style.color = "white";

    console.log(this.myInputRef.current.value);


  }




  render() {
    // console.log(this.myInputRef);
    return (
      <div className='App'>
        <h1>Ref in React.</h1>
        <input type="text" ref={this.myInputRef} />

        <button onClick={this.handleClick}>Focut input</button>
      </div>
    )
  }
}

export default App;