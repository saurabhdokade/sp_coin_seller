import React, { useState } from 'react';
import './NotificationList.css'; // Import CSS for styling

function NotificationList() {
  // Initial notifications state
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: 'COIN_REQUEST',
      message: '1000 Coins Have Been Requested From ID: 87988987. Please Review.',
      timestamp: '09PM, 12 AUG',
      status: 'New',
    },
    {
      id: 2,
      type: 'WITHDRAWAL_REQUEST',
      message: 'You Will Receive A Withdrawal Request From ID: 98787686. Please Check.',
      timestamp: '09PM, 12 AUG',
      status: 'New',
    },
    {
      id: 3,
      type: 'COIN_REQUEST',
      message: '1000 Coins Have Been Requested From ID: 87988987. Please Review.',
      timestamp: '09PM, 12 AUG',
      status: 'New',
    },
    {
      id: 4,
      type: 'COIN_REQUEST',
      message: '1000 Coins Have Been Requested From ID: 87988987. Please Review.',
      timestamp: '09PM, 12 AUG',
      status: 'New',
    },
    {
      id: 5,
      type: 'COIN_REQUEST',
      message: '1000 Coins Have Been Requested From ID: 87988987. Please Review.',
      timestamp: '09PM, 12 AUG',
      status: 'New',
    },
  ]);

  const [searchQuery, setSearchQuery] = useState('');

  // Handle changes in the search bar
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // Filter notifications based on search query
  const filteredNotifications = notifications.filter((notification) =>
    notification.message.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="notification-page">
      <header className="notification-header">
        <h1>Notification</h1>
      </header>

      {/* Search Bar */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search By ID"
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>

      {/* Notification List */}
      <div className="notification-list">
        {filteredNotifications.length > 0 ? (
          filteredNotifications.map((notification) => (
            <div key={notification.id} className={`notification-item ${notification.status.toLowerCase()}`}>
              <div className="notification-type">
                {notification.type === 'COIN_REQUEST' ? '💰' : '📤'}
              </div>
              <div className="notification-details">
                <p className="notification-message">{notification.message}</p>
                <span className="notification-timestamp">{notification.timestamp}</span>
              </div>
              <span className={`notification-status ${notification.status.toLowerCase()}`}>
                {notification.status}
              </span>
            </div>
          ))
        ) : (
          <p className="no-notifications">No Notifications Found</p>
        )}
      </div>
    </div>
  );
}

export default NotificationList;
