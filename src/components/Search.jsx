
import React, { useState } from 'react';
import './Search.css';

const Search = ({ books, onSearchResults }) => {
  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    const searchQuery = e.target.value.toLowerCase();
    setQuery(searchQuery);

    const filteredBooks = books.filter((book) =>
      book.title.toLowerCase().includes(searchQuery) ||
      book.author.toLowerCase().includes(searchQuery) ||
      book.genre.toLowerCase().includes(searchQuery)
    );

    onSearchResults(filteredBooks);
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search by title, author, or genre..."
        value={query}
        onChange={handleSearch}
        className="search-input"
      />
    </div>
  );
};

export default Search;
