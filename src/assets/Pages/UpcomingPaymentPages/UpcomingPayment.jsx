import { FaPlus } from "react-icons/fa6";
import "../UpcomingPaymentPages/UpcomingPayment.css";
import UpcomingpaymentImage from '../UpcomingPaymentPages/monthly-bill.png'
import UpcomingpaymentImage1 from '../UpcomingPaymentPages/Monnn.png'
import Upcomingpayment from "../../Component/UpcomingPayment/UpcomingPayment";
import UpcomingComponent from "./UpcomingComponent";
import FullchartSection from "../../Component/ChartSection/FullchartSection";
import { useEffect, useState } from "react";
import NotfoundPage from "../../Component/RedirectPage/NotfounPage";
import { Endpoints } from "../../../Api";

function UpcomingPaymentPage() {


  


  return (
    <>
      <div className="UpcomingPaymentPageDIvv">
         <FullchartSection />
        
        
        
      </div>
    </>
  );
}
export default UpcomingPaymentPage;
