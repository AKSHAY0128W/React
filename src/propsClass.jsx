import React, { Component } from 'react'
import UserList from './UserList';
export class propsClass extends Component {

   constructor() {
      super();


      this.state = {
         name: 'Akshay Panchal',
         email: 'john@gmail.com'
      };
   }
   render() {
      return (

         <>
            <div className='App'>
               <h1>Props in Class Component</h1>
               <hr />
            </div>
            {/* <UserList name='Bhaskar Rekha' email="bhaskar@gmail.com" /> */}


            // Example 2
            <UserList name={this.state.name} email={this.state.email} />
            <button onClick={() => this.setState({ name: "Devid Putra", email: "davidputra@gmail.com" })}>Update Props</button>

         </>
      )
   }
}

export default propsClass
