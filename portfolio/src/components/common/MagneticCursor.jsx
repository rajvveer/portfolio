import React from 'react'
import { motion } from 'framer-motion'

const MagneticCursor = ({ position }) => {
  return (
    <>
      <motion.div
        className="fixed w-6 h-6 rounded-full border-2 border-accent-pink pointer-events-none z-50 mix-blend-difference"
        animate={{
          x: position.x - 12,
          y: position.y - 12,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
        }}
      />
      <motion.div
        className="fixed w-1 h-1 rounded-full bg-accent-purple pointer-events-none z-50"
        animate={{
          x: position.x - 2,
          y: position.y - 2,
        }}
        transition={{
          type: "spring",
          stiffness: 1000,
          damping: 50,
        }}
      />
    </>
  )
}

export default MagneticCursor
