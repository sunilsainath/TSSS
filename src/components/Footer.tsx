import { Heart, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Trust Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <span className="font-bold text-xl">Srinivasula Seva Samstha</span>
            </div>
            <p className="text-sm text-primary-foreground/80">
              Dedicated to serving humanity through blood donations, education support, and spiritual guidance.
            </p>
            <div className="space-y-2 text-sm">
              <p><strong>Registration Number:</strong> Regd. No. 192/2024</p>
              <p><strong>PAN:</strong> AAFTT0654G</p>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Contact Information</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-trust-orange" />
                <span>10-3-288/4/5/A/1, Sri Ram nagar RoadNO-7, Karimnagar</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-trust-orange" />
                <span>info@srinivasulasevasamstha.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-trust-orange" />
                <span>+91 8143538604</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Quick Links</h3>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <Link to="/" className="hover:text-trust-orange transition-colors">Home</Link>
              <Link to="/about" className="hover:text-trust-orange transition-colors">About Us</Link>
              <Link to="/contact" className="hover:text-trust-orange transition-colors">Contact</Link>
              <Link to="/donate" className="hover:text-trust-orange transition-colors">Donate</Link>
            </div>
            <div className="pt-4">
              <p className="text-xs text-primary-foreground/60">
                © 2024 Srinivasula Seva Samstha. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;