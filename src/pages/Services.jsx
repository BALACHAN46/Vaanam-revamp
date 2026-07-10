import { useState } from 'react';
import { Link } from 'react-router-dom';
import useScrollReveal from '../hooks/useScrollReveal';
import './Services.css';

const coes = [
  {
    id: 'bi', icon: '📊', color: '#2563eb', gradient: 'linear-gradient(135deg,#2563eb,#1e40af)',
    title: 'Business Intelligence',
    tagline: 'From Raw Data to Real Decisions',
    desc: 'Our BI CoE helps organisations unlock the full value of their data. We design and build scalable data warehouses, integrate disparate data sources, and deliver analytics frameworks that give business stakeholders clear, actionable insights at their fingertips.',
    capabilities: [
      { name: 'Data Warehousing', detail: 'Dimensional modelling, star/snowflake schemas, Kimball/Inmon methodologies' },
      { name: 'Data Integration & ETL', detail: 'SSIS, Apache NiFi, Azure Data Factory pipelines' },
      { name: 'Analytics Frameworks', detail: 'Power BI, Tableau, SSRS dashboards and self-service BI' },
      { name: 'Data Governance', detail: 'Metadata management, data lineage, quality frameworks' },
      { name: 'Cloud BI', detail: 'Azure Synapse, AWS Redshift, Snowflake migrations' },
    ],
    industries: ['Finance', 'Healthcare', 'Retail', 'Logistics'],
  },
  {
    id: 'microsoft', icon: '🪟', color: '#7c3aed', gradient: 'linear-gradient(135deg,#7c3aed,#5b21b6)',
    title: 'Microsoft Services',
    tagline: 'Enterprise Web on the Microsoft Stack',
    desc: 'With deep .NET expertise spanning two decades of platform evolution, our Microsoft CoE delivers enterprise web applications on ASP.NET and MVC, handles complex legacy migration projects, and modernises aging .NET systems to the latest .NET LTS releases on Azure.',
    capabilities: [
      { name: 'ASP.NET & MVC Applications', detail: 'Full-stack enterprise portals, intranets, and web applications' },
      { name: 'Legacy .NET Modernisation', detail: '.NET Framework → .NET 8 migration, strangler-fig patterns' },
      { name: 'Azure Cloud Integration', detail: 'App Services, Azure Functions, Service Bus, API Management' },
      { name: 'SharePoint & M365', detail: 'SharePoint Online, Teams integrations, Power Automate' },
      { name: 'Microservices on .NET', detail: 'Containerised .NET services with Docker, Kubernetes' },
    ],
    industries: ['Government', 'Finance', 'Insurance', 'Manufacturing'],
  },
  {
    id: 'mobility', icon: '📱', color: '#06b6d4', gradient: 'linear-gradient(135deg,#06b6d4,#0891b2)',
    title: 'Mobility Services',
    tagline: 'Native Performance. Cross-Platform Reach.',
    desc: 'Our Mobility CoE builds high-performance mobile applications that users love. From custom native Android and iOS solutions with full platform-feature access to Flutter apps that run beautifully across both platforms from a single codebase.',
    capabilities: [
      { name: 'Native Android', detail: 'Kotlin/Java, Jetpack Compose, Material Design 3' },
      { name: 'Native iOS', detail: 'Swift, SwiftUI, Combine framework' },
      { name: 'Flutter / Dart', detail: 'Cross-platform apps with native-like performance' },
      { name: 'Mobile Backend Integration', detail: 'REST/GraphQL APIs, Firebase, AWS Amplify' },
      { name: 'App Store Deployment', detail: 'CI/CD pipelines, TestFlight, Play Console management' },
    ],
    industries: ['Retail', 'Healthcare', 'Hospitality', 'Media'],
  },
  {
    id: 'emerging', icon: '🚀', color: '#10b981', gradient: 'linear-gradient(135deg,#10b981,#059669)',
    title: 'Emerging Technologies',
    tagline: 'Reality. Intelligence. The Future — Now.',
    desc: 'Our Emerging Tech CoE explores and operationalises the technologies that define what\'s next. We build immersive AR and VR experiences using leading Reality platforms, and implement foundational AI and ML solutions that automate, predict, and personalise at scale.',
    capabilities: [
      { name: 'Augmented Reality', detail: 'ARKit, ARCore, Vuforia — overlays, markers, spatial computing' },
      { name: 'Virtual Reality', detail: 'Unity 3D, Unreal Engine — training simulations, virtual tours' },
      { name: 'AI / ML Models', detail: 'TensorFlow, PyTorch — classification, regression, forecasting' },
      { name: 'Natural Language Processing', detail: 'Chatbots, sentiment analysis, document intelligence' },
      { name: 'Computer Vision', detail: 'Object detection, OCR, image classification pipelines' },
    ],
    industries: ['Manufacturing', 'Education', 'Healthcare', 'Real Estate'],
  },
];

