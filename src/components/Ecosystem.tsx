import { useState } from "react";
import { motion } from "motion/react";
import { TechItem } from "../types";
import { Cpu, Database, Network, CircleDot, Server, RefreshCw } from "lucide-react";

export default function Ecosystem() {
  const [selectedCategory, setSelectedCategory] = useState<string>("ALL");

  const technologies: TechItem[] = [
    {
      name: "Artificial Intelligence",
      category: "ALGORITHMIC",
      level: 99,
      description: "Autonomous self-reasoning machine models managing planetary telemetry grids.",
      status: "OPTIMIZED",
    },
    {
      name: "Machine Learning",
      category: "ALGORITHMIC",
      level: 95,
      description: "Continuous self-modifying neural patterns adapting dynamically to bio-data logs.",
      status: "ACTIVE",
    },
    {
      name: "Robotics",
      category: "HARDWARE",
      level: 88,
      description: "Next-gen motor pathways, tactile carbon actuators, and mechanical feedback locks.",
      status: "STANDBY",
    },
    {
      name: "Computer Vision",
      category: "SENSORY",
      level: 97,
      description: "Sub-visual spatial depth mapping, molecular scanning overlays, and threat checks.",
      status: "ACTIVE",
    },
    {
      name: "IoT",
      category: "SENSORY",
      level: 94,
      description: "Decentralized mesh telemetry connections mapping local physical environments.",
      status: "STABLE",
    },
    {
      name: "Neural Networks",
      category: "BIOLOGICAL",
      level: 99,
      description: "Multi-layered synthetic neural synapse nodes coupling with biological tissues.",
      status: "STABLE",
    },
    {
      name: "Blockchain",
      category: "SECURITY",
      level: 90,
      description: "Immutable digital authentication Ledgers protecting individual synapse files.",
      status: "SECURED",
    },
    {
      name: "Quantum Systems",
      category: "ALGORITHMIC",
      level: 85,
      description: "Localized sub-Kelvin computing matrices to expand absolute memory limits.",
      status: "CALIBRATING",
    },
  ];

  const categories = ["ALL", "BIOLOGICAL", "ALGORITHMIC", "HARDWARE", "SENSORY", "SECURITY"];

  const filteredTechnologies =
    selectedCategory === "ALL"
      ? technologies
      : technologies.filter((tech) => tech.category === selectedCategory);

  return (
    <section id="ecosystem" className="py-20 sm:py-28 relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Background Graphic Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293708_1px,transparent_1px),linear-gradient(to_bottom,#1f293708_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none -z-10" />

      {/* Grid Headers */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16">
        <div className="lg:col-span-7 flex flex-col justify-start text-left space-y-4">
          <span className="font-mono text-xs text-neon-purple tracking-widest uppercase font-semibold">
            // DEC_ECOSYSTEM // CORE CONFIG
          </span>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
            TECHNOLOGY ECOSYSTEM
          </h2>
          <p className="max-w-xl text-slate-400 text-sm sm:text-base font-light">
            CYBORG X doesn't operate in isolation. Our network interfaces with standard, high-efficiency decentralized 
            protocols to provide total biological-to-silicon digital command.
          </p>
        </div>

        {/* Filter Categories Pills */}
        <div className="lg:col-span-5 flex flex-wrap gap-2 justify-end lg:justify-end">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`font-mono text-[9px] sm:text-[10px] tracking-wider uppercase px-3 py-1.5 rounded-md border cursor-pointer select-none transition-all ${
                selectedCategory === cat
                  ? "bg-neon-purple text-white border-neon-purple shadow-[0_0_10px_rgba(189,0,255,0.4)]"
                  : "bg-cyber-dark/45 text-slate-400 border-white/5 hover:border-white/10 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid display technologies */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredTechnologies.map((tech) => (
          <div
            key={tech.name}
            className="flex flex-col justify-between p-5 bg-cyber-dark/40 border border-white/5 rounded-2xl hover:bg-cyber-gray/40 hover:border-neon-purple/20 hover:shadow-[0_0_15px_rgba(189,0,255,0.08)] transition-all duration-300"
          >
            <div>
              {/* Card Title & Status Tag */}
              <div className="flex justify-between items-start mb-3">
                <span className="font-mono text-[9px] px-2 py-0.5 bg-white/5 rounded border border-white/5 text-slate-500 uppercase tracking-widest">
                  {tech.category}
                </span>
                <span
                  className={`font-mono text-[9px] font-semibold tracking-wider uppercase flex items-center gap-1 ${
                    tech.status === "OPTIMIZED" || tech.status === "ACTIVE" || tech.status === "SECURED"
                      ? "text-neon-cyan"
                      : "text-amber-500"
                  }`}
                >
                  <CircleDot className="w-2.5 h-2.5 animate-pulse" />
                  {tech.status}
                </span>
              </div>

              {/* Title */}
              <h3 className="font-display font-bold text-sm sm:text-base text-white tracking-widest mt-1 mb-2 uppercase">
                {tech.name}
              </h3>

              {/* Description */}
              <p className="font-sans text-xs text-slate-400 leading-relaxed font-light mb-4">
                {tech.description}
              </p>
            </div>

            {/* Readout Progress stats bar */}
            <div className="space-y-1.5 mt-2">
              <div className="flex justify-between items-center text-[10px] font-mono">
                <span className="text-slate-500">INTEGRATION COMPATIBILITY</span>
                <span className="text-neon-purple font-semibold">{tech.level}%</span>
              </div>
              <div className="w-full bg-white/5 h-1 rounded overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${tech.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                  className="bg-gradient-to-r from-neon-purple to-neon-blue h-full"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom telemetry line */}
      <div className="flex flex-col sm:flex-row items-center justify-between text-[10px] font-mono text-slate-500 mt-10 pt-4 border-t border-white/5">
        <div className="flex items-center gap-2">
          <RefreshCw className="w-3.5 h-3.5 text-neon-purple animate-spin" style={{ animationDuration: "8s" }} />
          <span>CYBERNETIC BLOCKCHAIN TRUST VALUE: SECURE</span>
        </div>
        <span>GLOBAL HARBINGER NODE SYNC: 100% READINESS</span>
      </div>

    </section>
  );
}
