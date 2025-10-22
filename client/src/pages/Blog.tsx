import Layout from "@/components/Layout";

export default function Blog() {
  return (
    <Layout>
      <div className="container py-16 max-w-5xl">
        <nav className="text-sm text-muted-foreground mb-8">
          <a href="/" className="hover:text-foreground">Home</a> / <span className="text-foreground">Blog</span>
        </nav>
        <h1 className="text-4xl font-bold mb-4">Blog</h1>
        <p className="text-xl text-muted-foreground">
          Blog page content coming soon.
        </p>
      </div>
    </Layout>
  );
}
