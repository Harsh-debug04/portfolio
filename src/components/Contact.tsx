import React from 'react';
import { Button } from '@/components/ui/button';
import { Mail, Github, Linkedin, Download, MapPin, Coffee, FileText } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-background-subtle">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-display text-gradient mb-6">Let's Build Intelligent Solutions</h2>
              <p className="text-body-large text-text-secondary max-w-2xl mx-auto">
                Ready to solve complex problems with AI? I'm always excited to discuss new opportunities 
                in machine learning and data science projects.
              </p>
              <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full mt-6"></div>
            </div>
          </ScrollReveal>
          
          <div className="grid md:grid-cols-2 gap-12">
            <ScrollReveal delay={200}>
              <div>
                <h3 className="text-2xl text-text-primary mb-6 font-light">Get In Touch</h3>
                <p className="text-body-large text-text-secondary mb-8">
                  Whether you're looking for an AI engineer to join your team, need help with ML projects, 
                  or want to discuss the latest in AI/ML technology, I'd love to hear from you.
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-interactive-base rounded-xl flex items-center justify-center">
                      <Mail className="w-5 h-5 text-accent-primary" />
                    </div>
                    <div>
                      <p className="text-text-primary font-medium">Email</p>
                      <a 
                        href="mailto:harshpandey145@gmail.com" 
                        className="text-accent-primary hover:text-accent-glow transition-colors cursor-hover"
                      >
                        harshpandey145@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-interactive-base rounded-xl flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-accent-primary" />
                    </div>
                    <div>
                      <p className="text-text-primary font-medium">Phone</p>
                      <p className="text-text-secondary">+91 73508 54754</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-interactive-base rounded-xl flex items-center justify-center">
                      <Coffee className="w-5 h-5 text-accent-primary" />
                    </div>
                    <div>
                      <p className="text-text-primary font-medium">Status</p>
                      <p className="text-text-secondary">Open to AI/ML opportunities</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex space-x-4">
                  <a 
                    href="https://github.com/Harsh-debug04" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-interactive-base rounded-xl flex items-center justify-center hover:bg-interactive-hover hover:scale-105 transition-all duration-300 cursor-hover"
                  >
                    <Github className="w-5 h-5 text-text-secondary hover:text-accent-primary transition-colors" />
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/harshwardhan-pandey-a536851a1/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-interactive-base rounded-xl flex items-center justify-center hover:bg-interactive-hover hover:scale-105 transition-all duration-300 cursor-hover"
                  >
                    <Linkedin className="w-5 h-5 text-text-secondary hover:text-accent-primary transition-colors" />
                  </a>
                </div>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={400}>
              <div className="bg-glass rounded-xl p-8 border">
                <h3 className="text-2xl text-text-primary mb-6 font-light">Quick Actions</h3>
                
                <div className="space-y-4 mb-8">
                  <Button 
                    variant="primary" 
                    size="lg" 
                    className="w-full justify-start cursor-hover"
                    onClick={() => window.location.href = 'mailto:harshpandey145@gmail.com?subject=Let\'s%20collaborate!'}
                  >
                    <Mail className="w-5 h-5" />
                    Send me an email
                  </Button>
                  
                  <a 
                    href="https://drive.google.com/file/d/1jeGTNAQeiGSRaOWX55ycXaMrAiEo1uwu/view?usp=sharing" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <Button 
                      variant="secondary" 
                      size="lg" 
                      className="w-full justify-start cursor-hover"
                    >
                      <FileText className="w-5 h-5" />
                      Download Resume (PDF)
                    </Button>
                  </a>
                  
                  <a 
                    href="https://calendar.app.google/bVVD8Fv9cdHqMBMN6" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <Button 
                      variant="outline" 
                      size="lg" 
                      className="w-full justify-start cursor-hover"
                    >
                      <Coffee className="w-5 h-5" />
                      Schedule a coffee chat
                    </Button>
                  </a>
                </div>
                
                <div className="bg-interactive-base rounded-lg p-4 border border-card-border">
                  <h4 className="text-text-primary font-medium mb-2">Response Time</h4>
                  <p className="text-text-secondary text-sm">
                    I typically respond to emails within 24 hours. For urgent matters, 
                    feel free to mention it in the subject line.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
          
          <ScrollReveal delay={600}>
            <div className="text-center mt-16">
              <div className="bg-glass rounded-xl p-8 border max-w-2xl mx-auto">
                <h3 className="text-2xl text-text-primary mb-4 font-light">Let's Innovate Together</h3>
                <p className="text-body-large text-text-secondary mb-6">
                  I believe the best AI solutions come from great collaboration. 
                  Let's discuss how we can build intelligent systems that make a real impact.
                </p>
                <a href="mailto:harshpandey145@gmail.com">
                  <Button variant="primary" size="lg" className="cursor-hover">
                    <Mail className="w-5 h-5" />
                    Start the Conversation
                  </Button>
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;