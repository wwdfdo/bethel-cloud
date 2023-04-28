import React from "react";

import { RiDashboard3Line } from "react-icons/ri";
import { BsBoxSeam } from "react-icons/bs";
import { CgNotes } from "react-icons/cg";
import { BsEnvelope } from "react-icons/bs";
import { ImFilesEmpty } from "react-icons/im";
import { TbFileInvoice } from "react-icons/tb";

import { FiSettings } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";
import { TbLogout } from "react-icons/tb";
import "./BehtelCloud.css";

const BethelCloud = () => {
  return (
    <div className="bc-main">
      <div className="bc-container">
        <div className="bc-wrapper">
          <h2>Account</h2>
          <div className="bc-top-menu-wrapper">
            <div className="bc-menuitem-wrapper">
              <div className="bc-menuitem-icon">
                <RiDashboard3Line size={20} />
              </div>
              <p className="bc-menuitem-text">Dashboard</p>
            </div>
            <div className="bc-menuitem-wrapper">
              <div className="bc-menuitem-icon">
                <BsBoxSeam size={20} />
              </div>
              <p className="bc-menuitem-text">My Cloud</p>
            </div>
            <div className="bc-menuitem-wrapper">
              <div className="bc-menuitem-icon">
                <CgNotes size={20} />
              </div>
              <p className="bc-menuitem-text">General</p>
            </div>
            <div className="bc-menuitem-wrapper">
              <div className="bc-menuitem-icon">
                <BsEnvelope size={20} />
              </div>
              <p className="bc-menuitem-text">Overview</p>
            </div>{" "}
            <div className="bc-menuitem-wrapper">
              <div className="bc-menuitem-icon">
                <ImFilesEmpty size={20} />
              </div>
              <p className="bc-menuitem-text">Favorites</p>
            </div>
            <div className="bc-menuitem-wrapper">
              <div className="bc-menuitem-icon">
                <TbFileInvoice size={20} />
              </div>
              <p className="bc-menuitem-text">Updates</p>
            </div>{" "}
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <div className="bc-menuitem-wrapper">
            <div className="bc-menuitem-icon">
              <FiSettings size={20} />
            </div>
            <p className="bc-menuitem-text">Settings</p>
          </div>
          <div className="bc-menuitem-wrapper">
            <div className="bc-menuitem-icon">
              <RiDeleteBinLine size={20} />
            </div>
            <p className="bc-menuitem-text">Recycle Bin</p>
          </div>
          <div className="bc-menuitem-wrapper">
            <div className="bc-menuitem-icon">
              <TbLogout size={20} />
            </div>
            <p className="bc-menuitem-text">Logout</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BethelCloud;
