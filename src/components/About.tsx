import { useState } from "react";
import { motion } from "motion/react";
import { Zap, Brain, Radio, Fingerprint, ShieldAlert, Cpu } from "lucide-react";

interface Pillar {
  id: string;
  iconName: string;
  label: string;
  coreStatement: string;
  extendedText: string;
  color: string;
  status: string;
}

export default function About() {
  const [activePillarIdx, setActivePillarIdx] = useState(0);

  const pillars: Pillar[] = [
    {
      id: "cognitive",
      iconName: "brain",
      label: "COGNITIVE TRANSMISSION",
      coreStatement: "Direct mental integration through cybernetic neuro-implants.",
      extendedText: "The primary Cyborg X chip overrides general synapses using 12nm carbon-fiber gold pathways. By coupling directly with the cerebral cortex, our neural link provides immediate mental access to the decentralized data mesh. Learn foreign dialects in seconds, stream architectural calculations directly to your sensory core, and converse silently with other synchronized entities.",
      color: "border-neon-blue text-neon-blue bg-neon-blue/5",
      status: "STABLE - 1.2 GBPS BANDWIDTH",
    },
    {
      id: "physiological",
      iconName: "zap",
      label: "CELLULAR NANOMETEOROLOGY",
      coreStatement: "Endurance amplification using sub-microscopic sub-atomic nanites.",
      extendedText: "Physical limits are recalculated. Our custom bio-bionic structure replaces calcium matrices with durable carbon lattices, and hosts billions of synchronized cell repair nanites. These micro-structures destroy free-radicals, instantly seal internal tissue ruptures, and optimize systemic blood flow to eliminate fatigue cycles. Strength, speed, and durability scale infinitely.",
      color: "border-neon-purple text-neon-purple bg-neon-purple/5",
      status: "OPERATIONAL - NANITE DENSITY 100%",
    },
    {
      id: "quantum",
      iconName: "cpu",
      label: "QUANTUM THOUGHT DUALITY",
      coreStatement: "Parallel co-calculations done directly in micro-chips.",
      extendedText: "Localized multi-qubit thermal-insulated quantum units are embedded at the base of the skull. This dry-state processor runs mathematical algorithms in tandem with biological thoughts, granting instant processing calculations. The neural structure handles advanced math, crypto solutions, and digital prediction vectors without cognitive load constraints.",
      color: "border-neon-cyan text-neon-cyan bg-neon-cyan/5",
      status: "OPTIMIZED - ZERO SYNAPSE LATENCY",
    },
  ];

  return (
    <section
      id="about"
      className="relative py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-neon-purple/5 rounded-full blur-3xl -z-10 pointer-events-none" />

      {/* Grid Framing Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Hand: Explanatory Copy & Active Tab Specifier */}
        <div className="lg:col-span-6 flex flex-col justify-start text-left space-y-6">
          <div className="space-y-2">
            {/* Subsection indicator */}
            <span className="font-mono text-xs text-neon-cyan tracking-widest uppercase font-semibold">
              // 01 / DECENTRALIZED AUGMENTATION
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
              BEYOND NATURAL <br className="hidden sm:inline" />
              INTEGRATION
            </h2>
          </div>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Human evolution is no longer bound by biological timescales. At CYBORG X, we build the bridges that merge the 
            creative ingenuity of biological brains with the computational absolute of silicon machinery. Our neural 
            products bypass traditional interface delays (retinas, fingers) allowing your biological intellect to command 
            quantum systems natively, seamlessly, and instantly.
          </p>

          <p className="text-xs sm:text-sm text-slate-400 font-mono border-l-2 border-neon-cyan/40 pl-4 py-1 italic">
            "The human intellect does not disappear; it amplifies itself, discovering coordinates of creative performance 
            never imagined in the pure natural state."
          </p>

          {/* Interactive Selector Pill Buttons (Infographic cards control) */}
          <div className="flex flex-col gap-3.5 mt-4">
            {pillars.map((pillar, idx) => (
              <button
                key={pillar.id}
                onClick={() => setActivePillarIdx(idx)}
                className={`flex items-center justify-between p-4 rounded-xl border text-left cursor-pointer transition-all ${
                  activePillarIdx === idx
                    ? "bg-cyber-gray/90 border-neon-blue shadow-[0_0_15px_rgba(0,240,255,0.15)]"
                    : "bg-cyber-dark/45 border-white/5 hover:border-white/10 hover:bg-cyber-gray/30"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg border ${activePillarIdx === idx ? pillar.color : "border-white/10 text-slate-400"}`}>
                    {pillar.iconName === "brain" ? (
                      <Brain className="w-5 h-5" />
                    ) : pillar.iconName === "zap" ? (
                      <Zap className="w-5 h-5" />
                    ) : (
                      <Cpu className="w-5 h-5" />
                    )}
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-xs tracking-wider text-slate-100 uppercase">
                      {pillar.label}
                    </h3>
                    <p className="font-sans text-[10px] text-slate-400 mt-0.5 line-clamp-1">
                      {pillar.coreStatement}
                    </p>
                  </div>
                </div>
                <div className="font-mono text-[9px] text-slate-500 uppercase tracking-widest hidden sm:block">
                  {pillar.status}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Right Hand: Holographic Interactive Infographic Active Details Panel */}
        <div className="lg:col-span-6 flex flex-col justify-center">
          <motion.div
            key={activePillarIdx}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full relative bg-cyber-gray/85 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-white/10 shadow-2xl overflow-hidden"
          >
            {/* Neon scanner beams on content area */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-neon-cyan/40 to-transparent" />
            <div className="absolute bottom-0 right-0 w-full h-[1px] bg-gradient-to-r from-transparent via-neon-purple/40 to-transparent" />

            <div className="flex flex-col space-y-6">
              
              {/* Infographic tech header */}
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-neon-cyan animate-pulse shadow-[0_0_8px_rgba(0,255,204,1)]" />
                  <span className="font-mono text-[10px] text-slate-400 uppercase tracking-widest">
                    CYBERNETIC_PILOT_MODULE // STABLE
                  </span>
                </div>
                <Radio className="w-4 h-4 text-neon-blue animate-pulse" />
              </div>

              {/* Large Symbol */}
              <div className="flex items-center gap-4">
                <div className="p-3.5 rounded-2xl bg-gradient-to-br from-neon-blue/15 to-neon-purple/15 border border-neon-blue/30 inline-flex">
                  {pillars[activePillarIdx].iconName === "brain" ? (
                    <Brain className="w-10 h-10 text-neon-blue" />
                  ) : pillars[activePillarIdx].iconName === "zap" ? (
                    <Zap className="w-10 h-10 text-neon-purple" />
                  ) : (
                    <Cpu className="w-10 h-10 text-neon-cyan" />
                  )}
                </div>
                <div>
                  <h4 className="font-display font-black text-lg sm:text-xl text-white tracking-wider">
                    {pillars[activePillarIdx].label}
                  </h4>
                  <span className="font-mono text-[9px] px-2 py-0.5 bg-white/5 border border-white/10 rounded text-neon-cyan tracking-wider">
                    {pillars[activePillarIdx].status}
                  </span>
                </div>
              </div>

              {/* Core statement content */}
              <p className="font-sans text-sm text-slate-300 font-semibold leading-relaxed">
                {pillars[activePillarIdx].coreStatement}
              </p>

              {/* Broad technical details */}
              <p className="font-sans text-xs sm:text-sm text-slate-400 leading-relaxed font-light">
                {pillars[activePillarIdx].extendedText}
              </p>

              {/* Holographic Diagnostic readouts */}
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/5 font-mono text-[10px]">
                <div className="bg-cyber-dark/50 p-2.5 rounded-lg border border-white/5">
                  <span className="text-slate-500 block">ENHANCEMENT COEFFICIENT</span>
                  <span className="text-neon-blue font-bold text-xs mt-1 block">10,000x INTELLECT</span>
                </div>
                <div className="bg-cyber-dark/50 p-2.5 rounded-lg border border-white/5">
                  <span className="text-slate-500 block">CYBER ASSIMILATION RATIO</span>
                  <span className="text-neon-cyan font-bold text-xs mt-1 block">99.8% READY</span>
                </div>
              </div>

              {/* Futuristic Interactive Calibration */}
              <div className="flex items-center justify-between text-[9px] font-mono text-slate-500 pt-2">
                <div className="flex items-center gap-1.5">
                  <Fingerprint className="w-3.5 h-3.5 text-neon-purple" />
                  <span>BIOMETRIC COUPLING REGISTERED</span>
                </div>
                <div className="flex items-center gap-1">
                  <ShieldAlert className="w-3.5 h-3.5 text-neon-cyan" />
                  <span>ENHANCED BY CYBORG X SHIELD</span>
                </div>
              </div>

            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
