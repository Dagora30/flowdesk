import { useEffect, useRef, useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const menu = useRef(null);
  const header = useRef(null);
  useEffect(() => {
    if (!open) return;
    function onKey(event) {
      if (event.key === 'Escape') { setOpen(false); menu.current?.focus(); }
    }
    function onPointer(event) {
      if (!header.current?.contains(event.target)) setOpen(false);
    }
    const media = window.matchMedia('(min-width: 851px)');
    const onResize = () => { if (media.matches) setOpen(false); };
    document.addEventListener('keydown', onKey);
    document.addEventListener('pointerdown', onPointer);
    media.addEventListener('change', onResize);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('pointerdown', onPointer);
      media.removeEventListener('change', onResize);
    };
  }, [open]);
  return <header className="nav" ref={header}><div className="container nav-inner">
    <a className="logo" href="#inicio" onClick={() => setOpen(false)}>Flow<span>Desk.</span></a>
    <nav className={`links${open ? ' open' : ''}`} id="links" aria-label="Navegación principal" onClick={(event) => {
      if (event.target.closest('a')) setOpen(false);
    }}>
      <a href="#funciones">Funciones</a><a href="#producto">Producto</a>
      <a href="#precios">Precios</a><a href="#preguntas">Preguntas</a>
      <a className="btn primary mobile-cta" href="#contacto">Comenzar ahora</a>
    </nav>
    <a className="btn primary" href="#contacto">Solicitar demo</a>
    <button ref={menu} className="menu" type="button" aria-label={open ? 'Cerrar menú' : 'Abrir menú'} aria-expanded={open} aria-controls="links" onClick={() => setOpen(!open)}>{open ? '✕' : '☰'}</button>
  </div></header>;
}
