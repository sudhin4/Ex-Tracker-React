import { DataInLastTransaction } from "../../Component/Lasttransaction/LastTransaction";
import "../LastTransaction/Dashboard.css";
import Filters from "../LastTransaction/settings-sliders.png";
import axios from "axios";
import { Endpoints } from "../../../Api";
import { gettingImage } from "../../../Data/IncExpdata";
import { useState, useEffect } from "react";
import NotfoundPage from "../../Component/RedirectPage/NotfounPage";
import Loadinganimation from "../../Component/LoadingPage/LodingPage";

function Dashboard({ gettingid }) {
  const [data, setdata] = useState([]);
  const [loading, setloading] = useState(true);
  const api = Endpoints.LastTransaction;

  async function apifunction() {
    try {
      setloading(true);
      const response = await axios.get(api, { withCredentials: true });
      console.log(response);
      setdata(response.data.LastTransaction);
    } catch (error) {
      console.log(error);
    } finally {
      setTimeout(() => {
        setloading(false);
      }, 100);
      
    }
  }

  useEffect(() => {
    apifunction();
  }, []);

  return (
    <>
      {loading ? (
        <Loadinganimation />
      ) : (
        <div>
          {data? (
            <div className="lastTransaction_page_section">
              {data.map((item, index) => (
                <div key={index}>
                  <DataInLastTransaction
                    gettingidfunction={gettingid}
                    id={item._id}
                    Name={item.TransactionName}
                    Image={gettingImage[item.TransactionName]}
                    Date={item.Date}
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
