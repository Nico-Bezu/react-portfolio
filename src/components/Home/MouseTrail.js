import { useEffect } from 'react'

const MouseTrail = () => {
    useEffect(() => {
        const dots = []
        const mouse = { x: 0, y: 0 }

        for (let i = 0; i < 20; i++) {
            const dot = document.createElement('div')
            dot.className = 'trail-dot'
            document.body.appendChild(dot)
            dots.push(dot)
        }

        window.addEventListener('mousemove', (e) => {
            mouse.x = e.clientX
            mouse.y = e.clientY
        })

        function animate() {
            let x = mouse.x
            let y = mouse.y

            dots.forEach((dot, index) => {
                const nextDot = dots[index + 1] || dots[0]
                x += (nextDot.offsetLeft - x) * 0.5
                y += (nextDot.offsetTop - y) * 0.5

                dot.style.left = x + 'px'
                dot.style.top = y + 'px'
            })
            requestAnimationFrame(animate)
        }
        animate()
    }, [])

    return null
}

export default MouseTrail 