import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import logo from '../assets/logo-dark.png'

const Preloader = ({ onComplete }: { onComplete: () => void }) => {
    const [counter, setCounter] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCounter((prev) => {
                if (prev >= 100) {
                    clearInterval(interval)
                    setTimeout(onComplete, 800)
                    return 100
                }
                return prev + 1
            })
        }, 20)
        return () => clearInterval(interval)
    }, [onComplete])

    return (
        <motion.div
            initial={{ y: 0 }}
            exit={{ y: '-100%' }}
            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[10000] bg-brand-black flex flex-col items-center justify-center"
        >
            <div className="relative flex flex-col items-center gap-12">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    <img src={logo} alt="Oblique Media" className="h-20 lg:h-32 w-auto object-contain brightness-0 invert" />
                </motion.div>

                <div className="relative h-48 lg:h-64 flex items-center justify-center w-full">
                    <motion.span
                        className="text-8xl lg:text-[15rem] font-heading font-bold text-brand-orange/5 select-none pointer-events-none absolute"
                    >
                        {counter}%
                    </motion.span>
                    <div className="absolute bottom-0 w-64 h-[1px] bg-white/10">
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${counter}%` }}
                            className="h-full bg-brand-orange shadow-[0_0_20px_rgba(249,79,55,0.5)]"
                        />
                    </div>
                </div>

                <div className="flex flex-col items-center gap-2">
                    <span className="text-[10px] uppercase tracking-[0.4em] text-brand-orange font-bold animate-pulse">
                        Initializing Experience
                    </span>
                    <div className="flex gap-4 text-white/20 text-[10px] uppercase tracking-widest font-mono">
                        <span>Strategy</span>
                        <span>✦</span>
                        <span>Design</span>
                        <span>✦</span>
                        <span>Motion</span>
                    </div>
                </div>
            </div>

            {/* Background Decorative Grid */}
            <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat" />
            <div className="absolute inset-0 bg-gradient-to-b from-brand-black via-transparent to-brand-black opacity-60" />
        </motion.div>
    )
}

export default Preloader
