import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export default function Pricing() {
  return (
    <Layout>
      <div className="container py-16 max-w-6xl">
        {/* Breadcrumb */}
        <nav className="text-sm text-muted-foreground mb-8">
          <a href="/" className="hover:text-foreground">Home</a> / <span className="text-foreground">Pricing</span>
        </nav>

        {/* Page Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold mb-4">Service Tier Pricing</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transparent, usage-based pricing with no hidden fees. Scale from development to enterprise with predictable costs.
          </p>
        </div>

        {/* Pricing Tiers */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Free Tier */}
          <Card className="relative">
            <CardHeader>
              <Badge className="w-fit mb-2" variant="secondary">Development</Badge>
              <CardTitle className="text-2xl">Free Tier</CardTitle>
              <CardDescription>For testing and development</CardDescription>
              <div className="mt-4">
                <span className="text-4xl font-bold">$0</span>
                <span className="text-muted-foreground">/month</span>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">5 automation workflows</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">1,000 workflow executions/month</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Basic integrations (10 connectors)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">REST API access</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Community support</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">7-day data retention</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full" variant="outline" asChild>
                <a href="/#signup">Start Free</a>
              </Button>
            </CardFooter>
          </Card>

          {/* Professional Tier */}
          <Card className="relative border-primary shadow-lg scale-105">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <Badge className="bg-primary">Most Popular</Badge>
            </div>
            <CardHeader>
              <Badge className="w-fit mb-2">Production</Badge>
              <CardTitle className="text-2xl">Professional</CardTitle>
              <CardDescription>For growing businesses</CardDescription>
              <div className="mt-4">
                <span className="text-4xl font-bold">$99</span>
                <span className="text-muted-foreground">/month</span>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm"><strong>Unlimited</strong> automation workflows</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">50,000 workflow executions/month</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">All integrations (100+ connectors)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Full API access + webhooks</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Priority email support</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">30-day data retention</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">AI insights & analytics</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Team collaboration (5 users)</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full" asChild>
                <a href="/#signup">Start Trial</a>
              </Button>
            </CardFooter>
          </Card>

          {/* Enterprise Tier */}
          <Card className="relative">
            <CardHeader>
              <Badge className="w-fit mb-2" variant="secondary">Enterprise</Badge>
              <CardTitle className="text-2xl">Enterprise</CardTitle>
              <CardDescription>For large organizations</CardDescription>
              <div className="mt-4">
                <span className="text-4xl font-bold">Custom</span>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm"><strong>Unlimited</strong> everything</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Custom execution limits</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Custom integrations & connectors</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Dedicated API infrastructure</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">24/7 phone & chat support</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Unlimited data retention</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Advanced AI & ML models</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Unlimited team members</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">SLA guarantees (99.99% uptime)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">On-premise deployment option</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full" variant="outline" asChild>
                <a href="/contact">Contact Sales</a>
              </Button>
            </CardFooter>
          </Card>
        </div>

        {/* Feature Comparison Table */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-center">Detailed Feature Comparison</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full border border-border">
              <thead>
                <tr className="bg-muted">
                  <th className="text-left p-4 border-b border-border font-semibold">Feature</th>
                  <th className="text-center p-4 border-b border-border font-semibold">Free</th>
                  <th className="text-center p-4 border-b border-border font-semibold">Professional</th>
                  <th className="text-center p-4 border-b border-border font-semibold">Enterprise</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr>
                  <td className="p-4 border-b border-border font-medium">Workflow Executions/Month</td>
                  <td className="text-center p-4 border-b border-border">1,000</td>
                  <td className="text-center p-4 border-b border-border">50,000</td>
                  <td className="text-center p-4 border-b border-border">Unlimited</td>
                </tr>
                <tr className="bg-muted/30">
                  <td className="p-4 border-b border-border font-medium">Active Workflows</td>
                  <td className="text-center p-4 border-b border-border">5</td>
                  <td className="text-center p-4 border-b border-border">Unlimited</td>
                  <td className="text-center p-4 border-b border-border">Unlimited</td>
                </tr>
                <tr>
                  <td className="p-4 border-b border-border font-medium">Integration Connectors</td>
                  <td className="text-center p-4 border-b border-border">10</td>
                  <td className="text-center p-4 border-b border-border">100+</td>
                  <td className="text-center p-4 border-b border-border">Custom</td>
                </tr>
                <tr className="bg-muted/30">
                  <td className="p-4 border-b border-border font-medium">API Rate Limit</td>
                  <td className="text-center p-4 border-b border-border">100/min</td>
                  <td className="text-center p-4 border-b border-border">1,000/min</td>
                  <td className="text-center p-4 border-b border-border">Custom</td>
                </tr>
                <tr>
                  <td className="p-4 border-b border-border font-medium">Team Members</td>
                  <td className="text-center p-4 border-b border-border">1</td>
                  <td className="text-center p-4 border-b border-border">5</td>
                  <td className="text-center p-4 border-b border-border">Unlimited</td>
                </tr>
                <tr className="bg-muted/30">
                  <td className="p-4 border-b border-border font-medium">Data Retention</td>
                  <td className="text-center p-4 border-b border-border">7 days</td>
                  <td className="text-center p-4 border-b border-border">30 days</td>
                  <td className="text-center p-4 border-b border-border">Unlimited</td>
                </tr>
                <tr>
                  <td className="p-4 border-b border-border font-medium">AI Insights</td>
                  <td className="text-center p-4 border-b border-border">-</td>
                  <td className="text-center p-4 border-b border-border">✓</td>
                  <td className="text-center p-4 border-b border-border">✓ Advanced</td>
                </tr>
                <tr className="bg-muted/30">
                  <td className="p-4 border-b border-border font-medium">Support Level</td>
                  <td className="text-center p-4 border-b border-border">Community</td>
                  <td className="text-center p-4 border-b border-border">Email</td>
                  <td className="text-center p-4 border-b border-border">24/7 Phone</td>
                </tr>
                <tr>
                  <td className="p-4 border-b border-border font-medium">SLA Guarantee</td>
                  <td className="text-center p-4 border-b border-border">-</td>
                  <td className="text-center p-4 border-b border-border">99.9%</td>
                  <td className="text-center p-4 border-b border-border">99.99%</td>
                </tr>
                <tr className="bg-muted/30">
                  <td className="p-4 border-b border-border font-medium">On-Premise Deployment</td>
                  <td className="text-center p-4 border-b border-border">-</td>
                  <td className="text-center p-4 border-b border-border">-</td>
                  <td className="text-center p-4 border-b border-border">✓</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium">Custom Integrations</td>
                  <td className="text-center p-4">-</td>
                  <td className="text-center p-4">-</td>
                  <td className="text-center p-4">✓</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* CTA */}
        <div className="p-8 border border-border/50 rounded-lg bg-muted/20 text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
          <p className="text-muted-foreground mb-6">
            Start with our free tier. No credit card required. Upgrade anytime as you grow.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" asChild>
              <a href="/#signup">Start Free Trial</a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="/contact">Talk to Sales</a>
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
}

