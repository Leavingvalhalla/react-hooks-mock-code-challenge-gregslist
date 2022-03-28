import React, { useState, useEffect } from 'react';
import Header from './Header';
import ListingsContainer from './ListingsContainer';

function App() {
  const [query, setQuery] = useState('');
  const [listings, setListings] = useState('');
  const [listingsToRender, setListingsToRender] = useState('');

  useEffect(
    () =>
      fetch('http://localhost:6001/listings')
        .then((res) => res.json())
        .then((data) => setListings(data)),
    []
  );

  useEffect(() => setListingsToRender(listings), [listings]);

  function handleSearch(e) {
    e.preventDefault();
    setListingsToRender(
      listings.filter((listing) =>
        listing.description.toLowerCase().includes(query.toLowerCase())
      )
    );
  }

  function onDeleteClick(listingToDelete) {
    fetch(`http://localhost:6001/listings/${listingToDelete.id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then(
        setListings(
          listings.filter((listing) => listing.id !== listingToDelete.id)
        )
      );
  }

  return (
    <div className="app">
      <Header handleSearch={handleSearch} setQuery={setQuery} query={query} />
      <ListingsContainer
        onDeleteClick={onDeleteClick}
        listings={listingsToRender}
      />
    </div>
  );
}

export default App;
