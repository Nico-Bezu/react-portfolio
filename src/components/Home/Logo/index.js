import { useEffect, useRef } from 'react'
import gsap from 'gsap-trial'
import DrawSVGPlugin from 'gsap-trial/DrawSVGPlugin'
import logolinesn from '../../../assets/images/logo-lines-n.png'
import './index.scss'

const Logo = () => {

    const bgRef = useRef();
    const outlineLogoRef = useRef();
    const solidLogoRef = useRef();

    useEffect(() => {
        gsap.registerPlugin(DrawSVGPlugin)
    
        gsap
          .timeline()
          .to(bgRef.current, {
            duration: 1,
            opacity: 1,
          })
          .from(outlineLogoRef.current, {
            drawSVG: 0,
            duration: 20,
          })
    
        gsap.fromTo(
          solidLogoRef.current,
          {
            opacity: 0,
          },
          {
            opacity: 1,
            delay: 4,
            duration: 4,
          }
        )
      }, [])


return (
    <div className='logo-container' ref={bgRef}>
        <img ref={solidLogoRef} className='solid-logo' src={logolinesn} alt='N'/>
        <svg
        width="559pt"
        height="897pt"
        version="1.0"
        viewBox="0 0 559 897"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g
          className="svg-container"
          transform="translate(0 457) scale(.1 -.1)"
          fill="none"
        >
            <path ref={outlineLogoRef} ></path>
        </g>
      </svg>
    </div>
)
}

export default Logo