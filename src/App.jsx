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
import { Islogin } from "./Data/Context";
import Singup from "./assets/Pages/Login/Signup";
import { Endpoints } from "./Api";
import axios from "axios";
import Loadinganimation from "./assets/Component/LoadingPage/LodingPage";
import SuccessAnimation from "./assets/Pages/SuccessAnimation/SuccessAnimation";
import Erroranimation from "./assets/Component/ErrorAnimation/ErrorAnimationcomp";
import { IoEllipseSharp } from "react-icons/io5";
import DesktopFrontPage from "./assets/Pages/DesktopFrontPage/DesktopFrontPage";

import Addedsuccess from "../src/assets/Component/successadded/SuccessAdded";

function App() {
  const [userdata, setuserdata] = useState([]);
  const [islogin, setlogin] = useState();
  const [isusername, setusername] = useState();
  const [loading, setloading] = useState(true);
  const [iserror, seterror] = useState(false);
  const [isloginorsignup,setloginorsignup] = useState()

  function getdatafromnewaddbtn(value) {
    setuserdata(value);
  }
  const api = Endpoints.Islogin;

  async function checkingfunction() {
    try {
      
      setloading(true);
      const response = await axios.get(api, { withCredentials: true });
      
      const loginstatus = response.data.success;
    
     
      setusername(response.data.userdata);
      setlogin(loginstatus);
      
    } catch (error) {
      if(error.message="Network Error"){
        seterror(true);
      }
      
    } finally {
      setTimeout(() => {
        setloading(false);
      }, 2000);
    }
  }

  useEffect(() => {
    checkingfunction();
  }, []);

  useEffect(() => {
    // check if already refreshed
    const hasRefreshed = sessionStorage.getItem("hasRefreshed");

    if (!hasRefreshed) {
      sessionStorage.setItem("hasRefreshed", "true");
      window.location.reload(); // refresh once
    }
  }, []);

  const [idvalue, setidvalue] = useState();

  function gettingidfromlasttransaction(value) {
    setidvalue(value);
  }

  const [ischarttotal, setcharttotal] = useState();
  const [isincomevalue, setincomevalue] = useState();
  const [isexpansevalue, setexpansevalue] = useState();


  // is pwa section

  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [isshowInstallBtn, setShowInstallBtn] = useState(false);
  useEffect(() => {
    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault();  
      setDeferredPrompt(e); 
      setShowInstallBtn(true); 
    });
  }, []);
  function handleInstallClick () {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('App installed');
        } else {
          console.log('App installation rejected');
             }
        setDeferredPrompt(null);
        setShowInstallBtn(false);
      });
    }
  };

  return (
    <>
    {iserror ?<Erroranimation/> : <>{loading ? (
        <Loadinganimation />
      ) : ( !isshowInstallBtn ? <DesktopFrontPage installbtn={handleInstallClick} />:(<Islogin.Provider
          value={{
            Loginstatus: islogin,
            Username: isusername,
            gettotal: setcharttotal,
            getincometotal: setincomevalue,
            getexpansetotal: setexpansevalue,
            totalvalue: ischarttotal,
            incometotalvalue: isincomevalue,
            expansetotalvalue: isexpansevalue,
            isloginorsignupcontext:setloginorsignup,
          }}
        >
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
                    <Route
                      path="/$Transaction&History@"
                      element={
                        <Dashboard gettingid={gettingidfromlasttransaction} />
                      }
                    />
                    <Route path="/&Userprofile" element={<Profilepage />} />
                    <Route
                      path="/Upcomingpayment&"
                      element={<UpcomingPaymentPage />}
                    />
                    <Route path="/Loginpage" element={<LoginPage  />} />
                    <Route path="/Signuppage" element={<Singup />} />
                    <Route path="/Privacypolicy" element={<PrivacyPolicy />} />
                    <Route
                      path="/InformationPage"
                      element={<InformationPage />}
                    />
                    <Route
                      path="/TransactionPage"
                      element={<TransactionInside idvaluefunction={idvalue} />}
                    />
                    <Route path="/Contactpage" element={<ContactPage />} />
                    <Route path="/sucesslogin" element={<SuccessAnimation name={isloginorsignup} />} />
                    <Route path="/SuccessAdded" element={<Addedsuccess/>} />
                  </Routes>
                </div>
              </div>
            </Router>
          </Maincontextdata>
        </Islogin.Provider>) )
        
      }</>}
      
    </>
  );
}
export default App;
