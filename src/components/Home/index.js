import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'

const Home = () => 
{
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = [' ', 'N', 'i', 'c','o','d','e','m','u','s']
    const studentArray = ['S','t','u','d','e','n','t']

    useEffect(() => {
        const timerId = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 4000);
    
        return () => clearTimeout(timerId);
    }, []);
    

    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                    <span className={letterClass}>H</span> 
                    <span className={`${letterClass} _12`}>i,</span> 
                    <br />
                    <span className={`${letterClass} _13`}>I</span> 
                    <span className={`${letterClass} _14`}>'m</span> 
                <AnimatedLetters letterClass={letterClass}
                strArray = {nameArray}
                idx = {15} />
                <br />
                <AnimatedLetters letterClass={letterClass}
                strArray = {studentArray}
                idx = {22} />
                </h1>
                <h2> Software Engineer / Full Stack Developer </h2>
                <Link to="/contact" className="flat-button"> CONTACT ME</Link>
            </div>
        </div>
    )
}

export default Home