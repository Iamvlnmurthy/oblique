import React from 'react'
import { motion } from 'framer-motion'

interface MarqueeProps {
    children: React.ReactNode
    direction?: 'left' | 'right'
    speed?: number
    className?: string
}

const Marquee = ({ children, direction = 'left', speed = 20, className = "" }: MarqueeProps) => {
    return (
        <div className={`flex overflow-hidden whitespace-nowrap ${className}`}>
            <motion.div
                initial={{ x: direction === 'left' ? 0 : '-50%' }}
                animate={{ x: direction === 'left' ? '-50%' : 0 }}
                transition={{ duration: speed, repeat: Infinity, ease: "linear" }}
                className="flex shrink-0"
            >
                <div className="flex px-4">{children}</div>
                <div className="flex px-4">{children}</div>
            </motion.div>
        </div>
    )
}

export default Marquee
