import { RotateCcw, Sparkles } from "lucide-react";
import { Component, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex items-center justify-center min-h-screen p-8 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
          <div className="flex flex-col items-center w-full max-w-2xl">
            {/* Magical Fairy */}
            <div className="relative mb-8">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full blur-2xl opacity-30 animate-pulse" />
              <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-cyan-400/50 shadow-2xl shadow-cyan-500/50">
                <img 
                  src="/fairy-helper.png" 
                  alt="Tech Fairy" 
                  className="w-full h-full object-cover animate-bounce-slow"
                />
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full flex items-center justify-center animate-pulse">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
            </div>

            {/* Error Message */}
            <h2 className="text-2xl font-bold mb-2 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              ✨ Oops! Something Magical Went Wrong
            </h2>
            <p className="text-muted-foreground mb-8 text-center">
              Don't worry! The Tech Fairy is here to help. Let's get you back on track.
            </p>

            {/* Error Details */}
            <div className="w-full mb-8 p-6 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border-2 border-cyan-400/20 shadow-xl">
              <h3 className="text-sm font-semibold text-cyan-400 mb-3 flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                Tech Details (for the curious)
              </h3>
              <div className="p-4 rounded-lg bg-slate-950/50 border border-slate-700 overflow-auto max-h-64">
                <pre className="text-xs text-slate-300 whitespace-pre-wrap">
                  {this.state.error?.stack}
                </pre>
              </div>
            </div>

            {/* Reload Button */}
            <button
              onClick={() => window.location.reload()}
              className="group relative px-8 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold shadow-lg shadow-cyan-500/30 hover:shadow-xl hover:shadow-cyan-500/50 transition-all hover:scale-105"
            >
              <div className="flex items-center gap-2">
                <RotateCcw className="w-5 h-5 group-hover:rotate-180 transition-transform duration-500" />
                Cast Refresh Spell
              </div>
            </button>

            <p className="mt-6 text-xs text-muted-foreground text-center">
              💫 If this keeps happening, the fairy suggests reaching out to support
            </p>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

