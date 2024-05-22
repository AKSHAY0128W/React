import React, { Component, Fragment, useState } from 'react';
import './App.css';
import CounterPureComponent from './CounterPureComponent';
class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    }
  }

  handleIncreament = () => {
    this.setState((prevState) => ({
      // count: prevState.count + 1
    }))
  }


  render() {
    console.log("Parent Render!!");
    return (
      <>
        <div className='App'>
          <h1>Pure Component In React.</h1>

          <CounterPureComponent count={this.state.count} onIncrement={this.handleIncreament} />
        </div>
      </>
    );
  }
}

export default App;