import React, { useEffect, useRef } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const steps = [
    {
        id: '01',
        title: 'Strategy & Discovery',
        desc: 'Analyzing your brand goals, audience, and market landscape to build a blueprint for growth.'
    },
    {
        id: '02',
        title: 'Creative Direction',
        desc: 'Developing visual systems and narratives that resonate with clarity and distinction.'
    },
    {
        id: '03',
        title: 'Execution & Launch',
        desc: 'Bringing the strategy to life through cinematic content and performance-driven campaigns.'
    },
    {
        id: '04',
        title: 'Optimization',
        desc: 'Constant monitoring and refining to ensure the highest ROI and engagement possible.'
    }
]

const Process = () => {
    const sectionRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            const steps = gsap.utils.toArray('.process-step')
            steps.forEach((step: any, i) => {
                gsap.from(step, {
                    opacity: 0.1,
                    scale: 0.95,
                    scrollTrigger: {
                        trigger: step,
                        start: "top 80%",
                        end: "top 40%",
                        scrub: true,
                    }
                })

                // Active line animation
                gsap.to(`.step-line-${i}`, {
                    width: '100%',
                    backgroundColor: '#F94F37',
                    scrollTrigger: {
                        trigger: step,
                        start: "top 60%",
                        end: "bottom 60%",
                        toggleActions: "play reverse play reverse"
                    }
                })
            })
        }, sectionRef)
        return () => ctx.revert()
    }, [])

    return (
        <section ref={sectionRef} id="process" className="py-24 lg:py-32 px-6 lg:px-24 bg-transparent relative">
            <div className="container mx-auto">
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-24">
                    {/* Sticky Heading */}
                    <div className="lg:col-span-4 lg:sticky lg:top-40 lg:h-fit">
                        <motion.span
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="text-brand-orange uppercase tracking-[.6em] text-[10px] font-bold mb-8 block"
                        >
                            Our Workflow
                        </motion.span>
                        <h2 className="text-5xl lg:text-7xl font-heading font-bold leading-tight">
                            The Science <br />
                            <span className="text-white/20">of Growth.</span>
                        </h2>
                    </div>

                    <div className="lg:col-span-8 flex flex-col gap-24 lg:gap-48">
                        {steps.map((step, i) => (
                            <div key={step.id} className="process-step group flex flex-col gap-8 lg:gap-12 max-w-2xl">
                                <div className="flex items-end gap-6">
                                    <span className="text-6xl lg:text-9xl font-heading font-bold text-white/5 transition-colors duration-700 group-hover:text-brand-orange/20">
                                        {step.id}
                                    </span>
                                    <h3 className="text-3xl lg:text-5xl font-heading font-bold mb-2">
                                        {step.title}
                                    </h3>
                                </div>
                                <div className="relative w-full h-[1px] bg-white/5 overflow-hidden">
                                    <div className={`step-line-${i} absolute inset-0 w-0 bg-white/20 transition-colors duration-500`} />
                                </div>
                                <p className="text-white/40 text-lg lg:text-xl leading-relaxed max-w-xl">
                                    {step.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Process
