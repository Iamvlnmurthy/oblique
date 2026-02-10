import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'

const WhoWeAre = () => {
    const sectionRef = useRef<HTMLDivElement>(null)
    const textRef = useRef<HTMLHeadingElement>(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Split text would be ideal, but for now we'll stagger lines if possible, 
            // or just use a group reveal.
            gsap.from(".reveal-text", {
                y: 100,
                opacity: 0,
                duration: 1.5,
                stagger: 0.1,
                ease: "power4.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 70%",
                }
            })

            gsap.from(".image-parallax", {
                y: 50,
                scale: 1.1,
                duration: 2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                    scrub: true
                }
            })
        }, sectionRef)
        return () => ctx.revert()
    }, [])

    return (
        <section ref={sectionRef} id="about" className="py-24 lg:py-32 px-6 lg:px-24 bg-brand-black relative overflow-hidden">
            {/* Background Decorative Element */}
            <div className="absolute top-1/4 right-0 w-1/2 h-1/2 bg-brand-orange/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="container mx-auto">
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-24 items-end">

                    {/* Editorial Text Content */}
                    <div className="lg:col-span-8">
                        <motion.span
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="text-brand-orange uppercase tracking-[.6em] text-[10px] font-bold mb-8 lg:mb-12 block"
                        >
                            The Agency Philosophy
                        </motion.span>

                        <h2 ref={textRef} className="reveal-text text-[clamp(2.5rem,8vw,5rem)] font-heading font-medium leading-[1.1] tracking-tightest mb-16 lg:mb-24">
                            We are <span className="text-white italic">Oblique Media</span>, a collective of designers,
                            strategists, and creatives built for brands that
                            demand <span className="text-brand-orange">clarity</span> and <span className="text-white">consistency</span> in a world
                            of digital noise.
                        </h2>

                        <div className="grid sm:grid-cols-2 gap-8 lg:gap-24 reveal-text">
                            <div className="flex flex-col gap-4 lg:gap-6">
                                <div className="w-12 h-px bg-white/20" />
                                <p className="text-white/40 text-base lg:text-lg leading-relaxed">
                                    Our approach blends raw creativity with data-driven performance. We don't just build websites or run ads; we craft digital legacies that scale with purpose and impact.
                                </p>
                            </div>
                            <div className="flex flex-col gap-4 lg:gap-6">
                                <div className="w-12 h-px bg-white/20" />
                                <p className="text-white/40 text-base lg:text-lg leading-relaxed">
                                    Headquartered in Hyderabad, working globally. We simplify the complex, out-think the algorithm, and bring a high-intensity focus to every pixel we push.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Editorial Imagery Overlap */}
                    <div className="lg:col-span-4 relative mt-16 lg:mt-0">
                        <div className="image-parallax relative">
                            {/* Main Team Image */}
                            <div className="aspect-[3/4] w-full glass rounded-[2rem] overflow-hidden shadow-[0_30px_100px_rgba(0,0,0,0.5)] z-10 relative group">
                                <img
                                    src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop"
                                    alt="Oblique Media Team"
                                    className="w-full h-full object-cover transition-all duration-1000 lg:group-hover:scale-110"
                                />
                                <div className="absolute inset-x-0 bottom-0 p-6 lg:p-8 bg-gradient-to-t from-black/90 via-black/40 to-transparent">
                                    <span className="block text-xl lg:text-2xl font-bold text-white mb-1">The Core Team</span>
                                    <span className="text-[10px] text-brand-orange uppercase tracking-[.3em] font-mono">Innovation • Strategy • Motion</span>
                                </div>
                            </div>

                            {/* Decorative Floating Element */}
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 0.6, x: 0 }}
                                className="absolute -top-10 -right-10 lg:-right-20 glass p-8 rounded-2xl backdrop-blur-3xl border border-white/20 hidden lg:block"
                            >
                                <div className="flex flex-col gap-2">
                                    <span className="text-4xl font-heading font-bold text-brand-orange">12+</span>
                                    <span className="text-[10px] uppercase tracking-widest leading-tight">Creative <br />Specialists</span>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WhoWeAre
