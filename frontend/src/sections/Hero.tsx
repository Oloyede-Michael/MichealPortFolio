import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { Github, Linkedin, Twitter, Mail } from 'lucide-react'

const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const descRef = useRef<HTMLParagraphElement>(null)
  const buttonsRef = useRef<HTMLDivElement>(null)
  const socialsRef = useRef<HTMLDivElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)
  const typewriterRef = useRef<HTMLSpanElement>(null)

  const [displayedText, setDisplayedText] = useState('')
  const fullWord = 'Developer'

  useEffect(() => {
    const section = sectionRef.current
    const title = titleRef.current
    const subtitle = subtitleRef.current
    const desc = descRef.current
    const buttons = buttonsRef.current
    const socials = socialsRef.current
    const stats = statsRef.current

    if (!section || !title || !subtitle || !desc || !buttons || !socials || !stats) return

    const tl = gsap.timeline({ delay: 0.3 })

    // Subtitle animation
    tl.fromTo(subtitle,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }
    )

    // Title animation with character split effect
    const titleChars = title.querySelectorAll('.char')
    tl.fromTo(titleChars,
      { opacity: 0, y: 100, rotateX: -90 },
      { 
        opacity: 1, 
        y: 0, 
        rotateX: 0,
        duration: 1.2, 
        stagger: 0.03,
        ease: 'power3.out'
      },
      '-=0.4'
    )

    // Start typewriter after title chars animate in
    tl.add(() => {
      let i = 0
      const interval = setInterval(() => {
        setDisplayedText(fullWord.slice(0, i + 1))
        i++
        if (i === fullWord.length) clearInterval(interval)
      }, 80)
    }, '-=0.2')

    // Description
    tl.fromTo(desc,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
      '-=0.6'
    )

    // Buttons
    tl.fromTo(buttons.children,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: 'power3.out' },
      '-=0.4'
    )

    // Social links
    tl.fromTo(socials.children,
      { opacity: 0, x: -20 },
      { opacity: 1, x: 0, duration: 0.5, stagger: 0.1, ease: 'power3.out' },
      '-=0.3'
    )

    // Stats
    tl.fromTo(stats.children,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: 'power3.out' },
      '-=0.3'
    )

    // Floating animation for decorative elements
    gsap.to('.hero-float-1', {
      y: -30,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    })

    gsap.to('.hero-float-2', {
      y: 30,
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    })

    // Scroll indicator bounce
    gsap.to('.scroll-indicator', {
      y: 10,
      duration: 1,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    })

  }, [])

  const splitText = (text: string) => {
    return text.split('').map((char, i) => (
      <span 
        key={i} 
        className="char inline-block"
        style={{ display: char === ' ' ? 'inline' : 'inline-block' }}
      >
        {char === ' ' ? '\u00A0' : char}
      </span>
    ))
  }

  const scrollToProjects = () => {
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section 
      ref={sectionRef}
      id="home" 
      className="hero-section min-h-screen relative flex items-center"
    >
      {/* Background */}
      <div className="hero-bg" />
      <div className="hero-grid" />

      {/* Floating decorative elements */}
      <div className="hero-float-1 absolute top-1/4 right-[15%] w-20 h-20 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-2xl blur-sm" />
      <div className="hero-float-2 absolute bottom-1/3 left-[10%] w-16 h-16 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-sm" />
      <div className="hero-float-1 absolute top-1/3 left-[20%] w-8 h-8 bg-cyan-500/30 rounded-lg" style={{ animationDelay: '1s' }} />
      <div className="hero-float-2 absolute bottom-1/4 right-[20%] w-12 h-12 bg-pink-500/30 rounded-full" style={{ animationDelay: '0.5s' }} />

      {/* Main content */}
      <div className="relative z-10 w-full px-6 lg:px-12 pt-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left content */}
            <div className="space-y-8">
              {/* Subtitle */}
              <p 
                ref={subtitleRef}
                className="section-subtitle"
              >
                Welcome to my world
              </p>

              {/* Title */}
              <h1 
                ref={titleRef}
                className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[0.95]"
              >
                <span className="block text-white mb-2">
                  {splitText('Full Stack')}
                </span>

                {/* Typewriter animated "Developer" */}
                <span className="block text-gradient-rainbow">
                  <span ref={typewriterRef} className="inline-block">
                    {displayedText}
                  </span>
                  <span className="inline-block w-[3px] h-[0.85em] bg-cyan-400 ml-1 align-middle animate-pulse" />
                </span>

                <span className="block text-white/60 text-3xl sm:text-4xl lg:text-5xl mt-4">
                  {splitText('& Python Dev')}
                </span>
              </h1>

              {/* Description */}
              <p 
                ref={descRef}
                className="text-lg text-white/60 max-w-lg leading-relaxed"
              >
                I build fast, scalable web applications and Python-powered tools — 
                turning ideas into polished, high-performance products. Clean code, 
                thoughtful design, and a passion for shipping things that actually work.
              </p>

              {/* CTA Buttons */}
              <div ref={buttonsRef} className="flex flex-wrap gap-4">
                <button 
                  onClick={scrollToProjects}
                  className="btn-primary"
                >
                  <span>View My Work</span>
                </button>
                <a 
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault()
                    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
                  }}
                  className="btn-outline"
                >
                  <span>Get In Touch</span>
                </a>
              </div>

              {/* Social Links */}
              <div ref={socialsRef} className="flex gap-3 pt-4">
                <a href="https://github.com/Oloyede-Michael" target="_blank" rel="noopener noreferrer" className="social-link">
                  <Github size={20} />
                </a>
                <a href="https://www.linkedin.com/in/micheal-oloyede-b4043a254/" target="_blank" rel="noopener noreferrer" className="social-link">
                  <Linkedin size={20} />
                </a>
                <a href="https://x.com/thatkid_mikey" target="_blank" rel="noopener noreferrer" className="social-link">
                  <Twitter size={20} />
                </a>
                <a href="mailto:michealbolu19@gmail.com" className="social-link">
                  <Mail size={20} />
                </a>
              </div>
            </div>

            {/* Right content - Stats */}
            <div className="hidden lg:block">
              <div ref={statsRef} className="grid grid-cols-2 gap-6">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-500 group">
                  <div className="stat-number group-hover:scale-110 transition-transform">15+</div>
                  <p className="text-white/60 mt-2">Projects Completed</p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-500 group mt-12">
                  <div className="stat-number group-hover:scale-110 transition-transform">3+</div>
                  <p className="text-white/60 mt-2">Years Experience</p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-500 group">
                  <div className="stat-number group-hover:scale-110 transition-transform">5+</div>
                  <p className="text-white/60 mt-2">Happy Clients</p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-500 group mt-12">
                  <div className="stat-number group-hover:scale-110 transition-transform">5+</div>
                  <p className="text-white/60 mt-2">Hackathon Wins</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-white/40 text-xs tracking-widest uppercase">Scroll</span>
        <div className="scroll-indicator w-6 h-10 border-2 border-white/20 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full" />
        </div>
      </div>

      {/* Gradient orbs */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[100px] pointer-events-none" />
    </section>
  )
}

export default Hero