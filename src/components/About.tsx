import React from 'react';
import ScrollReveal from './ScrollReveal';

const About = () => {
  return (
    <section className="py-20 bg-background-subtle border-t border-border">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-display mb-6">About Me</h2>
              <div className="w-16 h-[1px] bg-border mx-auto"></div>
            </div>
          </ScrollReveal>
          
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <ScrollReveal delay={200}>
              <div>
                <h3 className="text-2xl text-text-primary mb-6 font-serif">
                  Architecting intelligent systems that solve real-world challenges.
                </h3>
                <p className="text-body-large text-text-secondary mb-6">
                  I am an aspiring AI & Data Science specialist currently pursuing B.Tech (Honours) 
                  in Computer Science & Engineering with specialization in AI & ML at Manipal University Jaipur. 
                  My professional mission is to architect and build intelligent, automated systems that solve 
                  complex, real-world problems at scale.
                </p>
                <p className="text-body-large text-text-secondary mb-8">
                  My expertise is built on three core pillars: End-to-End Machine Learning Automation, 
                  Explainable AI (XAI), and Full-Stack Platform Development. This combination allows me to 
                  create holistic systems that manage the entire AI lifecycle.
                </p>

                <div className="bg-background border border-border p-6">
                  <h4 className="text-lg text-text-primary mb-4 font-serif">Currently</h4>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <span className="text-primary mr-3">-</span>
                      <span className="text-text-secondary text-sm">Building AutoAI - End-to-End ML Automation Framework</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-3">-</span>
                      <span className="text-text-secondary text-sm">Exploring Deep Reinforcement Learning for UAV Navigation</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-3">-</span>
                      <span className="text-text-secondary text-sm">Seeking challenging AI/ML roles in innovative teams</span>
                    </li>
                  </ul>
                </div>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={400}>
              <div className="space-y-8">
                <div className="bg-background border border-border p-6">
                  <h4 className="text-lg text-text-primary mb-4 font-serif">Core Principles</h4>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <span className="text-primary mr-3">-</span>
                      <span className="text-text-secondary text-sm"><strong className="text-text-primary font-medium">Transparency:</strong> Building interpretable AI systems</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-3">-</span>
                      <span className="text-text-secondary text-sm"><strong className="text-text-primary font-medium">Innovation:</strong> Pushing boundaries in ML automation</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-3">-</span>
                      <span className="text-text-secondary text-sm"><strong className="text-text-primary font-medium">Impact:</strong> Solutions that solve real problems</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-background border border-border p-6">
                  <h4 className="text-lg text-text-primary mb-4 font-serif">Leadership & Achievements</h4>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <span className="text-primary mr-3">-</span>
                      <span className="text-text-secondary text-sm">Co-Founder at AgroTrack</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-3">-</span>
                      <span className="text-text-secondary text-sm">Relationships Director - Unreal Engine, MUJ</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-3">-</span>
                      <span className="text-text-secondary text-sm">Vice Captain - MUJ Snooker Team</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-3">-</span>
                      <span className="text-text-secondary text-sm">Smart India Hackathon Finalist</span>
                    </li>
                  </ul>
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
