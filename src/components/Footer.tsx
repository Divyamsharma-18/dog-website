import { Link } from "react-router-dom";
import logoPaw from "@/assets/logo-paw.png";

const Footer = () => {
  return (
    <footer className="bg-brand-brown text-brand-warm">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src={logoPaw} alt="PawFresh" className="w-8 h-8" />
              <span className="font-display text-xl font-bold">PawFresh</span>
            </div>
            <p className="text-sm opacity-80">
              Premium nutrition crafted with love for your furry family members.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2 text-sm opacity-80">
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
            <div className="flex flex-col gap-2 text-sm opacity-80">
              <Link to="/refund-policy" className="hover:opacity-100 transition-opacity">Refund Policy</Link>
              <Link to="/terms" className="hover:opacity-100 transition-opacity">Terms & Conditions</Link>
              <Link to="/shipping-policy" className="hover:opacity-100 transition-opacity">Shipping Policy</Link>
              <Link to="/privacy-policy" className="hover:opacity-100 transition-opacity">Privacy Policy</Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold mb-4">Contact Us</h4>
            <div className="flex flex-col gap-2 text-sm opacity-80">
              <p>hello@pawfresh.com</p>
              <p>+1 (555) 123-4567</p>
              <p>123 Pet Avenue, Dogtown, CA 90210</p>
            </div>
          </div>
        </div>

        <div className="border-t border-brand-warm/20 mt-8 pt-8 text-center text-sm opacity-60">
          © {new Date().getFullYear()} PawFresh. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
