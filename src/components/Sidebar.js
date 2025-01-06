import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link for routing
import "./Sidbar.css"; // Create this CSS file for styling

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Button to toggle sidebar */}
      <button className="toggle-btn" onClick={toggleSidebar}>
        ☰
      </button>

      {/* Sidebar */}
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <div className="profile-section">
          <img
            src="https://via.placeholder.com/50"
            alt="Profile"
            className="profile-pic"
          />
          <div className="profile-info">
            <h3>Joy Pal</h3>
            <p>ID: 76879909009</p>
            <button className="edit-profile-btn">
              <Link to = "/profileInfo"> Edit Profile</Link>
              </button>
          </div>
        </div>
        <ul className="menu">
          <li>Account Details</li>
          <li>Buy Coin</li>
          <li>Send Coin</li>
          <li>Verify ID</li>
          <li>Withdrawal</li>
          <li>Transaction History</li>
          <li>
            <Link to="/customer-support">Help & Support</Link> {/* Link to Help & Support page */}
          </li>
          <li>Privacy Policy</li>
          <li>Telegram</li>
          <li>Log Out</li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
