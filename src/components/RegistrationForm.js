import React, { useState } from 'react';
import axios from 'axios';

const RegistrationForm = () => {
  const [university, setUniversity] = useState('');
  const [apartment, setApartment] = useState('');
  const [distance, setDistance] = useState('');

  const handleSubmit =  async(e) => {
    e.preventDefault();
    // Handle form submission (to be implemented)
    console.log({ university, apartment, distance })
    try {
      const res= await axios.post('http://localhost:5000/registerapt', { university, apartment, distance });
      // console.log(res)
      alert('Registration successful!');
      setUniversity('');
      setApartment('');
      setDistance('');

      // Optionally, you can reset the form fields here
    } catch (error) {
      console.error('Error registering accommodation:', error);
      alert('An error occurred. Please try again later.');
    }
  };

  return (
    <div>
      <h2>Register Accommodation</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="university">University:</label>
          <input
            type="text"
            id="university"
            value={university}
            onChange={(e) => setUniversity(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="apartment">Apartment:</label>
          <input
            type="text"
            id="apartment"
            value={apartment}
            onChange={(e) => setApartment(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="distance">Distance (in miles):</label>
          <input
            type="number"
            id="distance"
            value={distance}
            onChange={(e) => setDistance(e.target.value)}
            required
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegistrationForm;

