import './App.css';
import User from './user';

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
    </>
  );
}

export default App;