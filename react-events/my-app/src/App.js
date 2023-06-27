import logo from './logo.svg';
import './App.css';
import CustomButton from './CustomButton';

function App() {
  function handleCustomClick(text) {
    window.alert(`Clicked button with text: ${text}`);
  }

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
          <CustomButton
            onCustomClick={handleCustomClick}
            color="red"
            text="Fancy"
          />
          <CustomButton
            onCustomClick={handleCustomClick}
            color="green"
            text="Elegant"
          />
          <CustomButton
            onCustomClick={handleCustomClick}
            color="blue"
            text="Solemn"
          />
        </a>
      </header>
    </div>
  );
}

export default App;
