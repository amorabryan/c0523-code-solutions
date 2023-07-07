import logo from './logo.svg';
import './App.css';
import ToggleSwitch from './ToggleSwitch';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ToggleSwitch />
      </header>
    </div>
  );
}

export default App;
