import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import About from './components/About';
import Features from './components/Features';
import WhyChoose from './components/WhyChoose';
import Achievements from './components/Achievements';
import Footer from './components/Footer';
import ContactUs from './components/ContactUs';
import HowItWorks from './components/HowItWorks';

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

        <section id="howitworks">
          <HowItWorks />
        </section>

        <section id="features">
          <Features />
        </section>

        <section id="why-choose">
          <WhyChoose />
        </section>

        <section id="achievements">
          <Achievements />
        </section>

        <section id="contact">
          <ContactUs />
        </section>

        <section id="Footer">
          <Footer />
        </section>
      </main>
    </>
  );
}

export default App;
