import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import About from './components/About';
import Features from './components/Features';
import WhyChoose from './components/WhyChoose';

function App() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <section id="home">
          <HeroSection />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="features">
          <Features />
        </section>

        <section id="why-choose">
          <WhyChoose />
        </section>

        <section id="achievements" className="min-h-screen flex items-center justify-center bg-gray-50">
          <h2 className="text-3xl font-bold">Achievements</h2>
          {/* Achievements content */}
        </section>
      </main>
    </>
  );
}

export default App;
