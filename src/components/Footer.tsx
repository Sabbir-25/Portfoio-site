import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center mb-4 md:mb-0">
            <p className="font-inter text-sm">
              © {currentYear} Istiak Ahmed. Made with{" "}
              <Heart className="inline w-4 h-4 text-secondary mx-1" fill="currentColor" />
              and lots of coffee.
            </p>
          </div>
          
          <div className="flex items-center space-x-6">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#home")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="font-inter text-sm hover:text-secondary transition-colors duration-200"
            >
              Back to Top
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;