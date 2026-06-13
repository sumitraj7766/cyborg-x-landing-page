import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { TimelineItem } from "../types";
import { Calendar, Layers, ShieldCheck, Database, Zap } from "lucide-react";

export default function Timeline() {
  const [activeYear, setActiveYear] = useState<string>("2040");

  const timelineItems: TimelineItem[] = [
    {
      year: "2025",
      title: "AI Assistants Integration",
      description: "Localized language and sensory models operate in ambient smart environments, acting as human extensions.",
      details: "First generation sensory algorithms running on standard mobile hardware. Introduced sub-millisecond voice syncing, predictive layout engines, and dynamic schedule managers. Marked the transition of AI from simple databases to active digital helpers.",
      status: "completed",
    },
    {
      year: "2030",
      title: "Intelligent Robots Deployment",
      description: "Industrial, tactical, and service humanoid robots deployed with real-time autonomous motor reflexes.",
      details: "Transition of physical labor tasks. Android skeletons loaded with high-efficiency solid-state motor batteries, bionic joints, and local spatial point-cloud scanners. This period solved stable bipedal movement on complex, rocky soils.",
      status: "completed",
    },
    {
      year: "2040",
      title: "Human-AI Fusion Era",
      description: "First direct cerebral cortex implants establishing stable high-bandwidth biological and machine links.",
      details: "Our definitive breakthrough. CYBORG X released the classic model gold-threaded neuro-microchip. Solved organic rejection issues using custom cellular nanite encasement layers. Synapses immediately merged with synthetic silicon networks.",
      status: "active",
    },
    {
      year: "2050",
      title: "Cyborg Civilization Apex",
      description: "The global convergence of synchronized minds living in hybrid physical and holographic virtual realms.",
      details: "Fully collaborative civilization. Telepathic network links allow standard, silent mental exchanges across planetary nodes. Biological aging is solved via active continuous molecular cell-repair structures. Human intelligence climbs to new scales.",
      status: "planned",
    },
  ];

  const currentActiveItem = timelineItems.find((item) => item.year === activeYear) || timelineItems[2];

  const getStatusColor = (status: "completed" | "active" | "planned") => {
    switch (status) {
      case "completed":
        return "bg-neon-cyan text-cyber-dark text-[9px] font-bold";
      case "active":
        return "bg-neon-blue text-cyber-dark text-[9px] font-bold animate-pulse";
      case "planned":
      default:
        return "bg-neon-purple text-white text-[9px] font-bold";
    }
  };

  return (
    <section id="timeline" className="py-20 sm:py-28 relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Background neon orb highlight */}
      <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-neon-cyan/5 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Grid Header */}
      <div className="flex flex-col items-center text-center space-y-4 mb-20">
        <span className="font-mono text-xs text-neon-cyan tracking-widest uppercase font-semibold">
          // CHRONOLOGICAL DIRECTIVES TIMELINE
        </span>
        <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
          FUTURE SPECIFICATIONS TIMELINE
        </h2>
        <p className="max-w-2xl text-slate-400 text-sm sm:text-base font-light">
          Follow the structural milestones of human evolution. Click each historical era to inspect specific computational 
          advancements.
        </p>
      </div>

      {/* Interactive Horizontal Timeline Bar */}
      <div className="relative mb-12 select-none">
        {/* Full Connecting Line */}
        <div className="absolute top-1/2 left-0 right-0 h-1 bg-white/5 -translate-y-1/2 z-0" />
        
        {/* Active Filled Line */}
        <div className="absolute top-1/2 left-0 h-1 bg-gradient-to-r from-neon-blue via-neon-cyan to-neon-purple -translate-y-1/2 z-0 transition-all duration-500"
             style={{
               width: 
                 activeYear === "2025" ? "12%" : 
                 activeYear === "2030" ? "38%" : 
                 activeYear === "2040" ? "65%" : "88%"
             }} 
        />

        {/* Milestone Steps */}
        <div className="relative flex justify-between items-center z-10 max-w-5xl mx-auto">
          {timelineItems.map((item) => {
            const isActive = item.year === activeYear;
            return (
              <button
                key={item.year}
                onClick={() => setActiveYear(item.year)}
                className="flex flex-col items-center group cursor-pointer focus:outline-none"
              >
                {/* Year Bubble */}
                <div
                  className={`w-12 h-12 rounded-full border-2 flex items-center justify-center font-mono text-xs font-bold transition-all duration-300 ${
                    isActive
                      ? "bg-cyber-dark text-white border-neon-cyan shadow-[0_0_15px_rgba(0,255,204,0.6)] scale-110"
                      : "bg-cyber-dark/80 text-slate-400 border-white/10 group-hover:border-neon-blue/40 group-hover:text-white"
                  }`}
                >
                  {item.year}
                </div>

                {/* Micro Label */}
                <span
                  className={`font-display text-[9px] sm:text-[10px] tracking-wider uppercase font-semibold mt-2.5 transition-colors ${
                    isActive ? "text-neon-cyan text-glow-cyan" : "text-slate-500 group-hover:text-slate-350"
                  }`}
                >
                  {item.year === "2025"
                    ? "Assistants"
                    : item.year === "2030"
                    ? "Robots"
                    : item.year === "2040"
                    ? "Fusion"
                    : "Civilization"}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Selected Era Specification Sheet */}
      <div className="max-w-4xl mx-auto mt-16">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeYear}
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -15 }}
            transition={{ duration: 0.4 }}
            className="bg-cyber-gray/50 border border-white/10 rounded-2xl p-6 sm:p-10 shadow-2xl relative overflow-hidden"
          >
            {/* Corner Bracket decorations */}
            <div className="absolute top-0 right-0 w-16 h-[1px] bg-gradient-to-l from-neon-blue to-transparent" />
            <div className="absolute top-0 right-0 w-[1px] h-16 bg-gradient-to-b from-neon-blue to-transparent" />

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              {/* Year Visual & Badge */}
              <div className="md:col-span-4 flex flex-col items-center md:items-start text-center md:text-left space-y-4">
                <span className="font-mono text-5xl sm:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-white to-slate-500 select-none">
                  {currentActiveItem.year}
                </span>
                <span className={`px-2.5 py-1 rounded font-mono uppercase tracking-widest text-[9px] ${getStatusColor(currentActiveItem.status)}`}>
                  STATUS: {currentActiveItem.status}
                </span>
              </div>

              {/* Specs Copy */}
              <div className="md:col-span-8 space-y-5 text-left">
                <div className="space-y-1.5">
                  <span className="font-mono text-[9px] text-neon-cyan uppercase tracking-widest">
                    DIRECTIVE CLASSIFICATION
                  </span>
                  <h3 className="font-display font-bold text-xl sm:text-2xl text-white tracking-widest uppercase">
                    {currentActiveItem.title}
                  </h3>
                </div>

                <p className="font-sans text-sm text-slate-300 leading-relaxed font-semibold">
                  {currentActiveItem.description}
                </p>

                <p className="font-sans text-xs sm:text-sm text-slate-400 leading-relaxed font-light">
                  {currentActiveItem.details}
                </p>

                {/* Mini metadata nodes */}
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/5 font-mono text-[10px] text-slate-500">
                  <div className="flex items-center gap-2">
                    <Layers className="w-4 h-4 text-neon-purple" />
                    <span>SYSTEM ARCHITECTURE: SECURE GEN V</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-neon-cyan" />
                    <span>BIOMETRIC SAFETY SEALED</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

    </section>
  );
}
