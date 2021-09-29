import logo from './logo.svg';
import envChecker from './utils';
import './App.css';

function App() {
  const isProduction = envChecker.isProduction();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React!!!
        </a>
      </header>
      <p id={`${isProduction}_id`}>{isProduction ? 'production' : 'staging'}</p>
    </div>
  );
}

export default App;
