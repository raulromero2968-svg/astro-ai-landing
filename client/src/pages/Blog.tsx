import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Blog() {
  return (
    <Layout>
      <div className="container py-16 max-w-5xl">
        <nav className="text-sm text-muted-foreground mb-8">
          <a href="/" className="hover:text-foreground">Home</a> / <span className="text-foreground">Blog</span>
        </nav>

        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Blog & Resources</h1>
          <p className="text-xl text-muted-foreground">
            Insights, tutorials, and updates from the Apex Commons team.
          </p>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <Badge className="w-fit mb-2">Technical</Badge>
              <CardTitle className="text-xl">Building Scalable Workflow Automation</CardTitle>
              <CardDescription>March 15, 2025 • 8 min read</CardDescription>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              <p>Learn how to design workflow automation systems that scale from hundreds to millions of executions per day...</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Badge className="w-fit mb-2">Case Study</Badge>
              <CardTitle className="text-xl">How Agency X Saved 40 Hours Per Week</CardTitle>
              <CardDescription>March 10, 2025 • 6 min read</CardDescription>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              <p>A digital marketing agency shares how they automated client onboarding, reporting, and communication...</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Badge className="w-fit mb-2">Product Update</Badge>
              <CardTitle className="text-xl">Introducing AI-Powered Workflow Optimization</CardTitle>
              <CardDescription>March 5, 2025 • 4 min read</CardDescription>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              <p>Our new AI engine automatically identifies bottlenecks and suggests optimizations for your workflows...</p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground">More articles coming soon. Subscribe to our newsletter for updates.</p>
        </div>
      </div>
    </Layout>
  );
}
