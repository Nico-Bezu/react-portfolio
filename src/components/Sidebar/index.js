import "./index.scss"
import LogoN from '../../assets/images/logo-n.jpeg' 
import LogoSubtitle from '../../assets/images/logo-subtitle.png'
import { NavLink } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHome } from "@fortawesome/free-solid-svg-icons"

const Sidebar = () => (
    <div className='nav-bar'>
        <Link className = 'logo' to='/'>
            <img src = {LogoN} alt='logo' />
            <img className = 'sub-logo' src = {LogoSubtitle} alt='Nicodemus' />
        </Link>
        <nav>
            <NavLink exact ="true" activeclassname ="active" to ="/">
                <FontAwesomeIcon icon ={faHome} color="#4d4d4e" />
            </NavLink>
            <NavLink exact ='true' activeclassname ='active' className='about-link' to ='/about'>
                <FontAwesomeIcon icon ={faUser} color="#4d4d4e" />
            </NavLink>
            <NavLink exact ='true' activeclassname ='active' className ='contact-link' to ='/contact'>
                <FontAwesomeIcon icon ={faHome} color="#4d4d4e" />
            </NavLink>
        </nav>
    </div>
)

export default Sidebar