import React, { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const projects = [
    {
        id: 1,
        title: 'Zenith High',
        tags: 'Education • Rebranding • Web',
        year: '2024',
        image: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=2071&auto=format&fit=crop'
    },
    {
        id: 2,
        title: 'LearnFlow India',
        tags: 'EdTech • App Design • Strategy',
        year: '2024',
        image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=2070&auto=format&fit=crop'
    },
    {
        id: 3,
        title: 'Svara Heritage',
        tags: 'Luxury • Culture • E-commerce',
        year: '2023',
        image: 'https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?q=80&w=2056&auto=format&fit=crop'
    },
    {
        id: 4,
        title: 'Urban Roots',
        tags: 'Real Estate • Architecture • Web',
        year: '2024',
        image: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2000&auto=format&fit=crop'
    }
]

const ProjectCard = ({ project }: { project: typeof projects[0] }) => {
    return (
        <div className="relative h-[70vh] w-[85vw] lg:w-[45vw] flex-shrink-0 group overflow-hidden rounded-[2.5rem] bg-brand-gray/10 border border-white/5">
            <div className="absolute inset-0 overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-[2s] ease-out group-hover:scale-110"
                    style={{ backgroundImage: `url(${project.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/20 to-transparent opacity-80" />
            </div>

            <div className="absolute inset-0 p-8 lg:p-12 flex flex-col justify-end">
                <div className="flex flex-col gap-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-700 ease-out">
                    <div className="flex items-center gap-4">
                        <span className="text-brand-orange text-[10px] font-mono uppercase tracking-[.4em]">{project.tags}</span>
                        <div className="w-8 h-px bg-white/20" />
                        <span className="text-[10px] font-mono opacity-40 uppercase tracking-widest">{project.year}</span>
                    </div>
                    <h3 className="text-4xl lg:text-6xl font-heading font-bold tracking-tightest leading-none text-white max-w-lg">
                        {project.title}
                    </h3>
                </div>
            </div>

            {/* Hover Reveal Details */}
            <div className="absolute top-8 right-8 lg:top-12 lg:right-12 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center backdrop-blur-md">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                        <path d="M7 17L17 7M17 7H7M17 7V17" />
                    </svg>
                </div>
            </div>
        </div>
    )
}

const WorkPreview = () => {
    const sectionRef = useRef<HTMLElement>(null)
    const triggerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const trigger = triggerRef.current
        const section = sectionRef.current

        if (!trigger || !section) return

        const scrollWidth = trigger.scrollWidth
        const windowWidth = window.innerWidth
        const xTranslate = -(scrollWidth - windowWidth + (windowWidth * 0.15)) // Adjusted for padding

        const pin = gsap.fromTo(
            trigger,
            { translateX: 0 },
            {
                translateX: xTranslate,
                ease: "none",
                scrollTrigger: {
                    trigger: section,
                    start: "top top",
                    end: () => `+=${scrollWidth}`,
                    scrub: 1,
                    pin: true,
                    anticipatePin: 1,
                    invalidateOnRefresh: true,
                },
            }
        )

        return () => {
            pin.kill()
        }
    }, [])

    return (
        <section ref={sectionRef} id="work" className="bg-brand-black overflow-hidden">
            <div className="h-screen flex flex-col justify-center">
                <div className="container mx-auto px-6 lg:px-24 mb-12">
                    <div className="flex flex-col gap-4">
                        <motion.span
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="text-brand-orange uppercase tracking-[.6em] text-[10px] font-bold"
                        >
                            Impactful Showcase
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-5xl lg:text-8xl font-heading font-bold leading-none tracking-tightest text-white"
                        >
                            Visionary <span className="text-white/20">Work.</span>
                        </motion.h2>
                    </div>
                </div>

                <div className="relative overflow-visible">
                    <div ref={triggerRef} className="flex gap-12 lg:gap-24 px-6 lg:px-24 w-fit">
                        {projects.map((project) => (
                            <ProjectCard key={project.id} project={project} />
                        ))}

                        {/* End Spacer for balanced finish */}
                        <div className="w-[10vw] flex-shrink-0" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WorkPreview
