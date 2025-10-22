import Layout from "@/components/Layout";

export default function Privacy() {
  return (
    <Layout>
      <div className="container py-16 max-w-5xl">
        <nav className="text-sm text-muted-foreground mb-8">
          <a href="/" className="hover:text-foreground">Home</a> / <span className="text-foreground">Privacy</span>
        </nav>
        <h1 className="text-4xl font-bold mb-4">Privacy</h1>
        <p className="text-xl text-muted-foreground">
          Privacy page content coming soon.
        </p>
      </div>
    </Layout>
  );
}
