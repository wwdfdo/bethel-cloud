import React from "react";
import BethelMainDashboard from "../BethelMainDashBoard/BethelMainDashBoard";
import BethelRightSideBar from "../BethelRightSideBar/BethelRightSideBar";
import "./BethelLeftSide.css";

const BethelLeftSide = () => {
  return (
    <div className="bethel-left-side">
      <BethelMainDashboard />
      <BethelRightSideBar />
    </div>
  );
};

export default BethelLeftSide;
