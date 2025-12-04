import React from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from "lucide-react";
import { COMPANY_NAME, NAV_LINKS, CONTACT_INFO } from "../data/constants";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-primary text-gray-300">
      <div className="container mx-auto px-4 lg:px-8 py-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 md:gap-12 mb-12 md:mb-16">
          {/* Company Info - Spans more columns */}
          <div className="lg:col-span-5">
            <div className="flex items-center w-32 h-32 md:w-40 md:h-40 mb-6">
              <img
                src="/icon/logo-white-01.svg"
                alt="logo"
                className="w-full h-full object-contain"
              />
            </div>
            <p className="text-gray-400 font-body text-sm leading-relaxed mb-6 md:mb-8 max-w-md">
              Delivering excellence in downstream oil and gas services across
              Nigeria and West Africa with unmatched expertise and commitment.
            </p>

            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 border border-gold/30 flex items-center justify-center hover:bg-gold hover:border-gold transition-all group"
              >
                <Linkedin
                  size={18}
                  className="text-gold group-hover:text-black"
                />
              </a>
              <a
                href="#"
                className="w-10 h-10 border border-gold/30 flex items-center justify-center hover:bg-gold hover:border-gold transition-all group"
              >
                <Twitter
                  size={18}
                  className="text-gold group-hover:text-black"
                />
              </a>
              <a
                href="#"
                className="w-10 h-10 border border-gold/30 flex items-center justify-center hover:bg-gold hover:border-gold transition-all group"
              >
                <Facebook
                  size={18}
                  className="text-gold group-hover:text-black"
                />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h3 className="text-white font-display font-semibold text-lg mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-400 font-body text-sm hover:text-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-2">
            <h3 className="text-white font-display font-semibold text-lg mb-6">
              Services
            </h3>
            <ul className="space-y-3 text-sm text-gray-400 font-body">
              <li>Exploration & Production</li>
              <li>Refining Operations</li>
              <li>Distribution & Logistics</li>
              <li>Petrochemical Solutions</li>
              <li>Engineering Services</li>
              <li>HSE Management</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-3">
            <h3 className="text-white font-display font-semibold text-lg mb-6">
              Get in Touch
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-gold mt-1 flex-shrink-0" />
                <span className="text-gray-400 font-body text-sm">
                  {CONTACT_INFO.address}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-gold flex-shrink-0" />
                <span className="text-gray-400 font-body text-sm">
                  {CONTACT_INFO.phone}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-gold flex-shrink-0" />
                <span className="text-gray-400 font-body text-sm">
                  {CONTACT_INFO.email}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-600 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 font-body text-sm">
              © {new Date().getFullYear()} {COMPANY_NAME}. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm font-body">
              <a
                href="#"
                className="text-gray-500 hover:text-gold transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-gold transition-colors"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Gold accent line at top */}
      <div className="h-1 bg-gradient-to-r from-transparent via-gold to-transparent" />
    </footer>
  );
};

export default Footer;
