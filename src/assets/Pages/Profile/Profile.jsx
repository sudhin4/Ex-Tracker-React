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
import { Endpoints } from "../../../Api";
import axios from "axios";
import Addimage from '../Profile/add.png';

function Profilepage() {

  const [islogn, setlogin] = useState();
  const [username,setusername] = useState();
  const api = Endpoints.Islogin;

  async function checkingLogin() {
    const response = await axios.get(api, {
      withCredentials: true,
    });
    setlogin(response.data.success)
    setusername(response.data.userdata)
    console.log(response,"This is from profile")
    
  }
  console.log(islogn)

  useEffect(() => {checkingLogin()}, []);

  // logoutsection 
  const logoutapi = Endpoints.Logoutsection;

   async function Logoutfunction(){
      const response = await axios.get(logoutapi,{withCredentials:true})
      console.log(response,"Logoutsection")
      
    useEffect(()=>{

      },[])
  }

  const [preview,setpreview] = useState()

  const handlegetimage=(e)=>{
    const file = e.target.files[0]
    if(file){
      setpreview(URL.createObjectURL(file));
     
    }
  }

   console.log(preview,"The image seection")


 

  

  return (
    <>
      {islogn ? (
        <div className="Full_Profile_pagee">
          <div className="Username_profile_image ">
            <div>
              <input type="file" accept="/images*" onChange={handlegetimage} id="inputfilemethod" />
             <label htmlFor="inputfilemethod">
              <img src={Addimage} className="addimageforProfile" alt="" />
             </label>
              
            </div>
            
            {preview? <img src={preview} alt="" className="UserprofileImage" /> :<FaUserCircle className="usericons " /> }

            
            <p className="username_section ">Username</p>
            <p className="username_section emailusernamesection">{username}</p>
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
            
              {islogn ? (
                <p className="Logoutfunction Para_profile" onClick={()=>Logoutfunction()}>Logout</p>
              ) : (
                <p className="Logoutfunction Para_profile">Login</p>
              )}
            
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
