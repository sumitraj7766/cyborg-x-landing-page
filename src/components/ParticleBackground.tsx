import { useEffect, useRef } from "react";
import { Theme } from "../types";

interface ParticleBackgroundProps {
  theme: Theme;
}

export default function ParticleBackground({ theme }: ParticleBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      alpha: number;
    }> = [];

    const particleCount = Math.min(60, Math.floor((width * height) / 25000));
    const connectionDistance = 120;
    const mouse = { x: -1000, y: -1000, radius: 180 };

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 2 + 1,
        alpha: Math.random() * 0.5 + 0.3,
      });
    }

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Background gradient based on theme
      const bgGrad = ctx.createRadialGradient(
        width / 2,
        height / 2,
        10,
        width / 2,
        height / 2,
        Math.max(width, height)
      );

      if (theme === "dark") {
        bgGrad.addColorStop(0, "#0c0d21");
        bgGrad.addColorStop(1, "#04040a");
      } else {
        bgGrad.addColorStop(0, "#fafbff");
        bgGrad.addColorStop(1, "#f0f2fcf");
      }
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, width, height);

      const colorBase = theme === "dark" ? "0, 240, 255" : "99, 102, 241";
      const colorSecondary = theme === "dark" ? "189, 0, 255" : "139, 92, 246";

      // Update and draw particles
      particles.forEach((p) => {
        // Move
        p.x += p.vx;
        p.y += p.vy;

        // Bounce borders with some padding
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        // Mouse attraction/repulsion slightly
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.hypot(dx, dy);
        if (dist < mouse.radius) {
          const force = (mouse.radius - dist) / mouse.radius;
          p.x -= (dx / dist) * force * 1.5;
          p.y -= (dy / dist) * force * 1.5;
        }

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        const useSecondary = p.alpha > 0.6;
        ctx.fillStyle = `rgba(${useSecondary ? colorSecondary : colorBase}, ${p.alpha})`;
        ctx.fill();
      });

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.hypot(dx, dy);

          if (dist < connectionDistance) {
            const alpha = (1 - dist / connectionDistance) * 0.18;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);

            // Neon cyan-purple gradient connecting lines
            const grad = ctx.createLinearGradient(p1.x, p1.y, p2.x, p2.y);
            grad.addColorStop(0, `rgba(${colorBase}, ${alpha})`);
            grad.addColorStop(1, `rgba(${colorSecondary}, ${alpha})`);

            ctx.strokeStyle = grad;
            ctx.lineWidth = 0.85;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full -z-10 pointer-events-none transition-colors duration-500"
    />
  );
}
