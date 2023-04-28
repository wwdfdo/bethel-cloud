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
          <h3 className="dbmb-subt-text ">Dashboard</h3>
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
      <div className="bmdb-subt-dashb-view-more">
        <div className="bmdb-subt-dashb-view-card-bg1 bmdb-subt-dashb-view-card">
          <div className="bmdb-subt-dashb-view-card-icon-wraper">
            <div className=" bmdb-subt-dashb-view-card-icon">
              <AiOutlineFolder size={18} />
            </div>
            <div className="bmdb-subt-dashb-more-icon">
              {/* <img className="w-5 h-5 rounded-full" src={spain} alt="" /> */}
              <div className="more-icon">
                {" "}
                <FiMoreHorizontal />
              </div>
            </div>
          </div>
          <h4>Documents</h4>
          <p>640 Files</p>
          <div className="bmdb-percentage-meter-wrapper">
            <div className=" bmdb-percentage-bar-wrapper  ">
              <div className="bmdb-percentage-bar-bg1 bmdb-percentage-bar"></div>
            </div>
            <div className="bmdb-percentage-bar-text">
              <div className=" ">Storage</div>
              <div>69%</div>
            </div>
          </div>
          <hr />
          <div className=" bmdb-percentage-view-button  ">
            <p>View</p>
            <HiOutlineArrowNarrowRight />
          </div>
        </div>
        <div className=" bmdb-subt-dashb-view-card-bg2 bmdb-subt-dashb-view-card">
          <div className="bmdb-subt-dashb-view-card-icon-wraper">
            <div className=" bmdb-subt-dashb-view-card-icon">
              <BiImage size={18} />
            </div>
            <div className="bmdb-subt-dashb-more-icon">
              {/* <img className="w-5 h-5 rounded-full" src={spain} alt="" /> */}
              <div className="more-icon">
                {" "}
                <FiMoreHorizontal />
              </div>
            </div>
          </div>
          <h4>Documents</h4>
          <p>640 Files</p>
          <div className="bmdb-percentage-meter-wrapper">
            <div className=" bmdb-percentage-bar-wrapper  ">
              <div className="bmdb-percentage-bar-bg2 bmdb-percentage-bar"></div>
            </div>
            <div className="bmdb-percentage-bar-text">
              <div>Storage</div>
              <div>69%</div>
            </div>
          </div>
          <hr />
          <div className=" bmdb-percentage-view-button  ">
            <p>View</p>
            <HiOutlineArrowNarrowRight />
          </div>
        </div>
        <div className=" bmdb-subt-dashb-view-card-bg3 bmdb-subt-dashb-view-card">
          <div className="bmdb-subt-dashb-view-card-icon-wraper">
            <div className=" bmdb-subt-dashb-view-card-icon">
              <AiOutlinePlayCircle si18={20} />
            </div>
            <div className="bmdb-subt-dashb-more-icon">
              {/* <img className="w-5 h-5 rounded-full" src={spain} alt="" /> */}
              <div className="more-icon">
                {" "}
                <FiMoreHorizontal />
              </div>
            </div>
          </div>
          <h4>Documents</h4>
          <p>640 Files</p>
          <div className="bmdb-percentage-meter-wrapper">
            <div className=" bmdb-percentage-bar-wrapper  ">
              <div className="bmdb-percentage-bar-bg3 bmdb-percentage-bar"></div>
            </div>
            <div className="bmdb-percentage-bar-text">
              <div className=" ">Storage</div>
              <div>69%</div>
            </div>
          </div>
          <hr />
          <div className=" bmdb-percentage-view-button  ">
            <p>View</p>
            <HiOutlineArrowNarrowRight />
          </div>
        </div>
      </div>
      <div className=" bmdb-seemore-sec">
        <div className="bmdb-subt-between  ">
          <div className="bmdb-subt-text ">Folders</div>
          <div className="text-[#ff8130] underline flex items-center w-[4.2rem] py-1 rounded-md justify-center font-semibold text-sm gap-2  ">
            See More
          </div>
        </div>
      </div>
      <div className="flex gap-2 flex-wrap items-center justify-center px-12">
        <div className="bg-[#e1e9ff] gap-2 w-[24%] flex flex-col  pt-3 pb-3 rounded-3xl">
          <div className="flex justify-between items-center px-5">
            <div className="w-[24px] h-[24px] rounded-full bg-white flex justify-center items-center">
              <AiOutlineFolder size={12} />
            </div>
            <div className="bmdb-subt-dashb-more-icon">
              {/* <img className="w-5 h-5 rounded-full" src={spain} alt="" /> */}
              <div className="text-[1.2rem] font-bold ">
                {" "}
                <FiMoreHorizontal />
              </div>
            </div>
          </div>
          <div className="text-[.7rem] font-semibold px-5">Documents</div>
          <p>640 Files</p>
        </div>
        <div className="bg-[#e6e0f6] gap-2 w-[24%] flex flex-col  pt-3 pb-3 rounded-3xl">
          <div className="flex justify-between items-center px-5">
            <div className="w-[24px] h-[24px] rounded-full bg-white flex justify-center items-center">
              <AiOutlineFolder size={12} />
            </div>
            <div className="bmdb-subt-dashb-more-icon">
              {/* <img className="w-5 h-5 rounded-full" src={spain} alt="" /> */}
              <div className="text-[1.2rem] font-bold ">
                {" "}
                <FiMoreHorizontal />
              </div>
            </div>
          </div>
          <div className="text-[.7rem] font-semibold px-5">Documents</div>
          <p>640 Files</p>
        </div>
        <div className="bg-[#ffe0e8] gap-2 w-[24%] flex flex-col  pt-3 pb-3 rounded-3xl">
          <div className="flex justify-between items-center px-5">
            <div className="w-[24px] h-[24px] rounded-full bg-white flex justify-center items-center">
              <AiOutlineFolder size={12} />
            </div>
            <div className="bmdb-subt-dashb-more-icon">
              {/* <img className="w-5 h-5 rounded-full" src={spain} alt="" /> */}
              <div className="text-[1.2rem] font-bold ">
                {" "}
                <FiMoreHorizontal />
              </div>
            </div>
          </div>
          <div className="text-[.7rem] font-semibold px-5">Documents</div>
          <p>640 Files</p>
        </div>
        <div className="bg-[#fedfcc] gap-2 w-[24%] flex flex-col  pt-3 pb-3 rounded-3xl">
          <div className="flex justify-between items-center px-5">
            <div className="w-[24px] h-[24px] rounded-full bg-white flex justify-center items-center">
              <AiOutlineFolder size={12} />
            </div>
            <div className="flex flex-col justify-center items-center">
              {/* <img className="w-5 h-5 rounded-full" src={spain} alt="" /> */}
              <div className="text-[1.2rem] font-bold ">
                {" "}
                <FiMoreHorizontal />
              </div>
            </div>
          </div>
          <div className="text-[.7rem] font-semibold px-5">Documents</div>
          <p>640 Files</p>
        </div>
      </div>
      <div className="px-12 pb-3 pt-2">
        <div className="dbmb-subt-between  ">
          <div className="dbmb-subt-text ">Files</div>
          <div className="text-[#ff8130] underline flex items-center w-[4.2rem] py-1 rounded-md justify-center font-semibold text-sm gap-2 ">
            See More
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-3 mx-12 text-[.8rem]">
        <div className="flex justify-between">
          <div className="w-1/3 flex gap-2 items-center ">
            <div>Name</div>
            <BsArrowUpShort size={18} />
          </div>
          <div className="w-1/5 flex gap-2 items-center ">
            <div>Size</div>
            <BsArrowUpShort size={18} />
          </div>
          <div className="w-1/4 flex gap-2 items-center ">Folder</div>
          <div className="w-1/4 flex gap-2 items-center ">
            <div>Last Modified</div> <BsArrowUpShort size={18} />
          </div>
        </div>
        <div className="flex justify-between">
          <div className="flex items-center gap-4 w-1/3">
            <div className="w-[28px] h-[28px] rounded-full bg-blue-400 flex justify-center items-center text-sm">
              <AiOutlineFolder size={16} />
            </div>
            <div className="flex flex-col gap-1 ">
              <p className="text-[.8rem] font-bold">Learn Animation</p>
              <p>Ali Husni</p>
            </div>
          </div>
          <div className="w-1/5 ">34MB </div>
          <div className="w-1/4 ">Documents</div>
          <div className="w-1/4 ">
            <div>January, 10, 2023</div>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="flex items-center gap-4 w-1/3">
            <div className="w-[28px] h-[28px] rounded-full bg-blue-400 flex justify-center items-center text-sm">
              <AiOutlineFolder size={16} />
            </div>
            <div className="flex flex-col gap-1 ">
              <p className="text-[.8rem] font-bold">Learn Animation</p>
              <p>Ali Husni</p>
            </div>
          </div>
          <div className="w-1/5 ">34MB </div>
          <div className="w-1/4 ">Documents</div>
          <div className="w-1/4 ">
            <div>January, 10, 2023</div>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="flex items-center gap-4 w-1/3">
            <div className="w-[28px] h-[28px] rounded-full bg-blue-400 flex justify-center items-center text-sm">
              <AiOutlineFolder size={16} />
            </div>
            <div className="flex flex-col gap-1 ">
              <p className="text-[.8rem] font-bold">Learn Animation</p>
              <p>Ali Husni</p>
            </div>
          </div>
          <div className="w-1/5 ">34MB </div>
          <div className="w-1/4 ">Documents</div>
          <div className="w-1/4 ">
            <div>January, 10, 2023</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BethelMainDashBoard;
