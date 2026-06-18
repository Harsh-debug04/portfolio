import React from 'react';
import ScrollReveal from './ScrollReveal';
import TiltCard from './TiltCard';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming & Development",
      icon: (
        <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
          <div className="w-4 h-4 bg-white rounded-sm"></div>
        </div>
      ),
      skills: [
        { name: "Python", level: 90 },
        { name: "JavaScript / TypeScript", level: 85 },
        { name: "SQL", level: 80 },
        { name: "C++", level: 70 },
        { name: "FastAPI / Node.js", level: 85 }
      ]
    },
    {
      title: "AI/ML & Deep Learning",
      icon: (
        <div className="w-8 h-8 bg-gradient-accent rounded-lg flex items-center justify-center">
          <div className="w-5 h-3 bg-white rounded-full relative">
            <div className="absolute top-0.5 left-1 w-1 h-1 bg-accent-primary rounded-full"></div>
            <div className="absolute top-0.5 right-1 w-1 h-1 bg-accent-primary rounded-full"></div>
          </div>
        </div>
      ),
      skills: [
        { name: "TensorFlow / PyTorch", level: 90 },
        { name: "Scikit-learn", level: 95 },
        { name: "Computer Vision (OpenCV)", level: 85 },
        { name: "NLP (BERT, Transformers)", level: 80 },
        { name: "Deep RL", level: 75 }
      ]
    },
    {
      title: "Data Analytics & Tools",
      icon: (
        <div className="w-8 h-8 bg-gradient-secondary rounded-lg flex items-center justify-center">
          <div className="flex space-x-0.5">
            <div className="w-1 h-4 bg-white rounded-sm"></div>
            <div className="w-1 h-3 bg-white rounded-sm"></div>
            <div className="w-1 h-5 bg-white rounded-sm"></div>
            <div className="w-1 h-2 bg-white rounded-sm"></div>
          </div>
        </div>
      ),
      skills: [
        { name: "Pandas / NumPy", level: 95 },
        { name: "Power BI / Tableau", level: 80 },
        { name: "Matplotlib / Seaborn", level: 90 },
        { name: "Git / Docker", level: 85 },
        { name: "Azure / AWS", level: 70 }
      ]
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-display text-gradient mb-6">Skills & Expertise</h2>
              <p className="text-body-large text-text-secondary max-w-2xl mx-auto">
                A comprehensive toolkit for building intelligent, automated AI systems
              </p>
              <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full mt-6"></div>
            </div>
          </ScrollReveal>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <ScrollReveal key={category.title} delay={index * 100}>
                <TiltCard className="h-full" intensity={3}>
                  <div className="glow-card bg-card rounded-xl p-8 h-full">
                    <div className="flex items-center space-x-4 mb-8">
                      {category.icon}
                      <h3 className="text-xl text-text-primary font-medium">{category.title}</h3>
                    </div>
                    <div className="space-y-6">
                      {category.skills.map((skill) => (
                        <div key={skill.name}>
                          <div className="flex justify-between mb-2">
                            <span className="text-sm font-medium text-text-primary">{skill.name}</span>
                            <span className="text-sm font-medium text-text-muted">{skill.level}%</span>
                          </div>
                          <div className="w-full bg-interactive-base rounded-full h-2">
                            <div
                              className="bg-gradient-primary h-2 rounded-full transition-all duration-1000 ease-out"
                              style={{ width: `${skill.level}%` }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </TiltCard>
              </ScrollReveal>
            ))}
          </div>
          
          <ScrollReveal delay={600}>
            <div className="mt-16 text-center">
              <div className="bg-glass rounded-xl p-8 border max-w-3xl mx-auto relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-glow opacity-20" />
                <div className="relative z-10">
                  <h3 className="text-2xl text-text-primary mb-4 font-light">Always Learning</h3>
                  <p className="text-body-large text-text-secondary mb-6">
                    Technology evolves fast, and so do I. Currently exploring advanced AI techniques,
                    optimization algorithms, and hybrid cloud systems for next-generation solutions.
                  </p>
                  <div className="flex flex-wrap justify-center gap-3">
                    {["Generative AI", "Agentic AI", "Quantum ML", "Edge Computing", "AutoML", "MLOps"].map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-2 bg-accent-primary/10 text-accent-primary rounded-full text-sm font-medium border border-accent-primary/20 hover:bg-accent-primary hover:text-white transition-all cursor-hover"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
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
