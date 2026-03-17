import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, User } from "lucide-react";

const BLOG_POSTS = [
  {
    id: 1,
    title: "Understanding Your Dog's Nutritional Needs",
    excerpt: "A comprehensive guide to understanding what nutrients your dog needs at different stages of their life.",
    date: "Nov 05, 2023",
    author: "Dr. Smith",
    image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80&w=800",
    slug: "understanding-nutritional-needs"
  },
  {
    id: 2,
    title: "The Best Toys for Heavy Chewers",
    excerpt: "Tired of toys getting destroyed in minutes? Here is our curated list of the best durable toys for heavy chewers.",
    date: "Dec 18, 2023",
    author: "Sarah Jones",
    image: "https://images.unsplash.com/photo-1544568100-847a948585b9?auto=format&fit=crop&q=80&w=800",
    slug: "best-toys-for-heavy-chewers"
  }
];

const Blogs = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-primary/5 py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6"
          >
            Dog Mom's Kitchen Blog
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground"
          >
            Tips, recipes, and stories for every devoted dog parent.
          </motion.p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
            {BLOG_POSTS.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group flex flex-col bg-card rounded-2xl overflow-hidden border border-border hover:shadow-xl transition-all duration-300"
              >
                <Link to={`/blogs/${post.slug}`} className="relative h-64 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </Link>
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      {post.author}
                    </span>
                  </div>
                  <Link to={`/blogs/${post.slug}`}>
                    <h2 className="text-2xl font-bold font-display text-foreground mb-3 group-hover:text-primary transition-colors">
                      {post.title}
                    </h2>
                  </Link>
                  <p className="text-muted-foreground mb-6 flex-grow">
                    {post.excerpt}
                  </p>
                  <Link
                    to={`/blogs/${post.slug}`}
                    className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary/80 transition-colors mt-auto"
                  >
                    Read More <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blogs;
