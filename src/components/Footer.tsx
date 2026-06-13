import React from "react";
import { Cpu, Github, Twitter, Youtube, ArrowUp, RefreshCw, Layers } from "lucide-react";

export default function Footer() {
  const socialIcons = [
    { icon: <Github className="w-4 h-4" />, href: "#", name: "Github" },
    { icon: <Twitter className="w-4 h-4" />, href: "#", name: "Twitter" },
    { icon: <Youtube className="w-4 h-4" />, href: "#", name: "Youtube" },
  ];

  const quickLinks1 = [
    { name: "About Node", href: "#about" },
    { name: "Core Features", href: "#features" },
    { name: "Ecosystem Data", href: "#ecosystem" },
    { name: "Chronology Specs", href: "#timeline" },
  ];

  const quickLinks2 = [
    { name: "Corporate Hub", href: "#" },
    { name: "Privacy Policy", href: "#" },
    { name: "Security Protocols", href: "#" },
    { name: "Local Registry", href: "#" },
  ];

  const handleScrollTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-cyber-dark/95 border-t border-white/10 pt-16 pb-8 overflow-hidden z-10 w-full">
      {/* Absolute background matrix overlay */}
      <div className="absolute inset-0 bg-radial from-transparent to-black pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start mb-12">
          
          {/* Column 1: Brand & Bio descriptor */}
          <div className="md:col-span-4 flex flex-col items-start text-left space-y-4">
            <a
              href="#"
              onClick={handleScrollTop}
              className="flex items-center gap-2 group cursor-pointer"
            >
              <div className="relative bg-cyber-dark p-1 rounded-md border border-neon-blue/20">
                <Cpu className="w-4 h-4 text-neon-blue group-hover:rotate-180 transition-transform duration-500" />
              </div>
              <span className="font-display font-black text-lg tracking-widest text-white">
                CYBORG<span className="text-neon-cyan">X</span>
              </span>
            </a>
            <p className="font-sans text-xs text-slate-400 leading-relaxed font-light max-w-sm">
              Standard biological integrations that couple human nervous structures with high-tier quantum arrays. 
              Pioneering safe cybernetic futures since 2025.
            </p>

            {/* Social icons matrix */}
            <div className="flex gap-2.5 pt-2">
              {socialIcons.map((soc, idx) => (
                <a
                  key={idx}
                  href={soc.href}
                  title={soc.name}
                  className="p-2 rounded-lg bg-cyber-dark border border-white/5 text-slate-400 hover:text-neon-cyan hover:border-neon-cyan hover:shadow-[0_0_10px_rgba(0,255,204,0.25)] transition-all shrink-0"
                >
                  {soc.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick links col 1 */}
          <div className="md:col-span-3 flex flex-col items-start text-left space-y-4">
            <h4 className="font-mono text-[10px] tracking-widest uppercase font-bold text-slate-200">
              // SPECIFICATION DATA
            </h4>
            <ul className="space-y-2.5 font-mono text-[11px]">
              {quickLinks1.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-neon-cyan transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Quick links col 2 */}
          <div className="md:col-span-3 flex flex-col items-start text-left space-y-4">
            <h4 className="font-mono text-[10px] tracking-widest uppercase font-bold text-slate-200">
              // SYSTEMS RESOURCES
            </h4>
            <ul className="space-y-2.5 font-mono text-[11px]">
              {quickLinks2.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-neon-cyan transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Quick back to top */}
          <div className="md:col-span-2 flex flex-col items-center md:items-end justify-center h-full">
            <button
              onClick={handleScrollTop}
              className="p-3 rounded-full border border-white/10 hover:border-neon-blue bg-cyber-dark hover:shadow-[0_0_15px_rgba(0,240,255,0.3)] text-slate-400 hover:text-white transition-all cursor-pointer group"
              title="Return to Core"
            >
              <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
            </button>
            <span className="font-mono text-[8px] text-slate-600 mt-2 block uppercase tracking-widest">
              RETURN TO APEX
            </span>
          </div>

        </div>

        {/* Footer bottom bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between text-[10px] font-mono text-slate-500">
          
          <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
            <span>
              &copy; {new Date().getFullYear()} CYBORG X COOPERATIVE SYSTEM. ALL PERMISSIONS SEALED.
            </span>
            <span className="hidden sm:inline text-slate-700">|</span>
            <div className="flex items-center gap-1">
              <Layers className="w-3.5 h-3.5 text-neon-purple shrink-0" />
              <span>REGISTRY CORE: COMPLIANT WITH CAL-NATIVE 2050</span>
            </div>
          </div>

          <div className="flex items-center gap-1.5 mt-4 sm:mt-0">
            <RefreshCw className="w-3.5 h-3.5 text-neon-cyan animate-spin" style={{ animationDuration: "12s" }} />
            <span>SHIELD SECURITY ACTIVE // AES-GCM-256</span>
          </div>

        </div>
      </div>
    </footer>
  );
}
