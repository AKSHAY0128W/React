import React, { Component } from 'react'
import Unmount from './Unmount'

export default class ComponentWIllUnmount extends Component {

   constructor() {
      super();

      this.state = {
         show: true
      }
   }

   componentDidMount() {
      this.interval = setInterval(() => {
         console.log("Interval")
      }, 1000)
   }

   componentWillUnmount() {
      clearInterval(this.interval)
      console.log("Component Will Unmount")
   }
   render() {
      console.log("Clicked", this.state.show)
      return (
         <div>
            <h1>LifeCycle Method</h1>

            {
               this.state.show ? <Unmount /> : <h2>Removed</h2>
            }
            <button onClick={() => this.setState({ show: !this.state.show })}>Removed Component</button>
         </div >
      )
   }
}
