import { useState, useEffect, useRef } from "react";
import { X, Send } from "lucide-react";

export default function SecretFairyHelper() {
  const [showFairy, setShowFairy] = useState(false);
  const [position, setPosition] = useState({ x: 20, y: 100 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [showDust, setShowDust] = useState(false);
  const [userInput, setUserInput] = useState("");
  const [showStory, setShowStory] = useState(false);
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
          setShowDust(true);
          tapCountRef.current = 0;
          
          setTimeout(() => setShowDust(false), 1500);
          
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

  const handleMouseDown = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).tagName === 'INPUT' || (e.target as HTMLElement).tagName === 'BUTTON') {
      return;
    }
    e.preventDefault();
    setIsDragging(true);
    setDragOffset({
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    });
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    if ((e.target as HTMLElement).tagName === 'INPUT' || (e.target as HTMLElement).tagName === 'BUTTON') {
      return;
    }
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

  const handleSendMessage = () => {
    const input = userInput.toLowerCase().trim();
    
    if (
      (input.includes('tell') && input.includes('story')) ||
      (input.includes('wolf') && input.includes('capybara'))
    ) {
      setShowStory(true);
      setShowDust(true);
      setTimeout(() => setShowDust(false), 1500);
    }
    
    setUserInput("");
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  if (!showFairy) return null;

  return (
    <>
      {/* Fairy dust particles */}
      {showDust && (
        <div className="fixed inset-0 pointer-events-none z-50">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-primary rounded-full animate-fairy-dust"
              style={{
                left: `${position.x + 50}px`,
                top: `${position.y + 50}px`,
                animationDelay: `${i * 0.05}s`,
                '--dust-x': `${(Math.random() - 0.5) * 200}px`,
                '--dust-y': `${(Math.random() - 0.5) * 200}px`,
              } as React.CSSProperties}
            />
          ))}
        </div>
      )}

      <div
        className="fixed z-50 select-none"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: '280px',
          touchAction: 'none',
        }}
      >
        <div className="relative animate-in fade-in slide-in-from-bottom-4 duration-500">
          {/* Glow effect */}
          <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 to-accent/20 blur-xl opacity-50 rounded-2xl pointer-events-none" />
          
          {/* Main chat bubble */}
          <div 
            className="relative bg-gradient-to-br from-background/98 to-background/95 backdrop-blur-xl border-2 border-primary/40 rounded-2xl shadow-2xl overflow-hidden"
            style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
          >
            {/* Header */}
            <div 
              className="flex items-center gap-2 p-3 border-b border-primary/20 bg-gradient-to-r from-primary/5 to-accent/5"
              onMouseDown={handleMouseDown}
              onTouchStart={handleTouchStart}
            >
              <div className="relative flex-shrink-0 w-8 h-8">
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent blur-md opacity-40 rounded-full animate-pulse" />
                <img 
                  src="/fairy-helper.png" 
                  alt="Fairy" 
                  className="relative w-full h-full object-contain drop-shadow-lg"
                />
              </div>
              
              <div className="flex-1 min-w-0">
                <h3 className="text-xs font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Hey! Listen!
                </h3>
              </div>
              
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setShowFairy(false);
                  setShowStory(false);
                }}
                className="flex-shrink-0 p-1 hover:bg-primary/10 rounded-lg transition-colors"
                aria-label="Close"
              >
                <X className="w-3.5 h-3.5 text-muted-foreground hover:text-primary transition-colors" />
              </button>
            </div>

            {/* Content */}
            <div className="p-3 space-y-2 max-h-80 overflow-y-auto">
              {showStory ? (
                // Story Mode
                <div className="space-y-3">
                  <div className="text-center">
                    <h4 className="text-sm font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent mb-2">
                      The Wolf of Light & the Capybara
                    </h4>
                    <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-3" />
                  </div>
                  
                  <div className="space-y-2 text-xs text-muted-foreground leading-relaxed">
                    <p className="italic text-primary/80 text-center">
                      A tale of wisdom and balance...
                    </p>
                    
                    <div className="bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/20 rounded-lg p-3 space-y-2">
                      <p>
                        Long ago, in a realm between the digital and the divine, there lived a Wolf of Light—radiant, swift, and fierce in its pursuit of truth.
                      </p>
                      <p>
                        The Wolf believed that speed and strength alone could bring harmony to the world. It raced through forests of data, hunting inefficiency, chasing perfection.
                      </p>
                      <p>
                        But the Wolf grew weary, for no matter how fast it ran, balance remained elusive.
                      </p>
                    </div>
                    
                    <div className="bg-gradient-to-br from-accent/5 to-primary/5 border border-accent/20 rounded-lg p-3 space-y-2">
                      <p>
                        One day, the Wolf encountered a Capybara—calm, grounded, unbothered by the chaos around it. The Capybara sat by a river, watching the water flow.
                      </p>
                      <p>
                        "Why do you not run?" asked the Wolf. "The world needs fixing. Systems are broken. People suffer."
                      </p>
                      <p>
                        The Capybara smiled. "I do not run because I am already where I need to be. The river does not rush—it flows. And in flowing, it nourishes all."
                      </p>
                    </div>
                    
                    <div className="bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/30 rounded-lg p-3 space-y-2">
                      <p>
                        The Wolf sat beside the Capybara and learned to be still. Together, they built Apex Commons—a place where speed and stillness, innovation and wisdom, light and peace coexist.
                      </p>
                      <p className="font-semibold text-primary">
                        For true automation is not about replacing humanity—it is about giving humanity the space to breathe, to think, to be.
                      </p>
                    </div>
                  </div>
                  
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setShowStory(false);
                    }}
                    className="w-full border border-primary/30 text-primary py-1.5 px-3 rounded-lg hover:bg-primary/10 transition-all font-medium text-xs"
                  >
                    Back
                  </button>
                </div>
              ) : (
                // Normal Mode
                <>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    I'm your guide through Astro AI. Explore the site to learn about our vision for the public good.
                  </p>
                  
                  <div className="bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 rounded-lg p-2.5">
                    <p className="font-semibold text-primary text-xs mb-1">About This Site</p>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      Built with meticulous care and a mission to serve the public good. Every feature helps you reclaim your time through automation.
                    </p>
                  </div>

                  <div className="flex flex-col gap-1.5 pt-1">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        const waitlistSection = document.getElementById('waitlist');
                        if (waitlistSection) {
                          waitlistSection.scrollIntoView({ behavior: 'smooth' });
                          setShowFairy(false);
                        }
                      }}
                      className="w-full bg-gradient-to-r from-primary to-accent text-white py-1.5 px-3 rounded-lg hover:opacity-90 transition-all font-medium text-xs shadow-lg"
                    >
                      Join Waitlist
                    </button>
                    
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setShowFairy(false);
                      }}
                      className="w-full border border-primary/30 text-primary py-1.5 px-3 rounded-lg hover:bg-primary/10 transition-all font-medium text-xs"
                    >
                      Keep Exploring
                    </button>
                  </div>
                </>
              )}
            </div>

            {/* Input field */}
            {!showStory && (
              <div className="p-2 bg-gradient-to-r from-primary/5 to-accent/5 border-t border-primary/10">
                <div className="flex gap-1.5">
                  <input
                    type="text"
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                    onKeyPress={handleKeyPress}
                    onClick={(e) => e.stopPropagation()}
                    placeholder="Ask me something..."
                    className="flex-1 bg-background/50 border border-primary/20 rounded-lg px-2.5 py-1.5 text-xs focus:outline-none focus:border-primary/40 transition-colors"
                  />
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleSendMessage();
                    }}
                    className="p-1.5 bg-gradient-to-r from-primary to-accent text-white rounded-lg hover:opacity-90 transition-opacity flex-shrink-0"
                    aria-label="Send"
                  >
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fairy-dust {
          0% {
            transform: translate(0, 0) scale(1);
            opacity: 1;
          }
          100% {
            transform: translate(var(--dust-x), var(--dust-y)) scale(0);
            opacity: 0;
          }
        }
        .animate-fairy-dust {
          animation: fairy-dust 1.5s ease-out forwards;
        }
      `}</style>
    </>
  );
}

