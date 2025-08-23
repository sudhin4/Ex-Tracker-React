import "../Incomeandexpanse/IncomeCard.css";
import CalenderImage from './CalenderImage.png'
import { Islogin, Maincontextdata } from "../../../Data/Context";
import { useContext, useEffect, useState } from "react";
import { FaCalendar } from "react-icons/fa";
import { Endpoints } from "../../../Api";
import axios from "axios";


function IncomeCard() {
  const {getincometotal} = useContext(Islogin)
  const [isincomevalue,setincomevalue] = useState()
  
  const { maindata } = useContext(Maincontextdata);

  useEffect(()=>{
    console.log(maindata,"Incomecard section")
  },[]);

  const api = Endpoints.Totalbalance;

  async function gettingvalue(){
    const response = await axios.get(api,{withCredentials:true});
    setincomevalue(response.data.Incomevalue);
    getincometotal(response.data.Incomevalue)
  }

  useEffect(()=>{
    gettingvalue();
  },[])
  

  return (
    <>
      <div className="Whole_Income_card">
        <div className="Carddd_income">
          <h2 className="Price_Income_heading">₹{isincomevalue? isincomevalue.toLocaleString("en-IN") :"0"}</h2>
          <h4 className="Income_heading_section Income_headdd">Income</h4>
          <div className="calender_imagediv">
            <FaCalendar className="calenderIMage_section" />
            <h4 className="Todayexpanse_heading Income">This Month</h4>
          </div>
          
        </div>
      </div>
    </>
  );
}
export default IncomeCard;

export function ExpanseCard() {
const  {  getexpansetotal } = useContext(Islogin)
  const [isexpansevalue,setexpansevalue] = useState()

  const api = Endpoints.Totalbalance
  async function gettingvalue(){
    const response = await axios.get(api,{withCredentials:true});
    setexpansevalue(response.data.Expansevalue);
    getexpansetotal(response.data.Expansevalue)
  }

  useEffect(()=>{
    gettingvalue();
  },[])
  return (
    <>
      <div className="Whole_Income_card">
        <div className="Carddd_income">
          <h2 className="Price_Income_heading Expanses_amount">₹{isexpansevalue ?  isexpansevalue.toLocaleString('en-IN'):'0'}</h2>
          <h4 className="Income_heading_section">Expanse</h4>
          <div className="calender_imagediv">
            <FaCalendar  className="calenderIMage_section" />
            <h4 className="Todayexpanse_heading Income">This Month</h4>
          </div>
        </div>
      </div>
    </>
  );
}
