import React from 'react'
import { motion } from 'framer-motion'

const Button = ({ children, onClick, className = '', variant = 'primary' }) => {
  const variants = {
    primary: 'bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600',
    secondary: 'bg-transparent border-2 border-designColor hover:bg-designColor',
    ghost: 'bg-transparent hover:bg-white/10'
  }

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${variants[variant]} ${className}`}
    >
      {children}
    </motion.button>
  )
}

export default Button
