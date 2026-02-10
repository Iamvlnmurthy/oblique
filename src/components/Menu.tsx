import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight, X } from 'lucide-react'
import logo from '../assets/logo-dark.png'

const Menu = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {
    const links = [
        { name: 'About', href: '#about' },
        { name: 'Services', href: '#services' },
        { name: 'Work', href: '#work' },
        { name: 'Contact', href: '#contact' }
    ]

    const menuVariants = {
        closed: {
            opacity: 0,
            y: '-100%',
            transition: {
                duration: 0.8,
                ease: [0.76, 0, 0.24, 1] as any
            }
        },
        open: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: [0.76, 0, 0.24, 1] as any
            }
        }
    }

    const linkVariants = {
        initial: { y: 80, opacity: 0 },
        enter: (i: number) => ({
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.8,
                ease: [0.76, 0, 0.24, 1] as any,
                delay: 0.5 + i * 0.1
            }
        }),
        exit: (i: number) => ({
            y: 80,
            opacity: 0,
            transition: {
                duration: 0.8,
                ease: [0.76, 0, 0.24, 1] as any,
                delay: i * 0.05
            }
        })
    }

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    variants={menuVariants}
                    initial="closed"
                    animate="open"
                    exit="closed"
                    className="fixed inset-0 z-[1000] bg-brand-black flex flex-col px-6 lg:px-24"
                >
                    <div className="flex items-center justify-between h-24 mb-8">
                        <div className="flex items-center gap-4 group cursor-pointer" onClick={onClose}>
                            <img src={logo} alt="Oblique Media" className="h-12 lg:h-16 w-auto object-contain" />
                        </div>
                        <button
                            onClick={onClose}
                            className="flex items-center gap-3 group text-sm font-semibold uppercase tracking-widest"
                        >
                            <span className="group-hover:text-brand-orange transition-colors">Close</span>
                            <div className="w-10 h-10 flex items-center justify-center rounded-full border border-white/10 group-hover:border-brand-orange transition-colors">
                                <X size={20} />
                            </div>
                        </button>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 w-full h-full max-h-[80vh] overflow-y-auto lg:overflow-visible">
                        <div className="flex flex-col gap-6 lg:gap-8">
                            <span className="text-[10px] uppercase tracking-[0.2em] text-white/40">Navigation</span>
                            <div className="flex flex-col gap-2">
                                {links.map((link, i) => (
                                    <div key={link.name} className="overflow-hidden">
                                        <motion.a
                                            href={link.href}
                                            onClick={onClose}
                                            custom={i}
                                            variants={linkVariants}
                                            initial="initial"
                                            animate="enter"
                                            exit="exit"
                                            className="text-5xl lg:text-8xl font-heading font-bold hover:text-brand-orange transition-colors flex items-center gap-4 group"
                                        >
                                            {link.name}
                                            <ArrowUpRight className="hidden md:block opacity-0 group-hover:opacity-100 transition-opacity w-8 h-8 lg:w-12 lg:h-12" />
                                        </motion.a>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="flex flex-col gap-10 lg:gap-12 justify-end pb-12 lg:pb-12 mt-12 lg:mt-0">
                            <div className="flex flex-col gap-4">
                                <span className="text-[10px] uppercase tracking-[0.2em] text-white/40">Contact</span>
                                <a href="mailto:hello@obliquemedia.com" className="text-xl lg:text-2xl hover:text-brand-orange transition-colors">
                                    hello@obliquemedia.com
                                </a>
                            </div>

                            <div className="flex flex-col gap-4">
                                <span className="text-[10px] uppercase tracking-[0.2em] text-white/40">Follow us</span>
                                <div className="flex flex-wrap gap-6 text-sm">
                                    {['Instagram', 'LinkedIn', 'Twitter', 'YouTube'].map(social => (
                                        <a key={social} href="#" className="hover:text-brand-orange transition-colors">{social}</a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default Menu