const process = [
  { num: '01', title: 'Discovery Workshop', desc: 'We immerse ourselves in your business goals, user needs, and technical landscape through structured workshops.' },
  { num: '02', title: 'Solution Architecture', desc: 'Our architects design a scalable, secure, and cost-efficient solution blueprint tailored to your requirements.' },
  { num: '03', title: 'Agile Delivery', desc: 'Two-week sprints with continuous demos, code reviews, and iterative refinement keep delivery on track.' },
  { num: '04', title: 'QA & Validation', desc: 'Rigorous testing — functional, performance, security — before every release milestone.' },
  { num: '05', title: 'Deployment & Handover', desc: 'Smooth production deployments with zero-downtime strategies and full knowledge transfer.' },
  { num: '06', title: 'Ongoing Support', desc: 'Post-launch monitoring, SLA-backed support, and continuous improvement partnerships.' },
];

export default function Services() {
  const [activeCoE, setActiveCoE] = useState(coes[0].id);
  const current = coes.find((c) => c.id === activeCoE);
  const procRef = useScrollReveal();

  return (
    <main className="page-wrapper">
      {/* Hero */}
      <section className="page-hero">
        <div className="page-hero__orb" aria-hidden="true" />
        <div className="container">
          <div className="section-chip">Centers of Excellence</div>
          <h1 className="section-title" style={{ fontSize: 'clamp(34px,5vw,62px)' }}>
            Four Disciplines.<br /><span className="g-blue">Limitless Capability.</span>
          </h1>
          <p className="section-sub" style={{ margin: '0 auto', fontSize: '18px' }}>
            Each Vaanam Center of Excellence is a focused practice — staffed by domain veterans, led by experienced architects, and built to deliver end-to-end enterprise solutions.
          </p>
        </div>
      </section>

      {/* CoE Explorer */}
      <section className="section coe-explorer">
        <div className="container">
          {/* Tab Selector */}
          <div className="coe-tabs" role="tablist" aria-label="Centers of Excellence">
            {coes.map(({ id, icon, title, color }) => (
              <button
                key={id}
                id={`tab-${id}`}
                role="tab"
                aria-selected={activeCoE === id}
                aria-controls={`panel-${id}`}
                className={`coe-tab ${activeCoE === id ? 'active' : ''}`}
                style={{ '--tc': color }}
                onClick={() => setActiveCoE(id)}
              >
                <span className="coe-tab__icon">{icon}</span>
                <span className="coe-tab__label">{title}</span>
              </button>
            ))}
          </div>

          {/* Detail Panel */}
          <div
            id={`panel-${current.id}`}
            role="tabpanel"
            aria-labelledby={`tab-${current.id}`}
            className="coe-panel glass-card"
            key={current.id}
          >
            <div className="coe-panel__header" style={{ background: current.gradient }}>
              <div className="coe-panel__icon">{current.icon}</div>
              <div>
                <p className="coe-panel__tagline">{current.tagline}</p>
                <h2 className="coe-panel__title">{current.title}</h2>
              </div>
            </div>
            <div className="coe-panel__body">
              <p className="coe-panel__desc">{current.desc}</p>
              <div className="coe-panel__cols">
                <div>
                  <h3 className="coe-panel__subtitle">Core Capabilities</h3>
                  <ul className="coe-caps">
                    {current.capabilities.map(({ name, detail }) => (
                      <li key={name} className="coe-cap">
                        <div className="coe-cap__name">{name}</div>
                        <div className="coe-cap__detail">{detail}</div>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="coe-panel__subtitle">Industries Served</h3>
                  <div className="coe-industries">
                    {current.industries.map((ind) => (
                      <span key={ind} className="coe-industry" style={{ borderColor: `${current.color}40`, color: current.color }}>
                        {ind}
                      </span>
                    ))}
                  </div>
                  <div className="coe-cta-box">
                    <p>Interested in our {current.title} practice?</p>
                    <Link to="/contact" className="btn btn-primary btn-sm" id={`coe-cta-${current.id}`}>
                      Talk to Our Experts
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Delivery Process */}
      <section className="section process-section" ref={procRef}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 'var(--sp-2xl)' }}>
            <div className="section-chip">How We Deliver</div>
            <h2 className="section-title reveal">Our Proven <span className="g-blue">6-Step Process</span></h2>
            <p className="section-sub reveal d1" style={{ margin: '0 auto' }}>
              A disciplined, transparent delivery model that consistently produces on-time, on-budget, high-quality outcomes.
            </p>
          </div>
          <div className="process-grid">
            {process.map(({ num, title, desc }, i) => (
              <div key={num} className={`proc-card glass-card reveal d${(i % 3) + 1}`}>
                <span className="proc-num g-blue">{num}</span>
                <h3 className="proc-title">{title}</h3>
                <p className="proc-desc">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section style={{ background: 'var(--bg)', padding: 'var(--sp-xl) 0 var(--sp-3xl)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 className="section-title" style={{ marginBottom: 'var(--sp-md)' }}>
            Not Sure Which <span className="g-blue">Service Fits?</span>
          </h2>
          <p className="section-sub" style={{ margin: '0 auto var(--sp-xl)' }}>
            Our consultants will help you identify the right approach for your challenges in a free 30-minute discovery call.
          </p>
          <Link to="/contact" className="btn btn-primary btn-lg" id="services-bottom-cta">Book a Free Discovery Call</Link>
        </div>
      </section>
    </main>
  );
}
