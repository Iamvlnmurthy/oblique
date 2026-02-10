import logo from '../assets/logo-dark.png'
import Magnetic from './Magnetic'

const Footer = () => {
    return (
        <footer className="w-full py-12 px-6 lg:px-24 border-t border-white/5 bg-brand-black">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="flex items-center gap-6">
                    <img src={logo} alt="Oblique Media" className="h-10 w-auto opacity-30 brightness-0 invert" />
                    <div className="flex items-center gap-2 text-[10px] font-mono opacity-30 uppercase tracking-widest">
                        <span>©2026</span>
                        <span className="text-brand-orange">✦</span>
                        <span>Digital Marketing Agency</span>
                    </div>
                </div>

                <div className="flex gap-8 text-[11px] uppercase tracking-widest font-semibold opacity-60">
                    <a href="#" className="hover:text-brand-orange transition-colors">Privacy Policy</a>
                    <a href="#" className="hover:text-brand-orange transition-colors">Terms of Service</a>
                    <a href="#" className="hover:text-brand-orange transition-colors">Cookies</a>
                </div>

                <div className="flex gap-6">
                    {['IG', 'LI', 'TW', 'YT'].map(social => (
                        <Magnetic key={social}>
                            <a
                                href="#"
                                className="w-8 h-8 flex items-center justify-center rounded-full border border-white/10 text-[10px] hover:border-brand-orange hover:text-brand-orange transition-all"
                            >
                                {social}
                            </a>
                        </Magnetic>
                    ))}
                </div>
            </div>
        </footer>
    )
}

export default Footer
