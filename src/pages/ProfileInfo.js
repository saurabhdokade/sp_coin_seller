import React, { useState } from 'react';
import './ProfileInfo.css'; // Importing the CSS file

function ProfileInfo() {
  const [name, setName] = useState('Joy Pal');
  const [id, setId] = useState('SP87873939');
  const [contactNumber, setContactNumber] = useState('+91 8778989078');
  const [email, setEmail] = useState('abcd@gmail.com');
  const [totalCoin, setTotalCoin] = useState(100000);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleIdChange = (event) => {
    setId(event.target.value);
  };

  const handleContactNumberChange = (event) => {
    setContactNumber(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleTotalCoinChange = (event) => {
    setTotalCoin(event.target.value);
  };

  const handleDeleteAccount = () => {
    // Implement logic to delete the account
    console.log('Delete account button clicked');
  };

  return (
    <div className="profile-container">
      <h1>Profile Information</h1>
      
      <div className="profile-field">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" value={name} onChange={handleNameChange} />
      </div>
      
      <div className="profile-field">
        <label htmlFor="id">ID:</label>
        <input type="text" id="id" value={id} onChange={handleIdChange} />
      </div>
      
      <div className="profile-field">
        <label htmlFor="contact-number">Contact Number:</label>
        <input
          type="tel"
          id="contact-number"
          value={contactNumber}
          onChange={handleContactNumberChange}
        />
      </div>
      
      <div className="profile-field">
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" value={email} onChange={handleEmailChange} />
      </div>
      
      <div className="profile-field">
        <label htmlFor="total-coin">Total Coins:</label>
        <input
          type="number"
          id="total-coin"
          value={totalCoin}
          onChange={handleTotalCoinChange}
        />
      </div>

      <div className="profile-action">
        <button onClick={handleDeleteAccount} className="delete-btn">
          Delete Account
        </button>
      </div>
    </div>
  );
}

export default ProfileInfo;
