"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight, Download } from "lucide-react";
import { Magnetic } from "@/components/ui/MagneticButton";
import { profileData } from "@/data/profile";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Section intersection detection
      const sections = navItems.map((item) => item.href.substring(1));
      const scrollPosition = window.scrollY + 140;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const top = section.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "glass-nav py-3 shadow-xs"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Monogram Logo with Magnetic Pull */}
            <Magnetic strength={10}>
              <a
                href="#hero"
                className="group flex items-center gap-3 focus:outline-hidden"
                aria-label="Varathanathan Paavalan - Home"
              >
                <div className="relative w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 to-indigo-500 text-white font-bold text-base flex items-center justify-center shadow-md shadow-indigo-500/20 group-hover:scale-105 transition-transform">
                  <span className="tracking-tight">{profileData.initials}</span>
                  <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-500 border-2 border-white ring-1 ring-emerald-500/20" />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-slate-900 group-hover:text-indigo-600 transition-colors tracking-tight">
                    {profileData.shortName}
                  </span>
                  <span className="text-[11px] text-slate-500 font-medium">
                    Software Developer
                  </span>
                </div>
              </a>
            </Magnetic>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 bg-white/75 backdrop-blur-md px-3 py-1.5 rounded-full border border-slate-200/80 shadow-xs">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.substring(1);
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    className={`relative px-3.5 py-1.5 text-xs font-semibold rounded-full transition-all duration-200 ${
                      isActive
                        ? "text-indigo-600"
                        : "text-slate-600 hover:text-slate-900 hover:bg-slate-100/60"
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="activeNavBubble"
                        className="absolute inset-0 bg-indigo-50 border border-indigo-100/80 rounded-full -z-10 shadow-xs"
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}
                    {item.name}
                  </a>
                );
              })}
            </nav>

            {/* Action CTA, Sound Toggle & CV button */}
            <div className="hidden sm:flex items-center gap-2.5">
              <Magnetic strength={10}>
                <a
                  href="/cv/varathanathan-paavalan-cv.pdf"
                  download="varathanathan-paavalan-cv.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-slate-700 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 hover:border-slate-300 transition-all shadow-xs"
                >
                  <Download className="w-3.5 h-3.5 text-slate-500" />
                  <span>Download CV</span>
                </a>
              </Magnetic>

              <Magnetic strength={10}>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1 px-4 py-1.5 text-xs font-semibold text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 active:scale-95 transition-all shadow-sm shadow-indigo-600/25"
                >
                  <span>Let&apos;s Talk</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </Magnetic>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex sm:hidden items-center gap-2">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-slate-700 hover:text-slate-900 rounded-lg hover:bg-slate-100 border border-slate-200/80 cursor-pointer"
                aria-label="Toggle navigation menu"
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[60px] z-30 p-4 lg:hidden"
          >
            <div className="bg-white/95 backdrop-blur-xl rounded-2xl border border-slate-200/90 shadow-xl p-5 space-y-3">
              <div className="grid grid-cols-2 gap-2">
                {navItems.map((item) => {
                  const isActive = activeSection === item.href.substring(1);
                  return (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                        isActive
                          ? "bg-indigo-50 text-indigo-600 font-semibold"
                          : "text-slate-700 hover:bg-slate-50"
                      }`}
                    >
                      {item.name}
                    </a>
                  );
                })}
              </div>

              <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
                <a
                  href="/cv/varathanathan-paavalan-cv.pdf"
                  download="varathanathan-paavalan-cv.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-2.5 text-sm font-semibold text-slate-700 bg-slate-50 border border-slate-200 rounded-xl"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Download className="w-4 h-4 text-slate-500" />
                  Download CV (PDF)
                </a>
                <a
                  href="#contact"
                  className="flex items-center justify-center gap-2 py-2.5 text-sm font-semibold text-white bg-indigo-600 rounded-xl shadow-sm"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span>Contact Me</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
