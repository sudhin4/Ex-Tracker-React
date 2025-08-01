import './whole.css'

function WelcomePage({sendingusername}){

    const username = sendingusername
    
    return(
        <>
        <div className="whole_div_welcome">
            <h1 className='welcome_heading_page'>Welcome To this Page {username}</h1>
        </div>
        </>
    )
}
export default WelcomePage;