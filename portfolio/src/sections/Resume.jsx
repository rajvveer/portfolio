import React from 'react'
import { motion } from 'framer-motion'
import Title from '../components/common/Title'

const ResumeCard = ({ title, subTitle, result, des }) => (
  <motion.div
    initial={{ opacity: 0, x: -50 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
    className="w-full group"
  >
    <div className="px-6 py-8 rounded-lg glass hover:shadow-shadowTwo transition-all duration-300">
      <div className="flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-xl font-semibold group-hover:text-designColor transition-colors">
              {title}
            </h3>
            <p className="text-sm text-gray-400 mt-2">{subTitle}</p>
          </div>
          {result && (
            <div className="bg-black bg-opacity-50 px-4 py-2 rounded-lg">
              <p className="text-designColor font-semibold">{result}</p>
            </div>
          )}
        </div>
        <p className="text-gray-300 leading-relaxed">{des}</p>
      </div>
    </div>
  </motion.div>
)

const Resume = () => {
  return (
    <section id="resume" className="w-full py-20 border-b border-b-black">
      <Title title="2020-2024" des="My Resume" />
      
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-20">
        {/* Education */}
        <div className="w-full lg:w-1/2">
          <div className="py-6 lg:py-12">
            <p className="text-sm text-designColor tracking-[4px] mb-2">2020-2024</p>
            <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
          </div>
          
          <div className="mt-6 flex flex-col gap-6 border-l-4 border-l-black pl-8">
            <ResumeCard
              title="BCA in Computer Science"
              subTitle="University of Rajasthan (2021-2024)"
              result="Dropout"
              des="It is an undergraduate programme of three years, focused on the application of Computer Science. It imparts a holistic understanding of Internet technologies."
            />
            <ResumeCard
              title="Top Performer (React Training)"
              subTitle="InternShala (May 2023 - Jun 2023)"
              result="4.85/5"
              des="Successfully completed a 6 weeks online certified training on React. The training consisted of Introduction, Tic Tac Toe Game, Box Office App, Chat Application, Custom Backend, and Assignment."
            />
            <ResumeCard
              title="Secondary School Education"
              subTitle="Prince Academy (2020-2021)"
              result="90.6%"
              des="Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale."
            />
          </div>
        </div>

        {/* Experience */}
        <div className="w-full lg:w-1/2">
          <div className="py-6 lg:py-12">
            <p className="text-sm text-designColor tracking-[4px] mb-2">2023-2024</p>
            <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
          </div>
          
          <div className="mt-6 flex flex-col gap-6 border-l-4 border-l-black pl-8">
            <ResumeCard
              title="FreeLance Web Developer"
              subTitle="HaQademy Business Website"
              result="Italy"
              des="An Italian company determined to revolutionize the world of online marketing. Delivered a modern, responsive website with advanced scroll animations."
            />
            <ResumeCard
              title="Full Stack Developer"
              subTitle="Pulse App (Personal Project)"
              result="2024"
              des="Developed a complete social media application using React Native, Node.js, MongoDB, and Socket.IO. Implemented authentication, real-time chat, and media sharing features."
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Resume
