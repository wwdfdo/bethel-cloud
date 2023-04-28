import React from "react";

import { MdAccountCircle } from "react-icons/md";
import { MdOutlineShoppingCart } from "react-icons/md";
import { MdSearch } from "react-icons/md";
import { TbNotes } from "react-icons/tb";
import "./BethelLeftSideBar.css";

const BethelLeftSideBar = () => {
  return (
    <div className="bls-main">
      <div className="bls-first-container">
        <div className="bls-logo-text">BC</div>
        <div className="bls-icon-container">
          <div className="bls-icon-wrapper">
            <MdAccountCircle size={24} />
          </div>
          <TbNotes size={24} />
          <MdOutlineShoppingCart size={24} />
          <MdSearch size={24} />
        </div>
      </div>
      <div className="bls-currency-icons">
        <div>EUR</div>
        <div>US</div>
      </div>
    </div>
  );
};

export default BethelLeftSideBar;
