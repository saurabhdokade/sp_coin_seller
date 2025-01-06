import React, { useState } from 'react';
import './CoinRequestDetails.css'; // Import the CSS file
import { useNavigate } from 'react-router-dom';

function CoinRequestDetails() {
  const [coinAmount, setCoinAmount] = useState(1000);
  const [price, setPrice] = useState(1000);

//   const handleDeposit = () => {
//     // Handle coin deposit logic here
//     console.log('Depositing coins...');
//     // You can implement additional logic for the deposit action here.
//   };
const navigate = useNavigate(); // Initialize useNavigate inside the component

const handleDeposit = () => {
  navigate('/deposit'); // Use navigate to push to the deposit page
};

  return (
    <div className="container">
      <div className="header">
        <div className="title">Coin Request Details</div>
        <div className="back-button">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.4142 1.5858L1.5858 12.4142" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>

      <div className="coin-requests">
        <div className="title">Coin requests</div>

        <div className="transfer-coin-within">
          Transfer Coin Within
          <span className="time">14:00</span>
        </div>

        <div className="requested-coin">
          <div className="title">Requested Coin</div>
          <div className="coin-stack">
            <img src="https://cdn-icons-png.flaticon.com/512/3489/3489708.png" alt="Coin" />
            <span>{coinAmount}</span>
          </div>
        </div>

        <div className="user-details">
          <div className="user-avatar">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-Q5q15d2pE6wL_7X_0q9j64g4QvU4bY99Q&usqp=CAU" alt="User Avatar" />
          </div>
          <div className="user-info">
            <div className="user-name">John Doe</div>
            <div className="user-id">SP12345678</div>
          </div>
        </div>

        <div className="coin-actions">
          <div className="coin-price">
            <span>Price per Coin</span>
            <span className="price">${price}</span>
          </div>
          <button onClick={handleDeposit} className="deposit-btn">
            Deposit Coins
          </button>
        </div>
      </div>
    </div>
  );
}

export default CoinRequestDetails;
