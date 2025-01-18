import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import Logo from './Logo'  

const Home = () => 
{
    const [letterClass, setLetterClass] = useState('text-animate')
    const hiArray = ['H', 'i', ',']
    const imArray = ['I', "'", 'm']
    const nameArray = ['N', 'i', 'c', 'o', 'd', 'e', 'm', 'u', 's']
    const studentArray = ['S', 't', 'u', 'd', 'e', 'n', 't']

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
        
        return () => clearTimeout(timeoutId)
    }, [])

    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                    <AnimatedLetters 
                        letterClass={letterClass}
                        strArray={hiArray}
                        idx={1}
                    />
                    <br />
                    <AnimatedLetters
                        letterClass={letterClass} 
                        strArray={imArray}
                        idx={4}
                    />
                    &nbsp;
                    <AnimatedLetters 
                        letterClass={letterClass}
                        strArray={nameArray}
                        idx={7}
                    />
                    <br />
                    <AnimatedLetters 
                        letterClass={letterClass}
                        strArray={studentArray}
                        idx={16}
                    />
                </h1>
                <h2 className="tagline">
                    {['Innovate.', 'Create.', 'Develop.'].map((word, i) => (
                        <span key={i} className={`word-${i}`}>{word}</span>
                    ))}
                </h2>
                <Link to="/contact" className="flat-button">CONTACT ME</Link>
            </div>
            <Logo />
            <div className="bg-animation">
                {[...Array(50)].map((_, i) => (
                    <div key={i} className="light-particle" />
                ))}
            </div>
        </div>
    )
}

const TechStack = () => (
    <div className="tech-stack">
        <div className="scroll-container">
            {['JavaScript', 'React', 'Node.js', 'Python', 'SQL', 'AWS'].map((tech, i) => (
                <span key={i} className="tech-item">{tech}</span>
            ))}
        </div>
    </div>
)

export default Home