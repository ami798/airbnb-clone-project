import React from 'react';

function PropertyCard({ image, location, price, rating }) {
  return (
    <div style={{
      border: '1px solid #ddd',
      borderRadius: '10px',
      overflow: 'hidden',
      width: '300px',
      margin: '1rem'
    }}>
      <img src={image} alt={location} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
      <div style={{ padding: '1rem' }}>
        <h3>{location}</h3>
        <p>💵 {price} / night</p>
        <p>⭐ {rating}</p>
      </div>
    </div>
  );
}

export default PropertyCard;
