import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroPortrait from "@/assets/hero-portrait.jpg";

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.querySelector("#projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id='home'
      className='min-h-screen flex items-center justify-center pt-20'
    >
      <div className='container mx-auto px-6'>
        <div className='grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto'>
          {/* Content */}
          <div className='animate-fade-in'>
            <h1 className='font-poppins font-bold text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 leading-tight'>
              Hi, I'm{" "}
              <span className='bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent'>
                Istiak Ahmed
              </span>
            </h1>

            <p className='font-inter text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed'>
              Full Stack Developer & Designer passionate about creating
              beautiful, functional digital experiences that make a difference.
            </p>

            <div className='flex flex-col sm:flex-row gap-4 mb-12'>
              <Button
                onClick={scrollToProjects}
                className='bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-8 py-3 text-lg'
              >
                View My Work
              </Button>
              <Button
                variant='outline'
                onClick={scrollToContact}
                className='border-primary text-primary hover:bg-primary hover:text-primary-foreground font-medium px-8 py-3 text-lg'
              >
                Get In Touch
              </Button>
            </div>

            {/* Social Links */}
            <div className='flex items-center space-x-6'>
              <a
                href='https://github.com'
                target='_blank'
                rel='noopener noreferrer'
                className='text-muted-foreground hover:text-primary transition-colors duration-200'
              >
                <Github size={24} />
              </a>
              <a
                href='https://linkedin.com'
                target='_blank'
                rel='noopener noreferrer'
                className='text-muted-foreground hover:text-primary transition-colors duration-200'
              >
                <Linkedin size={24} />
              </a>
              <a
                href='mailto:hello@istiakahmed.dev'
                className='text-muted-foreground hover:text-primary transition-colors duration-200'
              >
                <Mail size={24} />
              </a>
            </div>
          </div>

          {/* Portrait */}
          <div className='animate-slide-up lg:justify-self-end'>
            <div className='relative'>
              <div className='w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-2xl mx-auto'>
                <img
                  src={heroPortrait}
                  alt='Istiak Ahmed - Full Stack Developer'
                  className='w-full h-full object-cover'
                />
              </div>
              <div className='absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 opacity-0 hover:opacity-100 transition-opacity duration-300 w-80 h-80 lg:w-96 lg:h-96 mx-auto'></div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className='absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce'>
          <ArrowDown className='text-muted-foreground' size={24} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
