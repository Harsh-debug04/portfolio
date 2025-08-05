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
        "Implemented Varnish Cache optimization reducing server load and improving page speeds",
        "Enhanced SEO capabilities with URL structures, metadata management, and XML sitemaps"
      ],
      tech: ["Magento 2", "PHP", "MySQL", "Varnish Cache", "NLP", "JavaScript"]
    },
    {
      company: "Deloitte",
      position: "Blockchain Developer (Capstone Program)",
      period: "April - July 2024",
      description: "Developed innovative blockchain solutions for supply chain transparency and auditability through Deloitte's prestigious capstone program.",
      achievements: [
        "Developed blockchain-powered audit trail system for supply chains",
        "Focused on transparency, traceability, and secure data sharing",
        "Implemented smart contracts for automated supply chain processes",
        "Created immutable ledger system enhancing trust among participants"
      ],
      tech: ["Blockchain", "Smart Contracts", "Solidity", "Web3", "Supply Chain"]
    },
    {
      company: "IIT Roorkee",
      position: "AI Research Intern",
      period: "June 2023",
      description: "Contributing to cutting-edge research in sustainable development and AI applications through IIT Roorkee's SPARK internship program.",
      achievements: [
        "Contributed to sustainable development research projects",
        "Worked on environmental data analysis and impact studies",
        "Developed Deep Q-Network (DQN) for autonomous UAV navigation in GPS-denied environments",
        "Implemented Deep Reinforcement Learning algorithms for complex decision-making",
        "Conducted comprehensive literature review on DRL for autonomous systems"
      ],
      tech: ["Python", "Deep Reinforcement Learning", "DQN", "PyTorch", "Environmental Data Analysis"]
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
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <ScrollReveal key={exp.company} delay={index * 200}>
                <div className="relative">
                  {/* Timeline line */}
                  {index < experiences.length - 1 && (
                    <div className="absolute left-6 top-20 w-0.5 h-40 bg-gradient-to-b from-accent-primary to-transparent"></div>
                  )}
                  
                  <div className="flex">
                    {/* Timeline dot */}
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center shadow-glow">
                      <div className="w-4 h-4 bg-white rounded-full"></div>
                    </div>
                    
                    {/* Content */}
                    <div className="ml-6 flex-1">
                      <div className="bg-glass rounded-xl p-6 border">
                        <div className="flex flex-wrap justify-between items-start mb-4">
                          <div>
                            <h3 className="text-xl text-text-primary font-medium mb-1">{exp.position}</h3>
                            <h4 className="text-lg text-accent-primary font-medium">{exp.company}</h4>
                          </div>
                          <span className="text-text-muted bg-interactive-base px-3 py-1 rounded-full text-sm">
                            {exp.period}
                          </span>
                        </div>
                        
                        <p className="text-text-secondary mb-6 leading-relaxed">{exp.description}</p>
                        
                        <div className="mb-6">
                          <h5 className="text-text-primary font-medium mb-3">Key Achievements:</h5>
                          <ul className="space-y-2">
                            {exp.achievements.map((achievement, i) => (
                              <li key={i} className="flex items-start">
                                <div className="w-2 h-2 bg-accent-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                <span className="text-text-secondary text-sm leading-relaxed">{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div className="flex flex-wrap gap-2">
                          {exp.tech.map((tech) => (
                            <span 
                              key={tech}
                              className="px-3 py-1 bg-interactive-base text-text-secondary rounded-lg text-sm border border-card-border hover:bg-interactive-hover hover:text-accent-primary transition-colors cursor-hover"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;