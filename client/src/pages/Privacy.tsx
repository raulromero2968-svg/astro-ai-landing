import Layout from "@/components/Layout";

export default function Privacy() {
  return (
    <Layout>
      <div className="container py-16 max-w-4xl">
        <nav className="text-sm text-muted-foreground mb-8">
          <a href="/" className="hover:text-foreground">Home</a> / <span className="text-foreground">Privacy Policy</span>
        </nav>

        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-muted-foreground">Last updated: October 21, 2025</p>
        </div>

        <div className="prose prose-invert max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-4">1. Information We Collect</h2>
            <p className="text-muted-foreground">
              We collect information you provide directly to us when you create an account, use our services, or communicate with us. This includes:
            </p>
            <ul className="text-muted-foreground space-y-2 mt-4">
              <li>• Account information (name, email, password)</li>
              <li>• Workflow configurations and automation data</li>
              <li>• Usage data and analytics</li>
              <li>• Communication preferences</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">2. How We Use Your Information</h2>
            <p className="text-muted-foreground">
              We use the information we collect to:
            </p>
            <ul className="text-muted-foreground space-y-2 mt-4">
              <li>• Provide, maintain, and improve our services</li>
              <li>• Process transactions and send related information</li>
              <li>• Send technical notices and support messages</li>
              <li>• Respond to your comments and questions</li>
              <li>• Monitor and analyze trends and usage</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">3. Data Security</h2>
            <p className="text-muted-foreground">
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. This includes:
            </p>
            <ul className="text-muted-foreground space-y-2 mt-4">
              <li>• End-to-end encryption (AES-256)</li>
              <li>• TLS 1.3 for data in transit</li>
              <li>• Regular security audits and penetration testing</li>
              <li>• SOC 2 Type II compliance</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">4. Data Retention</h2>
            <p className="text-muted-foreground">
              We retain your information for as long as your account is active or as needed to provide services. You can request deletion of your data at any time by contacting support.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">5. Your Rights</h2>
            <p className="text-muted-foreground">
              Depending on your location, you may have certain rights regarding your personal information, including:
            </p>
            <ul className="text-muted-foreground space-y-2 mt-4">
              <li>• Right to access your data</li>
              <li>• Right to rectification</li>
              <li>• Right to erasure</li>
              <li>• Right to data portability</li>
              <li>• Right to object to processing</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">6. Contact Us</h2>
            <p className="text-muted-foreground">
              If you have questions about this Privacy Policy, please contact us at: privacy@astro-ai.com
            </p>
          </section>
        </div>
      </div>
    </Layout>
  );
}
