
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Hero() {
  const [hoveredButton, setHoveredButton] = useState<string | null>(null);

  return (
    <section className="container-section relative overflow-hidden">
      {/* Animated background blobs */}
      <div className="colored-blob bg-yellow-300 w-64 h-64 top-1/3 right-1/4" />
      <div className="colored-blob bg-blue-300 w-48 h-48 bottom-1/4 left-1/4" />
      <div className="colored-blob bg-orange-300 w-32 h-32 top-1/2 right-1/3" />
      
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
        <motion.div 
          className="lg:w-3/5"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Your next big idea deserves a frontend that delivers results.
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl">
            I can help you create front-end experiences that drive your business growth. Something that works for you and your customers.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <motion.button
              className={`activity-button ${
                hoveredButton === "code" 
                  ? "bg-primary text-primary-foreground" 
                  : "bg-background border-border"
              }`}
              onMouseEnter={() => setHoveredButton("code")}
              onMouseLeave={() => setHoveredButton(null)}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              I Code
            </motion.button>
            
            <motion.button
              className={`activity-button ${
                hoveredButton === "design" 
                  ? "bg-primary text-primary-foreground" 
                  : "bg-background border-border"
              }`}
              onMouseEnter={() => setHoveredButton("design")}
              onMouseLeave={() => setHoveredButton(null)}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              I Design
            </motion.button>
            
            <motion.button
              className={`activity-button ${
                hoveredButton === "write" 
                  ? "bg-primary text-primary-foreground" 
                  : "bg-background border-border"
              }`}
              onMouseEnter={() => setHoveredButton("write")}
              onMouseLeave={() => setHoveredButton(null)}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              I Write
            </motion.button>
          </div>
        </motion.div>
        
        <motion.div 
          className="relative"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/10">
            <img 
              src="/lovable-uploads/136917bb-7114-4cd5-8029-749ae37eab00.png" 
              alt="Profile" 
              className="w-full h-full object-cover"
            />
          </div>
          <a href="#about" className="absolute bottom-0 right-0 bg-background shadow-lg p-4 rounded-full btn-primary">
            About Me
          </a>
        </motion.div>
      </div>
    </section>
  );
}
