import { HiOutlineHome } from "react-icons/hi";
import { FaUser } from "react-icons/fa6";

import "../NavbarBottom/Navbarbtm.css";

import { FaChartPie } from "react-icons/fa";

//clicked icons
import { HiHome } from "react-icons/hi2";
import { RiCalendarScheduleFill } from "react-icons/ri";
import { LuArrowDownUp } from "react-icons/lu";
import { LuUserRound } from "react-icons/lu";
import { IoIosAddCircleOutline } from "react-icons/io";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IoCalendarNumber } from "react-icons/io5";

function Navbarbtm() {
  const [isclickedbutton, setclickedbutton] = useState("Home");

  return (
    <>
      <div className="whole_navbarsection__">
        <div className="navbarbtmSection______">
          <Link to="/">
            <div
              className="HOme_Divvv234"
              onClick={() => setclickedbutton("Home")}
            >
              {isclickedbutton === "Home" ? (
                <HiHome className="footernavbaricons Homeicons" />
              ) : (
                <HiOutlineHome className="footernavbaricons Homeicons" />
              )}

              <p className="Paragraph_bottom">Home</p>
            </div>
          </Link>

          <Link to="/Upcomingpayment&">
            <div
              className="HOme_Divvv234"
              onClick={() => setclickedbutton("Upcoming")}
            >
              {isclickedbutton === "Upcoming" ? (
                <FaChartPie className="footernavbaricons Homeicons" />
              ) : (
                <FaChartPie className=" UpcomingIcons imageIconss" />
              )}

              <p className="Paragraph_bottom">Dashboard</p>
            </div>
          </Link>

          <Link to="/AddincomeorExpansepage">
            <div
              className="HOme_Divvv234"
              onClick={() => setclickedbutton("Upcoming")}
            >
              <IoIosAddCircleOutline className="footernavbaricons Homeicons" />

              <p className="Paragraph_bottom">Add</p>
            </div>
          </Link>

          <Link to="/$Transaction&History@">
            <div
              className="HOme_Divvv234"
              onClick={() => setclickedbutton("Last")}
            >
              {isclickedbutton === "Last" ? (
                <LuArrowDownUp className="footernavbaricons Homeicons" />
              ) : (
                <LuArrowDownUp className=" TransactionIcons imageIconss" />
              )}

              <p className="Paragraph_bottom">History</p>
            </div>
          </Link>

          <Link to="/&Userprofile">
            <div
              className="HOme_Divvv234"
              onClick={() => setclickedbutton("Profile")}
            >
              {isclickedbutton === "Profile" ? (
                <FaUser className="footernavbaricons User" />
              ) : (
                <LuUserRound className="footernavbaricons User" />
              )}

              <p className="Paragraph_bottom">Profile</p>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
export default Navbarbtm;
