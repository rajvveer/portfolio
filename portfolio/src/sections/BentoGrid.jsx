import React from 'react'
import { motion } from 'framer-motion'
import { HiCode, HiDeviceMobile, HiLightningBolt, HiHeart, HiSparkles, HiTrendingUp, HiCheckCircle, HiClock } from 'react-icons/hi'
import { SiReact, SiNodedotjs, SiMongodb, SiTailwindcss, SiJavascript, SiExpress } from 'react-icons/si'


const BentoGrid = () => {
  return (
    <section id="bento" className="py-20 px-6 relative overflow-hidden">
      {/* Enhanced Background Effects */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.08, 0.12, 0.08]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-accent-purple rounded-full blur-3xl"
      />
      <motion.div 
        animate={{ 
          scale: [1.2, 1, 1.2],
          opacity: [0.08, 0.12, 0.08]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-accent-cyan rounded-full blur-3xl"
      />
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent-pink/5 rounded-full blur-3xl"
      />


      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", duration: 0.8, bounce: 0.4 }}
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full glass-card mb-6 border border-accent-yellow/20"
          >
            <motion.div
              animate={{ rotate: [0, 20, -20, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <HiSparkles className="text-accent-yellow text-xl" />
            </motion.div>
            <span className="text-sm font-semibold">What Makes Me Different</span>
            <motion.div
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-2 h-2 rounded-full bg-accent-yellow"
            />
          </motion.div>
          
          <motion.h2 
            className="text-5xl md:text-7xl font-display font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            What I <span className="gradient-text">Bring</span>
          </motion.h2>
          
          <motion.p 
            className="text-gray-400 text-xl max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            A unique blend of creativity, technical expertise, and passion for building exceptional digital experiences
          </motion.p>
        </motion.div>


        {/* Enhanced Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-6 auto-rows-[minmax(220px,auto)]">
          
          {/* About Me - Large Card with Enhanced Design */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-4 md:row-span-2"
          >
            <motion.div
              whileHover={{ y: -8, boxShadow: "0 30px 60px rgba(0,0,0,0.3)" }}
              transition={{ duration: 0.3 }}
              className="h-full neuro-card p-10 rounded-3xl relative overflow-hidden group cursor-pointer"
            >
              {/* Enhanced Animated Background */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                style={{
                  background: 'radial-gradient(circle at 50% 50%, rgba(236, 72, 153, 0.15) 0%, rgba(168, 85, 247, 0.1) 50%, transparent 100%)'
                }}
              />
              
              {/* Animated Icon */}
              <motion.div
                whileHover={{ rotate: 360, scale: 1.15 }}
                transition={{ duration: 0.7, type: "spring", stiffness: 200 }}
                className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-accent-pink via-accent-purple to-accent-pink mb-8 relative z-10 shadow-2xl"
              >
                <HiHeart className="text-4xl text-white" />
                <motion.div
                  animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent-pink to-accent-purple"
                />
              </motion.div>
              
              <h3 className="text-4xl md:text-5xl font-display font-bold mb-6 relative z-10 group-hover:gradient-text transition-all duration-300">
                About Me
              </h3>
              
              <p className="text-gray-400 text-lg leading-relaxed mb-8 relative z-10">
                Full-stack developer passionate about creating seamless digital experiences. 
                With <span className="text-accent-pink font-bold">3+ years</span> of hands-on expertise in 
                <span className="text-accent-cyan font-bold"> React, React Native, Node.js</span>, 
                and modern web technologies, I transform complex problems into elegant, scalable solutions.
              </p>
              
              {/* Enhanced Skills Tags */}
              <div className="flex flex-wrap gap-3 relative z-10">
                {['Problem Solver', 'Fast Learner', 'Team Player', 'Detail Oriented'].map((tag, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * i, type: "spring", stiffness: 300 }}
                    whileHover={{ scale: 1.15, y: -3, boxShadow: "0 10px 20px rgba(168, 85, 247, 0.4)" }}
                    className="px-5 py-2.5 rounded-full glass-card text-sm font-semibold border border-gray-700 hover:border-accent-purple hover:text-white transition-all cursor-default backdrop-blur-xl"
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>


              {/* Enhanced Decorative Elements */}
              <motion.div
                animate={{ 
                  scale: [1, 1.3, 1],
                  rotate: [0, 180, 360]
                }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute -bottom-16 -right-16 w-48 h-48 bg-gradient-to-br from-accent-pink/30 via-accent-purple/30 to-accent-cyan/30 rounded-full blur-3xl"
              />
            </motion.div>
          </motion.div>


          {/* Tech Stack - Vertical Card with More Technologies */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-2 md:row-span-2"
          >
            <motion.div
              whileHover={{ y: -8, boxShadow: "0 30px 60px rgba(0,0,0,0.3)" }}
              transition={{ duration: 0.3 }}
              className="h-full neuro-card p-8 rounded-3xl relative overflow-hidden group cursor-pointer"
            >
              <motion.div
                whileHover={{ rotate: 360, scale: 1.15 }}
                transition={{ duration: 0.7, type: "spring" }}
                className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-accent-cyan to-primary-500 mb-6 shadow-xl"
              >
                <HiCode className="text-3xl text-white" />
              </motion.div>
              
              <h3 className="text-3xl font-display font-bold mb-6">Tech Stack</h3>
              
              {/* Enhanced Animated Tech Icons */}
              <div className="space-y-4">
                {[
                  { Icon: SiReact, name: 'React', color: '#61DAFB', proficiency: '90%' },
                  { Icon: SiNodedotjs, name: 'Node.js', color: '#339933', proficiency: '85%' },
                  { Icon: SiMongodb, name: 'MongoDB', color: '#47A248', proficiency: '80%' },
                  { Icon: SiTailwindcss, name: 'Tailwind', color: '#06B6D4', proficiency: '92%' },
                  { Icon: SiJavascript, name: 'JavaScript', color: '#F7DF1E', proficiency: '88%' },
                  { Icon: SiExpress, name: 'Express', color: '#FFFFFF', proficiency: '82%' },
                ].map((tech, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, type: "spring" }}
                    whileHover={{ x: 12, scale: 1.05 }}
                    className="flex items-center gap-4 p-4 rounded-xl glass-card group/tech cursor-pointer relative overflow-hidden"
                  >
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: `${tech.color}20` }}
                    >
                      <tech.Icon className="text-2xl" style={{ color: tech.color }} />
                    </motion.div>
                    
                    <div className="flex-1">
                      <span className="font-semibold text-gray-300 group-hover/tech:text-white transition-colors block">
                        {tech.name}
                      </span>
                      <div className="h-1.5 bg-dark-900 rounded-full mt-1.5 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: tech.proficiency }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: i * 0.1 + 0.3 }}
                          className="h-full rounded-full"
                          style={{ backgroundColor: tech.color }}
                        />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>


              <motion.div
                animate={{ 
                  rotate: 360,
                  scale: [1, 1.2, 1]
                }}
                transition={{ 
                  rotate: { duration: 30, repeat: Infinity, ease: "linear" },
                  scale: { duration: 5, repeat: Infinity, ease: "easeInOut" }
                }}
                className="absolute -top-12 -right-12 w-40 h-40 bg-gradient-to-br from-accent-cyan/30 to-primary-500/30 rounded-full blur-3xl"
              />
            </motion.div>
          </motion.div>


          {/* Mobile First - Enhanced Square Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-2"
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -8, boxShadow: "0 20px 40px rgba(0,0,0,0.3)" }}
              transition={{ duration: 0.3 }}
              className="h-full neuro-card p-8 rounded-3xl relative overflow-hidden group cursor-pointer"
            >
              <motion.div
                whileHover={{ rotate: 360, scale: 1.15 }}
                transition={{ duration: 0.7, type: "spring" }}
                className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-accent-purple to-accent-pink mb-6 shadow-xl"
              >
                <HiDeviceMobile className="text-3xl text-white" />
              </motion.div>
              
              <h3 className="text-2xl font-display font-bold mb-3">Mobile First</h3>
              <p className="text-gray-400 text-base leading-relaxed">
                Building responsive, mobile-first applications with <span className="text-accent-purple font-semibold">React Native</span> and modern PWA technologies.
              </p>


              {/* Enhanced Animated Phone */}
              <motion.div
                animate={{ 
                  y: [0, -15, 0],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-8 -right-8 w-32 h-32 opacity-20"
              >
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="5" y="2" width="14" height="20" rx="2" stroke="currentColor" strokeWidth="2" className="text-accent-purple" />
                  <line x1="12" y1="18" x2="12" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-accent-pink" />
                </svg>
              </motion.div>
            </motion.div>
          </motion.div>


          {/* Fast Performance - Enhanced Square Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-2"
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -8, boxShadow: "0 20px 40px rgba(0,0,0,0.3)" }}
              transition={{ duration: 0.3 }}
              className="h-full neuro-card p-8 rounded-3xl relative overflow-hidden group cursor-pointer"
            >
              <motion.div
                whileHover={{ rotate: 360, scale: 1.15 }}
                transition={{ duration: 0.7, type: "spring" }}
                className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-accent-yellow to-accent-cyan mb-6 shadow-xl"
              >
                <HiLightningBolt className="text-3xl text-white" />
              </motion.div>
              
              <h3 className="text-2xl font-display font-bold mb-3">Fast Performance</h3>
              <p className="text-gray-400 text-base mb-5 leading-relaxed">
                Optimized for speed with clean code and best practices
              </p>


              {/* Enhanced Performance Bar */}
              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400 font-medium">Code Quality</span>
                  <motion.span 
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, type: "spring" }}
                    className="text-accent-yellow font-bold text-lg"
                  >
                    A+
                  </motion.span>
                </div>
                <div className="h-3 bg-dark-900 rounded-full overflow-hidden shadow-inner">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: '90%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: 0.6, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-accent-yellow via-accent-cyan to-accent-yellow rounded-full relative"
                  >
                    <motion.div
                      animate={{ x: ['-100%', '200%'] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                    />
                  </motion.div>
                </div>
              </div>


              <motion.div
                animate={{ 
                  scale: [1, 1.5, 1],
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-8 -right-8 w-28 h-28 bg-accent-yellow/30 rounded-full blur-2xl"
              />
            </motion.div>
          </motion.div>


          {/* Latest Tools - Enhanced Square Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-2"
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -8, boxShadow: "0 20px 40px rgba(0,0,0,0.3)" }}
              transition={{ duration: 0.3 }}
              className="h-full neuro-card p-8 rounded-3xl relative overflow-hidden group cursor-pointer"
            >
              <motion.div
                whileHover={{ rotate: 360, scale: 1.15 }}
                transition={{ duration: 0.7, type: "spring" }}
                className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-primary-500 to-accent-purple mb-6 shadow-xl"
              >
                <HiTrendingUp className="text-3xl text-white" />
              </motion.div>
              
              <h3 className="text-2xl font-display font-bold mb-3">Latest Tools</h3>
              <p className="text-gray-400 text-base leading-relaxed">
                Always learning and implementing <span className="text-accent-purple font-semibold">cutting-edge</span> technologies
              </p>


              {/* Enhanced Animated Dots */}
              <div className="flex gap-3 mt-6">
                {[0, 1, 2, 3].map((i) => (
                  <motion.div
                    key={i}
                    animate={{ 
                      scale: [1, 1.8, 1],
                      opacity: [0.5, 1, 0.5]
                    }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                    className="w-3 h-3 rounded-full bg-gradient-to-r from-primary-500 to-accent-purple shadow-lg"
                  />
                ))}
              </div>
            </motion.div>
          </motion.div>


          {/* Enhanced Experience Stats - Wide Card with Realistic Metrics */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-6"
          >
            <motion.div
              whileHover={{ y: -8, boxShadow: "0 30px 60px rgba(0,0,0,0.3)" }}
              transition={{ duration: 0.3 }}
              className="neuro-card p-10 rounded-3xl relative overflow-hidden group cursor-pointer"
            >
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {[
                  { label: 'Projects Completed', value: '15+', icon: '💻', color: 'from-accent-pink to-accent-purple', description: 'Full-Stack Apps' },
                  { label: 'Years Experience', value: '3+', icon: '⭐', color: 'from-accent-cyan to-primary-500', description: 'Building Apps' },
                  { label: 'PRs Merged', value: '~2/wk', icon: '⚡', color: 'from-accent-yellow to-accent-cyan', description: 'Active Coding' },
                  { label: 'Happy Clients', value: '100%', icon: '😊', color: 'from-accent-purple to-accent-pink', description: 'Satisfaction' },
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ 
                      delay: i * 0.1,
                      type: "spring",
                      stiffness: 300,
                      damping: 20
                    }}
                    whileHover={{ scale: 1.08, y: -8 }}
                    className="text-center group/stat cursor-pointer relative"
                  >
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 0.6, type: "spring" }}
                      className="text-5xl mb-4 inline-block"
                    >
                      {stat.icon}
                    </motion.div>
                    
                    <motion.div 
                      className={`text-5xl font-display font-bold mb-2 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 + 0.3 }}
                    >
                      {stat.value}
                    </motion.div>
                    
                    <div className="text-base font-semibold text-gray-300 group-hover/stat:text-white transition-colors mb-1">
                      {stat.label}
                    </div>
                    
                    <div className="text-xs text-gray-500 group-hover/stat:text-gray-400 transition-colors">
                      {stat.description}
                    </div>


                    {/* Hover Glow */}
                    <motion.div
                      className="absolute inset-0 opacity-0 group-hover/stat:opacity-100 transition-opacity rounded-xl"
                      style={{
                        background: `radial-gradient(circle, ${stat.color.includes('pink') ? 'rgba(236, 72, 153, 0.1)' : stat.color.includes('cyan') ? 'rgba(6, 182, 212, 0.1)' : stat.color.includes('yellow') ? 'rgba(251, 191, 36, 0.1)' : 'rgba(168, 85, 247, 0.1)'} 0%, transparent 70%)`
                      }}
                    />
                  </motion.div>
                ))}
              </div>


              {/* Enhanced Background Animation */}
              <motion.div
                animate={{ 
                  x: ['-100%', '100%'],
                }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute top-0 h-full w-1/3 bg-gradient-to-r from-transparent via-accent-purple/10 to-transparent blur-xl"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}


export default BentoGrid
