
import { Book, Code, Lightbulb } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            I'm a pre-final year B.Tech student passionate about technology and innovation.
            Here's a bit more about who I am and what drives me.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg">
              Hello! I'm currently pursuing my B.Tech degree and am passionate about leveraging technology to solve real-world problems. 
              My academic journey has equipped me with strong fundamentals in engineering principles and practical problem-solving skills.
            </p>
            <p className="text-lg">
              As I approach my final year, I'm focused on applying my knowledge through meaningful projects and internships. 
              I believe in continuous learning and staying updated with emerging technologies.
            </p>
            <p className="text-lg">
              When I'm not coding or studying, you can find me exploring new technologies, contributing to open-source projects, 
              or participating in hackathons. I'm eager to collaborate, learn, and grow in this ever-evolving tech landscape.
            </p>

            <div className="pt-4">
              <h3 className="text-xl font-display font-semibold mb-4">What I Do</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="border border-border rounded-lg p-4 text-center hover:border-primary/50 hover:shadow-sm transition-all">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Code className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-medium">Development</h4>
                </div>
                <div className="border border-border rounded-lg p-4 text-center hover:border-primary/50 hover:shadow-sm transition-all">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Lightbulb className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-medium">Problem Solving</h4>
                </div>
                <div className="border border-border rounded-lg p-4 text-center hover:border-primary/50 hover:shadow-sm transition-all">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Book className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-medium">Learning</h4>
                </div>
              </div>
            </div>
          </div>

          <div className="relative rounded-xl overflow-hidden h-80 md:h-96">
            <img 
              src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Student working on laptop" 
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-6">
              <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 max-w-xs">
                <p className="text-sm font-medium text-primary">Pre-Final Year</p>
                <h3 className="text-xl font-display font-bold">B.Tech Student</h3>
                <p className="text-sm text-muted-foreground mt-1">Preparing for a career in technology</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
