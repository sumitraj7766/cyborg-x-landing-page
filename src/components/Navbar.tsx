import React, { useState, useEffect } from "react";
import { Theme } from "../types";
import { Cpu, Menu, X, ShieldAlert, Moon, Sun } from "lucide-react";

interface NavbarProps {
  theme: Theme;
  onThemeToggle: () => void;
}

export default function Navbar({ theme, onThemeToggle }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Background blur trigger
      setScrolled(window.scrollY > 20);

      // Scroll Progress Indicator
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Features", href: "#features" },
    { name: "Ecosystem", href: "#ecosystem" },
    { name: "Timeline", href: "#timeline" },
    { name: "Stats", href: "#stats" },
    { name: "Reviews", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav
      id="main-navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-cyber-dark/80 backdrop-blur-xl border-b border-neon-blue/15 shadow-sm"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      {/* Scroll Progress Bar */}
      <div
        className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-neon-blue via-neon-cyan to-neon-purple transition-all duration-100"
        style={{ width: `${scrollProgress}%` }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Logo Brand */}
          <a
            href="#"
            className="flex items-center gap-2 group cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <div className="relative">
              <div className="absolute -inset-1 rounded bg-gradient-to-r from-neon-blue to-neon-purple opacity-50 blur-sm group-hover:opacity-100 transition duration-300" />
              <div className="relative bg-cyber-dark p-1.5 rounded border border-white/10">
                <Cpu className="w-5 h-5 text-neon-blue group-hover:rotate-180 transition-transform duration-500" />
              </div>
            </div>
            <span className="font-display font-bold text-lg sm:text-xl tracking-widest text-white flex items-center">
              CYBORG<span className="text-neon-cyan select-none ml-1">X</span>
            </span>
          </a>

          {/* Desktop Navigation Link Hierarchy */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="font-mono text-xs tracking-wider uppercase text-slate-300 hover:text-neon-cyan hover:text-glow-cyan transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Right Controls: Theme Toggle & Join Button */}
          <div className="flex items-center gap-4">
            
            {/* Theme Toggle Button */}
            <button
              onClick={onThemeToggle}
              className="relative p-2 rounded-full border border-white/10 hover:border-neon-blue/30 bg-cyber-dark/45 text-white transition-all cursor-pointer select-none"
              title={`Switch to ${theme === "dark" ? "Light" : "Dark"} Mode`}
            >
              {theme === "dark" ? (
                <Sun className="w-4 h-4 text-neon-cyan" />
              ) : (
                <Moon className="w-4 h-4 text-indigo-400" />
              )}
            </button>

            {/* Premium CTA */}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="hidden sm:inline-flex relative items-center justify-center p-0.5 overflow-hidden text-xs font-mono tracking-widest font-bold text-white rounded bg-gradient-to-br from-neon-blue to-neon-purple hover:text-white dark:hover:text-cyber-dark focus:ring-1 focus:outline-none focus:ring-neon-blue"
            >
              <span className="relative px-4 py-2 transition-all ease-in duration-75 bg-cyber-dark rounded group hover:bg-transparent">
                JOIN REVOLUTION
              </span>
            </a>

            {/* Mobile Hamburger Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded border border-white/10 text-white hover:text-neon-blue transition-colors cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-16 sm:top-20 left-0 right-0 bg-cyber-dark/95 border-b border-neon-blue/20 backdrop-blur-2xl shadow-2xl py-6 px-4 animate-fade-in">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="font-mono text-sm tracking-widest uppercase text-slate-300 hover:text-neon-cyan px-2 py-1.5 rounded hover:bg-white/5 transition-all text-left"
              >
                {link.name}
              </a>
            ))}
            <div className="h-0.5 bg-white/5 my-2" />
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="w-full text-center py-2.5 rounded font-mono text-xs tracking-wider bg-gradient-to-r from-neon-blue to-neon-purple text-white hover:opacity-95 shadow-[0_0_15px_rgba(0,240,255,0.2)] font-semibold"
            >
              JOIN THE REVOLUTION
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
