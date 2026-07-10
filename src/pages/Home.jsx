import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import useScrollReveal from '../hooks/useScrollReveal';
import useCounter from '../hooks/useCounter';
import './Home.css';

/* ─── DATA ─────────────────────────────────────────────────── */
const coes = [
  {
    id: 'bi', icon: '📊', color: '#2563eb',
    tag: 'Center of Excellence',
    title: 'Business Intelligence',
    desc: 'End-to-end BI solutions — data warehousing, ETL pipelines, data integration, and analytics frameworks that turn raw data into actionable business insight.',
    features: ['Data Warehousing', 'ETL Pipelines', 'Analytics Frameworks', 'Data Integration', 'Power BI / Tableau'],
  },
  {
    id: 'microsoft', icon: '🪟', color: '#7c3aed',
    tag: 'Center of Excellence',
    title: 'Microsoft Services',
    desc: 'Enterprise web applications built on ASP.NET and MVC frameworks, plus comprehensive legacy .NET modernization and migration to the latest .NET stack.',
    features: ['ASP.NET / MVC', '.NET Modernization', 'Azure Integration', 'SharePoint', 'Legacy Migration'],
  },
  {
    id: 'mobility', icon: '📱', color: '#06b6d4',
    tag: 'Center of Excellence',
    title: 'Mobility Services',
    desc: 'High-performance native Android and iOS applications with rich UX, and cross-platform solutions using Flutter to reach all audiences with a single codebase.',
    features: ['Native Android', 'Native iOS', 'Flutter / Dart', 'React Native', 'App Store Deployment'],
  },
  {
    id: 'emerging', icon: '🚀', color: '#10b981',
    tag: 'Center of Excellence',
    title: 'Emerging Technologies',
    desc: 'Immersive AR/VR experiences using cutting-edge Reality technologies alongside foundational AI and Machine Learning implementations for intelligent automation.',
    features: ['Augmented Reality', 'Virtual Reality', 'AI/ML Models', 'Computer Vision', 'NLP Solutions'],
  },
];

const statsData = [
  { value: 13, suffix: '+', label: 'Years in Business', icon: '🏆' },
  { value: 150, suffix: '+', label: 'Projects Delivered', icon: '✅' },
  { value: 2,  suffix: '',  label: 'Global Offices', icon: '🌍' },
  { value: 50, suffix: '+', label: 'Expert Professionals', icon: '👥' },
];

const testimonials = [
  { quote: 'Vaanam transformed our entire data infrastructure. Their BI team built a warehousing solution that reduced reporting time from days to minutes. Truly exceptional work.', author: 'Michael Chen', role: 'CTO, NovaStar Financial', initials: 'MC' },
  { quote: 'The Flutter application Vaanam developed for us is polished, performant, and exceeded every expectation. Their team communicated clearly throughout the entire project.', author: 'Sarah Williams', role: 'Product Director, RetailEdge', initials: 'SW' },
  { quote: 'Their ASP.NET modernization of our decade-old platform was seamless. Zero downtime, improved performance by 4x, and the team delivered on time and on budget.', author: 'James Patel', role: 'VP Engineering, HealthFirst', initials: 'JP' },
  { quote: 'Vaanam\'s AR prototype for our training program was a game-changer. Engagement went up 3x. Their emerging tech team is miles ahead of the competition.', author: 'Lisa Thompson', role: 'Innovation Lead, ManufactureX', initials: 'LT' },
];

const products = [
  { name: 'StudioMart', icon: '🎬', desc: 'End-to-end studio management platform for creative agencies and production houses.' },
  { name: 'SMIL-E', icon: '😊', desc: 'AI-powered employee engagement and workforce experience management suite.' },
  { name: 'SpotMyPhotographer', icon: '📷', desc: 'Marketplace connecting professional photographers with clients globally.' },
  { name: 'Foto Leaf', icon: '🍃', desc: 'Intelligent photo management and organization app with AI tagging.' },
  { name: 'Tons of Memories', icon: '💾', desc: 'Digital memory preservation platform for families and communities.' },
];

