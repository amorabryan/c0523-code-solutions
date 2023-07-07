import './App.css';
import MainPage from './MainPage';

const headings = ['Q & A', 'Sign In', 'Contact Us'];

function App() {
  return (
    <div>
      <MainPage headings={headings} />
    </div>
  );
}

export default App;
