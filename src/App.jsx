import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import SplashIntro from './components/SplashIntro';

function NotFound() {
  return (
    <main style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '120px 24px', background: 'var(--bg)' }}>
      <div style={{ fontSize: 80, marginBottom: 24 }}>404</div>
      <h1 style={{ fontSize: 'clamp(28px,4vw,48px)', fontFamily: 'var(--font-head)', fontWeight: 800, color: 'var(--heading)', marginBottom: 16 }}>Page Not Found</h1>
      <p style={{ fontSize: 17, color: 'var(--text)', maxWidth: 420, marginBottom: 32 }}>
        The page you're looking for doesn't exist or has been moved.
      </p>
      <a href="/" className="btn btn-primary btn-lg">Back to Home</a>
    </main>
  );
}

export default function App() {
  // Check if intro has already played in this session
  const [showIntro, setShowIntro] = useState(
    !sessionStorage.getItem('vaanamIntroPlayed')
  );

  return (
    <>
      {showIntro && <SplashIntro onComplete={() => setShowIntro(false)} />}
      <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/"          element={<Home />} />
        <Route path="/about"     element={<About />} />
        <Route path="/services"  element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact"   element={<Contact />} />
        <Route path="*"          element={<NotFound />} />
      </Routes>
      <Footer />
      </BrowserRouter>
    </>
  );
}
