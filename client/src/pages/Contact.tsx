import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, MessageSquare, Phone } from "lucide-react";

export default function Contact() {
  return (
    <Layout>
      <div className="container py-16 max-w-4xl">
        <nav className="text-sm text-muted-foreground mb-8">
          <a href="/" className="hover:text-foreground">Home</a> / <span className="text-foreground">Contact</span>
        </nav>

        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-muted-foreground">
            Get in touch with our team. We're here to help.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card>
            <CardHeader>
              <Mail className="w-8 h-8 text-primary mb-2" />
              <CardTitle className="text-lg">Email</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              <p>support@astro-ai.com</p>
              <p className="mt-2">Response within 24 hours</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <MessageSquare className="w-8 h-8 text-primary mb-2" />
              <CardTitle className="text-lg">Live Chat</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              <p>Available in dashboard</p>
              <p className="mt-2">Mon-Fri, 9am-6pm EST</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Phone className="w-8 h-8 text-primary mb-2" />
              <CardTitle className="text-lg">Phone</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              <p>Enterprise customers only</p>
              <p className="mt-2">24/7 support available</p>
            </CardContent>
          </Card>
        </div>

        <Card className="mb-12">
          <CardHeader>
            <CardTitle>Send Us a Message</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Name</label>
                  <input type="text" className="w-full px-4 py-2 rounded-md bg-muted border border-border" placeholder="Your name" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Email</label>
                  <input type="email" className="w-full px-4 py-2 rounded-md bg-muted border border-border" placeholder="your@email.com" />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Subject</label>
                <input type="text" className="w-full px-4 py-2 rounded-md bg-muted border border-border" placeholder="How can we help?" />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Message</label>
                <textarea rows={6} className="w-full px-4 py-2 rounded-md bg-muted border border-border" placeholder="Tell us more..."></textarea>
              </div>
              <Button type="submit" className="w-full md:w-auto">Send Message</Button>
            </form>
          </CardContent>
        </Card>

        <div className="text-center text-sm text-muted-foreground">
          <p>For sales inquiries: sales@astro-ai.com</p>
          <p className="mt-2">For partnership opportunities: partnerships@astro-ai.com</p>
        </div>
      </div>
    </Layout>
  );
}
