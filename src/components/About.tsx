import React from 'react';
import ScrollReveal from './ScrollReveal';

const About = () => {
  return (
    <section className="py-16 bg-background-subtle">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-display text-gradient mb-6">About Me</h2>
              <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full"></div>
            </div>
          </ScrollReveal>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <ScrollReveal delay={200}>
              <div>
                <h3 className="text-2xl text-text-primary mb-6 font-light">
                  Architecting intelligent systems that solve real-world challenges
                </h3>
                <p className="text-body-large text-text-secondary mb-6">
                  I am an aspiring AI & Data Science specialist currently pursuing B.Tech (Honours) 
                  in Computer Science & Engineering with specialization in AI & ML at Manipal University Jaipur. 
                  My professional mission is to architect and build intelligent, automated systems that solve 
                  complex, real-world problems at scale.
                </p>
                <p className="text-body-large text-text-secondary mb-6">
                  My expertise is built on three core pillars: End-to-End Machine Learning Automation, 
                  Explainable AI (XAI), and Full-Stack Platform Development. This combination allows me to 
                  create holistic systems that manage the entire AI lifecycle—from raw data ingestion to 
                  deployed, interpretable, and auditable predictions.
                </p>
                <div className="bg-glass rounded-xl p-6 border">
                  <h4 className="text-lg text-text-primary mb-3 font-medium">Currently</h4>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                        <div className="w-3 h-3 bg-white rounded-sm transform rotate-45"></div>
                      </div>
                      <p className="text-text-secondary">Building AutoAI - End-to-End ML Automation Framework</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-gradient-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                        <div className="w-3 h-2 bg-white rounded-sm"></div>
                      </div>
                      <p className="text-text-secondary">Exploring Deep Reinforcement Learning for UAV Navigation</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-gradient-accent rounded-lg flex items-center justify-center flex-shrink-0">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <p className="text-text-secondary">Seeking challenging AI/ML roles in innovative teams</p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={400}>
              <div className="space-y-6">
                <div className="bg-glass rounded-xl p-6 border">
                  <h4 className="text-lg text-text-primary mb-4 font-medium">Core Principles</h4>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-accent-primary rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-text-secondary"><strong>Transparency:</strong> Building interpretable AI systems</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-accent-secondary rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-text-secondary"><strong>Innovation:</strong> Pushing boundaries in ML automation</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-accent-primary rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-text-secondary"><strong>Impact:</strong> Solutions that solve real problems</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-glass rounded-xl p-6 border">
                  <h4 className="text-lg text-text-primary mb-4 font-medium">Leadership & Achievements</h4>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                        <div className="w-3 h-3 bg-yellow-400 rounded-full border border-white"></div>
                      </div>
                      <p className="text-text-secondary">Co-Founder at AgroTrack</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-gradient-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <p className="text-text-secondary">Relationships Director - Unreal Engine, MUJ</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-gradient-accent rounded-lg flex items-center justify-center flex-shrink-0">
                        <div className="w-3 h-3 bg-white rounded-sm border border-accent-primary"></div>
                      </div>
                      <p className="text-text-secondary">Vice Captain - MUJ Snooker Team</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-gradient-tertiary rounded-lg flex items-center justify-center flex-shrink-0">
                        <div className="flex space-x-0.5">
                          <div className="w-1 h-3 bg-white rounded-sm"></div>
                          <div className="w-1 h-2 bg-white rounded-sm"></div>
                          <div className="w-1 h-4 bg-white rounded-sm"></div>
                        </div>
                      </div>
                      <p className="text-text-secondary">Smart India Hackathon Finalist</p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;