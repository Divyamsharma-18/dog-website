import { Link } from "react-router-dom";
import logoPaw from "@/assets/logo-paw.png";

const Footer = () => {
  const handlePolicyNavClick = (to: string) => {
    fetch('http://127.0.0.1:7414/ingest/5e461ad2-faa9-4f88-9c19-69b462b84355',{method:'POST',headers:{'Content-Type':'application/json','X-Debug-Session-Id':'d15f27'},body:JSON.stringify({sessionId:'d15f27',runId:'pre-fix',hypothesisId:'H1',location:'src/components/Footer.tsx:7',message:'Footer policy link clicked',data:{to,scrollY:typeof window!=='undefined'?window.scrollY:null},timestamp:Date.now()})}).catch(()=>{});
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }

    fetch('http://127.0.0.1:7414/ingest/5e461ad2-faa9-4f88-9c19-69b462b84355',{method:'POST',headers:{'Content-Type':'application/json','X-Debug-Session-Id':'d15f27'},body:JSON.stringify({sessionId:'d15f27',runId:'pre-fix',hypothesisId:'H1',location:'src/components/Footer.tsx:15',message:'Footer policy scrollTo invoked',data:{to,scrollY:typeof window!=='undefined'?window.scrollY:null},timestamp:Date.now()})}).catch(()=>{});
  };

  return (
    <footer className="relative z-20 bg-white text-foreground border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src={logoPaw} alt="Dog Mom’s Kitchen" className="hidden sm:block w-8 h-8" />
              <span className="font-display text-xl font-bold">Dog Mom’s Kitchen</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Premium nutrition crafted with love for your furry family members.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <Link to="/" className="hover:opacity-100 transition-opacity">Home</Link>
              <Link to="/shop" className="hover:opacity-100 transition-opacity">Shop</Link>
              <Link to="/about" className="hover:opacity-100 transition-opacity">About Us</Link>
              <Link to="/faq" className="hover:opacity-100 transition-opacity">FAQ</Link>
              <Link to="/contact" className="hover:opacity-100 transition-opacity">Contact</Link>
            </div>
          </div>

          {/* Policies */}
          <div>
            <h4 className="font-display font-semibold mb-4">Policies</h4>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <Link to="/refund-policy" onClick={() => handlePolicyNavClick("/refund-policy")} className="hover:opacity-100 transition-opacity">Refund Policy</Link>
              <Link to="/terms" onClick={() => handlePolicyNavClick("/terms")} className="hover:opacity-100 transition-opacity">Terms & Conditions</Link>
              <Link to="/shipping-policy" onClick={() => handlePolicyNavClick("/shipping-policy")} className="hover:opacity-100 transition-opacity">Shipping Policy</Link>
              <Link to="/privacy-policy" onClick={() => handlePolicyNavClick("/privacy-policy")} className="hover:opacity-100 transition-opacity">Privacy Policy</Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold mb-4">Contact Us</h4>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <p>hello@example.com</p>
              <p>+1 (555) 123-4567</p>
              <p>123 Pet Avenue, Dogtown, CA 90210</p>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Dog Mom’s Kitchen. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
