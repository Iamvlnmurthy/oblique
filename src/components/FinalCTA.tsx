import { motion } from 'framer-motion'
import logo from '../assets/logo-dark.png'
import Magnetic from './Magnetic'

const FinalCTA = () => {
    return (
        <section className="py-24 lg:py-48 px-6 lg:px-24 bg-brand-black relative overflow-hidden">
            <div className="absolute inset-0 bg-brand-orange/5 radial-gradient(circle at center, rgba(249,79,55,0.1) 0%, transparent 70%)" />

            <div className="container mx-auto relative z-10 text-center flex flex-col items-center">
                <span className="text-white/40 text-xs lg:text-base mb-6 lg:mb-8 block uppercase tracking-[0.4em]">Ready to move?</span>

                <h2 className="text-3xl lg:text-8xl font-heading font-bold mb-8 lg:mb-20 leading-tightest tracking-tightest">
                    Let's build something <br />
                    <span className="text-brand-orange text-outline">that grows.</span>
                </h2>

                <Magnetic>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-12 lg:px-16 py-6 lg:py-8 bg-brand-orange text-white text-lg lg:text-xl font-bold rounded-2xl shadow-[0_20px_50px_rgba(249,79,55,0.3)] hover:bg-brand-orange-warm transition-all"
                    >
                        Get in Touch
                    </motion.button>
                </Magnetic>

                <div className="mt-16 lg:mt-20 flex flex-col sm:flex-row items-center gap-4 lg:gap-6 text-white/20">
                    <span className="text-[10px] lg:text-xs uppercase tracking-widest hidden sm:block">©2026</span>
                    <span className="text-brand-orange hidden sm:block">✦</span>
                    <img src={logo} alt="Oblique Media" className="h-8 lg:h-10 w-auto opacity-40" />
                </div>
            </div>
        </section>
    )
}

export default FinalCTA
