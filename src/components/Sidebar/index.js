import "./index.scss"
import LogoN from '../../assets/images/logo-n.png'
import LogoSubtitle from '../../assets/images/logo-sub.png'
import { Link, NavLink } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faEnvelope, faUser } from "@fortawesome/free-solid-svg-icons"
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"



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
                <FontAwesomeIcon icon ={faEnvelope} color="#4d4d4e" />
            </NavLink>
        </nav>
        <ul>
            <li>
                <a 
                target="_black" 
                rel="nonreferrer" 
                href="https://www.linkedin.com/in/nicodemus-bezuayeho-126964287"
                >
                    <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
                </a>
            </li>
            <li>
                <a 
                target="_black" 
                rel="nonreferrer" 
                href="https://github.com/Nico-Bezu"
                >
                    <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
                </a>
            </li>
        </ul>
    </div>
)

export default Sidebar