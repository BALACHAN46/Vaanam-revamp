import { Link } from 'react-router-dom';
import useScrollReveal from '../hooks/useScrollReveal';
import './About.css';

const values = [
  { icon: '🎯', color: '#2563eb', title: 'Client-First Mindset', desc: 'Every decision we make starts and ends with client success. Your goals are our goals.' },
  { icon: '🔬', color: '#7c3aed', title: 'Engineering Excellence', desc: 'We hold ourselves to the highest standards — clean code, robust architecture, thorough testing.' },
  { icon: '🤝', color: '#06b6d4', title: 'Transparent Partnership', desc: 'No surprises. We communicate openly, share progress regularly, and own our mistakes.' },
  { icon: '🌱', color: '#10b981', title: 'Continuous Innovation', desc: 'Technology evolves fast. We invest in upskilling and emerging tech to stay ahead for you.' },
];

const leadership = [
  { name: 'Vaanam Leadership', role: 'Executive Team', emoji: '👔', since: '2011', location: 'Alpharetta, GA' },
  { name: 'Technology Council', role: 'Architecture & CTO Office', emoji: '💻', since: '2011', location: 'Coimbatore, India' },
  { name: 'Delivery Management', role: 'Program & Project Office', emoji: '📋', since: '2012', location: 'Coimbatore, India' },
  { name: 'CoE Practice Leads', role: 'BI · Microsoft · Mobile · Emerging', emoji: '🔬', since: '2012', location: 'India & USA' },
];

const timeline = [
  { year: '2011', title: 'Founded in Chicago', desc: 'Vaanam Technologies incorporated in Illinois with a founding mission to deliver enterprise-grade software consulting.' },
  { year: '2012', title: 'ODC Established', desc: 'Offshore Development Center launched in Coimbatore, Tamil Nadu, building the India engineering foundation.' },
  { year: '2015', title: 'Microsoft CoE Launched', desc: 'Formal Center of Excellence for ASP.NET and MVC development established, growing the Microsoft practice.' },
  { year: '2017', title: 'BI & Analytics Practice', desc: 'Business Intelligence CoE formed to address growing demand for data warehousing and analytics solutions.' },
  { year: '2019', title: 'Mobility & Flutter', desc: 'Expanded into cross-platform mobile development with Flutter, adding native Android and iOS capabilities.' },
  { year: '2021', title: 'Emerging Tech CoE', desc: 'AR/VR and AI/ML practice established to future-proof client solutions with Reality and intelligent technologies.' },
  { year: '2024', title: 'HQ in Alpharetta, GA', desc: 'Corporate headquarters relocated to Alpharetta, Georgia — strengthening the Southeast US presence.' },
];

