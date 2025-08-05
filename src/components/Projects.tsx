import React from 'react';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import TiltCard from './TiltCard';

const Projects = () => {
  const projects = [
    {
      title: "AutoAI",
      description: "An end-to-end framework for real-world tabular & unstructured data automation. Takes raw data and automatically cleans, explores, selects features, trains models, and deploys APIs with built-in explainability.",
      tech: ["Python", "PyTorch", "FastAPI", "Docker", "SHAP", "Optuna"],
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      title: "Smart Electricity Demand Forecasting",
      description: "Built forecasting models using weather and substation data for Delhi. Implemented time-series analysis with LSTM networks for accurate demand prediction.",
      tech: ["Python", "LSTM", "Time Series", "Weather Data"],
      image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&h=400&fit=crop",
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      title: "Interpretable Disease Diagnosis",
      description: "Applied Explainable AI (XAI) to explain ML models for healthcare predictions. Used SHAP and LIME for model interpretability in medical diagnosis.",
      tech: ["Python", "XAI", "SHAP", "LIME", "Healthcare"],
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop",
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      title: "Sentiment Analysis Using NLP",
      description: "Fine-tuned BERT for text classification and sentiment extraction. Analyzed social media content impact on mental health using advanced NLP techniques.",
      tech: ["BERT", "NLP", "PyTorch", "Text Classification"],
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop",
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      title: "Population Density from Satellite Imagery",
      description: "Estimated population using remote sensing and image classification. Applied computer vision techniques to analyze satellite data for demographic insights.",
      tech: ["Computer Vision", "Satellite Data", "Image Classification", "Remote Sensing"],
      image: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=600&h=400&fit=crop",
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      title: "Vision Transformers vs CNNs",
      description: "Analyzed image classification performance and interpretability comparing Vision Transformers with traditional CNNs for various computer vision tasks.",
      tech: ["Vision Transformers", "CNNs", "PyTorch", "Image Classification"],
      image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?w=600&h=400&fit=crop",
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-16 bg-background-subtle">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-display text-gradient mb-6">Featured Projects</h2>
              <p className="text-body-large text-text-secondary max-w-2xl mx-auto">
                A showcase of my latest work - from AI automation frameworks to deep learning research
              </p>
              <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full mt-6"></div>
            </div>
          </ScrollReveal>
          
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {projects.filter(p => p.featured).map((project, index) => (
              <ScrollReveal key={project.title} delay={index * 200}>
                <TiltCard>
                  <div className="glow-card bg-card rounded-xl overflow-hidden h-full">
                    <div className="relative">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute top-4 right-4">
                        <span className="bg-accent-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                          Featured
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-2xl text-text-primary mb-3 font-medium">{project.title}</h3>
                      <p className="text-text-secondary mb-4 leading-relaxed">{project.description}</p>
                      
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tech.map((tech) => (
                          <span 
                            key={tech}
                            className="px-3 py-1 bg-interactive-base text-text-secondary rounded-lg text-sm border border-card-border"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex gap-3">
                        <Button variant="primary" size="sm" className="flex-1">
                          <ExternalLink className="w-4 h-4" />
                          Live Demo
                        </Button>
                        <Button variant="outline" size="sm" className="flex-1">
                          <Github className="w-4 h-4" />
                          Code
                        </Button>
                      </div>
                    </div>
                  </div>
                </TiltCard>
              </ScrollReveal>
            ))}
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {projects.filter(p => !p.featured).map((project, index) => (
              <ScrollReveal key={project.title} delay={400 + index * 100}>
                <TiltCard>
                  <div className="glow-card bg-card rounded-xl overflow-hidden h-full">
                    <div className="relative">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-32 object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl text-text-primary mb-2 font-medium">{project.title}</h3>
                      <p className="text-text-secondary mb-4 text-sm leading-relaxed">{project.description}</p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.slice(0, 3).map((tech) => (
                          <span 
                            key={tech}
                            className="px-2 py-1 bg-interactive-base text-text-secondary rounded text-xs border border-card-border"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.tech.length > 3 && (
                          <span className="px-2 py-1 text-text-muted text-xs">
                            +{project.tech.length - 3} more
                          </span>
                        )}
                      </div>
                      
                      <div className="flex gap-2">
                        <Button variant="ghost" size="sm" className="flex-1 text-xs">
                          <ExternalLink className="w-3 h-3" />
                          Demo
                        </Button>
                        <Button variant="ghost" size="sm" className="flex-1 text-xs">
                          <Github className="w-3 h-3" />
                          Code
                        </Button>
                      </div>
                    </div>
                  </div>
                </TiltCard>
              </ScrollReveal>
            ))}
          </div>
          
          <ScrollReveal delay={800}>
            <div className="text-center mt-12">
              <Button variant="outline" size="lg" className="cursor-hover">
                <Github className="w-5 h-5" />
                View All Projects on GitHub
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Projects;