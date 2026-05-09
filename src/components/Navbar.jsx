"use client";

import { useState, useEffect } from "react";
import { Map, Phone, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ["hero", "about", "advantages", "services", "outputs", "portfolio", "contact"];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  const navItems = [
    { id: "about", label: "Tentang Kami" },
    { id: "services", label: "Layanan" },
    { id: "outputs", label: "Output" },
    { id: "portfolio", label: "Portfolio" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
          ? "bg-slate-900/95 backdrop-blur-md shadow-lg border-b border-slate-800"
          : "bg-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div
            className="flex items-center space-x-3 cursor-pointer group"
            onClick={() => scrollToSection("hero")}
          >
            <div className="relative bg-emerald-600 p-2 rounded-lg">
              <Map className="h-6 w-6 text-white" />
            </div>
            <div>
              <span className={`font-bold text-lg block transition-colors ${scrolled ? 'text-white' : 'text-slate-900 drop-shadow-md lg:text-white'}`}>
                PT JENTAYU
              </span>
              <span className={`text-xs tracking-widest block transition-colors ${scrolled ? 'text-emerald-400' : 'text-emerald-600 drop-shadow-md lg:text-emerald-400'}`}>
                GEOSURVEY
              </span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-1 items-center">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${activeSection === item.id
                    ? "text-emerald-400 bg-slate-800/50"
                    : scrolled ? "text-slate-300 hover:text-white hover:bg-slate-800/50" : "text-white/90 hover:text-white hover:bg-white/10"
                  }`}
              >
                {item.label}
              </button>
            ))}

            <div className="ml-4 pl-4 border-l border-slate-700">
              <button
                onClick={() => scrollToSection("contact")}
                className="bg-emerald-600 hover:bg-emerald-500 text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors flex items-center gap-2"
              >
                <Phone className="w-4 h-4" />
                Hubungi Kami
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${scrolled ? 'text-white hover:bg-slate-800' : 'text-slate-900 hover:bg-white/20'}`}
          >
            <div className="relative w-6 h-6">
              <span
                className={`absolute w-6 h-0.5 transition-all ${scrolled || mobileMenuOpen ? 'bg-white' : 'bg-slate-900'} ${mobileMenuOpen ? "top-3 rotate-45" : "top-1"
                  }`}
              />
              <span
                className={`absolute w-6 h-0.5 transition-all ${scrolled || mobileMenuOpen ? 'bg-white' : 'bg-slate-900'} ${mobileMenuOpen ? "opacity-0" : "top-3"
                  }`}
              />
              <span
                className={`absolute w-6 h-0.5 transition-all ${scrolled || mobileMenuOpen ? 'bg-white' : 'bg-slate-900'} ${mobileMenuOpen ? "top-3 -rotate-45" : "top-5"
                  }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-900 border-t border-slate-800">
          <div className="px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`block w-full text-left px-4 py-3 rounded-lg font-medium transition-all ${activeSection === item.id
                    ? "bg-slate-800 text-emerald-400"
                    : "text-slate-300 hover:bg-slate-800 hover:text-white"
                  }`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => scrollToSection("contact")}
              className="mt-4 block w-full text-center bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-3 rounded-lg font-medium transition-colors"
            >
              Hubungi Kami
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
