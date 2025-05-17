
import { useParams } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Project } from "@/components/sections/Projects";

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
    description: "Fontier is my 7th JavaScript location case-building project built after a few months of developing interest in front-end development.",
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

const ProjectDetail = () => {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-2xl font-bold">Project not found</h1>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-auto rounded-lg mb-8"
            />

            <div className="flex gap-3 mb-6">
              {project.techs.map((tech) => (
                <span
                  key={tech}
                  className="text-xs px-3 py-1 bg-secondary text-secondary-foreground rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>

            <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
            <p className="text-lg text-muted-foreground mb-8">
              {project.description}
            </p>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
              <p className="text-muted-foreground mb-4">
                This is a placeholder text for the project overview. In a real case study, you would describe the project goals, challenges, and context in detail here. This section would typically include information about the client, the problem they were facing, and the high-level objectives of the project.
              </p>
              <p className="text-muted-foreground mb-4">
                The case study content would be loaded from an MDX file in a real implementation, allowing for rich formatting and embedded components.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">My Role & Responsibilities</h2>
              <ul className="list-disc ml-6 space-y-2 text-muted-foreground">
                <li>Led the frontend development using {project.techs.join(", ")}</li>
                <li>Designed the user interface and experience</li>
                <li>Implemented responsive design and cross-browser compatibility</li>
                <li>Collaborated with backend developers for API integration</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">Process & Challenges</h2>
              <p className="text-muted-foreground mb-4">
                This section would detail the development process, including research, design iterations, and implementation challenges. It would also describe how these challenges were overcome and what was learned in the process.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">Outcome & Results</h2>
              <p className="text-muted-foreground mb-4">
                Here you would describe the final results of the project, including any metrics or feedback that demonstrates its success. This might include user engagement statistics, client testimonials, or performance improvements.
              </p>
            </section>

            <div className="border-t border-border pt-8 flex justify-between">
              <a href="#" className="btn-outline">
                Previous Project
              </a>
              <a href="#" className="btn-primary">
                Next Project
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};

export default ProjectDetail;
