import { useState } from 'react';
import useScrollReveal from '../hooks/useScrollReveal';
import './Contact.css';

const offices = [
  {
    prefix: 'US',
    badge: 'CORPORATE HQ',
    city: 'Alpharetta, Georgia',
    country: 'United States of America',
    address: 'Alpharetta, GA, USA',
    phone: '+1 (770) 000-0000',
    email: 'info@vaanamtech.com',
    hours: 'Mon–Fri: 9 AM – 6 PM ET',
    color: '#2563eb',
    hasTopBorder: false,
  },
  {
    prefix: 'IN',
    badge: 'OFFSHORE DEVELOPMENT CENTRE',
    city: 'Coimbatore, Tamil Nadu',
    country: 'India',
    address: 'Avinashi Road, Peelamedu,\nCoimbatore, Tamil Nadu 641 004',
    phone: '+91 422 000 0000',
    email: 'odc@vaanamtech.com',
    hours: 'Mon–Fri: 9 AM – 6 PM IST',
    color: '#06b6d4',
    hasTopBorder: true,
  },
];

const services = [
  'Business Intelligence',
  'Microsoft Services (ASP.NET / MVC)',
  'Mobility (Android / iOS / Flutter)',
  'Emerging Technologies (AR/VR / AI/ML)',
  'General Consulting',
  'Other',
];

