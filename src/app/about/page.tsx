'use client';

import { motion } from 'framer-motion';
import { Code, Database, Globe, Brain, Zap, Users } from 'lucide-react';

export default function About() {
  const skills = [
    {
      category: 'Frontend',
      icon: <Globe className="w-8 h-8" />,
      color: 'cyber-pink',
      items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'JavaScript', 'HTML/CSS']
    },
    {
      category: 'Backend',
      icon: <Code className="w-8 h-8" />,
      color: 'cyber-blue',
      items: ['Node.js', 'Python', 'Java', 'Express.js', 'RESTful APIs', 'GraphQL']
    },
    {
      category: 'Data Science',
      icon: <Database className="w-8 h-8" />,
      color: 'cyber-green',
      items: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'TensorFlow', 'Matplotlib']
    },
    {
      category: 'Tools & Others',
      icon: <Zap className="w-8 h-8" />,
      color: 'cyber-orange',
      items: ['Git', 'Docker', 'MongoDB', 'PostgreSQL', 'AWS', 'Firebase']
    }
  ];

  const experiences = [
    {
      title: 'Computer Science + Data Science Student',
      company: 'New York University',
      period: '2022 - Present',
      description: 'Pursuing a comprehensive education in computer science fundamentals, data analysis, and web development technologies.',
      highlights: ['GPA: 3.8/4.0', 'Dean\'s List', 'Advanced Algorithms', 'Machine Learning']
    },
    {
      title: 'Web Development Projects',
      company: 'Personal Portfolio',
      period: '2023 - Present',
      description: 'Developed multiple full-stack applications showcasing modern web technologies and responsive design principles.',
      highlights: ['React/Next.js', 'Node.js APIs', 'Database Design', 'UI/UX Design']
    }
  ];

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
    <div className="min-h-screen relative z-10 py-20 px-4 sm:px-6 lg:px-8 scanlines">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-cyber font-black mb-6">
            <span className="text-cyber-pink neon-glow">ABOUT</span>
            <span className="mx-4 text-white">/</span>
            <span className="text-cyber-blue neon-glow">ME</span>
          </h1>
          <div className="inline-block">
            <div className="cyber-gradient p-[2px] rounded-lg">
              <div className="bg-dark-bg px-8 py-4 rounded-lg">
                <p className="text-xl text-gray-300 font-body max-w-3xl mx-auto">
                  Passionate about creating innovative digital solutions that bridge the gap between 
                  technology and human experience. Currently pursuing my journey in Computer Science 
                  and Data Science at NYU.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Personal Info */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-20"
        >
          <motion.div variants={itemVariants} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-cyber text-cyber-green mb-6 neon-glow">
                WHO I AM
              </h2>
              <div className="space-y-4 text-gray-300 font-body">
                <p>
                  I'm <span className="text-cyber-pink font-bold">Die (Laura) Chen</span>, 
                  a Computer Science and Data Science student at New York University with a minor 
                  in Web Development and Applications.
                </p>
                <p>
                  My passion lies in the intersection of <span className="text-cyber-blue font-bold">technology</span>, 
                  <span className="text-cyber-green font-bold"> data</span>, and 
                  <span className="text-cyber-pink font-bold"> creative problem-solving</span>. 
                  I believe in the power of code to transform ideas into reality and data to unlock insights 
                  that drive meaningful change.
                </p>
                <p>
                  When I'm not coding, you can find me exploring the latest tech trends, 
                  contributing to open-source projects, or experimenting with new frameworks 
                  and technologies.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="border border-cyber-pink/50 p-8 bg-dark-secondary/30 backdrop-blur-sm">
                <div className="grid grid-cols-2 gap-6 text-center">
                  <div className="border-b border-r border-cyber-blue/30 pb-4 pr-4">
                    <Brain className="w-12 h-12 text-cyber-pink mx-auto mb-2" />
                    <h3 className="font-cyber text-cyber-pink text-sm">LEARNING</h3>
                    <p className="text-gray-300 text-xs">Continuous Growth</p>
                  </div>
                  <div className="border-b border-cyber-blue/30 pb-4 pl-4">
                    <Code className="w-12 h-12 text-cyber-blue mx-auto mb-2" />
                    <h3 className="font-cyber text-cyber-blue text-sm">CODING</h3>
                    <p className="text-gray-300 text-xs">Clean & Efficient</p>
                  </div>
                  <div className="border-r border-cyber-blue/30 pt-4 pr-4">
                    <Users className="w-12 h-12 text-cyber-green mx-auto mb-2" />
                    <h3 className="font-cyber text-cyber-green text-sm">TEAMWORK</h3>
                    <p className="text-gray-300 text-xs">Collaborative Spirit</p>
                  </div>
                  <div className="pt-4 pl-4">
                    <Zap className="w-12 h-12 text-cyber-orange mx-auto mb-2" />
                    <h3 className="font-cyber text-cyber-orange text-sm">INNOVATION</h3>
                    <p className="text-gray-300 text-xs">Creative Solutions</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.section>

        {/* Skills */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-20"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-4xl font-cyber text-center text-cyber-blue neon-glow mb-12"
          >
            TECHNICAL ARSENAL
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.category}
                variants={itemVariants}
                className={`border border-${skill.color}/30 bg-dark-secondary/50 backdrop-blur-sm p-6 hover:border-${skill.color} hover:shadow-neon-${skill.color.split('-')[1]} transition-all duration-300`}
              >
                <div className={`text-${skill.color} mb-4 flex items-center justify-center`}>
                  {skill.icon}
                </div>
                <h3 className={`text-xl font-cyber text-${skill.color} text-center mb-4`}>
                  {skill.category}
                </h3>
                <ul className="space-y-2">
                  {skill.items.map((item, itemIndex) => (
                    <motion.li
                      key={item}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: itemIndex * 0.1 }}
                      className="text-gray-300 text-sm font-body text-center"
                    >
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Experience */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-20"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-4xl font-cyber text-center text-cyber-pink neon-glow mb-12"
          >
            JOURNEY & EXPERIENCE
          </motion.h2>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="border border-cyber-pink/30 bg-dark-secondary/50 backdrop-blur-sm p-8 hover:border-cyber-pink hover:shadow-neon-pink transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-cyber text-cyber-pink mb-2">{exp.title}</h3>
                    <p className="text-cyber-blue font-body text-lg">{exp.company}</p>
                  </div>
                  <div className="text-cyber-green font-cyber text-sm">{exp.period}</div>
                </div>
                
                <p className="text-gray-300 font-body mb-4">{exp.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {exp.highlights.map((highlight, highlightIndex) => (
                    <span
                      key={highlightIndex}
                      className="px-3 py-1 bg-cyber-pink/20 text-cyber-pink text-sm font-cyber border border-cyber-pink/50 rounded"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Call to Action */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="inline-block">
            <div className="cyber-gradient p-[2px] rounded-lg">
              <div className="bg-dark-bg px-12 py-8 rounded-lg">
                <h3 className="text-2xl font-cyber text-white mb-4">
                  LET'S BUILD THE FUTURE TOGETHER
                </h3>
                <p className="text-gray-300 font-body mb-6">
                  Ready to collaborate on innovative projects and push the boundaries of technology.
                </p>
                <a
                  href="mailto:dc5055@nyu.edu"
                  className="group relative px-8 py-4 font-cyber text-sm uppercase tracking-wider overflow-hidden border border-cyber-blue inline-block"
                >
                  <div className="absolute inset-0 bg-cyber-blue transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                  <span className="relative z-10 text-cyber-blue group-hover:text-black transition-colors duration-300">
                    Get In Touch
                  </span>
                </a>
              </div>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
} 