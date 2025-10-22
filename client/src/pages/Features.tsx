import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Features() {
  return (
    <Layout>
      <div className="container py-16 max-w-5xl">
        <nav className="text-sm text-muted-foreground mb-8">
          <a href="/" className="hover:text-foreground">Home</a> / <span className="text-foreground">Features</span>
        </nav>
        <h1 className="text-4xl font-bold mb-4">Features</h1>
        <p className="text-xl text-muted-foreground mb-12">
          Everything you need to automate your workflow and scale your business.
        </p>
        <div className="prose prose-invert max-w-none">
          <p>Comprehensive features documentation coming soon.</p>
        </div>
      </div>
    </Layout>
  );
}
