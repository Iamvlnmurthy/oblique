import React, { useEffect, useState } from 'react'
import { motion, useSpring, useMotionValue } from 'framer-motion'

const CustomCursor = () => {
    const mouseX = useMotionValue(0)
    const mouseY = useMotionValue(0)
    const [isHovering, setIsHovering] = useState(false)

    const springConfig = { damping: 25, stiffness: 250, mass: 0.5 }
    const x = useSpring(mouseX, springConfig)
    const y = useSpring(mouseY, springConfig)

    useEffect(() => {
        const onMouseMove = (e: MouseEvent) => {
            mouseX.set(e.clientX)
            mouseY.set(e.clientY)
        }

        const onMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement
            const isPointer = window.getComputedStyle(target).cursor === 'pointer' ||
                target.tagName.toLowerCase() === 'a' ||
                target.tagName.toLowerCase() === 'button'
            setIsHovering(isPointer)
        }

        window.addEventListener('mousemove', onMouseMove)
        window.addEventListener('mouseover', onMouseOver)

        return () => {
            window.removeEventListener('mousemove', onMouseMove)
            window.removeEventListener('mouseover', onMouseOver)
        }
    }, [])

    return (
        <>
            <motion.div
                className="custom-cursor hidden md:block"
                style={{
                    left: x,
                    top: y,
                    x: "-50%",
                    y: "-50%",
                    scale: isHovering ? 2.5 : 1,
                    borderColor: isHovering ? '#F94F37' : 'rgba(255,255,255,0.3)',
                    backgroundColor: isHovering ? '#F94F37' : 'transparent',
                    opacity: isHovering ? 0.3 : 1
                }}
            />
            <motion.div
                className="custom-cursor-dot hidden md:block"
                style={{
                    left: mouseX,
                    top: mouseY,
                    x: "-50%",
                    y: "-50%",
                    backgroundColor: '#F94F37'
                }}
            />
        </>
    )
}

export default CustomCursor
