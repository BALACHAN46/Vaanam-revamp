import { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import './Navbar.css';

const services = [
  { label: 'Business Intelligence', desc: 'Data warehousing & analytics', icon: '📊', to: '/services#bi' },
  { label: 'Microsoft Services', desc: 'ASP.NET, MVC & .NET modernization', icon: '🪟', to: '/services#microsoft' },
  { label: 'Mobility Services', desc: 'Android, iOS & Flutter apps', icon: '📱', to: '/services#mobility' },
  { label: 'Emerging Technologies', desc: 'AR/VR, AI & Machine Learning', icon: '🚀', to: '/services#emerging' },
];

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);
  const [dropOpen, setDropOpen]   = useState(false);
  const dropRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); setDropOpen(false); }, [location]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  // Close dropdown on outside click
  useEffect(() => {
    const handler = (e) => { if (dropRef.current && !dropRef.current.contains(e.target)) setDropOpen(false); };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`} role="banner">
      <div className="container nav__inner">

        {/* Logo */}
        <Link to="/" className="nav__logo" aria-label="Vaanam Technologies Home">
          <div className="nav__logo-icon" aria-hidden="true">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path d="M12 2L2 7l10 5 10-5-10-5z" fill="url(#lg1)"/>
              <path d="M2 17l10 5 10-5" stroke="url(#lg2)" strokeWidth="2" strokeLinecap="round"/>
              <path d="M2 12l10 5 10-5" stroke="url(#lg3)" strokeWidth="2" strokeLinecap="round"/>
              <defs>
                <linearGradient id="lg1" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#2563eb"/><stop offset="1" stopColor="#7c3aed"/></linearGradient>
                <linearGradient id="lg2" x1="0" y1="0" x2="1" y2="0"><stop stopColor="#06b6d4"/><stop offset="1" stopColor="#2563eb"/></linearGradient>
                <linearGradient id="lg3" x1="0" y1="0" x2="1" y2="0"><stop stopColor="#7c3aed"/><stop offset="1" stopColor="#2563eb"/></linearGradient>
              </defs>
            </svg>
          </div>
          <div className="nav__logo-text">
            <span className="nav__logo-name">Vaanam</span>
            <span className="nav__logo-sub" style={{ marginLeft: '4px' }}>Technologies</span>
          </div>
        </Link>

        {/* Desktop Links */}
        <nav className="nav__links" aria-label="Main navigation">
          <NavLink to="/" end className={({ isActive }) => `nav__link ${isActive ? 'active' : ''}`}>Home</NavLink>
          <NavLink to="/about" className={({ isActive }) => `nav__link ${isActive ? 'active' : ''}`}>About</NavLink>

          {/* Services Dropdown */}
          <div className="nav__dropdown-wrap" ref={dropRef}>
            <button
              className={`nav__link nav__link--btn ${dropOpen || location.pathname === '/services' ? 'active' : ''}`}
              onClick={() => setDropOpen((v) => !v)}
              aria-haspopup="true"
              aria-expanded={dropOpen}
              id="services-menu-btn"
            >
              Services
              <svg className={`nav__chevron ${dropOpen ? 'open' : ''}`} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M6 9l6 6 6-6"/></svg>
            </button>
            <div className={`nav__dropdown ${dropOpen ? 'open' : ''}`} role="menu" aria-labelledby="services-menu-btn">
              <div className="nav__dropdown-header">Centers of Excellence</div>
              {services.map(({ label, desc, icon, to }) => (
                <Link key={label} to={to} className="nav__dropdown-item" role="menuitem">
                  <span className="nav__dropdown-icon">{icon}</span>
                  <div>
                    <div className="nav__dropdown-label">{label}</div>
                    <div className="nav__dropdown-desc">{desc}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <NavLink to="/portfolio" className={({ isActive }) => `nav__link ${isActive ? 'active' : ''}`}>Portfolio</NavLink>
          <NavLink to="/contact" className={({ isActive }) => `nav__link ${isActive ? 'active' : ''}`}>Contact</NavLink>
        </nav>

        {/* CTA */}
        <div className="nav__actions">
          <Link to="/contact" className="btn btn-primary btn-sm" id="nav-cta">
            Get a Quote
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </Link>
        </div>

        {/* Hamburger */}
        <button
          className={`nav__burger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile Menu */}
      <div id="mobile-menu" className={`nav__mobile ${menuOpen ? 'open' : ''}`} aria-hidden={!menuOpen}>
        <nav>
          <NavLink to="/" end className="nav__mobile-link">Home</NavLink>
          <NavLink to="/about" className="nav__mobile-link">About</NavLink>
          <div className="nav__mobile-group">
            <div className="nav__mobile-group-label">Services</div>
            {services.map(({ label, icon, to }) => (
              <Link key={label} to={to} className="nav__mobile-link nav__mobile-link--sub">
                <span>{icon}</span> {label}
              </Link>
            ))}
          </div>
          <NavLink to="/portfolio" className="nav__mobile-link">Portfolio</NavLink>
          <NavLink to="/contact" className="nav__mobile-link">Contact</NavLink>
          <Link to="/contact" className="btn btn-primary" style={{ marginTop: 'var(--sp-md)', justifyContent: 'center' }}>Get a Quote</Link>
        </nav>
      </div>
    </header>
  );
}
