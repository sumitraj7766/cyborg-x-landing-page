import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Cpu, Wifi, Activity, ShieldCheck } from "lucide-react";

interface AIOrbProps {
  theme: "dark" | "light";
}

export default function AIOrb({ theme }: AIOrbProps) {
  const [syncState, setSyncState] = useState<"idle" | "syncing" | "ready">("idle");
  const [pulseCount, setPulseCount] = useState(0);
  const [metrics, setMetrics] = useState({
    neuralLoad: "42.8%",
    synapseVelocity: "8.9 PFLOPS",
    encryptionIndex: "99.98%",
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics({
        neuralLoad: `${(40 + Math.random() * 15).toFixed(1)}%`,
        synapseVelocity: `${(8.4 + Math.random() * 1.5).toFixed(2)} PFLOPS`,
        encryptionIndex: `${(99.95 + Math.random() * 0.04).toFixed(3)}%`,
      });
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const triggerSync = () => {
    if (syncState !== "idle") return;
    setSyncState("syncing");
    setTimeout(() => {
      setSyncState("ready");
      setPulseCount((prev) => prev + 1);
      setTimeout(() => {
        setSyncState("idle");
      }, 2000);
    }, 1800);
  };

  const ringColor = theme === "dark" ? "border-neon-blue/30" : "border-indigo-500/20";
  const glowShadow = theme === "dark" 
    ? "shadow-[0_0_40px_rgba(0,240,255,0.3)] border-neon-blue/40" 
    : "shadow-[0_0_30px_rgba(99,102,241,0.25)] border-indigo-500/30";

  return (
    <div id="ai-orb-container" className="relative flex flex-col items-center justify-center p-6 select-none">
      {/* Dynamic scan line overlay */}
      <div className="absolute inset-0 pointer-events-none rounded-3xl overflow-hidden">
        <div className="w-full h-1 bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent animate-cyber-scan" />
      </div>

      <div className="relative w-72 h-72 flex items-center justify-center">
        {/* Outer Tech Ring 1 (Clockwise) */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className={`absolute w-64 h-64 border-2 border-dashed rounded-full ${ringColor} flex items-center justify-center`}
        >
          {/* Small orbital node */}
          <div className="absolute -top-1.5 left-1/2 -ml-1.5 w-3 h-3 bg-neon-cyan rounded-full shadow-[0_0_10px_rgba(0,255,204,0.8)]" />
        </motion.div>

        {/* Outer Tech Ring 2 (Counter-Clockwise) */}
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className={`absolute w-56 h-56 border border-double border-spacing-2 rounded-full ${ringColor} opacity-70`}
        >
          {/* Small secondary orbital node */}
          <div className="absolute -bottom-1.5 left-1/3 w-2 h-2 bg-neon-purple rounded-full shadow-[0_0_10px_rgba(189,0,255,0.8)]" />
        </motion.div>

        {/* Tech Ring 3 (Intermittent dashes, rotating slowly) */}
        <motion.div
          animate={{ rotate: 180 }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute w-44 h-44 border border-teal-500/20 border-r-neon-cyan border-l-neon-purple rounded-full"
        />

        {/* Glowing Central Micro-Core */}
        <motion.div
          onClick={triggerSync}
          whileHover={{ scale: 1.05 }}
          className={`relative w-36 h-36 rounded-full bg-radial from-cyber-dark/95 to-cyber-dark border flex flex-col items-center justify-center cursor-pointer transition-all ${glowShadow}`}
        >
          {/* Active Orb Pulses */}
          {syncState === "syncing" && (
            <motion.div
              animate={{ scale: [1, 1.8], opacity: [0.8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeOut" }}
              className="absolute inset-0 bg-neon-blue rounded-full -z-10"
            />
          )}

          <div className="flex flex-col items-center justify-center text-center">
            {/* Pulsing Core light */}
            <motion.div
              animate={{
                scale: syncState === "syncing" ? [1, 1.3, 1] : [1, 1.15, 1],
                backgroundColor: syncState === "syncing" 
                  ? ["#bd00ff", "#00f0ff", "#bd00ff"] 
                  : ["#00f0ff", "#00f5ff", "#00f0ff"],
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-10 h-10 rounded-full shadow-[0_0_20px_rgba(0,240,255,0.8)] flex items-center justify-center"
            >
              <Cpu className="w-5 h-5 text-cyber-dark" />
            </motion.div>

            <span className="font-mono text-[10px] tracking-wider mt-3 text-secondary uppercase opacity-70">
              {syncState === "syncing" ? "Syncing..." : syncState === "ready" ? "Link Established" : "Neural Core"}
            </span>

            <span className="font-mono text-xs font-semibold mt-1 tracking-widest text-glow-blue uppercase text-neon-blue">
              {syncState === "syncing" ? "0x3F9A8" : syncState === "ready" ? "READY" : "CYB - CORE 01"}
            </span>
          </div>
        </motion.div>

        {/* Technical Data Tags Floating Around */}
        <div className="absolute -top-4 -left-4 bg-cyber-dark/80 backdrop-blur-md border border-white/5 p-2 rounded-lg text-[10px] font-mono text-neon-cyan neon-shadow-cyan">
          <div className="flex items-center gap-1">
            <Activity className="w-3 h-3 text-neon-cyan animate-pulse" />
            <span>LA: {metrics.neuralLoad}</span>
          </div>
        </div>

        <div className="absolute top-1/2 -right-12 -translate-y-1/2 bg-cyber-dark/80 backdrop-blur-md border border-white/5 p-2 rounded-lg text-[10px] font-mono text-neon-blue neon-shadow-blue">
          <div className="flex items-center gap-1">
            <Cpu className="w-3 h-3 text-neon-blue" />
            <span>V: {metrics.synapseVelocity}</span>
          </div>
        </div>

        <div className="absolute -bottom-4 -left-8 bg-cyber-dark/80 backdrop-blur-md border border-white/5 p-2 rounded-lg text-[10px] font-mono text-neon-purple neon-shadow-purple">
          <div className="flex items-center gap-1">
            <ShieldCheck className="w-3 h-3 text-neon-purple" />
            <span>ENC: {metrics.encryptionIndex}</span>
          </div>
        </div>
      </div>

      {/* Interact CTA Sub-Bar */}
      <div className="mt-4 text-center">
        <p className="text-glow-blue text-[11px] font-mono px-3 py-1 bg-neon-blue/10 border border-neon-blue/30 rounded-full cursor-pointer hover:bg-neon-blue/20 transition-all uppercase tracking-wider" onClick={triggerSync}>
          {syncState === "idle" ? "⚡ TAP CORE TO GENERATE SYNAPSE PULSE" : "INTEGRATING CYBERNETIC FLOW..."}
        </p>
        {pulseCount > 0 && (
          <p className="text-secondary opacity-65 text-[10px] font-mono mt-1.5 uppercase">
            Synchronized Neural Nodes: {pulseCount} (Efficiency +{(pulseCount * 1.5).toFixed(1)}%)
          </p>
        )}
      </div>
    </div>
  );
}
