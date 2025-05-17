
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="container-section relative">
      <motion.div
        className="max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <span className="text-sm uppercase tracking-wider text-muted-foreground">About me</span>
        <h2 className="section-title">Hello, I'm Kehinde Daniels</h2>
        
        <div className="prose prose-lg dark:prose-invert">
          <p className="text-lg mb-6">
            If there's a problem, there's an idea. If there's no problem, there's always room for improvement.
          </p>
          
          <p className="mb-6">
            As a frontend developer, optimization has been my fuels for innovation and creativity. 
            During my 1-year service in Nigeria (NYSC) as an entrepreneur, I created several 
            person-based products. As someone who dislikes supervision, I found this overwhelming. 
            That's when I came up with the idea for EvoikaiML, a Laboratory Management 
            System designed to automate & streamline value processes.
          </p>
          
          <div className="mt-8">
            <a href="#" className="btn-primary mr-4">
              Tools available
            </a>
            
            <a href="#" className="btn-outline">
              View more of my work
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
