import React from "react";

import { GrBitcoin } from "react-icons/gr";
import { BiEnvelopeOpen } from "react-icons/bi";
import { BsBriefcase } from "react-icons/bs";
import { FaSignal } from "react-icons/fa";
import "./MyCloud.css";
import RechartLine from "../RechartLine/RechartLine";
import profilepic from "../../images/profile-pic.webp";

const Mycloud = () => {
  return (
    <div className="mycloud-main">
      <div className="mycloud-header">
        <div className="bwlt-welcome-text">Welcome Back John!</div>
        <div>text</div>
      </div>
      <div className="mycloud-main-wrapper">
        <div className="bwlt-main ">
          <div className="bwlt-wrapper">
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

          <div className="bwlt-linechart-wrapper">
            <div className="bwlt-linechart-heading">
              BETHEL TRANSACTION HISTORY LAST 14 DAYS
            </div>

            <div className="flex justify-start ">
              {/* <Linechart /> */}
              <RechartLine />
            </div>
          </div>
        </div>
        <div className="mycloud-right">
          <div className="mycloud-right-img-wrapper">
            <div className="img">
              <img src={profilepic} alt="" />
            </div>
            <div className="mycloud-right-img-price-text">Total Price</div>
            <div className="mycloud-right-img-price">$1,2345</div>
            <div></div>
          </div>
          <div className="mycloud-right-buy-section">
            <div className="mycloud-right-buy-button-section">
              <button>Buy</button>
              <button>Sell</button>
              <button>Exchange</button>
            </div>
            <div className="mycloud-right-option">
              <div>
                <label for="pet-select">Coin</label>

                <select id="pet-select">
                  <option value="">--Please choose an option--</option>
                  <option value="dog">Dog</option>
                  <option value="cat">Cat</option>
                  <option value="hamster">Hamster</option>
                  <option value="parrot">Parro</option>
                  <option value="spider">Spider</option>
                  <option value="goldfish">Goldfish</option>
                </select>
              </div>
            </div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mycloud;
