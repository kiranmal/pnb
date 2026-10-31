import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, Mail, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Clinic Info */}
          <div className="space-y-4">
            <img src="/logo.jpg" alt="Prana Brain and Nerve Health" className="h-16 w-auto " />
            {/* <h3 className="text-xl font-bold">Prana Brain & Nerve Health</h3> */}
            <p className="text-primary-foreground/80">
              Dedicated to providing world-class neurological care with compassion and innovation.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-primary-light transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-primary-light transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-primary-light transition-colors">Our Services</Link></li>
              <li><Link to="/contact" className="hover:text-primary-light transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5" />
                <span>Phone: (470) 665-6050</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5" />
                <span>Fax: (678) 806-5044</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5" />
                <span>info@pbnhealth.com</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-1" />
                <span>3641 HIGHWAY 20 SE STE B,<br />Conyers, GA, 30013</span>
              </div>
            </div>
          </div>

          {/* Office Hours */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Office Hours</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span className="text-sm">Monday - Friday</span>
              </div>
              <div className="text-sm text-primary-foreground/80 ml-6">
                8:00 AM - 4:30 PM
              </div>
              {/* <div className="flex items-center gap-2 mt-3">
                <Clock className="h-4 w-4" />
                <span className="text-sm">Saturday</span>
              </div>
              <div className="text-sm text-primary-foreground/80 ml-6">
                8:00 AM - 4:30 PM
              </div> */}
              {/* <div className="text-sm text-primary-foreground/80 mt-3">
                Emergency consultations available 24/7
              </div> */}
            </div>
          </div>
        </div>

        <div className="border-t border-primary-light/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/80">
            © 2025 Prana Brain and Nerve Health. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;