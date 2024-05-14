import './App.css';
import User from './user';
import UserJsx from './user.jsx';
import Event from './Event';
import State from './state';
import Counter from './Counter.jsx';
import StateClass from './stateClass.jsx';
function App() {

  // function common() {
  //   return <p>Common component</p>
  // }

  return (
    <>
      <div className="App">
        {/* <h1>Hello World!</h1> */}
      </div >
      {/* <User /> */}
      {/* <UserJsx /> */}
      {/* <Event /> */}
      {/* <State /> */}
      { /* <Counter /> */}

      <StateClass />
    </>
  );
}

export default App;