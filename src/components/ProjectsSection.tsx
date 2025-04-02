
import { ExternalLink, Github } from 'lucide-react';
import { Button } from './ui/button';

const ProjectsSection = () => {
  const projects = [
    {
      title: "Smart Home Automation",
      description: "Developed an IoT-based system to control home appliances remotely using Arduino and a mobile app.",
      image: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      tags: ["IoT", "Arduino", "Mobile App", "C++"],
      github: "#",
      demo: "#"
    },
    {
      title: "Weather Prediction Model",
      description: "Created a machine learning model to predict weather patterns using historical data and neural networks.",
      image: "https://images.unsplash.com/photo-1534088568595-a066f410bcda?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      tags: ["Machine Learning", "Python", "Data Analysis"],
      github: "#",
      demo: "#"
    },
    {
      title: "E-Learning Platform",
      description: "Built a web application for students to access course materials, submit assignments, and track progress.",
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      tags: ["Web Development", "React", "Node.js", "MongoDB"],
      github: "#",
      demo: "#"
    }
  ];

  return (
    <section id="projects" className="py-16 md:py-24 bg-white">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="section-title">My Projects</h2>
          <p className="section-subtitle">
            Here are some of the projects I've worked on during my academic journey.
            Each project represents my technical skills and problem-solving abilities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="card-project group">
              <div className="relative w-full h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-70"></div>
                <div className="absolute bottom-0 left-0 p-4 w-full">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 3).map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        className="text-xs px-2 py-1 rounded-full bg-white/20 text-white backdrop-blur-sm"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="text-xs px-2 py-1 rounded-full bg-white/20 text-white backdrop-blur-sm">
                        +{project.tags.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-display font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4 text-sm">{project.description}</p>
                <div className="flex space-x-3">
                  <Button variant="outline" size="sm" className="group" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github size={16} className="mr-2" />
                      <span>Code</span>
                    </a>
                  </Button>
                  <Button size="sm" className="group" asChild>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={16} className="mr-2" />
                      <span>Demo</span>
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button variant="outline" className="btn-outline">
            View More Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
