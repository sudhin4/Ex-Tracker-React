import Header from "./assets/Component/Header/Header";
import Home from "./assets/Pages/Home/Home";
import "../src/App.css";
import MenuBar from "./assets/Component/LeftTaskbar/MenuBar";
import Dashboard from "./assets/Pages/LastTransaction/Dashboard";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import { ExpanseImage } from "./Data/IncExpdata";
import { useState, useContext, useEffect } from "react";
import { Datacontext } from "./Data/Context";
import Newaddbtn_ from "./assets/Component/NewAddbtn_design/Newaddtn";
import { Maincontextdata } from "./Data/Context";
import Navbarbtm from "./assets/Component/NavbarBottom/Navbarbtm";
import Profilepage from "./assets/Pages/Profile/Profile";
import UpcomingPaymentPage from "./assets/Pages/UpcomingPaymentPages/UpcomingPayment";
import LoginPage from "./assets/Pages/Login/Loginnew";
import PrivacyPolicy from "./assets/Pages/Profile/InsideProfile/Privacypolicy";
import InformationPage from "./assets/Pages/Profile/InsideProfile/Information/Information";
import TransactionInside from "./assets/Component/TransactionInside/TransactionInside";
import ContactPage from "./assets/Pages/Profile/InsideProfile/Contact/ContactPage";

function App() {
  const [userdata, setuserdata] = useState([]);

  function getdatafromnewaddbtn(value) {
    setuserdata(value);
  }

  return (
    <>
      <Maincontextdata value={{ maindata: userdata }}>
        <Router>
          <div className="WHole_app_div">
            <Header />
            <div className="MenuBar_othercompContDiv">
              <div className="Left_MenuBar_section_IN_home">
                {/* <MenuBar /> */}
              </div>

              <div className="Navbarbtom232m">
                <Navbarbtm />
              </div>

              <Routes>
                <Route
                  path="/"
                  element={
                    <div className="Right_section_pages">
                      <Home />
                    </div>
                  }
                />
                <Route
                  path="/Lasttransaction"
                  element={
                    <div className="Dashboard_APp_section">
                      <Dashboard />
                    </div>
                  }
                />
                <Route
                  path="/AddincomeorExpansepage"
                  element={
                    <div className="newbtnsection">
                      <div className="component_of_theaddbtn">
                        <Newaddbtn_ getuserdata={getdatafromnewaddbtn} />
                      </div>
                    </div>
                  }
                />
                <Route path="/$Transaction&History@" element={<Dashboard />} />
                <Route path="/&Userprofile" element={<Profilepage/>} />
                <Route path="/Upcomingpayment&" element={<UpcomingPaymentPage/>}/>
                <Route path="/Loginpage" element={<LoginPage/>}/>
                <Route path="/Privacypolicy" element={<PrivacyPolicy/>}/>
                <Route path="/InformationPage" element={<InformationPage/>}/>
                <Route path="/TransactionPage" element={<TransactionInside/>}/>
                <Route path="/Contactpage" element={<ContactPage/>}/>
              </Routes>
              
            </div>
          </div>
        </Router>
      </Maincontextdata>
    </>
  );
}
export default App;
