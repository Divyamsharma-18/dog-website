import { useParams, Navigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, User } from "lucide-react";
import { BLOG_POSTS } from "@/data/blogs";

const BlogPost = () => {
  const { slug } = useParams();
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    return <Navigate to="/404" replace />;
  }

  return (
    <div className="min-h-screen bg-background pt-24 pb-16">
      <div className="container mx-auto max-w-4xl px-4">
        <Link
          to="/blogs"
          className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Blogs
        </Link>
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-card rounded-3xl overflow-hidden border border-border shadow-sm"
        >
          <div className="aspect-[21/9] w-full overflow-hidden">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-8 md:p-12">
            <div className="flex items-center gap-6 text-sm text-[#8b8c8d] mb-6">
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {post.date}
              </span>
              <span className="flex items-center gap-2">
                <User className="w-4 h-4" />
                {post.author}
              </span>
            </div>
            <h1 className="text-3xl md:text-5xl font-display font-bold text-[#1c2840] mb-8 leading-tight">
              {post.title}
            </h1>
            <div className="prose prose-lg max-w-none text-[#5c5d5e] prose-headings:font-display prose-headings:text-[#1c2840] prose-a:text-primary">
              <p className="text-xl mb-8 font-medium text-[#1c2840] leading-relaxed bg-primary/5 p-6 rounded-2xl border border-primary/10">
                {post.excerpt}
              </p>
              <div 
                className="leading-relaxed"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </div>
          </div>
        </motion.article>
      </div>
    </div>
  );
};

export default BlogPost;