const initialForm = { name: '', email: '', company: '', phone: '', service: '', message: '' };

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const formRef = useScrollReveal();
  const mapRef = useScrollReveal();

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Full name is required';
    if (!form.email.trim()) e.email = 'Email address is required';
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = 'Enter a valid email address';
    if (!form.service) e.service = 'Please select a service';
    if (!form.message.trim()) e.message = 'Message is required';
    return e;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setSending(true);
    await new Promise((r) => setTimeout(r, 1500));
    setSending(false);
    setSubmitted(true);
    setForm(initialForm);
  };

  return (
    <main className="page-wrapper">
      {/* Hero */}
      <section className="page-hero">
        <div className="page-hero__orb" aria-hidden="true" />
        <div className="container">
          <div className="section-chip">Contact Us</div>
          <h1 className="section-title" style={{ fontSize: 'clamp(34px,5vw,62px)' }}>
            Let's Start a <span className="g-blue">Conversation</span>
          </h1>
          <p className="section-sub" style={{ margin: '0 auto', fontSize: '18px' }}>
            Whether you have a specific project in mind or just want to explore what's possible — our team in Alpharetta and Coimbatore is ready to listen.
          </p>
        </div>
      </section>

      {/* Office Cards */}
      <section className="section contact-offices">
        <div className="container offices-grid" ref={mapRef}>
          {offices.map(({ prefix, badge, city, country, address, phone, email, hours, color, hasTopBorder }, i) => (
            <div key={city} className={`office-card glass-card reveal d${i + 1} ${hasTopBorder ? 'has-top-border' : ''}`} style={{ '--oc': color }}>
              <div className="office-card__top">
                <span className="office-prefix">{prefix}</span>
                <span className="office-badge" style={{ color, background: `${color}10`, borderColor: `${color}30` }}>{badge}</span>
              </div>
              <h2 className="office-city">{city}</h2>
              <p className="office-country">{country}</p>
              <div className="office-details">
                <div className="office-detail">
                  <span className="od-icon" style={{color: '#e11d48'}}>📍</span>
                  <span style={{ whiteSpace: 'pre-line' }}>{address}</span>
                </div>
                <div className="office-detail">
                  <span className="od-icon" style={{color: '#e11d48'}}>📞</span>
                  <a href={`tel:${phone.replace(/\s/g, '')}`} className="od-link">{phone}</a>
                </div>
                <div className="office-detail">
                  <span className="od-icon" style={{color: '#c084fc'}}>✉️</span>
                  <a href={`mailto:${email}`} className="od-link">{email}</a>
                </div>
                <div className="office-detail">
                  <span className="od-icon" style={{color: '#9ca3af'}}>🕐</span>
                  <span>{hours}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Form */}
      <section className="section contact-form-section" ref={formRef}>
        <div className="container contact-layout">
          {/* Left: Info */}
          <div className="contact-info reveal-left">
            <div className="section-chip">Get in Touch</div>
            <h2 className="section-title" style={{ fontSize: 'clamp(28px,3.5vw,44px)' }}>
              Tell Us About <span className="g-blue">Your Project</span>
            </h2>
            <p className="section-sub" style={{ marginBottom: 'var(--sp-xl)' }}>
              Fill in the form and one of our senior consultants will get back to you within one business day.
            </p>
            <ul className="contact-bullets">
              {[
                { icon: '⚡', text: 'Response within 1 business day' },
                { icon: '🔒', text: 'NDA available on request' },
                { icon: '🆓', text: 'Free 30-minute discovery call' },
                { icon: '🌐', text: 'US & India time-zones covered' },
              ].map(({ icon, text }) => (
                <li key={text} className="contact-bullet">
                  <span className="cb-icon">{icon}</span>
                  <span>{text}</span>
                </li>
              ))}
            </ul>

            <div className="contact-direct">
              <div className="cd-item">
                <span className="cd-label">US Office</span>
                <a href="mailto:info@vaanamtech.com" className="cd-val">info@vaanamtech.com</a>
              </div>
              <div className="cd-item">
                <span className="cd-label">India ODC</span>
                <a href="mailto:odc@vaanamtech.com" className="cd-val">odc@vaanamtech.com</a>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="contact-form-wrap reveal-right d1">
            {submitted ? (
              <div className="form-success glass-card">
                <div className="form-success__icon">✅</div>
                <h3 className="form-success__title">Message Sent!</h3>
                <p className="form-success__sub">
                  Thank you for reaching out. A Vaanam consultant will be in touch within one business day.
                </p>
                <button className="btn btn-primary" onClick={() => setSubmitted(false)} id="form-send-another">
                  Send Another Message
                </button>
              </div>
            ) : (
              <form className="contact-form glass-card" onSubmit={handleSubmit} noValidate aria-label="Contact form">
                <h3 className="form-title">Project Enquiry</h3>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="cf-name" className="form-label">Full Name <span aria-hidden="true">*</span></label>
                    <input
                      id="cf-name" name="name" type="text"
                      className={`form-input ${errors.name ? 'error' : ''}`}
                      placeholder="John Smith"
                      value={form.name} onChange={handleChange}
                      aria-required="true" aria-describedby={errors.name ? 'cf-name-err' : undefined}
                    />
                    {errors.name && <span id="cf-name-err" className="form-error" role="alert">{errors.name}</span>}
                  </div>
                  <div className="form-group">
                    <label htmlFor="cf-email" className="form-label">Email Address <span aria-hidden="true">*</span></label>
                    <input
                      id="cf-email" name="email" type="email"
                      className={`form-input ${errors.email ? 'error' : ''}`}
                      placeholder="john@company.com"
                      value={form.email} onChange={handleChange}
                      aria-required="true" aria-describedby={errors.email ? 'cf-email-err' : undefined}
                    />
                    {errors.email && <span id="cf-email-err" className="form-error" role="alert">{errors.email}</span>}
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="cf-company" className="form-label">Company</label>
                    <input
                      id="cf-company" name="company" type="text"
                      className="form-input"
                      placeholder="Your Company Ltd"
                      value={form.company} onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="cf-phone" className="form-label">Phone Number</label>
                    <input
                      id="cf-phone" name="phone" type="tel"
                      className="form-input"
                      placeholder="+1 (555) 000-0000"
                      value={form.phone} onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="cf-service" className="form-label">Service of Interest <span aria-hidden="true">*</span></label>
                  <select
                    id="cf-service" name="service"
                    className={`form-input form-select ${errors.service ? 'error' : ''}`}
                    value={form.service} onChange={handleChange}
                    aria-required="true" aria-describedby={errors.service ? 'cf-service-err' : undefined}
                  >
                    <option value="">Select a service...</option>
                    {services.map((s) => <option key={s} value={s}>{s}</option>)}
                  </select>
                  {errors.service && <span id="cf-service-err" className="form-error" role="alert">{errors.service}</span>}
                </div>
                <div className="form-group">
                  <label htmlFor="cf-message" className="form-label">Your Message <span aria-hidden="true">*</span></label>
                  <textarea
                    id="cf-message" name="message" rows={5}
                    className={`form-input form-textarea ${errors.message ? 'error' : ''}`}
                    placeholder="Describe your project, requirements, or questions..."
                    value={form.message} onChange={handleChange}
                    aria-required="true" aria-describedby={errors.message ? 'cf-msg-err' : undefined}
                  />
                  {errors.message && <span id="cf-msg-err" className="form-error" role="alert">{errors.message}</span>}
                </div>
                <button
                  type="submit" id="cf-submit"
                  className="btn btn-primary btn-lg"
                  disabled={sending}
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  {sending ? (
                    <><span className="form-spinner" aria-hidden="true" /> Sending...</>
                  ) : (
                    <>Send Message <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M22 2L11 13M22 2L15 22l-4-9-9-4 20-7z" /></svg></>
                  )}
                </button>
                <p className="form-note">
                  By submitting, you agree to our privacy policy. We never share your information.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
