import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { personalInfo, socialLinks } from '../data/portfolioData.jsx';
import { FaDownload } from 'react-icons/fa';
import { Link as ScrollLink } from 'react-scroll';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-primary-bg relative overflow-hidden text-text-primary font-sans">
      
      {/* Optional: HUD glow background blur */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/2 w-80 h-80 bg-accent opacity-10 rounded-full blur-3xl animate-hud-glow" />
        <div className="absolute bottom-1/3 right-1/4 w-60 h-60 bg-gold-glow opacity-10 rounded-full blur-2xl animate-pulse" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center flex-col sm:flex-row items-center space-x-4"
        >
          <h3 className="text-accent font-mono text-sm sm:text-base mb-3 tracking-wide animate-fade-in">
            Hi, my name is
          </h3>
          <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-accent tracking-tight leading-tight drop-shadow-md">
            {personalInfo.name}.
          </h1>
        </motion.div>

        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-text-secondary mb-4 font-mono">
          <TypeAnimation
            sequence={[
              'I build Stark-level tech.',
              2000,
              'I architect futuristic apps.',
              2000,
              'I solve real problems.',
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="text-accent"
          />
        </h2>
        <p className="text-text-secondary max-w-2xl mx-auto mb-8 text-base sm:text-lg tracking-wide">
          {personalInfo.bio}
        </p>

        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-8 flex justify-center"
        >
          {/* Updated profile photo size */}
          <img 
            src="/profile.png" 
            alt="Profile" 
            className="w-64 h-64 rounded-full object-cover shadow-xl border-4 border-accent"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12"
        >
          <ScrollLink
            to="projects"
            smooth={true}
            duration={500}
            offset={-70}
            className="px-8 py-3 font-mono text-lg bg-accent text-primary-bg rounded-md hover:bg-opacity-80 transition-all duration-300 cursor-pointer shadow-md shadow-hud-outline hover:shadow-lg"
          >
            View My Work
          </ScrollLink>
          <a
            href={personalInfo.resumeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 font-mono text-lg border-2 border-accent text-accent rounded-md hover:bg-accent hover:text-primary-bg transition-all duration-300 flex items-center shadow-md hover:shadow-lg"
          >
            <FaDownload className="mr-2" /> Download CV
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex justify-center space-x-6"
        >
          {Object.values(socialLinks).map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-accent transition-colors"
              aria-label={link.url.split(':')[0]}
            >
              {React.cloneElement(link.icon, { size: 28 })}
            </a>
          ))}
        </motion.div>
      </div>

      {/* Scroll down indicator */}
      <ScrollLink 
        to="about" 
        smooth={true} 
        duration={800} 
        className="absolute bottom-3 left-1/2 transform -translate-x-1/2 cursor-pointer animate-bounce z-10"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </ScrollLink>
    </section>
  );
};

export default Hero;
