import React from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaTwitter, FaHeart } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="w-full py-10 border-t border-gray-800 mt-20">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <h3 className="text-2xl font-bold gradient-text mb-2">Rajveer</h3>
            <p className="text-gray-400">Full Stack Developer</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex gap-6"
          >
            <a href="https://github.com" className="text-gray-400 hover:text-designColor text-2xl">
              <FaGithub />
            </a>
            <a href="https://linkedin.com" className="text-gray-400 hover:text-designColor text-2xl">
              <FaLinkedin />
            </a>
            <a href="https://twitter.com" className="text-gray-400 hover:text-designColor text-2xl">
              <FaTwitter />
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-8 text-center text-gray-500"
        >
          <p className="flex items-center justify-center gap-2">
            Made with <FaHeart className="text-designColor" /> by Rajveer © {new Date().getFullYear()}
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
