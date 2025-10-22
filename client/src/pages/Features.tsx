import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Zap, TrendingUp, Shield, Users, Sparkles } from "lucide-react";

export default function Features() {
  return (
    <Layout>
      <div className="container py-16 max-w-5xl">
        {/* Breadcrumb */}
        <nav className="text-sm text-muted-foreground mb-8">
          <a href="/" className="hover:text-foreground">Home</a> / <span className="text-foreground">Features</span>
        </nav>

        {/* Page Header */}
        <div className="mb-16 text-center">
          <h1 className="text-4xl font-bold mb-4">Stop Juggling. Start Automating.</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Imagine getting 5 hours back every week. No more copying data between apps. No more forgetting to follow up with clients. Just smooth, automatic workflows that run while you focus on what matters.
          </p>
        </div>

        {/* Hero Story Section */}
        <div className="mb-20 p-8 bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg border border-primary/20">
          <h2 className="text-2xl font-bold mb-4">Here's How It Works</h2>
          <div className="space-y-4 text-muted-foreground">
            <p className="text-lg">
              <strong>Morning:</strong> A new client fills out your contact form. Astro AI instantly adds them to your CRM, sends a welcome email, creates a Slack notification for your team, and schedules a follow-up reminder for tomorrow.
            </p>
            <p className="text-lg">
              <strong>Afternoon:</strong> A payment comes through Stripe. Astro AI updates your spreadsheet, sends a thank-you email, generates an invoice, and logs it in your accounting software.
            </p>
            <p className="text-lg">
              <strong>Evening:</strong> You're done for the day. Everything that used to take you 30 minutes of copying and pasting? Already done. Automatically.
            </p>
          </div>
        </div>

        {/* Simple Feature Cards */}
        <div className="space-y-16">
          
          {/* Connect Everything */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <Zap className="w-8 h-8 text-primary" />
              <h2 className="text-3xl font-bold">Connect Everything You Use</h2>
            </div>
            <p className="text-lg text-muted-foreground mb-8">
              Your tools don't talk to each other. Astro AI fixes that. Connect your email, CRM, payment processor, spreadsheets, and more—without writing a single line of code.
            </p>
            
            <img 
              src="/feature_automate_workflow.png" 
              alt="Connect your apps together" 
              className="rounded-lg border border-border/50 mb-8"
            />

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="bg-muted/20">
                <CardHeader>
                  <CardTitle className="text-lg">Email & Communication</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  <p>Gmail, Outlook, Slack, Teams—send messages, track responses, and never miss a follow-up.</p>
                </CardContent>
              </Card>

              <Card className="bg-muted/20">
                <CardHeader>
                  <CardTitle className="text-lg">Sales & CRM</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  <p>Salesforce, HubSpot, Pipedrive—automatically update contacts and deals as things happen.</p>
                </CardContent>
              </Card>

              <Card className="bg-muted/20">
                <CardHeader>
                  <CardTitle className="text-lg">Payments & Invoicing</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  <p>Stripe, PayPal, QuickBooks—track payments, send receipts, and keep your books clean.</p>
                </CardContent>
              </Card>
            </div>

            <div className="mt-6 p-4 bg-primary/10 rounded-lg border border-primary/20">
              <p className="text-sm">
                <strong>Real Example:</strong> When someone books a call on Calendly, Astro AI adds them to your CRM, sends them a confirmation email with your Zoom link, and adds a reminder to your calendar. All in 2 seconds.
              </p>
            </div>
          </section>

          {/* Save Time */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <Clock className="w-8 h-8 text-primary" />
              <h2 className="text-3xl font-bold">Get Hours Back Every Week</h2>
            </div>
            <p className="text-lg text-muted-foreground mb-8">
              Stop doing the same tasks over and over. Astro AI handles the repetitive stuff so you can focus on growing your business, not managing it.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-primary/50">
                <CardHeader>
                  <Badge className="w-fit mb-2">Before Astro AI</Badge>
                  <CardTitle className="text-lg text-muted-foreground">Your Typical Day</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground space-y-2">
                  <p>✗ Copy client info from email to CRM (10 min)</p>
                  <p>✗ Update spreadsheet with new sales (15 min)</p>
                  <p>✗ Send follow-up emails manually (20 min)</p>
                  <p>✗ Check multiple apps for updates (30 min)</p>
                  <p>✗ Generate weekly reports (45 min)</p>
                  <p className="pt-2 font-bold text-destructive">Total: 2 hours of busywork</p>
                </CardContent>
              </Card>

              <Card className="border-primary bg-primary/5">
                <CardHeader>
                  <Badge className="w-fit mb-2 bg-primary">With Astro AI</Badge>
                  <CardTitle className="text-lg">Your New Day</CardTitle>
                </CardHeader>
                <CardContent className="text-sm space-y-2">
                  <p>✓ Client info auto-syncs everywhere (0 min)</p>
                  <p>✓ Spreadsheet updates itself (0 min)</p>
                  <p>✓ Follow-ups sent automatically (0 min)</p>
                  <p>✓ Get one daily summary email (2 min)</p>
                  <p>✓ Reports generate themselves (0 min)</p>
                  <p className="pt-2 font-bold text-primary">Total: 2 minutes. That's it.</p>
                </CardContent>
              </Card>
            </div>

            <div className="mt-6 p-4 bg-accent/10 rounded-lg border border-accent/20">
              <p className="text-sm">
                <strong>Real Example:</strong> A freelance designer used to spend 5 hours a week on admin tasks. Now? 15 minutes. She uses the extra time to take on 2 more clients per month.
              </p>
            </div>
          </section>

          {/* Scale Without Hiring */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <TrendingUp className="w-8 h-8 text-primary" />
              <h2 className="text-3xl font-bold">Grow Without Hiring More People</h2>
            </div>
            <p className="text-lg text-muted-foreground mb-8">
              Handle 10 clients or 100 clients with the same effort. Astro AI scales with you, so you can grow your business without growing your stress.
            </p>

            <img 
              src="/blog_scale_refined.png" 
              alt="Scale your business automatically" 
              className="rounded-lg border border-border/50 mb-8"
            />

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">What This Means for You</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">→</span>
                    <span>Take on more clients without working longer hours</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">→</span>
                    <span>Deliver consistent quality even when you're busy</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">→</span>
                    <span>Never drop the ball on follow-ups or deadlines</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">→</span>
                    <span>Keep your personal touch while automating the boring stuff</span>
                  </li>
                </ul>
              </div>

              <Card className="bg-muted/20">
                <CardHeader>
                  <CardTitle className="text-lg">Real Numbers</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Clients handled per week</span>
                    <span className="text-2xl font-bold text-primary">3x more</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Time spent on admin</span>
                    <span className="text-2xl font-bold text-primary">-80%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Missed follow-ups</span>
                    <span className="text-2xl font-bold text-primary">Zero</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Smart Insights */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <Sparkles className="w-8 h-8 text-primary" />
              <h2 className="text-3xl font-bold">See What's Working (And What's Not)</h2>
            </div>
            <p className="text-lg text-muted-foreground mb-8">
              Astro AI doesn't just automate—it learns. Get insights about your business that help you make smarter decisions.
            </p>

            <img 
              src="/feature_ai_insights.png" 
              alt="Get smart insights from your data" 
              className="rounded-lg border border-border/50 mb-8"
            />

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="bg-muted/20">
                <CardHeader>
                  <CardTitle className="text-base">Spot Trends Early</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  <p>See which clients are most engaged, which services are selling best, and where you should focus your energy.</p>
                </CardContent>
              </Card>

              <Card className="bg-muted/20">
                <CardHeader>
                  <CardTitle className="text-base">Catch Problems Fast</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  <p>Get alerts when something unusual happens—like a client going quiet or a workflow breaking.</p>
                </CardContent>
              </Card>

              <Card className="bg-muted/20">
                <CardHeader>
                  <CardTitle className="text-base">Make Better Decisions</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  <p>See your business in one place. No more guessing. Just clear data that tells you what to do next.</p>
                </CardContent>
              </Card>
            </div>

            <div className="mt-6 p-4 bg-primary/10 rounded-lg border border-primary/20">
              <p className="text-sm">
                <strong>Real Example:</strong> A consultant noticed that clients who got a follow-up within 24 hours were 3x more likely to book. Astro AI now sends those follow-ups automatically.
              </p>
            </div>
          </section>

          {/* Secure & Reliable */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <Shield className="w-8 h-8 text-primary" />
              <h2 className="text-3xl font-bold">Your Data is Safe. Period.</h2>
            </div>
            <p className="text-lg text-muted-foreground mb-8">
              We take security seriously. Your client data, payment info, and business information are protected with the same security used by banks and governments.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-muted/20">
                <CardHeader>
                  <CardTitle className="text-lg">What This Means in Plain English</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground space-y-3">
                  <p>✓ Your data is encrypted (scrambled so only you can read it)</p>
                  <p>✓ We never sell or share your information</p>
                  <p>✓ You can export or delete your data anytime</p>
                  <p>✓ We back up everything so you never lose work</p>
                  <p>✓ 99.9% uptime—we're always running</p>
                </CardContent>
              </Card>

              <Card className="bg-muted/20">
                <CardHeader>
                  <CardTitle className="text-lg">Trusted By</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground space-y-3">
                  <p>• Freelancers handling sensitive client work</p>
                  <p>• Agencies managing multiple accounts</p>
                  <p>• Consultants with confidential data</p>
                  <p>• Small businesses processing payments</p>
                  <p>• Teams collaborating across time zones</p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Team Collaboration */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <Users className="w-8 h-8 text-primary" />
              <h2 className="text-3xl font-bold">Work Together, Stay in Sync</h2>
            </div>
            <p className="text-lg text-muted-foreground mb-8">
              Whether you're solo or have a team, everyone stays on the same page. No more "Did you send that email?" or "Where's that file?"
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="bg-muted/20">
                <CardHeader>
                  <CardTitle className="text-base">Share Workflows</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  <p>Build an automation once, share it with your team. Everyone uses the same process.</p>
                </CardContent>
              </Card>

              <Card className="bg-muted/20">
                <CardHeader>
                  <CardTitle className="text-base">See Who Did What</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  <p>Track every action. Know exactly what happened and when, so nothing falls through the cracks.</p>
                </CardContent>
              </Card>

              <Card className="bg-muted/20">
                <CardHeader>
                  <CardTitle className="text-base">Set Permissions</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  <p>Control who can see what. Keep sensitive data private while letting your team collaborate.</p>
                </CardContent>
              </Card>
            </div>
          </section>

        </div>

        {/* CTA */}
        <div className="mt-20 p-8 border border-border/50 rounded-lg bg-gradient-to-r from-primary/10 to-accent/10 text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Get Your Time Back?</h3>
          <p className="text-muted-foreground mb-6 text-lg">
            Start with 5 free automations. No credit card. No commitment. Just see what's possible.
          </p>
          <div className="flex gap-4 justify-center">
            <a href="/#signup" className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors">
              Start Free Trial
            </a>
            <a href="/pricing" className="inline-flex items-center justify-center rounded-md border border-border px-8 py-3 text-sm font-medium hover:bg-muted transition-colors">
              See Pricing
            </a>
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            Join 10,000+ professionals who've automated their workflow
          </p>
        </div>
      </div>
    </Layout>
  );
}

