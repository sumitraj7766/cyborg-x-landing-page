import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Feature } from "../types";
import { Brain, Eye, Workflow, Shield, Bot, Atom, ArrowUpRight, Plus, Minus } from "lucide-react";

export default function Features() {
  const [expandedFeatureId, setExpandedFeatureId] = useState<string | null>(null);

  const features: Feature[] = [
    {
      id: "neural",
      title: "Neural Processing",
      description: "Direct synaptic co-processing via a multi-layered bio-silicon neural array operating at optimal sub-zero temperatures.",
      iconName: "brain",
      glowColor: "cyan",
      details: [
        "12,000 TFLOPS core processing velocity",
        "Direct neuro-synapse bio-coupling",
        "Adaptive heuristic self-reconfiguration",
        "Nanite-assisted neural matrix repairs"
      ]
    },
    {
      id: "vision",
      title: "AI Vision",
      description: "Sub-visual infrared spectrum overlays, smart real-time object spatial mapping, and advanced predictive ballistic trackers.",
      iconName: "eye",
      glowColor: "blue",
      details: [
        "Dynamic infrared, ultraviolet, and x-ray spectrum overlays",
        "High-fidelity LiDAR point-cloud environmental meshes",
        "Facial-biometric threat and vector scanning",
        "Real-time object velocity vector predictions"
      ]
    },
    {
      id: "automation",
      title: "Smart Automation",
      description: "Automated micro-biological processes, environmental adjustments, and smart action triggers executing passively in your sleep.",
      iconName: "workflow",
      glowColor: "purple",
      details: [
        "Autonomous physiological fatigue-dampening",
        "Intelligent nanite hormonal-equilibrium stabilizer",
        "Personal security micro-drone command networks",
        "Proactive localized sensory-filter gating"
      ]
    },
    {
      id: "security",
      title: "Cyber Security",
      description: "Military-grade cryptography layers shielding cognitive pathways from neural hacking exploits and malicious synthetic memories.",
      iconName: "security",
      glowColor: "blue",
      details: [
        "Quantum-resistant neural firewall layers",
        "Subconscious mental cryptographic validation protocols",
        "Active ransomware/malware nanite purging",
        "Synthetic memory falsification interceptors"
      ]
    },
    {
      id: "robotics",
      title: "Robotics Intelligence",
      description: "Real-time synchronous tethering with heavy mechanical exoskeletons and orbital micro-drones using a secure neural grid.",
      iconName: "robotics",
      glowColor: "purple",
      details: [
        "Holographic telemetry syncing of exoskeleton limbs",
        "Direct orbital spatial drone observation telemetry",
        "Sub-millisecond remote motor reflex overrides",
        "Integrated kinetic mechanical damage diagnostic"
      ]
    },
    {
      id: "quantum",
      title: "Quantum Computing",
      description: "Direct access to localized stable quantum state coils to solve advanced mathematical encryption files in milliseconds.",
      iconName: "quantum",
      glowColor: "cyan",
      details: [
        "Zero-Kelvin thermal insulated stable hardware loop",
        "Direct mental access to decentralized quantum chains",
        "On-the-fly decryption algorithms solver",
        "Synchronous parallel-thought vectorizing"
      ]
    }
  ];

  const getGlowStyles = (color: "blue" | "purple" | "cyan") => {
    switch (color) {
      case "cyan":
        return "hover:border-neon-cyan neon-shadow-cyan focus:ring-neon-cyan";
      case "purple":
        return "hover:border-neon-purple neon-shadow-purple focus:ring-neon-purple";
      case "blue":
      default:
        return "hover:border-neon-blue neon-shadow-blue focus:ring-neon-blue";
    }
  };

  const getIconColor = (color: "blue" | "purple" | "cyan") => {
    switch (color) {
      case "cyan":
        return "text-neon-cyan";
      case "purple":
        return "text-neon-purple";
      case "blue":
      default:
        return "text-neon-blue";
    }
  };

  const renderIcon = (iconName: string, color: "blue" | "purple" | "cyan") => {
    const cls = `w-7 h-7 ${getIconColor(color)} transition-transform group-hover:scale-110`;
    switch (iconName) {
      case "brain":
        return <Brain className={cls} />;
      case "eye":
        return <Eye className={cls} />;
      case "workflow":
        return <Workflow className={cls} />;
      case "security":
        return <Shield className={cls} />;
      case "robotics":
        return <Bot className={cls} />;
      case "quantum":
      default:
        return <Atom className={cls} />;
    }
  };

  return (
    <section id="features" className="py-20 sm:py-28 relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Background Graphic Lines */}
      <div className="absolute top-12 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent pointer-events-none" />

      {/* Grid Title Header */}
      <div className="flex flex-col items-center text-center space-y-4 mb-16">
        <span className="font-mono text-xs text-neon-blue tracking-widest uppercase font-semibold">
          // MULTI-SYSTEMS SPECIFICATIONS
        </span>
        <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
          CYBORNIC ADVANCEMENTS
        </h2>
        <p className="max-w-2xl text-slate-400 text-sm sm:text-base font-light">
          Experience the specialized core cybernetic subsystems fully engineered to integrate biological bodies with top-tier 
          silicon structures. Every component guarantees direct neuro-coupling compatibility.
        </p>
      </div>

      {/* Feature Grids layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feat) => {
          const isExpanded = expandedFeatureId === feat.id;

          return (
            <motion.div
              layout
              transition={{ layout: { duration: 0.35, type: "spit" } }}
              key={feat.id}
              className={`group relative flex flex-col justify-between bg-cyber-gray/50 backdrop-blur-md rounded-2xl p-6 border border-white/5 transition-all duration-300 ${getGlowStyles(
                feat.glowColor
              )}`}
            >
              <div>
                {/* Tech Code Watermark */}
                <span className="absolute top-4 right-4 font-mono text-[9px] text-slate-600 tracking-widest">
                  SYS_CORE // {feat.id.toUpperCase()}_01
                </span>

                {/* Icon Circle */}
                <div className="p-3 w-fit rounded-xl bg-cyber-dark border border-white/10 mb-6 flex items-center justify-center shadow-inner">
                  {renderIcon(feat.iconName, feat.glowColor)}
                </div>

                {/* Title */}
                <h3 className="font-display font-bold text-lg sm:text-xl text-white tracking-wider mb-2">
                  {feat.title}
                </h3>

                {/* Paragraph */}
                <p className="font-sans text-xs sm:text-sm text-slate-400 leading-relaxed font-light mb-4 text-left">
                  {feat.description}
                </p>
              </div>

              {/* Expansion block */}
              <div className="pt-4 border-t border-white/5 mt-4">
                <button
                  onClick={() => setExpandedFeatureId(isExpanded ? null : feat.id)}
                  className="font-mono text-[10px] tracking-widest text-slate-300 hover:text-white uppercase flex items-center justify-between w-full cursor-pointer select-none"
                >
                  <span className="flex items-center gap-1">
                    {isExpanded ? <Minus className="w-3 h-3 text-neon-pink" /> : <Plus className="w-3 h-3 text-neon-cyan" />}
                    {isExpanded ? "Minimize Spec Data" : "Analyze Technical Specs"}
                  </span>
                  <ArrowUpRight className="w-3 h-3 text-slate-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>

                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden mt-3"
                    >
                      <ul className="font-mono text-[10px] text-slate-400 space-y-1.5 pl-2 py-1 border-l border-neon-cyan/20">
                        {feat.details.map((detail, stepIdx) => (
                          <li key={stepIdx} className="flex items-center gap-2">
                            <span className="w-1 h-1 bg-neon-cyan rounded-full" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
