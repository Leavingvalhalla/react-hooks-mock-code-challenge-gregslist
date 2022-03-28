import React, { useState } from 'react';

function ListingCard({ listing, onDeleteClick }) {
  const [isClicked, setIsClicked] = useState(false);

  function handleDeleteClick() {
    onDeleteClick(listing);
  }

  function handleFavoriteClick() {
    setIsClicked((isClicked) => !isClicked);
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={listing.image} alt={'description'} />
      </div>
      <div className="details">
        {isClicked ? (
          <button
            onClick={handleFavoriteClick}
            className="emoji-button favorite active"
          >
            ★
          </button>
        ) : (
          <button
            onClick={handleFavoriteClick}
            className="emoji-button favorite"
          >
            ☆
          </button>
        )}
        <strong>{listing.description}</strong>
        <span> · {listing.location}</span>
        <button onClick={handleDeleteClick} className="emoji-button delete">
          🗑
        </button>
      </div>
    </li>
  );
}

export default ListingCard;
