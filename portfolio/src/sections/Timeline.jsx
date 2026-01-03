import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiAcademicCap, HiBriefcase, HiStar, HiCode, HiSparkles } from 'react-icons/hi'

const Timeline = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const timelineData = [
    {
      year: '2025',
      type: 'work',
      icon: HiBriefcase,
      title: 'Full Stack Developer',
      company: 'Freelance',
      description: 'Building scalable web and mobile applications for international clients. Specialized in React, React Native, and Node.js ecosystems.',
      skills: ['React', 'Node.js', 'MongoDB', 'React Native'],
      color: 'from-accent-pink to-accent-purple',
      iconBg: 'bg-accent-pink/20',
    },
    {
      year: '2025',
      type: 'project',
      icon: HiCode,
      title: 'Gravo',
      company: 'Personal Project',
      description: 'Developed Grovo, a launch-ready e-commerce app built with React Native, sharing the same backend as the Grovo website. It includes Razorpay payment integration, all essential e-commerce functionalities, and intelligent algorithms that personalize product recommendations based on user preferences.',
      skills: ['React Native', 'Node.js', 'Razorpay', 'MongoDB'],
      color: 'from-accent-cyan to-primary-500',
      iconBg: 'bg-accent-cyan/20',
    },
    {
      year: '2024',
      type: 'work',
      icon: HiBriefcase,
      title: 'Web Developer',
      company: 'HaQademy (Italy)',
      description: 'Created modern business website with advanced scroll animations and responsive design for Italian marketing company.',
      skills: ['React', 'Framer Motion', 'Tailwind CSS'],
      color: 'from-accent-purple to-accent-pink',
      iconBg: 'bg-accent-purple/20',
    },
    {
      year: '2023',
      type: 'achievement',
      icon: HiStar,
      title: 'React Training Certification',
      company: 'InternShala',
      description: 'Completed 6-week intensive React training with 4.85/5 rating. Built multiple projects including Tic Tac Toe, Chat App, and Box Office App.',
      skills: ['React', 'JavaScript', 'REST APIs'],
      color: 'from-accent-yellow to-accent-cyan',
      iconBg: 'bg-accent-yellow/20',
    },
    {
      year: '2021-?',
      type: 'education',
      icon: HiAcademicCap,
      title: 'B.Tech in Computer Science',
      company: 'MNIT Jaipur',
      description: 'Focused on web development, data structures, and software engineering principles, building a solid foundation in full-stack development. Discontinued the program after completing four semesters to pursue full-time software development and entrepreneurial ventures.',
      skills: ['Data Structures', 'Algorithms', 'DBMS', 'OOP'],
      color: 'from-primary-500 to-accent-purple',
      iconBg: 'bg-primary-500/20',
    },
    {
      year: '2020-2021',
      type: 'education',
      icon: HiAcademicCap,
      title: 'Secondary Education',
      company: 'Prince Academy',
      description: 'Graduated with 96.76%. Developed strong interest in programming and web technologies.',
      skills: ['Mathematics', 'Physics', 'Computer Science'],
      color: 'from-accent-cyan to-primary-500',
      iconBg: 'bg-accent-cyan/20',
    },
  ]

  return (
    <section id="timeline" className="py-20 px-6 relative overflow-hidden">
      {/* Animated Background Elements */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0]
        }}
        transition={{ duration: 20, repeat: Infinity }}
        className="absolute top-1/4 left-0 w-96 h-96 bg-accent-purple rounded-full blur-3xl opacity-10" 
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.3, 1],
          rotate: [0, -90, 0]
        }}
        transition={{ duration: 25, repeat: Infinity }}
        className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent-cyan rounded-full blur-3xl opacity-10" 
      />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-4"
          >
            <HiSparkles className="text-accent-yellow animate-pulse" />
            <span className="text-sm">Career Path</span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-display font-bold mb-4">
            My <span className="gradient-text">Journey</span>
          </h2>
          <p className="text-gray-400 text-lg">From learning to leading</p>
        </motion.div>

        <div className="relative">
          {/* Vertical Line with Gradient */}
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: '100%' }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-accent-pink via-accent-purple to-accent-cyan rounded-full"
            style={{ top: 0 }}
          >
            {/* Animated Glow */}
            <motion.div
              animate={{ y: ['0%', '100%'] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className="w-2 h-20 bg-gradient-to-b from-transparent via-white to-transparent blur-sm absolute left-1/2 transform -translate-x-1/2"
            />
          </motion.div>

          {/* Timeline Items */}
          <div className="space-y-12">
            {timelineData.map((item, index) => {
              const Icon = item.icon
              const isEven = index % 2 === 0
              const isExpanded = expandedIndex === index

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`flex items-center ${isEven ? 'flex-row' : 'flex-row-reverse'} gap-8`}
                >
                  {/* Content Card */}
                  <div className={`flex-1 ${isEven ? 'text-right' : 'text-left'}`}>
                    <motion.div
                      whileHover={{ scale: 1.02, y: -5 }}
                      onClick={() => setExpandedIndex(isExpanded ? null : index)}
                      className="neuro-card p-6 rounded-2xl hover-lift inline-block max-w-md cursor-pointer relative overflow-hidden group"
                    >
                      {/* Hover Glow Effect */}
                      <motion.div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        style={{
                          background: `radial-gradient(circle at ${isEven ? '100%' : '0%'} 50%, ${item.iconBg.replace('/20', '/10')} 0%, transparent 70%)`
                        }}
                      />

                      <div className="relative z-10">
                        {/* Year Badge */}
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${item.color} text-white text-sm font-mono font-bold mb-3 shadow-lg`}
                        >
                          {item.year}
                        </motion.div>

                        {/* Title & Company */}
                        <h3 className="text-2xl font-display font-bold mb-2 group-hover:gradient-text transition-all">
                          {item.title}
                        </h3>
                        <p className="text-accent-cyan font-medium mb-3 flex items-center gap-2 justify-end md:justify-start">
                          <motion.span
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="w-2 h-2 rounded-full bg-accent-cyan"
                          />
                          {item.company}
                        </p>

                        {/* Description */}
                        <motion.div
                          animate={{ height: isExpanded ? 'auto' : '3.5rem' }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <p className="text-gray-400 leading-relaxed text-sm">
                            {item.description}
                          </p>
                        </motion.div>

                        {/* Skills Tags */}
                        <AnimatePresence>
                          {isExpanded && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3 }}
                              className="flex flex-wrap gap-2 mt-4"
                            >
                              {item.skills.map((skill, i) => (
                                <motion.span
                                  key={i}
                                  initial={{ opacity: 0, scale: 0 }}
                                  animate={{ opacity: 1, scale: 1 }}
                                  exit={{ opacity: 0, scale: 0 }}
                                  transition={{ delay: i * 0.05 }}
                                  className="px-3 py-1 text-xs rounded-full glass-card border border-accent-purple/30"
                                >
                                  {skill}
                                </motion.span>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>

                        {/* Expand Indicator */}
                        <motion.div
                          animate={{ rotate: isExpanded ? 180 : 0 }}
                          className="text-gray-500 text-xs mt-3"
                        >
                          {isExpanded ? '▲ Click to collapse' : '▼ Click to expand'}
                        </motion.div>
                      </div>

                      {/* Corner Decoration */}
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className={`absolute ${isEven ? '-bottom-10 -right-10' : '-bottom-10 -left-10'} w-32 h-32 bg-gradient-to-br ${item.color} opacity-10 rounded-full blur-2xl`}
                      />
                    </motion.div>
                  </div>

                  {/* Center Icon */}
                  <motion.div
                    whileHover={{ scale: 1.3, rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className={`relative z-10 w-16 h-16 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg flex-shrink-0`}
                    style={{ boxShadow: `0 0 30px rgba(236, 72, 153, 0.5)` }}
                  >
                    <Icon className="text-2xl text-white" />
                    
                    {/* Pulsing Ring */}
                    <motion.div
                      animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className={`absolute inset-0 rounded-full border-2 border-accent-pink`}
                    />
                  </motion.div>

                  {/* Spacer */}
                  <div className="flex-1" />
                </motion.div>
              )
            })}
          </div>

          {/* End Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, type: "spring" }}
            className="flex justify-center mt-12"
          >
            <div className="glass-card px-6 py-3 rounded-full border border-accent-purple/30">
              <motion.p
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-sm text-gray-400"
              >
                🚀 More exciting milestones coming soon...
              </motion.p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Timeline
