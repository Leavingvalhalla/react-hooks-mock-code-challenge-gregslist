import React from 'react';

function Search({ handleSearch, setQuery, query }) {
  function handleSubmit(e) {
    e.preventDefault();
    handleSearch(e);
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
