import React, { useState, useEffect } from 'react'
import { Menu as MenuIcon, X } from 'lucide-react'
import logo from '../assets/logo-dark.png'
import Magnetic from './Magnetic'

const Navbar = ({ onMenuToggle, isMenuOpen }: { onMenuToggle: () => void, isMenuOpen: boolean }) => {
    const [isScrolled, setIsScrolled] = useState(false)
    const [time, setTime] = useState(new Date())

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)

        const timer = setInterval(() => setTime(new Date()), 1000)

        return () => {
            window.removeEventListener('scroll', handleScroll)
            clearInterval(timer)
        }
    }, [])

    const formattedTime = time.toLocaleTimeString('en-IN', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
        timeZone: 'Asia/Kolkata'
    })

    return (
        <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${isScrolled ? 'h-16 lg:h-20 bg-brand-black/80 backdrop-blur-xl border-b border-white/10' : 'h-20 lg:h-24 bg-transparent'
            }`}>
            <div className="container mx-auto h-full px-4 lg:px-6 flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <Magnetic>
                        <div className="flex items-center gap-3 lg:gap-4 group cursor-pointer">
                            <img src={logo} alt="Oblique Media" className="h-10 lg:h-16 w-auto object-contain" />
                            <span className="text-[10px] opacity-40 font-mono mt-1 hidden lg:block">©2026</span>
                        </div>
                    </Magnetic>
                </div>

                <div className="hidden lg:flex items-center gap-12 font-body text-sm uppercase tracking-widest text-white/70">
                    <a href="#about" className="hover:text-brand-orange transition-colors">About</a>
                    <a href="#services" className="hover:text-brand-orange transition-colors">Services</a>
                    <a href="#work" className="hover:text-brand-orange transition-colors">Work</a>
                    <a href="#contact" className="hover:text-brand-orange transition-colors">Contact</a>
                </div>

                <div className="flex items-center gap-4 lg:gap-8">
                    <div className="hidden lg:block text-right font-mono text-[10px] opacity-50 leading-tight uppercase">
                        <span>Hyderabad, IN</span>
                        <br />
                        <span>{formattedTime} IST</span>
                    </div>

                    <Magnetic>
                        <button
                            onClick={onMenuToggle}
                            className="flex items-center gap-2 lg:gap-3 group text-xs lg:text-sm font-semibold uppercase tracking-widest"
                        >
                            <span className="hidden sm:block group-hover:text-brand-orange transition-colors">
                                {isMenuOpen ? 'Close' : 'Menu'}
                            </span>
                            <div className="w-8 h-8 lg:w-10 lg:h-10 flex items-center justify-center rounded-full border border-white/10 group-hover:border-brand-orange transition-colors">
                                {isMenuOpen ? <X size={16} /> : <MenuIcon size={16} />}
                            </div>
                        </button>
                    </Magnetic>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
