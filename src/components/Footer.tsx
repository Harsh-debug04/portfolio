import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-background py-12 border-t border-card-border">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-2xl text-gradient mb-4 font-light">Harshwardhan Pandey</h3>
            <p className="text-text-secondary mb-6">
              Full-Stack Developer • Problem Solver • Coffee Enthusiast
            </p>
            
            <div className="flex justify-center space-x-6 mb-8">
              <a 
                href="https://github.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-interactive-base rounded-xl flex items-center justify-center hover:bg-interactive-hover hover:scale-105 transition-all duration-300 cursor-hover"
              >
                <Github className="w-5 h-5 text-text-secondary hover:text-accent-primary transition-colors" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-interactive-base rounded-xl flex items-center justify-center hover:bg-interactive-hover hover:scale-105 transition-all duration-300 cursor-hover"
              >
                <Linkedin className="w-5 h-5 text-text-secondary hover:text-accent-primary transition-colors" />
              </a>
              <a 
                href="mailto:harshpandey145@gmail.com"
                className="w-12 h-12 bg-interactive-base rounded-xl flex items-center justify-center hover:bg-interactive-hover hover:scale-105 transition-all duration-300 cursor-hover"
              >
                <Mail className="w-5 h-5 text-text-secondary hover:text-accent-primary transition-colors" />
              </a>
            </div>
          </div>
          
          <div className="section-divider"></div>
          
          <div className="text-center">
            <p className="text-text-muted text-sm flex items-center justify-center gap-2">
              Made with <Heart className="w-4 h-4 text-red-500 animate-pulse" /> and lots of coffee
            </p>
            <p className="text-text-muted text-sm mt-2">
              © 2025 Harshwardhan Pandey. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;