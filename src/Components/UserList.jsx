import React, { Component } from 'react'

export class UserList extends Component {
   render() {
      console.log(this.props)


      // Destucturing
      const { name, email } = this.props
      return (
         <div>
            <h1>User List</h1>
            <hr />
            {/* <p>{this.props.name}</p>
            <p>{this.props.email}</p> */}
            <p>{name}</p>
            <p>{email}</p>
         </div>
      )
   }
}

export default UserList
