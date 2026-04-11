import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'

interface LoadingScreenProps {
  onComplete: () => void
}

const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const progressRef = useRef<SVGCircleElement>(null)
  const numberRef = useRef<HTMLDivElement>(null)
  const barFillRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)
  const particlesRef = useRef<HTMLDivElement>(null)
  
  const [count, setCount] = useState(8) // ⬅️ reduced from 20 to 8

  useEffect(() => {
    const container = containerRef.current
    const progressCircle = progressRef.current
    const numberEl = numberRef.current
    const barFill = barFillRef.current
    const titleEl = titleRef.current
    const particlesEl = particlesRef.current

    if (!container || !progressCircle || !numberEl || !barFill || !titleEl || !particlesEl) return

    // Create floating particles
    const createParticles = () => {
      for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div')
        particle.className = 'particle'
        particle.style.left = `${Math.random() * 100}%`
        particle.style.animationDelay = `${Math.random() * 15}s`
        particle.style.animationDuration = `${10 + Math.random() * 10}s`
        particlesEl.appendChild(particle)
      }
    }
    createParticles()

    // Initial animations
    const tl = gsap.timeline()

    // Title entrance
    tl.fromTo(titleEl, 
      { opacity: 0, y: 30, scale: 0.9 },
      { opacity: 1, y: 0, scale: 1, duration: 1, ease: 'power3.out' }
    )

    // Countdown circle entrance
    tl.fromTo(progressCircle,
      { strokeDashoffset: 880, opacity: 0 },
      { strokeDashoffset: 0, opacity: 1, duration: 0.8, ease: 'power2.out' },
      '-=0.5'
    )

    tl.fromTo(numberEl,
      { opacity: 0, scale: 0.5 },
      { opacity: 1, scale: 1, duration: 0.6, ease: 'back.out(1.7)' },
      '-=0.3'
    )

    // Countdown animation - 8 seconds ⬅️ reduced from 20
    const countdownDuration = 8
    const circumference = 880 // 2 * PI * 140 (radius)
    
    const countdownInterval = setInterval(() => {
      setCount(prev => {
        const newCount = prev - 1
        const newProgress = ((countdownDuration - newCount) / countdownDuration) * 100
        
        // Update circle progress
        const offset = circumference - (newProgress / 100) * circumference
        gsap.to(progressCircle, {
          strokeDashoffset: offset,
          duration: 0.1,
          ease: 'none'
        })

        // Update bar fill
        gsap.to(barFill, {
          width: `${newProgress}%`,
          duration: 0.1,
          ease: 'none'
        })

        // Pulse animation on number change
        gsap.fromTo(numberEl,
          { scale: 1.2 },
          { scale: 1, duration: 0.3, ease: 'power2.out' }
        )

        return newCount
      })
    }, 1000)

    // Complete loading after 8 seconds ⬅️ reduced from 20
    const completeTimeout = setTimeout(() => {
      clearInterval(countdownInterval)
      
      // Exit animation
      const exitTl = gsap.timeline({
        onComplete: () => {
          onComplete()
        }
      })

      // Scale up and fade out
      exitTl.to(container, {
        scale: 1.5,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.inOut'
      })

      // Rotate elements
      exitTl.to([progressCircle, numberEl], {
        rotation: 360,
        scale: 0,
        duration: 1,
        ease: 'power3.in'
      }, '-=1.2')

    }, countdownDuration * 1000)

    return () => {
      clearInterval(countdownInterval)
      clearTimeout(completeTimeout)
    }
  }, [onComplete])

  return (
    <div ref={containerRef} className="loading-screen">
      {/* Animated background gradient */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />
        
        {/* Animated orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pink-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      {/* Floating particles */}
      <div ref={particlesRef} className="loading-particles" />

      {/* Main content */}
      <div className="countdown-container relative z-10">
        {/* Title — pushed down with increased top margin ⬅️ changed mb-8 to mt-12 mb-12 */}
        <div ref={titleRef} className="text-center mt-12 mb-12">
          <h1 className="glitch-text md:text-4xl font-bold text-white mt-6">
            <span className="text-gradient-cyan">Loading Experience</span>
          </h1>
        </div>

        {/* Countdown Ring */}
        <div className="countdown-ring">
          <svg className="countdown-svg" viewBox="0 0 300 300">
            <defs>
              <linearGradient id="countdownGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#06b6d4" />
                <stop offset="50%" stopColor="#a855f7" />
                <stop offset="100%" stopColor="#ec4899" />
              </linearGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            
            {/* Track circle */}
            <circle 
              className="countdown-track" 
              cx="150" 
              cy="150" 
              r="140"
            />
            
            {/* Progress circle */}
            <circle 
              ref={progressRef}
              className="countdown-progress" 
              cx="150" 
              cy="150" 
              r="140"
              filter="url(#glow)"
            />
          </svg>
          
          {/* Countdown number */}
          <div ref={numberRef} className="countdown-number">
            {count}
          </div>
        </div>

        {/* Labels */}
        <div className="text-center mt-8">
          <p className="countdown-label">Seconds Remaining</p>
        </div>

        {/* Progress bar */}
        <div className="loading-bar">
          <div ref={barFillRef} className="loading-bar-fill" />
        </div>

        {/* Loading text */}
        <p className="loading-text">
          Preparing something amazing...
        </p>

        {/* Decorative elements */}
        <div className="absolute -top-20 -left-20 w-40 h-40 border border-cyan-500/20 rounded-full animate-ping" style={{ animationDuration: '3s' }} />
        <div className="absolute -bottom-20 -right-20 w-40 h-40 border border-purple-500/20 rounded-full animate-ping" style={{ animationDuration: '3s', animationDelay: '1.5s' }} />
      </div>

      {/* Corner decorations */}
      <div className="absolute top-8 left-8 w-16 h-16 border-l-2 border-t-2 border-cyan-500/30" />
      <div className="absolute top-8 right-8 w-16 h-16 border-r-2 border-t-2 border-purple-500/30" />
      <div className="absolute bottom-8 left-8 w-16 h-16 border-l-2 border-b-2 border-pink-500/30" />
      <div className="absolute bottom-8 right-8 w-16 h-16 border-r-2 border-b-2 border-cyan-500/30" />
    </div>
  )
}

export default LoadingScreen