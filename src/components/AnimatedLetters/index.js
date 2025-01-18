import './index.scss'

const AnimatedLetters = ({ letterClass, strArray, idx }) => {
    const handleHover = (e) => {
        e.target.style.color = '#000000'  // Change to black on hover
    }

    const handleHoverEnd = (e) => {
        e.target.style.color = '#FFFFFF'  // Reset to white
    }

    return (
        <span>
            {strArray.map((char, i) => (
                <span 
                    key={char + i} 
                    className={`${letterClass} _${i + idx}`}
                    onMouseEnter={handleHover}
                    onMouseLeave={handleHoverEnd}
                >
                    {char}
                </span>
            ))}
        </span>
    )
}

export default AnimatedLetters