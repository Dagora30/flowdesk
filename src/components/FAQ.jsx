import { useState } from 'react';

const questions = [
  ['¿Qué es FlowDesk?', 'FlowDesk es un concepto de plataforma para organizar proyectos, tareas y equipos. Este sitio es una demostración de portafolio.'],
  ['¿Puedo registrarme o pagar un plan?', 'No. Los planes, precios y funcionalidades son ilustrativos. Esta demo no procesa registros, datos personales ni pagos.'],
  ['¿El panel muestra información real?', 'No. Los indicadores, tareas y proyectos del panel son datos ficticios creados para mostrar el diseño.'],
  ['¿Esta página funciona en dispositivos móviles?', 'Sí. Su diseño se adapta a diferentes tamaños de pantalla y cuenta con navegación móvil.'],
];
function Question({ question, answer, index }) {
  const [open, setOpen] = useState(false);
  return <div className={`faq-item${open ? ' open' : ''}`}>
    <h3 className="faq-heading"><button type="button" className="faq-q" id={`question-${index}`} aria-expanded={open} aria-controls={`answer-${index}`} onClick={() => setOpen(!open)}>{question}<span aria-hidden="true">{open ? '−' : '+'}</span></button></h3>
    <div className="faq-a" id={`answer-${index}`} role="region" aria-labelledby={`question-${index}`} hidden={!open}>{answer}</div>
  </div>;
}
export default function FAQ() {
  return <section className="soft" id="preguntas"><div className="container"><div className="center"><span className="section-kicker">Resolvemos tus dudas</span><h2 className="section-title">Preguntas frecuentes</h2></div><div className="faq">{questions.map(([question, answer], index) => <Question key={question} question={question} answer={answer} index={index} />)}</div></div></section>;
}
