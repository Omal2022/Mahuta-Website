import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { NAV_LINKS, COMPANY_NAME } from "../data/constants";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 bg-white/95 backdrop-blur-lg shadow-lg`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            {/* Mobile Logo - logo-01.svg */}
            <div className="md:hidden relative w-12 h-12 flex items-center justify-center">
              <img src="/icon/logo-01.svg" alt="logo" />
            </div>

            {/* Desktop Logo - logo-02-01.svg */}
            <div className="hidden md:block relative lg:flex w-40 h-40 items-center justify-center">
              <img src="/icon/logo-02-01.svg" alt="logo" />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative font-body text-sm tracking-wide transition-colors group ${
                  location.pathname === link.path
                    ? "text-gold"
                    : "text-gray-primary hover:text-gold"
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all duration-300 ${
                    location.pathname === link.path
                      ? "w-full"
                      : "group-hover:w-full"
                  }`}
                />
              </Link>
            ))}
            <Link to="/contact">
              <button
                className="px-6 py-2.5 font-body font-semibold transition-all bg-gold text-black hover:bg-gold/90"
              >
                Contact Us
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <img src="/icon/close.svg" alt="close menu" className="w-7 h-7" />
            ) : (
              <img src="/icon/menu.svg" alt="open menu" className="w-7 h-7" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-2xl py-6">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block py-3 px-4 font-body ${
                  location.pathname === link.path
                    ? "text-gold bg-gold/10"
                    : "text-gray-primary hover:text-gold hover:bg-gold/5"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="block mx-4 mt-4"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <button className="w-full bg-gold text-black px-6 py-3 font-body font-semibold">
                Contact Us
              </button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;