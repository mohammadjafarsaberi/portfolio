import React from 'react';
import { Briefcase, Code, Users, Zap, Palette, Layers, Server, Database, GitMerge, Shuffle, Settings } from 'lucide-react';

const skills = [
  { name: "HTML", icon: <Code className="h-5 w-5 text-orange-500" /> },
  { name: "CSS", icon: <Palette className="h-5 w-5 text-blue-500" /> },
  { name: "JavaScript", icon: <Code className="h-5 w-5 text-yellow-400" /> },
  { name: "TypeScript", icon: <Code className="h-5 w-5 text-blue-400" /> },
  { name: "React.js", icon: <Layers className="h-5 w-5 text-sky-400" /> },
  { name: "Next.js", icon: <Layers className="h-5 w-5 text-neutral-400" /> },
  { name: "Redux", icon: <Shuffle className="h-5 w-5 text-purple-500" /> },
  { name: "Tailwind CSS", icon: <Palette className="h-5 w-5 text-teal-400" /> },
  { name: "Bootstrap", icon: <Palette className="h-5 w-5 text-purple-400" /> },
  { name: "PHP", icon: <Server className="h-5 w-5 text-indigo-400" /> },
  { name: "Laravel", icon: <Server className="h-5 w-5 text-red-500" /> },
  { name: "MySQL", icon: <Database className="h-5 w-5 text-blue-600" /> },
  { name: "PostgreSQL", icon: <Database className="h-5 w-5 text-sky-700" /> },
  { name: "SQLite", icon: <Database className="h-5 w-5 text-gray-500" /> },
  { name: "Git", icon: <GitMerge className="h-5 w-5 text-orange-600" /> },
];

const About: React.FC = () => {
  return (
    <section id="about" className="section-padding bg-card">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-poppins">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm a dedicated Software Engineer with a knack for building intuitive and performant web applications. My journey in tech has been driven by a constant curiosity and a desire to solve complex problems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-2xl font-semibold mb-4 text-primary">My Journey & Philosophy</h3>
            <p className="text-muted-foreground mb-4">
              From my first "Hello World" to architecting full-stack applications, I've embraced every challenge as an opportunity to grow. I believe in writing clean, scalable, and maintainable code. Collaboration and continuous learning are at the core of my work ethic.
            </p>
            <p className="text-muted-foreground">
              I thrive in dynamic environments and enjoy working on projects that make a tangible impact. Whether it's frontend finesse or backend robustness, I'm committed to delivering excellence.
            </p>
          </div>
          <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <h3 className="text-2xl font-semibold mb-6 text-primary">Core Skills</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {skills.map((skill) => (
                <div key={skill.name} className="flex items-center space-x-3 p-3 bg-background rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  {skill.icon}
                  <span className="font-medium">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-16 text-center animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
           <h3 className="text-2xl font-semibold mb-4 text-primary">What Drives Me?</h3>
           <div className="grid md:grid-cols-3 gap-8">
             <div className="p-6 bg-background rounded-lg shadow-md">
                <Zap className="h-10 w-10 text-sky-400 mx-auto mb-3" />
                <h4 className="text-xl font-semibold mb-2">Innovation</h4>
                <p className="text-muted-foreground text-sm">Constantly exploring new technologies to create cutting-edge solutions.</p>
             </div>
             <div className="p-6 bg-background rounded-lg shadow-md">
                <Users className="h-10 w-10 text-teal-400 mx-auto mb-3" />
                <h4 className="text-xl font-semibold mb-2">User-Centricity</h4>
                <p className="text-muted-foreground text-sm">Building products that are intuitive, accessible, and provide real value.</p>
             </div>
             <div className="p-6 bg-background rounded-lg shadow-md">
                <Code className="h-10 w-10 text-purple-400 mx-auto mb-3" />
                <h4 className="text-xl font-semibold mb-2">Craftsmanship</h4>
                <p className="text-muted-foreground text-sm">Paying attention to detail and striving for high-quality, robust code.</p>
             </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default About;
