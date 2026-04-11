import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Heart, ArrowUp } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const Footer = () => {
  const footerRef = useRef<HTMLElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const footer = footerRef.current
    const content = contentRef.current

    if (!footer || !content) return

    ScrollTrigger.create({
      trigger: footer,
      start: 'top 90%',
      onEnter: () => {
        gsap.fromTo(content.children,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out' }
        )
      },
      once: true
    })
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const currentYear = new Date().getFullYear()

  const footerLinks = [
    {
      title: 'Navigation',
      links: [
        { label: 'Home', href: '#home' },
        { label: 'About', href: '#about' },
        { label: 'Projects', href: '#projects' },
        { label: 'Skills', href: '#skills' },
        { label: 'Contact', href: '#contact' }
      ]
    },
    {
      title: 'Services',
      links: [
        { label: 'Web Development', href: '#' },
        { label: 'UI/UX Design', href: '#' },
        { label: 'Motion Design', href: '#' },
        { label: 'Consulting', href: '#' }
      ]
    },
    {
      title: 'Connect',
      links: [
        { label: 'GitHub', href: 'https://github.com/Oloyede-Michael' },
        { label: 'LinkedIn', href: 'https://www.linkedin.com/in/micheal-oloyede-b4043a254/' },
        { label: 'Twitter', href: 'https://x.com/thatkid_mikey' },
        { label: 'LeetCode', href: 'https://leetcode.com/u/micheal_oloyede/' }
      ]
    }
  ]

  return (
    <footer 
      ref={footerRef}
      className="relative py-20 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-slate-950" />
      <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/5 to-transparent" />

      {/* Top border gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />

      <div className="relative z-10 w-full px-6 lg:px-12">
        <div ref={contentRef} className="max-w-7xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
            {/* Brand */}
            <div className="lg:col-span-2">
              <a href="#home" className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-xl">M</span>
                </div>
                <span className="text-white font-semibold text-xl">Micheal Oloyede</span>
              </a>
              <p className="text-white/50 leading-relaxed mb-6 max-w-sm">
                Creating immersive digital experiences that blend cutting-edge technology 
                with stunning visual design. Let's build something extraordinary together.
              </p>
              
              {/* Newsletter */}
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="form-input flex-1 py-3"
                />
                <button className="btn-primary py-3 px-5">
                  <span>Subscribe</span>
                </button>
              </div>
            </div>

            {/* Links */}
            {footerLinks.map((section, index) => (
              <div key={index}>
                <h4 className="text-white font-semibold mb-4">{section.title}</h4>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a
                        href={link.href}
                        onClick={(e) => {
                          if (link.href.startsWith('#')) {
                            e.preventDefault()
                            document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' })
                          }
                        }}
                        target={link.href.startsWith('http') ? '_blank' : undefined}
                        rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="text-white/50 hover:text-cyan-400 transition-colors duration-300"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-white/40 text-sm flex items-center gap-1">
              Made with <Heart size={14} className="text-pink-500 fill-pink-500" /> by Micheal Oloyede
            </p>
            
            <p className="text-white/40 text-sm">
              &copy; {currentYear} Portfolio. All rights reserved.
            </p>

            {/* Back to top */}
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 text-white/50 hover:text-cyan-400 transition-colors duration-300 group"
            >
              <span className="text-sm">Back to top</span>
              <div className="w-8 h-8 bg-white/5 border border-white/10 rounded-full flex items-center justify-center group-hover:bg-cyan-500/20 group-hover:border-cyan-500/50 transition-all duration-300">
                <ArrowUp size={14} className="group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Large background text */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none overflow-hidden w-full">
        <div className="text-[20vw] font-bold text-white/[0.02] whitespace-nowrap leading-none">
          PORTFOLIO
        </div>
      </div>
    </footer>
  )
}

export default Footer
