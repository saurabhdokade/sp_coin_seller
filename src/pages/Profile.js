import React from "react";
import { Link } from "react-router-dom";
import "./Profile.css"; // CSS for styling the Profile page

const Profile = () => {
  return (
    <div className="profile-page">
      {/* Header */}
      <div className="profile-header">
        <div className="profile-header-content">
          <h2>SP COIN SELLER</h2>
          <div className="header-actions">
            {/* Notification Icon */}
            <Link to="/notifications" className="notification-icon">
              🔔
            </Link>
            <div className="coin-balance">
              <span>SP</span> 100000
            </div>
          </div>
        </div>
      </div>

      {/* Profile Section */}
      <div className="profile-section">
        <div className="profile-avatar">
          <img
            src="https://via.placeholder.com/100"
            alt="Profile"
            className="avatar-img"
          />
          <button className="camera-icon">📷</button>
        </div>
        <h3 className="profile-name">Joy Pal</h3>
      </div>

      {/* Options List */}
      <div className="profile-options">
        <Link to="/profileInfo" className="profile-option">
          <span>👤</span> Profile
        </Link>
        <Link to="/transaction-history" className="profile-option">
          <span>💰</span> Transaction History
        </Link>
        <Link to="/withdrawal-request" className="profile-option">
          <span>📤</span> My Withdrawal Request
        </Link>
        <Link to="/customer-support" className="profile-option">
          <span>❓</span> Customer Support
        </Link>
        <Link to="/account-details" className="profile-option">
          <span>💳</span> Account Details
        </Link>
        <Link to="/terms-and-conditions" className="profile-option">
          <span>📜</span> Terms and Conditions
        </Link>
        <Link to="/settings" className="profile-option">
          <span>⚙️</span> Settings
        </Link>
      </div>

      {/* Footer Navigation */}
      <div className="profile-footer">
        <Link to="/" className="footer-item">
          <span>🏠</span> Home
        </Link>
        <Link to="/requests" className="footer-item">
          <span>📩</span> Requests
        </Link>
        <Link to="/message" className="footer-item">
          <span>💬</span> Message
        </Link>
        <Link to="/profile" className="footer-item active">
          <span>👤</span> Profile
        </Link>
      </div>
    </div>
  );
};

export default Profile;
