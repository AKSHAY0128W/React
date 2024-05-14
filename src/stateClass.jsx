import react, { Component } from 'react';


class StateClass extends Component {

   constructor() {
      super();
      this.state = {
         // data: "Hello Akshay!"
         data: 1
      }
   }

   demo() {
      this.setState({
         // data: "Rahul"
         data : this.state.data + 1
      });
   }

   render() {
      console.log(this.state.data)
      return (
         <div>
            <h1>Class Component</h1>
            <h3>{this.state.data}</h3>
            <button onClick={() => this.demo()}>Click Me</button>
         </div>
      )
   }
}


export default StateClass;