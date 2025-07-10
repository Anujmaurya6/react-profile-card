
// App.js
import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './assets/styles/animations.css';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-[#040b14] z-50">
        <div className="loader-animation">
          <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-[#149ddd]"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#040b14] text-white min-h-screen font-sans">
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      <div className="ml-0 lg:ml-[300px] transition-all duration-500">
        <Hero setActiveSection={setActiveSection} />
        <About setActiveSection={setActiveSection} />
        <Skills setActiveSection={setActiveSection} />
        <Portfolio setActiveSection={setActiveSection} />
        <Contact setActiveSection={setActiveSection} />
        <Footer />
      </div>
    </div>
  );
}

export default App;