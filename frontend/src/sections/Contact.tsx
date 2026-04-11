import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Send, Mail, MapPin, Phone, Github, Linkedin, Twitter, ArrowUpRight } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)
  const formRef = useRef<HTMLFormElement>(null)
  const infoRef = useRef<HTMLDivElement>(null)
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'michealbolu19@gmail.com',
      href: 'mailto:michealbolu19@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+234 8103552880',
      href: 'tel:+2348103552880'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Lagos, Nigeria',
      href: '#'
    }
  ]

  const socialLinks = [
    { icon: Github, label: 'GitHub', href: 'https://github.com/Oloyede-Michael' },
    { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/micheal-oloyede-b4043a254/' },
    { icon: Twitter, label: 'Twitter', href: 'https://x.com/thatkid_mikey' }
  ]

  useEffect(() => {
    const section = sectionRef.current
    const title = titleRef.current
    const form = formRef.current
    const info = infoRef.current

    if (!section || !title || !form || !info) return

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

    // Form animation
    const formTrigger = ScrollTrigger.create({
      trigger: form,
      start: 'top 75%',
      onEnter: () => {
        gsap.fromTo(form,
          { opacity: 0, x: -50 },
          { opacity: 1, x: 0, duration: 1, ease: 'power3.out' }
        )
      },
      once: true
    })
    triggers.push(formTrigger)

    // Info animation
    const infoTrigger = ScrollTrigger.create({
      trigger: info,
      start: 'top 75%',
      onEnter: () => {
        gsap.fromTo(info.children,
          { opacity: 0, x: 50 },
          { opacity: 1, x: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out' }
        )
      },
      once: true
    })
    triggers.push(infoTrigger)

    return () => {
      triggers.forEach(t => t.kill())
    }
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setSubmitted(true)
    setFormData({ name: '', email: '', subject: '', message: '' })
    
    // Reset submitted state after 3 seconds
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section 
      ref={sectionRef}
      id="contact" 
      className="relative py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/50 to-slate-950" />
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-[150px]" />

      <div className="relative z-10 w-full px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div ref={titleRef} className="text-center mb-20">
            <p className="section-subtitle mb-4">Get In Touch</p>
            <h2 className="section-title text-white mb-6">
              Let's Create
              <span className="text-gradient-rainbow"> Something Amazing</span>
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Have a project in mind? Let's discuss how we can work together to bring your vision to life.
            </p>
          </div>

          {/* Contact Content */}
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-3">
              <form 
                ref={formRef}
                onSubmit={handleSubmit}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8"
              >
                <div className="grid sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-white/60 text-sm mb-2">Your Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="form-input"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-white/60 text-sm mb-2">Your Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="form-input"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label className="block text-white/60 text-sm mb-2">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="form-input"
                    placeholder="Project Inquiry"
                  />
                </div>
                
                <div className="mb-6">
                  <label className="block text-white/60 text-sm mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="form-input resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`btn-primary w-full flex items-center justify-center gap-2 ${
                    isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : submitted ? (
                    <>
                      <span>Message Sent!</span>
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div ref={infoRef} className="lg:col-span-2 space-y-6">
              {/* Contact Details */}
              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className="flex items-center gap-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 hover:bg-white/10 hover:border-cyan-500/30 transition-all duration-500 group"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <item.icon className="w-5 h-5 text-cyan-400" />
                    </div>
                    <div>
                      <p className="text-white/50 text-sm">{item.label}</p>
                      <p className="text-white font-medium">{item.value}</p>
                    </div>
                    <ArrowUpRight 
                      size={18} 
                      className="ml-auto text-white/30 group-hover:text-cyan-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300"
                    />
                  </a>
                ))}
              </div>

              {/* Social Links */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                <p className="text-white/50 text-sm mb-4">Follow Me</p>
                <div className="flex gap-3">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-link flex-1"
                    >
                      <social.icon size={20} />
                    </a>
                  ))}
                </div>
              </div>

              {/* Availability Badge */}
              <div className="bg-gradient-to-br from-cyan-500/10 to-purple-500/10 backdrop-blur-sm border border-cyan-500/30 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-green-400 text-sm font-medium">Available for Work</span>
                </div>
                <p className="text-white/60 text-sm">
                  I'm currently taking on new projects. Let's discuss how I can help bring your ideas to life.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
