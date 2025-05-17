
import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";

type BlogPost = {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  tags: string[];
  slug: string;
  imageUrl: string;
};

const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "How to Build a Great Portfolio as a Frontend Developer",
    excerpt: "Creating a portfolio that stands out is essential for any frontend developer. Here's my approach to making an impact.",
    date: "May 15, 2023",
    tags: ["Portfolio", "Career", "Frontend"],
    slug: "build-great-portfolio",
    imageUrl: "https://placehold.co/600x400/e2e8f0/1e293b?text=Portfolio"
  },
  {
    id: "2",
    title: "The Power of React Hooks: Beyond the Basics",
    excerpt: "Dive deeper into React Hooks with advanced patterns and custom hook implementations that will level up your React applications.",
    date: "April 22, 2023",
    tags: ["React", "Hooks", "JavaScript"],
    slug: "react-hooks-beyond-basics",
    imageUrl: "https://placehold.co/600x400/e2e8f0/1e293b?text=React+Hooks"
  },
  {
    id: "3",
    title: "Optimizing Performance in Next.js Applications",
    excerpt: "Performance is key to user experience. Learn techniques to optimize your Next.js applications for speed and efficiency.",
    date: "March 10, 2023",
    tags: ["Next.js", "Performance", "Optimization"],
    slug: "optimizing-nextjs-performance",
    imageUrl: "https://placehold.co/600x400/e2e8f0/1e293b?text=NextJS+Performance"
  },
  {
    id: "4",
    title: "Creating Engaging UI Animations with Framer Motion",
    excerpt: "Learn how to create smooth, engaging UI animations that enhance user experience using Framer Motion in React applications.",
    date: "February 5, 2023",
    tags: ["Animation", "Framer Motion", "UI/UX"],
    slug: "ui-animations-framer-motion",
    imageUrl: "https://placehold.co/600x400/e2e8f0/1e293b?text=Framer+Motion"
  },
];

const Blog = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto mb-12">
          <h1 className="text-4xl font-bold mb-4">Blog</h1>
          <p className="text-lg text-muted-foreground">
            Thoughts, insights, and guides on frontend development, design, and more.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card shadow-sm rounded-lg overflow-hidden hover:shadow-md transition-shadow"
            >
              <Link to={`/blog/${post.slug}`} className="block">
                <img 
                  src={post.imageUrl} 
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex gap-2 mb-3">
                    {post.tags.map((tag) => (
                      <span key={tag} className="text-xs px-2 py-1 bg-secondary text-secondary-foreground rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <time className="text-sm text-muted-foreground block mb-2">{post.date}</time>
                  <h2 className="text-xl font-bold mb-2">{post.title}</h2>
                  <p className="text-muted-foreground">{post.excerpt}</p>
                  <div className="mt-4 text-primary font-medium inline-flex items-center">
                    Read article
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Blog;
