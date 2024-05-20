import React, { useState } from 'react';
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
import Toggle from './Toggle.jsx';
import FormHandling from './FormHandling.jsx';
import ConditionalRendering from './conditionalRendering.jsx';
import FormValidation from './formValidation.jsx';
import FuncProps from './FuncProps.jsx';
import Constructor from './Constructor.jsx';
import RenderMethod from './RenderMethod.jsx';
import ComponeneDidMount from './ComponeneDidMount.jsx';
import ComponentDidUpdate from './ComponentDidUpdate.jsx';
import ShouldComponentUpdate from './ComponentShouldUpdate.jsx';
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
  // const [name, setName] = React.useState("Bhaskar Gupta");

  // pass function as a props

  // const handleButtonClick = () => {
  //   console.log("Button Clicked");
  // }

  // const [count, setCount] = useState(0);


  // const incrementCount = () => {
  //   setCount(count + 1);
  // }



  // props for learn Lifecycle Render Method in React.

  // const [name, setName] = useState("Bhaskar Gupta");

  return (
    <>
      {/* <div className="App"> */}
      {/* <h1>Hello World!</h1> */}
      {/* </div > */}
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

      {/* <Toggle /> */}

      {/* <FormHandling /> */}

      {/* <ConditionalRendering /> */}

      {/* <FormValidation /> */}

      {/* <div>
        <h1>Pass Funtions as a Props</h1>
      </div>
      <FuncProps handleClick={handleButtonClick} count={count} increment={incrementCount} /> */}


      {/* <Constructor /> */}

      {/* <h1>Lifecycle Render Method in React.</h1> */}
      {/* <RenderMethod name={name} /> */}
      {/* <RenderMethod /> */}

      {/* <button onClick={() => setName("Akshay Panchal")}>Update Name</button> */}



      {/* <ComponeneDidMount /> */}

      {/* <ComponentDidUpdate /> */}


      <ShouldComponentUpdate />



    </>
  );
}

export default App;