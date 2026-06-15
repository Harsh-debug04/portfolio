import React from 'react';
import ScrollReveal from './ScrollReveal';

const Experience = () => {
  const experiences = [
    {
      company: "AgriCart Online Services Pvt. Ltd.",
      position: "Full Stack Developer",
      period: "July 2024 - Present",
      description: "E-commerce Platform Developer at an ambitious AgriTech startup serving diverse customers from individual gardeners to agricultural enterprises through B2B2C model.",
      achievements: [
        "Built and maintained dynamic Magento-based frontend for service-based startup",
        "Integrated NLP-powered system to collect and categorize agricultural data",
        "Developed custom modules extending Magento's core functionality for equipment rental service",
        "Implemented Varnish Cache optimization reducing server load and improving page speeds"
      ],
      tech: ["Magento 2", "PHP", "React", "NLP", "JavaScript"]
    },
    {
      company: "Deloitte",
      position: "Blockchain Developer (Capstone Program)",
      period: "April - July 2024",
      description: "Developed innovative blockchain solutions for supply chain transparency and auditability through Deloitte's prestigious capstone program.",
      achievements: [
        "Developed blockchain-powered audit trail system for supply chains",
        "Focused on transparency, traceability, and secure data sharing",
        "Implemented smart contracts for automated supply chain processes"
      ],
      tech: ["Blockchain", "Smart Contracts", "Solidity", "Web3"]
    },
    {
      company: "IIT Roorkee",
      position: "AI Research Intern",
      period: "June 2023 - Aug 2023",
      description: "Contributing to cutting-edge research in sustainable development and AI applications through IIT Roorkee's SPARK internship program.",
      achievements: [
        "Developed Deep Q-Network (DQN) for autonomous UAV navigation in GPS-denied environments",
        "Implemented Deep Reinforcement Learning algorithms for complex decision-making",
        "Conducted comprehensive literature review on DRL for autonomous systems"
      ],
      tech: ["Python", "Deep Reinforcement Learning", "PyTorch"]
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-display text-gradient mb-6">Experience</h2>
              <p className="text-body-large text-text-secondary max-w-2xl mx-auto">
                My professional journey building intelligent AI systems and innovative solutions
              </p>
              <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full mt-6"></div>
            </div>
          </ScrollReveal>
          
          <div className="relative">
            {/* Continuous Vertical Timeline line */}
            <div className="absolute top-0 bottom-0 left-6 w-0.5 bg-gradient-to-b from-accent-primary via-accent-secondary to-transparent"></div>

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <ScrollReveal key={exp.company} delay={index * 200}>
                  <div className="flex relative z-10">
                    {/* Timeline dot */}
                    <div className="flex-shrink-0 w-12 h-12 bg-card border-2 border-accent-primary rounded-full flex items-center justify-center shadow-glow mt-1">
                      <div className="w-4 h-4 bg-gradient-primary rounded-full"></div>
                    </div>

                    {/* Content */}
                    <div className="ml-8 flex-1">
                      <div className="bg-glass rounded-xl p-8 border hover:border-accent-primary/50 transition-colors duration-300">
                        <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4 gap-2">
                          <div>
                            <h3 className="text-2xl text-text-primary font-medium mb-1">{exp.position}</h3>
                            <h4 className="text-lg text-accent-primary font-medium">{exp.company}</h4>
                          </div>
                          <span className="text-text-primary font-medium bg-interactive-base px-4 py-1.5 rounded-full text-sm border border-card-border whitespace-nowrap">
                            {exp.period}
                          </span>
                        </div>

                        <p className="text-text-secondary mb-6 leading-relaxed">{exp.description}</p>

                        <div className="mb-8">
                          <ul className="space-y-3">
                            {exp.achievements.map((achievement, i) => (
                              <li key={i} className="flex items-start">
                                <div className="w-2 h-2 bg-accent-primary rounded-full mt-2 mr-4 flex-shrink-0"></div>
                                <span className="text-text-secondary leading-relaxed">{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="flex flex-wrap gap-2">
                          {exp.tech.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 bg-interactive-base text-text-muted rounded-md text-sm border border-card-border"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
