import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Send, Terminal, Loader2, Info, CheckCircle2 } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "NEURAL_SYNAPSE_UPGRADE",
    message: "",
    naniteTerms: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitLogs, setSubmitLogs] = useState<string[]>([]);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success">("idle");

  const enhancementOptions = [
    { value: "NEURAL_SYNAPSE_UPGRADE", label: "Cortex Synapse Overlay (Core Chip)" },
    { value: "NANITE_BIO_CELL_SUPPORT", label: "Cellular Nanite Injection" },
    { value: "QUANTUM_CO_PROCESS", label: "Local Quantum Skull Co-Processor" },
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, naniteTerms: e.target.checked }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setSubmitLogs(["PINGING_CYBORG_HARBINGER_NODE...", "VERIFYING_DECENTRALIZED_COGNITION_PATHWAYS..."]);

    // Simulated terminal transmission logs
    setTimeout(() => {
      setSubmitLogs((prev) => [...prev, "ENCRYPTING_MESSAGE_USING_WARP_AES_256..."]);
      setTimeout(() => {
        setSubmitLogs((prev) => [...prev, "TRANSMISSION_STABLE_RECEIVER_READY..."]);
        setTimeout(() => {
          setSubmitLogs((prev) => [...prev, "DEC_SYNC_LINK: COMPLETE."]);
          setIsSubmitting(false);
          setSubmitStatus("success");
        }, 800);
      }, 700);
    }, 600);
  };

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      subject: "NEURAL_SYNAPSE_UPGRADE",
      message: "",
      naniteTerms: false,
    });
    setSubmitStatus("idle");
    setSubmitLogs([]);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">
      
      {/* Background glowing decorations */}
      <div className="absolute top-1/4 left-1/3 w-80 h-80 bg-neon-blue/5 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-neon-purple/5 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse" style={{ animationDelay: "1s" }} />

      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Form specifications details */}
          <div className="md:col-span-5 flex flex-col justify-start text-left space-y-6">
            <div className="space-y-2">
              <span className="font-mono text-xs text-neon-pink tracking-widest uppercase font-semibold">
                // SECURE TRANSMISSION CHANNEL
              </span>
              <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
                CONTACT CYBORG
              </h2>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed font-light">
              Submit your biosecure message coordinates. Whether you're registering for your first Cortex installation or 
              inquiring about tactical bionic enhancements, our neural network officers are standing by.
            </p>

            <div className="space-y-4">
              <div className="bg-cyber-gray/40 border border-white/5 p-4 rounded-xl flex items-start gap-3">
                <Info className="w-5 h-5 text-neon-cyan mt-0.5 shrink-0" />
                <div className="font-mono text-[10px] text-slate-500 uppercase tracking-wide space-y-1">
                  <span className="text-slate-350 block font-bold">LATENCY WARNING</span>
                  <span>Direct physical synapse response averages ~4ms globally across synchronized network towers.</span>
                </div>
              </div>

              <div className="font-mono text-[10px] text-slate-500 space-y-1 block border-l-2 border-neon-purple/40 pl-4 py-1">
                <span className="block text-slate-400">CHANNEL ADDRESSES:</span>
                <span>MESH: secure_transmit@cyborg_x.eth</span>
                <span className="block">TEL: +1 (2050) CYB-CORP</span>
              </div>
            </div>
          </div>

          {/* Right Column: Contact form */}
          <div className="md:col-span-7 bg-cyber-dark/45 border border-white/10 rounded-2xl p-6 sm:p-8 shadow-2xl relative">
            <div className="absolute top-0 right-10 w-24 h-0.5 bg-gradient-to-r from-neon-pink to-transparent" />

            <AnimatePresence mode="wait">
              {submitStatus === "success" ? (
                // Success State Container
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="flex flex-col items-center justify-center py-10 text-center space-y-6"
                >
                  <div className="p-4 rounded-full bg-neon-cyan/10 border border-neon-cyan/35 text-neon-cyan animate-bounce">
                    <CheckCircle2 className="w-12 h-12" />
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-display font-bold text-xl text-white tracking-widest uppercase">
                      TRANSMISSION SUCCESSFUL
                    </h3>
                    <p className="max-w-md text-xs sm:text-sm text-slate-400 leading-relaxed">
                      Your biosecure digital coordinate query was decrypted and registered inside standard harbinger node databases! Your direct response coordinates are being simulated.
                    </p>
                  </div>

                  {/* Submit Logs History playback info */}
                  <div className="w-full bg-cyber-dark/90 p-4 rounded-lg text-left font-mono text-[9px] text-neon-cyan border border-white/10 max-w-sm">
                    <span className="text-slate-500 block mb-1">DECRYPTED SYNC LOGS:</span>
                    {submitLogs.map((log, idx) => (
                      <div key={idx} className="flex gap-1.5 items-center">
                        <Terminal className="w-3 h-3 text-slate-600" />
                        <span>{log}</span>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={resetForm}
                    className="font-mono text-[10px] tracking-widest font-bold text-neon-cyan hover:text-white uppercase underline cursor-pointer select-none"
                  >
                    Open New Secure Transmission Link
                  </button>
                </motion.div>
              ) : (
                // Formal Input Fields Form
                <motion.form
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-5"
                >
                  {/* Name Input */}
                  <div className="flex flex-col text-left space-y-1.5">
                    <label className="font-mono text-[10px] text-slate-400 tracking-wider uppercase font-semibold">
                      Your Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="e.g. Neo Anderson"
                      className="w-full px-4 py-3 rounded-lg bg-cyber-dark/70 text-slate-100 border border-white/10 focus:border-neon-cyan focus:outline-none focus:ring-1 focus:ring-neon-cyan font-sans text-sm transition-all shadow-inner"
                    />
                  </div>

                  {/* Email Input */}
                  <div className="flex flex-col text-left space-y-1.5">
                    <label className="font-mono text-[10px] text-slate-400 tracking-wider uppercase font-semibold">
                      Secure Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="e.g. pilot@zion-node.com"
                      className="w-full px-4 py-3 rounded-lg bg-cyber-dark/70 text-slate-100 border border-white/10 focus:border-neon-blue focus:outline-none focus:ring-1 focus:ring-neon-blue font-sans text-sm transition-all shadow-inner"
                    />
                  </div>

                  {/* Subject Enhancement Option Dropdown */}
                  <div className="flex flex-col text-left space-y-1.5">
                    <label className="font-mono text-[10px] text-slate-400 tracking-wider uppercase font-semibold">
                      Designated Inquiry Type
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-3 py-3 rounded-lg bg-cyber-dark text-slate-100 border border-white/10 focus:border-neon-purple focus:outline-none font-mono text-xs transition-style shadow-inner cursor-pointer"
                    >
                      {enhancementOptions.map((opt) => (
                        <option className="bg-cyber-dark" key={opt.value} value={opt.value}>
                          {opt.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message Input TextArea */}
                  <div className="flex flex-col text-left space-y-1.5">
                    <label className="font-mono text-[10px] text-slate-400 tracking-wider uppercase font-semibold">
                      Message Specifications
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Explain your biological or mechanical integration plans..."
                      className="w-full px-4 py-3 rounded-lg bg-cyber-dark/70 text-slate-100 border border-white/10 focus:border-neon-cyan focus:outline-none focus:ring-1 focus:ring-neon-cyan font-sans text-sm transition-all shadow-inner"
                    />
                  </div>

                  {/* Custom Cyber Nano Terms Toggle */}
                  <div className="flex items-start gap-2.5 text-left py-1 select-none">
                    <input
                      type="checkbox"
                      id="naniteTerms"
                      name="naniteTerms"
                      checked={formData.naniteTerms}
                      onChange={handleCheckboxChange}
                      className="mt-1 w-4 h-4 rounded text-neon-purple border-white/10 bg-cyber-dark accent-neon-purple focus:ring-0 focus:ring-offset-0 cursor-pointer"
                    />
                    <label htmlFor="naniteTerms" className="font-mono text-[9px] text-slate-500 uppercase cursor-pointer">
                      I AUTHORIZE CYBORG X NETWORKS TO SANITIZE BIOMETRIC TRANSMISSIONS USING SECURED HARDWARE TOKENS.
                    </label>
                  </div>

                  {/* Neon Glow Submit Trigger */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full relative inline-flex items-center justify-center p-3.5 font-mono text-xs font-bold tracking-widest text-white rounded bg-gradient-to-r from-neon-blue via-neon-cyan to-neon-purple hover:opacity-95 focus:outline-none hover:shadow-[0_0_20px_rgba(0,186,227,0.4)] cursor-pointer transition-all uppercase"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <Loader2 className="w-4.5 h-4.5 animate-spin" />
                        SYNCING LINK...
                      </span>
                    ) : (
                      <span className="flex items-center gap-1.5">
                        <Send className="w-4 h-4" />
                        SUBMIT TRANSMISSION SECURELY
                      </span>
                    )}
                  </button>

                  {/* Active logs playback */}
                  {isSubmitting && (
                    <div className="w-full bg-cyber-dark/95 border border-white/5 rounded-lg p-3 text-left font-mono text-[9px] text-neon-cyan space-y-1 mt-3">
                      {submitLogs.map((log, index) => (
                        <div key={index} className="flex gap-1 items-center">
                          <span className="w-1 h-1 bg-neon-cyan rounded-full animate-ping" />
                          <span>{log}</span>
                        </div>
                      ))}
                    </div>
                  )}

                </motion.form>
              )}
            </AnimatePresence>
          </div>

        </div>
      </div>

    </section>
  );
}
