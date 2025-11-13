
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TrustBadges from './components/TrustBadges';
import ProblemAgitation from './components/ProblemAgitation';
import ValueProposition from './components/ValueProposition';
import Packages from './components/Packages';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Faq from './components/Faq';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

function App() {
  return (
    <div className="bg-accent font-sans text-dark antialiased">
      <Header />
      <main>
        <Hero />
        <TrustBadges />
        <ProblemAgitation />
        <ValueProposition />
        <Packages />
        <Gallery />
        <Testimonials />
        <Faq />
        <CallToAction />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;