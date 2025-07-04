import React from 'react';
import { personalInfo } from '../data/portfolioData.jsx';
import { FaHeart } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="py-8 bg-secondary-bg border-t border-hud-outline text-center shadow-inner shadow-arc-blue/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-sm text-text-secondary font-mono">
          Designed & Built with <FaHeart className="inline text-accent" /> by {personalInfo.name}
        </p>
        <p className="text-xs text-text-secondary font-mono mt-1">
          © {currentYear} Giri Pragada. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
