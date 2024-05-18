import React, { Component } from 'react'


class Constructor extends Component {
   constructor() {

      super();
      console.log("Constructor method")
   }
   render() {
      console.log("render method")
      return (
         <div>
            <h1>Constructor LifeCycle in React.</h1>
         </div>
      )
   }
}

export default Constructor
