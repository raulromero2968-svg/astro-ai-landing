import { useState } from "react";
import { X, Sparkles } from "lucide-react";

interface FairyHelperProps {
  error?: Error;
  techInfo?: string;
}

export default function FairyHelper({ error, techInfo }: FairyHelperProps) {
  const [isOpen, setIsOpen] = useState(false);

  if (!error && !techInfo) return null;

  return (
    <>
      {/* Floating Fairy Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 group"
        aria-label="Tech Helper"
        type="button"
      >
        <div className="relative">
          {/* Glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity animate-pulse" />
          
          {/* Fairy image */}
          <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-cyan-400/50 shadow-lg shadow-cyan-500/50 group-hover:scale-110 transition-transform">
            <img 
              src="/fairy-helper.png" 
              alt="Fairy Helper" 
              className="w-full h-full object-cover animate-bounce-slow"
            />
          </div>
          
          {/* Sparkle indicator */}
          <div className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full flex items-center justify-center animate-pulse">
            <Sparkles className="w-3 h-3 text-white" />
          </div>
        </div>
      </button>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="relative max-w-2xl w-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-2xl border-2 border-cyan-400/30 shadow-2xl shadow-cyan-500/20 overflow-hidden">
            {/* Magical header */}
            <div className="relative bg-gradient-to-r from-cyan-500/10 to-purple-500/10 p-6 border-b border-cyan-400/20">
              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full blur-md opacity-50 animate-pulse" />
                  <img 
                    src="/fairy-helper.png" 
                    alt="Fairy Helper" 
                    className="relative w-full h-full object-cover rounded-full border-2 border-cyan-400/50"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    ✨ Tech Fairy Here to Help!
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {error ? "Something went wrong, but I'm on it!" : "Here's what's happening behind the scenes"}
                  </p>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-cyan-400/10 rounded-lg transition-colors"
                  aria-label="Close"
                  type="button"
                >
                  <X className="w-5 h-5 text-cyan-400" />
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 max-h-96 overflow-y-auto">
              {error && (
                <div className="space-y-4">
                  <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
                    <h4 className="font-semibold text-red-400 mb-2">Error Message</h4>
                    <p className="text-sm text-red-300">{error.message}</p>
                  </div>
                  
                  {error.stack && (
                    <div className="p-4 bg-slate-800/50 border border-slate-700 rounded-lg">
                      <h4 className="font-semibold text-cyan-400 mb-2">Stack Trace</h4>
                      <pre className="text-xs text-slate-300 overflow-x-auto whitespace-pre-wrap">
                        {error.stack}
                      </pre>
                    </div>
                  )}
                </div>
              )}
              
              {techInfo && (
                <div className="p-4 bg-cyan-500/10 border border-cyan-500/20 rounded-lg">
                  <h4 className="font-semibold text-cyan-400 mb-2">Tech Info</h4>
                  <pre className="text-sm text-slate-300 whitespace-pre-wrap">
                    {techInfo}
                  </pre>
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="p-4 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 border-t border-cyan-400/20 text-center">
              <p className="text-xs text-muted-foreground">
                💫 Don't worry, I've got your back! Refresh the page or contact support if this persists.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

