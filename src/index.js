import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';
import App from './App';
import AOS from 'aos'; // Importamos la librería AOS
import 'aos/dist/aos.css'; // Importamos los estilos de AOS

// Inicializamos AOS aquí
AOS.init({ duration: 1500 });

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Si deseas medir el rendimiento de tu aplicación, puedes usar reportWebVitals
// reportWebVitals(console.log);
