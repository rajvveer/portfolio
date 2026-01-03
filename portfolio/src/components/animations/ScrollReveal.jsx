import React from 'react'
import { motion } from 'framer-motion'

const ScrollReveal = ({ children, variant = 'fadeIn' }) => {
  const isMobile =
    typeof window !== 'undefined' &&
    window.innerWidth < 768;

  const variants = {
    fadeIn: {
      hidden: { opacity: 0, y: 50 },
      visible: { opacity: 1, y: 0 }
    },
    slideLeft: {
      hidden: { opacity: 0, x: -100 },
      visible: { opacity: 1, x: 0 }
    },
    slideRight: {
      hidden: { opacity: 0, x: 100 },
      visible: { opacity: 1, x: 0 }
    },
    scale: {
      hidden: { opacity: 0, scale: 0.8 },
      visible: { opacity: 1, scale: 1 }
    }
  }

  // 📱 MOBILE → return children WITHOUT motion
  if (isMobile) {
    return <div>{children}</div>
  }

  // 💻 DESKTOP → normal animations
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      variants={variants[variant]}
    >
      {children}
    </motion.div>
  )
}

export default ScrollReveal
