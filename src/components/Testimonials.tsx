import { useState } from "react";
import { motion } from "motion/react";
import { TestimonialItem } from "../types";
import { Star, Quote, ShieldCheck, ArrowLeft, ArrowRight } from "lucide-react";

export default function Testimonials() {
  const [activeIdx, setActiveIdx] = useState(0);

  const testimonials: TestimonialItem[] = [
    {
      id: "aria",
      name: "Aria Vance",
      role: "Neural Network Architect",
      quote: "The cognitive transmission throughput is mind-blowing. Converting algorithms into localized parallel thoughts takes my creative work format to places I didn't think existed. Silent math calculation is now seamless.",
      rating: 5,
      avatarSeed: "aria",
    },
    {
      id: "rex",
      name: "Rex Thorne",
      role: "Exoskeleton Apex Controller",
      quote: "Physiological cellular integration completely changed raw athletic recovery metrics. Cellular ruptures that previously took months of physical therapy heal under continuous nanite operations in simple, painless minutes.",
      rating: 5,
      avatarSeed: "rex",
    },
    {
      id: "zephyr",
      name: "Dr. Zephyr Wu",
      role: "Quantum Cryptographic Officer",
      quote: "Quantum thought duality changed standard mathematical analysis forever. Running complex multi-variable parallel decryption scripts silently in localized dry-state microchips allows safe systems computing without server loads.",
      rating: 5,
      avatarSeed: "zephyr",
    },
  ];

  const handlePrev = () => {
    setActiveIdx((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIdx((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="testimonials" className="py-20 sm:py-28 relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Background neon elements */}
      <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-neon-purple/5 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Title block */}
      <div className="flex flex-col items-center text-center space-y-4 mb-20">
        <span className="font-mono text-xs text-neon-blue tracking-widest uppercase font-semibold">
          // SYNAPSE SYNCED VERIFICATIONS
        </span>
        <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
          CYBORG X EXPERIENCES
        </h2>
        <p className="max-w-xl text-slate-400 text-sm sm:text-base font-light">
          Real human-machine integration case studies. Explore telemetry testimonials written by active, fully augmented 
          entities running the Cyborg X chip.
        </p>
      </div>

      {/* Desktop masonry grid + Carousel for focus */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto items-stretch">
        {testimonials.map((test, idx) => {
          const isFocused = idx === activeIdx;

          return (
            <motion.div
              layout
              key={test.id}
              onClick={() => setActiveIdx(idx)}
              className={`group flex flex-col justify-between p-6 sm:p-8 rounded-2xl bg-cyber-gray/40 border transition-all duration-300 relative cursor-pointer ${
                isFocused
                  ? "border-neon-blue bg-cyber-gray/95 shadow-[0_0_25px_rgba(0,240,255,0.15)] scale-[1.02]"
                  : "border-white/5 hover:border-white/10 hover:bg-cyber-gray/30"
              }`}
            >
              {/* Corner tech indicators for focused elements */}
              {isFocused && (
                <>
                  <div className="absolute top-3 left-3 w-3 h-3 border-t border-l border-neon-blue" />
                  <div className="absolute bottom-3 right-3 w-3 h-3 border-b border-r border-neon-blue" />
                </>
              )}

              <div>
                {/* Five Rating Stars */}
                <div className="flex gap-1 mb-5">
                  {[...Array(test.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-neon-cyan text-neon-cyan" />
                  ))}
                </div>

                {/* Testimonial body */}
                <Quote className="w-8 h-8 text-slate-700 mb-2 rotate-180" />
                <p className="font-sans text-xs sm:text-sm text-slate-350 leading-relaxed font-light italic mb-6">
                  "{test.quote}"
                </p>
              </div>

              {/* Augmented entity details */}
              <div className="flex items-center gap-3.5 pt-4 border-t border-white/5 mt-6">
                {/* Simulated high-tech custom avatar */}
                <div className="relative">
                  <div className="w-10 h-10 rounded-full border border-white/20 bg-cyber-dark overflow-hidden flex items-center justify-center">
                    <img
                      src={`https://api.dicebear.com/7.x/identicon/svg?seed=${test.avatarSeed}`}
                      alt={test.name}
                      className="w-8 h-8 opacity-82"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  {/* Verified Badge Icon */}
                  <div className="absolute -bottom-1 -right-1 bg-cyber-dark p-0.5 rounded-full border border-white/5">
                    <ShieldCheck className="w-3 h-3 text-neon-cyan" />
                  </div>
                </div>

                <div className="text-left font-mono">
                  <h4 className="font-display font-medium text-xs text-white uppercase tracking-wider">
                    {test.name}
                  </h4>
                  <span className="text-[9px] text-slate-500 uppercase tracking-widest mt-0.5 block font-light">
                    {test.role}
                  </span>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Small selector circles for Mobile */}
      <div className="flex gap-2 justify-center items-center mt-10 md:hidden">
        {testimonials.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setActiveIdx(idx)}
            className={`w-2.5 h-2.5 rounded-full transition-all cursor-pointer ${
              idx === activeIdx ? "bg-neon-blue w-6" : "bg-white/20"
            }`}
          />
        ))}
      </div>

    </section>
  );
}
