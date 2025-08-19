import MainCard from "../../Component/CardFormatMain/MainCard";
import IncomeCard from "../../Component/Incomeandexpanse/IncomeCard";
import "../Home/Home.css";
import { ExpanseCard } from "../../Component/Incomeandexpanse/IncomeCard";
import { FaPlus } from "react-icons/fa6";
import Upcomingpayment from "../../Component/UpcomingPayment/UpcomingPayment";
import { DataInLastTransaction } from "../../Component/Lasttransaction/LastTransaction";
import MenuBar from "../../Component/LeftTaskbar/MenuBar";

import { useState } from "react";
import { Link } from "react-router-dom";
import Newaddbtn_ from "../../Component/NewAddbtn_design/Newaddtn";
import Navbarbtm from "../../Component/NavbarBottom/Navbarbtm";
import { MdOutlineCopyright } from "react-icons/md";
import NotfoundPage from "../../Component/RedirectPage/NotfounPage";

import Dashboard from "../LastTransaction/Dashboard";
import LastTransactionPage from "../LastTransaction/LastTransactionPage";

function Home() {
  return (
    <>
      <div className="Right_Section_div_in_home">
        <div className="Expanse_Details_components_in_homee">
          <div className="FirstComponents_divv">
            <MainCard />
            <div className="income_expanse_dvv">
              <IncomeCard />
              <ExpanseCard />
            </div>
          </div>

          <div className="upcoming_payment_details_div">
            <h1 className="upcomingPayment_heading___">Upcoming Payments</h1>
            <div className="component_upcoming_payment">
              <Upcomingpayment />
            </div>
          </div>

          <div className="LAstTransaction_home_Divvv">
            <div className="LastTransactionHeading_divv">
              <h2 className="LastTransactin_heading">Last Transaction</h2>
            </div>
            <div className="DaTa_component_div">
              <Dashboard />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Home;
