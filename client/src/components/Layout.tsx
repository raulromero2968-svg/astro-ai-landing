import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "wouter";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="border-b border-border/40 backdrop-blur-sm sticky top-0 z-50 bg-background/95">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/">
            <a className="flex items-center gap-2 sm:gap-3">
              <img src="/astro-ai-logo.png" alt="Astro AI" className="h-6 w-6 sm:h-8 sm:w-8 flex-shrink-0" />
              <div className="text-lg sm:text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent whitespace-nowrap">
                Astro AI
              </div>
            </a>
          </Link>
          
          {/* Desktop Navigation - Only show on larger tablets and desktop */}
          <div className="desktop-nav items-center gap-6">
            <Link href="/features">
              <a className="text-sm font-medium hover:text-primary transition-colors">Technical Specs</a>
            </Link>
            <Link href="/pricing">
              <a className="text-sm font-medium hover:text-primary transition-colors">Roadmap</a>
            </Link>
            <Link href="/about">
              <a className="text-sm font-medium hover:text-primary transition-colors">Mission</a>
            </Link>
            <Link href="/blog">
              <a className="text-sm font-medium hover:text-primary transition-colors">Research</a>
            </Link>
            <Link href="/contact">
              <a className="text-sm font-medium hover:text-primary transition-colors">Contact</a>
            </Link>
            <Button size="sm" asChild>
              <Link href="/#waitlist">
                <a>Join Waitlist</a>
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button - Show on mobile and tablets */}
          <button
            className="mobile-menu-btn p-2 hover:bg-primary/10 rounded-md transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            type="button"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-primary" />
            ) : (
              <Menu className="w-6 h-6 text-primary" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="mobile-nav border-t border-border/40 bg-background/95 backdrop-blur-sm w-full overflow-hidden">
            <div className="container py-4 flex flex-col gap-4 max-w-full">
              <Link href="/features">
                <a className="text-sm font-medium hover:text-primary transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>Technical Specs</a>
              </Link>
              <Link href="/pricing">
                <a className="text-sm font-medium hover:text-primary transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>Roadmap</a>
              </Link>
              <Link href="/about">
                <a className="text-sm font-medium hover:text-primary transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>Mission</a>
              </Link>
              <Link href="/blog">
                <a className="text-sm font-medium hover:text-primary transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>Research</a>
              </Link>
              <Link href="/contact">
                <a className="text-sm font-medium hover:text-primary transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>Contact</a>
              </Link>
              <Button size="sm" asChild className="w-full">
                <Link href="/#waitlist">
                  <a onClick={() => setMobileMenuOpen(false)}>Join Waitlist</a>
                </Link>
              </Button>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="border-t border-border/40 py-12 mt-auto">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <img src="/astro-ai-logo.png" alt="Astro AI" className="h-6 w-6" />
                <div className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Astro AI
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                Automate your workflow. Scale your business.
              </p>
              <p className="text-xs text-muted-foreground/70">
                by <span className="text-secondary">Apex Omnis Studio</span>
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold">Product</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/features"><a className="hover:text-foreground transition-colors">Features</a></Link></li>
                <li><Link href="/pricing"><a className="hover:text-foreground transition-colors">Pricing</a></Link></li>
                <li><Link href="/integrations"><a className="hover:text-foreground transition-colors">Integrations</a></Link></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/about"><a className="hover:text-foreground transition-colors">About</a></Link></li>
                <li><Link href="/blog"><a className="hover:text-foreground transition-colors">Blog</a></Link></li>
                <li><Link href="/contact"><a className="hover:text-foreground transition-colors">Contact</a></Link></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/privacy"><a className="hover:text-foreground transition-colors">Privacy</a></Link></li>
                <li><Link href="/terms"><a className="hover:text-foreground transition-colors">Terms</a></Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-border/40 text-center text-sm text-muted-foreground">
            <p>© 2025 Astro AI. All rights reserved.</p>
            <p className="text-xs text-muted-foreground/60 mt-2">
              A product of <span className="text-secondary">Apex Omnis Studio</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

