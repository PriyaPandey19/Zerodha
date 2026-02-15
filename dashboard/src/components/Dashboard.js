import React, { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import axios from "axios";

import Apps from "./Apps";
import Funds from "./Funds";
import Holdings from "./Holdings";
import Orders from "./Orders";
import Positions from "./Positions";
import Summary from "./Summary";
import WatchList from "./WatchList";
import { GeneralContextProvider } from "./GeneralContext";

const Dashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://zerodha-7jne.onrender.com/api/auth", {
        withCredentials: true,
      })
      .then(() => {
        // ✅ user verified → stay on dashboard
      })
      .catch(() => {
        // ❌ not logged in → redirect to login app
        window.location.href = "https://zerodha-1-pykc.onrender.com/login";
      });
  }, []);

  return (
    <div className="dashboard-container">
      <GeneralContextProvider>
        <WatchList />
      </GeneralContextProvider>

      <div className="content">
        <Routes>
          <Route path="/" element={<Summary />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/holdings" element={<Holdings />} />
          <Route path="/positions" element={<Positions />} />
          <Route path="/funds" element={<Funds />} />
          <Route path="/apps" element={<Apps />} />
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;
