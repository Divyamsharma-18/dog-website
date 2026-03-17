import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect } from "react";

const policies: Record<string, { title: string; content: string[] }> = {
  "refund-policy": {
    title: "Refund Policy",
    content: [
      "At Dog Mom’s Kitchen, we stand behind the quality of our products. If you're not completely satisfied, we're here to help.",
      "Returns: You may return unopened products within 30 days of purchase for a full refund. Products must be in their original packaging.",
      "Damaged Products: If your order arrives damaged, please contact us within 48 hours with photos. We'll send a replacement at no cost.",
      "Satisfaction Guarantee: If your dog doesn't love our food, contact us within 30 days for a full refund, no questions asked.",
      "Refund Processing: Refunds are processed within 5-7 business days after we receive the returned item or approve a satisfaction guarantee claim.",
    ],
  },
  terms: {
    title: "Terms & Conditions",
    content: [
      "By using the Dog Mom’s Kitchen website and purchasing our products, you agree to these terms and conditions.",
      "Products: All products are intended for dog consumption only. Follow feeding guidelines on packaging. Dog Mom’s Kitchen is not responsible for misuse of products.",
      "Pricing: Prices are in USD and may change without notice. We strive for accuracy but reserve the right to correct pricing errors.",
      "Orders: We reserve the right to refuse or cancel any order. If your order is cancelled, you will receive a full refund.",
      "Intellectual Property: All content on this site including text, images, and logos is the property of Dog Mom’s Kitchen and may not be used without permission.",
    ],
  },
  "shipping-policy": {
    title: "Shipping Policy",
    content: [
      "Dog Mom’s Kitchen ships to Delhi and nearby cities.",
      "Standard Shipping: 3-5 business days. Free on orders over $50.",
      "Express Shipping: 1-2 business days. Available at checkout for $9.99.",
      "Order Processing: Orders placed before 2 PM EST on business days are shipped the same day.",
      "Tracking: You'll receive a tracking number via email once your order ships.",
      "International: We currently don't ship outside India. We're working on expanding, stay tuned!",
    ],
  },
  "privacy-policy": {
    title: "Privacy Policy",
    content: [
      "Dog Mom’s Kitchen respects your privacy and is committed to protecting your personal information.",
      "Information We Collect: We collect your name, email, shipping address, and payment information when you place an order.",
      "How We Use It: Your information is used solely for order processing, shipping, and customer communication. We never sell your data to third parties.",
      "Cookies: We use cookies to improve your browsing experience and analyze site traffic.",
      "Security: We use industry-standard encryption to protect your personal and payment information.",
      "Contact: For privacy-related questions, email us at privacy@example.com.",
    ],
  },
};

const PolicyPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const policy = policies[slug || ""];

  useEffect(() => {
    fetch('http://127.0.0.1:7414/ingest/5e461ad2-faa9-4f88-9c19-69b462b84355',{method:'POST',headers:{'Content-Type':'application/json','X-Debug-Session-Id':'d15f27'},body:JSON.stringify({sessionId:'d15f27',runId:'pre-fix',hypothesisId:'H2',location:'src/pages/PolicyPage.tsx:55',message:'PolicyPage mounted/slug changed',data:{slug,scrollY:typeof window!=='undefined'?window.scrollY:null},timestamp:Date.now()})}).catch(()=>{});
  }, [slug]);

  if (!policy) {
    return (
      <div className="py-20 text-center">
        <h1 className="font-display text-3xl font-bold text-foreground">Policy Not Found</h1>
      </div>
    );
  }

  return (
    <div className="mt-20 bg-background">
      <div className="container mx-auto px-4 max-w-3xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="font-display text-4xl font-bold text-foreground mb-8">{policy.title}</h1>
          <div className="space-y-4">
            {policy.content.map((paragraph, i) => (
              <p key={i} className="text-muted-foreground leading-relaxed">{paragraph}</p>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PolicyPage;
