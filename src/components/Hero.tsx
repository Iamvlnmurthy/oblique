import React, { useRef, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Marquee from './Marquee'
import gsap from 'gsap'
import Magnetic from './Magnetic'

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

                <div className="hero-line flex flex-col sm:flex-row gap-8 mt-12">
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
