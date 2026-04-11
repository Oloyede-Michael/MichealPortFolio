import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Code2, Sparkles, Zap } from 'lucide-react'
import michealprof from '/micheal_prof.png'

gsap.registerPlugin(ScrollTrigger)

const About = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)

  const services = [
    {
      icon: Code2,
      title: 'Web Development',
      description: 'Building fast, scalable, and responsive web applications with modern technologies.',
      color: 'cyan'
    },
    {
      icon: Code2,
      title: 'Python Development',
      description: 'Creating and building Python applications, from web backends to data analysis tools',
      color: 'purple'
    },
    {
      icon: Sparkles,
      title: 'Motion Design',
      description: 'Bringing interfaces to life with smooth animations and micro-interactions.',
      color: 'pink'
    },
    {
      icon: Zap,
      title: 'Performance',
      description: 'Optimizing for speed and efficiency to deliver lightning-fast experiences.',
      color: 'cyan'
    }
  ]

  useEffect(() => {
    const section = sectionRef.current
    const title = titleRef.current
    const content = contentRef.current
    const cards = cardsRef.current
    const image = imageRef.current

    if (!section || !title || !content || !cards || !image) return

    const triggers: ScrollTrigger[] = []

    // Title animation
    const titleTrigger = ScrollTrigger.create({
      trigger: title,
      start: 'top 80%',
      onEnter: () => {
        gsap.fromTo(title.children,
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out' }
        )
      },
      once: true
    })
    triggers.push(titleTrigger)

    // Content animation
    const contentTrigger = ScrollTrigger.create({
      trigger: content,
      start: 'top 75%',
      onEnter: () => {
        gsap.fromTo(content.children,
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: 'power3.out' }
        )
      },
      once: true
    })
    triggers.push(contentTrigger)

    // Image animation
    const imageTrigger = ScrollTrigger.create({
      trigger: image,
      start: 'top 75%',
      onEnter: () => {
        gsap.fromTo(image,
          { opacity: 0, scale: 0.9, x: 50 },
          { opacity: 1, scale: 1, x: 0, duration: 1, ease: 'power3.out' }
        )
      },
      once: true
    })
    triggers.push(imageTrigger)

    // Cards animation
    const cardsTrigger = ScrollTrigger.create({
      trigger: cards,
      start: 'top 80%',
      onEnter: () => {
        gsap.fromTo(cards.children,
          { opacity: 0, y: 50, rotateY: -15 },
          { opacity: 1, y: 0, rotateY: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out' }
        )
      },
      once: true
    })
    triggers.push(cardsTrigger)

    return () => {
      triggers.forEach(t => t.kill())
    }
  }, [])

  return (
    <section 
      ref={sectionRef}
      id="about" 
      className="relative py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/50 to-slate-950" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-cyan-500/5 rounded-full blur-[80px]" />
      <div className="absolute bottom-20 left-20 w-64 h-64 bg-purple-500/5 rounded-full blur-[80px]" />

      <div className="relative z-10 w-full px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div ref={titleRef} className="text-center mb-20">
            <p className="section-subtitle mb-4">About Me</p>
            <h2 className="section-title text-white mb-6">
              Passionate about Building
              <span className="text-gradient-cyan"> Scalable Products</span>
            </h2>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            {/* Text Content */}
            <div ref={contentRef} className="space-y-6">
              <p className="text-xl text-white/80 leading-relaxed">
                I'm a Full Stack Developer and Python Developer with 3+ years of experience 
                building scalable web applications and crafting seamless digital experiences.
              </p>
              <p className="text-white/60 leading-relaxed">
                My expertise spans both frontend and backend development — from building 
                responsive, interactive UIs with React and TypeScript, to developing robust 
                server-side solutions and Python-powered tools for automation, data processing, 
                and web backends. I care deeply about clean code, performance, and delivering 
                products that feel great to use.
              </p>
              <p className="text-white/60 leading-relaxed">
                When I'm not building, you'll find me exploring new technologies, contributing to 
                open-source projects, or sharpening my skills in motion design and UI animation. 
                I believe great software is equal parts logic and craft.
              </p>
              
              {/* Quick stats */}
              <div className="flex flex-wrap gap-8 pt-6">
                <div>
                  <div className="text-3xl font-bold text-gradient-cyan">15+</div>
                  <div className="text-white/50 text-sm">Projects</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gradient-purple">3+</div>
                  <div className="text-white/50 text-sm">Years</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-cyan-400">100%</div>
                  <div className="text-white/50 text-sm">Dedication</div>
                </div>
              </div>
            </div>

            {/* Image/Visual */}
            <div ref={imageRef} className="relative">
              <div className="relative aspect-square max-w-md mx-auto">
                {/* Decorative rotated backgrounds */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-3xl transform rotate-6" />
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-3xl transform -rotate-3" />
                
                {/* Profile image container */}
                <div className="relative bg-slate-900 rounded-3xl overflow-hidden border border-white/10 h-full">
                  <img
                    src={michealprof}
                    alt="Micheal Oloyede"
                    className="w-full h-full object-cover object-top"
                  />
                  {/* Subtle gradient overlay at the bottom for name badge */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-950/80 to-transparent px-6 py-4">
                    <p className="text-white font-semibold text-sm">Micheal Oloyede</p>
                    <p className="text-cyan-400 text-xs">Full Stack Developer</p>
                  </div>
                </div>

                {/* Floating badges */}
                <div className="absolute -top-4 -right-4 bg-slate-800 border border-white/10 rounded-xl px-4 py-2 animate-float">
                  <span className="text-cyan-400 text-sm font-medium">React</span>
                </div>
                <div className="absolute -bottom-4 -left-4 bg-slate-800 border border-white/10 rounded-xl px-4 py-2 animate-float" style={{ animationDelay: '1s' }}>
                  <span className="text-purple-400 text-sm font-medium">TypeScript</span>
                </div>
              </div>
            </div>
          </div>

          {/* Services Cards */}
          <div ref={cardsRef} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div 
                key={index}
                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-cyan-500/30 transition-all duration-500"
              >
                {/* Glow effect on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br from-${service.color}-500/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <div className="relative z-10">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br from-${service.color}-500/20 to-${service.color}-500/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500`}>
                    <service.icon className={`w-6 h-6 text-${service.color}-400`} />
                  </div>
                  <h3 className="text-white font-semibold text-lg mb-2">{service.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About