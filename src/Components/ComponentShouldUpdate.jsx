import React, { Component } from 'react'

class ShouldComponentUpdate extends Component {

   // This method is called before the component is rendered in the DOM.
   constructor() {
      super();
      this.state = {
         count: 0
      }
   }


   shouldComponentUpdate(nextProps, nextState) {
      console.log("ShouldComponentUpdate", this.state.count)
      // console.log("ShouldComponentUpdate", nextProps)
      // console.log("ShouldComponentUpdate", nextState)

      if (nextState.count > 5) {
         return true;
      }
      return false;

   }


   render() {

      return (
         <>
            <h1>Lifecycle ComponentShouldUpdate Method</h1>

            <h1>Count:{this.state.count}</h1>
            <button onClick={() => this.setState({ count: this.state.count + 1 })}>Update State</button>
         </>
      )
   }
}

export default ShouldComponentUpdate