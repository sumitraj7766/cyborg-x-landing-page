import { useState, useEffect } from "react";
import { Theme } from "./types";
import { motion, useScroll, useSpring } from "motion/react";
import ParticleBackground from "./components/ParticleBackground";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Features from "./components/Features";
import Ecosystem from "./components/Ecosystem";
import Timeline from "./components/Timeline";
import Statistics from "./components/Statistics";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [theme, setTheme] = useState<Theme>("dark");
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });
  const [showMouseGlow, setShowMouseGlow] = useState(false);

  // Track cursor coordinates for the mouse-follow glow effect (on desktop)
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      setShowMouseGlow(true);
    };

    const handleMouseLeave = () => {
      setShowMouseGlow(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  const handleThemeToggle = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  // Custom coordinate springs for smooth cursor lagging
  const bgGlowX = useSpring(mousePos.x - 75, { stiffness: 100, damping: 25 });
  const bgGlowY = useSpring(mousePos.y - 75, { stiffness: 100, damping: 25 });

  return (
    <div
      className={`min-h-screen text-slate-100 selection:bg-neon-cyan selection:text-cyber-dark font-sans relative overflow-x-hidden transition-colors duration-500 ${
        theme === "dark" ? "bg-[#04040a] text-slate-100" : "bg-[#f5f6fc] text-slate-900"
      }`}
    >
      {/* Dynamic Particle & Mesh Backdrop */}
      <ParticleBackground theme={theme} />

      {/* Floating Mouse-Follow Glow Tracker (Desktop only) */}
      {showMouseGlow && (
        <motion.div
          className="fixed w-36 h-36 rounded-full pointer-events-none -z-50 blur-[60px] opacity-45 mix-blend-screen hidden md:block"
          style={{
            x: bgGlowX,
            y: bgGlowY,
            background:
              theme === "dark"
                ? "radial-gradient(circle, #00f0ff 0%, #bd00ff 70%)"
                : "radial-gradient(circle, #6366f1 0%, #8b5cf6 70%)",
          }}
        />
      )}

      {/* Futuristic Navigation Bar */}
      <Navbar theme={theme} onThemeToggle={handleThemeToggle} />

      {/* Main Structural Page Flow */}
      <main className="space-y-4">
        
        {/* Section 1: Hero */}
        <Hero theme={theme} />

        {/* Section 2: About */}
        <About />

        {/* Section 3: Features */}
        <Features />

        {/* Section 4: Technology Ecosystem */}
        <Ecosystem />

        {/* Section 5: Future Timeline */}
        <Timeline />

        {/* Section 6: Statistics Counters */}
        <Statistics />

        {/* Section 7: User Testimonials */}
        <Testimonials />

        {/* Section 8: Secure Contact Form */}
        <Contact />

      </main>

      {/* Solid Tech Footer */}
      <Footer />
    </div>
  );
}
