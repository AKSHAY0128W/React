import React, { Component } from 'react'

class ComponeneDidUpdate extends Component {

   // This method is called before the component is rendered in the DOM.
   constructor() {
      super();
      this.state = {
         name: "Bhaskar Gupta",
         count: 0
      }
      // console.log("Constructor Called")
   }
 

   componentDidUpdate(prevProps, prevState) {
      console.log(prevState.count, this.state.count)
      // if ((this.state.count, prevState.count)) {
      //    alert("Working")
      //    console.log("ComponentDidUpdate Called", prevState.count, this.state.count)
      // }

      if (this.state.count < 10) {
         this.setState({ count: this.state.count + 1 });
      }

   }

   render() {

      // This method is called when the component is rendered in the DOM.
      // console.log("Render!!")



      return (
         <>
            <h1>Lifecycle ComponentDidUpdate Method</h1>
            {/* <button onClick={() => this.setState({ name: "Akshay Panchal" })}>Update State</button > */}


            <h1>Count:{this.state.count}</h1>
            <button onClick={() => this.setState({ count: this.state.count + 1 })}> Update Count</button >
         </>
      )
   }
}

export default ComponeneDidUpdate