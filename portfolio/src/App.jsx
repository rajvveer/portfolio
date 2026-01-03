import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

import Particles from './components/common/Particles';
import Navbar from './components/layout/Navbar';
import MagneticCursor from './components/common/MagneticCursor';

import Hero from './sections/Hero';
import BentoGrid from './sections/BentoGrid';
import ProjectsShowcase from './sections/ProjectsShowcase';
import SkillsRadar from './sections/SkillsRadar';
import Timeline from './sections/Timeline';
import Contact from './sections/Contact';
import Testimonials from './sections/Testimonials';

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile / touch devices
  useEffect(() => {
    const checkIsMobile = () => {
      const isSmallWidth = window.innerWidth < 768;
      const isCoarsePointer = window.matchMedia('(pointer: coarse)').matches;
      setIsMobile(isSmallWidth || isCoarsePointer);
    };

    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  // Track mouse only on non-touch devices
  useEffect(() => {
    if (isMobile) return;

    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isMobile]);

  return (
    <div className="relative min-h-screen bg-[#050816] text-white overflow-x-hidden">
      {/* Heavy background effects only on non-mobile */}
      {!isMobile && <Particles />}
      {!isMobile && <MagneticCursor position={mousePosition} />}

      <Navbar />

      <main className="relative z-10">
        {/* Pass isMobile if you want to use it inside Hero */}
        <Hero isMobile={isMobile} />
        <BentoGrid />
        <ProjectsShowcase />
        <SkillsRadar />
        <Timeline />
        <Testimonials />
        <Contact />
      </main>

      {/* Glowing blurred blobs – disabled on mobile to avoid white flash / jank */}
      {!isMobile && (
        <>
          <motion.div
            className="fixed top-[-6rem] right-[-4rem] w-72 h-72 rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-fuchsia-500 opacity-40 blur-3xl pointer-events-none z-0"
            animate={{ y: [0, -30, 0], scale: [1, 1.2, 1] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="fixed bottom-1/4 left-10 w-40 h-40 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 opacity-20 blur-3xl pointer-events-none z-0"
            animate={{ y: [0, 30, 0], scale: [1, 1.1, 1] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          />
        </>
      )}
    </div>
  );
}

export default App;
