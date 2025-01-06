import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import CoinList from "./components/CoinList";
import AddCoin from "./components/AddCoin";
import FooterNav from "./pages/FotterNav"; // Import FooterNav component
import Chat from "./pages/Chat";
import HomePage from "./pages/Home";
import RequestsPage from "./pages/RequestsPage"; // Requests page route
import Profile from "./pages/Profile"; // Profile page route
// import Balance from "./pages/Balance"; // Balance page route
import MessagePage from "./pages/MessagePage";
import "./styles/global.css"; // Global styling
import TransactionHistory from "./pages/TransactionHistory";
import NotificationList from "./pages/NotificationList";
import ProfileInfo from "./pages/ProfileInfo";
import CoinRequestDetails from "./pages/CoinRequestDetails";
import DepositCoin from "./pages/DepositCoin";
import UserChat from "./pages/UserChat";
import HelpAndSupport from "./pages/HelpAndSupport";

function App() {
  return (
    <Router>
      <div className="App">
        <Sidebar /> {/* Sidebar component that should contain navigation links */}
        <div className="content">
          <Routes>
            {/* Define the main dashboard route */}
            <Route path="/" element={<HomePage />} />

            {/* Coin management routes */}
            <Route path="/coins" element={<CoinList />} />
            <Route path="/add-coin" element={<AddCoin />} />

            {/* Chat page route */}
            {/* <Route path="/chat" element={<Chat />} /> */}

            {/* Requests page route */}
            <Route path="/requests" element={<RequestsPage />} />

            {/* Balance page route */}
            <Route path="/chat" element={<MessagePage />} />

            {/* Profile page route */}
            <Route path="/profile" element={<Profile />} />
            <Route path="/ProfileInfo" element={<ProfileInfo />} />
            <Route path="/notifications" element={<NotificationList />} />
            <Route path="/transaction-history" element={<TransactionHistory />} />
            <Route path="/user-chat/:userId" element={<UserChat />} />
            
            <Route path="/coin-request-details" element={<CoinRequestDetails/>} />
            <Route path="/deposit" element={<DepositCoin />} />
            <Route path="/customer-support" element={<HelpAndSupport />} />
          </Routes>
        </div>
        <FooterNav /> {/* FooterNav component */}
      </div>
    </Router>
  );
}

export default App;
