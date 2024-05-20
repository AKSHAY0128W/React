import React, { Component } from 'react'

class ComponentDidMount extends Component {

   // This method is called before the component is rendered in the DOM.
   constructor() {
      super();
      this.state = {
         count: 0
      }
      console.log("Constructor Called")
   }


   // This method is called after the component is rendered in the DOM. and only run once.
   componentDidMount() {
      console.log("ComponentDidMount Called")

   }

   // This method is called when the component is updated in the DOM.
   incrementCount = () => {
      this.setState(prevState => ({
         count: prevState.count + 1
      }))
   };

   render() {

      // This method is called when the component is rendered in the DOM.
      console.log("Render!!")

      return (
         <>
            <h1>Lifecycle ComponentDidMount Method</h1>
            <h2>Count:{this.state.count}</h2>
            <button onClick={this.incrementCount}>Update Count</button >
         </>
      )
   }
}

export default ComponentDidMount