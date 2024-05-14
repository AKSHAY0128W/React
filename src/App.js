import './App.css';
import User from './user';
import UserJsx from './user.jsx';


function App() {

  function common() {
    return <p>Common component</p>
  }

  return (
    <>
      <div className="App">
        <h1>Hello World!</h1>
      </div >
      <User />
      {common()}  
      <UserJsx />

    </>
  );
}

export default App;