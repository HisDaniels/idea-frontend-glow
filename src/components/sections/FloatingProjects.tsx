
import { motion } from "framer-motion";

type ProjectCardProps = {
  title: string;
  imageUrl: string;
};

const projectCards: ProjectCardProps[] = [
  {
    title: "EnvAlab Dashboard",
    imageUrl: "https://placehold.co/480x300/e2e8f0/1e293b?text=EnvAlab+Dashboard"
  },
  {
    title: "Fontier Homepage",
    imageUrl: "https://placehold.co/480x300/e2e8f0/1e293b?text=Fontier+Homepage"
  },
  {
    title: "LendSQR Dashboard",
    imageUrl: "https://placehold.co/480x300/e2e8f0/1e293b?text=LendSQR+Dashboard"
  },
  {
    title: "EnvAlab 2.0",
    imageUrl: "https://placehold.co/480x300/e2e8f0/1e293b?text=EnvAlab+2.0"
  },
  {
    title: "Portfolio Design",
    imageUrl: "https://placehold.co/480x300/e2e8f0/1e293b?text=Portfolio"
  },
  {
    title: "E-commerce UI",
    imageUrl: "https://placehold.co/480x300/e2e8f0/1e293b?text=E-commerce"
  },
];

export default function FloatingProjects() {
  return (
    <section className="py-16 overflow-hidden">
      <div className="floating-projects">
        <div className="content">
          {projectCards.map((card, index) => (
            <ProjectCard key={index} {...card} />
          ))}
          {/* Duplicate to create seamless loop */}
          {projectCards.map((card, index) => (
            <ProjectCard key={`dup-${index}`} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ title, imageUrl }: ProjectCardProps) {
  return (
    <div className="min-w-[300px] md:min-w-[400px] p-4">
      <motion.div 
        className="rounded-xl overflow-hidden bg-card shadow-project hover:shadow-lg transition-all"
        whileHover={{ y: -8, scale: 1.02 }}
      >
        <img src={imageUrl} alt={title} className="aspect-[4/3] object-cover w-full" />
        <div className="p-4">
          <h3 className="font-medium">{title}</h3>
        </div>
      </motion.div>
    </div>
  );
}
