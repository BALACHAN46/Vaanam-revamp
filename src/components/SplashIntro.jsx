import { useState, useEffect } from 'react';
import './SplashIntro.css';

export default function SplashIntro({ onComplete }) {
  const [phase, setPhase] = useState('falling'); // falling, blast, text, fadeOut

  useEffect(() => {
    const t1 = setTimeout(() => setPhase('blast'), 1000);
    const t2 = setTimeout(() => setPhase('text'), 1800);
    const t3 = setTimeout(() => setPhase('fadeOut'), 4000);
    const t4 = setTimeout(() => {
      sessionStorage.setItem('vaanamIntroPlayed', 'true');
      onComplete();
    }, 4800);

    return () => {
      clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); clearTimeout(t4);
    };
  }, [onComplete]);

  return (
    <div className={`splash-container ${phase === 'fadeOut' ? 'fade-out' : ''}`}>
      {/* Background layer */}
      <div className="splash-bg"></div>

      {/* Falling Meteor Phase */}
      {(phase === 'falling' || phase === 'blast') && (
        <div className={`splash-meteor-wrap ${phase === 'blast' ? 'impacted' : ''}`}>
          <div className="splash-meteor"></div>
          <div className="splash-tail"></div>
        </div>
      )}

      {/* Blast Phase */}
      {(phase === 'blast' || phase === 'text') && (
        <div className={`splash-blast ${phase === 'text' ? 'receding' : ''}`}></div>
      )}

      {/* Text Reveal Phase */}
      {(phase === 'text' || phase === 'fadeOut') && (
        <div className="splash-text-wrap">
          <h1 className="splash-title">
            <span className="splash-title-1">Vaanam</span>
            <span className="splash-title-2">Technologies</span>
          </h1>
        </div>
      )}
    </div>
  );
}
