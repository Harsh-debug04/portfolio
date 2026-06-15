import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const Hero = () => {
  return (
    <section 
      id="home"
      className="min-h-screen flex items-center justify-center relative bg-background"
    >
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center pt-20">
          <ScrollReveal>
            <div className="mb-8">
              <img 
                src="/lovable-uploads/944fab42-da9d-4010-bc1d-daae42087542.png" 
                alt="Harshwardhan Pandey" 
                className="w-40 h-40 rounded-full mx-auto mb-6 border border-border object-cover"
              />
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={200}>
            <h1 className="text-hero mb-6 text-text-primary">
              Harshwardhan Pandey
            </h1>
          </ScrollReveal>
          
          <ScrollReveal delay={400}>
            <p className="text-display text-text-secondary mb-4 font-serif italic">
              AI & Data Science Engineer
            </p>
          </ScrollReveal>
          
          <ScrollReveal delay={600}>
            <p className="text-body-large text-text-muted mb-8 max-w-2xl mx-auto">
              Architecting intelligent systems that solve complex real-world problems. 
              Specialized in AI/ML, data science, and building automated solutions 
              that make a meaningful impact.
            </p>
          </ScrollReveal>
          
          <ScrollReveal delay={800}>
            <p className="text-lg text-text-secondary mb-12 uppercase tracking-widest text-sm">
              Me in 10 seconds: AI enthusiast who turns data into insights
            </p>
          </ScrollReveal>
          
          <ScrollReveal delay={1000}>
            <div className="flex flex-wrap gap-4 justify-center mb-12">
              <Button 
                variant="primary"
                size="lg"
                onClick={() => {
                  const contactSection = document.querySelector('[id="contact"]');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }}
              >
                <Mail className="w-5 h-5 mr-2" />
                Let's Talk
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => {
                  const projectsSection = document.querySelector('[id="projects"]');
                  if (projectsSection) {
                    projectsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }}
              >
                <Github className="w-5 h-5 mr-2" />
                View Work
              </Button>
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={1200}>
            <div className="flex justify-center space-x-6 mb-12">
              <a 
                href="https://github.com/Harsh-debug04" 
                className="text-text-muted hover:text-text-primary transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-6 h-6" />
              </a>
              <a 
                href="https://www.linkedin.com/in/harshwardhan-pandey-a536851a1/" 
                className="text-text-muted hover:text-text-primary transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a 
                href="mailto:harshpandey145@gmail.com" 
                className="text-text-muted hover:text-text-primary transition-colors"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </ScrollReveal>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <ArrowDown className="w-6 h-6 text-text-muted" />
      </div>
    </section>
  );
};

export default Hero;
