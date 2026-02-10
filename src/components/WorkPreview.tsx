import React from 'react'
import { motion } from 'framer-motion'
import Magnetic from './Magnetic'

const projects = [
    {
        id: 1,
        title: 'Brand X Social Campaign',
        tags: 'Strategy • Social • Motion',
        year: '2024',
        size: 'large',
        image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1974&auto=format&fit=crop'
    },
    {
        id: 2,
        title: 'E-commerce Growth',
        tags: 'Performance • SEO • Ads',
        year: '2024',
        size: 'medium',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop'
    },
    {
        id: 3,
        title: 'Aura Product Launch',
        tags: 'Branding • Creative • 3D',
        year: '2023',
        size: 'full',
        image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop'
    }
]

const ProjectCard = ({ project, index }: { project: typeof projects[0], index: number }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="group relative rounded-[2rem] overflow-hidden bg-brand-gray/20 shadow-2xl h-[60vh] lg:h-[70vh] w-full"
        >
            <div className="aspect-video relative overflow-hidden h-full">
                <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-[1.5s] ease-out group-hover:scale-110"
                    style={{ backgroundImage: `url(${project.image})` }}
                />

                {/* Cinematic Overlays */}
                <div className="absolute inset-0 bg-brand-black/20 group-hover:bg-brand-black/0 transition-colors duration-700" />
                <div className="absolute inset-0 opacity-10 group-hover:opacity-30 transition-opacity bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black/90 via-brand-black/20 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-700" />

                {/* Metadata Hover Content */}
                <div className="absolute inset-0 p-8 lg:p-12 flex flex-col justify-end">
                    <div className="flex justify-between items-end transform translate-y-6 group-hover:translate-y-0 transition-transform duration-700 ease-out">
                        <div className="flex flex-col gap-2">
                            <span className="text-brand-orange text-[10px] font-mono uppercase tracking-[.4em] mb-1">{project.tags}</span>
                            <h3 className="text-3xl lg:text-5xl font-heading font-medium tracking-tightest leading-none text-white">{project.title}</h3>
                        </div>
                        <div className="text-right hidden sm:block">
                            <span className="text-[10px] font-mono opacity-40 uppercase tracking-widest block mb-1 text-white">Year</span>
                            <span className="text-lg font-heading font-medium text-white">{project.year}</span>
                        </div>
                    </div>
                </div>

                {/* High Contrast Reveal Border */}
                <div className="absolute inset-0 border border-white/5 group-hover:border-brand-orange/40 transition-colors duration-700 pointer-events-none rounded-[2rem]" />
            </div>
        </motion.div>
    )
}

const WorkPreview = () => {
    const [currentIndex, setCurrentIndex] = React.useState(0)

    const next = () => setCurrentIndex((prev) => (prev + 1) % projects.length)
    const prev = () => setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length)

    return (
        <section id="work" className="py-24 lg:py-32 bg-brand-black relative flex flex-col items-center overflow-hidden">
            <div className="w-full px-6 lg:px-24">
                <div className="flex flex-col lg:flex-row justify-between lg:items-end gap-10 mb-20 lg:mb-32">
                    <div className="flex flex-col gap-4 lg:gap-6">
                        <motion.span
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="text-brand-orange uppercase tracking-[.6em] text-[10px] font-bold"
                        >
                            Impactful Showcase
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-5xl lg:text-[10rem] font-heading font-bold leading-none tracking-tightest text-white"
                        >
                            Visionary <br />
                            <span className="text-white/20">Work.</span>
                        </motion.h2>
                    </div>

                    <div className="flex flex-col gap-8 lg:items-end">
                        <p className="text-white/40 text-lg max-w-sm lg:text-right leading-relaxed">
                            A curated selection of digital experiences that prioritize strategy, performance, and cinematic quality.
                        </p>

                        {/* More Prominent Controls */}
                        <div className="flex items-center gap-6">
                            <button
                                onClick={prev}
                                aria-label="Previous Project"
                                className="w-16 h-16 rounded-full border-2 border-white/20 flex items-center justify-center hover:bg-brand-orange hover:border-brand-orange hover:scale-110 transition-all duration-300 group z-50 relative overflow-hidden"
                            >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="rotate-180 text-white">
                                    <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                            <button
                                onClick={next}
                                aria-label="Next Project"
                                className="w-16 h-16 rounded-full border-2 border-white/20 flex items-center justify-center hover:bg-brand-orange hover:border-brand-orange hover:scale-110 transition-all duration-300 group z-50 relative overflow-hidden"
                            >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
                                    <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Carousel Container */}
                <div className="w-full relative">
                    <div
                        className="flex gap-8 lg:gap-16 transition-transform duration-1000 ease-[0.16, 1, 0.3, 1]"
                        style={{
                            transform: `translateX(calc(-${currentIndex * 100}% - ${currentIndex * 4}rem))`
                        }}
                    >
                        {projects.map((project, i) => (
                            <div key={project.id} className="min-w-full lg:min-w-[70%]">
                                <ProjectCard project={project} index={i} />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Pagination Dots */}
                <div className="flex gap-3 mt-16 justify-center lg:justify-start">
                    {projects.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setCurrentIndex(i)}
                            className={`h-1.5 rounded-full transition-all duration-500 ${currentIndex === i ? 'w-12 bg-brand-orange' : 'w-3 bg-white/20 hover:bg-white/40'}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default WorkPreview
