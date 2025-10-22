import Layout from "@/components/Layout";

export default function Terms() {
  return (
    <Layout>
      <div className="container py-16 max-w-4xl">
        <nav className="text-sm text-muted-foreground mb-8">
          <a href="/" className="hover:text-foreground">Home</a> / <span className="text-foreground">Terms of Service</span>
        </nav>

        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
          <p className="text-muted-foreground">Last updated: October 21, 2025</p>
        </div>

        <div className="prose prose-invert max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
            <p className="text-muted-foreground">
              By accessing or using Astro AI's services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">2. Service Description</h2>
            <p className="text-muted-foreground">
              Astro AI provides workflow automation and integration services. We reserve the right to modify, suspend, or discontinue any part of the service at any time with reasonable notice.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">3. User Accounts</h2>
            <p className="text-muted-foreground">
              You are responsible for:
            </p>
            <ul className="text-muted-foreground space-y-2 mt-4">
              <li>• Maintaining the security of your account credentials</li>
              <li>• All activities that occur under your account</li>
              <li>• Notifying us immediately of any unauthorized access</li>
              <li>• Ensuring your use complies with applicable laws</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">4. Acceptable Use</h2>
            <p className="text-muted-foreground">
              You agree not to:
            </p>
            <ul className="text-muted-foreground space-y-2 mt-4">
              <li>• Use the service for any illegal purpose</li>
              <li>• Attempt to gain unauthorized access to our systems</li>
              <li>• Interfere with or disrupt the service</li>
              <li>• Use the service to send spam or malicious content</li>
              <li>• Reverse engineer or attempt to extract source code</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">5. Payment Terms</h2>
            <p className="text-muted-foreground">
              Subscription fees are billed in advance on a monthly or annual basis. You authorize us to charge your payment method for all fees. Refunds are provided on a case-by-case basis at our discretion.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">6. Intellectual Property</h2>
            <p className="text-muted-foreground">
              The service and its original content, features, and functionality are owned by Apex Omnis Studio and are protected by international copyright, trademark, and other intellectual property laws.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">7. Limitation of Liability</h2>
            <p className="text-muted-foreground">
              To the maximum extent permitted by law, Astro AI shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of the service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">8. Termination</h2>
            <p className="text-muted-foreground">
              We may terminate or suspend your account immediately, without prior notice, for any breach of these Terms. Upon termination, your right to use the service will immediately cease.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">9. Changes to Terms</h2>
            <p className="text-muted-foreground">
              We reserve the right to modify these terms at any time. We will notify users of material changes via email or through the service. Continued use after changes constitutes acceptance.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">10. Contact Information</h2>
            <p className="text-muted-foreground">
              Questions about the Terms of Service should be sent to: legal@astro-ai.com
            </p>
          </section>
        </div>
      </div>
    </Layout>
  );
}
