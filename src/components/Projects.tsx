import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-featured e-commerce platform with user authentication, payment processing, and admin dashboard.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      tags: ["React", "Node.js", "PostgreSQL", "Stripe"],
      github: "https://github.com",
      live: "https://demo.com"
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, team collaboration features, and analytics.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      tags: ["Next.js", "TypeScript", "Firebase", "Tailwind CSS"],
      github: "https://github.com",
      live: "https://demo.com"
    },
    {
      title: "Weather Dashboard",
      description: "A beautiful weather dashboard with forecasts, interactive maps, and location-based weather alerts.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop",
      tags: ["React", "Weather API", "Chart.js", "CSS3"],
      github: "https://github.com",
      live: "https://demo.com"
    },
    {
      title: "Social Media Analytics",
      description: "An analytics platform for social media metrics with data visualization and automated reporting features.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      tags: ["Vue.js", "Python", "D3.js", "Docker"],
      github: "https://github.com",
      live: "https://demo.com"
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-foreground mb-4">
              Featured Projects
            </h2>
            <p className="font-inter text-lg text-muted-foreground">
              Some of my recent work that I'm proud to share
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={index} 
                className="group hover-scale border-none shadow-lg overflow-hidden bg-card/50 backdrop-blur-sm"
              >
                <CardHeader className="p-0">
                  <div className="relative overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </CardHeader>
                
                <CardContent className="p-6">
                  <h3 className="font-poppins font-semibold text-xl text-foreground mb-3">
                    {project.title}
                  </h3>
                  
                  <p className="font-inter text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <Badge 
                        key={tag} 
                        variant="secondary"
                        className="bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                      onClick={() => window.open(project.github, '_blank')}
                    >
                      <Github size={16} className="mr-2" />
                      Code
                    </Button>
                    <Button
                      size="sm"
                      className="bg-secondary hover:bg-secondary/90 text-secondary-foreground"
                      onClick={() => window.open(project.live, '_blank')}
                    >
                      <ExternalLink size={16} className="mr-2" />
                      Live Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* View More Button */}
          <div className="text-center mt-12">
            <Button 
              variant="outline"
              className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground px-8 py-3"
              onClick={() => window.open("https://github.com", '_blank')}
            >
              View All Projects on GitHub
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;