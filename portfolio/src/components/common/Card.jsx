import React from 'react'
import { motion } from 'framer-motion'

const Card = ({ children, className = '' }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ y: -10, transition: { duration: 0.3 } }}
      className={`glass rounded-lg p-6 shadow-shadowOne hover:shadow-shadowTwo transition-all duration-300 ${className}`}
    >
      {children}
    </motion.div>
  )
}

export default Card
