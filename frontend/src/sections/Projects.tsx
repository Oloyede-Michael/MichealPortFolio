import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)
  const projectsRef = useRef<HTMLDivElement>(null)
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  const projects = [
    {
      id: 1,
      title: 'Swifund',
      description: 'A peer-to-peer loan application with real-time credit scoring and secure transactions.',
      image: '/swiftfund_dashboard.png',
      tags: ['React', 'TypeScript', 'Node.js', 'Tailwind', 'Cardano'],
      liveUrl: 'https://swift-funds.vercel.app/',
      githubUrl: 'https://github.com/Oloyede-Michael/SwiftFund',
      color: 'cyan'
    },
    {
      id: 2,
      title: 'NergSolar : solar E-Commerce Platform',
      description: 'A solar e-commerce platform with payment integration and checkout for users',
      image: '/nergsolar_dashboard.png',
      tags: ['Next.js', 'SQLite', 'Django', 'Tailwind'],
      liveUrl: 'https://nergsolar.vercel.app/',
      githubUrl: 'https://github.com/Oloyede-Michael/NergSolar',
      color: 'purple'
    },
    {
      id: 3,
      title: 'WakaMate AI',
      description: 'AI-powered business assistant that helps small scale vendors upscale their productivity',
      image: '/wakamate.png',
      tags: ['Python', 'OpenAI', 'Node.js', 'React', 'Nvidia AI ToolKit'],
      liveUrl: 'https://www.wakamateai.com/',
      githubUrl: 'https://github.com/Oloyede-Michael/WakaMate-AI',
      color: 'pink'
    },
    {
      id: 4,
      title: 'Social Media App',
      description: 'Real-time social platform with messaging, stories, and advanced content discovery algorithms.',
      image: '/images/socialmedia.png',
      tags: ['React Native', 'Firebase', 'Redux', 'Node.js'],
      liveUrl: '#',
      githubUrl: '#',
      color: 'cyan'
    },
    {
      id: 5,
      title: 'StampNet',
      description: 'Decentralised document verification system and digital stamping using blockchain technology',
      image: '/stampnet_dashboard.png',
      tags: ['Vite', 'Node.js', 'React', 'Arbitrum'],
      liveUrl: 'https://stampnet.vercel.app/',
      githubUrl: 'https://github.com/Oloyede-Michael/StampNet',
      color: 'purple'
    },
    {
      id: 6,
      title: 'Vital Reach',
      description: 'VitalReach is a health emergency alert app that captures a victim\'s location and instantly notifies the nearest hospitals or responders',
      image: '/images/vitalreach.png',
      tags: ['React', 'Rest API', 'Geolocation API', 'Django'],
      liveUrl: '#',
      githubUrl: 'https://github.com/Oloyede-Michael/VitalReach',
      color: 'pink'
    }
  ]

  useEffect(() => {
    const section = sectionRef.current
    const title = titleRef.current
    const projectsContainer = projectsRef.current

    if (!section || !title || !projectsContainer) return

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

    // Projects animation
    const projectCards = projectsContainer.querySelectorAll('.project-card-wrapper')
    const projectsTrigger = ScrollTrigger.create({
      trigger: projectsContainer,
      start: 'top 75%',
      onEnter: () => {
        gsap.fromTo(projectCards,
          { opacity: 0, y: 80, scale: 0.95 },
          { 
            opacity: 1, 
            y: 0, 
            scale: 1,
            duration: 0.8, 
            stagger: 0.15, 
            ease: 'power3.out'
          }
        )
      },
      once: true
    })
    triggers.push(projectsTrigger)

    return () => {
      triggers.forEach(t => t.kill())
    }
  }, [])

  return (
    <section 
      ref={sectionRef}
      id="projects" 
      className="relative py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/30 to-slate-950" />
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-[120px]" />

      <div className="relative z-10 w-full px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div ref={titleRef} className="text-center mb-20">
            <p className="section-subtitle mb-4">My Work</p>
            <h2 className="section-title text-white mb-6">
              Featured
              <span className="text-gradient-purple"> Projects</span>
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              A collection of projects that showcase my skills in design, development, 
              and problem-solving. Each project represents a unique challenge and solution.
            </p>
          </div>

          {/* Projects Grid */}
          <div ref={projectsRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={project.id}
                className="project-card-wrapper"
                onMouseEnter={() => setHoveredProject(index)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className="project-card group h-full">
                  {/* Image */}
                  <div className="project-card-image relative aspect-[4/3] overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                    
                    {/* Hover actions */}
                    <div className={`absolute inset-0 flex items-center justify-center gap-4 transition-all duration-500 ${
                      hoveredProject === index ? 'opacity-100' : 'opacity-0'
                    }`}>
                      <a 
                        href={project.liveUrl}
                        className="w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-cyan-500 hover:border-cyan-500 transition-all duration-300 transform hover:scale-110"
                      >
                        <ExternalLink size={20} />
                      </a>
                      <a 
                        href={project.githubUrl}
                        className="w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-purple-500 hover:border-purple-500 transition-all duration-300 transform hover:scale-110"
                      >
                        <Github size={20} />
                      </a>
                    </div>

                    {/* Project number */}
                    <div className="absolute top-4 left-4">
                      <span className="text-6xl font-bold text-white/10">0{project.id}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="project-card-content">
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, tagIndex) => (
                        <span key={tagIndex} className="tag">
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300 flex items-center gap-2">
                      {project.title}
                      <ArrowUpRight 
                        size={18} 
                        className={`transition-all duration-300 ${
                          hoveredProject === index ? 'opacity-100 translate-x-0 translate-y-0' : 'opacity-0 -translate-x-2 translate-y-2'
                        }`}
                      />
                    </h3>

                    {/* Description */}
                    <p className="text-white/50 text-sm leading-relaxed line-clamp-2">
                      {project.description}
                    </p>
                  </div>

                  {/* Border glow on hover */}
                  <div className={`absolute inset-0 rounded-3xl transition-opacity duration-500 pointer-events-none ${
                    hoveredProject === index ? 'opacity-100' : 'opacity-0'
                  }`}>
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View All Button */}
          <div className="text-center mt-16">
            <a 
              href="https://github.com/Oloyede-Michael"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline inline-flex items-center gap-2"
            >
              <span>View All Projects</span>
              <ArrowUpRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects