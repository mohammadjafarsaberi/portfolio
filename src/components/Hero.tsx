import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown, Download } from "lucide-react";

// You can replace this URL with the actual path to your image once uploaded
const placeholderImageUrl = "../../public/saberi.jpeg";

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center section-padding bg-gradient-to-br from-background to-slate-900/80 relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10">
        {/* Optional: Add subtle background pattern or particles here */}
      </div>
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
        <div
          className="text-center md:text-left animate-fade-in-up"
          style={{ animationDelay: "0.2s" }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 font-poppins">
            Hi, I'm <span className="gradient-text">Mohammad Jafar Saberi</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 font-roboto">
            A Passionate Software Engineer & Full Stack Web Developer
            transforming ideas into powerful digital solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button
              size="lg"
              asChild
              className="bg-primary hover:bg-sky-500 text-primary-foreground shadow-lg transform hover:scale-105 transition-transform duration-300"
            >
              <a href="#projects">
                View My Work
                <ArrowDown className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground shadow-lg transform hover:scale-105 transition-transform duration-300"
            >
              <a
                href="/cv.pdf"
                download
                aria-label="Download Mohammad Jafar Saberi's CV"
              >
                Download CV
                <Download className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
        <div
          className="relative animate-fade-in-up"
          style={{ animationDelay: "0.4s" }}
        >
          <div className="aspect-square rounded-full overflow-hidden shadow-2xl mx-auto md:mx-0 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 border-4 border-primary/50">
            <img
              src={placeholderImageUrl}
              alt="Mohammad Jafar Saberi - Software Developer"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -top-8 -left-8 w-24 h-24 bg-sky-500/20 rounded-full animate-pulse filter blur-xl"></div>
          <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-teal-500/20 rounded-full animate-pulse filter blur-xl animation-delay-2000"></div>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
        <a href="#about">
          <ArrowDown className="h-8 w-8 text-primary" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
