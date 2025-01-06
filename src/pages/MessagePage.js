import React from "react";
import { useNavigate } from "react-router-dom"; // For navigation

const MessagePage = () => {
  const users = [
    { id: 1, name: "Arjun Mondal", message: "You have to pay 105 rupees", time: "9:07 PM" },
    { id: 2, name: "Amit Roy", message: "You have to pay 105 rupees", time: "9:07 PM" },
    { id: 3, name: "Bijoy Pal", message: "You have to pay 105 rupees", time: "9:07 PM" },
  ];

  const navigate = useNavigate(); // Access history object for navigation

  const handleUserClick = (userId) => {
    // Redirect to the UserChat page for the clicked user
    navigate(`/user-chat/${userId}`);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      {/* Header */}
      <div
        style={{
          backgroundColor: "#4b1059",
          color: "white",
          padding: "10px 20px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h2 style={{ margin: 0 }}>SP COIN SELLER</h2>
        <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
          <span style={{ fontSize: "20px", cursor: "pointer" }}>🔔</span>
          <span style={{ fontWeight: "bold" }}>SP 100000</span>
        </div>
      </div>

      {/* Message List */}
      <div style={{ flex: 1, overflowY: "auto", padding: "10px" }}>
        {users.map((user) => (
          <div
            key={user.id}
            onClick={() => handleUserClick(user.id)} // Add onClick to navigate to UserChat page
            style={{
              border: "1px solid #ccc",
              borderRadius: "8px",
              margin: "10px 0",
              padding: "10px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              backgroundColor: "#f8f8f8",
              cursor: "pointer", // Show a pointer cursor on hover
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <img
                src={`https://via.placeholder.com/50`}
                alt="Profile"
                style={{ borderRadius: "50%" }}
              />
              <div>
                <h4 style={{ margin: 0 }}>{user.name}</h4>
                <p style={{ margin: "5px 0", color: "#555" }}>{user.message}</p>
              </div>
            </div>
            <div style={{ textAlign: "right" }}>
              <p style={{ margin: "0", color: "#555" }}>{user.time}</p>
              <span
                style={{
                  display: "inline-block",
                  backgroundColor: "#4b1059",
                  color: "white",
                  borderRadius: "50%",
                  width: "20px",
                  height: "20px",
                  lineHeight: "20px",
                  textAlign: "center",
                  fontSize: "12px",
                }}
              >
                1
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Footer Navigation */}
      <div
        style={{
          backgroundColor: "#fff",
          padding: "10px 20px",
          display: "flex",
          justifyContent: "space-around",
          borderTop: "1px solid #ccc",
          position: "fixed",
          bottom: 0,
          width: "100%",
        }}
      >
        <div style={{ textAlign: "center", cursor: "pointer" }}>
          <span>🏠</span>
          <p style={{ margin: 0 }}>Home</p>
        </div>
        <div style={{ textAlign: "center", cursor: "pointer" }}>
          <span>📩</span>
          <p style={{ margin: 0 }}>Requests</p>
        </div>
        <div style={{ textAlign: "center", cursor: "pointer" }}>
          <span>📄</span>
          <p style={{ margin: 0 }}>Messages</p>
        </div>
        <div style={{ textAlign: "center", cursor: "pointer" }}>
          <span>👤</span>
          <p style={{ margin: 0 }}>Profile</p>
        </div>
      </div>
    </div>
  );
};

export default MessagePage;
