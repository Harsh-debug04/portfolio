import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import heroBackground from '@/assets/hero-background.jpg';
import ScrollReveal from './ScrollReveal';

const Hero = () => {
  return (
    <section 
      className="min-h-screen flex items-center justify-center relative overflow-hidden animated-bg"
      style={{
        backgroundImage: `url(${heroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Animated background overlay */}
      <div className="absolute inset-0 bg-gradient-glow opacity-80" />
      <div className="absolute inset-0 bg-background/30" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <div className="mb-8">
              <img 
                src="/lovable-uploads/944fab42-da9d-4010-bc1d-daae42087542.png" 
                alt="Harshwardhan Pandey" 
                className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-white/20 shadow-glow animate-float"
              />
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={200}>
            <h1 className="text-hero glow-text mb-6">
              <span className="text-gradient">Harshwardhan Pandey</span>
            </h1>
          </ScrollReveal>
          
          <ScrollReveal delay={400}>
            <p className="text-display text-white/90 mb-4">
              AI & Data Science Engineer
            </p>
          </ScrollReveal>
          
          <ScrollReveal delay={600}>
            <p className="text-body-large text-white/70 mb-8 max-w-2xl mx-auto">
              Architecting intelligent systems that solve complex real-world problems. 
              Specialized in AI/ML, data science, and building automated solutions 
              that make a meaningful impact.
            </p>
          </ScrollReveal>
          
          <ScrollReveal delay={800}>
            <p className="text-xl text-accent-glow mb-12 font-mono">
              Me in 10 seconds: AI enthusiast who turns data into insights
            </p>
          </ScrollReveal>
          
          <ScrollReveal delay={1000}>
            <div className="flex flex-wrap gap-4 justify-center mb-12">
              <Button 
                variant="hero" 
                size="hero" 
                className="cursor-hover"
                onClick={() => {
                  const contactSection = document.querySelector('[id="contact"]');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }}
              >
                <Mail className="w-5 h-5" />
                Let's Talk
              </Button>
              <Button 
                variant="outline" 
                size="hero" 
                className="cursor-hover"
                onClick={() => {
                  const projectsSection = document.querySelector('[id="projects"]');
                  if (projectsSection) {
                    projectsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }}
              >
                <Github className="w-5 h-5" />
                View Work
              </Button>
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={1200}>
            <div className="flex justify-center space-x-6 mb-12">
              <a 
                href="https://github.com/Harsh-debug04" 
                className="text-white/60 hover:text-accent-primary transition-colors cursor-hover"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-6 h-6" />
              </a>
              <a 
                href="https://www.linkedin.com/in/harshwardhan-pandey-a536851a1/" 
                className="text-white/60 hover:text-accent-primary transition-colors cursor-hover"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a 
                href="mailto:harshpandey145@gmail.com" 
                className="text-white/60 hover:text-accent-primary transition-colors cursor-hover"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </ScrollReveal>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-white/60" />
      </div>
    </section>
  );
};

export default Hero;