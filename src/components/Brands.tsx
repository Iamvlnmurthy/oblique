import React from 'react'
import Magnetic from './Magnetic'
import Marquee from './Marquee'

const Brands = () => {
    const brandNames = ['Meta', 'Google', 'Shopify', 'Adobe', 'OpenAI', 'Amazon', 'Snapchat', 'Pinterest']

    return (
        <section className="py-24 border-y border-white/5 bg-brand-black/50">
            <div className="container mx-auto px-6 mb-16 text-center">
                <span className="text-[10px] uppercase tracking-[0.4em] text-white/40 font-bold">Strategic Partnerships</span>
            </div>

            <Marquee speed={40} className="flex items-center">
                {brandNames.map(name => (
                    <div key={name} className="mx-12 lg:mx-20">
                        <Magnetic>
                            <div className="text-4xl lg:text-7xl font-heading font-bold opacity-10 hover:opacity-100 hover:text-brand-orange transition-all cursor-pointer select-none">
                                {name}
                            </div>
                        </Magnetic>
                    </div>
                ))}
            </Marquee>
        </section>
    )
}

export default Brands
