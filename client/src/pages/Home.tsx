import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Zap, TrendingUp, Target, Mail } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="border-b border-border/40 backdrop-blur-sm sticky top-0 z-50 bg-background/80">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/astro-ai-logo.png" alt="Astro AI" className="h-8 w-8" />
            <div className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Astro AI
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" asChild>
              <a href="#features">Features</a>
            </Button>
            <Button variant="ghost" asChild>
              <a href="#pricing">Pricing</a>
            </Button>
            <Button asChild>
              <a href="#cta">Start Free</a>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>
        <div className="container relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Badge className="w-fit" variant="secondary">
                <Zap className="w-3 h-3 mr-1" />
                AI-Powered Automation
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold tracking-tight">
                Automate Your Workflow.{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Scale Your Business.
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-xl">
                Stop juggling tools. Astro AI connects your apps, automates client work, and gives you back hours every day.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg" asChild>
                  <a href="#cta">Start Free Trial</a>
                </Button>
                <Button size="lg" variant="outline" className="text-lg" asChild>
                  <a href="#features">See How It Works</a>
                </Button>
              </div>
              <div className="flex items-center gap-8 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-primary" />
                  No credit card required
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-primary" />
                  5 automations free
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 blur-3xl" />
              <img
                src="/command_center_refined_v2.png"
                alt="Astro AI Command Center Dashboard"
                className="relative rounded-lg shadow-2xl border border-border/50 hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 lg:py-32 bg-muted/30">
        <div className="container">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="secondary" className="w-fit mx-auto">
              <Target className="w-3 h-3 mr-1" />
              Features
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold">
              Everything You Need to{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Work Smarter
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Built for freelancers and agencies who want to focus on creative work, not repetitive tasks.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <AnimatedSection delay={0}>
              <Card className="border-border/50 bg-card/50 backdrop-blur hover:border-primary/50 transition-all duration-300 h-full">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Zap className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle>Automate Client Work</CardTitle>
                  <CardDescription>
                    Connect email, databases, and payment systems. Let AI handle the busywork while you focus on strategy.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <img
                    src="/blog_scale_refined.png"
                    alt="Automate workflows"
                    className="rounded-lg border border-border/50 hover:scale-105 transition-transform duration-300"
                  />
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection delay={100}>
              <Card className="border-border/50 bg-card/50 backdrop-blur hover:border-accent/50 transition-all duration-300 h-full">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                    <TrendingUp className="w-6 h-6 text-accent" />
                  </div>
                  <CardTitle>Scale Up, Stress Down</CardTitle>
                  <CardDescription>
                    Handle more clients without hiring more people. Astro AI grows with your business.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <img
                    src="/blog_scale_refined.png"
                    alt="Scale your business"
                    className="rounded-lg border border-border/50 hover:scale-105 transition-transform duration-300"
                  />
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <Card className="border-border/50 bg-card/50 backdrop-blur hover:border-secondary/50 transition-all duration-300 h-full">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
                    <Target className="w-6 h-6 text-secondary" />
                  </div>
                  <CardTitle>AI Insights</CardTitle>
                  <CardDescription>
                    Get actionable insights from your data. Spot trends, optimize workflows, and make smarter decisions.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <img
                    src="/feature_ai_insights.png"
                    alt="AI-powered insights"
                    className="rounded-lg border border-border/50 hover:scale-105 transition-transform duration-300"
                  />
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 lg:py-32">
        <div className="container">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold">
              Simple Pricing. No Surprises.
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Start free, upgrade when you're ready. Cancel anytime.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <AnimatedSection delay={0}>
              <Card className="border-border/50 hover:border-primary/30 transition-all duration-300 h-full flex flex-col">
                <CardHeader>
                  <CardTitle>Free</CardTitle>
                  <CardDescription>Start automating. No credit card.</CardDescription>
                  <div className="pt-4">
                    <span className="text-4xl font-bold">$0</span>
                    <span className="text-muted-foreground">/month</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4 flex-1">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-primary" />
                      <span className="text-sm">5 automations</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-primary" />
                      <span className="text-sm">Basic dashboard</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-primary" />
                      <span className="text-sm">Email support</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" variant="outline" asChild>
                    <a href="#cta">Start Free</a>
                  </Button>
                </CardFooter>
              </Card>
            </AnimatedSection>

            <AnimatedSection delay={100}>
              <Card className="border-primary/50 shadow-lg shadow-primary/20 relative hover:shadow-primary/30 transition-all duration-300 h-full flex flex-col">
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2">
                  Most Popular
                </Badge>
                <CardHeader>
                  <CardTitle>Pro</CardTitle>
                  <CardDescription>Scale up. More power, less hassle.</CardDescription>
                  <div className="pt-4">
                    <span className="text-4xl font-bold">$50</span>
                    <span className="text-muted-foreground">/month</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4 flex-1">
                  <div className="text-sm font-medium">Everything in Free, plus:</div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-primary" />
                      <span className="text-sm">Unlimited automations</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-primary" />
                      <span className="text-sm">AI insights</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-primary" />
                      <span className="text-sm">Priority support</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-primary" />
                      <span className="text-sm">Custom workflows</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" asChild>
                    <a href="#cta">Start Free Trial</a>
                  </Button>
                </CardFooter>
              </Card>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <Card className="border-border/50 hover:border-accent/30 transition-all duration-300 h-full flex flex-col">
                <CardHeader>
                  <CardTitle>Agency</CardTitle>
                  <CardDescription>For agencies juggling client chaos.</CardDescription>
                  <div className="pt-4">
                    <span className="text-4xl font-bold">$200</span>
                    <span className="text-muted-foreground">/month</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4 flex-1">
                  <div className="text-sm font-medium">Everything in Pro, plus:</div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-primary" />
                      <span className="text-sm">White-label portal</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-primary" />
                      <span className="text-sm">Team collaboration</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-primary" />
                      <span className="text-sm">API access</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-primary" />
                      <span className="text-sm">Dedicated support</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" variant="outline" asChild>
                    <a href="#cta">Contact Sales</a>
                  </Button>
                </CardFooter>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta" className="py-20 lg:py-32 bg-gradient-to-b from-primary/10 to-transparent">
        <div className="container">
          <AnimatedSection>
            <Card className="border-border/50 bg-card/80 backdrop-blur">
              <CardHeader className="text-center space-y-4">
                <CardTitle className="text-3xl lg:text-4xl">
                  Ready to Automate Your Workflow?
                </CardTitle>
                <CardDescription className="text-lg">
                  Join hundreds of freelancers and agencies saving hours every week.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col items-center gap-6">
                <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
                  <div className="relative flex-1">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full pl-10 pr-4 py-3 rounded-lg bg-background border border-input focus:outline-none focus:ring-2 focus:ring-ring transition-all"
                    />
                  </div>
                  <Button size="lg" className="sm:w-auto">
                    Start Free Trial
                  </Button>
                </div>
                <p className="text-sm text-muted-foreground">
                  No credit card required. 5 automations free forever.
                </p>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </section>

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
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold">Product</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#features" className="hover:text-foreground transition-colors">Features</a></li>
                <li><a href="#pricing" className="hover:text-foreground transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Integrations</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">About</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Contact</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Terms</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-border/40 text-center text-sm text-muted-foreground">
            © 2025 Astro AI. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

