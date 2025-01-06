import React, { useState } from 'react';
import './UserChat.css';

function UserChat() {
  const [message, setMessage] = useState('');

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSendMessage = () => {
    console.log('Message Sent:', message);
    setMessage('');
  };

  return (
    <div className="chat-container">
      <div className="header">
        <div className="back-button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="19" y1="12" x2="5" y2="12" />
            <polyline points="12 19 5 12 12 5" />
          </svg>
        </div>
        <div className="user-info">
          <img
            src="https://via.placeholder.com/50"
            alt="User Profile Picture"
          />
          <span>Sunny001</span>
        </div>
        <button className="appeal-button">APPEAL</button>
      </div>
      <div className="chat-body">
        <p>Today</p>
        <div className="coin-transfer-message">Coin Transferred</div>
      </div>
      <div className="chat-input">
        <input
          type="text"
          placeholder="Type your message..."
          className="input-field"
          value={message}
          onChange={handleMessageChange}
        />
        <div className="input-icons">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M15.04 9.95l-1.05 1.06L8.03 3" />
            <path d="M18 15l-3 3-3-3" />
          </svg>
        </div>
        <button onClick={handleSendMessage} className="send-button">
          Send
        </button>
      </div>
    </div>
  );
}

export default UserChat;
