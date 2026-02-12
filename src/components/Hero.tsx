import React, { useRef, useEffect } from 'react'
import { motion, useScroll, useTransform, AnimatePresence, useMotionValue, useSpring } from 'framer-motion'
import Marquee from './Marquee'
import gsap from 'gsap'
import Magnetic from './Magnetic'

const EFFECTS = [
    {
        quality: "Oblique Thinking",
        description: "Igniting viral ideas from unexpected vectors through deep algorithmic intuition."
    },
    {
        quality: "Oblique Strategies",
        description: "Refraction of market trends into scalable, crystalline breakthroughs."
    },
    {
        quality: "Oblique Vision",
        description: "Bending straight paths to outpace the feed with predictive motion."
    },
    {
        quality: "Oblique Flow",
        description: "Seamless pivots and organic momentum powering micro-influencer wins."
    },
    {
        quality: "Oblique Edge",
        description: "Amplified reach through sly, data-driven, algorithm-defying moves."
    }
]

const Hero = () => {
    const [currentIndex, setCurrentIndex] = React.useState(0)
    const containerRef = useRef<HTMLDivElement>(null)

    // Mouse Tracking for Gyroscopic Effect
    const mouseX = useMotionValue(0)
    const mouseY = useMotionValue(0)

    const springConfig = { damping: 25, stiffness: 150 }
    const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), springConfig)
    const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), springConfig)
    const shineX = useSpring(useTransform(mouseX, [-0.5, 0.5], [0, 100]), springConfig)
    const shineY = useSpring(useTransform(mouseY, [-0.5, 0.5], [0, 100]), springConfig)

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!containerRef.current) return
        const rect = containerRef.current.getBoundingClientRect()
        const x = (e.clientX - rect.left) / rect.width - 0.5
        const y = (e.clientY - rect.top) / rect.height - 0.5
        mouseX.set(x)
        mouseY.set(y)
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % EFFECTS.length)
        }, 5000)
        return () => clearInterval(interval)
    }, [])

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    })

    const y = useTransform(scrollYProgress, [0, 1], [0, -200])
    const opacityTransform = useTransform(scrollYProgress, [0, 0.5], [1, 0])
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
        <section
            onMouseMove={handleMouseMove}
            ref={containerRef}
            className="relative min-h-[65vh] pt-16 sm:pt-40 pb-0 overflow-hidden flex flex-col items-center bg-brand-black"
        >
            {/* Background Atmosphere */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[100vw] h-[100vh] bg-[radial-gradient(circle_at_center,_rgba(249,79,55,0.08)_0%,_transparent_70%)] pointer-events-none" />

            {/* Top Kinetic Marquees Duo */}
            <div className="absolute top-16 sm:top-24 left-0 w-full opacity-10 pointer-events-none z-0 flex flex-col items-center">
                <Marquee speed={30} className="text-brand-orange text-2xl sm:text-5xl lg:text-9xl font-heading font-black uppercase tracking-tightest">
                    WE HELP BRANDS GROW WITH CLARITY, CREATIVITY, AND MEASURABLE GROWTH —
                </Marquee>
                <Marquee speed={40} direction="right" className="text-white text-2xl sm:text-5xl lg:text-9xl font-heading font-black uppercase tracking-tightest">
                    TRANSFORMING DIGITAL PRESENCE THROUGH MOTION AND STRATEGY —
                </Marquee>
            </div>

            <motion.div
                style={{ y, opacity: opacityTransform, scale }}
                className="container mx-auto px-6 relative z-30 flex flex-col items-center text-center mt-0 sm:mt-4"
            >
                {/* Agency Identity Label */}
                <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="text-brand-orange text-[10px] sm:text-xs font-bold uppercase tracking-[0.5em] mb-4 sm:mb-8 bg-brand-black/50 backdrop-blur-sm px-6 py-2 rounded-full border border-brand-orange/20"
                >
                    Digital Marketing Agency + Creative Storytelling
                </motion.span>

                <h1 className="text-[clamp(1.6rem,12vw,6.5rem)] font-heading font-bold leading-[0.85] tracking-tightest mb-6 sm:mb-20 drop-shadow-2xl">
                    Out-think the <br />
                    <span className="text-brand-orange">Algorithm.</span>
                </h1>

                {/* THE CINEMATIC RECTANGULAR PRISM (Refined) */}
                <div className="relative w-full h-[220px] sm:h-[280px] perspective-[2500px] flex items-center justify-center -mt-6 sm:-mt-12 group">
                    <motion.div
                        animate={{
                            rotateY: currentIndex === 0 ? 0 : currentIndex === 1 ? -90 : currentIndex === 2 ? -180 : currentIndex === 3 ? 90 : 0,
                            rotateX: currentIndex === 4 ? -90 : 0
                        }}
                        transition={{
                            duration: 1.2,
                            ease: [0.16, 1, 0.3, 1]
                        }}
                        className="relative w-[300px] h-[180px] sm:w-[500px] sm:h-[180px] preserve-3d"
                    >
                        {/* Define all 6 faces of the prism */}
                        {[0, 1, 2, 3, 4, 5].map((i) => {
                            const effect = EFFECTS[i] || { quality: "OBLIQUE", description: "Mechanical Resonance" };

                            const rotations = [
                                "rotateY(0deg)",    // Front
                                "rotateY(90deg)",   // Right
                                "rotateY(180deg)",  // Back
                                "rotateY(-90deg)",  // Left
                                "rotateX(90deg)",   // Top
                                "rotateX(-90deg)"   // Bottom
                            ];

                            const isVerticalFace = i === 4 || i === 5;

                            return (
                                <div
                                    key={i}
                                    style={{
                                        transform: `${rotations[i]} translateZ(var(--prism-depth, 250px))`,
                                    }}
                                    className={`absolute inset-0 preserve-3d backface-hidden transition-all duration-700
                                        ${i === currentIndex ? 'opacity-100' : 'opacity-20 blur-[1px]'}
                                        [--prism-depth:150px] sm:[--prism-depth:250px]
                                        ${isVerticalFace ? '[--prism-depth:60px] sm:[--prism-depth:90px]' : ''}
                                    `}
                                    onClick={() => i < 5 && setCurrentIndex(i)}
                                >
                                    {/* Clean Glass Face with Enhanced Internal Glow */}
                                    <div className="absolute inset-0 bg-black/60 backdrop-blur-3xl border border-white/10 rounded-2xl overflow-hidden shadow-[0_0_40px_rgba(249,79,55,0.05)]">
                                        {/* Internal Face Glow */}
                                        <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-brand-orange/40 to-transparent" />
                                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(249,79,55,0.08)_0%,transparent_70%)]" />

                                        {/* Content Layer */}
                                        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-8 py-2 sm:py-4 z-10">
                                            <h2 className="text-2xl sm:text-4xl lg:text-6xl font-heading font-black text-white italic tracking-tightest leading-none mb-3 select-none">
                                                {effect.quality}
                                            </h2>
                                            <p className="text-[10px] sm:text-xs lg:text-base text-white/60 max-w-[85%] leading-snug font-light italic select-none px-4">
                                                "{effect.description}"
                                            </p>
                                        </div>
                                    </div>

                                    {/* Face Outer Edge Burnish */}
                                    <div className="absolute inset-0 border-2 border-brand-orange/20 rounded-2xl pointer-events-none shadow-[inset_0_0_40px_rgba(249,79,55,0.15),0_0_40px_rgba(249,79,55,0.1)]" />
                                </div>
                            );
                        })}
                    </motion.div>

                    {/* Volumetric Atmosphere (Amplified) */}
                    <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-80 w-full bg-gradient-to-r from-transparent via-brand-orange/15 to-transparent blur-[160px] pointer-events-none opacity-60" />
                    <div className="absolute w-[600px] h-[400px] bg-brand-orange/10 blur-[120px] rounded-full pointer-events-none -z-10" />
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 mt-8 sm:mt-12 pb-12 relative z-40">
                    <Magnetic>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 sm:px-12 py-6 bg-brand-orange text-white rounded-2xl font-bold sm:font-black transition-shadow hover:shadow-[0_20px_60px_rgba(249,79,55,0.4)] text-base sm:text-lg w-full sm:w-auto"
                        >
                            Explore Case Studies
                        </motion.button>
                    </Magnetic>
                    <Magnetic>
                        <motion.button
                            whileHover={{ backgroundColor: "rgba(255,255,255,0.1)" }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 sm:px-12 py-6 border border-white/20 text-white rounded-2xl font-bold backdrop-blur-sm text-base sm:text-lg w-full sm:w-auto"
                        >
                            Start a Project
                        </motion.button>
                    </Magnetic>
                </div>
            </motion.div>

            {/* Dynamic Background Elements */}
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden bg-brand-black opacity-40">
                <motion.div
                    animate={{ x: [-200, 200, -200], y: [-100, 100, -100], scale: [1, 1.2, 1] }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    className="absolute top-0 left-0 w-[80vw] h-[80vh] bg-brand-orange/10 blur-[150px] rounded-full opacity-30"
                />
                <motion.div
                    animate={{ x: [200, -200, 200], y: [100, -100, 100], scale: [1, 1.3, 1] }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                    className="absolute bottom-0 right-0 w-[70vw] h-[70vh] bg-brand-orange/5 blur-[120px] rounded-full opacity-20"
                />
            </div>

            {/* Scroll Indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-20 z-40"
            >
                <div className="w-[1px] h-12 bg-gradient-to-b from-brand-orange to-transparent" />
                <span className="text-[10px] uppercase tracking-[0.4em]">Scroll</span>
            </motion.div>
        </section>
    )
}

export default Hero
