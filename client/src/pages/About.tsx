import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function About() {
  return (
    <Layout>
      <div className="container py-16 max-w-5xl">
        <nav className="text-sm text-muted-foreground mb-8">
          <a href="/" className="hover:text-foreground">Home</a> / <span className="text-foreground">About</span>
        </nav>

        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">About Apex Commons</h1>
          <p className="text-xl text-muted-foreground">
            Enterprise automation platform built for the future of work.
          </p>
        </div>

        <div className="prose prose-invert max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-muted-foreground">
              Apex Commons was founded on the principle that automation should empower people, not replace them. We believe that by automating repetitive tasks, professionals can focus on creative work that truly matters—building relationships, solving complex problems, and driving innovation.
            </p>
            <p className="text-muted-foreground">
              Our platform is designed to be accessible to organizations of all sizes, from solo freelancers to large enterprises, with transparent pricing and no vendor lock-in.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Our Values</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Transparency</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  Clear pricing, open documentation, and honest communication about capabilities and limitations.
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Reliability</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  Enterprise-grade infrastructure with 99.99% uptime SLA and comprehensive disaster recovery.
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Privacy</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  Your data is yours. We never sell customer data and maintain strict data isolation policies.
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Accessibility</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  Powerful automation should be available to everyone, not just large corporations with big budgets.
                </CardContent>
              </Card>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Technology Stack</h2>
            <p className="text-muted-foreground mb-4">
              Apex Commons is built on modern, battle-tested technologies designed for scale and reliability:
            </p>
            <ul className="text-muted-foreground space-y-2">
              <li>• <strong>Microservices Architecture:</strong> Distributed services with independent scaling and deployment</li>
              <li>• <strong>Kubernetes Orchestration:</strong> Container orchestration for high availability and auto-scaling</li>
              <li>• <strong>Multi-Region Deployment:</strong> Global infrastructure with data residency compliance</li>
              <li>• <strong>Event-Driven Design:</strong> Asynchronous processing for high throughput and resilience</li>
              <li>• <strong>Zero-Trust Security:</strong> Defense-in-depth with end-to-end encryption and strict access controls</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">A Product of Apex Omnis Studio</h2>
            <p className="text-muted-foreground">
              Apex Commons is developed and maintained by <strong>Apex Omnis Studio</strong>, a technology company focused on building tools that enhance human capability rather than replace it. We believe in creating sustainable, ethical technology that serves the public good.
            </p>
          </section>
        </div>

        <div className="mt-16 p-8 border border-border/50 rounded-lg bg-muted/20 text-center">
          <h3 className="text-2xl font-bold mb-4">Join Us</h3>
          <p className="text-muted-foreground mb-6">
            Start automating your workflow today with our free tier.
          </p>
          <a href="/#signup" className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors">
            Get Started
          </a>
        </div>
      </div>
    </Layout>
  );
}
