import { useState, useEffect, useRef } from "react";
import { X, Sparkles } from "lucide-react";

export default function SecretFairyHelper() {
  const [showFairy, setShowFairy] = useState(false);
  const [position, setPosition] = useState({ x: 20, y: 100 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const tapCountRef = useRef(0);
  const lastTapTimeRef = useRef(0);
  const TAP_TIMEOUT = 1000;
  const REQUIRED_TAPS = 5;

  useEffect(() => {
    const handleTap = (e: MouseEvent | TouchEvent) => {
      const now = Date.now();
      
      if (now - lastTapTimeRef.current > TAP_TIMEOUT) {
        tapCountRef.current = 1;
      } else {
        tapCountRef.current += 1;
        
        if (tapCountRef.current >= REQUIRED_TAPS) {
          setShowFairy(true);
          tapCountRef.current = 0;
          
          if ('vibrate' in navigator) {
            navigator.vibrate([50, 100, 50]);
          }
        }
      }
      
      lastTapTimeRef.current = now;
    };

    document.addEventListener('click', handleTap);
    document.addEventListener('touchend', handleTap);
    
    return () => {
      document.removeEventListener('click', handleTap);
      document.removeEventListener('touchend', handleTap);
    };
  }, []);

  // Dragging logic
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setDragOffset({
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    });
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    const touch = e.touches[0];
    setIsDragging(true);
    setDragOffset({
      x: touch.clientX - position.x,
      y: touch.clientY - position.y,
    });
  };

  useEffect(() => {
    const handleMove = (e: MouseEvent | TouchEvent) => {
      if (!isDragging) return;

      const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
      const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;

      setPosition({
        x: clientX - dragOffset.x,
        y: clientY - dragOffset.y,
      });
    };

    const handleEnd = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      document.addEventListener('mousemove', handleMove);
      document.addEventListener('touchmove', handleMove);
      document.addEventListener('mouseup', handleEnd);
      document.addEventListener('touchend', handleEnd);
    }

    return () => {
      document.removeEventListener('mousemove', handleMove);
      document.removeEventListener('touchmove', handleMove);
      document.removeEventListener('mouseup', handleEnd);
      document.removeEventListener('touchend', handleEnd);
    };
  }, [isDragging, dragOffset]);

  if (!showFairy) return null;

  return (
    <div
      className="fixed z-50 max-w-sm"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        cursor: isDragging ? 'grabbing' : 'grab',
      }}
    >
      {/* Floating Fairy Chat Bubble */}
      <div className="relative animate-in fade-in slide-in-from-bottom-4 duration-500">
        {/* Glow effect */}
        <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 to-accent/20 blur-xl opacity-50 rounded-2xl pointer-events-none" />
        
        {/* Main chat bubble */}
        <div 
          className="relative bg-gradient-to-br from-background/98 to-background/95 backdrop-blur-xl border-2 border-primary/40 rounded-2xl shadow-2xl overflow-hidden"
          onMouseDown={handleMouseDown}
          onTouchStart={handleTouchStart}
        >
          {/* Header with fairy and close button */}
          <div className="flex items-center gap-3 p-4 border-b border-primary/20 bg-gradient-to-r from-primary/5 to-accent/5">
            {/* Fairy icon */}
            <div className="relative flex-shrink-0">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent blur-md opacity-40 rounded-full animate-pulse" />
              <img 
                src="/fairy-helper.png" 
                alt="Fairy" 
                className="relative w-10 h-10 object-contain"
              />
            </div>
            
            {/* Title */}
            <div className="flex-1">
              <h3 className="text-sm font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-primary" />
                Hey! Listen!
              </h3>
            </div>
            
            {/* Close button */}
            <button
              onClick={() => setShowFairy(false)}
              className="flex-shrink-0 p-1.5 hover:bg-primary/10 rounded-lg transition-colors"
              aria-label="Close"
            >
              <X className="w-4 h-4 text-muted-foreground hover:text-primary transition-colors" />
            </button>
          </div>

          {/* Content */}
          <div className="p-4 space-y-3 max-h-96 overflow-y-auto">
            {/* Main message */}
            <p className="text-sm text-muted-foreground leading-relaxed">
              You found the secret! I'm your guide through Astro AI. Tap around to explore the site and learn about our vision.
            </p>
            
            {/* Info card */}
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 rounded-xl p-3 space-y-2">
              <div className="flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                <p className="font-semibold text-primary text-xs">About This Site</p>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Built with meticulous attention to detail and a mission to serve the public good. Every feature is designed to help you reclaim your time through automation.
              </p>
            </div>

            {/* Tip card */}
            <div className="bg-gradient-to-br from-accent/10 to-primary/10 border border-accent/20 rounded-xl p-3 space-y-2">
              <div className="flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-accent flex-shrink-0" />
                <p className="font-semibold text-accent text-xs">Quick Tip</p>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Explore the site to learn about government-grade automation that's accessible to everyone. No product to sell yet—just a mission and a plan.
              </p>
            </div>

            {/* Action buttons */}
            <div className="flex flex-col gap-2 pt-2">
              <button
                onClick={() => {
                  const waitlistSection = document.getElementById('waitlist');
                  if (waitlistSection) {
                    waitlistSection.scrollIntoView({ behavior: 'smooth' });
                    setShowFairy(false);
                  }
                }}
                className="w-full bg-gradient-to-r from-primary to-accent text-white py-2 px-4 rounded-lg hover:opacity-90 transition-all font-medium text-xs shadow-lg"
              >
                Join the Waitlist
              </button>
              
              <button
                onClick={() => setShowFairy(false)}
                className="w-full border border-primary/30 text-primary py-2 px-4 rounded-lg hover:bg-primary/10 transition-all font-medium text-xs"
              >
                Keep Exploring
              </button>
            </div>
          </div>

          {/* Drag hint */}
          <div className="px-4 py-2 bg-gradient-to-r from-primary/5 to-accent/5 border-t border-primary/10">
            <p className="text-xs text-center text-muted-foreground/60">
              Drag me around! ✨
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

