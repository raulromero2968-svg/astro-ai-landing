import { useState, useEffect, useRef } from "react";
import { X, Sparkles, Wand2 } from "lucide-react";

export default function SecretFairyHelper() {
  const [showFairy, setShowFairy] = useState(false);
  const tapCountRef = useRef(0);
  const lastTapTimeRef = useRef(0);
  const TAP_TIMEOUT = 1000; // 1 second between taps
  const REQUIRED_TAPS = 5;

  useEffect(() => {
    const handleTap = (e: MouseEvent | TouchEvent) => {
      const now = Date.now();
      
      // Reset if more than 1 second between taps
      if (now - lastTapTimeRef.current > TAP_TIMEOUT) {
        tapCountRef.current = 1;
      } else {
        tapCountRef.current += 1;
        
        // Show fairy on 5th tap
        if (tapCountRef.current >= REQUIRED_TAPS) {
          setShowFairy(true);
          tapCountRef.current = 0;
          
          // Optional: Add haptic feedback on mobile
          if ('vibrate' in navigator) {
            navigator.vibrate([50, 100, 50]);
          }
        }
      }
      
      lastTapTimeRef.current = now;
    };

    // Listen for both click (desktop) and touchend (mobile)
    document.addEventListener('click', handleTap);
    document.addEventListener('touchend', handleTap);
    
    return () => {
      document.removeEventListener('click', handleTap);
      document.removeEventListener('touchend', handleTap);
    };
  }, []);

  if (!showFairy) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 animate-in fade-in duration-300"
        onClick={() => setShowFairy(false)}
      />
      
      {/* Fairy Helper Card */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
        <div 
          className="relative pointer-events-auto animate-in zoom-in-95 slide-in-from-bottom-4 duration-500"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Magical glow effect */}
          <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 blur-3xl animate-pulse" />
          
          {/* Fairy card */}
          <div className="relative bg-gradient-to-br from-background/98 to-background/95 backdrop-blur-xl border-2 border-primary/40 rounded-3xl p-8 shadow-2xl max-w-md w-full">
            {/* Close button */}
            <button
              onClick={() => setShowFairy(false)}
              className="absolute top-4 right-4 p-2 hover:bg-primary/10 rounded-full transition-colors group"
              aria-label="Close fairy helper"
            >
              <X className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </button>

            {/* Fairy image with sparkles */}
            <div className="flex justify-center mb-6">
              <div className="relative">
                {/* Glow behind fairy */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent blur-2xl opacity-30 animate-pulse" />
                
                <img 
                  src="/fairy-helper.png" 
                  alt="Fairy Helper" 
                  className="relative w-32 h-32 object-contain animate-bounce-slow drop-shadow-2xl"
                />
                
                {/* Floating sparkles */}
                <Sparkles className="absolute -top-2 -right-2 w-8 h-8 text-primary animate-pulse" />
                <Wand2 className="absolute -bottom-2 -left-2 w-6 h-6 text-accent animate-pulse" style={{ animationDelay: '0.5s' }} />
              </div>
            </div>

            {/* Fairy message */}
            <div className="text-center space-y-4">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient">
                ✨ You Found Me! ✨
              </h3>
              
              <p className="text-base text-muted-foreground leading-relaxed">
                Hello, curious explorer! I'm your magical guide through Astro AI. You discovered this secret by tapping 5 times quickly—well done! 🎉
              </p>
              
              {/* Fun facts card */}
              <div className="bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 rounded-xl p-4 text-left space-y-2">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-primary" />
                  <p className="font-semibold text-primary text-sm">Did you know?</p>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  This site was crafted with Nintendo-level polish and a mission to serve the public good. Every pixel has a purpose, every animation tells a story, and every feature is designed to help you reclaim your time through automation.
                </p>
              </div>

              {/* Magic tips */}
              <div className="bg-gradient-to-br from-accent/10 to-primary/10 border border-accent/20 rounded-xl p-4 text-left space-y-2">
                <div className="flex items-center gap-2">
                  <Wand2 className="w-4 h-4 text-accent" />
                  <p className="font-semibold text-accent text-sm">Fairy Tip</p>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Explore the site to learn about our vision for government-grade automation that's accessible to everyone. No product to sell yet—just a mission and a plan to make it real.
                </p>
              </div>

              {/* Action buttons */}
              <div className="flex flex-col gap-3 pt-2">
                <button
                  onClick={() => {
                    const waitlistSection = document.getElementById('waitlist');
                    if (waitlistSection) {
                      waitlistSection.scrollIntoView({ behavior: 'smooth' });
                      setShowFairy(false);
                    }
                  }}
                  className="w-full bg-gradient-to-r from-primary to-accent text-white py-3 px-6 rounded-xl hover:opacity-90 transition-all font-semibold text-sm shadow-lg shadow-primary/20 hover:shadow-primary/30 hover:scale-105 duration-200"
                >
                  Join the Waitlist ✨
                </button>
                
                <button
                  onClick={() => setShowFairy(false)}
                  className="w-full border border-primary/30 text-primary py-2 px-6 rounded-xl hover:bg-primary/10 transition-all font-medium text-sm"
                >
                  Keep Exploring
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

