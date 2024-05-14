import './App.css';
import hamburger from './hamburger.svg';

function App() {
  return (
    <div className="App">
      <div className="container">
        <nav>
          <div className="logo">
            <h1>Website</h1>
          </div>
          <ul id="menu">
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Contact</li>
            <li>Faqs</li>
          </ul>
          <img className="hamburger" id="hamburger" src={hamburger} alt="" />
        </nav>
      </div>
    </div>
  );
}

export default App;