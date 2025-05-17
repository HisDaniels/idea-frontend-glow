
import { motion } from "framer-motion";

type TechItem = {
  name: string;
  icon: string; // URL or component name
};

const techStack: TechItem[] = [
  { name: "Next.js", icon: "nextjs" },
  { name: "React", icon: "react" },
  { name: "TypeScript", icon: "typescript" },
  { name: "Tailwind CSS", icon: "tailwind" },
  { name: "Node.js", icon: "nodejs" },
  { name: "Framer Motion", icon: "framer" },
  { name: "Figma", icon: "figma" },
];

export default function TechStack() {
  return (
    <section className="container-section bg-muted/50">
      <div className="text-center mb-12">
        <span className="text-sm uppercase tracking-wider text-muted-foreground">Experience with</span>
        <h2 className="section-title">Tech Stack</h2>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8">
        {techStack.map((tech, index) => (
          <motion.div
            key={tech.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col items-center justify-center p-4"
          >
            <div className="w-16 h-16 mb-4 flex items-center justify-center">
              <TechIcon name={tech.icon} />
            </div>
            <span className="font-medium">{tech.name}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

// This component will render the appropriate icon based on the name
function TechIcon({ name }: { name: string }) {
  switch (name) {
    case "nextjs":
      return (
        <svg viewBox="0 0 180 180" fill="none" className="w-14 h-14">
          <mask height="180" id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" width="180" x="0" y="0">
            <circle cx="90" cy="90" fill="black" r="90"></circle>
          </mask>
          <g mask="url(#mask0)">
            <circle cx="90" cy="90" fill="currentColor" r="90"></circle>
            <path d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z" fill="url(#paint0_linear)"></path>
            <rect fill="url(#paint1_linear)" height="72" width="12" x="115" y="54"></rect>
          </g>
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear" x1="109" x2="144.5" y1="116.5" y2="160.5">
              <stop stopColor="white"></stop>
              <stop offset="1" stopColor="white" stopOpacity="0"></stop>
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear" x1="121" x2="120.799" y1="54" y2="106.875">
              <stop stopColor="white"></stop>
              <stop offset="1" stopColor="white" stopOpacity="0"></stop>
            </linearGradient>
          </defs>
        </svg>
      );
    case "react":
      return (
        <svg viewBox="0 0 24 24" fill="none" className="w-14 h-14">
          <path d="M12 13.5C12.8284 13.5 13.5 12.8284 13.5 12C13.5 11.1716 12.8284 10.5 12 10.5C11.1716 10.5 10.5 11.1716 10.5 12C10.5 12.8284 11.1716 13.5 12 13.5Z" fill="currentColor" />
          <path fillRule="evenodd" clipRule="evenodd" d="M12 2C7.58172 2 4 5.58172 4 10C4 14.4183 7.58172 18 12 18C16.4183 18 20 14.4183 20 10C20 5.58172 16.4183 2 12 2ZM6 10C6 6.68629 8.68629 4 12 4C15.3137 4 18 6.68629 18 10C18 13.3137 15.3137 16 12 16C8.68629 16 6 13.3137 6 10Z" fill="currentColor" />
          <path d="M7 22H17V20H7V22Z" fill="currentColor" />
        </svg>
      );
    case "typescript":
      return (
        <svg viewBox="0 0 24 24" fill="none" className="w-14 h-14">
          <path d="M3 3H21V21H3V3Z" fill="#3178C6" />
          <path fillRule="evenodd" clipRule="evenodd" d="M13.8047 11.2268V12.8527H10.6072V21.0001H8.39648V12.8527H5.19897V11.2268H13.8047Z" fill="white" />
          <path d="M14.7559 12.8527V11.2268H22.5419V12.8527H19.7834V21.0001H17.5585V12.8527H14.7559Z" fill="white" />
        </svg>
      );
    case "tailwind":
      return (
        <svg viewBox="0 0 24 24" fill="none" className="w-14 h-14">
          <path d="M12.0009 6.53125C9.56829 6.53125 8.07089 7.8125 7.50089 10.375C8.35089 9.03125 9.35579 8.53125 10.5133 8.875C11.1633 9.0625 11.6383 9.53125 12.1633 10.0625C13.0759 10.9687 14.1258 12 16.5008 12C18.9383 12 20.4333 10.7187 21.0008 8.15625C20.1508 9.5 19.1458 10 17.9883 9.65625C17.3383 9.46875 16.8633 9 16.3383 8.46875C15.4258 7.5625 14.3758 6.53125 12.0009 6.53125ZM7.50089 12C5.06579 12 3.56829 13.2812 3.00089 15.8437C3.85089 14.5 4.85579 14 6.01329 14.3437C6.66329 14.5312 7.13829 15 7.66329 15.5312C8.57589 16.4375 9.62579 17.4687 12.0008 17.4687C14.4333 17.4687 15.9308 16.1875 16.5008 13.625C15.6508 14.9687 14.6458 15.4687 13.4883 15.125C12.8383 14.9375 12.3633 14.4687 11.8383 13.9375C10.9258 13.0312 9.87579 12 7.50089 12Z" fill="#38BDF8" />
        </svg>
      );
    case "nodejs":
      return (
        <svg viewBox="0 0 24 24" fill="none" className="w-14 h-14">
          <path d="M12 1.999C11.671 1.999 11.341 2.073 11.05 2.223L3.51001 6.382C2.92001 6.697 2.55701 7.321 2.55701 8.001V15.998C2.55701 16.678 2.92001 17.302 3.51001 17.617L5.464 18.74C6.728 19.358 7.32001 19.387 7.968 19.387C9.65601 19.387 10.64 18.442 10.64 16.707V8.838C10.64 8.654 10.55 8.55 10.36 8.55H9.345C9.155 8.55 9.065 8.654 9.065 8.838V16.707C9.065 17.512 8.35 18.023 7.168 17.565L5.054 16.374C4.954 16.318 4.883 16.214 4.883 16.097V7.902C4.883 7.785 4.954 7.681 5.054 7.625L12.594 3.466C12.693 3.412 12.825 3.412 12.922 3.466L20.461 7.625C20.561 7.681 20.633 7.785 20.633 7.902V16.097C20.633 16.214 20.561 16.318 20.461 16.374L12.922 20.532C12.825 20.588 12.693 20.588 12.594 20.532L10.64 19.387C10.55 19.342 10.434 19.331 10.36 19.387C9.921 19.668 9.853 19.702 9.302 19.894C9.155 19.95 8.935 20.049 9.28401 20.239L11.05 21.252C11.341 21.402 11.671 21.476 12 21.476C12.329 21.476 12.659 21.402 12.95 21.252L20.49 17.093C21.08 16.778 21.443 16.154 21.443 15.474V7.477C21.443 6.797 21.08 6.173 20.49 5.858L12.95 1.699C12.659 1.549 12.329 1.475 12 1.475V1.999Z" fill="#66CC33" />
          <path d="M14.22 15.743C11.628 15.743 11.053 14.723 11.053 13.972C11.053 13.788 11.143 13.684 11.333 13.684H12.37C12.559 13.684 12.649 13.776 12.649 13.949C12.762 14.61 13.082 14.927 14.22 14.927C15.109 14.927 15.5 14.667 15.5 14.052C15.5 13.684 15.337 13.413 13.889 13.255C12.683 13.119 11.946 12.825 11.946 11.714C11.946 10.684 12.802 10.069 14.017 10.069C15.37 10.069 16.158 10.638 16.283 11.827C16.294 11.92 16.261 12.002 16.215 12.061C16.17 12.117 16.101 12.15 16.022 12.15H14.985C14.81 12.15 14.707 12.061 14.674 11.897C14.518 11.294 14.175 10.886 14.005 10.886C13.264 10.886 13.082 11.226 13.082 11.635C13.082 12.128 13.287 12.218 14.674 12.432C16.049 12.645 16.636 12.923 16.636 14.02C16.625 15.163 15.714 15.743 14.22 15.743Z" fill="#66CC33" />
        </svg>
      );
    case "framer":
      return (
        <svg viewBox="0 0 24 24" fill="none" className="w-14 h-14">
          <path d="M12 21V12H3V16.5C3 18.9853 4.98522 21 7.5 21H12Z" fill="currentColor" />
          <path d="M3 12V7.5C3 5.01472 4.98522 3 7.5 3H21V12H3Z" fill="currentColor" />
        </svg>
      );
    case "figma":
      return (
        <svg viewBox="0 0 38 57" className="w-14 h-14">
          <path fill="#1abcfe" d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z"/>
          <path fill="#0acf83" d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 1 1-19 0z"/>
          <path fill="#ff7262" d="M19 0v19h9.5a9.5 9.5 0 1 0 0-19H19z"/>
          <path fill="#f24e1e" d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5z"/>
          <path fill="#a259ff" d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5z"/>
        </svg>
      );
    default:
      return <div className="w-14 h-14 bg-muted rounded-full"></div>;
  }
}
