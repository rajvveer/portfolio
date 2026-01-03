import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiStar, HiChevronLeft, HiChevronRight, HiSparkles } from 'react-icons/hi'
import { FaQuoteLeft } from 'react-icons/fa'

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  const testimonials = [
    {
      name: 'Angelo Domenico Parisi',
      role: 'Business Head, HaQademy Italy',
      company: 'HaQademy',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400',
      text: 'Rajveer has created a fantastic website for my business, and I believe many others could level up through his skills. If I ever need to build a new site, I would definitely go back to him.',
      rating: 5,
      project: 'Business Website',
    },
    // Add more testimonials here as you get them
  ]

  const nextTestimonial = () => {
    setDirection(1)
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setDirection(-1)
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
    }),
  }

  const hasMultiple = testimonials.length > 1

  return (
    <section id="testimonials" className="py-20 px-6 relative overflow-hidden">
      {/* Animated Background */}
      <motion.div
        animate={{ 
          scale: [1, 1.2, 1],
          rotate: [0, 180, 0]
        }}
        transition={{ duration: 20, repeat: Infinity }}
        className="absolute top-0 left-1/4 w-96 h-96 bg-accent-pink rounded-full blur-3xl opacity-10"
      />
      <motion.div
        animate={{ 
          scale: [1, 1.3, 1],
          rotate: [0, -180, 0]
        }}
        transition={{ duration: 25, repeat: Infinity }}
        className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-cyan rounded-full blur-3xl opacity-10"
      />

      <div className="max-w-6xl mx-auto relative z-10">
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
            <HiSparkles className="text-accent-yellow animate-pulse" />
            <span className="text-sm">Client {hasMultiple ? 'Reviews' : 'Review'}</span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-display font-bold mb-4">
            What <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="text-gray-400 text-lg">
            {hasMultiple ? 'Trusted by clients worldwide for exceptional results' : 'Building trust through exceptional work'}
          </p>
        </motion.div>

        {/* Main Testimonial Card */}
        <div className="relative">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5, type: "spring", stiffness: 300, damping: 30 }}
              className="relative"
            >
              <div className="neuro-card p-8 md:p-12 rounded-3xl relative overflow-hidden">
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent-pink/5 via-accent-purple/5 to-accent-cyan/5" />

                {/* Quote Icon */}
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 5, repeat: Infinity }}
                  className="absolute top-8 right-8 text-6xl text-accent-purple/10"
                >
                  <FaQuoteLeft />
                </motion.div>

                <div className="relative z-10">
                  {/* Rating Stars */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="flex gap-1 mb-6"
                  >
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 + i * 0.1, type: "spring" }}
                      >
                        <HiStar className="text-2xl text-accent-yellow" />
                      </motion.div>
                    ))}
                  </motion.div>

                  {/* Testimonial Text */}
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-8 font-light"
                  >
                    "{testimonials[currentIndex].text}"
                  </motion.p>

                  {/* Client Info */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="flex items-center gap-4"
                  >
                    {/* Client Image */}
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="relative"
                    >
                      <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-accent-purple">
                        <img
                          src={testimonials[currentIndex].image}
                          alt={testimonials[currentIndex].name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <motion.div
                        animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="absolute inset-0 rounded-full border-2 border-accent-purple"
                      />
                    </motion.div>

                    {/* Client Details */}
                    <div>
                      <h4 className="font-display font-bold text-lg">
                        {testimonials[currentIndex].name}
                      </h4>
                      <p className="text-sm text-gray-400">
                        {testimonials[currentIndex].role} • {testimonials[currentIndex].company}
                      </p>
                      <p className="text-xs text-accent-cyan mt-1">
                        Project: {testimonials[currentIndex].project}
                      </p>
                    </div>
                  </motion.div>
                </div>

                {/* Decorative Elements */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute -bottom-10 -right-10 w-40 h-40 bg-gradient-to-br from-accent-pink/20 to-accent-purple/20 rounded-full blur-2xl"
                />
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons - Only show if multiple testimonials */}
          {hasMultiple && (
            <div className="flex items-center justify-center gap-4 mt-8">
              <motion.button
                whileHover={{ scale: 1.1, x: -5 }}
                whileTap={{ scale: 0.9 }}
                onClick={prevTestimonial}
                className="w-14 h-14 rounded-full glass-card flex items-center justify-center text-2xl hover:bg-accent-purple/20 transition-colors group"
              >
                <HiChevronLeft className="group-hover:text-accent-purple transition-colors" />
              </motion.button>

              {/* Dots Indicator */}
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <motion.button
                    key={index}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => {
                      setDirection(index > currentIndex ? 1 : -1)
                      setCurrentIndex(index)
                    }}
                    className={`h-2 rounded-full transition-all ${
                      index === currentIndex
                        ? 'w-8 bg-gradient-to-r from-accent-pink to-accent-purple'
                        : 'w-2 bg-gray-600 hover:bg-gray-500'
                    }`}
                  />
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.1, x: 5 }}
                whileTap={{ scale: 0.9 }}
                onClick={nextTestimonial}
                className="w-14 h-14 rounded-full glass-card flex items-center justify-center text-2xl hover:bg-accent-purple/20 transition-colors group"
              >
                <HiChevronRight className="group-hover:text-accent-purple transition-colors" />
              </motion.button>
            </div>
          )}
        </div>

        {/* Quality Metrics - HONEST VERSION */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-3 gap-6 mt-16"
        >
          {[
            { icon: '💯', label: 'Client Satisfaction', description: 'Quality Focused' },
            { icon: '⚡', label: 'Fast Delivery', description: 'On-Time Always' },
            { icon: '🚀', label: 'Modern Tech', description: 'Latest Stack' },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 + index * 0.1, type: "spring" }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="glass-card p-6 rounded-2xl text-center group cursor-pointer"
            >
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                className="text-4xl mb-2"
              >
                {item.icon}
              </motion.div>
              <div className="font-bold text-white mb-1">
                {item.label}
              </div>
              <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                {item.description}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Coming Soon Badge - Only show if just 1 testimonial */}
        {!hasMultiple && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, type: "spring" }}
            className="flex justify-center mt-8"
          >
            <div className="glass-card px-6 py-3 rounded-full border border-accent-purple/30">
              <motion.p
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-sm text-gray-400"
              >
                ✨ More testimonials coming soon as I complete more projects!
              </motion.p>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  )
}

export default Testimonials
