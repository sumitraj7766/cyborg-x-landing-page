import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { ArrowRight, Sparkles, Binary, Terminal } from "lucide-react";
import AIOrb from "./AIOrb";

// Reference the generated asset path exactly
const cyborgHeroPath = "/src/assets/images/cyborg_hero_1781321466038.jpg";

interface HeroProps {
  theme: "dark" | "light";
}

export default function Hero({ theme }: HeroProps) {
  const [typedWord, setTypedWord] = useState("");
  const words = ["NEURAL INTEGRATION", "QUANTUM SYNERGY", "AI AUGMENTATION", "CYBERNETIC COGNITION"];
  const [wordIdx, setWordIdx] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const currentFullWord = words[wordIdx];

    const tick = () => {
      if (!isDeleting) {
        // Typing
        setTypedWord(currentFullWord.substring(0, typedWord.length + 1));
        if (typedWord === currentFullWord) {
          // Pause when done typing
          timer = setTimeout(() => setIsDeleting(true), 2000);
          return;
        }
      } else {
        // Deleting
        setTypedWord(currentFullWord.substring(0, typedWord.length - 1));
        if (typedWord === "") {
          setIsDeleting(false);
          setWordIdx((prev) => (prev + 1) % words.length);
          setTypingSpeed(120);
          return;
        }
      }

      setTypingSpeed(isDeleting ? 40 : 80);
    };

    timer = setTimeout(tick, typingSpeed);
    return () => clearTimeout(timer);
  }, [typedWord, isDeleting, wordIdx, typingSpeed]);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
    >
      {/* Background Glow Orbs */}
      <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-neon-blue/10 rounded-full blur-3xl -z-10 animate-pulse" />
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 bg-neon-purple/10 rounded-full blur-3xl -z-10 animate-pulse" style={{ animationDelay: "2s" }} />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
        
        {/* Left Column: Typography & CTAs */}
        <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6 sm:space-y-8">
          
          {/* Cyber Status Banner badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-neon-blue/30 bg-neon-blue/5 text-neon-blue font-mono text-[10px] sm:text-xs uppercase tracking-widest text-glow-blue"
          >
            <Sparkles className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: "3s" }} />
            <span>PROJECT CYBORG X // ONLINE VER 4.9.2</span>
          </motion.div>

          {/* Main Hero Header */}
          <div className="space-y-3 sm:space-y-4">
            <motion.h1
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl sm:text-6xl xl:text-7xl font-display font-extrabold tracking-tight text-white leading-tight"
            >
              THE FUTURE <br className="hidden sm:inline" />
              IS <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue via-neon-cyan to-neon-purple drop-shadow-sm">CYBORG</span>
            </motion.h1>

            {/* Dynamic Interactive Typist */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="h-8 font-mono text-xs sm:text-base tracking-wider text-neon-cyan flex items-center gap-2 uppercase"
            >
              <Terminal className="w-4 h-4 text-neon-cyan" />
              <span>COGNITIVE DIRECTIVE: </span>
              <span className="text-glow-cyan font-bold block">{typedWord}</span>
              <span className="w-2 h-4 sm:h-5 bg-neon-cyan animate-pulse inline-block" />
            </motion.div>
          </div>

          {/* Core Subtitle & Technical Paragraph */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="space-y-4 max-w-xl"
          >
            <p className="text-lg sm:text-xl font-medium text-slate-200">
              Where Human Intelligence Meets Artificial Intelligence.
            </p>
            <p className="text-sm text-slate-400 leading-relaxed font-sans">
              Welcome to the direct fusion of carbon biology and silicon power. Cyborg X integrates neural implants, 
              quantum computing nodes, and sub-atomic AI layers to amplify your physical, biological, and intellectual 
              capabilities by a factor of 10,000. Prepare to step beyond.
            </p>
          </motion.div>

          {/* Dual Cyber CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto"
          >
            {/* CTA 1: Explore Tech */}
            <button
              onClick={() => scrollToSection("features")}
              className="relative inline-flex items-center justify-center px-8 py-3.5 font-mono text-xs font-bold tracking-widest uppercase transition-all duration-300 rounded bg-neon-blue text-cyber-dark hover:bg-neon-cyan hover:shadow-[0_0_20px_rgba(0,255,204,0.6)] cursor-pointer select-none group"
            >
              EXPLORE TECHNOLOGY
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1.5 transition-transform" />
            </button>

            {/* CTA 2: Join Revolution */}
            <button
              onClick={() => scrollToSection("contact")}
              className="relative inline-flex items-center justify-center px-8 py-3.5 font-mono text-xs font-bold tracking-widest uppercase rounded border border-white/20 hover:border-neon-purple bg-transparent text-white hover:bg-neon-purple/10 hover:shadow-[0_0_15px_rgba(189,0,255,0.25)] transition-all duration-300 cursor-pointer select-none"
            >
              <span className="flex items-center gap-2">
                <Binary className="w-4 h-4 text-neon-purple" />
                JOIN THE REVOLUTION
              </span>
            </button>
          </motion.div>

          {/* Decorative Terminal HUD readout */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ delay: 1 }}
            className="hidden sm:block font-mono text-[9px] text-slate-500 whitespace-pre leading-none"
          >
            {`SYS_STATUS: NEUROLINK=STABLE_99_PTR  [E_BANDWIDTH: 1.2 GBPS/CY]
CYBERNETICS: GEN_V_NANITE_ACTIVE  [COGNITION_CORE: SEED_ACTIVE]
ENCRYPTION: SHIELD_CRYPTO_G_128  [HARDWARE: INTEL_INTEGRATED]`}
          </motion.div>

        </div>

        {/* Right Column: Hero Artwork Hub with AI Orb */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center relative mt-10 lg:mt-0">
          
          {/* Cyber Framing HUD elements */}
          <div className="absolute inset-0 border border-white/5 rounded-3xl -z-10 pointer-events-none" />
          
          {/* Main Visual Carousel/Switcher between AI Orb Diagnostic and the master Cyborg Image Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative w-full max-w-[420px] aspect-[4/5] sm:aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 group shadow-2xl bg-cyber-dark/40 backdrop-blur-md"
          >
            {/* Tech Corner Markers */}
            <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-neon-blue z-20 pointer-events-none" />
            <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-neon-blue z-20 pointer-events-none" />
            <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-neon-purple z-20 pointer-events-none" />
            <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-neon-purple z-20 pointer-events-none" />

            {/* Cyborg Master Illustration */}
            <div className="absolute inset-0 overflow-hidden">
              <img
                src={cyborgHeroPath}
                alt="CYBORG X Futuristic AI Android Artwork"
                className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-in-out select-none"
                referrerPolicy="no-referrer"
              />
              {/* Neon color overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-cyber-dark via-cyber-dark/40 to-transparent mix-blend-multiply pointer-events-none" />
              <div className="absolute inset-0 bg-neon-blue/10 mix-blend-color pointer-events-none" />
            </div>

            {/* Float HUD indicators overlays */}
            <div className="absolute bottom-4 left-4 right-4 bg-cyber-dark/85 backdrop-blur-md rounded-xl p-4 border border-white/10 flex flex-col gap-1.5 z-10 pointer-events-none font-mono">
              <div className="flex items-center justify-between">
                <span className="text-[10px] text-slate-400 tracking-wider">UNIT DESIGNATION</span>
                <span className="text-[10px] text-neon-blue font-bold tracking-widest">CYB-MODEL-X2050</span>
              </div>
              <div className="w-full bg-white/5 h-1 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: "0%" }}
                  animate={{ width: "88%" }}
                  transition={{ duration: 1.5, delay: 1 }}
                  className="bg-gradient-to-r from-neon-blue to-neon-purple h-full"
                />
              </div>
              <div className="flex items-center justify-between text-[9px] text-slate-500 mt-0.5">
                <span>NEURAL CONNECTIVITY: 98%</span>
                <span>CALIBRATION: STABLE</span>
              </div>
            </div>
          </motion.div>

          {/* High-tech AI Embedded Float Diagnostic (Interactive Orb is sitting right below it!) */}
          <div className="absolute -bottom-16 -right-2 sm:-right-8 animate-float-orb z-20 opacity-80 scale-90 sm:scale-100">
            <div className="bg-cyber-dark/95 border border-white/10 rounded-2xl p-2 neon-shadow-purple shadow-xl">
              <AIOrb theme={theme} />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
