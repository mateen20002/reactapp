import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Welcome to Networkershome</h1>
        <p>
          Join us and be part of the community.
        </p>
        <a
          className="App-link"
          href="https://www.networkershome.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Join Networkers Home
        </a>
        <a
          className="App-link"
          href="https://reactjs.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> {/* Added a "Learn React" link */}
      </header>
    </div>
  );
}

export default App;
