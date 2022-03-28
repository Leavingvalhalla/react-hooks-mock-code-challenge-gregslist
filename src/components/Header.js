import React from 'react';
import Search from './Search';

function Header({ handleSearch, setQuery, query }) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search handleSearch={handleSearch} setQuery={setQuery} query={query} />
    </header>
  );
}

export default Header;
