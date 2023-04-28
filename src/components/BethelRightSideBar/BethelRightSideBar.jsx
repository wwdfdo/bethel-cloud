import React from "react";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { BiRightArrowCircle } from "react-icons/bi";
import { BsCloudCheck } from "react-icons/bs";
import { BsPlusCircle } from "react-icons/bs";
import { GrCircleInformation } from "react-icons/gr";
import { MdOutlineMenuBook } from "react-icons/md";
import { SiJsonwebtokens } from "react-icons/si";
import { BiBookContent } from "react-icons/bi";
import { CgWebsite } from "react-icons/cg";
import { BsTicketPerforated } from "react-icons/bs";
import { RiFolderWarningLine } from "react-icons/ri";
import { GrSettingsOption } from "react-icons/gr";
import { TbJewishStar } from "react-icons/tb";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { GoPrimitiveDot } from "react-icons/go";
import { FiChevronDown } from "react-icons/fi";
import pic from "../../images/profilepic.jpg";
import diagram from "../../images/diagram.png";
import { RxDotFilled } from "react-icons/rx";
import { BsHandbag } from "react-icons/bs";
import "./BethelRightSideBar.css";

const BethelRightSideBar = () => {
  return (
    <div className=" w-3/12 flex flex-col justify-between items-center px-10 py-5 brsb-wrapper ">
      <div className=" brsb-container">
        <div className=" brsb-storage-sec">
          <div className="brsb-image-sec-container">
            <div className="brsb-profile-image">
              <img src={pic} alt="" />
            </div>
            <div className="text-[.7rem]">
              <div className="brsb-image-sec-text-container ">
                <p>Nevzat Gokmen</p>
                <p>
                  <GoPrimitiveDot />
                </p>
                <p>
                  <FiChevronDown />
                </p>
              </div>
              <div>Nevzat4023</div>
            </div>
          </div>

          <div className="brsb-percentage-wrapper">
            <div className="brsb-percentage-container  ">
              <div className="brsb-percentage">
                <SiJsonwebtokens />
              </div>
            </div>
            <div className="brsb-percentage-text-container">
              <div className=" ">Storage</div>
              <div>69%</div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 text-[.9rem] font-bold brsb-menu-container ">
          <div className=" brsb-menu-container-title">
            <MdOutlineMenuBook />
            <div className="">Partner menu</div>
          </div>
          <div className="flex flex-col gap-4 brsb-menu-list ">
            <div className="brsb-menu-container-title">
              <div>
                <BiBookContent />
              </div>
              <div>Web interface</div>
            </div>

            <div className="brsb-menu-container-title">
              <div>
                <BsTicketPerforated />
              </div>
              <div>Ticket Support</div>
            </div>
            <div className="brsb-menu-container-title">
              <div>
                <RiFolderWarningLine />
              </div>
              <div>Interruptions</div>
            </div>
            <div className="brsb-menu-container-title">
              <div>
                <GrSettingsOption />
              </div>
              <div>Donation Settings</div>
            </div>
            <div className="brsb-menu-container-title">
              <div>
                <TbJewishStar />
              </div>
              <div>Wish list</div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 brsb-storage-diagram ">
          <div className="text-2xl font-bold brsb-storage-diagram-title">
            Storage Details
          </div>
          <div className=" flex flex-col gap-3 brsb-storage-diagram-container ">
            <div className=" flex justify-center brsb-storage-diagram-container-img ">
              <img src={diagram} alt="" />
            </div>
            <div className="flex flex-col mx-10 brsb-storage-diagram-text-container">
              <div className="flex justify-between gap-12 brsb-storage-diagram-text-wrapper1 ">
                <div className="flex items-center w-1/2 brsb-storage-diagram-w12">
                  <RxDotFilled /> <div>Documents</div>
                </div>
                <div className="flex items-center w-1/2 brsb-storage-diagram-w12">
                  <RxDotFilled />
                  <div>Images</div>
                </div>
              </div>
              <div className="flex justify-between gap-16 brsb-storage-diagram-text-wrapper2 ">
                <div className="flex items-center w-1/2 brsb-storage-diagram-w12">
                  <RxDotFilled />
                  <div>Audio</div>
                </div>
                <div className="flex items-center w-1/2 brsb-storage-diagram-w12">
                  <RxDotFilled />
                  <div>Video</div>
                </div>
              </div>
            </div>
            <div className="flex gap-2 items-center  pl-5 py-1 w-3/4 mx-auto rounded-lg bg-[#ff8130] brsb-storage-button-container">
              <BsHandbag />
              <div>$150</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BethelRightSideBar;
