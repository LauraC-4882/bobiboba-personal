'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Download, FileText, Presentation, Code, Database, Brain, BarChart } from 'lucide-react';
import Link from 'next/link';

export default function Projects() {
  const csProjects = [
    {
      id: 1,
      title: 'CyberChat - Real-time Messaging Platform',
      type: 'Computer Science',
      description: 'A full-stack real-time chat application built with Next.js, Socket.io, and MongoDB. Features include real-time messaging, user authentication, file sharing, and responsive design.',
      technologies: ['Next.js', 'TypeScript', 'Socket.io', 'MongoDB', 'Tailwind CSS', 'Node.js'],
      link: 'https://github.com/yourusername/cyberchat',
      icon: <Code className="w-8 h-8" />,
      color: 'cyber-pink',
      status: 'Live Demo'
    }
  ];

  const dsProjects = [
    {
      id: 1,
      title: 'NYC Housing Price Prediction Model',
      type: 'Data Science',
      description: 'Machine learning model predicting NYC housing prices using multiple regression techniques. Analyzed 50,000+ property records with 95% accuracy.',
      technologies: ['Python', 'Scikit-learn', 'Pandas', 'Matplotlib', 'Jupyter'],
      pdf: '/projects/nyc-housing-analysis.pdf',
      ppt: '/projects/nyc-housing-presentation.pptx',
      icon: <Database className="w-8 h-8" />,
      color: 'cyber-blue',
      insights: ['Linear Regression', 'Feature Engineering', 'Data Visualization']
    },
    {
      id: 2,
      title: 'Social Media Sentiment Analysis',
      type: 'Data Science',
      description: 'Natural Language Processing project analyzing sentiment trends across social media platforms. Processed 100K+ tweets with sentiment classification.',
      technologies: ['Python', 'NLTK', 'TensorFlow', 'Pandas', 'Seaborn'],
      pdf: '/projects/sentiment-analysis.pdf',
      ppt: '/projects/sentiment-analysis-presentation.pptx',
      icon: <Brain className="w-8 h-8" />,
      color: 'cyber-green',
      insights: ['NLP', 'Text Processing', 'Deep Learning']
    },
    {
      id: 3,
      title: 'E-commerce Sales Forecasting',
      type: 'Data Science',
      description: 'Time series analysis for e-commerce sales prediction using ARIMA and LSTM models. Achieved 88% forecast accuracy for quarterly sales.',
      technologies: ['Python', 'Pandas', 'TensorFlow', 'Statsmodels', 'Plotly'],
      pdf: '/projects/sales-forecasting.pdf',
      ppt: '/projects/sales-forecasting-presentation.pptx',
      icon: <BarChart className="w-8 h-8" />,
      color: 'cyber-orange',
      insights: ['Time Series', 'LSTM Networks', 'Business Intelligence']
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
            <span className="text-cyber-pink neon-glow">MY</span>
            <span className="mx-4 text-white">/</span>
            <span className="text-cyber-blue neon-glow">PROJECTS</span>
          </h1>
          <div className="inline-block">
            <div className="cyber-gradient p-[2px] rounded-lg">
              <div className="bg-dark-bg px-8 py-4 rounded-lg">
                <p className="text-xl text-gray-300 font-body max-w-3xl mx-auto">
                  A showcase of my technical journey through Computer Science and Data Science projects,
                  demonstrating problem-solving skills and innovative thinking.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Computer Science Projects */}
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
            COMPUTER SCIENCE PROJECTS
          </motion.h2>
          
          <div className="space-y-8">
            {csProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className={`border border-${project.color}/30 bg-dark-secondary/50 backdrop-blur-sm p-8 hover:border-${project.color} hover:shadow-neon-${project.color.split('-')[1]} transition-all duration-300`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                  <div className="lg:col-span-8">
                    <div className="flex items-center mb-4">
                      <div className={`text-${project.color} mr-4`}>
                        {project.icon}
                      </div>
                      <div>
                        <h3 className={`text-2xl font-cyber text-${project.color} mb-2`}>
                          {project.title}
                        </h3>
                        <span className="text-sm font-cyber text-gray-400 uppercase tracking-wider">
                          {project.type}
                        </span>
                      </div>
                    </div>
                    
                    <p className="text-gray-300 font-body mb-6 leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className={`px-3 py-1 bg-${project.color}/20 text-${project.color} text-sm font-cyber border border-${project.color}/50 rounded`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="lg:col-span-4 flex flex-col justify-center">
                    <div className={`border border-${project.color}/50 p-6 text-center bg-dark-bg/50`}>
                      <div className={`text-${project.color} mb-4 flex justify-center`}>
                        <ExternalLink className="w-12 h-12" />
                      </div>
                      <p className={`text-${project.color} font-cyber text-sm mb-4`}>
                        {project.status}
                      </p>
                      <Link
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`group relative px-6 py-3 font-cyber text-sm uppercase tracking-wider overflow-hidden border border-${project.color} inline-block w-full`}
                      >
                        <div className={`absolute inset-0 bg-${project.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}></div>
                        <span className={`relative z-10 text-${project.color} group-hover:text-black transition-colors duration-300`}>
                          View Project
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Data Science Projects */}
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
            DATA SCIENCE PROJECTS
          </motion.h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-1 gap-8">
            {dsProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className={`border border-${project.color}/30 bg-dark-secondary/50 backdrop-blur-sm p-8 hover:border-${project.color} hover:shadow-neon-${project.color.split('-')[1]} transition-all duration-300`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                  <div className="lg:col-span-8">
                    <div className="flex items-center mb-4">
                      <div className={`text-${project.color} mr-4`}>
                        {project.icon}
                      </div>
                      <div>
                        <h3 className={`text-2xl font-cyber text-${project.color} mb-2`}>
                          {project.title}
                        </h3>
                        <span className="text-sm font-cyber text-gray-400 uppercase tracking-wider">
                          {project.type}
                        </span>
                      </div>
                    </div>
                    
                    <p className="text-gray-300 font-body mb-6 leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className={`px-3 py-1 bg-${project.color}/20 text-${project.color} text-sm font-cyber border border-${project.color}/50 rounded`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.insights.map((insight, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-gray-700/50 text-gray-300 text-xs font-body border border-gray-600 rounded"
                        >
                          {insight}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="lg:col-span-4">
                    <div className={`border border-${project.color}/50 p-6 bg-dark-bg/50`}>
                      <h4 className={`text-${project.color} font-cyber text-lg mb-4 text-center`}>
                        PROJECT FILES
                      </h4>
                      
                      <div className="space-y-4">
                        <a
                          href={project.pdf}
                          download
                          className={`group relative px-4 py-3 font-cyber text-sm uppercase tracking-wider overflow-hidden border border-${project.color}/50 flex items-center justify-center hover:border-${project.color} transition-all duration-300`}
                        >
                          <FileText className="w-5 h-5 mr-2" />
                          <span className={`text-${project.color}`}>Download PDF</span>
                          <Download className="w-4 h-4 ml-2" />
                        </a>
                        
                        <a
                          href={project.ppt}
                          download
                          className={`group relative px-4 py-3 font-cyber text-sm uppercase tracking-wider overflow-hidden border border-${project.color}/50 flex items-center justify-center hover:border-${project.color} transition-all duration-300`}
                        >
                          <Presentation className="w-5 h-5 mr-2" />
                          <span className={`text-${project.color}`}>Download PPT</span>
                          <Download className="w-4 h-4 ml-2" />
                        </a>
                      </div>
                    </div>
                  </div>
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
                  INTERESTED IN COLLABORATING?
                </h3>
                <p className="text-gray-300 font-body mb-6">
                  Let&apos;s build something amazing together. I&apos;m always open to new opportunities and challenges.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/about"
                    className="group relative px-8 py-4 font-cyber text-sm uppercase tracking-wider overflow-hidden border border-cyber-pink"
                  >
                    <div className="absolute inset-0 bg-cyber-pink transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                    <span className="relative z-10 text-cyber-pink group-hover:text-black transition-colors duration-300">
                      Learn More About Me
                    </span>
                  </Link>
                  
                  <a
                    href="mailto:dc5055@nyu.edu"
                    className="group relative px-8 py-4 font-cyber text-sm uppercase tracking-wider overflow-hidden border border-cyber-blue"
                  >
                    <div className="absolute inset-0 bg-cyber-blue transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                    <span className="relative z-10 text-cyber-blue group-hover:text-black transition-colors duration-300">
                      Contact Me
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
} 