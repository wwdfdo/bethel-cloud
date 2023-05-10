import React from "react";
import { BsGift } from "react-icons/bs";
import { BsFillPersonFill } from "react-icons/bs";
import { MdOutlineContactSupport } from "react-icons/md";
import { FiMoreHorizontal } from "react-icons/fi";
import { BsCloudCheck } from "react-icons/bs";
import profilepic from "../../images/profilepic.jpg";
import spain from "../../images/spain.png";
import { BiPlusCircle } from "react-icons/bi";
import { AiOutlineFolder } from "react-icons/ai";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { BiImage } from "react-icons/bi";
import { AiOutlinePlayCircle } from "react-icons/ai";
import { BsArrowUpShort } from "react-icons/bs";
import "./BethelMainDashBoard.css";
const BethelMainDashBoard = () => {
  return (
    <div className=" bmdb-main ">
      <div className="bmdb-menu-wrapper">
        <div className="bmdb-menu-items-wapper">
          <div className="bmdb-menu-item-wrapper">
            <div>
              <BsGift />
            </div>
            <div className="bmdb-menu-item-text">Voucher</div>
          </div>
          <div className="bmdb-menu-item-wrapper">
            <div>
              <BsFillPersonFill />
            </div>
            <div className="bmdb-menu-item-text">Partner</div>
          </div>
          <div className="bmdb-menu-item-wrapper">
            <div>
              <MdOutlineContactSupport />
            </div>
            <div className="bmdb-menu-item-text">Support</div>
          </div>
        </div>
        <div className="bmdb-menu-btn-wrapper">
          <div className="bmdb-menu-btn-icon">
            <div>
              <BsCloudCheck color="black" size={18} />
            </div>
            <div className="bmdb-menu-btn-text"> Rent a Server</div>
          </div>
          <div>
            <FiMoreHorizontal />
          </div>
        </div>
      </div>
      <div className="bmdb-subt-dashb-wrapper">
        <div className="dbmb-subt-between ">
          <h3 className="dbmb-subt-text ">Wallet</h3>
          <div className="bmdb-subt-dashb-icon ">
            <BiPlusCircle size={18} />
            <div>ADD</div>
          </div>
        </div>
        {/* <div className="flex text-[1rem] font-semibold justify-between items-center">
          <div className="text">My Gameservers</div>
          <div className="text-[.9rem] font-semibold">My VPS</div>
          <div className="text-[.9rem] font-semibold">My Rootservers</div>
          <div className="text-[.9rem] font-semibold">My domains</div>
          <div className="text-[.9rem] font-semibold">My Te..</div>
          <div>
            <FiMoreHorizontal />
          </div>
        </div> */}
      </div>
      <div className=" bmdb-seemore-sec">
        <div className="dbmb-subt-between  ">
          <div className="bmdb-subt-text ">Folders</div>
          <div className="dbmb-seemore-text  ">See More</div>
        </div>
      </div>
      <div className=" dbmb-small-card-main-wrapper">
        <div className="dbmb-small-card-container-bg4  dbmb-small-card-container">
          <div className="dbmb-small-card-icon-container">
            <div className=" dbmb-small-card-icon">
              <AiOutlineFolder size={12} />
            </div>
            <div className="bmdb-subt-dashb-more-icon">
              {/* <img className="w-5 h-5 rounded-full" src={spain} alt="" /> */}
              <div className="text-[1.2rem] font-bold bmdb-dotmore-icon-typo ">
                {" "}
                <FiMoreHorizontal />
              </div>
            </div>
          </div>
          <span className="text-[.7rem] font-semibold px-5">Documents</span>
          <p>640 Files</p>
        </div>
        <div className="dbmb-small-card-container-bg1  dbmb-small-card-container">
          <div className="dbmb-small-card-icon-container">
            <div className=" dbmb-small-card-icon">
              <AiOutlineFolder size={12} />
            </div>
            <div className="bmdb-subt-dashb-more-icon">
              {/* <img className="w-5 h-5 rounded-full" src={spain} alt="" /> */}
              <div className="text-[1.2rem] font-bold bmdb-dotmore-icon-typo ">
                {" "}
                <FiMoreHorizontal />
              </div>
            </div>
          </div>
          <span className="text-[.7rem] font-semibold px-5">Documents</span>
          <p>640 Files</p>
        </div>
        <div className="dbmb-small-card-container-bg2  dbmb-small-card-container">
          <div className="dbmb-small-card-icon-container">
            <div className=" dbmb-small-card-icon">
              <AiOutlineFolder size={12} />
            </div>
            <div className="bmdb-subt-dashb-more-icon">
              {/* <img className="w-5 h-5 rounded-full" src={spain} alt="" /> */}
              <div className="text-[1.2rem] font-bold bmdb-dotmore-icon-typo ">
                {" "}
                <FiMoreHorizontal />
              </div>
            </div>
          </div>
          <span className="text-[.7rem] font-semibold px-5">Documents</span>
          <p>640 Files</p>
        </div>
        <div className="dbmb-small-card-container-bg3  dbmb-small-card-container">
          <div className="dbmb-small-card-icon-container">
            <div className=" dbmb-small-card-icon">
              <AiOutlineFolder size={12} />
            </div>
            <div className="flex flex-col justify-center items-center">
              {/* <img className="w-5 h-5 rounded-full" src={spain} alt="" /> */}
              <div className="text-[1.2rem] font-bold bmdb-dotmore-icon-typo ">
                {" "}
                <FiMoreHorizontal />
              </div>
            </div>
          </div>
          <span className="text-[.7rem] font-semibold px-5">Documents</span>
          <p>640 Files</p>
        </div>
      </div>
      <div className="dbmb-seemore-wrapper">
        <div className="dbmb-subt-between  ">
          <div className="dbmb-subt-text ">Files</div>
          <div className=" dbmb-seemore-text ">See More</div>
        </div>
      </div>

      <div className="flex flex-col gap-3 mx-12 text-[.8rem] dbmb-files-sec-container">
        <div className=" dbmb-files-sec-title-container ">
          <div className="w-1/3 dbmb-file-w-13   dbmb-files-title ">
            <div>Name</div>
            <BsArrowUpShort size={18} />
          </div>
          <div className=" dbmb-file-w-15  dbmb-files-title ">
            <div>Size</div>
            <BsArrowUpShort size={18} />
          </div>
          <div className=" dbmb-file-w-14  dbmb-files-title ">Folder</div>
          <div className=" dbmb-file-w-14 dbmb-files-title ">
            <div>Last Modified</div> <BsArrowUpShort size={18} />
          </div>
        </div>
        <div className="dbmb-files-sec-title-container">
          <div className="flex items-center gap-4 dbmb-file-icon-container w-1/3 dbmb-file-w-13">
            <div className=" dbmb-file-icon">
              <AiOutlineFolder size={16} />
            </div>
            <div className="flex flex-col gap-1 dbmb-file-sec-text ">
              <p className="text-[.8rem] font-bold dbmb-file-sec-text-typo">
                Learn Animation
              </p>
              <p className="dbmb-file-sec-small-text">Ali Husni</p>
            </div>
          </div>
          <div className=" dbmb-file-w-15 ">34MB </div>
          <div className=" dbmb-file-w-14 ">Documents</div>
          <div className=" dbmb-file-w-14 ">
            <div>January, 10, 2023</div>
          </div>
        </div>
        <div className="dbmb-files-sec-title-container">
          <div className="flex items-center gap-4 dbmb-file-icon-container w-1/3 dbmb-file-w-13">
            <div className=" dbmb-file-icon">
              <AiOutlineFolder size={16} />
            </div>
            <div className="flex flex-col gap-1 dbmb-file-sec-text ">
              <p className="text-[.8rem] font-bold dbmb-file-sec-text-typo">
                Learn Animation
              </p>
              <p className="dbmb-file-sec-small-text">Ali Husni</p>
            </div>
          </div>
          <div className=" dbmb-file-w-15 ">34MB </div>
          <div className=" dbmb-file-w-14 ">Documents</div>
          <div className=" dbmb-file-w-14 ">
            <div>January, 10, 2023</div>
          </div>
        </div>
        <div className="dbmb-files-sec-title-container">
          <div className="flex items-center gap-4 dbmb-file-icon-container w-1/3 dbmb-file-w-13 ">
            <div className=" dbmb-file-icon">
              <AiOutlineFolder size={16} />
            </div>
            <div className="flex flex-col gap-1 dbmb-file-sec-text ">
              <p className="text-[.8rem] font-bold dbmb-file-sec-text-typo">
                Learn Animation
              </p>
              <p className="dbmb-file-sec-small-text">Ali Husni</p>
            </div>
          </div>
          <div className=" dbmb-file-w-15 ">34MB </div>
          <div className=" dbmb-file-w-14 ">Documents</div>
          <div className=" dbmb-file-w-14 ">
            <div>January, 10, 2023</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BethelMainDashBoard;
