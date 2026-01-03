import React from 'react'
import { motion } from 'framer-motion'
import Title from '../components/common/Title'
import Card from '../components/common/Card'
import { featuresData } from '../data/features'

const Features = () => {
  return (
    <section id="features" className="w-full py-20 border-b border-b-black">
      <Title title="Features" des="What I Do" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-10">
        {featuresData.map((feature, index) => {
          const Icon = feature.icon
          return (
            <Card key={feature.id}>
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="w-16 h-16 rounded-lg bg-gradient-to-r from-pink-500 to-red-500 flex items-center justify-center text-3xl text-white mb-4"
              >
                <Icon />
              </motion.div>
              
              <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">{feature.des}</p>
            </Card>
          )
        })}
      </div>
    </section>
  )
}

export default Features
