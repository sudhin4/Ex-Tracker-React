import Electricimage from "../UpcomingPaymentPages/Electric city.png";
import "../UpcomingPaymentPages/UpcomingPayment.css";
import { BsThreeDots } from "react-icons/bs";
import { TbEdit } from "react-icons/tb";
import { MdOutlineDelete } from "react-icons/md";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function UpcomingComponent() {
 const navigate = useNavigate();

  return (
    <>
      <div className="UpcomingcomponentDIvvv" onClick={()=>navigate("/TransactionPage")}>
        <div className="componentfull">
          <div>
            <img
              src={Electricimage}
              className="Imageinupcomingpayment"
              alt=""
            />
          </div>
          <div className="contentDIv">
            <h2 className="Paymentheading">Electric City Bill</h2>
            <h3 className="priceFor_upcomingPayment">₹45000</h3>
            <h2 className="dateinUpcomingpayment">04-04-2004</h2>
          </div>

          
        </div>
      </div>

     
    </>
  );
}



export default UpcomingComponent;
