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
            className="relative min-h-[140vh] pt-24 sm:pt-40 pb-0 overflow-hidden flex flex-col items-center bg-brand-black"
        >
            {/* Background Atmosphere */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[100vw] h-[100vh] bg-[radial-gradient(circle_at_center,_rgba(249,79,55,0.08)_0%,_transparent_70%)] pointer-events-none" />

            {/* HUD Elements */}
            <div className="absolute inset-0 pointer-events-none z-10 opacity-30">
                <div className="absolute top-10 left-10 w-20 h-[1px] bg-brand-orange" />
                <div className="absolute top-10 left-10 w-[1px] h-20 bg-brand-orange" />
                <div className="absolute top-10 right-10 w-20 h-[1px] bg-brand-orange" />
                <div className="absolute top-10 right-10 w-[1px] h-20 bg-brand-orange" />
                <div className="absolute bottom-10 left-10 w-20 h-[1px] bg-brand-orange" />
                <div className="absolute bottom-10 left-10 w-[1px] h-20 bg-brand-orange" />
                <div className="absolute bottom-10 right-10 w-20 h-[1px] bg-brand-orange" />
                <div className="absolute bottom-10 right-10 w-[1px] h-20 bg-brand-orange" />
            </div>

            {/* Top Kinetic Marquees Duo (Mission Narrative) */}
            <div className="absolute top-20 sm:top-24 left-0 w-full opacity-30 pointer-events-none z-0 flex flex-col items-center">
                <Marquee speed={30} className="text-brand-orange text-3xl sm:text-5xl lg:text-9xl font-heading font-black uppercase tracking-tightest">
                    WE HELP BRANDS GROW WITH CLARITY, CREATIVITY, AND MEASURABLE GROWTH —
                </Marquee>
                <Marquee speed={40} direction="right" className="text-white text-3xl sm:text-5xl lg:text-9xl font-heading font-black uppercase tracking-tightest">
                    TRANSFORMING DIGITAL PRESENCE THROUGH MOTION AND STRATEGY —
                </Marquee>
            </div>

            {/* HUD Scanlines Overlay */}
            <div className="absolute inset-0 pointer-events-none z-10 opacity-[0.03] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]" />

            {/* HUD Corner Accents */}
            <div className="absolute inset-x-10 inset-y-10 pointer-events-none z-20 opacity-20">
                <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-brand-orange" />
                <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-brand-orange" />
                <div className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-brand-orange" />
                <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-brand-orange" />
            </div>

            <motion.div
                style={{ y, opacity: opacityTransform, scale }}
                className="container mx-auto px-6 relative z-30 flex flex-col items-center text-center mt-2 sm:mt-4"
            >
                {/* Agency Identity Label */}
                <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="text-brand-orange text-[10px] sm:text-xs font-bold uppercase tracking-[0.5em] mb-4 sm:mb-8 hero-line bg-brand-black/50 backdrop-blur-sm px-6 py-2 rounded-full border border-brand-orange/20"
                >
                    Digital Marketing Agency + Creative Storytelling
                </motion.span>

                <h1 className="hero-line text-[clamp(2.5rem,10vw,8.5rem)] font-heading font-bold leading-[0.85] tracking-tightest mb-8 sm:mb-12">
                    Out-think the <br />
                    <span className="text-brand-orange">Algorithm.</span>
                </h1>

                {/* THE CINEMATIC HUD HIGHLIGHT (Gyroscopic) */}
                <motion.div
                    style={{ rotateX, rotateY, perspective: 1000 }}
                    className="relative w-full max-w-5xl group"
                >
                    {/* HUD Box Glow */}
                    <div className="absolute inset-0 bg-brand-orange/5 blur-3xl rounded-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

                    <div className="relative p-4 sm:p-2 lg:p-3 rounded-[30px] border border-white/20 bg-brand-black/60 backdrop-blur-3xl overflow-hidden shadow-[0_0_40px_rgba(0,0,0,0.5)]">
                        {/* Dynamic Glass Shine */}
                        <motion.div
                            style={{
                                left: useTransform(shineX, [0, 100], ["-50%", "150%"]),
                                top: useTransform(shineY, [0, 100], ["-50%", "150%"])
                            }}
                            className="hidden sm:block absolute w-[150%] h-[150%] bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_0%,transparent_50%)] pointer-events-none"
                        />
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentIndex}
                                initial={{ opacity: 0, filter: "blur(20px)", scale: 0.95 }}
                                animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
                                exit={{ opacity: 0, filter: "blur(20px)", scale: 1.05 }}
                                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                className="flex flex-col items-center"
                            >
                                <h2 className="text-3xl sm:text-5xl lg:text-8xl font-heading font-black text-white italic mb-4 tracking-tightest leading-none mt-2">
                                    {EFFECTS[currentIndex].quality}
                                </h2>
                                <p className="text-base sm:text-xl lg:text-3xl text-white/60 max-w-3xl leading-snug font-light italic px-4">
                                    "{EFFECTS[currentIndex].description}"
                                </p>
                            </motion.div>
                        </AnimatePresence>

                        {/* HUD Navigation Indicator */}
                        <div className="flex gap-4 mt-4 justify-center">
                            {EFFECTS.map((_, i) => (
                                <motion.div
                                    key={i}
                                    onClick={() => setCurrentIndex(i)}
                                    className="cursor-pointer group/dot relative p-2"
                                >
                                    <div className={`w-1.5 h-1.5 rounded-full transition-all duration-500 ${i === currentIndex ? 'bg-brand-orange scale-150' : 'bg-white/20 group-hover/dot:bg-white/40'}`} />
                                    {i === currentIndex && (
                                        <motion.div layoutId="hud-dot" className="absolute inset-0 border border-brand-orange/40 rounded-full" />
                                    )}
                                </motion.div>
                            ))}
                        </div>

                        {/* Scanner Line Effect */}
                        <motion.div
                            animate={{ y: ["-100%", "300%"] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-brand-orange/20 to-transparent pointer-events-none opacity-20"
                        />
                    </div>
                </motion.div>

                <div className="hero-line flex flex-col sm:flex-row gap-4 sm:gap-8 mt-4 sm:mt-2 pb-20 relative z-40">
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

            {/* NEW: Cinematic Motion Graphic Background (Refined) */}
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
                <div className="absolute inset-0 bg-[linear-gradient(rgba(249,79,55,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(249,79,55,0.05)_1px,transparent_1px)] bg-[size:150px_150px] [mask-image:radial-gradient(ellipse_at_center,black,transparent:90%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] opacity-40" />
                <div className="absolute inset-0 opacity-[0.05] mix-blend-overlay pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,_rgba(0,0,0,0.6)_100%)]" />
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
