import React, { Component } from 'react'

class RenderMethod extends Component {

   constructor() {
      super();
      this.state = {
         email: 'abc@gmail.com'
      }
   }

   render() {
      // console.log("Render Method", this.props);

      console.log("Render Method", this.state.email);

      return (
         <div>
            {/* <h2>Render Method.{this.props.name}</h2> */}
            <h2>Render Method. {this.state.email}</h2>

            <button onClick={() => this.setState({ email: "code@gmail.com" })}>Update State</button>
         </div>
      )
   }
}n

export default RenderMethod
