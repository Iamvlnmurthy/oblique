import React, { useState } from 'react'
import Navbar from './Navbar'
import Menu from './Menu'
import CustomCursor from './CustomCursor'
import Footer from './Footer'

const Layout = ({ children }: { children: React.ReactNode }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <div className="relative w-full min-h-screen noise bg-brand-black overflow-x-hidden">
            {/* Background Flux (Aura Effect) */}
            <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-orange/10 blur-[120px] rounded-full animate-pulse" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-brand-orange/5 blur-[150px] rounded-full animate-pulse delay-1000" />
                <div className="absolute top-[30%] left-[20%] w-[30%] h-[30%] bg-white/5 blur-[100px] rounded-full animate-float" />
            </div>

            <div className="vignette" />
            <CustomCursor />
            <Navbar onMenuToggle={() => setIsMenuOpen(!isMenuOpen)} isMenuOpen={isMenuOpen} />
            <Menu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

            <main>
                {children}
            </main>

            <Footer />
        </div>
    )
}

export default Layout
