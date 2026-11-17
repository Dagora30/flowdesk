import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Product from './components/Product';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [notice, setNotice] = useState(null);
  useEffect(() => {
    if (!notice) return;
    const timer = setTimeout(() => setNotice(null), 6500);
    return () => clearTimeout(timer);
  }, [notice]);
  function onDemo(event) {
    const button = event.target.closest('[data-demo]');
    if (button) setNotice({ message: button.dataset.demo });
  }
  return <>
    <a className="skip-link" href="#contenido">Saltar al contenido</a>
    <Navbar />
    <main id="contenido" tabIndex={-1} onClick={onDemo}>
      <Hero /><Features /><Product /><Pricing /><FAQ /><Contact />
    </main>
    <Footer />
    <div className="demo-note">✦ Proyecto de portafolio · Demo</div>
    <div className={`toast${notice ? ' show' : ''}`} role="status" aria-live="polite" aria-atomic="true">
      {notice?.message}
    </div>
  </>;
}
