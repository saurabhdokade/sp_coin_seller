import React, { useState } from 'react';
import './RequestPage.css';
import { useNavigate } from 'react-router-dom';

function RequestPage() {
  const [activeTab, setActiveTab] = useState('coin'); // Managing active tab state

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  const navigate = useNavigate();

  const handleProfileClick = () => {
    // Navigate to the CoinRequestDetails page when the profile is clicked
    navigate('/coin-request-details');
  };

  return (
    <div className="request-page">
      <header className="request-header">
        <div className="back-arrow">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left-short" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z" />
          </svg>
        </div>
        <div className="request-title">
          Requests
        </div>
      </header>
      <div className="tabs">
        <div className={`tab ${activeTab === 'coin' ? 'active' : ''}`} onClick={() => handleTabClick('coin')}>
          Coin Requests
        </div>
        <div className={`tab ${activeTab === 'withdraw' ? 'active' : ''}`} onClick={() => handleTabClick('withdraw')}>
          Withdraw Requests
        </div>
      </div>
      <div className="requests-container">
        {/* Coin Requests Section */}
        {activeTab === 'coin' && (
          <div className="request">
            <div className="request-header" onClick={handleProfileClick}>
              <img src="https://i.imgur.com/vF2i5fY.jpg" alt="Profile Picture" />
              <div className="request-name">
                MIKE JOHNSON
              </div>
            </div>
            <div className="request-body">
              You Will Receive A Coin Request From ID: 98787686. Please Check.
            </div>
            <div className="request-footer">
              <div className="request-status pending">
                Pending
              </div>
              <div className="request-time">
                9AM, 14 AUG
              </div>
            </div>
          </div>
        )}

        {activeTab === 'coin' && (
          <div className="request">
            <div className="request-header">
              <img src="https://i.imgur.com/JFzj3yk.jpg" alt="Profile Picture" />
              <div className="request-name">
                LISA BROWN
              </div>
            </div>
            <div className="request-body">
              You Will Receive A Coin Request From ID: 98787687. Please Check.
            </div>
            <div className="request-footer">
              <div className="request-status approved">
                Approved
              </div>
              <div className="request-time">
                10AM, 14 AUG
              </div>
            </div>
          </div>
        )}

        {/* Withdraw Requests Section */}
        {activeTab === 'withdraw' && (
          <div className="request">
            <div className="request-header">
              <img src="https://i.imgur.com/vF2i5fY.jpg" alt="Profile Picture" />
              <div className="request-name">
                JOHN DOE
              </div>
            </div>
            <div className="request-body">
              You Will Receive A Withdrawal Request From ID: 98787686. Please Check.
            </div>
            <div className="request-footer">
              <div className="request-status pending">
                Pending
              </div>
              <div className="request-time">
                10PM, 14 AUG
              </div>
            </div>
          </div>
        )}

        {activeTab === 'withdraw' && (
          <div className="request">
            <div className="request-header">
              <img src="https://i.imgur.com/JFzj3yk.jpg" alt="Profile Picture" />
              <div className="request-name">
                SARAH SMITH
              </div>
            </div>
            <div className="request-body">
              You Will Receive A Withdrawal Request From ID: 98787687. Please Check.
            </div>
            <div className="request-footer">
              <div className="request-status approved">
                Approved
              </div>
              <div className="request-time">
                11AM, 14 AUG
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default RequestPage;
