import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './assets/Pages/Home/Home.jsx'
import Charts from './assets/Component/DashboardCharts/Charts.jsx'
import Dashboard from './assets/Pages/LastTransaction/Dashboard.jsx'

import { Typelist } from './assets/Component/TypeList/TypeList.jsx'
import Choosetypelist from './assets/Component/TypeList/TypelistMapfull.jsx'
import Newaddbtn_ from './assets/Component/NewAddbtn_design/Newaddtn.jsx'

import TypelistmapFull from './assets/Component/TypeList/TypelistMapfull.jsx'
import CategoryDropdown, { CategoryDropdowncontent } from './assets/Component/Categorydropdown/CategoryDropdown.jsx'
import Navbarbtm from './assets/Component/NavbarBottom/Navbarbtm.jsx'
import Profilepage from './assets/Pages/Profile/Profile.jsx'
import UpcomingPayment from './assets/Pages/UpcomingPaymentPages/UpcomingPayment.jsx'
import UpcomingPaymentPage from './assets/Pages/UpcomingPaymentPages/UpcomingPayment.jsx'
import UpcomingComponent from './assets/Pages/UpcomingPaymentPages/UpcomingComponent.jsx'
import LoginPage from './assets/Pages/Login/Loginnew.jsx'
import Singup from './assets/Pages/Login/Signup.jsx'
import PrivacyPolicy from './assets/Pages/Profile/InsideProfile/Privacypolicy.jsx'
import ContactPage from './assets/Pages/Profile/InsideProfile/Contact/ContactPage.jsx'

import TransactionInside from './assets/Component/TransactionInside/TransactionInside.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>
  </StrictMode>,
)
