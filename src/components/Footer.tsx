import React from "react";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const handleContactSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission, e.g., send to an API or mailto
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email");
    const message = formData.get("message");
    console.log("Contact form submitted:", { email, message });
    // For a real application, you would integrate with an email service or backend.
    window.location.href = `mailto:mohammadjafarsaberi11@gmail.com?subject=Contact Form Submission&body=${message}`;
    e.currentTarget.reset();
  };

  return (
    <footer
      id="contact"
      className="section-padding bg-card border-t border-border"
    >
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <div className="animate-fade-in-up">
            <h3 className="text-3xl font-bold mb-6 font-poppins gradient-text">
              Let's Connect
            </h3>
            <p className="text-muted-foreground mb-6">
              I'm always excited to discuss new projects, creative ideas, or
              opportunities to be part of something amazing. Feel free to reach
              out!
            </p>
            <form onSubmit={handleContactSubmit} className="space-y-4">
              <div>
                <label htmlFor="email" className="sr-only">
                  Your Email
                </label>
                <Input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Your Email"
                  required
                  className="bg-background"
                />
              </div>
              <div>
                <label htmlFor="message" className="sr-only">
                  Your Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  placeholder="Your Message"
                  required
                  className="w-full p-3 rounded-md bg-background border border-input focus:ring-primary focus:border-primary transition-colors"
                ></textarea>
              </div>
              <Button
                type="submit"
                className="w-full bg-primary hover:bg-sky-500 text-primary-foreground"
              >
                Send Message <Mail className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </div>

          <div
            className="animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            <h4 className="text-xl font-semibold mb-4 font-poppins text-primary">
              Find Me On
            </h4>
            <div className="flex space-x-4 mb-6">
              <a
                href="https://github.com/mjafarsaberi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="h-7 w-7" />
              </a>
              <a
                href="https://linkedin.com/in/mohammad-jafar-saberi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="h-7 w-7" />
              </a>
              <a
                href="https://twitter.com/mjafarsaberi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Twitter className="h-7 w-7" />
              </a>
            </div>
            <h4 className="text-xl font-semibold mb-2 font-poppins text-primary">
              Contact Info
            </h4>
            <p className="text-muted-foreground mb-1">
              Email:{" "}
              <a
                href="mailto:mohammadjafarsaberi11@gmail.com"
                className="hover:text-primary transition-colors"
              >
                mohammadjafarsaberi11@gmail.com
              </a>
            </p>
            <p className="text-muted-foreground mb-1">
              Phone:{" "}
              <a
                href="tel:+93706631062"
                className="hover:text-primary transition-colors"
              >
                +93 70 663 1062
              </a>
            </p>
            <p className="text-muted-foreground">
              Location: Kabul, Afghanistan (Optional - Or City, Country)
            </p>
          </div>
        </div>

        <div
          className="text-center text-sm text-muted-foreground pt-8 border-t border-border/50 animate-fade-in-up"
          style={{ animationDelay: "0.4s" }}
        >
          <p>
            &copy; {currentYear} Mohammad Jafar Saberi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
