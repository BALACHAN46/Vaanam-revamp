import { Link } from 'react-router-dom';
import './Footer.css';

const cols = {
  Company: [
    { label: 'Home', to: '/' },
    { label: 'About Us', to: '/about' },
    { label: 'Portfolio', to: '/portfolio' },
    { label: 'Contact', to: '/contact' },
  ],
  Services: [
    { label: 'Business Intelligence', to: '/services#bi' },
    { label: 'Microsoft Services', to: '/services#microsoft' },
    { label: 'Mobility Services', to: '/services#mobility' },
    { label: 'Emerging Technologies', to: '/services#emerging' },
  ],
  Products: [
    { label: 'StudioMart', to: '/portfolio' },
    { label: 'SMIL-E', to: '/portfolio' },
    { label: 'SpotMyPhotographer', to: '/portfolio' },
    { label: 'Foto Leaf', to: '/portfolio' },
    { label: 'Tons of Memories', to: '/portfolio' },
  ],
};

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__top-glow" aria-hidden="true" />
      <div className="container footer__inner">
        {/* Brand */}
        <div className="footer__brand">
          <Link to="/" className="footer__logo" aria-label="Vaanam Technologies home">
            <div className="footer__logo-icon" aria-hidden="true">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M12 2L2 7l10 5 10-5-10-5z" fill="url(#flg1)"/>
                <path d="M2 17l10 5 10-5" stroke="url(#flg2)" strokeWidth="2" strokeLinecap="round"/>
                <path d="M2 12l10 5 10-5" stroke="url(#flg3)" strokeWidth="2" strokeLinecap="round"/>
                <defs>
                  <linearGradient id="flg1" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#2563eb"/><stop offset="1" stopColor="#7c3aed"/></linearGradient>
                  <linearGradient id="flg2" x1="0" y1="0" x2="1" y2="0"><stop stopColor="#06b6d4"/><stop offset="1" stopColor="#2563eb"/></linearGradient>
                  <linearGradient id="flg3" x1="0" y1="0" x2="1" y2="0"><stop stopColor="#7c3aed"/><stop offset="1" stopColor="#2563eb"/></linearGradient>
                </defs>
              </svg>
            </div>
            <div>
              <div className="footer__logo-name">Vaanam</div>
              <div className="footer__logo-sub">Technologies Pvt Ltd</div>
            </div>
          </Link>
          <p className="footer__desc">
            IT Services, Software Development &amp; Consulting. Specialising in Business Intelligence, Microsoft Services, Mobility, and Emerging Technologies since 2011.
          </p>
          <div className="footer__offices">
            <div className="footer__office">
              <span>🇺🇸</span>
              <div>
                <div className="footer__office-city">Alpharetta, GA — Corporate HQ</div>
                <div className="footer__office-detail">United States of America</div>
              </div>
            </div>
            <div className="footer__office">
              <span>🇮🇳</span>
              <div>
                <div className="footer__office-city">Coimbatore, TN — ODC</div>
                <div className="footer__office-detail">Avinashi Road, Peelamedu</div>
              </div>
            </div>
          </div>
        </div>

        {/* Link Columns */}
        {Object.entries(cols).map(([heading, links]) => (
          <div key={heading} className="footer__col">
            <h4 className="footer__col-title">{heading}</h4>
            <ul className="footer__col-links">
              {links.map(({ label, to }) => (
                <li key={label}>
                  <Link to={to} className="footer__link">{label}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom Bar */}
      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p>© {new Date().getFullYear()} Vaanam Technologies Pvt Ltd. All rights reserved.</p>
          <div className="footer__bottom-links">
            <span>Est. 2011 · Chicago, USA</span>
            <span className="footer__sep" aria-hidden="true" />
            <span>ODC Est. 2012 · Coimbatore, India</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
