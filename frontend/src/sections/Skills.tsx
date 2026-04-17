import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Skills = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)
  const skillsRef = useRef<HTMLDivElement>(null)
  const orbitRef = useRef<HTMLDivElement>(null)

  const skillCategories = [
    {
      title: 'Frontend',
      skills: ['React', 'TypeScript', 'Next.js', 'Vue.js', 'Tailwind CSS', 'GSAP', 'Three.js']
    },
    {
      title: 'Backend',
      skills: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'GraphQL', 'Redis', 'Docker']
    },
    {
      title: 'Design',
      skills: ['Figma', 'Adobe XD', 'Photoshop', 'Illustrator', 'After Effects', 'Blender']
    },
    {
      title: 'Tools',
      skills: ['Git', 'VS Code', 'Vercel', 'AWS', 'Figma', 'Jest', 'Webpack']
    }
  ]

  const orbitSkills = [
    { name: 'React', size: 'large', orbit: 1 },
    { name: 'TypeScript', size: 'large', orbit: 1 },
    { name: 'Node.js', size: 'medium', orbit: 2 },
    { name: 'Python', size: 'medium', orbit: 2 },
    { name: 'GSAP', size: 'medium', orbit: 2 },
    { name: 'Figma', size: 'small', orbit: 3 },
    { name: 'Three.js', size: 'small', orbit: 3 },
    { name: 'Next.js', size: 'small', orbit: 3 },
    { name: 'GraphQL', size: 'small', orbit: 3 },
    { name: 'Docker', size: 'small', orbit: 3 },
  ]

  useEffect(() => {
    const section = sectionRef.current
    const title = titleRef.current
    const skills = skillsRef.current
    const orbit = orbitRef.current

    if (!section || !title || !skills || !orbit) return

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

    // Skills categories animation
    const skillCards = skills.querySelectorAll('.skill-category')
    const skillsTrigger = ScrollTrigger.create({
      trigger: skills,
      start: 'top 75%',
      onEnter: () => {
        gsap.fromTo(skillCards,
          { opacity: 0, y: 50, rotateX: -20 },
          { opacity: 1, y: 0, rotateX: 0, duration: 0.8, stagger: 0.15, ease: 'power3.out' }
        )
      },
      once: true
    })
    triggers.push(skillsTrigger)

    // Orbit animation
    const orbitElements = orbit.querySelectorAll('.orbit-skill')
    orbitElements.forEach((el, i) => {
      const orbitSkill = orbitSkills[i]
      const duration = 20 + orbitSkill.orbit * 5
      const delay = i * 0.5

      gsap.to(el, {
        rotation: 360,
        duration,
        repeat: -1,
        ease: 'none',
        delay
      })
    })

    // Center pulse animation
    gsap.to('.orbit-center', {
      scale: 1.1,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    })

    return () => {
      triggers.forEach(t => t.kill())
    }
  }, [])

  return (
    <section 
      ref={sectionRef}
      id="skills" 
      className="relative py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/50 to-slate-950" />
      
      {/* Decorative elements */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-1/3 left-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[150px]" />

      <div className="relative z-10 w-full px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div ref={titleRef} className="text-center mb-20">
            <p className="section-subtitle mb-4">Expertise</p>
            <h2 className="section-title text-white mb-6">
              Skills &
              <span className="text-gradient-cyan"> Technologies</span>
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              A comprehensive toolkit of technologies and skills that I use to bring 
              ideas to life. Always learning, always evolving.
            </p>
          </div>

          {/* Skills Content */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Skill Categories */}
            <div ref={skillsRef} className="space-y-6">
              {skillCategories.map((category, index) => (
                <div 
                  key={index}
                  className="skill-category bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-cyan-500/30 transition-all duration-500 group"
                >
                  <h3 className="text-white font-semibold text-lg mb-4 group-hover:text-cyan-400 transition-colors">
                    {category.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <span 
                        key={skillIndex}
                        className="skill-badge"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Orbital Visualization */}
            <div ref={orbitRef} className="relative hidden lg:block">
              <div className="relative w-[500px] h-[500px] mx-auto">
                {/* Orbit rings */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-[400px] h-[400px] border border-white/5 rounded-full" />
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-[300px] h-[300px] border border-white/5 rounded-full" />
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-[200px] h-[200px] border border-white/5 rounded-full" />
                </div>

                {/* Center */}
                <div className="orbit-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-full flex items-center justify-center glow-cyan">
                  <span className="text-white font-bold text-lg">ME</span>
                </div>

                {/* Orbiting skills */}
                {orbitSkills.map((skill, index) => {
                  const radius = skill.orbit === 1 ? 150 : skill.orbit === 2 ? 100 : 70
                  const angle = (index / orbitSkills.length) * 360
                  const size = skill.size === 'large' ? 'w-16 h-16 text-sm' : skill.size === 'medium' ? 'w-12 h-12 text-xs' : 'w-10 h-10 text-xs'
                  
                  return (
                    <div
                      key={index}
                      className="orbit-skill absolute top-1/2 left-1/2"
                      style={{
                        transform: `translate(-50%, -50%) rotate(${angle}deg) translateX(${radius}px)`
                      }}
                    >
                      <div 
                        className={`${size} bg-slate-800 border border-white/10 rounded-full flex items-center justify-center text-white font-medium hover:border-cyan-500 hover:bg-slate-700 transition-all duration-300 cursor-default`}
                        style={{
                          transform: `rotate(-${angle}deg)`
                        }}
                      >
                        {skill.name.slice(0, 2)}
                      </div>
                    </div>
                  )
                })}

                {/* Glow effects */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-cyan-500/10 rounded-full blur-[60px]" />
              </div>
            </div>
          </div>

          {/* Experience Timeline */}
          <div className="mt-24">
            <h3 className="text-2xl font-semibold text-white text-center mb-12">
              Experience <span className="text-gradient-purple">Timeline</span>
            </h3>
            
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500 via-purple-500 to-transparent hidden md:block" />
              
              <div className="space-y-12">
                {[
                  {
                    year: '2025 - Present',
                    role: 'Back-end Engineer (Skill-Based Team)',
                    company: 'Cowrywise',
                    description: 'Contributed to backend engineering tasks as part of Cowrywise skill-based team, focusing on building and maintaining Django and Node.js based data models.  '
                  },
                  {
                    year: '2024 - 2025',
                    role: 'Backend Developer',
                    company: 'FLOO CRM',
                    description: 'Designed and implemented Django models to structure and manage application data effectively'
                  },
                  {
                    year: '2022 - 2023',
                    role: 'Junior Python Developer',
                    company: 'Lozenge Tech Hub',
                    description: 'Started my professional journey building python based applications and Learning and understanding Data Structures and Algorithms'
                  }
                ].map((item, index) => (
                  <div 
                    key={index}
                    className={`relative grid md:grid-cols-2 gap-8 ${index % 2 === 0 ? '' : 'md:text-right'}`}
                  >
                    <div className={`${index % 2 === 0 ? 'md:pr-12' : 'md:order-2 md:pl-12'}`}>
                      <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-500">
                        <span className="text-cyan-400 text-sm font-medium">{item.year}</span>
                        <h4 className="text-white font-semibold text-lg mt-1">{item.role}</h4>
                        <p className="text-purple-400 text-sm">{item.company}</p>
                        <p className="text-white/50 text-sm mt-3">{item.description}</p>
                      </div>
                    </div>
                    
                    {/* Timeline dot */}
                    <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-full border-4 border-slate-950" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
