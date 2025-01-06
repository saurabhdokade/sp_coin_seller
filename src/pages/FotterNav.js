import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook

const FooterNav = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  const handleHomeClick = () => {
    // Navigate to the HomePage when the Home icon is clicked
    navigate("/");
  };

  const handleRequestsClick = () => {
    // Navigate to the Requests page when the Requests icon is clicked
    navigate("/requests");
  };

  const handleBalanceClick = () => {
    // Navigate to the Balance page when the Balance icon is clicked
    navigate("/chat");
  };

  const handleProfileClick = () => {
    // Navigate to the Profile page when the Profile icon is clicked
    navigate("/profile");
  };

  return (
    <div className="footer-nav">
      <div className="nav-item" onClick={handleHomeClick}>
        🏠 Home
      </div>
      <div className="nav-item" onClick={handleRequestsClick}>
        📩 Requests
      </div>
      <div className="nav-item" onClick={handleBalanceClick}>
        💬Chat
      </div>
      <div className="nav-item" onClick={handleProfileClick}>
        👤 Profile
      </div>
    </div>
  );
};

export default FooterNav;
