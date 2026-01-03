import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { SiReact, SiNodedotjs, SiMongodb, SiTailwindcss, SiJavascript, SiTypescript, SiNextdotjs, SiExpress, SiRedis, SiPostgresql, SiDocker, SiGit, SiFirebase, SiGraphql, SiPostman, SiFigma } from 'react-icons/si'

const SkillsRadar = () => {
  const [activeCategory, setActiveCategory] = useState('frontend')

  const skillCategories = {
    frontend: [
      { name: 'React', level: 95, Icon: SiReact, color: '#61DAFB' },
      { name: 'Next.js', level: 85, Icon: SiNextdotjs, color: '#000000' },
      { name: 'React Native', level: 90, Icon: SiReact, color: '#61DAFB' },
      { name: 'Python', level: 88, Icon: SiTypescript, color: '#3178C6' },
      { name: 'Tailwind', level: 92, Icon: SiTailwindcss, color: '#06B6D4' },
      { name: 'JavaScript', level: 95, Icon: SiJavascript, color: '#F7DF1E' },
    ],
    backend: [
      { name: 'Node.js', level: 90, Icon: SiNodedotjs, color: '#339933' },
      { name: 'Express', level: 88, Icon: SiExpress, color: '#FFFFFF' },
      { name: 'MongoDB', level: 85, Icon: SiMongodb, color: '#47A248' },
      { name: 'PostgreSQL', level: 50, Icon: SiPostgresql, color: '#4169E1' },
      { name: 'Redis', level: 75, Icon: SiRedis, color: '#DC382D' },
      { name: 'GraphQL', level: 78, Icon: SiGraphql, color: '#E10098' },
    ],
    tools: [
      { name: 'Git', level: 92, Icon: SiGit, color: '#F05032' },
      { name: 'Docker', level: 75, Icon: SiDocker, color: '#2496ED' },
      { name: 'Firebase', level: 85, Icon: SiFirebase, color: '#FFCA28' },
      { name: 'Postman', level: 88, Icon: SiPostman, color: '#FF6C37' },
      { name: 'Figma', level: 85, Icon: SiFigma, color: '#F24E1E' },
    ]
  }

  return (
    <section id="skills" className="py-20 px-6 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-800 to-dark-900 opacity-50" />
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-accent-purple rounded-full blur-3xl opacity-10 animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent-cyan rounded-full blur-3xl opacity-10 animate-pulse-slow" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-4">
            Tech <span className="gradient-text">Arsenal</span>
          </h2>
          <p className="text-gray-400 text-lg">Tools and technologies I work with daily</p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {Object.keys(skillCategories).map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category)}
              className={`px-8 py-3 rounded-full font-medium capitalize transition-all ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-accent-pink to-accent-purple text-white shadow-lg shadow-accent-purple/50'
                  : 'glass-card text-gray-300 hover:text-white border border-gray-700 hover:border-accent-purple'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Grid with Circular Progress */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories[activeCategory].map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

// Individual Skill Card Component
const SkillCard = ({ skill, index }) => {
  const { name, level, Icon, color } = skill
  const radius = 70
  const circumference = 2 * Math.PI * radius
  const offset = circumference - (level / 100) * circumference

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -10, scale: 1.02 }}
      className="group"
    >
      <div className="neuro-card p-6 rounded-3xl relative overflow-hidden h-full">
        {/* Glowing Background on Hover */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: `radial-gradient(circle at 50% 50%, ${color}15 0%, transparent 70%)`
          }}
        />

        {/* Header */}
        <div className="flex items-center justify-between mb-6 relative z-10">
          <div className="flex items-center gap-3">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
              className="w-12 h-12 rounded-xl flex items-center justify-center relative"
              style={{ backgroundColor: `${color}20` }}
            >
              <Icon className="text-2xl" style={{ color }} />
              
              {/* Glow Effect */}
              <motion.div
                className="absolute inset-0 rounded-xl blur-xl"
                style={{ backgroundColor: color }}
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 0.3 }}
              />
            </motion.div>
            
            <div>
              <h3 className="font-display font-bold text-lg group-hover:gradient-text transition-all">
                {name}
              </h3>
              <p className="text-sm text-gray-500">{level}%</p>
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="relative mb-6 z-10">
          <div className="h-2 bg-dark-900 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${level}%` }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: index * 0.1 }}
              className="h-full rounded-full relative"
              style={{
                background: `linear-gradient(90deg, ${color}80, ${color})`
              }}
            >
              {/* Animated Shine */}
              <motion.div
                animate={{ x: ['-100%', '200%'] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear",
                  delay: index * 0.2
                }}
                className="absolute top-0 h-full w-1/3 bg-gradient-to-r from-transparent via-white to-transparent opacity-30"
              />
            </motion.div>
          </div>
        </div>

        {/* Circular Progress */}
        <div className="flex justify-center relative z-10">
          <div className="relative w-40 h-40">
            <svg className="w-full h-full transform -rotate-90">
              {/* Background Circle */}
              <circle
                cx="80"
                cy="80"
                r={radius}
                stroke="currentColor"
                strokeWidth="8"
                fill="none"
                className="text-dark-900"
              />
              
              {/* Progress Circle */}
              <motion.circle
                cx="80"
                cy="80"
                r={radius}
                stroke={color}
                strokeWidth="8"
                fill="none"
                strokeLinecap="round"
                initial={{ strokeDashoffset: circumference }}
                whileInView={{ strokeDashoffset: offset }}
                viewport={{ once: true }}
                transition={{ duration: 2, delay: index * 0.1, ease: "easeOut" }}
                style={{
                  strokeDasharray: circumference,
                  filter: `drop-shadow(0 0 10px ${color}80)`
                }}
              />
            </svg>

            {/* Center Text */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.5, duration: 0.5 }}
                className="text-center"
              >
                <div 
                  className="text-4xl font-bold font-display"
                  style={{ color }}
                >
                  {level}
                </div>
                <div className="text-sm text-gray-500">%</div>
              </motion.div>
            </div>

            {/* Rotating Glow */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-30 transition-opacity"
              style={{
                background: `conic-gradient(from 0deg, transparent, ${color}, transparent)`,
                filter: 'blur(20px)'
              }}
            />
          </div>
        </div>

        {/* Decorative Corner Glow */}
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 3, repeat: Infinity }}
          className="absolute -bottom-10 -right-10 w-32 h-32 rounded-full blur-2xl"
          style={{ backgroundColor: `${color}30` }}
        />
      </div>
    </motion.div>
  )
}

export default SkillsRadar
