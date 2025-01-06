import React from "react";
import "./TransactionHistory.css"; // CSS for styling

const TransactionHistory = () => {
  // Sample transaction data
  const transactions = [
    {
      id: 1,
      type: "Credited",
      description: "1000 Coin Revived From ID:87988987",
      time: "09PM, 12 AUG",
      status: "credited",
    },
    {
      id: 2,
      type: "Debited",
      description: "1000 Coin Debited To ID:87988987",
      time: "09PM, 12 AUG",
      status: "debited",
    },
    {
      id: 3,
      type: "Debited",
      description: "1000 Coin Debited To ID:87988987",
      time: "09PM, 12 AUG",
      status: "debited",
    },
    {
      id: 4,
      type: "Credited",
      description: "1000 Coin Revived From ID:87988987",
      time: "09PM, 12 AUG",
      status: "credited",
    },
  ];

  return (
    <div className="transaction-history-page">
      {/* Header */}
      <div className="header">
        <button className="back-button">←</button>
        <h2>Transaction History</h2>
        <button className="filter-button">Filter</button>
      </div>

      {/* Search Bar */}
      <div className="search-bar">
        <input type="text" placeholder="Search By ID" />
      </div>

      {/* Transaction List */}
      <div className="transaction-list">
        {transactions.map((transaction) => (
          <div
            className={`transaction-card ${
              transaction.status === "credited"
                ? "transaction-credited"
                : "transaction-debited"
            }`}
            key={transaction.id}
          >
            <div className="transaction-icon">
              {transaction.status === "credited" ? "↙️" : "↗️"}
            </div>
            <div className="transaction-details">
              <h3>{transaction.type}</h3>
              <p>{transaction.description}</p>
              <span>{transaction.time}</span>
            </div>
            <span
              className={`status-label ${
                transaction.status === "credited"
                  ? "status-credited"
                  : "status-debited"
              }`}
            >
              {transaction.type}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TransactionHistory;
