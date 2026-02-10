import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight, Instagram, Zap, Palette, Video, Search } from 'lucide-react'

const services = [
    {
        id: '01',
        title: 'Social Media Marketing',
        desc: 'Content, reels, and strategies that build visibility and engagement across all platforms.',
        icon: <Instagram size={32} />,
        image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=2074&auto=format&fit=crop'
    },
    {
        id: '02',
        title: 'Performance Marketing',
        desc: 'ROI-focused Meta & Google Ads optimized for high-quality leads and scalable sales.',
        icon: <Zap size={32} />,
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop'
    },
    {
        id: '03',
        title: 'Branding & Design',
        desc: 'Strong visual identities and comprehensive brand systems that stand out in crowded markets.',
        icon: <Palette size={32} />,
        image: 'https://images.unsplash.com/photo-1558655146-d09347e92706?q=80&w=2068&auto=format&fit=crop'
    },
    {
        id: '04',
        title: 'Video Production',
        desc: 'High-performing short-form videos and cinematic reels designed specifically for conversion.',
        icon: <Video size={32} />,
        image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2071&auto=format&fit=crop'
    },
    {
        id: '05',
        title: 'SEO & Content',
        desc: 'Search-optimized content strategies that drive long-term organic growth and authority.',
        icon: <Search size={32} />,
        image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=2074&auto=format&fit=crop'
    }
]

const ServiceBlock = ({ service, index, onHover, isHovered }: {
    service: typeof services[0],
    index: number,
    onHover: (img: string | null) => void,
    isHovered: boolean
}) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.8 }}
            onMouseEnter={() => onHover(service.image)}
            onMouseLeave={() => onHover(null)}
            className={`group relative border-t border-white/5 py-8 lg:py-24 flex flex-col lg:flex-row lg:items-center justify-between gap-6 lg:gap-8 transition-all duration-500 cursor-pointer ${isHovered ? 'opacity-100' : 'opacity-40 lg:opacity-40 hover:opacity-100'
                }`}
        >
            <div className="flex items-center lg:items-center gap-6 lg:gap-12 z-10">
                <span className="text-2xl lg:text-5xl font-heading font-bold text-white/5 group-hover:text-brand-orange transition-colors duration-500">
                    {service.id}
                </span>
                <h3 className={`text-4xl lg:text-8xl font-heading font-medium transition-all duration-700 ease-out select-none ${isHovered ? 'translate-x-4 lg:translate-x-8 text-white' : 'group-hover:translate-x-2 lg:group-hover:translate-x-4'
                    }`}>
                    {service.title}
                </h3>
            </div>

            <div className={`flex flex-col lg:flex-row items-start lg:items-center gap-6 lg:gap-16 transition-all duration-700 transform z-20 max-w-xl ${isHovered ? 'opacity-100 translate-y-0 h-auto' : 'opacity-0 lg:opacity-0 translate-y-4 h-0 lg:h-auto overflow-hidden lg:overflow-visible'
                }`}>
                <p className="text-white/60 text-base lg:text-lg leading-relaxed">
                    {service.desc}
                </p>
                <div className={`p-4 lg:p-6 rounded-full glass text-brand-orange transition-all duration-500 hidden lg:flex ${isHovered ? 'rotate-45 scale-110 bg-brand-orange text-white' : ''}`}>
                    <ArrowUpRight size={32} />
                </div>
            </div>

            <div className={`absolute top-1/2 -translate-y-1/2 right-10 transition-all duration-700 hidden lg:block ${isHovered ? 'opacity-10 scale-150 rotate-12' : 'opacity-0 scale-50'}`}>
                {service.icon}
            </div>

            {/* Bottom active line */}
            <motion.div
                initial={false}
                animate={{ width: isHovered ? "100%" : "0%" }}
                className="absolute bottom-0 left-0 h-[2px] bg-brand-orange transition-all duration-700"
            />
        </motion.div>
    )
}

const Services = () => {
    const [hoveredImage, setHoveredImage] = useState<string | null>(null)

    useEffect(() => {
        // Preload images
        services.forEach(s => {
            const img = new Image()
            img.src = s.image
        })
    }, [])

    return (
        <section id="services" className="py-24 lg:py-32 px-6 lg:px-24 bg-brand-black relative overflow-hidden">
            {/* Cinematic Backdrop Layer */}
            <AnimatePresence>
                {hoveredImage && (
                    <motion.div
                        key={hoveredImage}
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: 0.3, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.05 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="absolute inset-0 z-0 pointer-events-none"
                    >
                        <div
                            className="absolute inset-0 bg-cover bg-center blur-[100px] grayscale brightness-50"
                            style={{ backgroundImage: `url(${hoveredImage})` }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-brand-black via-transparent to-brand-black" />
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="container mx-auto relative z-10">
                <div className="flex flex-col gap-6 mb-16 lg:mb-40">
                    <motion.span
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="text-brand-orange uppercase tracking-[.6em] text-[10px] font-bold"
                    >
                        Core Expertise
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-6xl lg:text-[12rem] font-heading font-bold leading-none tracking-tightest"
                    >
                        Success.
                    </motion.h2>
                </div>

                <div className="flex flex-col">
                    {services.map((service, i) => (
                        <ServiceBlock
                            key={service.id}
                            service={service}
                            index={i}
                            isHovered={hoveredImage === service.image}
                            onHover={setHoveredImage}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Services
