import React, { useState } from 'react';

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  const handleMessageChange = (event) => {
    setNewMessage(event.target.value);
  };

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      setMessages([...messages, newMessage]);
      setNewMessage('');
    }
  };

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px', border: '1px solid #ddd', borderRadius: '8px' }}>
      <h1 style={{ textAlign: 'center' }}>Chat Page</h1>
      <div style={{ maxHeight: '300px', overflowY: 'auto', borderBottom: '1px solid #ddd', marginBottom: '20px' }}>
        {messages.length > 0 ? (
          messages.map((message, index) => (
            <div key={index} style={{ margin: '10px 0', padding: '10px', backgroundColor: '#f9f9f9', borderRadius: '5px' }}>
              {message}
            </div>
          ))
        ) : (
          <p style={{ textAlign: 'center', color: '#888' }}>No messages yet...</p>
        )}
      </div>
      <div style={{ display: 'flex' }}>
        <input
          type="text"
          value={newMessage}
          onChange={handleMessageChange}
          placeholder="Type your message..."
          style={{
            flex: 1,
            padding: '10px',
            border: '1px solid #ddd',
            borderRadius: '5px',
            marginRight: '10px',
          }}
        />
        <button
          onClick={handleSendMessage}
          style={{
            padding: '10px 15px',
            backgroundColor: '#4CAF50',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chat;
