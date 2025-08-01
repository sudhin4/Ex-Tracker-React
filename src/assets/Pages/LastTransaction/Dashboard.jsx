import { DataInLastTransaction } from "../../Component/Lasttransaction/LastTransaction";
import '../LastTransaction/Dashboard.css'
import Filters from '../LastTransaction/settings-sliders.png'




function Dashboard(){
    return (
        <>
        <div className="lastTransaction_page_section">
            <div className="first_heading_filterdivv">
                
                <h1 className="heading_for_lasttransaction__">
                Last Transactions
                </h1> 
            <button className="filter_btnSection">
                <img src={Filters} alt="" className="filtericonsforfilteres" />
                <h2 className="name_Inbutton_filters">Filter</h2>
                
            </button>
            </div>
            

            
        
        <DataInLastTransaction/>    
        <DataInLastTransaction/>    
        <DataInLastTransaction/>    
        <DataInLastTransaction/>    
         
           
        </div>
        </>
    )
}
export default Dashboard;