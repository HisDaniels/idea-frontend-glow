
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ThemeToggle } from "@/components/ThemeToggle";

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <ThemeProvider defaultTheme="light">
      <div className="min-h-screen flex flex-col">
        <header
          className={`sticky top-0 z-50 w-full transition-all duration-300 ${
            scrolled
              ? "bg-background/80 backdrop-blur-md shadow-sm"
              : "bg-transparent"
          }`}
        >
          <div className="container mx-auto px-4 h-16 flex items-center justify-between">
            <Link to="/" className="font-bold text-xl">
              Portfolio
            </Link>

            <nav className="hidden md:flex items-center space-x-8">
              <Link to="/" className="nav-link">
                Home
              </Link>
              <Link to="/about" className="nav-link">
                About
              </Link>
              <Link to="/projects" className="nav-link">
                Projects
              </Link>
              <Link to="/blog" className="nav-link">
                Blog
              </Link>
              <Link to="/contact" className="nav-link">
                Contact
              </Link>
            </nav>

            <div className="flex items-center space-x-2">
              <ThemeToggle />
              <a
                href="#contact"
                className="hidden md:inline-flex btn-primary"
              >
                Contact Me
              </a>
            </div>
          </div>
        </header>

        <main className="flex-grow">{children}</main>

        <footer className="bg-muted py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="md:col-span-2">
                <h3 className="font-bold text-xl mb-4">Portfolio</h3>
                <p className="text-muted-foreground mb-4">
                  Creating frontend experiences that drive business growth.
                </p>
                <div className="flex space-x-4">
                  {/* Social Media Icons */}
                  <a href="#" className="text-muted-foreground hover:text-foreground">
                    Twitter
                  </a>
                  <a href="#" className="text-muted-foreground hover:text-foreground">
                    GitHub
                  </a>
                  <a href="#" className="text-muted-foreground hover:text-foreground">
                    LinkedIn
                  </a>
                </div>
              </div>

              <div>
                <h3 className="font-bold mb-4">Links</h3>
                <ul className="space-y-2">
                  <li>
                    <Link to="/" className="text-muted-foreground hover:text-foreground">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link to="/about" className="text-muted-foreground hover:text-foreground">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link to="/projects" className="text-muted-foreground hover:text-foreground">
                      Projects
                    </Link>
                  </li>
                  <li>
                    <Link to="/blog" className="text-muted-foreground hover:text-foreground">
                      Blog
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold mb-4">Contact</h3>
                <ul className="space-y-2">
                  <li className="text-muted-foreground">
                    hello@example.com
                  </li>
                  <li className="text-muted-foreground">
                    San Francisco, CA
                  </li>
                </ul>
              </div>
            </div>

            <div className="border-t border-border mt-12 pt-8 text-center text-muted-foreground">
              <p>&copy; {new Date().getFullYear()} | All rights reserved</p>
            </div>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  );
}
