
import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export type Project = {
  id: string;
  title: string;
  description: string;
  image: string;
  techs: string[];
  slug: string;
};

const projects: Project[] = [
  {
    id: "1",
    title: "EnvAlab",
    description: "EnvAlab is a comprehensive laboratory management system designed to address the inefficiencies and inconsistencies associated with manual inventory tracking.",
    image: "https://placehold.co/600x400/e2e8f0/1e293b?text=EnvAlab",
    techs: ["Next.js", "React", "TypeScript"],
    slug: "envalab"
  },
  {
    id: "2",
    title: "Fontier",
    description: "Fontier is my 7th JavaScript location case-building project built after a few months of developing interest in  front-end development.",
    image: "https://placehold.co/600x400/e2e8f0/1e293b?text=Fontier",
    techs: ["HTML", "CSS", "JavaScript"],
    slug: "fontier"
  },
  {
    id: "3",
    title: "LendSQR",
    description: "A comprehensive finance project management system designed to help track the cash flow and vacationing management.",
    image: "https://placehold.co/600x400/e2e8f0/1e293b?text=LendSQR",
    techs: ["React", "Node.js"],
    slug: "lendsqr"
  },
  {
    id: "4",
    title: "EnvAlab 2.0",
    description: "Completely redesigned laboratory management system with improved inventory tracking and user experience.",
    image: "https://placehold.co/600x400/e2e8f0/1e293b?text=EnvAlab+2.0",
    techs: ["Next.js", "TypeScript", "Tailwind CSS"],
    slug: "envalab-2"
  }
];

export default function Projects() {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  return (
    <section id="projects" className="container-section">
      <div className="mb-12 text-center">
        <span className="text-sm uppercase tracking-wider text-muted-foreground">Portfolio</span>
        <h2 className="section-title">My Projects</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
            className="group"
            onMouseEnter={() => setHoveredProject(project.id)}
            onMouseLeave={() => setHoveredProject(null)}
          >
            <div className="bg-card rounded-lg overflow-hidden shadow-project transition-shadow hover:shadow-lg">
              <div className="relative overflow-hidden aspect-video">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techs.map((tech) => (
                    <span key={tech} className="text-xs px-2 py-1 bg-secondary text-secondary-foreground rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <a 
                    href="#" 
                    className="btn-primary text-sm"
                  >
                    Preview Site
                  </a>
                  
                  <Link 
                    to={`/projects/${project.slug}`} 
                    className="btn-outline text-sm"
                  >
                    View Case Study
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
