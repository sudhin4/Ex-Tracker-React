import "../Incomeandexpanse/IncomeCard.css";
import CalenderImage from './CalenderImage.png'
import { Maincontextdata } from "../../../Data/Context";
import { useContext, useEffect } from "react";
import { FaCalendar } from "react-icons/fa";


function IncomeCard() {
  
  const { maindata } = useContext(Maincontextdata);

  useEffect(()=>{
    console.log(maindata,"Incomecard section")
  },[])
  

  return (
    <>
      <div className="Whole_Income_card">
        <div className="Carddd_income">
          <h2 className="Price_Income_heading">₹45,500</h2>
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
  return (
    <>
      <div className="Whole_Income_card">
        <div className="Carddd_income">
          <h2 className="Price_Income_heading Expanses_amount">₹45,500</h2>
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
