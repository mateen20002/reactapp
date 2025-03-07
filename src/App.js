import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to Networkershome.
        </p>
        <a
          className="App-link"
          href="https://www.networkershome.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Join Networkers Home
        </a>
      </header>
    </div>
  );
}

export default App;
