
import { Progress } from './ui/progress';

const SkillsSection = () => {
  const technicalSkills = [
    { name: 'Programming', percentage: 85 },
    { name: 'Data Structures', percentage: 80 },
    { name: 'Web Development', percentage: 75 },
    { name: 'Database Management', percentage: 70 },
    { name: 'Machine Learning', percentage: 65 },
  ];

  const softSkills = [
    'Problem Solving',
    'Team Collaboration',
    'Communication',
    'Time Management',
    'Adaptability',
    'Critical Thinking',
  ];

  const tools = [
    'Git & GitHub',
    'VS Code',
    'MATLAB',
    'Docker',
    'Jupyter Notebook',
    'AWS',
  ];

  return (
    <section id="skills" className="py-16 md:py-24 bg-secondary/50">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="section-title">My Skills</h2>
          <p className="section-subtitle">
            Through academic projects, self-learning, and practical applications, 
            I've developed a diverse set of technical and soft skills.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Technical Skills */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h3 className="text-xl font-display font-semibold mb-6 flex items-center">
              <span className="w-8 h-8 rounded-full bg-tech-blue/10 flex items-center justify-center mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-tech-blue" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 16.126V12m0 4.126a2.25 2.25 0 1 0 1.5 4.249 2.25 2.25 0 0 0-1.5-4.249Zm0-4.126V7.875m0 0a2.25 2.25 0 1 0-1.5-4.249A2.25 2.25 0 0 0 18 7.875ZM6 7.875V12m0-4.125a2.25 2.25 0 1 1-1.5-4.25A2.25 2.25 0 0 1 6 7.875ZM6 12v4.126m0 0a2.25 2.25 0 1 1 1.5 4.25 2.25 2.25 0 0 1-1.5-4.25ZM6 12h12" />
                </svg>
              </span>
              Technical Skills
            </h3>
            <div className="space-y-5">
              {technicalSkills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">{skill.name}</span>
                    <span className="text-sm text-muted-foreground">{skill.percentage}%</span>
                  </div>
                  <Progress value={skill.percentage} className="h-2" />
                </div>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h3 className="text-xl font-display font-semibold mb-6 flex items-center">
              <span className="w-8 h-8 rounded-full bg-tech-purple/10 flex items-center justify-center mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-tech-purple" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
                </svg>
              </span>
              Soft Skills
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {softSkills.map((skill, index) => (
                <div key={index} className="flex items-center p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-secondary/50 transition-all">
                  <div className="w-2 h-2 rounded-full bg-primary mr-3"></div>
                  <span className="text-sm font-medium">{skill}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tools & Technologies */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h3 className="text-xl font-display font-semibold mb-6 flex items-center">
              <span className="w-8 h-8 rounded-full bg-tech-indigo/10 flex items-center justify-center mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-tech-indigo" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z" />
                </svg>
              </span>
              Tools & Technologies
            </h3>
            <div className="flex flex-wrap gap-3">
              {tools.map((tool, index) => (
                <span 
                  key={index}
                  className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-secondary text-foreground"
                >
                  {tool}
                </span>
              ))}
            </div>
            <div className="mt-6">
              <h4 className="text-sm font-semibold mb-3">Programming Languages</h4>
              <div className="flex space-x-4">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                    <span className="text-blue-600 font-bold">C++</span>
                  </div>
                  <span className="text-xs mt-1">C++</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center">
                    <span className="text-yellow-600 font-bold">JS</span>
                  </div>
                  <span className="text-xs mt-1">JavaScript</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                    <span className="text-green-600 font-bold">Py</span>
                  </div>
                  <span className="text-xs mt-1">Python</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center">
                    <span className="text-red-600 font-bold">Ja</span>
                  </div>
                  <span className="text-xs mt-1">Java</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