const news = [
  { date: 'June 2025', tag: 'Partnership', title: 'Vaanam Joins Microsoft Solutions Partner Program', desc: 'Vaanam Technologies achieves Microsoft Solutions Partner status, deepening capabilities across Azure, Dynamics, and the Microsoft 365 ecosystem.' },
  { date: 'April 2025', tag: 'Innovation', title: 'Launching VR Training Suite for Manufacturing Clients', desc: 'Our Emerging Tech CoE ships an immersive VR-based workforce training platform, reducing onboarding time by 60% for two manufacturing clients.' },
  { date: 'Feb 2025', tag: 'Growth', title: 'Coimbatore ODC Expands to New Facility on Avinashi Road', desc: 'Our offshore development center moves to a larger 8,000 sq ft facility to accommodate our growing 50-member engineering team.' },
];

/* ─── ANIMATED COUNTER ITEM ────────────────────────────────── */
function StatCard({ value, suffix, label, icon, start }) {
  const count = useCounter(value, 2000, start);
  return (
    <div className={`stat-card glass-card reveal ${start ? 'visible' : ''}`}>
      <div className="stat-icon">{icon}</div>
      <div className="stat-num g-blue">{count}{suffix}</div>
      <div className="stat-label">{label}</div>
    </div>
  );
}

