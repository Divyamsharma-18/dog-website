import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Instagram, Facebook, Twitter } from "lucide-react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you! We'll get back to you soon.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-2xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-[#1c2840]">Contact Us</h1>
          <p className="text-[#1c2840] mt-3">We'd love to hear from you and your furry friend!</p>
        </motion.div>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mb-12">
          {[
            { icon: Instagram, label: "Instagram", href: "#" },
            { icon: Facebook, label: "Facebook", href: "#" },
            { icon: Twitter, label: "Twitter", href: "#" },
          ].map((social) => (
            <a
              key={social.label}
              href={social.href}
              className="w-12 h-12 rounded-full bg-muted flex items-center justify-center text-[#1c2840] hover:bg-primary hover:text-primary-foreground transition-colors"
              aria-label={social.label}
            >
              <social.icon className="w-5 h-5" />
            </a>
          ))}
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-4 bg-card border border-border rounded-xl p-8">
          <div>
            <label className="text-sm font-medium text-[#1c2840] mb-1 block">Name</label>
            <Input
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-[#1c2840] mb-1 block">Email</label>
            <Input
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
              placeholder="your@email.com"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-[#1c2840] mb-1 block">Message</label>
            <Textarea
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              required
              placeholder="Tell us what's on your mind..."
              rows={5}
            />
          </div>
          <div>
            <label className="text-sm font-medium text-[#1c2840] mb-1 block">Upload Image (optional)</label>
            <Input type="file" accept="image/*" />
          </div>
          <Button type="submit" className="w-full bg-primary text-[#1c2840] hover:bg-primary/90">
            Send Message
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
