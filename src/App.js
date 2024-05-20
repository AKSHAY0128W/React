import React, { useState } from 'react';
import './App.css';
import User from './Components/user';
import UserJsx from './Components/user.jsx';
import Event from './Components/Event';
import State from './Components/state';
import Counter from './Components/Counter.jsx';
import UserCard from './Components/UserCard.jsx';
import PropsClass from './Components/propsClass.jsx';
import UserList from './Components/UserList';
import InputBox from './Components/inputBox.jsx';
import Toggle from './Components/Toggle.jsx';
import FormHandling from './Components/FormHandling.jsx';
import ConditionalRendering from './Components/conditionalRendering.jsx';
import FormValidation from './Components/formValidation.jsx';
import FuncProps from './Components/FuncProps.jsx';
import Constructor from './Components/Constructor.jsx';
import RenderMethod from './Components/RenderMethod.jsx';
import ComponentDidMount from './Components/ComponentDidMount.jsx';
import ComponentDidUpdate from './Components/ComponentDidUpdate.jsx';
import ShouldComponentUpdate from './Components/ComponentShouldUpdate.jsx';
import ComponentWIllUnmount from './Components/ComponentWIllUnmount.jsx';
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


      {/* <ShouldComponentUpdate /> */}


      <ComponentWIllUnmount />


    </>
  );
}

export default App;