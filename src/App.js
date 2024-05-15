import './App.css';
import User from './user';
import UserJsx from './user.jsx';
import Event from './Event';
import State from './state';
import Counter from './Counter.jsx';
import UserCard from './UserCard.jsx';
import PropsClass from './propsClass.jsx';
import UserList from './UserList';
import InputBox from './inputBox.jsx';
import React, { useState } from 'react';
import Toggle from './Toggle.jsx';
function App() {

  // function common() {
  //   return <p>Common component</p>
  // }

  {/*
  const userData = [
    {
      name: 'bhaskar gupta',
      age: 25,
      email: 'abc@gmail.com'
    },
    {
      name: 'john doe',
      age: 30,
      email: 'afs@gmail.com'
    },
    {
      name: 'devil doe',
      age: 35,
      email: 'adsjansj@gmail.com'
    }
  ]

  */}

  const [name, setName] = React.useState("Bhaskar Gupta");
  return (
    <>
      <div className="App">
        {/* <h1>Hello World!</h1> */}
      </div >
      {/* <User /> */}
      {/* <UserJsx /> */}
      {/* <Event /> */}
      {/* <State /> */}
      {/* <Counter /> */}
      {/* <h1>Props In React.</h1> */}
      {/* <hr /> */}

      {/* <UserCard name={name} />

      <button onClick={() => setName("Code4Education")}>Update Props</button>
 */}

      {/* {
        userData.map((user, index) => (
          <UserCard
            key={index}
            name={user.name}
            age={user.age}
            email={user.email}
          />
        ))
      } */}

      {/* <PropsClass /> */}

      {/* <InputBox /> */}

      <Toggle />




    </>
  );
}

export default App;