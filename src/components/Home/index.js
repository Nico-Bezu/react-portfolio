import { Link } from 'react-router-dom'
import LogoN from '../../assets/images/logo-n.png'
import LogoSub from '../../assets/images/logo-n.png'
import './index.scss'

const Home = () => 
{

    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>Hi, <br /> I'm
                Nicodemus 
                <br />
                Student at a top 3 university for CS
                </h1>
                <h2> Software Engineer / Full Stack Developer </h2>
                <Link to="/contact" className="flat-button"> CONTACT ME</Link>
            </div>
        </div>
    )
}

export default Home