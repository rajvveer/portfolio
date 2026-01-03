import React, { useState, useRef, useMemo, useCallback } from "react";
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaChevronDown, FaChevronUp, FaStar } from "react-icons/fa";
import { HiSparkles, HiEye } from "react-icons/hi";

const ProjectsShowcase = () => {
  const [filter, setFilter] = useState("all");
  const [showAll, setShowAll] = useState(false);
  const INITIAL_DISPLAY = 6;

  const projects = [
    {
      title: "Solar Commission Distribution App",
      description:
        "A MERN stack app with a 6-level agent hierarchy where each agent can add two sub-agents. Commissions are distributed across upper levels when a project is secured, decreasing with each level. Includes secure auth, dual dashboards, and an admin panel for commission approvals.",
      image:
        "https://i.pinimg.com/736x/2e/1d/fe/2e1dfeac6688b1517aa5c02a465df7a5.jpg",
      tech: ["React", "Node.js", "MongoDB", "Express"],
      category: "fullstack",
      github: "https://github.com/rajvveer/solar_backend",
      live: "https://solaramb.netlify.app/",
      featured: true,
    },
    
    {
      title: "Gravo App",
      description:
        "A launch-ready e-commerce app built with React Native, sharing the same backend as the Grovo website. It includes all essential e-commerce functionalities, integrated Razorpay payment gateway, and intelligent algorithms that personalize product suggestions based on user preferences.",
      image:
        "https://mir-s3-cdn-cf.behance.net/project_modules/2800_webp/bcfb10188604807.659e96be488c2.png",
      tech: ["React Native", "Socket.IO", "MongoDB", "Redis"],
      category: "mobile",
      github: "https://github.com/rajvveer/gravo",
      live: "#",
      featured: true,
    },
    {
      title: "AI Voice Assistant",
      description:
        "An AI-powered voice assistant built with Gemini, offering multiple accents, both male and female voices, and intelligent AI-driven suggestions.",
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800",
      tech: ["HTML", "CSS", "Gemini API", "Framer Motion"],
      category: "frontend",
      github: "#",
      live: "https://lalitai.netlify.app/",
    },
    {
      title: "Chat App",
      description:
        "Real-time chat application built with MERN stack featuring instant messaging, user authentication with JWT, and Socket.IO integration. Includes online status indicators, message history, and emoji support for seamless communication.",
      image:
        "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/b65d48104353905.5f611e5244f3e.jpg",
      tech: ["React", "Node.js", "Socket.IO", "MongoDB"],
      category: "fullstack",
      github: "https://github.com/rajvveer/new_chatapp_frontend",
      live: "https://effervescent-kashata-d8ed07.netlify.app/",
    },
    {
      title: "HaQademy Business Website",
      description:
        "A digital agency website made for my Italian client with modern scroll animations and a beautiful navbar.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
      tech: ["React", "Vite", "JavaScript", "Framer Motion"],
      category: "frontend",
      github: "#",
      live: "https://relaxed-clafoutis-a0f5dc.netlify.app/",
    },
    {
      title: "Gravo Website",
      description:
        "A full-stack MERN e-commerce website with an admin panel, seller dashboard, real-time chat via Socket.IO, OTP authentication, and Stripe payment integration.",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800",
      tech: ["React.js", "Socket.io", "NodeJs", "MongoDb"],
      category: "fullstack",
      github: "https://github.com/rajvveer/gravo",
      live: "https://gravoapp.com",
      featured: true,
    },
    {
      title: "Gravo Seller",
      description:
        "Part of the Grovo app series, this seller-focused application is designed for merchants selling on the platform. Built with an intuitive and modern UI, it shares the same backend as the main Grovo website and buyer app. Key features include product management (create, edit, or remove products), discount code creation, order tracking and status updates, a payments dashboard for viewing transactions, and a withdrawal screen for transferring earnings after deducting the platform's 15% commission.",
      image: "https://mir-s3-cdn-cf.behance.net/project_modules/2800_webp/bcfb10188604807.659e96be488c2.png",
      tech: ["React Native", "Node.js", "JavaScript", "MongoDB"],
      category: "mobile",
      github: "#",
      live: "#",
    },
    {
      title: "Snake Game",
      description:
        "A classic arcade-style game built using HTML, CSS, and JavaScript. It features responsive design, touch and keyboard controls, adjustable grid size and speed, real-time score tracking, and persistent high scores using local storage. Designed with a modern dark UI and smooth gameplay experience.",
      image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800",
      tech: ["HTML", "CSS", "JavaScript", "Socket.io"],
      category: "games",
      github: "https://github.com/rajvveer/snake_game",
      live: "https://fabulous-cassata-1f6a93.netlify.app/",
    },
    {
      title: "Tic Tac Toe",
      description:
        "An interactive Tic Tac Toe game featuring an unbeatable AI opponent built using the Minimax algorithm. Includes both Player vs Player and Player vs Computer modes, adjustable difficulty (easy/unbeatable), undo functionality, and a clean modern interface.",
      image: "https://play-lh.googleusercontent.com/5ENdgpFsRhQt9y_ySp9UK_p-CL0TmhSwW5pKmmzzIW0OLFR3EvAtzAGm6c_IkkfgVg",
      tech: ["Html", "JavaScript", "CSS"],
      category: "games",
      github: "https://github.com/rajvveer/tic_tac_toe",
      live: "https://stirring-madeleine-739094.netlify.app",
    },
  ];

  const filteredProjects = useMemo(() =>
    filter === "all" ? projects : projects.filter((p) => p.category === filter),
    [filter, projects]
  );

  const displayedProjects = useMemo(() =>
    showAll ? filteredProjects : filteredProjects.slice(0, INITIAL_DISPLAY),
    [showAll, filteredProjects]
  );

  const hasMoreProjects = filteredProjects.length > INITIAL_DISPLAY;

  const categories = useMemo(() => ["all", "fullstack", "mobile", "frontend", "games"], []);

  return (
    <section id="projects" className="py-20 px-6 relative overflow-hidden">
      {/* Enhanced Background Effects */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.15, 0.1]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-0 w-96 h-96 bg-accent-pink rounded-full blur-3xl"
      />
      <motion.div 
        animate={{ 
          scale: [1.2, 1, 1.2],
          opacity: [0.1, 0.15, 0.1]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent-cyan rounded-full blur-3xl"
      />
      <motion.div 
        animate={{ 
          rotate: 360
        }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent-purple/5 rounded-full blur-3xl"
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
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass-card mb-6 border border-accent-yellow/20"
          >
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <HiSparkles className="text-accent-yellow text-lg" />
            </motion.div>
            <span className="text-sm font-medium">Portfolio Showcase</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-2 h-2 rounded-full bg-accent-yellow"
            />
          </motion.div>

          <motion.h2 
            className="text-4xl md:text-6xl font-display font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Featured <span className="gradient-text">Projects</span>
          </motion.h2>
          
          <motion.p 
            className="text-gray-400 text-lg mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            Building the future, one project at a time
          </motion.p>
          
          {/* Enhanced Project Count with Icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, type: "spring" }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm text-gray-400"
          >
            <HiEye className="text-accent-cyan" />
            <span>{filteredProjects.length} {filter === 'all' ? 'Total' : filter.charAt(0).toUpperCase() + filter.slice(1)} Project{filteredProjects.length !== 1 ? 's' : ''}</span>
          </motion.div>
        </motion.div>

        {/* Enhanced Filter Buttons with Icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {categories.map((cat, index) => (
            <motion.button
              key={cat}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                delay: index * 0.1,
                type: "spring",
                stiffness: 300,
                damping: 20
              }}
              whileHover={{ 
                scale: 1.08,
                y: -5,
                boxShadow: filter === cat ? "0 10px 40px rgba(236, 72, 153, 0.5)" : "0 10px 30px rgba(255, 255, 255, 0.1)"
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                setFilter(cat);
                setShowAll(false);
              }}
              className={`px-8 py-3.5 rounded-full font-medium capitalize transition-all relative overflow-hidden group ${
                filter === cat
                  ? "bg-gradient-to-r from-accent-pink via-accent-purple to-accent-cyan text-white shadow-2xl"
                  : "glass-card text-gray-300 hover:text-white border border-gray-700 hover:border-accent-purple"
              }`}
            >
              {filter === cat && (
                <>
                  <motion.div
                    layoutId="activeFilter"
                    className="absolute inset-0 bg-gradient-to-r from-accent-pink via-accent-purple to-accent-cyan"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                  <motion.div
                    animate={{ x: ['-100%', '200%'] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                  />
                </>
              )}
              <span className="relative z-10 flex items-center gap-2">
                {cat}
                {filter === cat && <FaStar className="text-xs" />}
              </span>
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid with Stagger */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <AnimatePresence mode="popLayout">
            {displayedProjects.map((project, index) => (
              <EnhancedMagneticCard key={`${filter}-${project.title}`} project={project} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Enhanced Load More Button */}
        {hasMoreProjects && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex flex-col items-center mt-20 gap-6"
          >
            <motion.button
              onClick={() => setShowAll(!showAll)}
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 10px 50px rgba(236, 72, 153, 0.6)",
                y: -5
              }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-10 py-5 rounded-full bg-gradient-to-r from-accent-pink via-accent-purple to-accent-cyan text-white font-semibold overflow-hidden shadow-2xl"
            >
              <motion.div
                animate={{ 
                  x: ['-100%', '200%'],
                  opacity: [0, 1, 0]
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
              />

              <span className="relative z-10 flex items-center gap-3 text-lg">
                {showAll ? (
                  <>
                    Show Less
                    <motion.div
                      animate={{ y: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <FaChevronUp className="text-xl" />
                    </motion.div>
                  </>
                ) : (
                  <>
                    View {filteredProjects.length - INITIAL_DISPLAY} More Projects
                    <motion.div
                      animate={{ y: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <FaChevronDown className="text-xl" />
                    </motion.div>
                  </>
                )}
              </span>
              
              {/* Glow effect */}
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-r from-accent-pink via-accent-purple to-accent-cyan opacity-0 group-hover:opacity-50 blur-xl transition-opacity"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.button>

            {!showAll && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-sm text-gray-500 flex items-center gap-2"
              >
                <motion.span
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  ✨
                </motion.span>
                Click to explore more amazing projects
                <motion.span
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                >
                  ✨
                </motion.span>
              </motion.p>
            )}
          </motion.div>
        )}
      </div>
    </section>
  );
};

// ENHANCED Magnetic Card with GPU-accelerated 3D transforms
const EnhancedMagneticCard = ({ project, index }) => {
  const ref = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  
  // Optimized with GPU acceleration
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smoother spring configuration
  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20, mass: 0.1 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20, mass: 0.1 });

  // Enhanced 3D transforms with better range
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["12deg", "-12deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-12deg", "12deg"]);
  const scale = useTransform(mouseXSpring, [-0.5, 0.5], [1, 1.02]);

  // Glow effect follows mouse
  const glowX = useTransform(mouseXSpring, [-0.5, 0.5], ["0%", "100%"]);
  const glowY = useTransform(mouseYSpring, [-0.5, 0.5], ["0%", "100%"]);

  const handleMouseMove = useCallback((e) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  }, [x, y]);

  const handleMouseLeave = useCallback(() => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  }, [x, y]);

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
  }, []);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30, scale: 0.9 }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1]
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      style={{
        rotateX,
        rotateY,
        scale,
        transformStyle: "preserve-3d",
        willChange: "transform", // GPU acceleration hint
      }}
      className="group cursor-pointer perspective-1000"
    >
      <motion.div 
        className="neuro-card overflow-hidden relative"
        style={{
          transform: "translateZ(20px)", // 3D layer separation
        }}
      >
        {/* Enhanced Animated Glow Border */}
        <motion.div
          className="absolute -inset-[2px] rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: `radial-gradient(circle at ${glowX} ${glowY}, #ec4899, #a855f7, #06b6d4)`,
            filter: 'blur(10px)',
          }}
        />

        {/* Image with parallax effect */}
        <div className="relative h-64 overflow-hidden rounded-t-3xl">
          <motion.img
            style={{
              transform: "translateZ(40px)", // Parallax depth
              scale,
            }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />

          {/* Enhanced Gradient Overlay with shimmer */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/50 to-transparent"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="absolute inset-0"
              style={{
                background: `radial-gradient(circle 200px at ${glowX} ${glowY}, rgba(236, 72, 153, 0.3), transparent)`,
              }}
            />
            
            <div className="absolute inset-0 flex items-end justify-center gap-4 pb-8">
              <motion.a
                whileHover={{ scale: 1.2, rotate: 10 }}
                whileTap={{ scale: 0.9 }}
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                style={{ transform: "translateZ(60px)" }}
                className="w-14 h-14 rounded-full glass-card flex items-center justify-center text-2xl border-2 border-white/20 backdrop-blur-xl hover:border-accent-pink transition-colors"
              >
                <FaGithub />
              </motion.a>
              
              <motion.a
                whileHover={{ scale: 1.1, boxShadow: "0 0 30px rgba(236, 72, 153, 0.8)" }}
                whileTap={{ scale: 0.9 }}
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                style={{ transform: "translateZ(60px)" }}
                className="px-8 h-14 rounded-full bg-gradient-to-r from-accent-pink via-accent-purple to-accent-cyan flex items-center gap-3 font-semibold text-lg relative overflow-hidden shadow-2xl"
              >
                <motion.div
                  animate={{ x: ['-100%', '200%'] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                />
                <span className="relative z-10">Live Demo</span>
                <FaExternalLinkAlt className="relative z-10" />
              </motion.a>
            </div>
          </motion.div>

          {/* Enhanced Category Badge with animation */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.1, x: 5 }}
            style={{ transform: "translateZ(50px)" }}
            className="absolute top-4 left-4 px-4 py-2 rounded-full glass-card text-sm font-semibold capitalize border border-accent-purple/40 backdrop-blur-xl"
          >
            {project.category}
          </motion.div>

          {/* Featured badge */}
          {project.featured && (
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 + index * 0.1, type: "spring" }}
              style={{ transform: "translateZ(50px)" }}
              className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-gradient-to-r from-accent-yellow to-orange-500 text-xs font-bold flex items-center gap-1 shadow-lg"
            >
              <FaStar />
              <span>Featured</span>
            </motion.div>
          )}
        </div>

        {/* Content with 3D depth */}
        <motion.div 
          className="p-8 relative"
          style={{
            transform: "translateZ(30px)",
          }}
        >
          <motion.h3 
            className="text-2xl font-display font-bold mb-4 group-hover:gradient-text transition-all duration-300"
            whileHover={{ x: 5 }}
          >
            {project.title}
          </motion.h3>
          
          {/* Description with smooth expansion */}
          <motion.div
            className="mb-6 overflow-hidden"
            animate={{
              height: isHovered ? "auto" : "4.5rem"
            }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-gray-400 text-sm leading-relaxed">
              {project.description}
            </p>
          </motion.div>

          {/* Tech Stack with hover effects */}
          <div className="flex flex-wrap gap-2.5">
            {project.tech.map((tech, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  delay: i * 0.05,
                  type: "spring",
                  stiffness: 300
                }}
                whileHover={{ 
                  scale: 1.15, 
                  y: -3,
                  boxShadow: "0 5px 15px rgba(168, 85, 247, 0.4)"
                }}
                style={{ transform: "translateZ(40px)" }}
                className="px-4 py-1.5 text-xs font-medium rounded-lg glass-card text-gray-300 border border-gray-700 hover:border-accent-purple hover:text-white transition-all cursor-default backdrop-blur-sm"
              >
                {tech}
              </motion.span>
            ))}
          </div>

          {/* Floating decorative orb */}
          <motion.div
            animate={{ 
              rotate: 360,
              scale: [1, 1.2, 1]
            }}
            transition={{ 
              rotate: { duration: 20, repeat: Infinity, ease: "linear" },
              scale: { duration: 3, repeat: Infinity, ease: "easeInOut" }
            }}
            className="absolute -bottom-16 -right-16 w-40 h-40 bg-gradient-to-br from-accent-pink/20 via-accent-purple/20 to-accent-cyan/20 rounded-full blur-3xl pointer-events-none"
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectsShowcase;
