import React, { useState } from 'react';

const SearchForm = () => {
  const [university, setUniversity] = useState('');
  const [apartments, setApartments] = useState([]);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch(`/tempaccomodations?university=${university}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      // Sort apartments by distance
      //data.sort((a, b) => a.distance - b.distance);
      setApartments(data);
      setError('');
    } catch (error) {
      console.error('Error fetching apartments:', error);
      setError('Error fetching apartments');
      setApartments([]);
    }
  };

  return (
    <div>
      <h2>Search Accommodation</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="searchUniversity">Search by University:</label>
          <input
            type="text"
            id="searchUniversity"
            value={university}
            onChange={(e) => setUniversity(e.target.value)}
            required
          />
        </div>
        <button type="submit">Search</button>
      </form>
      
      {error && <p>{error}</p>}
      
      <ul>
        {apartments.map(apartment => (
          <li key={apartment.id}>
            <p>{apartment.apartment}</p>
            <p>{apartment.distance}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchForm;
