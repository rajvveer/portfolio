import React, { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FaGithub, FaLinkedin, FaTwitter, FaArrowDown } from 'react-icons/fa';
import { HiCode, HiSparkles } from 'react-icons/hi';

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  return (
    <section id="hero" ref={ref} className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* INSANE Morphing Blob Canvas Background */}
      {/* <MorphingBlobCanvas /> */}

      <motion.div style={{ y, opacity, scale }} className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-accent-yellow/20"
            >
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              >
                <HiSparkles className="text-accent-yellow" />
              </motion.div>
              <span className="text-sm font-medium">Open to Opportunities</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="text-5xl md:text-7xl font-display font-bold leading-tight"
            >
              Building <span className="gradient-text">Exceptional</span> Digital Products
            </motion.h1>

            <div className="text-2xl md:text-3xl text-gray-300 font-display h-20 flex items-center">
              <TypeAnimation
                sequence={[
                  'Full Stack Developer 🚀',
                  2000,
                  'React Native Expert 📱',
                  2000,
                  'Mobile App Architect 💎',
                  2000,
                  'API Integration Specialist ⚡',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-lg text-gray-400 max-w-xl leading-relaxed"
            >
              Crafting seamless web and mobile experiences with React, React Native, and Node.js. 
              Passionate about clean code, modern UX, and building scalable solutions that users love.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(236, 72, 153, 0.6)" }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-full bg-gradient-to-r from-accent-pink via-accent-purple to-accent-cyan text-white font-medium flex items-center gap-2 group relative overflow-hidden"
              >
                <motion.div
                  className="absolute inset-0 bg-white/20"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.5 }}
                />
                <span className="relative z-10">View My Work</span>
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="relative z-10"
                >
                  <HiCode className="text-xl" />
                </motion.div>
              </motion.a>
              
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05, borderColor: "rgba(168, 85, 247, 0.8)" }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-full glass-card text-white font-medium border border-gray-700 hover:border-accent-purple transition-all duration-300"
              >
                Let's Connect
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="flex gap-4 pt-4"
            >
              {[
                { Icon: FaGithub, href: 'https://github.com/rajvveer/new_chatapp_frontend', color: 'hover:text-white', label: 'GitHub' },
                { Icon: FaLinkedin, href: '#', color: 'hover:text-blue-500', label: 'LinkedIn' },
                { Icon: FaTwitter, href: '#', color: 'hover:text-cyan-400', label: 'Twitter' },
              ].map(({ Icon, href, color, label }, i) => (
                <motion.a
                  key={i}
                  href={href}
                  aria-label={label}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className={`w-12 h-12 rounded-full glass-card flex items-center justify-center text-xl text-gray-400 ${color} transition-colors border border-gray-800 hover:border-accent-purple`}
                >
                  <Icon />
                </motion.a>
              ))}
            </motion.div>

            {/* Tech Stack */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="pt-6"
            >
              <p className="text-sm text-gray-500 mb-3 uppercase tracking-wider">Tech Stack</p>
              <div className="flex flex-wrap gap-3">
                {['React', 'React Native', 'Node.js', 'MongoDB', 'Expo', 'TypeScript'].map((tech, i) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8 + i * 0.1 }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="px-4 py-2 rounded-lg glass-card text-sm text-gray-300 border border-gray-800/50 hover:border-accent-purple/50 transition-all"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right - EPIC ANIME DEV CHARACTER */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex justify-center items-center"
          >
            <EpicAnimeDeveloperSVG />
          </motion.div>
        </div>
      </motion.div>
      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 cursor-pointer z-20"
        onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-gray-500 uppercase tracking-widest">Scroll</span>
          <motion.div
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <FaArrowDown className="text-xl text-gray-500" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

// INSANE Morphing Blob Canvas
const MorphingBlobCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    const p = new Array(512);
    const permutation = [151,160,137,91,90,15,131,13,201,95,96,53,194,233,7,225,140,36,103,30,69,142,8,99,37,240,21,10,23,190,6,148,247,120,234,75,0,26,197,62,94,252,219,203,117,35,11,32,57,177,33,88,237,149,56,87,174,20,125,136,171,168,68,175,74,165,71,134,139,48,27,166,77,146,158,231,83,111,229,122,60,211,133,230,220,105,92,41,55,46,245,40,244,102,143,54,65,25,63,161,1,216,80,73,209,76,132,187,208,89,18,169,200,196,135,130,116,188,159,86,164,100,109,198,173,186,3,64,52,217,226,250,124,123,5,202,38,147,118,126,255,82,85,212,207,206,59,227,47,16,58,17,182,189,28,42,223,183,170,213,119,248,152,2,44,154,163,70,221,153,101,155,167,43,172,9,129,22,39,253,19,98,108,110,79,113,224,232,178,185,112,104,218,246,97,228,251,34,242,193,238,210,144,12,191,179,162,241,81,51,145,235,249,14,239,107,49,192,214,31,181,199,106,157,184,84,204,176,115,121,50,45,127,4,150,254,138,236,205,93,222,114,67,29,24,72,243,141,128,195,78,66,215,61,156,180];
    
    for (let i = 0; i < 256; i++) {
      p[256 + i] = p[i] = permutation[i];
    }

    const fade = t => t * t * t * (t * (t * 6 - 15) + 10);
    const lerp = (t, a, b) => a + t * (b - a);
    const grad = (hash, x, y, z) => {
      const h = hash & 15;
      const u = h < 8 ? x : y;
      const v = h < 4 ? y : h == 12 || h == 14 ? x : z;
      return ((h & 1) == 0 ? u : -u) + ((h & 2) == 0 ? v : -v);
    };

    const noise = (x, y, z) => {
      const X = Math.floor(x) & 255;
      const Y = Math.floor(y) & 255;
      const Z = Math.floor(z) & 255;
      x -= Math.floor(x);
      y -= Math.floor(y);
      z -= Math.floor(z);
      const u = fade(x);
      const v = fade(y);
      const w = fade(z);
      const A = p[X] + Y;
      const AA = p[A] + Z;
      const AB = p[A + 1] + Z;
      const B = p[X + 1] + Y;
      const BA = p[B] + Z;
      const BB = p[B + 1] + Z;

      return lerp(w, lerp(v, lerp(u, grad(p[AA], x, y, z), grad(p[BA], x - 1, y, z)), lerp(u, grad(p[AB], x, y - 1, z), grad(p[BB], x - 1, y - 1, z))), lerp(v, lerp(u, grad(p[AA + 1], x, y, z - 1), grad(p[BA + 1], x - 1, y, z - 1)), lerp(u, grad(p[AB + 1], x, y - 1, z - 1), grad(p[BB + 1], x - 1, y - 1, z - 1))));
    };

    class MorphingBlob {
      constructor(x, y, radius, colors) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.colors = colors;
        this.points = [];
        this.numPoints = 8;
        this.noiseOffset = Math.random() * 1000;
        this.createPoints();
      }

      createPoints() {
        for (let i = 0; i < this.numPoints; i++) {
          const angle = (i / this.numPoints) * Math.PI * 2;
          this.points.push({
            angle,
            distance: this.radius,
            noiseOffset: this.noiseOffset + i * 100
          });
        }
      }

      update(time) {
        this.points.forEach((point, i) => {
          const noiseValue = noise(
            Math.cos(point.angle) * 0.5 + time * 0.0003,
            Math.sin(point.angle) * 0.5 + time * 0.0003,
            point.noiseOffset * 0.001
          );
          point.distance = this.radius * (0.8 + noiseValue * 0.4);
        });
      }

      draw(ctx) {
        const grd = ctx.createLinearGradient(
          this.x - this.radius,
          this.y - this.radius,
          this.x + this.radius,
          this.y + this.radius
        );
        grd.addColorStop(0, this.colors[0]);
        grd.addColorStop(1, this.colors[1]);

        ctx.fillStyle = grd;
        ctx.beginPath();

        this.points.forEach((point, i) => {
          const x = this.x + Math.cos(point.angle) * point.distance;
          const y = this.y + Math.sin(point.angle) * point.distance;
          
          if (i === 0) {
            ctx.moveTo(x, y);
          } else {
            const prevPoint = this.points[i - 1];
            const prevX = this.x + Math.cos(prevPoint.angle) * prevPoint.distance;
            const prevY = this.y + Math.sin(prevPoint.angle) * prevPoint.distance;
            
            const cpX = (prevX + x) / 2;
            const cpY = (prevY + y) / 2;
            
            ctx.quadraticCurveTo(prevX, prevY, cpX, cpY);
          }
        });

        const firstPoint = this.points[0];
        const lastPoint = this.points[this.points.length - 1];
        const firstX = this.x + Math.cos(firstPoint.angle) * firstPoint.distance;
        const firstY = this.y + Math.sin(firstPoint.angle) * firstPoint.distance;
        const lastX = this.x + Math.cos(lastPoint.angle) * lastPoint.distance;
        const lastY = this.y + Math.sin(lastPoint.angle) * lastPoint.distance;
        
        ctx.quadraticCurveTo(lastX, lastY, (lastX + firstX) / 2, (lastY + firstY) / 2);
        
        ctx.closePath();
        ctx.fill();
      }
    }

    const blobs = [
      new MorphingBlob(width * 0.25, height * 0.3, Math.min(width, height) * 0.3, ['#ec4899', '#a855f7']),
      new MorphingBlob(width * 0.75, height * 0.7, Math.min(width, height) * 0.25, ['#06b6d4', '#8b5cf6']),
      new MorphingBlob(width * 0.6, height * 0.4, Math.min(width, height) * 0.2, ['#fbbf24', '#ec4899'])
    ];

    const animate = (time) => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, width, height);

      blobs.forEach(blob => {
        blob.update(time);
        blob.draw(ctx);
      });

      requestAnimationFrame(animate);
    };

    animate(0);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 -z-10 opacity-30 blur-xl" />;
};

