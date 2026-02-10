import React, { useEffect } from 'react'
import Lenis from 'lenis'
import Layout from './components/Layout'
import Hero from './components/Hero'
import WhoWeAre from './components/WhoWeAre'
import Brands from './components/Brands'
import Services from './components/Services'
import WorkPreview from './components/WorkPreview'
import Process from './components/Process'
import FinalCTA from './components/FinalCTA'

import { AnimatePresence } from 'framer-motion'
import Preloader from './components/Preloader'

function App() {
    const [isLoading, setIsLoading] = React.useState(true)

    useEffect(() => {
        const lenis = new Lenis()

        function raf(time: number) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)

        return () => {
            lenis.destroy()
        }
    }, [])

    return (
        <React.Fragment>
            <AnimatePresence mode="wait">
                {isLoading && (
                    <Preloader key="preloader" onComplete={() => setIsLoading(false)} />
                )}
            </AnimatePresence>

            <Layout>
                <Hero />
                <WhoWeAre />
                <Brands />
                <WorkPreview />
                <Services />
                <Process />
                <FinalCTA />
            </Layout>
        </React.Fragment>
    )
}

export default App
