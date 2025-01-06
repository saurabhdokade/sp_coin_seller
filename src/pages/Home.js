import React from "react";
import "./Home.css"; // Create this CSS file for styling
import FooterNav from "./FotterNav"

const HomePage = () => {
  return (
    <div className="home-page">
      {/* Header */}
      <div className="header">
        <h1>SP COIN SELLER</h1>
        <div className="coin-info">
          <span className="notification-icon">🔔</span>
          <span className="coin-balance">SP 100000</span>
        </div>
      </div>

      {/* Coin Balances */}
      <div className="coin-balances">
        <div className="balance-card">
          <p>Deposit Coin Balance</p>
          <h2>50,000</h2>
          <img
            src="https://tse1.mm.bing.net/th?id=OIP.3r6BsPtJKBDxL62WuhuDrQHaDn&pid=Api&P=0&h=180"
            alt="Coins"
            className="coin-icon"
          />
        </div>
        <div className="balance-card">
          <p>Withdrawal Coin Balance</p>
          <h2>20,000</h2>
          <img
            src="https://tse1.mm.bing.net/th?id=OIP.3r6BsPtJKBDxL62WuhuDrQHaDn&pid=Api&P=0&h=180"
            alt="Coins"
            className="coin-icon"
          />
        </div>
        <div className="total-coin-card">
          <p>Total Coin</p>
          <h2>100,000</h2>
          <button className="send-coin-btn">Send Coin</button>
        </div>
      </div>

      {/* Transaction History */}
      <div className="transaction-history">
        <div className="transaction-header">
          <h3>Transaction History</h3>
          <a href="#" className="view-all-link">View All</a>
        </div>
        <div className="transaction-card credited">
          <p className="transaction-title">COIN REVIVED</p>
          <p>1000 Coin Revived From ID:87988987</p>
          <p>09PM, 12 AUG</p>
        </div>
        <div className="transaction-card debited">
          <p className="transaction-title">COIN SEND</p>
          <p>1000 Coin Debited To ID:87988987</p>
          <p>09PM, 12 AUG</p>
        </div>
        <div className="transaction-card credited">
          <p className="transaction-title">COIN REVIVED</p>
          <p>1000 Coin Revived From ID:87988987</p>
          <p>09PM, 12 AUG</p>
        </div>
        <div className="transaction-card debited">
          <p className="transaction-title">COIN SEND</p>
          <p>1000 Coin Debited To ID:87988987</p>
          <p>09PM, 12 AUG</p>
        </div>
      </div>

      {/* Footer Navigation */}
      <div className="footer-nav">
      <FooterNav />
      </div>
    </div>
  );
};

export default HomePage;
