import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { Shield } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen w-full scroll-smooth bg-black text-white">
      {/* Simple floating nav */}
      <header className="fixed top-4 left-1/2 z-50 -translate-x-1/2">
        <nav className="flex items-center gap-4 rounded-full border border-white/10 bg-black/50 px-4 py-2 text-sm backdrop-blur">
          <div className="mr-1 inline-flex items-center gap-2 pr-3 text-white/80">
            <Shield className="h-4 w-4 text-emerald-400" />
            <span className="hidden sm:inline">M. A. Malik</span>
          </div>
          <a href="#home" className="rounded-md px-3 py-1 text-white/70 transition hover:text-white">Home</a>
          <a href="#about" className="rounded-md px-3 py-1 text-white/70 transition hover:text-white">About</a>
          <a href="#projects" className="rounded-md px-3 py-1 text-white/70 transition hover:text-white">Projects</a>
          <a href="#contact" className="rounded-md px-3 py-1 text-white/70 transition hover:text-white">Contact</a>
        </nav>
      </header>

      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>

      <footer className="border-t border-white/10 bg-black py-8 text-center text-sm text-white/50">
        © {new Date().getFullYear()} Muhammad Abdul Malik — Cybersecurity • Pentesting • AppSec
      </footer>
    </div>
  );
}

export default App;
