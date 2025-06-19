
import React from 'react';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  liveUrl?: string;
  repoUrl?: string;
  delay?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, imageUrl, tags, liveUrl, repoUrl, delay = '0s' }) => {
  return (
    <div className="bg-background rounded-xl shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-300 flex flex-col animate-fade-in-up" style={{ animationDelay: delay }}>
      <img src={imageUrl} alt={title} className="w-full h-56 object-cover" />
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-2xl font-semibold mb-3 font-poppins text-primary">{title}</h3>
        <p className="text-muted-foreground mb-4 text-sm flex-grow">{description}</p>
        <div className="mb-4">
          {tags.map((tag) => (
            <span key={tag} className="inline-block bg-secondary text-secondary-foreground text-xs font-semibold mr-2 mb-2 px-2.5 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-auto flex space-x-3">
          {liveUrl && (
            <Button variant="outline" size="sm" asChild className="border-primary text-primary hover:bg-primary hover:text-primary-foreground flex-1">
              <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
              </a>
            </Button>
          )}
          {repoUrl && (
            <Button variant="ghost" size="sm" asChild className="text-muted-foreground hover:text-primary hover:bg-primary/10 flex-1">
              <a href={repoUrl} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" /> View Code
              </a>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
