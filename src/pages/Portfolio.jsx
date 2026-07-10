import useScrollReveal from '../hooks/useScrollReveal';
import './Portfolio.css';

const products = [
  {
    name: 'StudioMart', icon: '🎬', color: '#2563eb',
    tag: 'SaaS Platform',
    desc: 'A comprehensive studio management platform purpose-built for creative agencies and production houses. Handles bookings, resource scheduling, invoicing, and project management in one unified workspace.',
    tech: ['React', 'Node.js', 'PostgreSQL', 'AWS'],
    status: 'Live',
  },
  {
    name: 'SMIL-E', icon: '😊', color: '#7c3aed',
    tag: 'Enterprise HR',
    desc: 'An AI-powered employee engagement and workforce experience management suite. Features pulse surveys, recognition programs, sentiment analytics, and manager dashboards to drive workplace satisfaction.',
    tech: ['Angular', '.NET Core', 'SQL Server', 'Azure'],
    status: 'Live',
  },
  {
    name: 'SpotMyPhotographer', icon: '📷', color: '#06b6d4',
    tag: 'Marketplace',
    desc: 'A global marketplace connecting professional photographers with clients for events, portraits, commercial shoots, and editorial projects. Includes portfolio showcases, booking management, and secure payments.',
    tech: ['Flutter', 'Firebase', 'Stripe', 'Google Maps'],
    status: 'Live',
  },
  {
    name: 'Foto Leaf', icon: '🍃', color: '#10b981',
    tag: 'Consumer App',
    desc: 'An intelligent photo management and organisation app powered by AI-assisted tagging, face recognition, and smart albums. Designed to help users find any photo instantly from thousands of memories.',
    tech: ['Swift', 'CoreML', 'CloudKit', 'Vision API'],
    status: 'Beta',
  },
  {
    name: 'Tons of Memories', icon: '💾', color: '#f59e0b',
    tag: 'Family Platform',
    desc: 'A digital memory preservation platform enabling families and communities to collaboratively archive photos, videos, stories, and life events in a secure, beautifully designed digital vault.',
    tech: ['React Native', 'Node.js', 'MongoDB', 'S3'],
    status: 'Live',
  },
];

const capabilities = [
  { label: 'Enterprise Web', count: '40+', icon: '🌐' },
  { label: 'Mobile Apps', count: '35+', icon: '📱' },
  { label: 'BI Deployments', count: '30+', icon: '📊' },
  { label: 'AR/VR Projects', count: '15+', icon: '🥽' },
];

export default function Portfolio() {
  const prodRef = useScrollReveal();
  const capRef  = useScrollReveal();

  return (
    <main className="page-wrapper">
      {/* Hero */}
      <section className="page-hero">
        <div className="page-hero__orb" aria-hidden="true" />
        <div className="container">
          <div className="section-chip">Portfolio</div>
          <h1 className="section-title" style={{ fontSize: 'clamp(34px,5vw,62px)' }}>
            Products We've <span className="g-blue">Built & Own</span>
          </h1>
          <p className="section-sub" style={{ margin: '0 auto', fontSize: '18px' }}>
            Beyond client delivery, Vaanam invests in building its own digital products — spanning studio management, HR tech, photography marketplaces, and family memory preservation.
          </p>
        </div>
      </section>

      {/* Delivery Stats */}
      <section className="pf-stats" ref={capRef}>
        <div className="container pf-stats__grid">
          {capabilities.map(({ label, count, icon }) => (
            <div key={label} className="pf-stat-card glass-card reveal">
              <div className="pf-stat-icon">{icon}</div>
              <div className="pf-stat-num g-blue">{count}</div>
              <div className="pf-stat-label">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Products Showcase */}
      <section className="section products-showcase" ref={prodRef}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 'var(--sp-2xl)' }}>
            <div className="section-chip">Our Products</div>
            <h2 className="section-title reveal">Vaanam's <span className="g-blue">Product Suite</span></h2>
            <p className="section-sub reveal d1" style={{ margin: '0 auto' }}>
              Five distinctive platforms, each solving a real-world problem with thoughtful design and solid engineering.
            </p>
          </div>

          <div className="products-list">
            {products.map(({ name, icon, color, tag, desc, tech, status }, i) => (
              <div
                key={name}
                className={`product-row glass-card reveal d${(i % 3) + 1}`}
                style={{ '--pc': color }}
              >
                <div className="product-row__left">
                  <div className="product-row__icon" style={{ background: `${color}18`, border: `1px solid ${color}30` }}>{icon}</div>
                  <div>
                    <div className="product-row__meta">
                      <span className="product-row__tag" style={{ color, borderColor: `${color}40`, background: `${color}10` }}>{tag}</span>
                      <span className={`product-status ${status === 'Live' ? 'live' : 'beta'}`}>{status}</span>
                    </div>
                    <h3 className="product-row__name">{name}</h3>
                    <p className="product-row__desc">{desc}</p>
                  </div>
                </div>
                <div className="product-row__right">
                  <div className="product-row__tech-label">Tech Stack</div>
                  <div className="product-row__tech">
                    {tech.map((t) => (
                      <span key={t} className="tech-badge">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Delivery note */}
      <section className="section client-delivery">
        <div className="container">
          <div className="cd-banner glass-card">
            <div className="cd-banner__icon">🏆</div>
            <div className="cd-banner__text">
              <h2 className="cd-banner__title">150+ Client Projects Delivered</h2>
              <p className="cd-banner__sub">
                In addition to our owned products, Vaanam has delivered 150+ enterprise client projects across BI, Microsoft, Mobility, and Emerging Tech — spanning Finance, Healthcare, Retail, Manufacturing, and Logistics verticals.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
