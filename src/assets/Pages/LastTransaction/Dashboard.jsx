import { DataInLastTransaction } from "../../Component/Lasttransaction/LastTransaction";
import "../LastTransaction/Dashboard.css";
import Filters from "../LastTransaction/settings-sliders.png";
import axios from "axios";
import { Endpoints } from "../../../Api";
import { gettingImage } from "../../../Data/IncExpdata";
import { useState, useEffect } from "react";
import NotfoundPage from "../../Component/RedirectPage/NotfounPage";

function Dashboard({ gettingid }) {
  const [data, setdata] = useState([]);
  const api = Endpoints.LastTransaction;

  async function apifunction() {
    const response = await axios.get(api, { withCredentials: true });
    console.log(response);
    setdata(response.data.LastTransaction);
  }

  useEffect(() => {
    apifunction();
  }, []);

  return (
    <>
      {data ? (
        <div className="lastTransaction_page_section">
          {data.map((item, index) => (
            <div key={index}>
              <DataInLastTransaction
                gettingidfunction={gettingid}
                id={item._id}
                Name={item.TransactionName}
                Image={gettingImage[item.TransactionName]}
                Date={new Date(item.Date).toLocaleDateString("en-IN")}
                Category={item.Category}
                Amount={item.Amount.toLocaleString("en-IN", {
                  style: "currency",
                  currency: "INR",
                })}
              />
            </div>
          ))}
        </div>
      ) : (
        <div className="NotfoundPageIndashboard">
          <NotfoundPage />
        </div>
        
      )}
    </>
  );
}
export default Dashboard;

export function HeadingLastTransaction() {
  return (
    <>
      <div className="first_heading_filterdivv">
        <h1 className="heading_for_lasttransaction__">Last Transactions</h1>
        <button className="filter_btnSection">
          <img src={Filters} alt="" className="filtericonsforfilteres" />
          <h2 className="name_Inbutton_filters">Filter</h2>
        </button>
      </div>
    </>
  );
}
