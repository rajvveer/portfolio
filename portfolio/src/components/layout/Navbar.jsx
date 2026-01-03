import React, { useState, useEffect } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { HiMenu, HiX, HiMail, HiDownload } from 'react-icons/hi'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')
  
  const { scrollYProgress } = useScroll()
  const progressWidth = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      
      // Detect active section
      const sections = ['hero', 'bento', 'projects', 'skills', 'timeline', 'contact']
      const currentSection = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      
      if (currentSection) {
        setActiveSection(currentSection)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMobileMenuOpen) {
        setIsMobileMenuOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [isMobileMenuOpen])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  const navLinks = [
    { name: 'Home', href: '#hero', id: 'hero' },
    { name: 'About', href: '#bento', id: 'bento' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Timeline', href: '#timeline', id: 'timeline' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ]

  const handleLinkClick = (e, href) => {
    e.preventDefault()
    setIsMobileMenuOpen(false)
    
    const element = document.querySelector(href)
    if (element) {
      const offset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  const menuVariants = {
    closed: {
      opacity: 0,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    },
    open: {
      opacity: 1,
      transition: {
        staggerChildren: 0.07,
        delayChildren: 0.2
      }
    }
  }

  const menuItemVariants = {
    closed: {
      opacity: 0,
      y: 20,
      transition: {
        duration: 0.3
      }
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  }

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'glass-card py-3 shadow-lg backdrop-blur-xl border-b border-white/5' 
            : 'py-6 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center relative">
          {/* Logo */}
          <motion.a
            href="#hero"
            onClick={(e) => handleLinkClick(e, '#hero')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-2xl font-display font-bold gradient-text cursor-pointer relative group"
          >
            <span className="relative z-10">Rajveer.dev</span>
            <motion.div
              className="absolute -inset-2 bg-gradient-to-r from-accent-pink/20 via-accent-purple/20 to-accent-cyan/20 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-opacity"
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            />
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link, index) => {
              const isActive = activeSection === link.id
              
              return (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    delay: index * 0.1,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                  whileHover={{ y: -2 }}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 relative group ${
                    isActive 
                      ? 'text-white' 
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {link.name}
                  
                  {/* Active indicator */}
                  {isActive && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute inset-0 bg-gradient-to-r from-accent-pink/10 via-accent-purple/10 to-accent-cyan/10 rounded-lg border border-accent-purple/20"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  
                  {/* Hover underline */}
                  <motion.span 
                    className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-accent-pink via-accent-purple to-accent-cyan"
                    initial={{ width: 0 }}
                    whileHover={{ width: '100%' }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>
              )
            })}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <motion.a
              href="#contact"
              onClick={(e) => handleLinkClick(e, '#contact')}
              whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(236, 72, 153, 0.5)" }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2.5 rounded-full bg-gradient-to-r from-accent-pink via-accent-purple to-accent-cyan text-white text-sm font-medium flex items-center gap-2 relative overflow-hidden group"
            >
              <motion.div
                className="absolute inset-0 bg-white/20"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.5 }}
              />
              <HiMail className="text-base relative z-10" />
              <span className="relative z-10">Let's Talk</span>
            </motion.a>

            <motion.a
              href="./assets/resume.pdf"
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2.5 rounded-full glass-card text-white text-sm font-medium border border-gray-700 hover:border-accent-purple transition-all duration-300 flex items-center gap-2"
            >
              <HiDownload className="text-base" />
              Resume
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg glass-card border border-gray-800 text-white relative z-50"
            aria-label="Toggle menu"
          >
            <motion.div
              animate={isMobileMenuOpen ? "open" : "closed"}
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <HiX className="text-2xl" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <HiMenu className="text-2xl" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.button>
        </div>

        {/* FIXED: Progress Bar - Now properly positioned without affecting layout */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-0.5 origin-left pointer-events-none"
          style={{ 
            scaleX: scrollYProgress,
            background: 'linear-gradient(to right, #ec4899, #a855f7, #06b6d4)'
          }}
        />
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Mobile Menu */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ 
                type: 'spring', 
                stiffness: 300, 
                damping: 30 
              }}
              className="fixed top-0 right-0 bottom-0 w-[85%] max-w-sm glass-card z-40 md:hidden overflow-hidden border-l border-white/10"
            >
              <div className="flex flex-col h-full">
                {/* Menu Header */}
                <div className="px-6 py-8 border-b border-white/10">
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-2xl font-display font-bold gradient-text"
                  >
                    Navigation
                  </motion.div>
                </div>

                {/* Menu Links */}
                <motion.div
                  variants={menuVariants}
                  initial="closed"
                  animate="open"
                  exit="closed"
                  className="flex-1 px-6 py-8 overflow-y-auto"
                >
                  <div className="flex flex-col gap-2">
                    {navLinks.map((link, index) => {
                      const isActive = activeSection === link.id
                      
                      return (
                        <motion.a
                          key={link.name}
                          href={link.href}
                          variants={menuItemVariants}
                          onClick={(e) => handleLinkClick(e, link.href)}
                          className={`px-5 py-4 rounded-xl transition-all duration-300 relative group ${
                            isActive
                              ? 'bg-gradient-to-r from-accent-pink/10 via-accent-purple/10 to-accent-cyan/10 text-white border border-accent-purple/30'
                              : 'text-gray-400 hover:text-white hover:bg-white/5'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-lg font-medium">{link.name}</span>
                            {isActive && (
                              <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                className="w-2 h-2 rounded-full bg-gradient-to-r from-accent-pink to-accent-purple"
                              />
                            )}
                          </div>
                          
                          {/* Number indicator */}
                          <span className="text-xs text-gray-600 mt-1 block">
                            0{index + 1}
                          </span>
                        </motion.a>
                      )
                    })}
                  </div>
                </motion.div>

                {/* Menu Footer with CTAs */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="px-6 py-6 border-t border-white/10 space-y-3"
                >
                  <motion.a
                    href="#contact"
                    onClick={(e) => {
                      handleLinkClick(e, '#contact')
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full px-6 py-4 rounded-xl bg-gradient-to-r from-accent-pink via-accent-purple to-accent-cyan text-white font-medium flex items-center justify-center gap-2"
                  >
                    <HiMail className="text-lg" />
                    Get In Touch
                  </motion.a>
                  
                  <motion.a
                    href="/resume.pdf"
                    download
                    whileTap={{ scale: 0.95 }}
                    className="w-full px-6 py-4 rounded-xl glass-card text-white font-medium border border-gray-700 flex items-center justify-center gap-2"
                  >
                    <HiDownload className="text-lg" />
                    Download Resume
                  </motion.a>

                  {/* Social Links */}
                  <div className="flex justify-center gap-4 pt-4">
                    {['Github', 'LinkedIn', 'Twitter'].map((social, i) => (
                      <motion.a
                        key={social}
                        href="#"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5 + i * 0.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-10 h-10 rounded-lg glass-card border border-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:border-accent-purple transition-all"
                        aria-label={social}
                      >
                        <span className="text-xs font-medium">{social[0]}</span>
                      </motion.a>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Decorative gradient */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-accent-purple/20 to-transparent rounded-full blur-3xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-accent-pink/20 to-transparent rounded-full blur-3xl pointer-events-none" />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar
