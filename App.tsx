import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import About from './components/About';
import FeatureCards from './components/FeatureCards';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackgroundAnimation from './components/BackgroundAnimation';

function App() {
  return (
    <div className="min-h-screen bg-brand-dark text-white font-sans selection:bg-brand-blue/30 selection:text-white relative">
      <BackgroundAnimation />
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <Skills />
          <About />
          <FeatureCards />
          <Projects />
          <Certifications />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;