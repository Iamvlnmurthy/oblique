import React, { useRef, useState } from 'react'
import { motion, useSpring, useMotionValue } from 'framer-motion'

export default function Magnetic({ children }: { children: React.ReactNode }) {
    const ref = useRef<HTMLDivElement>(null)
    const [isHovered, setIsHovered] = useState(false)

    const mouseX = useMotionValue(0)
    const mouseY = useMotionValue(0)

    const springConfig = { damping: 15, stiffness: 150, mass: 0.1 }
    const x = useSpring(mouseX, springConfig)
    const y = useSpring(mouseY, springConfig)

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!ref.current) return
        const { clientX, clientY } = e
        const { height, width, left, top } = ref.current.getBoundingClientRect()
        const middleX = clientX - (left + width / 2)
        const middleY = clientY - (top + height / 2)

        // Intensity of the magnetic pull
        mouseX.set(middleX * 0.35)
        mouseY.set(middleY * 0.35)
    }

    const reset = () => {
        mouseX.set(0)
        mouseY.set(0)
        setIsHovered(false)
    }

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={reset}
            style={{ x, y }}
            className="flex items-center justify-center"
        >
            {children}
        </motion.div>
    )
}
