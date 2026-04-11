import { useState, useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './App.css'

// Import sections
import LoadingScreen from './sections/LoadingScreen'
import Navigation from './sections/Navigation'
import Hero from './sections/Hero'
import About from './sections/About'
import Projects from './sections/Projects'
import Skills from './sections/Skills'
import Contact from './sections/Contact'
import Footer from './sections/Footer'
import CursorGlow from './components/CursorGlow'

gsap.registerPlugin(ScrollTrigger)

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [showContent, setShowContent] = useState(false)
  const mainRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Prevent scroll during loading
    if (isLoading) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }

    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [isLoading])

  const handleLoadingComplete = () => {
    setIsLoading(false)
    // Small delay before showing content for smooth transition
    setTimeout(() => {
      setShowContent(true)
    }, 100)
  }

  return (
    <div className="relative">
      {/* Noise overlay */}
      <div className="noise-overlay" />
      
      {/* Custom cursor glow */}
      <CursorGlow />
      
      {/* Loading Screen */}
      {isLoading && <LoadingScreen onComplete={handleLoadingComplete} />}
      
      {/* Main Content */}
      <div 
        ref={mainRef}
        className={`main-content ${showContent ? 'visible' : ''}`}
      >
        <Navigation />
        <main>
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default App
