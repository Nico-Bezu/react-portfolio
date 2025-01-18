import { useEffect, useRef } from 'react'
import gsap from 'gsap-trial'
import logolinesn from '../../../assets/images/logo-lines-n.png'
import './index.scss'

const Logo = () => {
    const bgRef = useRef()
    const outlineLogoRef = useRef()
    const solidLogoRef = useRef()

    useEffect(() => {
        const tl = gsap.timeline()
        
        tl.to(bgRef.current, {
            duration: 1,
            opacity: 1,
        })
        .to(outlineLogoRef.current, {
            strokeDashoffset: 0,
            duration: 4,
            ease: "power1.inOut",
        })
        .to(outlineLogoRef.current, {
            duration: 1,
            opacity: 0,
            ease: "power2.inOut"
        })

        gsap.fromTo(
            solidLogoRef.current,
            {
                opacity: 0,
            },
            {
                opacity: 1,
                delay: 4,
                duration: 1,
                ease: "power2.inOut"
            }
        )
    }, [])

    return (
        <div className="logo-container" ref={bgRef}>
            <img
                className="solid-logo"
                ref={solidLogoRef}
                src={logolinesn}
                alt="N"
            />
            <svg
                width="700"
                height="800"
                viewBox="0 0 700 800"
                xmlns="http://www.w3.org/2000/svg"
            >
                <g className="svg-container" fill="none">
                    <path
                        ref={outlineLogoRef}
                        d="M100 500V100c0-10 5-20 15-20h35l200 300V100c0-10 5-20 15-20h35
                        c10 0 15 10 15 20v400c0 10-5 20-15 20h-35L165 220v280c0 10-5 20-15 20h-35
                        c-10 0-15-10-15-20z
                        M80 80v420c0 20 10 40 35 40h35c25 0 35-20 35-40V280l160 240h35
                        c25 0 35-20 35-40V80c0-20-10-40-35-40h-35c-25 0-35 20-35 40v280L150 120h-35
                        c-25 0-35 20-35 40z
                        M80 80h70M335 80h70M405 80v40"
                        strokeWidth="2"
                        stroke="#000000"
                        className="svg-path"
                    />
                </g>
            </svg>
        </div>
    )
}

export default Logo