import { FaUserCircle } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { MdHeadsetMic } from "react-icons/md";
import { FiLogOut } from "react-icons/fi";
import "../Profile/Profile.css";
import { MdOutlineCopyright } from "react-icons/md";
import { MdPrivacyTip } from "react-icons/md";
import { FaAngleRight } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import LoginDirectComponent from "../LoginDirectPage/LoginDirectComponent";
import { useContext, useEffect, useState } from "react";
import { Islogin } from "../../../Data/Context";

function Profilepage() {
  const { Loginstatus, Username } = useContext(Islogin);

  return (
    <>
      {Loginstatus ? (
        <div className="Full_Profile_pagee">
          <div className="Username_profile_image ">
            <FaUserCircle className="usericons " />
            <p className="username_section ">Username</p>
            <p className="username_section emailusernamesection">{Username}</p>
          </div>
          <Link to="/InformationPage">
            <div className="About_us_section div_for_profilepagee">
              <FaInfoCircle className="InformationIcons iconsforProfilepage" />
              <p className="InfoNamefunction Para_profile">Information</p>
              <FaAngleRight className="Right_arrow_btn" />
            </div>
          </Link>

          <div className="Setting_us_section div_for_profilepagee">
            <IoMdSettings className="Setting_icons iconsforProfilepage " />
            <p className="Settingfunction Para_profile">Settings</p>
            <FaAngleRight className="Right_arrow_btn" />
          </div>
          <Link to="/Contactpage">
            <div className="Contact_us_section div_for_profilepagee">
              <MdHeadsetMic className="Contact_icons iconsforProfilepage " />
              <p className="Settingfunction Para_profile">Contact Us</p>
              <FaAngleRight className="Right_arrow_btn" />
            </div>
          </Link>

          <Link to="/Privacypolicy">
            <div className="Privacy_us_section div_for_profilepagee">
              <MdPrivacyTip className="Privacy_icons iconsforProfilepage " />
              <p className="Privacyfunction Para_profile">Privacy & Policy</p>
              <FaAngleRight className="Right_arrow_btn" />
            </div>
          </Link>

          <div className="Logoutt_us_section div_for_profilepagee">
            <FiLogOut className="Login_icons iconsforProfilepage " />
            <Link to="/Loginpage">
              {Loginstatus ? (
                <p className="Logoutfunction Para_profile">Logout</p>
              ) : (
                <p className="Logoutfunction Para_profile">Login</p>
              )}
            </Link>
          </div>

          <div className="CopyrightsDivv">
            <MdOutlineCopyright className="CopyRightsActIcons" />
            <p className="CopyRightName">Copyrights all reserved by sudhin</p>
          </div>
        </div>
      ) : (
        <div>
          {" "}
          <LoginDirectComponent />{" "}
        </div>
      )}
    </>
  );
}
export default Profilepage;
