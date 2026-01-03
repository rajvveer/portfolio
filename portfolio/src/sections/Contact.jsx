import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMail, HiPhone, HiLocationMarker, HiPaperAirplane, HiCheckCircle } from 'react-icons/hi'
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState('')
  const [focusedField, setFocusedField] = useState('')

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    setTimeout(() => {
      setStatus('success')
      setIsSubmitting(false)
      setFormData({ name: '', email: '', subject: '', message: '' })
      
      setTimeout(() => setStatus(''), 5000)
    }, 2000)
  }

  const contactInfo = [
    {
      icon: HiMail,
      title: 'Email',
      value: 'rajveershekhawat626@gmail.com',
      href: 'mailto:rajveershekhawat626@gmail.com',
      gradient: 'from-accent-pink to-accent-purple',
      bgColor: 'bg-accent-pink/10'
    },
    {
      icon: HiPhone,
      title: 'Phone',
      value: '+91 8905696347',
      href: 'tel:+918905696347',
      gradient: 'from-accent-cyan to-primary-500',
      bgColor: 'bg-accent-cyan/10'
    },
    {
      icon: HiLocationMarker,
      title: 'Location',
      value: 'Jaipur',
      href: '#',
      gradient: 'from-accent-purple to-accent-pink',
      bgColor: 'bg-accent-purple/10'
    },
  ]

  const socialLinks = [
    { icon: FaGithub, href: '#', label: 'GitHub', color: '#FFFFFF' },
    { icon: FaLinkedin, href: '#', label: 'LinkedIn', color: '#0A66C2' },
    { icon: FaTwitter, href: '#', label: 'Twitter', color: '#1DA1F2' },
    { icon: FaInstagram, href: '#', label: 'Instagram', color: '#E4405F' },
  ]

  return (
    <section id="contact" className="py-20 px-6 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-800 to-dark-900" />
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0],
        }}
        transition={{ duration: 20, repeat: Infinity }}
        className="absolute top-0 left-1/4 w-96 h-96 bg-accent-purple rounded-full blur-3xl opacity-10"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          rotate: [0, -90, 0],
        }}
        transition={{ duration: 25, repeat: Infinity }}
        className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-cyan rounded-full blur-3xl opacity-10"
      />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-4"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            >
              <HiMail className="text-accent-pink" />
            </motion.div>
            <span className="text-sm">Get In Touch</span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-display font-bold mb-4">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-gray-400 text-lg">Have a project in mind? Let's build something amazing together!</p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Contact Info - Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Contact Cards */}
            {contactInfo.map((info, index) => {
              const Icon = info.icon
              return (
                <motion.a
                  key={index}
                  href={info.href}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.03, x: 10 }}
                  className="block neuro-card p-6 rounded-2xl group cursor-pointer relative overflow-hidden"
                >
                  {/* Hover Glow */}
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: `radial-gradient(circle at 50% 50%, ${info.bgColor.replace('/10', '/5')} 0%, transparent 70%)`
                    }}
                  />

                  <div className="flex items-center gap-4 relative z-10">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${info.gradient} flex items-center justify-center shadow-lg relative`}
                    >
                      <Icon className="text-2xl text-white" />
                      
                      {/* Pulsing Ring */}
                      <motion.div
                        animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className={`absolute inset-0 rounded-2xl border-2 border-accent-pink`}
                      />
                    </motion.div>
                    <div>
                      <h3 className="font-display font-bold text-lg mb-1">{info.title}</h3>
                      <p className="text-gray-400 group-hover:gradient-text transition-all">{info.value}</p>
                    </div>
                  </div>
                </motion.a>
              )
            })}

            {/* Social Links - Redesigned */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="neuro-card p-8 rounded-2xl relative overflow-hidden"
            >
              <h3 className="font-display font-bold text-xl mb-6">Follow Me</h3>
             

              {/* Decorative Element */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute -bottom-10 -right-10 w-32 h-32 bg-gradient-to-br from-accent-pink/20 to-accent-purple/20 rounded-full blur-2xl"
              />
            </motion.div>

            {/* Availability Badge - Enhanced */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="neuro-card p-6 rounded-2xl relative overflow-hidden cursor-pointer group"
            >
              <div className="flex items-center gap-3 relative z-10">
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="relative"
                >
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                  <motion.div
                    animate={{ scale: [1, 2, 1], opacity: [0.7, 0, 0.7] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute inset-0 rounded-full bg-green-500"
                  />
                </motion.div>
                <div>
                  <span className="text-gray-300 font-medium">Available for freelance work</span>
                  <p className="text-sm text-gray-500 mt-1">Usually responds within 24 hours</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form - Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <div className="neuro-card p-8 rounded-3xl relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                  backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
                  backgroundSize: '30px 30px'
                }} />
              </div>

              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Name Field */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="space-y-2"
                  >
                    <label className="block text-sm font-medium text-gray-300">Name</label>
                    <div className="relative">
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('name')}
                        onBlur={() => setFocusedField('')}
                        required
                        className="w-full px-4 py-4 rounded-xl glass-card border border-gray-700 focus:border-accent-purple focus:ring-2 focus:ring-accent-purple/50 outline-none transition-all bg-dark-800/50 text-white"
                        placeholder="Your name"
                      />
                      <AnimatePresence>
                        {focusedField === 'name' && (
                          <motion.div
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            exit={{ scaleX: 0 }}
                            className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-accent-pink to-accent-purple"
                          />
                        )}
                      </AnimatePresence>
                    </div>
                  </motion.div>

                  {/* Email Field */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="space-y-2"
                  >
                    <label className="block text-sm font-medium text-gray-300">Email</label>
                    <div className="relative">
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('email')}
                        onBlur={() => setFocusedField('')}
                        required
                        className="w-full px-4 py-4 rounded-xl glass-card border border-gray-700 focus:border-accent-cyan focus:ring-2 focus:ring-accent-cyan/50 outline-none transition-all bg-dark-800/50 text-white"
                        placeholder="your@email.com"
                      />
                      <AnimatePresence>
                        {focusedField === 'email' && (
                          <motion.div
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            exit={{ scaleX: 0 }}
                            className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-accent-cyan to-primary-500"
                          />
                        )}
                      </AnimatePresence>
                    </div>
                  </motion.div>
                </div>

                {/* Subject Field */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="space-y-2"
                >
                  <label className="block text-sm font-medium text-gray-300">Subject</label>
                  <div className="relative">
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('subject')}
                      onBlur={() => setFocusedField('')}
                      required
                      className="w-full px-4 py-4 rounded-xl glass-card border border-gray-700 focus:border-accent-purple focus:ring-2 focus:ring-accent-purple/50 outline-none transition-all bg-dark-800/50 text-white"
                      placeholder="What's this about?"
                    />
                    <AnimatePresence>
                      {focusedField === 'subject' && (
                        <motion.div
                          initial={{ scaleX: 0 }}
                          animate={{ scaleX: 1 }}
                          exit={{ scaleX: 0 }}
                          className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-accent-purple to-accent-pink"
                        />
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>

                {/* Message Field */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="space-y-2"
                >
                  <label className="block text-sm font-medium text-gray-300">Message</label>
                  <div className="relative">
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('message')}
                      onBlur={() => setFocusedField('')}
                      required
                      rows="6"
                      className="w-full px-4 py-4 rounded-xl glass-card border border-gray-700 focus:border-accent-purple focus:ring-2 focus:ring-accent-purple/50 outline-none transition-all bg-dark-800/50 text-white resize-none"
                      placeholder="Tell me about your project..."
                    />
                    <AnimatePresence>
                      {focusedField === 'message' && (
                        <motion.div
                          initial={{ scaleX: 0 }}
                          animate={{ scaleX: 1 }}
                          exit={{ scaleX: 0 }}
                          className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-accent-pink to-accent-purple"
                        />
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>

                {/* Submit Button - Enhanced */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(236, 72, 153, 0.5)" }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-4 rounded-xl font-medium text-white flex items-center justify-center gap-3 relative overflow-hidden group ${
                    isSubmitting
                      ? 'bg-gray-600 cursor-not-allowed'
                      : 'bg-gradient-to-r from-accent-pink via-accent-purple to-accent-cyan'
                  }`}
                >
                  {/* Animated Background */}
                  {!isSubmitting && (
                    <motion.div
                      animate={{ x: ['-100%', '200%'] }}
                      transition={{ duration: 3, repeat: Infinity }}
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    />
                  )}

                  {isSubmitting ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                      />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <motion.div
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <HiPaperAirplane className="text-xl" />
                      </motion.div>
                    </>
                  )}
                </motion.button>

                {/* Success Message - Enhanced */}
                <AnimatePresence>
                  {status === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10, scale: 0.9 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      className="p-4 rounded-xl bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500 text-green-400 flex items-center gap-3"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", delay: 0.2 }}
                      >
                        <HiCheckCircle className="text-2xl" />
                      </motion.div>
                      <div>
                        <p className="font-medium">Message sent successfully!</p>
                        <p className="text-sm text-green-300">I'll get back to you soon.</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 pt-10 border-t border-gray-800 text-center"
        >
          <p className="text-gray-400">
            © {new Date().getFullYear()} <span className="gradient-text font-bold">Rajveer</span>. 
            Crafted with <motion.span animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 1, repeat: Infinity }} className="inline-block">❤️</motion.span> and React
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
