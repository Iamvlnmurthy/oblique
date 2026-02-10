import React, { useRef, useEffect } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import Marquee from './Marquee'
import Showcase3D from './Showcase3D'
import gsap from 'gsap'
import Magnetic from './Magnetic'

const FloatingBadge = ({ children, className, delay = 0 }: { children: React.ReactNode, className?: string, delay?: number }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
                type: "spring",
                stiffness: 100,
                damping: 20,
                delay
            }}
            whileHover={{
                scale: 1.1,
                y: -10,
                transition: { type: "spring", stiffness: 400, damping: 10 }
            }}
            className={`glass px-6 py-4 rounded-2xl flex items-center justify-center pointer-events-auto cursor-pointer shadow-xl backdrop-blur-2xl border border-white/10 group ${className}`}
        >
            {children}
            <div className="absolute inset-0 bg-brand-orange/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
        </motion.div>
    )
}

const Hero = () => {
    const containerRef = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    })

    const y = useTransform(scrollYProgress, [0, 1], [0, -200])
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
    const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9])

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".hero-line", {
                y: 100,
                opacity: 0,
                duration: 1.2,
                stagger: 0.15,
                ease: "power4.out"
            })
        }, containerRef)

        return () => ctx.revert()
    }, [])

    return (
        <section ref={containerRef} className="relative min-h-[120vh] pt-40 pb-0 overflow-hidden flex flex-col items-center bg-brand-black">
            {/* Background Atmosphere */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[100vw] h-[100vh] bg-[radial-gradient(circle_at_center,_rgba(249,79,55,0.05)_0%,_transparent_70%)] pointer-events-none" />

            {/* Marquees */}
            <div className="absolute top-24 left-0 w-full opacity-10 pointer-events-none">
                <Marquee speed={25} className="text-brand-orange text-5xl lg:text-9xl font-heading font-bold uppercase tracking-tightest py-4">
                    EMOTION — MOTION — CLARITY — GROWTH — EMOTION — MOTION — CLARITY — GROWTH —
                </Marquee>
                <Marquee speed={35} direction="right" className="text-white text-5xl lg:text-9xl font-heading font-bold uppercase tracking-tightest py-4">
                    OBLIQUE MEDIA — BEYOND DIGITAL — OBLIQUE MEDIA — BEYOND DIGITAL —
                </Marquee>
            </div>

            <motion.div
                style={{ y, opacity, scale }}
                className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center mt-20"
            >
                <div className="overflow-hidden mb-6">
                    <span className="hero-line block text-xs lg:text-sm uppercase tracking-[0.4em] text-brand-orange font-bold">
                        Digital Marketing Agency + Creative Storytelling
                    </span>
                </div>

                <h1 className="hero-line text-[clamp(3.5rem,12vw,10rem)] font-heading font-bold leading-[0.9] tracking-tightest mb-10">
                    Out-think the <br />
                    <span className="text-brand-orange">Algorithm.</span>
                </h1>

                <div className="overflow-hidden max-w-2xl mb-12">
                    <p className="hero-line text-lg lg:text-xl text-white/60 leading-relaxed">
                        We help brands grow with clarity, creativity, and measurable growth.
                        Transforming digital presence through motion and strategy.
                    </p>
                </div>

                <div className="hero-line flex flex-col sm:flex-row gap-8 mt-4">
                    <Magnetic>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-12 py-6 bg-brand-orange text-white rounded-2xl font-bold transition-shadow hover:shadow-[0_20px_60px_rgba(249,79,55,0.4)] text-lg"
                        >
                            Explore Case Studies
                        </motion.button>
                    </Magnetic>
                    <Magnetic>
                        <motion.button
                            whileHover={{ backgroundColor: "rgba(255,255,255,0.1)" }}
                            whileTap={{ scale: 0.95 }}
                            className="px-12 py-6 border border-white/20 text-white rounded-2xl font-bold backdrop-blur-sm text-lg"
                        >
                            Start a Project
                        </motion.button>
                    </Magnetic>
                </div>

                {/* 3D Showcase Container */}
                <div className="relative mt-16 lg:mt-24 w-full max-w-7xl group h-[400px] sm:h-[600px] lg:h-[850px]">
                    <div className="absolute inset-0 z-0">
                        <Showcase3D />
                    </div>

                    {/* Interactive Floating UI elements */}
                    <div className="absolute inset-0 z-20 pointer-events-none h-full scale-[0.8] lg:scale-100">
                        {/* Top Right: Status */}
                        <div className="absolute top-0 lg:top-20 right-0 lg:-right-10 pointer-events-auto origin-right">
                            <FloatingBadge delay={0.8} className="scale-90 lg:scale-100">
                                <div className="flex flex-col items-end">
                                    <span className="text-[10px] text-brand-orange font-bold tracking-widest uppercase mb-1">Live Results</span>
                                    <span className="text-xl lg:text-2xl font-heading font-bold">4.8x ROAS</span>
                                </div>
                            </FloatingBadge>
                        </div>

                        {/* Middle Left: Interaction */}
                        <div className="absolute top-[35%] lg:top-[45%] -translate-y-1/2 -left-4 lg:-left-20 pointer-events-auto origin-left">
                            <FloatingBadge delay={1} className="scale-90 lg:scale-100">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-brand-orange/20 flex items-center justify-center">
                                        <div className="w-2 h-2 lg:w-3 lg:h-3 rounded-full bg-brand-orange animate-ping" />
                                    </div>
                                    <div className="flex flex-col items-start text-left">
                                        <span className="text-[10px] lg:text-xs font-bold">INTERACTIVE 3D</span>
                                        <span className="text-[8px] lg:text-[10px] opacity-40 uppercase">Drag to explore</span>
                                    </div>
                                </div>
                            </FloatingBadge>
                        </div>

                        {/* Bottom Center: Awards */}
                        <div className="absolute bottom-5 lg:bottom-10 left-1/2 -translate-x-1/2 pointer-events-auto">
                            <FloatingBadge delay={1.2} className="scale-75 lg:scale-100 whitespace-nowrap">
                                <div className="flex items-center gap-4 lg:gap-6 px-2 lg:px-4">
                                    <div className="flex flex-col items-center">
                                        <span className="text-base lg:text-xl font-bold">20M+</span>
                                        <span className="text-[8px] opacity-40 uppercase tracking-widest">Impressions</span>
                                    </div>
                                    <div className="w-px h-6 lg:h-8 bg-white/10" />
                                    <div className="flex flex-col items-center">
                                        <span className="text-base lg:text-xl font-bold">150%</span>
                                        <span className="text-[8px] opacity-40 uppercase tracking-widest">Growth</span>
                                    </div>
                                </div>
                            </FloatingBadge>
                        </div>
                    </div>

                    {/* Gradient Overlays for integration */}
                    <div className="absolute inset-x-0 -bottom-1 h-40 bg-gradient-to-t from-brand-black to-transparent z-10 pointer-events-none" />
                    <div className="absolute inset-x-0 -top-1 h-32 bg-gradient-to-b from-brand-black to-transparent z-10 pointer-events-none" />
                </div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-20"
            >
                <div className="w-[1px] h-12 bg-gradient-to-b from-brand-orange to-transparent" />
                <span className="text-[10px] uppercase tracking-[0.4em]">Scroll</span>
            </motion.div>
        </section>
    )
}

export default Hero
