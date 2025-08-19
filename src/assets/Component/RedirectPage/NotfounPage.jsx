import Image from './bill 2.png'
import './NotfoundPage.css'


function NotfoundPage(){
    return(
        <>
        <div className="NotfoundPageSection">
             <img
                src={Image}
                className="NotransactionHave"
                alt=""
              />
              <h2 className="Notransaction_heading">No Transaction</h2> 
        </div>
        
        
        </>
    )
}

export default NotfoundPage;