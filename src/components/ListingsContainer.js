import React from 'react';
import ListingCard from './ListingCard';

function ListingsContainer({ onDeleteClick, listings }) {
  return (
    <main>
      <ul className="cards">
        {listings
          ? listings.map((listing) => (
              <ListingCard
                key={listing.id}
                listing={listing}
                onDeleteClick={onDeleteClick}
              />
            ))
          : null}
      </ul>
    </main>
  );
}

export default ListingsContainer;
