import React from 'react'
import { motion } from 'framer-motion'
import Title from '../components/common/Title'
import { frontendSkills, backendSkills } from '../data/skills'

const Skills = () => {
  const SkillBar = ({ skill, index }) => (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="mb-6"
    >
      <div className="flex justify-between mb-2">
        <p className="text-sm uppercase font-medium text-gray-300">{skill.name}</p>
        <span className="text-sm text-designColor">{skill.level}%</span>
      </div>
      <div className="w-full h-2 bgOpacity rounded-md overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          transition={{ duration: 1, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md"
        />
      </div>
    </motion.div>
  )

  return (
    <section id="skills" className="w-full py-20 border-b border-b-black">
      <Title title="Features" des="My Skills" />
      
      <div className="w-full flex flex-col lg:flex-row gap-10 lg:gap-20">
        {/* Frontend Skills */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="w-full lg:w-1/2"
        >
          <div className="py-6 lg:py-12">
            <p className="text-sm text-designColor tracking-[4px] uppercase mb-2">
              Features
            </p>
            <h2 className="text-3xl md:text-4xl font-bold">Frontend</h2>
          </div>
          
          <div className="mt-6">
            {frontendSkills.map((skill, index) => (
              <SkillBar key={skill.name} skill={skill} index={index} />
            ))}
          </div>
        </motion.div>

        {/* Backend Skills */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="w-full lg:w-1/2"
        >
          <div className="py-6 lg:py-12">
            <p className="text-sm text-designColor tracking-[4px] uppercase mb-2">
              Features
            </p>
            <h2 className="text-3xl md:text-4xl font-bold">Backend</h2>
          </div>
          
          <div className="mt-6">
            {backendSkills.map((skill, index) => (
              <SkillBar key={skill.name} skill={skill} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
