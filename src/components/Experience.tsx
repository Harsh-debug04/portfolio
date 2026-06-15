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
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-display mb-6">Experience</h2>
              <p className="text-body-large text-text-secondary max-w-2xl mx-auto">
                My professional journey building intelligent systems and innovative solutions
              </p>
              <div className="w-16 h-[1px] bg-border mx-auto mt-6"></div>
            </div>
          </ScrollReveal>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <ScrollReveal key={exp.company} delay={index * 150}>
                <div className="border-l-4 border-primary pl-6 md:pl-10 relative">
                  <div className="absolute w-3 h-3 bg-primary -left-[8px] top-2 rounded-full border-2 border-background"></div>

                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4 gap-2">
                    <div>
                      <h3 className="text-2xl text-text-primary font-serif mb-1">{exp.position}</h3>
                      <h4 className="text-lg text-text-secondary font-medium">{exp.company}</h4>
                    </div>
                    <span className="text-text-muted text-sm font-medium tracking-wider uppercase">
                      {exp.period}
                    </span>
                  </div>

                  <p className="text-text-secondary mb-6 leading-relaxed max-w-3xl">{exp.description}</p>

                  <div className="mb-6">
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-primary mr-3">-</span>
                          <span className="text-text-secondary leading-relaxed text-sm md:text-base">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-background-subtle text-text-muted text-xs uppercase tracking-wider border border-border"
                      >
                        {tech}
                      </span>
                    ))}
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
