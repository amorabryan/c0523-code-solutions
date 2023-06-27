import logo from './logo.svg';
import './App.css';
import RegistrationFormUncontrolled from './RegistrationFormUncontrolled';
import RegistrationFormControlled from './RegistrationFormControlled';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Registration Form (Uncontrolled)</h1>
        <RegistrationFormUncontrolled />

        <h1>Registration Form (Controlled)</h1>
        <RegistrationFormControlled />
      </header>
    </div>
  );
}

export default App;