// EPIC ANIME DEVELOPER CHARACTER - IMPROVED!
const EpicAnimeDeveloperSVG = () => {
  return (
    <div className="relative w-full max-w-2xl mx-auto">
      {/* Massive Glow */}
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.4, 0.6, 0.4],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 rounded-full blur-3xl -z-10"
      />

      <motion.svg
        viewBox="0 0 600 700"
        className="w-full h-auto drop-shadow-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Gaming Chair */}
        <motion.g
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <ellipse cx="300" cy="580" rx="80" ry="18" fill="#1a0f2e" opacity="0.4" />
          
          {/* Chair seat */}
          <rect x="250" y="500" width="100" height="80" rx="15" fill="url(#chairGradient)" />
          <rect x="255" y="505" width="90" height="15" rx="8" fill="#ec4899" opacity="0.3" />
          
          {/* Chair back */}
          <rect x="240" y="380" width="120" height="130" rx="20" fill="url(#chairGradient)" />
          <rect x="250" y="390" width="100" height="15" rx="8" fill="#ec4899" opacity="0.3" />
          <rect x="250" y="450" width="100" height="15" rx="8" fill="#06b6d4" opacity="0.3" />
          
          {/* Armrests */}
          <rect x="220" y="510" width="15" height="40" rx="8" fill="#2d1b4e" />
          <rect x="365" y="510" width="15" height="40" rx="8" fill="#2d1b4e" />
          
          {/* Chair base */}
          <rect x="290" y="575" width="20" height="60" fill="#1a0f2e" />
          <ellipse cx="300" cy="630" rx="50" ry="10" fill="#2d1b4e" />
        </motion.g>

        {/* DUAL MONITOR SETUP */}
        <motion.g
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
        >
          {/* Desk */}
          <rect x="100" y="450" width="400" height="20" rx="8" fill="#1e293b" />
          <rect x="110" y="460" width="15" height="150" fill="#0f172a" />
          <rect x="475" y="460" width="15" height="150" fill="#0f172a" />
          
          {/* Left Monitor */}
          <rect x="130" y="270" width="180" height="190" rx="12" fill="#0f172a" />
          <rect x="142" y="282" width="156" height="166" rx="8" fill="url(#screenGlow)" />
          
          {/* Code on left monitor */}
          <motion.rect x="155" y="300" width="100" height="8" rx="4" fill="#ec4899" animate={{ width: [100, 120, 100], opacity: [0.7, 1, 0.7] }} transition={{ duration: 2.5, repeat: Infinity }} />
          <motion.rect x="155" y="325" width="130" height="8" rx="4" fill="#a855f7" animate={{ width: [130, 110, 130], opacity: [0.7, 1, 0.7] }} transition={{ duration: 2.5, repeat: Infinity, delay: 0.3 }} />
          <motion.rect x="155" y="350" width="90" height="8" rx="4" fill="#06b6d4" animate={{ width: [90, 120, 90], opacity: [0.7, 1, 0.7] }} transition={{ duration: 2.5, repeat: Infinity, delay: 0.6 }} />
          <motion.rect x="155" y="375" width="120" height="8" rx="4" fill="#fbbf24" animate={{ width: [120, 95, 120], opacity: [0.7, 1, 0.7] }} transition={{ duration: 2.5, repeat: Infinity, delay: 0.9 }} />
          <motion.rect x="155" y="400" width="100" height="8" rx="4" fill="#10b981" animate={{ width: [100, 130, 100], opacity: [0.7, 1, 0.7] }} transition={{ duration: 2.5, repeat: Infinity, delay: 1.2 }} />
          
          {/* Monitor stand */}
          <rect x="200" y="455" width="20" height="35" fill="#1e293b" />
          <ellipse cx="210" cy="455" rx="30" ry="8" fill="#0f172a" />
          
          {/* Right Monitor */}
          <rect x="330" y="240" width="200" height="220" rx="12" fill="#0f172a" />
          <rect x="342" y="252" width="176" height="196" rx="8" fill="url(#screenGlow2)" />
          
          {/* Browser UI on right monitor */}
          <rect x="350" y="265" width="160" height="15" rx="8" fill="#1e293b" />
          <circle cx="362" cy="272" r="4" fill="#ef4444" />
          <circle cx="378" cy="272" r="4" fill="#fbbf24" />
          <circle cx="394" cy="272" r="4" fill="#22c55e" />
          
          {/* Design/UI preview */}
          <rect x="355" y="295" width="70" height="50" rx="6" fill="#ec4899" opacity="0.4" />
          <rect x="355" y="355" width="70" height="50" rx="6" fill="#06b6d4" opacity="0.4" />
          <rect x="438" y="295" width="70" height="110" rx="6" fill="#a855f7" opacity="0.4" />
          
          {/* Monitor stand */}
          <rect x="415" y="455" width="20" height="35" fill="#1e293b" />
          <ellipse cx="425" cy="455" rx="35" ry="8" fill="#0f172a" />
        </motion.g>

        {/* RGB KEYBOARD & MOUSE */}
        <motion.g
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
        >
          {/* Keyboard */}
          <rect x="180" y="430" width="160" height="30" rx="5" fill="#1e293b" />
          <rect x="185" y="435" width="18" height="8" rx="2" fill="#ec4899" opacity="0.6" />
          <rect x="210" y="435" width="18" height="8" rx="2" fill="#a855f7" opacity="0.6" />
          <rect x="235" y="435" width="18" height="8" rx="2" fill="#06b6d4" opacity="0.6" />
          <rect x="260" y="435" width="18" height="8" rx="2" fill="#fbbf24" opacity="0.6" />
          <rect x="285" y="435" width="18" height="8" rx="2" fill="#10b981" opacity="0.6" />
          <rect x="310" y="435" width="18" height="8" rx="2" fill="#ec4899" opacity="0.6" />
          
          {/* Mouse */}
          <ellipse cx="365" cy="445" rx="18" ry="25" fill="#1e293b" />
          <motion.ellipse 
            cx="365" cy="435" rx="8" ry="12" fill="#ec4899" opacity="0.5"
            animate={{ opacity: [0.3, 0.7, 0.3] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.g>

        {/* MAIN CHARACTER */}
        <motion.g
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          {/* Body - Premium Hoodie */}
          <path d="M 220 430 Q 300 445 380 430 L 400 570 Q 300 585 200 570 Z" fill="url(#premiumHoodieGradient)" />
          
          {/* Hoodie pocket */}
          <path d="M 260 480 Q 300 495 340 480" stroke="#5b21b6" strokeWidth="3" fill="none" opacity="0.6" />
          
          {/* Hoodie strings */}
          <path d="M 270 440 L 270 455" stroke="#ec4899" strokeWidth="3" strokeLinecap="round" />
          <path d="M 330 440 L 330 455" stroke="#ec4899" strokeWidth="3" strokeLinecap="round" />
          <circle cx="270" cy="458" r="5" fill="#ec4899" />
          <circle cx="330" cy="458" r="5" fill="#ec4899" />
          
          {/* Logo on hoodie */}
          <circle cx="300" cy="520" r="25" fill="#0f172a" opacity="0.6" />
          <text x="300" y="530" fontSize="22" fill="url(#logoGradient)" textAnchor="middle" fontWeight="bold">&lt;/&gt;</text>
          
          {/* Zipper */}
          <path d="M 300 445 L 300 570" stroke="#8b5cf6" strokeWidth="3" opacity="0.5" />
          <circle cx="300" cy="465" r="5" fill="#ec4899" />
          <circle cx="300" cy="495" r="5" fill="#06b6d4" />
          <circle cx="300" cy="525" r="5" fill="#fbbf24" />
          <circle cx="300" cy="555" r="5" fill="#10b981" />
          
          {/* Neck */}
          <ellipse cx="300" cy="400" rx="25" ry="32" fill="#FFB47C" />
          
          {/* Head */}
          <ellipse cx="300" cy="330" rx="75" ry="85" fill="#FFB47C" />
          
          {/* Face highlights */}
          <ellipse cx="260" cy="310" rx="20" ry="28" fill="#ffffff" opacity="0.12" />
          <ellipse cx="340" cy="310" rx="20" ry="28" fill="#ffffff" opacity="0.12" />
          
          {/* Blush - anime style */}
          <ellipse cx="230" cy="350" rx="18" ry="12" fill="#ff6b9d" opacity="0.25" />
          <ellipse cx="370" cy="350" rx="18" ry="12" fill="#ff6b9d" opacity="0.25" />
          
          {/* Hair - Cool anime style */}
          <motion.path
            d="M 225 315 Q 220 240 300 220 Q 380 240 375 315 Q 382 280 378 250 Q 370 225 300 210 Q 230 225 222 250 Q 218 280 225 315"
            fill="url(#epicHairGradient)"
            animate={{ 
              d: [
                "M 225 315 Q 220 240 300 220 Q 380 240 375 315 Q 382 280 378 250 Q 370 225 300 210 Q 230 225 222 250 Q 218 280 225 315",
                "M 225 315 Q 220 235 300 215 Q 380 235 375 315 Q 382 275 378 245 Q 370 220 300 205 Q 230 220 222 245 Q 218 275 225 315",
                "M 225 315 Q 220 240 300 220 Q 380 240 375 315 Q 382 280 378 250 Q 370 225 300 210 Q 230 225 222 250 Q 218 280 225 315"
              ]
            }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          />
          
          {/* Hair strands - detailed */}
          <path d="M 265 250 Q 270 235 275 250" stroke="#0a0514" strokeWidth="4" fill="none" opacity="0.7" strokeLinecap="round" />
          <path d="M 290 245 Q 295 230 300 245" stroke="#0a0514" strokeWidth="4" fill="none" opacity="0.7" strokeLinecap="round" />
          <path d="M 310 245 Q 315 230 320 245" stroke="#0a0514" strokeWidth="4" fill="none" opacity="0.7" strokeLinecap="round" />
          <path d="M 335 250 Q 340 235 345 250" stroke="#0a0514" strokeWidth="4" fill="none" opacity="0.7" strokeLinecap="round" />
          
          {/* Hair shine effect */}
          <motion.ellipse 
            cx="285" cy="260" rx="18" ry="28" fill="#c084fc" opacity="0.35"
            animate={{ opacity: [0.25, 0.45, 0.25] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          
          {/* EYES - Detailed Anime Style */}
          <motion.g
            animate={{ scaleY: [1, 0.05, 1] }}
            transition={{ duration: 6, repeat: Infinity, repeatDelay: 4 }}
          >
            {/* Left Eye */}
            <ellipse cx="265" cy="335" rx="20" ry="26" fill="#ffffff" />
            <ellipse cx="265" cy="338" rx="16" ry="22" fill="url(#eyeDetailGradient)" />
            <ellipse cx="265" cy="342" rx="10" ry="15" fill="#0f172a" />
            <ellipse cx="269" cy="334" rx="6" ry="8" fill="#ffffff" />
            <ellipse cx="262" cy="345" rx="3" ry="3" fill="#ffffff" opacity="0.8" />
            <ellipse cx="267" cy="350" rx="2" ry="2" fill="#ffffff" opacity="0.6" />
            
            {/* Right Eye */}
            <ellipse cx="335" cy="335" rx="20" ry="26" fill="#ffffff" />
            <ellipse cx="335" cy="338" rx="16" ry="22" fill="url(#eyeDetailGradient)" />
            <ellipse cx="335" cy="342" rx="10" ry="15" fill="#0f172a" />
            <ellipse cx="339" cy="334" rx="6" ry="8" fill="#ffffff" />
            <ellipse cx="332" cy="345" rx="3" ry="3" fill="#ffffff" opacity="0.8" />
            <ellipse cx="337" cy="350" rx="2" ry="2" fill="#ffffff" opacity="0.6" />
          </motion.g>
          
          {/* Eyebrows - expressive */}
          <motion.path
            d="M 240 305 Q 265 298 290 305"
            stroke="#1a0f2e"
            strokeWidth="5"
            strokeLinecap="round"
            fill="none"
            animate={{ y: [0, -3, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          <motion.path
            d="M 310 305 Q 335 298 360 305"
            stroke="#1a0f2e"
            strokeWidth="5"
            strokeLinecap="round"
            fill="none"
            animate={{ y: [0, -3, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          
          {/* Eyelashes */}
          <path d="M 246 328 L 240 322" stroke="#1a0f2e" strokeWidth="2" strokeLinecap="round" opacity="0.7" />
          <path d="M 253 323 L 250 315" stroke="#1a0f2e" strokeWidth="2" strokeLinecap="round" opacity="0.7" />
          <path d="M 284 328 L 290 322" stroke="#1a0f2e" strokeWidth="2" strokeLinecap="round" opacity="0.7" />
          <path d="M 316 328 L 310 322" stroke="#1a0f2e" strokeWidth="2" strokeLinecap="round" opacity="0.7" />
          <path d="M 347 323 L 350 315" stroke="#1a0f2e" strokeWidth="2" strokeLinecap="round" opacity="0.7" />
          <path d="M 354 328 L 360 322" stroke="#1a0f2e" strokeWidth="2" strokeLinecap="round" opacity="0.7" />
          
          {/* Smile - Happy */}
          <motion.path
            d="M 260 370 Q 300 390 340 370"
            stroke="#1a0f2e"
            strokeWidth="4"
            strokeLinecap="round"
            fill="none"
            animate={{ 
              d: [
                "M 260 370 Q 300 390 340 370",
                "M 260 370 Q 300 395 340 370",
                "M 260 370 Q 300 390 340 370"
              ]
            }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          
          {/* Teeth */}
          <motion.path
            d="M 280 380 Q 300 388 320 380"
            fill="#ffffff"
            opacity="0.9"
            animate={{ 
              d: [
                "M 280 380 Q 300 388 320 380",
                "M 280 380 Q 300 392 320 380",
                "M 280 380 Q 300 388 320 380"
              ]
            }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          
          {/* Nose */}
          <path d="M 300 345 Q 298 363 300 368" stroke="#d6936f" strokeWidth="3" strokeLinecap="round" fill="none" />
          <path d="M 300 368 Q 304 371 308 370" stroke="#d6936f" strokeWidth="2.5" strokeLinecap="round" fill="none" />
          <ellipse cx="306" cy="370" rx="4" ry="3" fill="#d6936f" opacity="0.3" />
          <ellipse cx="294" cy="370" rx="4" ry="3" fill="#d6936f" opacity="0.3" />
          
          {/* Ears */}
          <ellipse cx="220" cy="335" rx="15" ry="24" fill="#FFB47C" />
          <ellipse cx="380" cy="335" rx="15" ry="24" fill="#FFB47C" />
          <ellipse cx="223" cy="335" rx="7" ry="14" fill="#e09866" opacity="0.5" />
          <ellipse cx="377" cy="335" rx="7" ry="14" fill="#e09866" opacity="0.5" />
          <path d="M 223 330 Q 226 335 223 340" stroke="#d6936f" strokeWidth="2" fill="none" opacity="0.6" />
          <path d="M 377 330 Q 374 335 377 340" stroke="#d6936f" strokeWidth="2" fill="none" opacity="0.6" />
          
          {/* PREMIUM HEADPHONES - RGB */}
          <motion.g
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            {/* Headband */}
            <path d="M 228 300 Q 228 270 260 260" stroke="url(#rgbHeadphoneGradient)" strokeWidth="12" strokeLinecap="round" fill="none" />
            <path d="M 372 300 Q 372 270 340 260" stroke="url(#rgbHeadphoneGradient)" strokeWidth="12" strokeLinecap="round" fill="none" />
            <path d="M 260 260 Q 300 245 340 260" stroke="url(#rgbHeadphoneGradient)" strokeWidth="12" strokeLinecap="round" fill="none" />
            
            {/* RGB accent line */}
            <path d="M 260 265 Q 300 250 340 265" stroke="url(#rgbLightGradient)" strokeWidth="4" strokeLinecap="round" fill="none" opacity="0.8" />
            
            {/* Left Ear Cup */}
            <ellipse cx="228" cy="325" rx="25" ry="35" fill="url(#rgbHeadphoneGradient)" />
            <ellipse cx="228" cy="325" rx="18" ry="26" fill="#0f172a" opacity="0.9" />
            <motion.ellipse 
              cx="228" cy="325" rx="12" ry="18" fill="url(#rgbLightGradient)" opacity="0.6"
              animate={{ opacity: [0.4, 0.8, 0.4] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            
            {/* Right Ear Cup */}
            <ellipse cx="372" cy="325" rx="25" ry="35" fill="url(#rgbHeadphoneGradient)" />
            <ellipse cx="372" cy="325" rx="18" ry="26" fill="#0f172a" opacity="0.9" />
            <motion.ellipse 
              cx="372" cy="325" rx="12" ry="18" fill="url(#rgbLightGradient)" opacity="0.6"
              animate={{ opacity: [0.4, 0.8, 0.4] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1 }}
            />
            
            {/* Brand logo on headband */}
            <circle cx="300" cy="252" r="8" fill="#0f172a" />
            <text x="300" y="256" fontSize="10" fill="#ec4899" textAnchor="middle" fontWeight="bold">R</text>
          </motion.g>
          
          {/* Music notes */}
          <motion.text
            x="180" y="295" fontSize="24" fill="#ec4899"
            animate={{ opacity: [0.2, 0.8, 0.2], y: [295, 280, 295], rotate: [0, 15, 0] }}
            transition={{ duration: 2.5, repeat: Infinity }}
          >
            ♪
          </motion.text>
          <motion.text
            x="410" y="305" fontSize="22" fill="#06b6d4"
            animate={{ opacity: [0.2, 0.8, 0.2], y: [305, 290, 305], rotate: [0, -15, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, delay: 0.7 }}
          >
            ♫
          </motion.text>
          <motion.text
            x="195" y="335" fontSize="20" fill="#fbbf24"
            animate={{ opacity: [0.2, 0.8, 0.2], y: [335, 320, 335] }}
            transition={{ duration: 2.5, repeat: Infinity, delay: 1.4 }}
          >
            ♪
          </motion.text>
          
          {/* Arms - Professional typing pose */}
          <motion.g
            animate={{ rotate: [0, -3, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            style={{ transformOrigin: "220px 435px" }}
          >
            <path d="M 220 435 Q 180 400 160 370" stroke="url(#sleeveGradient)" strokeWidth="22" strokeLinecap="round" fill="none" />
            <ellipse cx="160" cy="370" rx="16" ry="14" fill="#FFB47C" />
            <ellipse cx="156" cy="376" rx="8" ry="6" fill="#e09866" opacity="0.4" />
          </motion.g>
          
          <motion.g
            animate={{ rotate: [0, 3, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.7 }}
            style={{ transformOrigin: "380px 435px" }}
          >
            <path d="M 380 435 Q 420 400 440 370" stroke="url(#sleeveGradient)" strokeWidth="22" strokeLinecap="round" fill="none" />
            <ellipse cx="440" cy="370" rx="16" ry="14" fill="#FFB47C" />
            <ellipse cx="444" cy="376" rx="8" ry="6" fill="#e09866" opacity="0.4" />
          </motion.g>
        </motion.g>

        {/* Coffee/Energy Drink */}
        <motion.g
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
        >
          <ellipse cx="520" cy="460" rx="25" ry="6" fill="#4c1d95" opacity="0.3" />
          <rect x="500" y="430" width="40" height="35" rx="5" fill="url(#drinkGradient)" />
          <ellipse cx="520" cy="430" rx="20" ry="6" fill="#7c3aed" />
          
          {/* Logo on can */}
          <text x="520" y="450" fontSize="16" fill="#ec4899" textAnchor="middle" fontWeight="bold">DEV</text>
          
          {/* Steam */}
          <motion.path
            d="M 512 425 Q 512 410 515 400"
            stroke="url(#steamGradient)"
            strokeWidth="3"
            strokeLinecap="round"
            fill="none"
            animate={{ opacity: [0.2, 0.7, 0.2], d: ["M 512 425 Q 512 410 515 400", "M 512 425 Q 510 410 513 395", "M 512 425 Q 512 410 515 400"] }}
            transition={{ duration: 2.5, repeat: Infinity }}
          />
          <motion.path
            d="M 528 425 Q 528 410 525 400"
            stroke="url(#steamGradient)"
            strokeWidth="3"
            strokeLinecap="round"
            fill="none"
            animate={{ opacity: [0.2, 0.7, 0.2], d: ["M 528 425 Q 528 410 525 400", "M 528 425 Q 530 410 527 395", "M 528 425 Q 528 410 525 400"] }}
            transition={{ duration: 2.5, repeat: Infinity, delay: 0.8 }}
          />
        </motion.g>

        {/* Floating Code Elements - Enhanced */}
        <motion.text
          x="80" y="250" fontSize="50" fill="url(#floatGradient1)" fontWeight="bold"
          animate={{ y: [250, 230, 250], opacity: [0.2, 0.6, 0.2], rotate: [0, 15, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          {"</>"}
        </motion.text>
        
        <motion.text
          x="520" y="300" fontSize="45" fill="url(#floatGradient2)" fontWeight="bold"
          animate={{ y: [300, 280, 300], opacity: [0.2, 0.6, 0.2], rotate: [0, -15, 0] }}
          transition={{ duration: 4.5, repeat: Infinity }}
        >
          {"{}"}
        </motion.text>
        
        <motion.circle
          cx="100" cy="400" r="28"
          fill="none" stroke="url(#floatGradient3)" strokeWidth="4"
          animate={{ rotate: [0, 360], scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        
        <motion.rect
          x="515" y="180" width="50" height="50" rx="12"
          fill="url(#floatGradient4)"
          animate={{ rotate: [0, 180, 360], scale: [1, 1.15, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 12, repeat: Infinity }}
        />

        {/* Gradients - EPIC ONES */}
        <defs>
          <linearGradient id="chairGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#5b21b6" />
            <stop offset="50%" stopColor="#4c1d95" />
            <stop offset="100%" stopColor="#2d1b4e" />
          </linearGradient>
          
          <linearGradient id="screenGlow" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1e293b" />
            <stop offset="50%" stopColor="#0f172a" />
            <stop offset="100%" stopColor="#020617" />
          </linearGradient>
          
          <linearGradient id="screenGlow2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1e293b" />
            <stop offset="100%" stopColor="#0f172a" />
          </linearGradient>
          
          <linearGradient id="premiumHoodieGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#a855f7" />
            <stop offset="30%" stopColor="#9333ea" />
            <stop offset="70%" stopColor="#7c3aed" />
            <stop offset="100%" stopColor="#6d28d9" />
          </linearGradient>
          
          <linearGradient id="epicHairGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#581c87" />
            <stop offset="50%" stopColor="#3b0764" />
            <stop offset="100%" stopColor="#1a0f2e" />
          </linearGradient>
          
          <radialGradient id="eyeDetailGradient">
            <stop offset="0%" stopColor="#c084fc" />
            <stop offset="50%" stopColor="#a855f7" />
            <stop offset="100%" stopColor="#7c3aed" />
          </radialGradient>
          
          <linearGradient id="sleeveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#9333ea" />
            <stop offset="50%" stopColor="#a855f7" />
            <stop offset="100%" stopColor="#c4b5fd" />
          </linearGradient>
          
          <linearGradient id="rgbHeadphoneGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ec4899" />
            <stop offset="33%" stopColor="#a855f7" />
            <stop offset="66%" stopColor="#06b6d4" />
            <stop offset="100%" stopColor="#10b981" />
          </linearGradient>
          
          <linearGradient id="rgbLightGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ec4899" />
            <stop offset="50%" stopColor="#a855f7" />
            <stop offset="100%" stopColor="#06b6d4" />
          </linearGradient>
          
          <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ec4899" />
            <stop offset="100%" stopColor="#06b6d4" />
          </linearGradient>
          
          <linearGradient id="drinkGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#7c3aed" />
            <stop offset="100%" stopColor="#5b21b6" />
          </linearGradient>
          
          <linearGradient id="steamGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#a855f7" />
            <stop offset="100%" stopColor="#06b6d4" />
          </linearGradient>
          
          <linearGradient id="floatGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ec4899" />
            <stop offset="100%" stopColor="#f472b6" />
          </linearGradient>
          
          <linearGradient id="floatGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#06b6d4" />
            <stop offset="100%" stopColor="#22d3ee" />
          </linearGradient>
          
          <linearGradient id="floatGradient3" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fbbf24" />
            <stop offset="100%" stopColor="#f59e0b" />
          </linearGradient>
          
          <linearGradient id="floatGradient4" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#a855f7" />
            <stop offset="100%" stopColor="#c084fc" />
          </linearGradient>
        </defs>
      </motion.svg>
    </div>
  );
};

export default Hero;
