'use client';

import { motion } from 'framer-motion';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <div className="min-h-screen relative z-10 scanlines">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="mb-8">
            <h1 
              className="text-6xl md:text-8xl font-cyber font-black mb-4 glitch"
              data-text="DIE CHEN"
            >
              <span className="text-cyber-pink neon-glow">DIE</span>
              <span className="mx-4 text-white">/</span>
              <span className="text-cyber-blue neon-glow">CHEN</span>
            </h1>
          </motion.div>

          <motion.div variants={itemVariants} className="mb-8">
            <h2 className="text-2xl md:text-4xl font-body font-light text-cyber-green neon-glow mb-4">
              LAURA CHEN
            </h2>
            <div className="text-lg md:text-xl text-gray-300 font-body space-y-2">
              <p>Computer Science + Data Science @ NYU</p>
              <p>Web Development & Applications Minor</p>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="mb-12">
            <div className="inline-block">
              <div className="cyber-gradient p-[2px] rounded-lg">
                <div className="bg-dark-bg px-8 py-4 rounded-lg">
                  <p className="text-white font-body text-lg">
                    Crafting the future with{' '}
                    <span className="text-cyber-pink font-bold">CODE</span>,{' '}
                    <span className="text-cyber-blue font-bold">DATA</span>, and{' '}
                    <span className="text-cyber-green font-bold">INNOVATION</span>
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="mb-16">
            <div className="flex justify-center space-x-6">
              <Link
                href="/about"
                className="group relative px-8 py-4 font-cyber text-sm uppercase tracking-wider overflow-hidden"
              >
                <div className="absolute inset-0 bg-cyber-pink transform skew-x-12 group-hover:skew-x-0 transition-transform duration-300"></div>
                <span className="relative z-10 text-black group-hover:text-white transition-colors duration-300">
                  Explore Profile
                </span>
              </Link>
              
              <Link
                href="/projects"
                className="group relative px-8 py-4 font-cyber text-sm uppercase tracking-wider overflow-hidden border border-cyber-blue"
              >
                <div className="absolute inset-0 bg-cyber-blue transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                <span className="relative z-10 text-cyber-blue group-hover:text-black transition-colors duration-300">
                  View Projects
                </span>
              </Link>
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <div className="flex justify-center space-x-8">
              <a
                href="mailto:dc5055@nyu.edu"
                className="text-cyber-pink hover:neon-glow transition-all duration-300 hover:scale-110"
                aria-label="Email"
              >
                <Mail size={32} />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyber-blue hover:neon-glow transition-all duration-300 hover:scale-110"
                aria-label="GitHub"
              >
                <Github size={32} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyber-green hover:neon-glow transition-all duration-300 hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin size={32} />
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-cyber-pink"
          >
            <ChevronDown size={32} />
          </motion.div>
        </motion.div>
      </section>

      {/* Quick Info Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <div className="text-center p-8 border border-cyber-pink/30 bg-dark-secondary/50 backdrop-blur-sm hover:border-cyber-pink hover:shadow-neon-pink transition-all duration-300">
              <h3 className="text-2xl font-cyber text-cyber-pink mb-4">EDUCATION</h3>
              <p className="text-gray-300 font-body">
                New York University<br />
                BS Computer Science + Data Science<br />
                Minor: Web Development & Applications
              </p>
            </div>

            <div className="text-center p-8 border border-cyber-blue/30 bg-dark-secondary/50 backdrop-blur-sm hover:border-cyber-blue hover:shadow-neon-blue transition-all duration-300">
              <h3 className="text-2xl font-cyber text-cyber-blue mb-4">FOCUS</h3>
              <p className="text-gray-300 font-body">
                Full-Stack Development<br />
                Data Analysis & Visualization<br />
                Machine Learning Applications
              </p>
            </div>

            <div className="text-center p-8 border border-cyber-green/30 bg-dark-secondary/50 backdrop-blur-sm hover:border-cyber-green hover:shadow-neon-green transition-all duration-300">
              <h3 className="text-2xl font-cyber text-cyber-green mb-4">PASSION</h3>
              <p className="text-gray-300 font-body">
                Creating Digital Experiences<br />
                Solving Complex Problems<br />
                Building the Future
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
