import React, { useState } from 'react';
import './Deposit.css';

function DepositCoin() {
  const [buyerName, setBuyerName] = useState('');
  const [buyerId, setBuyerId] = useState('');
  const [coinAmount, setCoinAmount] = useState('');

  const handleBuyerNameChange = (event) => {
    setBuyerName(event.target.value);
  };

  const handleBuyerIdChange = (event) => {
    setBuyerId(event.target.value);
  };

  const handleCoinAmountChange = (event) => {
    setCoinAmount(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle deposit logic here
    console.log('Depositing:', { buyerName, buyerId, coinAmount });
  };

  return (
    <div className="deposit-page">
      <header className="deposit-header">
        <h1>Deposit Coin</h1>
      </header>
      <div className="deposit-container">
        <form onSubmit={handleSubmit} className="deposit-form">
          <div className="form-group">
            <label htmlFor="buyerName">Add Buyer Name:</label>
            <input
              type="text"
              id="buyerName"
              value={buyerName}
              onChange={handleBuyerNameChange}
              placeholder="Enter buyer's name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="buyerId">Add Buyer ID:</label>
            <input
              type="text"
              id="buyerId"
              value={buyerId}
              onChange={handleBuyerIdChange}
              placeholder="Enter buyer's ID"
            />
          </div>
          <div className="form-group">
            <label htmlFor="coinAmount">Amount of Coin:</label>
            <input
              type="number"
              id="coinAmount"
              value={coinAmount}
              onChange={handleCoinAmountChange}
              placeholder="Enter coin amount"
            />
          </div>
          <button type="submit" className="submit-btn">Deposit Coin</button>
        </form>
      </div>
    </div>
  );
}

export default DepositCoin;