/* ─── HOME PAGE ─────────────────────────────────────────────── */
export default function Home() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [statsStarted, setStatsStarted] = useState(false);
  const statsRef = useRef(null);
  const coesRef  = useScrollReveal();
  const whyRef   = useScrollReveal();
  const prodRef  = useScrollReveal();
  const newsRef  = useScrollReveal();
  const ctaRef   = useScrollReveal();

  // Auto-advance testimonials
  useEffect(() => {
    const id = setInterval(() => setActiveTestimonial((v) => (v + 1) % testimonials.length), 5000);
    return () => clearInterval(id);
  }, []);

  // Trigger stat counters when visible
  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setStatsStarted(true); obs.disconnect(); } },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <main className="page-wrapper">

      {/* ══════════════ HERO ══════════════ */}
      <section className="hero" aria-label="Hero">
        <div className="hero__bg" aria-hidden="true">
          <div className="hero__sun" />
          <div className="css-cloud cloud-1" />
          <div className="css-cloud cloud-2" />
          <div className="css-cloud cloud-3" />
          <div className="css-cloud cloud-4" />
          <div className="css-cloud cloud-5" />
          <div className="hero__birds">
            <div className="hero__bird-group">
              <div className="hero__bird" />
              <div className="hero__bird" />
              <div className="hero__bird" />
            </div>
          </div>
          <div className="hero__horizon" />
        </div>

        <div className="container hero__content">
          <div className="hero__badge hero__anim" style={{ animationDelay: '0.1s' }}>
            <span className="hero__badge-dot" />
            Est. 2011 · Chicago, USA · Coimbatore, India
          </div>

          <h1 className="hero__title hero__anim" style={{ animationDelay: '0.25s' }}>
            Transforming Business<br />
            Through <span className="g-blue">Intelligent</span><br />
            <span className="g-cyan">Technology</span>
          </h1>

          <p className="hero__sub hero__anim" style={{ animationDelay: '0.4s' }}>
            Vaanam Technologies is a premier IT services, software development &amp; consulting firm with delivery centres in <strong>Alpharetta, Georgia</strong> and <strong>Coimbatore, India</strong> — engineering enterprise solutions across BI, Microsoft, Mobility, and Emerging Tech.
          </p>

          <div className="hero__cta hero__anim" style={{ animationDelay: '0.55s' }}>
            <Link to="/services" className="btn btn-primary btn-lg" id="hero-cta-services">
              Explore Services
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
            <Link to="/contact" className="btn btn-ghost btn-lg" id="hero-cta-contact">
              Talk to Us
            </Link>
          </div>

          <div className="hero__chips hero__anim" style={{ animationDelay: '0.7s' }}>
            {['Business Intelligence', 'Microsoft Services', 'Mobility', 'AR/VR & AI/ML'].map((c) => (
              <span key={c} className="hero__chip">{c}</span>
            ))}
          </div>
        </div>

        <div className="hero__scroll" aria-hidden="true">
          <div className="hero__scroll-line" />
          <span>Scroll</span>
        </div>
      </section>

      {/* ══════════════ STATS ══════════════ */}
      <section className="home-stats" ref={statsRef}>
        <div className="container">
          <div className="home-stats__grid">
            {statsData.map((s) => (
              <StatCard key={s.label} {...s} start={statsStarted} />
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════ SERVICES / COEs ══════════════ */}
      <section className="section coes-section" id="services" ref={coesRef}>
        <div className="container">
          <div className="section-center">
            <div className="section-chip">Centers of Excellence</div>
            <h2 className="section-title reveal">Our Four <span className="g-blue">Core Disciplines</span></h2>
            <p className="section-sub reveal d1">
              Vaanam's Centers of Excellence represent deep, specialised expertise — each a focused practice led by domain veterans with a track record of enterprise delivery.
            </p>
          </div>

          <div className="coes-grid">
            {coes.map(({ id, icon, color, tag, title, desc, features }, i) => (
              <div
                key={id}
                id={`coe-${id}`}
                className={`coe-card glass-card reveal d${i + 1}`}
                style={{ '--coe-color': color }}
              >
                <div className="coe-card__top">
                  <div className="coe-icon">{icon}</div>
                  <span className="coe-tag">{tag}</span>
                </div>
                <h3 className="coe-title">{title}</h3>
                <p className="coe-desc">{desc}</p>
                <ul className="coe-features">
                  {features.map((f) => <li key={f} className="coe-feature">{f}</li>)}
                </ul>
                <Link to={`/services#${id}`} className="coe-link" aria-label={`Learn more about ${title}`}>
                  Learn more
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════ WHY VAANAM ══════════════ */}
      <section className="section why-section" ref={whyRef}>
        <div className="container why-grid">
          <div className="why-text">
            <div className="section-chip reveal-left">Why Vaanam</div>
            <h2 className="section-title reveal-left d1">
              Engineering Partner <span className="g-blue">You Can Trust</span>
            </h2>
            <p className="section-sub reveal-left d2">
              Founded in 2011 in Chicago with our Offshore Development Center established in 2012 in Coimbatore — we combine US-quality standards with India's engineering talent for unmatched value.
            </p>
            <ul className="why-list reveal-left d3">
              {[
                { icon: '🏅', text: '13+ years of enterprise delivery excellence' },
                { icon: '🌐', text: 'Dual-shore model — Alpharetta HQ + Coimbatore ODC' },
                { icon: '🔬', text: 'Dedicated Centers of Excellence per domain' },
                { icon: '⚡', text: 'Agile delivery with transparent communication' },
                { icon: '🔒', text: 'IP protection, NDA-first engagement model' },
                { icon: '🤝', text: 'Long-term partnership, not just project delivery' },
              ].map(({ icon, text }) => (
                <li key={text} className="why-item">
                  <span className="why-item__icon">{icon}</span>
                  <span>{text}</span>
                </li>
              ))}
            </ul>
            <div className="reveal-left d4" style={{ marginTop: 'var(--sp-xl)', display: 'flex', gap: 'var(--sp-md)', flexWrap: 'wrap' }}>
              <Link to="/about" className="btn btn-primary" id="why-learn-more">Learn About Us</Link>
              <Link to="/contact" className="btn btn-outline" id="why-contact">Start a Project</Link>
            </div>
          </div>
          <div className="why-visual reveal-right d2">
            <div className="why-card glass-card">
              <div className="why-card__label">Established</div>
              <div className="why-card__value g-blue">2011</div>
              <div className="why-card__sub">Chicago, Illinois USA</div>
            </div>
            <div className="why-card glass-card">
              <div className="why-card__label">ODC Founded</div>
              <div className="why-card__value g-cyan">2012</div>
              <div className="why-card__sub">Coimbatore, Tamil Nadu India</div>
            </div>
            <div className="why-card why-card--wide glass-card">
              <div className="why-card__label">Industries Served</div>
              <div className="why-tags">
                {['Finance', 'Healthcare', 'Retail', 'Manufacturing', 'Logistics', 'Media'].map((t) => (
                  <span key={t} className="why-tag">{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════ TESTIMONIALS ══════════════ */}
      <section className="section testimonials-section" aria-label="Client testimonials">
        <div className="container">
          <div className="section-center">
            <div className="section-chip">Testimonials</div>
            <h2 className="section-title">What Our <span className="g-blue">Clients Say</span></h2>
          </div>
          <div className="testimonials-carousel">
            <div className="testimonials-track" style={{ transform: `translateX(-${activeTestimonial * 100}%)` }}>
              {testimonials.map(({ quote, author, role, initials }) => (
                <div key={author} className="testimonial-slide glass-card">
                  <div className="testimonial-quote">"</div>
                  <p className="testimonial-text">{quote}</p>
                  <div className="testimonial-author">
                    <div className="testimonial-avatar">{initials}</div>
                    <div>
                      <div className="testimonial-name">{author}</div>
                      <div className="testimonial-role">{role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="testimonials-dots" role="tablist" aria-label="Testimonials navigation">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  role="tab"
                  aria-selected={i === activeTestimonial}
                  aria-label={`Testimonial ${i + 1}`}
                  className={`testimonials-dot ${i === activeTestimonial ? 'active' : ''}`}
                  onClick={() => setActiveTestimonial(i)}
                  id={`testimonial-dot-${i}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════ PRODUCTS ══════════════ */}
      <section className="section products-section" ref={prodRef}>
        <div className="container">
          <div className="section-center">
            <div className="section-chip">Our Products</div>
            <h2 className="section-title reveal">
              Platforms We've <span className="g-blue">Built & Own</span>
            </h2>
            <p className="section-sub reveal d1">
              Beyond client delivery, Vaanam builds its own digital products — spanning creative industries, photography, AI, and family memory preservation.
            </p>
          </div>
          <div className="products-grid">
            {products.map(({ name, icon, desc }, i) => (
              <div key={name} className={`product-card glass-card reveal d${i + 1}`}>
                <div className="product-icon">{icon}</div>
                <h3 className="product-name">{name}</h3>
                <p className="product-desc">{desc}</p>
                <button className="product-link" aria-label={`Learn more about ${name}`}>
                  Explore →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════ NEWS ══════════════ */}
      <section className="section news-section" ref={newsRef}>
        <div className="container">
          <div className="section-between">
            <div>
              <div className="section-chip">Latest News</div>
              <h2 className="section-title reveal">Company <span className="g-blue">Updates</span></h2>
            </div>
            <Link to="/portfolio" className="btn btn-outline btn-sm reveal" style={{ alignSelf: 'flex-end' }}>All News</Link>
          </div>
          <div className="news-grid">
            {news.map(({ date, tag, title, desc }, i) => (
              <article key={title} className={`news-card glass-card reveal d${i + 1}`} aria-label={title}>
                <div className="news-card__top">
                  <span className="news-tag">{tag}</span>
                  <span className="news-date">{date}</span>
                </div>
                <h3 className="news-title">{title}</h3>
                <p className="news-desc">{desc}</p>
                <button className="news-link">Read More →</button>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════ CTA BANNER ══════════════ */}
      <section className="cta-band" ref={ctaRef}>
        <div className="container">
          <div className="cta-band__card glass-card reveal">
            <div className="cta-band__glow" aria-hidden="true" />
            <div className="cta-band__body">
              <h2 className="cta-band__title">Ready to Build Something <span className="g-blue">Exceptional?</span></h2>
              <p className="cta-band__sub">From a single feature to a full platform, our team is ready to help. Let's start the conversation.</p>
              <div className="cta-band__btns">
                <Link to="/contact" className="btn btn-primary btn-lg" id="cta-band-contact">Schedule a Discovery Call</Link>
                <Link to="/services" className="btn btn-ghost btn-lg" id="cta-band-services">View All Services</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
