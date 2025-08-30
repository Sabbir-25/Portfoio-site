import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const skills = [
    "React", "Next.js", "TypeScript", "Node.js", "Python", "PostgreSQL",
    "Tailwind CSS", "Firebase", "AWS", "Docker", "Git", "Figma"
  ];

  const experiences = [
    {
      title: "Senior Full Stack Developer",
      company: "Tech Solutions Inc.",
      period: "2022 - Present",
      description: "Leading development of scalable web applications using React, Node.js, and cloud technologies."
    },
    {
      title: "Frontend Developer",
      company: "Creative Digital Agency",
      period: "2020 - 2022",
      description: "Built responsive, user-friendly interfaces for various client projects using modern frontend technologies."
    },
    {
      title: "Junior Developer",
      company: "StartupTech",
      period: "2019 - 2020",
      description: "Contributed to product development and gained experience in full-stack development practices."
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-foreground mb-4">
              About Me
            </h2>
            <p className="font-inter text-lg text-muted-foreground">
              Get to know more about my background and expertise
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Bio */}
            <div className="animate-slide-up">
              <h3 className="font-poppins font-semibold text-2xl text-foreground mb-6">
                My Story
              </h3>
              <div className="space-y-4 font-inter text-muted-foreground leading-relaxed">
                <p>
                  I'm a passionate full-stack developer with over 4 years of experience 
                  creating digital solutions that combine beautiful design with robust functionality.
                </p>
                <p>
                  My journey started with a curiosity about how websites work, which led me 
                  to dive deep into both frontend and backend technologies. I love the 
                  challenge of turning complex problems into simple, elegant solutions.
                </p>
                <p>
                  When I'm not coding, you can find me exploring new technologies, 
                  contributing to open-source projects, or sharing knowledge with the 
                  developer community.
                </p>
              </div>
            </div>

            {/* Skills */}
            <div className="animate-slide-up">
              <h3 className="font-poppins font-semibold text-2xl text-foreground mb-6">
                Technical Skills
              </h3>
              <div className="flex flex-wrap gap-2 mb-8">
                {skills.map((skill) => (
                  <Badge 
                    key={skill} 
                    variant="secondary"
                    className="bg-secondary/10 text-secondary hover:bg-secondary hover:text-secondary-foreground transition-colors duration-200 cursor-default"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Experience */}
          <div className="mt-16 animate-fade-in">
            <h3 className="font-poppins font-semibold text-2xl text-foreground mb-8 text-center">
              Experience
            </h3>
            <div className="grid gap-6">
              {experiences.map((exp, index) => (
                <Card key={index} className="hover-scale border-none shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                      <h4 className="font-poppins font-semibold text-lg text-foreground">
                        {exp.title}
                      </h4>
                      <span className="font-inter text-sm text-secondary font-medium">
                        {exp.period}
                      </span>
                    </div>
                    <p className="font-poppins font-medium text-primary mb-2">
                      {exp.company}
                    </p>
                    <p className="font-inter text-muted-foreground">
                      {exp.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;