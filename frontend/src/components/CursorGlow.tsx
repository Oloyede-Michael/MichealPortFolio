import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'

const CursorGlow = () => {
  const cursorRef = useRef<HTMLDivElement>(null)
  const [isTouch, setIsTouch] = useState(false)

  useEffect(() => {
    // Check if touch device
    const checkTouch = window.matchMedia('(pointer: coarse)').matches
    setIsTouch(checkTouch)
    
    if (checkTouch) return

    const cursor = cursorRef.current
    if (!cursor) return

    let mouseX = 0
    let mouseY = 0
    let cursorX = 0
    let cursorY = 0

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }

    const animate = () => {
      // Smooth follow
      cursorX += (mouseX - cursorX) * 0.1
      cursorY += (mouseY - cursorY) * 0.1

      gsap.set(cursor, {
        x: cursorX,
        y: cursorY
      })

      requestAnimationFrame(animate)
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    animate()

    // Show cursor when mouse enters window
    const handleMouseEnter = () => {
      gsap.to(cursor, { opacity: 1, duration: 0.3 })
    }

    const handleMouseLeave = () => {
      gsap.to(cursor, { opacity: 0, duration: 0.3 })
    }

    document.addEventListener('mouseenter', handleMouseEnter)
    document.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseenter', handleMouseEnter)
      document.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  if (isTouch) return null

  return (
    <div 
      ref={cursorRef}
      className="cursor-glow hidden md:block"
      style={{ opacity: 0 }}
    />
  )
}

export default CursorGlow
