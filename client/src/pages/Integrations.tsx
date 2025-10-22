import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Integrations() {
  return (
    <Layout>
      <div className="container py-16 max-w-5xl">
        <nav className="text-sm text-muted-foreground mb-8">
          <a href="/" className="hover:text-foreground">Home</a> / <span className="text-foreground">Integrations</span>
        </nav>

        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Integration Catalog</h1>
          <p className="text-xl text-muted-foreground">
            Pre-built connectors and adapters for seamless integration with your existing technology stack.
          </p>
        </div>

        <Card className="mb-12 bg-muted/30">
          <CardHeader>
            <CardTitle className="text-lg">Table of Contents</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm">
              <li><a href="#communication" className="text-primary hover:underline">1. Communication & Collaboration</a></li>
              <li><a href="#crm" className="text-primary hover:underline">2. CRM & Sales</a></li>
              <li><a href="#payment" className="text-primary hover:underline">3. Payment Processing</a></li>
              <li><a href="#database" className="text-primary hover:underline">4. Database & Storage</a></li>
              <li><a href="#cloud" className="text-primary hover:underline">5. Cloud Services</a></li>
              <li><a href="#custom" className="text-primary hover:underline">6. Custom Integration SDK</a></li>
            </ul>
          </CardContent>
        </Card>

        <div className="space-y-16">
          <section id="communication">
            <h2 className="text-3xl font-bold mb-6">1. Communication & Collaboration</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Card>
                <CardHeader>
                  <Badge className="w-fit mb-2">Email</Badge>
                  <CardTitle className="text-base">SMTP/IMAP/Exchange</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  <p>Full email automation with support for attachments, templates, and tracking.</p>
                  <ul className="mt-3 space-y-1">
                    <li>• Send/receive emails</li>
                    <li>• Template engine</li>
                    <li>• Attachment handling</li>
                    <li>• Read receipts</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Badge className="w-fit mb-2">Chat</Badge>
                  <CardTitle className="text-base">Slack / Microsoft Teams</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  <p>Real-time notifications and bot interactions for team collaboration.</p>
                  <ul className="mt-3 space-y-1">
                    <li>• Send messages & notifications</li>
                    <li>• Interactive buttons</li>
                    <li>• File sharing</li>
                    <li>• Channel management</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          <section id="crm">
            <h2 className="text-3xl font-bold mb-6">2. CRM & Sales</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Card>
                <CardHeader>
                  <Badge className="w-fit mb-2">CRM</Badge>
                  <CardTitle className="text-base">Salesforce</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  <p>Complete Salesforce integration with bi-directional sync.</p>
                  <ul className="mt-3 space-y-1">
                    <li>• Lead & opportunity management</li>
                    <li>• Contact synchronization</li>
                    <li>• Custom object support</li>
                    <li>• Workflow triggers</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Badge className="w-fit mb-2">CRM</Badge>
                  <CardTitle className="text-base">HubSpot</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  <p>Marketing automation and sales pipeline integration.</p>
                  <ul className="mt-3 space-y-1">
                    <li>• Contact & company sync</li>
                    <li>• Deal pipeline automation</li>
                    <li>• Email campaigns</li>
                    <li>• Analytics tracking</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          <section id="payment">
            <h2 className="text-3xl font-bold mb-6">3. Payment Processing</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Card>
                <CardHeader>
                  <Badge className="w-fit mb-2">Payment</Badge>
                  <CardTitle className="text-base">Stripe</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  <p>Complete payment processing with subscription management.</p>
                  <ul className="mt-3 space-y-1">
                    <li>• Payment processing</li>
                    <li>• Subscription billing</li>
                    <li>• Invoice generation</li>
                    <li>• Webhook events</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Badge className="w-fit mb-2">Payment</Badge>
                  <CardTitle className="text-base">PayPal</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  <p>PayPal integration for payments and payouts.</p>
                  <ul className="mt-3 space-y-1">
                    <li>• Payment acceptance</li>
                    <li>• Mass payouts</li>
                    <li>• Transaction history</li>
                    <li>• Refund processing</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          <section id="database">
            <h2 className="text-3xl font-bold mb-6">4. Database & Storage</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <Card>
                <CardHeader>
                  <Badge className="w-fit mb-2">SQL</Badge>
                  <CardTitle className="text-base">PostgreSQL / MySQL</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  <p>Direct database connectivity with query execution and data synchronization.</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Badge className="w-fit mb-2">NoSQL</Badge>
                  <CardTitle className="text-base">MongoDB</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  <p>Document store integration with aggregation pipeline support.</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Badge className="w-fit mb-2">Storage</Badge>
                  <CardTitle className="text-base">Amazon S3</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  <p>Object storage with file upload, download, and management capabilities.</p>
                </CardContent>
              </Card>
            </div>
          </section>

          <section id="cloud">
            <h2 className="text-3xl font-bold mb-6">5. Cloud Services</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Card>
                <CardHeader>
                  <Badge className="w-fit mb-2">Cloud</Badge>
                  <CardTitle className="text-base">AWS Services</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  <p>Integration with AWS Lambda, SQS, SNS, and other AWS services.</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Badge className="w-fit mb-2">Cloud</Badge>
                  <CardTitle className="text-base">Google Cloud Platform</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  <p>GCP integration including Cloud Functions, Pub/Sub, and BigQuery.</p>
                </CardContent>
              </Card>
            </div>
          </section>

          <section id="custom">
            <h2 className="text-3xl font-bold mb-6">6. Custom Integration SDK</h2>
            <Card className="bg-muted/20">
              <CardHeader>
                <CardTitle>Build Your Own Connectors</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Use our SDK to create custom integrations for proprietary or niche systems not covered by our pre-built connectors.
                </p>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <h4 className="font-semibold mb-2">SDK Features</h4>
                    <ul className="text-muted-foreground space-y-1">
                      <li>→ REST API adapter framework</li>
                      <li>→ Authentication helpers (OAuth, API keys)</li>
                      <li>→ Data transformation utilities</li>
                      <li>→ Error handling & retry logic</li>
                      <li>→ Testing & debugging tools</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Supported Protocols</h4>
                    <ul className="text-muted-foreground space-y-1">
                      <li>→ REST/HTTP</li>
                      <li>→ SOAP/XML</li>
                      <li>→ GraphQL</li>
                      <li>→ gRPC</li>
                      <li>→ WebSocket</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>

        <div className="mt-16 p-8 border border-border/50 rounded-lg bg-muted/20 text-center">
          <h3 className="text-2xl font-bold mb-4">Need a Custom Integration?</h3>
          <p className="text-muted-foreground mb-6">
            Our team can build custom connectors for your specific requirements.
          </p>
          <a href="/contact" className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors">
            Contact Integration Team
          </a>
        </div>
      </div>
    </Layout>
  );
}
