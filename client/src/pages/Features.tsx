import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Features() {
  return (
    <Layout>
      <div className="container py-16 max-w-5xl">
        {/* Breadcrumb */}
        <nav className="text-sm text-muted-foreground mb-8">
          <a href="/" className="hover:text-foreground">Home</a> / <span className="text-foreground">Features</span>
        </nav>

        {/* Page Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Platform Features & Services</h1>
          <p className="text-xl text-muted-foreground">
            Enterprise-grade automation platform built on service-oriented architecture principles for maximum scalability, reliability, and interoperability.
          </p>
        </div>

        {/* Table of Contents */}
        <Card className="mb-12 bg-muted/30">
          <CardHeader>
            <CardTitle className="text-lg">Table of Contents</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm">
              <li><a href="#core-services" className="text-primary hover:underline">1. Core Services Architecture</a></li>
              <li><a href="#workflow-engine" className="text-primary hover:underline">2. Workflow Orchestration Engine</a></li>
              <li><a href="#integration-layer" className="text-primary hover:underline">3. Integration Services Layer</a></li>
              <li><a href="#data-services" className="text-primary hover:underline">4. Data Management Services</a></li>
              <li><a href="#intelligence" className="text-primary hover:underline">5. AI Intelligence Services</a></li>
              <li><a href="#security" className="text-primary hover:underline">6. Security & Compliance Framework</a></li>
              <li><a href="#monitoring" className="text-primary hover:underline">7. Monitoring & Observability</a></li>
            </ul>
          </CardContent>
        </Card>

        {/* Content Sections */}
        <div className="space-y-16">
          
          {/* Core Services */}
          <section id="core-services">
            <h2 className="text-3xl font-bold mb-6">1. Core Services Architecture</h2>
            <div className="space-y-6">
              <p className="text-muted-foreground">
                Apex Commons is built on a distributed service-oriented architecture (SOA) that enables loose coupling, high availability, and horizontal scalability. Each service operates independently with well-defined interfaces and contracts.
              </p>
              
              <Card>
                <CardHeader>
                  <CardTitle>Service Registry & Discovery</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    Dynamic service registration and discovery mechanism enabling services to locate and communicate with each other without hardcoded endpoints.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm">Capabilities</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Automatic service registration</li>
                        <li>• Health check monitoring</li>
                        <li>• Load balancing</li>
                        <li>• Failover handling</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm">Protocols</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• REST/HTTP</li>
                        <li>• gRPC</li>
                        <li>• WebSocket</li>
                        <li>• Message Queue (AMQP)</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>API Gateway</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Centralized entry point for all client requests, providing authentication, rate limiting, request routing, and protocol translation.
                  </p>
                  <div className="bg-muted/50 p-4 rounded-lg font-mono text-xs">
                    <div className="text-primary">// API Gateway Configuration</div>
                    <div className="mt-2">
                      <span className="text-accent">endpoint:</span> api.astro-ai.com<br/>
                      <span className="text-accent">version:</span> v1<br/>
                      <span className="text-accent">rate_limit:</span> 1000 requests/minute<br/>
                      <span className="text-accent">auth:</span> OAuth 2.0 + JWT
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Workflow Engine */}
          <section id="workflow-engine">
            <h2 className="text-3xl font-bold mb-6">2. Workflow Orchestration Engine</h2>
            <div className="space-y-6">
              <p className="text-muted-foreground">
                State-machine-based workflow engine supporting complex business process automation with conditional logic, parallel execution, and error handling.
              </p>

              <img 
                src="/feature_automate_workflow.png" 
                alt="Workflow orchestration architecture" 
                className="rounded-lg border border-border/50 mb-6"
              />

              <div className="grid md:grid-cols-3 gap-4">
                <Card>
                  <CardHeader>
                    <Badge className="w-fit mb-2">Service</Badge>
                    <CardTitle className="text-base">Workflow Designer</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground">
                    Visual workflow builder with drag-and-drop interface for creating automation sequences without code.
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <Badge className="w-fit mb-2">Service</Badge>
                    <CardTitle className="text-base">Execution Engine</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground">
                    Distributed execution runtime with support for parallel processing, retries, and compensation logic.
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <Badge className="w-fit mb-2">Service</Badge>
                    <CardTitle className="text-base">State Manager</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground">
                    Persistent state storage with ACID guarantees for workflow execution tracking and recovery.
                  </CardContent>
                </Card>
              </div>

              <Card className="bg-muted/20">
                <CardHeader>
                  <CardTitle className="text-lg">Workflow Patterns Supported</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3">Control Flow Patterns</h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>→ Sequential execution</li>
                        <li>→ Parallel split & synchronization</li>
                        <li>→ Exclusive choice (XOR)</li>
                        <li>→ Multi-choice (OR)</li>
                        <li>→ Loop & iteration</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3">Data Patterns</h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>→ Task data passing</li>
                        <li>→ Workflow data transformation</li>
                        <li>→ Case data management</li>
                        <li>→ External data integration</li>
                        <li>→ Data-based routing</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Integration Layer */}
          <section id="integration-layer">
            <h2 className="text-3xl font-bold mb-6">3. Integration Services Layer</h2>
            <div className="space-y-6">
              <p className="text-muted-foreground">
                Enterprise Service Bus (ESB) architecture enabling seamless integration with external systems through standardized adapters and connectors.
              </p>

              <Card>
                <CardHeader>
                  <CardTitle>Integration Patterns</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="border-l-2 border-primary pl-4">
                      <h4 className="font-semibold mb-2">Message-Oriented Middleware</h4>
                      <p className="text-sm text-muted-foreground">
                        Asynchronous message passing with guaranteed delivery, message transformation, and content-based routing.
                      </p>
                    </div>
                    <div className="border-l-2 border-accent pl-4">
                      <h4 className="font-semibold mb-2">Request-Response</h4>
                      <p className="text-sm text-muted-foreground">
                        Synchronous API calls with timeout handling, circuit breakers, and automatic retry logic.
                      </p>
                    </div>
                    <div className="border-l-2 border-secondary pl-4">
                      <h4 className="font-semibold mb-2">Event-Driven Architecture</h4>
                      <p className="text-sm text-muted-foreground">
                        Pub/sub event streaming for real-time data synchronization and reactive workflows.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="grid md:grid-cols-2 gap-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-base">Pre-built Connectors</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      <li>✓ Email (SMTP, IMAP, Exchange)</li>
                      <li>✓ CRM (Salesforce, HubSpot)</li>
                      <li>✓ Payment (Stripe, PayPal)</li>
                      <li>✓ Database (SQL, NoSQL)</li>
                      <li>✓ Cloud Storage (S3, Azure)</li>
                      <li>✓ Collaboration (Slack, Teams)</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-base">Custom Integration SDK</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      <li>✓ REST API adapter framework</li>
                      <li>✓ SOAP/XML integration</li>
                      <li>✓ GraphQL support</li>
                      <li>✓ Webhook handlers</li>
                      <li>✓ FTP/SFTP connectors</li>
                      <li>✓ Custom protocol adapters</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Data Services */}
          <section id="data-services">
            <h2 className="text-3xl font-bold mb-6">4. Data Management Services</h2>
            <div className="space-y-6">
              <p className="text-muted-foreground">
                Distributed data layer with multi-model database support, caching, and data synchronization across services.
              </p>

              <Card className="bg-muted/20">
                <CardHeader>
                  <CardTitle>Data Architecture Components</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold mb-3 flex items-center gap-2">
                        <Badge variant="outline">Layer 1</Badge>
                        Distributed Cache
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Redis-based in-memory cache with automatic invalidation and cache-aside pattern implementation.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3 flex items-center gap-2">
                        <Badge variant="outline">Layer 2</Badge>
                        Primary Data Store
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        PostgreSQL for transactional data with ACID guarantees, read replicas, and automatic failover.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3 flex items-center gap-2">
                        <Badge variant="outline">Layer 3</Badge>
                        Document Store
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        MongoDB for flexible schema storage, workflow state, and audit logs with horizontal sharding.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3 flex items-center gap-2">
                        <Badge variant="outline">Layer 4</Badge>
                        Object Storage
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        S3-compatible storage for files, attachments, and large binary objects with CDN integration.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* AI Intelligence */}
          <section id="intelligence">
            <h2 className="text-3xl font-bold mb-6">5. AI Intelligence Services</h2>
            <div className="space-y-6">
              <p className="text-muted-foreground">
                Machine learning pipeline and AI services for predictive analytics, natural language processing, and intelligent automation.
              </p>

              <img 
                src="/feature_ai_insights.png" 
                alt="AI intelligence services architecture" 
                className="rounded-lg border border-border/50 mb-6"
              />

              <div className="grid md:grid-cols-2 gap-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-base">ML Model Registry</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground space-y-2">
                    <p>Centralized repository for trained models with versioning, A/B testing, and rollback capabilities.</p>
                    <ul className="space-y-1 mt-3">
                      <li>• Model versioning & lineage</li>
                      <li>• Performance metrics tracking</li>
                      <li>• Automated retraining pipelines</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-base">Inference Engine</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground space-y-2">
                    <p>Real-time prediction service with auto-scaling and sub-100ms latency for production workloads.</p>
                    <ul className="space-y-1 mt-3">
                      <li>• Batch & real-time inference</li>
                      <li>• GPU acceleration support</li>
                      <li>• Model serving optimization</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>AI Capabilities</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-4 text-sm">
                    <div>
                      <h4 className="font-semibold mb-2">NLP Services</h4>
                      <ul className="text-muted-foreground space-y-1">
                        <li>• Sentiment analysis</li>
                        <li>• Entity extraction</li>
                        <li>• Text classification</li>
                        <li>• Language detection</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Predictive Analytics</h4>
                      <ul className="text-muted-foreground space-y-1">
                        <li>• Trend forecasting</li>
                        <li>• Anomaly detection</li>
                        <li>• Churn prediction</li>
                        <li>• Revenue modeling</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Optimization</h4>
                      <ul className="text-muted-foreground space-y-1">
                        <li>• Workflow optimization</li>
                        <li>• Resource allocation</li>
                        <li>• Cost optimization</li>
                        <li>• Performance tuning</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Security */}
          <section id="security">
            <h2 className="text-3xl font-bold mb-6">6. Security & Compliance Framework</h2>
            <div className="space-y-6">
              <p className="text-muted-foreground">
                Enterprise-grade security architecture with defense-in-depth strategy, zero-trust principles, and comprehensive compliance controls.
              </p>

              <Card className="border-primary/50">
                <CardHeader>
                  <CardTitle>Security Layers</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-3">Authentication & Authorization</h4>
                        <ul className="text-sm text-muted-foreground space-y-2">
                          <li>✓ OAuth 2.0 / OpenID Connect</li>
                          <li>✓ Multi-factor authentication (MFA)</li>
                          <li>✓ Role-based access control (RBAC)</li>
                          <li>✓ Attribute-based access control (ABAC)</li>
                          <li>✓ SSO integration (SAML, LDAP)</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-3">Data Protection</h4>
                        <ul className="text-sm text-muted-foreground space-y-2">
                          <li>✓ End-to-end encryption (AES-256)</li>
                          <li>✓ TLS 1.3 for data in transit</li>
                          <li>✓ Key management service (KMS)</li>
                          <li>✓ Data masking & tokenization</li>
                          <li>✓ Encryption at rest</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Compliance Certifications</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-4 gap-4">
                    <div className="text-center p-4 border border-border rounded-lg">
                      <div className="font-bold text-primary mb-1">SOC 2 Type II</div>
                      <div className="text-xs text-muted-foreground">Security & Availability</div>
                    </div>
                    <div className="text-center p-4 border border-border rounded-lg">
                      <div className="font-bold text-primary mb-1">GDPR</div>
                      <div className="text-xs text-muted-foreground">EU Data Protection</div>
                    </div>
                    <div className="text-center p-4 border border-border rounded-lg">
                      <div className="font-bold text-primary mb-1">CCPA</div>
                      <div className="text-xs text-muted-foreground">California Privacy</div>
                    </div>
                    <div className="text-center p-4 border border-border rounded-lg">
                      <div className="font-bold text-primary mb-1">ISO 27001</div>
                      <div className="text-xs text-muted-foreground">Information Security</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Monitoring */}
          <section id="monitoring">
            <h2 className="text-3xl font-bold mb-6">7. Monitoring & Observability</h2>
            <div className="space-y-6">
              <p className="text-muted-foreground">
                Comprehensive observability stack with distributed tracing, metrics collection, and centralized logging for full system visibility.
              </p>

              <img 
                src="/command-center-ultimate.png?v=ultimate2025" 
                alt="Monitoring and observability dashboard" 
                className="rounded-lg border border-border/50 mb-6 cursor-pointer hover:scale-[1.02] transition-transform duration-300"
                onClick={() => window.open('/command-center-ultimate.png?v=ultimate2025', '_blank')}
              />

              <div className="grid md:grid-cols-3 gap-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-base">Metrics & Telemetry</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground">
                    <ul className="space-y-2">
                      <li>• Service health metrics</li>
                      <li>• Performance counters</li>
                      <li>• Resource utilization</li>
                      <li>• Custom business metrics</li>
                      <li>• SLA tracking</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-base">Distributed Tracing</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground">
                    <ul className="space-y-2">
                      <li>• Request flow visualization</li>
                      <li>• Latency analysis</li>
                      <li>• Error propagation tracking</li>
                      <li>• Service dependency mapping</li>
                      <li>• Performance bottleneck detection</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-base">Centralized Logging</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground">
                    <ul className="space-y-2">
                      <li>• Structured log aggregation</li>
                      <li>• Full-text search</li>
                      <li>• Log correlation</li>
                      <li>• Audit trail</li>
                      <li>• Retention policies</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <Card className="bg-muted/20">
                <CardHeader>
                  <CardTitle>Alerting & Incident Response</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Intelligent alerting system with anomaly detection, escalation policies, and automated incident response workflows.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <h4 className="font-semibold mb-2">Alert Channels</h4>
                      <ul className="text-muted-foreground space-y-1">
                        <li>→ Email notifications</li>
                        <li>→ SMS/Phone alerts</li>
                        <li>→ Slack/Teams integration</li>
                        <li>→ PagerDuty integration</li>
                        <li>→ Webhook callbacks</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Response Automation</h4>
                      <ul className="text-muted-foreground space-y-1">
                        <li>→ Auto-scaling triggers</li>
                        <li>→ Circuit breaker activation</li>
                        <li>→ Failover orchestration</li>
                        <li>→ Self-healing workflows</li>
                        <li>→ Incident documentation</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

        </div>

        {/* CTA */}
        <div className="mt-16 p-8 border border-border/50 rounded-lg bg-muted/20 text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Implement Enterprise Automation?</h3>
          <p className="text-muted-foreground mb-6">
            Start with 5 free automation workflows. No credit card required. Full API access included.
          </p>
          <div className="flex gap-4 justify-center">
            <a href="/#signup" className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors">
              Start Free Trial
            </a>
            <a href="/contact" className="inline-flex items-center justify-center rounded-md border border-border px-8 py-3 text-sm font-medium hover:bg-muted transition-colors">
              Contact Sales
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
}

