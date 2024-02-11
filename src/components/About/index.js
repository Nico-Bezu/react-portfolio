import 'index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    useEffect(() => {
        const timerId = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 4000);
    
        return () => clearTimeout(timerId);
    }, []);
    <div className='container about-page'>
        <div className='text-zone'>
            <h1>
                <AnimatedLetters
                strArray={['A','b','o','u','t', ' ', 'm','e']}
                idx={15}
                />
            </h1>
            <p>
            I am an undergraduate student at the University of California, Berkeley, pursuing a degree in Computer Science. I am passionate about this field and am looking for internship opportunities to enhance my abilities as a computer scientist. My academic coursework and projects have equipped me with the skills to have a substantial impact on my team and be a valuable asset to an employer.
            </p>
        </div>
    </div>
}

export default About