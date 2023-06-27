import logo from './logo.svg';
import './App.css';
import ToggleButton from './ToggleButton';

function App() {
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
          rel="noopener noreferrer">
          <ToggleButton color="red" text="Btn 1" />
          <ToggleButton color="green" text="Btn 2" />
          <ToggleButton color="blue" text="Btn 3" />
        </a>
      </header>
    </div>
  );
}

export default App;
