
const EducationSection = () => {
  const education = [
    {
      degree: "Bachelor of Technology",
      field: "Computer Science & Engineering",
      institution: "Your University Name",
      location: "City, State",
      period: "2021 - Present",
      description: "Currently in pre-final year with a focus on core computer science subjects and emerging technologies.",
      achievements: [
        "Maintained a CGPA of 8.5/10",
        "Member of the University Coding Club",
        "Participated in various hackathons and technical competitions"
      ]
    },
    {
      degree: "Senior Secondary (XII)",
      field: "Science Stream",
      institution: "Your School Name",
      location: "City, State",
      period: "2019 - 2021",
      description: "Completed high school with a focus on Physics, Chemistry, and Mathematics.",
      achievements: [
        "Scored 92% in board examinations",
        "Recipient of the Principal's Merit Award",
        "Participated in various science exhibitions"
      ]
    },
    {
      degree: "Secondary (X)",
      field: "General",
      institution: "Your School Name",
      location: "City, State",
      period: "2018 - 2019",
      description: "Completed secondary education with distinction.",
      achievements: [
        "Scored 94% in board examinations",
        "Active participant in extracurricular activities",
        "Received Perfect Attendance Award"
      ]
    }
  ];

  return (
    <section id="education" className="py-16 md:py-24 bg-secondary/50">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="section-title">Education</h2>
          <p className="section-subtitle">
            My academic journey has equipped me with strong theoretical foundations and practical knowledge.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative border-l border-primary ml-6 md:ml-0 md:pl-6">
            {education.map((item, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="ml-2 md:ml-8">
                  <div className="bg-white rounded-xl p-6 shadow-sm">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                      <div>
                        <h3 className="text-xl font-display font-semibold">{item.degree}</h3>
                        <p className="text-primary font-medium">{item.field}</p>
                      </div>
                      <div className="mt-2 md:mt-0 md:text-right">
                        <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
                          {item.period}
                        </span>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <div className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-muted-foreground mt-0.5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                        </svg>
                        <div>
                          <p className="font-medium">{item.institution}</p>
                          <p className="text-sm text-muted-foreground">{item.location}</p>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground mb-4">{item.description}</p>
                    
                    {item.achievements && item.achievements.length > 0 && (
                      <div>
                        <h4 className="text-sm font-semibold mb-2">Key Achievements:</h4>
                        <ul className="space-y-1">
                          {item.achievements.map((achievement, achIndex) => (
                            <li key={achIndex} className="text-sm flex items-start">
                              <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 mr-2"></div>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
