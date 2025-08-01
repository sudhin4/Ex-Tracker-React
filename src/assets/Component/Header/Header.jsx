import { GoBell } from "react-icons/go";
import '../Header/Header.css'


function Header(){
    return (
        <>
        <div className="WHole_header_div">
            <div className="Logo_and_siteName">
                <h1 className="NAmeSite">Ex-Tracker</h1>
            </div>
            <div className="Icon_On_header">
            <GoBell className="Icon_logo_bellIcon"/>
            </div>
        </div>
        </>
    )
}
export default Header;