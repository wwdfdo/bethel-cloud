import React from "react";

import { GrBitcoin } from "react-icons/gr";
import { BiEnvelopeOpen } from "react-icons/bi";
import { BsBriefcase } from "react-icons/bs";
import { FaSignal } from "react-icons/fa";
import "./MyCloud.css";

const Mycloud = () => {
  return (
    <div className="bwlt-main ">
      <div className="bwlt-wrapper">
        <div className="bwlt-welcome-text">Welcome Back John!</div>
        <div className="bwlt-main-card">
          <div className="bwlt-card-text">
            Upgrade Your Plan Platinum <br /> and Get Ultimate access
          </div>
          <button className="bwlt-upgrade-btn">Upgrade Now</button>
          <div className="bwlt-bitcoin-icon">
            <GrBitcoin size={120} />
          </div>
        </div>
      </div>

      <div className="bwlt-smcards-wrapper">
        <div className="bwlt-smcard bwlt-smcard1">
          <p className="bwlt-smcards-price">$1,234</p>
          <p className="bwlt-smcards-text">Total Assets</p>
          <div className="bwlt-smcard-icon">
            {" "}
            <BiEnvelopeOpen size={24} color="#fff" />
          </div>
        </div>
        <div className="bwlt-smcard bwlt-smcard2">
          {" "}
          <p className="bwlt-smcards-price">$1,234</p>
          <p className="bwlt-smcards-text">Total Assets</p>
          <div className="bwlt-smcard-icon">
            {" "}
            <BsBriefcase size={24} color="#fff" />
          </div>
        </div>
        <div className="bwlt-smcard bwlt-smcard3">
          {" "}
          <p className="bwlt-smcards-price">$1,234</p>
          <p className="bwlt-smcards-text">Total Assets</p>
          <div className="bwlt-smcard-icon">
            {" "}
            <FaSignal size={24} color="#fff" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mycloud;
