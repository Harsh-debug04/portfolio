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
      skills: ["Python", "SQL", "JavaScript", "Git", "FastAPI"]
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
      skills: ["TensorFlow", "PyTorch", "BERT", "OpenCV", "Vision Transformers", "Scikit-learn"]
    },
    {
      title: "Data Analytics & Visualization",
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
      skills: ["Power BI", "Tableau", "Excel", "Matplotlib", "Seaborn", "Plotly"]
    },
    {
      title: "Cloud & Databases",
      icon: (
        <div className="w-8 h-8 bg-gradient-tertiary rounded-lg flex items-center justify-center">
          <div className="relative">
            <div className="w-5 h-3 bg-white rounded-sm"></div>
            <div className="absolute top-1 left-1 w-3 h-1 bg-accent-primary rounded-full"></div>
          </div>
        </div>
      ),
      skills: ["Microsoft Azure", "MySQL", "MongoDB", "Docker", "Optuna", "AutoGluon"]
    },
    {
      title: "AI Specializations",
      icon: (
        <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
          <div className="w-4 h-4 border-2 border-white rounded-full relative">
            <div className="absolute top-1 left-1 w-1 h-1 bg-white rounded-full"></div>
          </div>
        </div>
      ),
      skills: ["NLP", "Computer Vision", "XAI", "AutoML", "Blockchain", "Deep RL"]
    },
    {
      title: "Leadership & Innovation",
      icon: (
        <div className="w-8 h-8 bg-gradient-accent rounded-lg flex items-center justify-center">
          <div className="relative">
            <div className="w-3 h-4 bg-white rounded-t-full"></div>
            <div className="absolute bottom-0 left-0.5 w-2 h-2 bg-accent-primary rounded-full"></div>
          </div>
        </div>
      ),
      skills: ["Team Leadership", "Research", "Project Management", "Problem Solving", "Strategic Thinking", "Innovation"]
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
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <ScrollReveal key={category.title} delay={index * 100}>
                <TiltCard className="h-full">
                  <div className="glow-card bg-card rounded-xl p-6 h-full">
                    <div className="text-center mb-6">
                      <div className="flex justify-center mb-3">{category.icon}</div>
                      <h3 className="text-xl text-text-primary font-medium">{category.title}</h3>
                    </div>
                    <div className="space-y-3">
                      {category.skills.map((skill) => (
                        <div 
                          key={skill}
                          className="bg-interactive-base rounded-lg p-3 text-center text-text-secondary hover:bg-interactive-hover hover:text-accent-primary transition-all duration-300 cursor-hover"
                        >
                          {skill}
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
              <div className="bg-glass rounded-xl p-8 border max-w-3xl mx-auto">
                <h3 className="text-2xl text-text-primary mb-4 font-light">Always Learning</h3>
                <p className="text-body-large text-text-secondary mb-6">
                  Technology evolves fast, and so do I. Currently exploring advanced AI techniques, 
                  optimization algorithms, and hybrid cloud systems for next-generation solutions.
                </p>
                <div className="flex flex-wrap justify-center gap-3">
                  {["Generative AI", "Deep RL", "Hybrid Cloud", "Edge Computing", "Quantum ML", "AutoML"].map((tech) => (
                    <span 
                      key={tech}
                      className="px-4 py-2 bg-accent-primary/10 text-accent-primary rounded-full text-sm border border-accent-primary/20 hover:bg-accent-primary/20 transition-colors cursor-hover"
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