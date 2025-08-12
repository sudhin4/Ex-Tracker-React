import PleaseLoginImage from './PleaseLoginImage.png';
import './LoginDirectComponent.css'
import { useNavigate } from 'react-router-dom';


function LoginDirectComponent(){
    const Navigate = useNavigate();
    return(
        <>
        <div className="LoginDirect_whole_div">
           <img src={PleaseLoginImage} className='PleaseLoginImage' alt="" />
           <h2 className='PleaseLoginHeading'>You want to login Now..!</h2>
           <button className='Login_btn_redirect_section'onClick={()=>Navigate('/Loginpage')}>Login</button>
        </div>
        </>
    )
}

export default LoginDirectComponent;