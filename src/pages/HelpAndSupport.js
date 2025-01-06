import React, { useState } from 'react';
import './HelpAndSupport.css'; // Add your custom CSS file for styling

const HelpAndSupport = () => {
  const [activeFaq, setActiveFaq] = useState(null); // Track which FAQ is open

  // Toggle FAQ visibility
  const handleFaqClick = (index) => {
    setActiveFaq(activeFaq === index ? null : index); // Toggle the active FAQ
  };

  return (
    <div className="help-and-support">
      <div className="header">
        <h1>Help & Support</h1>
        <span className="back-arrow" onClick={() => window.history.back()}>←</span>
      </div>

      <div className="contact-info">
        <div className="contact-item">
          <h3>Our 24X7 Customer Service</h3>
          <p>+91 8778989078</p>
          <span className="phone-icon">📞</span>
        </div>
        <div className="contact-item">
          <h3>Write Us at</h3>
          <p>support@sp-ludo.com</p>
          <span className="email-icon">✉️</span>
        </div>
      </div>

      <h2>Frequently Asked Questions</h2>
      <div className="faq-section">
        {/* FAQ 1 */}
        <div className="faq-item">
          <div className="faq-header" onClick={() => handleFaqClick(0)}>
            <h3>How Does SP Ludo Work?</h3>
            <span className="arrow-icon">{activeFaq === 0 ? '▼' : '▲'}</span>
          </div>
          {activeFaq === 0 && (
            <p>
              SP Ludo works by allowing users to buy coins from sellers, play games to increase their coin balance, 
              and then sell those coins to buyers for real money. The platform ensures a secure and transparent transaction
              process, with support available for any issues.
            </p>
          )}
        </div>

        {/* FAQ 2 */}
        <div className="faq-item">
          <div className="faq-header" onClick={() => handleFaqClick(1)}>
            <h3>Why SP Ludo?</h3>
            <span className="arrow-icon">{activeFaq === 1 ? '▼' : '▲'}</span>
          </div>
          {activeFaq === 1 && (
            <p>
              SP Ludo provides a fun and secure environment for users to earn coins and withdraw real money. 
              The platform also ensures 24/7 customer support for a seamless gaming experience.
            </p>
          )}
        </div>

        {/* FAQ 3 */}
        <div className="faq-item">
          <div className="faq-header" onClick={() => handleFaqClick(2)}>
            <h3>How to Buy Coins?</h3>
            <span className="arrow-icon">{activeFaq === 2 ? '▼' : '▲'}</span>
          </div>
          {activeFaq === 2 && (
            <p>
              To buy coins, users need to navigate to the 'Buy Coins' section in the app, choose a seller, 
              and complete the transaction using secure payment methods. Once the transaction is confirmed, 
              coins will be added to your account.
            </p>
          )}
        </div>

        {/* FAQ 4 */}
        <div className="faq-item">
          <div className="faq-header" onClick={() => handleFaqClick(3)}>
            <h3>How to Withdraw Money?</h3>
            <span className="arrow-icon">{activeFaq === 3 ? '▼' : '▲'}</span>
          </div>
          {activeFaq === 3 && (
            <p>
              To withdraw money, go to the 'Withdraw' section, enter the amount you want to withdraw, and select your preferred
              payment method. Follow the instructions to complete the withdrawal process.
            </p>
          )}
        </div>

        {/* FAQ 5 */}
        <div className="faq-item">
          <div className="faq-header" onClick={() => handleFaqClick(4)}>
            <h3>What is the Refund Policy?</h3>
            <span className="arrow-icon">{activeFaq === 4 ? '▼' : '▲'}</span>
          </div>
          {activeFaq === 4 && (
            <p>
              Our refund policy is straightforward. If you are dissatisfied with any purchase or transaction, 
              you can request a refund within 7 days. Please contact our customer service for more details.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default HelpAndSupport;
