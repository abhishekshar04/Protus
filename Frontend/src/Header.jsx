import Protus_logo from './assets/Protus_logo.png'
import { Link } from 'react-router-dom';
const Header=()=>{
    return(
        <div className='header_container'>
            <div className='Plogo'>
                <img src={Protus_logo} className='Pimage'/>
            </div>
            <div className='header_items'>
                <ul>
                    <li>Home</li>
                    <li>Tutorial</li>
                    <li>About Us</li>
                    <div className='Account_access'>
                    <Link to="/Login-Signup"><button className='Logo_btn roboto-mono-font'>Login/Sign Up</button></Link>
                    </div>
                </ul>
            </div>
        </div>
    )
}
export default Header;