export default function About() {
  const valRef  = useScrollReveal();
  const tlRef   = useScrollReveal();
  const teamRef = useScrollReveal();

  return (
    <main className="page-wrapper">
      {/* Hero */}
      <section className="page-hero">
        <div className="page-hero__orb" aria-hidden="true" />
        <div className="container">
          <div className="section-chip">About Vaanam</div>
          <h1 className="section-title" style={{ fontSize: 'clamp(36px,5vw,64px)' }}>
            Purpose-Built for<br /><span className="g-blue">Enterprise Excellence</span>
          </h1>
          <p className="section-sub" style={{ margin: '0 auto', fontSize: '18px' }}>
            Founded in 2011 in Chicago, Vaanam Technologies has spent over a decade delivering high-impact IT services with a dual-shore model that combines US leadership with India engineering excellence.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section about-mv">
        <div className="container about-mv-grid">
          <div className="mv-card glass-card">
            <div className="mv-icon">🎯</div>
            <h2 className="mv-title">Our Mission</h2>
            <p className="mv-text">To empower organisations with intelligent, scalable technology solutions that drive measurable business outcomes — delivered with the highest standards of quality, integrity, and partnership.</p>
          </div>
          <div className="mv-card glass-card">
            <div className="mv-icon">🌟</div>
            <h2 className="mv-title">Our Vision</h2>
            <p className="mv-text">To be the most trusted technology partner for mid-market and enterprise clients globally, recognized for our domain depth, engineering excellence, and unwavering commitment to client success.</p>
          </div>
          <div className="mv-card mv-card--full glass-card">
            <div className="mv-icon">🌏</div>
            <h2 className="mv-title">Dual-Shore Model</h2>
            <p className="mv-text">Our unique model pairs a US-based account management and consulting layer in <strong>Alpharetta, Georgia</strong> with a highly skilled engineering team at our ODC on <strong>Avinashi Road, Peelamedu, Coimbatore, Tamil Nadu</strong>. This structure ensures cultural alignment and time-zone-friendly delivery at competitive economics.</p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section about-values" ref={valRef}>
        <div className="container">
          <div className="section-center" style={{ textAlign: 'center', marginBottom: 'var(--sp-2xl)' }}>
            <div className="section-chip">Core Values</div>
            <h2 className="section-title reveal">What We <span className="g-blue">Stand For</span></h2>
          </div>
          <div className="values-grid">
            {values.map(({ icon, color, title, desc }, i) => (
              <div key={title} className={`value-card glass-card reveal d${i + 1}`} style={{ '--vc': color }}>
                <div className="value-icon">{icon}</div>
                <h3 className="value-title">{title}</h3>
                <p className="value-desc">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section timeline-section" ref={tlRef}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 'var(--sp-2xl)' }}>
            <div className="section-chip">Our Journey</div>
            <h2 className="section-title reveal">Milestones That <span className="g-blue">Shaped Us</span></h2>
          </div>
          <div className="timeline">
            <div className="timeline__spine" aria-hidden="true" />
            {timeline.map(({ year, title, desc }, i) => (
              <div key={year} className={`tl-item ${i % 2 === 0 ? 'tl-item--left' : 'tl-item--right'} reveal d${(i % 3) + 1}`}>
                <div className="tl-card glass-card">
                  <span className="tl-year g-blue">{year}</span>
                  <h3 className="tl-title">{title}</h3>
                  <p className="tl-desc">{desc}</p>
                </div>
                <div className="tl-dot" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section team-section" ref={teamRef}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 'var(--sp-2xl)' }}>
            <div className="section-chip">Our People</div>
            <h2 className="section-title reveal">The <span className="g-blue">Vaanam Team</span></h2>
            <p className="section-sub reveal d1" style={{ margin: '0 auto' }}>
              A team of 11–50 domain experts, architects, and engineers — united by a shared passion for technology and client outcomes.
            </p>
          </div>
          <div className="team-grid">
            {leadership.map(({ name, role, emoji, since, location }, i) => (
              <div key={name} className={`team-card glass-card reveal d${i + 1}`}>
                <div className="team-avatar">{emoji}</div>
                <h3 className="team-name">{name}</h3>
                <p className="team-role">{role}</p>
                <div className="team-meta">
                  <span>Since {since}</span>
                  <span>{location}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="section locations-section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 'var(--sp-2xl)' }}>
            <div className="section-chip">Our Offices</div>
            <h2 className="section-title">Two Locations, <span className="g-blue">One Team</span></h2>
          </div>
          <div className="locations-grid">
            <div className="location-card glass-card">
              <div className="location-flag">🇺🇸</div>
              <div className="location-badge">Corporate HQ</div>
              <h3 className="location-city">Alpharetta, Georgia</h3>
              <p className="location-address">United States of America</p>
              <ul className="location-details">
                <li>Client Services & Account Management</li>
                <li>US Business Development</li>
                <li>Executive Leadership</li>
              </ul>
            </div>
            <div className="location-card glass-card">
              <div className="location-flag">🇮🇳</div>
              <div className="location-badge location-badge--cyan">Offshore ODC</div>
              <h3 className="location-city">Coimbatore, Tamil Nadu</h3>
              <p className="location-address">Avinashi Road, Peelamedu, Tamil Nadu 641 004, India</p>
              <ul className="location-details">
                <li>Engineering & Delivery Centre</li>
                <li>All Four Centers of Excellence</li>
                <li>QA, DevOps & Support Teams</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="about-cta">
        <div className="container about-cta__inner">
          <h2 className="about-cta__title">Ready to Partner with <span className="g-blue">Vaanam?</span></h2>
          <div style={{ display: 'flex', gap: 'var(--sp-md)', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Link to="/contact" className="btn btn-primary btn-lg" id="about-cta-contact">Get in Touch</Link>
            <Link to="/services" className="btn btn-outline btn-lg" id="about-cta-services">Our Services</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
