import logo from './logo.svg';
import './App.css';
import SearchableList from './SearchableList';

const quotes = [
  {
    id: 1,
    quote:
      "You're with him. You've betrayed me! You brought him here to kill me!. - Anakin",
  },
  { id: 2, quote: 'Let her go, Anakin! - Obi-Wan' },
  { id: 3, quote: 'What have you and she been up to? - Anakin' },
  { id: 4, quote: 'Let her go! - Obi-Wan' },
  { id: 5, quote: 'You turned her against me - Anakin' },
  { id: 6, quote: 'You have done that yourself. - Obi-Wan' },
  { id: 7, quote: 'You will not take her from me. - Anakin' },
  {
    id: 8,
    quote:
      'Your anger and your lust for power have already done that. - Obi-Wan',
  },
  {
    id: 9,
    quote:
      'You have allowed this Dark Lord to twist your mind until now ... until now you have become the very thing you swore to destroy. - Obi-Wan',
  },
  {
    id: 10,
    quote:
      "Don't lecture me, Obi-Wan. I see through the lies of the Jedi. I do not fear the dark side as you do. I have brought peace, justice, freedom, and security to my new Empire. - Anakin",
  },
  { id: 11, quote: 'Your new Empire? - Obi-Wan' },
  { id: 12, quote: "Don't make me kill you. - Anakin" },
  {
    id: 13,
    quote:
      'Anakin, my allegiance is to the Republic ... to democracy. - Obi-Wan',
  },
  { id: 14, quote: "If you're not with me, you're my enemy. - Anakin" },
  {
    id: 15,
    quote:
      'Only a Sith Lord deals in absolutes. I will do what I must. - Obi-Wan',
  },
  { id: 16, quote: 'You will try. - Anakin' },
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <SearchableList quotes={quotes} />
      </header>
    </div>
  );
}

export default App;
