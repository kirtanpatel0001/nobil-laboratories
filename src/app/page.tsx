'use client';

import { useState, useEffect, MouseEvent } from 'react';

interface Ripple {
  x: number;
  y: number;
  id: number;
}

export default function LuxuryComingSoon() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [ripples, setRipples] = useState<Ripple[]>([]);

  // Countdown Logic ending Feb 24, 2026
  useEffect(() => {
    const targetDate = new Date('2026-02-24T00:00:00').getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(interval);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Elegant Click Ripple Interaction
  const handleBackgroundClick = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const newRipple = { x, y, id: Date.now() };
    setRipples((prev) => [...prev, newRipple]);

    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
    }, 1500); // Slightly longer for a softer fade
  };

  return (
    <div 
      className="relative min-h-screen flex flex-col items-center justify-center bg-[#050505] text-white overflow-hidden cursor-crosshair selection:bg-amber-900/40"
      onClick={handleBackgroundClick}
    >
      {/* Soft, expanding gold ring click effect */}
      {ripples.map((ripple) => (
        <span 
          key={ripple.id} 
          className="absolute border border-amber-200/30 rounded-full pointer-events-none animate-ping" 
          style={{ 
            top: ripple.y, 
            left: ripple.x, 
            width: '50px', 
            height: '50px', 
            transform: 'translate(-50%, -50%)',
            animationDuration: '1.5s',
            animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)'
          }} 
        />
      ))}

      {/* Subtle background gradient to prevent total flatness */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.03)_0%,transparent_60%)] pointer-events-none" />

      {/* Minimalist Content Container */}
      <div className="z-10 text-center space-y-12 p-8 w-full max-w-4xl">
        
        <div className="space-y-6">
          <p className="text-xs md:text-sm tracking-[0.4em] uppercase text-amber-200/60 font-light">
            An Exclusive Experience
          </p>
          <h1 className="text-5xl md:text-8xl font-serif tracking-wide text-transparent bg-clip-text bg-gradient-to-b from-white via-neutral-200 to-neutral-500 pb-2">
            Coming Soon
          </h1>
          <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-amber-200/40 to-transparent mx-auto mt-8" />
        </div>

        {/* Refined Countdown Timer */}
        <div className="flex gap-6 md:gap-12 justify-center pt-8">
          {Object.entries(timeLeft).map(([unit, value]) => (
            <div key={unit} className="flex flex-col items-center min-w-[4rem]">
              <span className="text-4xl md:text-6xl font-serif font-light text-neutral-200">
                {value.toString().padStart(2, '0')}
              </span>
              <span className="text-[9px] md:text-[11px] uppercase tracking-[0.3em] text-neutral-500 mt-4">
                {unit}
              </span>
            </div>
          ))}
        </div>

      </div>
      
    </div>
  );
}