import React from 'react';
import ScrollReveal from './ScrollReveal';
import { Terminal, Cpu, Database } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming & Development",
      icon: <Terminal className="w-6 h-6 text-primary" />,
      skills: ["Python", "JavaScript / TypeScript", "SQL", "C++", "FastAPI / Node.js"]
    },
    {
      title: "AI/ML & Deep Learning",
      icon: <Cpu className="w-6 h-6 text-primary" />,
      skills: ["TensorFlow / PyTorch", "Scikit-learn", "Computer Vision (OpenCV)", "NLP (BERT, Transformers)", "Deep RL"]
    },
    {
      title: "Data Analytics & Tools",
      icon: <Database className="w-6 h-6 text-primary" />,
      skills: ["Pandas / NumPy", "Power BI / Tableau", "Matplotlib / Seaborn", "Git / Docker", "Azure / AWS"]
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-display mb-6">Skills & Expertise</h2>
              <p className="text-body-large text-text-secondary max-w-2xl mx-auto">
                A comprehensive toolkit for building intelligent, automated systems
              </p>
              <div className="w-16 h-[1px] bg-border mx-auto mt-6"></div>
            </div>
          </ScrollReveal>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {skillCategories.map((category, index) => (
              <ScrollReveal key={category.title} delay={index * 100}>
                <div className="bg-background border border-border p-8 h-full flex flex-col">
                  <div className="flex items-center space-x-4 mb-8 border-b border-border pb-4">
                    {category.icon}
                    <h3 className="text-xl font-serif text-text-primary">{category.title}</h3>
                  </div>
                  <ul className="space-y-4 flex-1">
                    {category.skills.map((skill) => (
                      <li key={skill} className="flex items-start">
                        <span className="w-1.5 h-1.5 bg-primary mt-2 mr-3 flex-shrink-0"></span>
                        <span className="text-text-secondary leading-relaxed">{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>
          
          <ScrollReveal delay={600}>
            <div className="mt-20">
              <div className="bg-background-subtle border border-border p-10 max-w-4xl mx-auto text-center">
                <h3 className="text-2xl font-serif text-text-primary mb-4">Current Focus</h3>
                <p className="text-body-large text-text-secondary mb-8">
                  Continuously expanding my knowledge in advanced AI architectures and optimization techniques.
                </p>
                <div className="flex flex-wrap justify-center gap-3">
                  {["Generative AI", "Agentic AI", "Quantum ML", "Edge Computing", "AutoML", "MLOps"].map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 border border-border text-text-muted text-sm uppercase tracking-wider bg-background"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Skills;
