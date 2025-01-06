import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Requests from "./pages/Requests";
import Chat from "./pages/Chat";
import Profile from "./pages/Profile";
import TransactionHistory from "./pages/TransactionHistory";

const AppRoutes = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/requests" element={<Requests />} />
      <Route path="/chat" element={<Chat />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/transaction-history" element={<TransactionHistory />} />
    </Routes>
  </Router>
);

export default AppRoutes;
