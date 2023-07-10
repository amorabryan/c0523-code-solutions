import { useState } from 'react';

export default function SearchableList({ quotes }) {
  const [filterText, setFilterText] = useState('');

  return (
    <div className="fate">
      <SearchBar filterText={filterText} onFilterChange={setFilterText} />
      <QuoteList quotes={quotes} filterText={filterText} />
    </div>
  );
}

function SearchBar({ filterText, onFilterChange }) {
  return (
    <form>
      <input
        type="text"
        value={filterText}
        onChange={(e) => onFilterChange(e.target.value)}
        placeholder="Search..."
      />
    </form>
  );
}

function QuoteList({ quotes, filterText }) {
  const filteredQuotes = quotes.filter((quote) =>
    quote.quote.toLowerCase().includes(filterText.toLowerCase())
  );

  let listQuotes;
  if (filteredQuotes.length === 0) {
    listQuotes = <p>No items match the filter.</p>;
  } else {
    listQuotes = filteredQuotes.map((quote) => (
      <li key={quote.id}>{quote.quote}</li>
    ));
  }

  return <ul className="mustafar">{listQuotes}</ul>;
}
