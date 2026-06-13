import { useState, useEffect, useRef } from "react";
import { motion } from "motion/react";
import { StatItem } from "../types";
import { Percent, Cpu, Activity, Server, Radio } from "lucide-react";

export default function Statistics() {
  const [stats, setStats] = useState<Array<StatItem & { currentValue: number }>>([
    {
      targetValue: 99.9,
      decimals: 1,
      suffix: "%",
      label: "Decision Accuracy",
      description: "Sub-nanosecond AI synaptic decisions without biological errors.",
      color: "cyan",
      currentValue: 0,
    },
    {
      targetValue: 10,
      suffix: "M+",
      label: "Neural Connections",
      description: "Decentralized bio-coupling paths verified across active arrays.",
      color: "blue",
      currentValue: 0,
    },
    {
      targetValue: 500,
      suffix: "K+",
      label: "AI Devices",
      description: "Fully-synchronized, hardware-encrypted units computing in sync.",
      color: "purple",
      currentValue: 0,
    },
    {
      targetValue: 24,
      suffix: "/7 Network",
      label: "Active Intelligence Network",
      description: "Around the clock uninterrupted mental synchronicity.",
      color: "pink",
      currentValue: 0,
    },
  ]);

  const containerRef = useRef<HTMLDivElement | null>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  useEffect(() => {
    if (!hasAnimated) return;

    const duration = 2000; // 2 seconds animation
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Ease out quadratic
      const easeProgress = progress * (2 - progress);

      setStats((prevStats) =>
        prevStats.map((item) => {
          const val = easeProgress * item.targetValue;
          return {
            ...item,
            currentValue: Number(val.toFixed(item.decimals || 0)),
          };
        })
      );

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [hasAnimated]);

  const getColorStyle = (color: string) => {
    switch (color) {
      case "cyan":
        return "text-neon-cyan text-glow-cyan bg-neon-cyan/5 border-neon-cyan/20";
      case "purple":
        return "text-neon-purple text-glow-purple bg-neon-purple/5 border-neon-purple/20";
      case "pink":
        return "text-neon-pink text-glow-pink bg-neon-pink/5 border-neon-pink/20";
      case "blue":
      default:
        return "text-neon-blue text-glow-blue bg-neon-blue/5 border-neon-blue/20";
    }
  };

  const getBorderLight = (color: string) => {
    switch (color) {
      case "cyan":
        return "hover:border-neon-cyan/45 hover:shadow-[0_0_15px_rgba(0,255,204,0.1)]";
      case "purple":
        return "hover:border-neon-purple/45 hover:shadow-[0_0_15px_rgba(189,0,255,0.1)]";
      case "pink":
        return "hover:border-neon-pink/45 hover:shadow-[0_0_15px_rgba(255,0,85,0.1)]";
      case "blue":
      default:
        return "hover:border-neon-blue/45 hover:shadow-[0_0_15px_rgba(0,240,255,0.1)]";
    }
  };

  return (
    <section
      id="stats"
      ref={containerRef}
      className="py-16 sm:py-24 relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
    >
      {/* Background abstract scanning line */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent pointer-events-none" />

      {/* Grid wrapper */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
        {stats.map((stat, idx) => (
          <div
            key={idx}
            className={`flex flex-col justify-between p-6 sm:p-8 rounded-2xl bg-cyber-dark/45 border border-white/5 transition-all duration-300 ${getBorderLight(
              stat.color
            )}`}
          >
            <div>
              {/* Stat numerical display */}
              <div className="flex items-baseline mb-4">
                <span className={`font-mono text-4xl sm:text-5xl font-black ${getColorStyle(stat.color)}`}>
                  {stat.currentValue}
                </span>
                <span className={`font-mono text-2xl sm:text-3xl font-bold ml-1 ${getColorStyle(stat.color)}`}>
                  {stat.suffix}
                </span>
              </div>

              {/* Title & metadata */}
              <h3 className="font-display font-semibold text-sm sm:text-base text-white tracking-wider mb-2 uppercase">
                {stat.label}
              </h3>

              <p className="font-sans text-xs text-slate-400 leading-relaxed font-light">
                {stat.description}
              </p>
            </div>

            {/* Bottom mini telemetry readouts representing hardware status */}
            <div className="pt-4 border-t border-white/5 mt-6 flex items-center justify-between text-[9px] font-mono text-slate-500">
              <span>METRIC_ID: 0x{((idx + 1) * 231).toString(16).toUpperCase()}</span>
              <span className="flex items-center gap-1">
                <Radio className="w-3 h-3 animate-pulse text-neon-cyan" />
                SECURE
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
