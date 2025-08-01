import PhoneImage from "../UpcomingPayment/Phone Image.png";
import '../UpcomingPayment/UpcomingPayment.css'
import { BsThreeDots } from "react-icons/bs";
import Electric from '../UpcomingPayment/Electric city.png'
import { FaPlus } from "react-icons/fa";



function Upcomingpayment() {
  return (
    <>
      <div className="FullUpcomingPayment">
        <div className="Card_"> 
          <div className="FirstImage_section">
            <img src={Electric} alt="" className="Logo_for_upcomingPayment" />
          </div>
          <div className="Heading_payment_Price">
            <h1 className="Title_of_thePayment">Electicity Bill</h1>
            <p className="Price_of_theUPcomponent">₹495.00</p>
            <p className="date_of_up_component">05-05-2025</p>
          </div>
           
        </div>

        <div className="Card_"> 
          <div className="FirstImage_section">
            <img src={Electric} alt="" className="Logo_for_upcomingPayment" />
          </div>
          <div className="Heading_payment_Price">
            <h1 className="Title_of_thePayment">Electicity Bill</h1>
            <p className="Price_of_theUPcomponent">₹495.00</p>
            <p className="date_of_up_component">05-05-2025</p>
          </div>
           
        </div>
        
      </div>
    </>
  );
}
export default Upcomingpayment;
