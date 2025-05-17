
import Layout from "@/components/layout/Layout";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import TechStack from "@/components/sections/TechStack";
import FloatingProjects from "@/components/sections/FloatingProjects";
import Projects from "@/components/sections/Projects";
import { motion } from "framer-motion";

const Index = () => {
  return (
    <Layout>
      <Hero />
      
      <FloatingProjects />
      
      <About />
      
      <TechStack />
      
      <Projects />
      
      <section id="contact" className="container-section bg-muted/50">
        <motion.div 
          className="max-w-2xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <span className="text-sm uppercase tracking-wider text-muted-foreground">Get in Touch</span>
          <h2 className="section-title">Ready to start your next project?</h2>
          <p className="text-lg mb-8 text-muted-foreground">
            If you're looking for a frontend developer who can bring your vision to life, I'd love to hear from you.
          </p>
          <a href="mailto:hello@example.com" className="btn-primary">
            Let's Talk
          </a>
        </motion.div>
      </section>
    </Layout>
  );
};

export default Index;
