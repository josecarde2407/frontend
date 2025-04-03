// src/App.js
import React from 'react';
import Header from './components/Header';
import Issues from './components/Issues';
import Footer from './components/Footer';
import './styles.css';

function App() {
  return (
    <div className="app-container">
      <Header />
      <main className="app-main">
        <Issues />
      </main>
      <Footer />
    </div>
  );
}

export default App;
