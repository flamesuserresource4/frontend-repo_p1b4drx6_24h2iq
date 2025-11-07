import React from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VyGeZv58yuk8j7Yy/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80" />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-start justify-center px-6">
        <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm backdrop-blur">
          <span className="h-2 w-2 rounded-full bg-emerald-400" />
          Available for consulting & red teaming
        </p>
        <h1 className="text-balance font-['Mona_Sans',Inter,ui-sans-serif] text-4xl font-semibold leading-tight sm:text-6xl md:text-7xl">
          Muhammad Abdul Malik
        </h1>
        <p className="mt-3 text-lg text-white/85 sm:text-xl">
          Cybersecurity Analyst & Penetration Tester • former Full‑Stack Developer
        </p>
        <p className="mt-3 max-w-2xl text-white/70">
          Known for innovative, critical thinking and building secure, resilient systems.
          I break things so they can be rebuilt stronger.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-5 py-3 font-medium text-black transition hover:bg-emerald-400"
          >
            Explore Work
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="mailto:contact@mabdulmalik.dev"
            className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-5 py-3 font-medium text-white backdrop-blur transition hover:bg-white/10"
          >
            <Mail className="h-4 w-4" /> Contact
          </a>
          <div className="ml-2 flex items-center gap-2">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="rounded-lg border border-white/10 bg-white/5 p-3 text-white/85 transition hover:text-white hover:shadow-[0_0_20px_rgba(16,185,129,0.35)]"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="rounded-lg border border-white/10 bg-white/5 p-3 text-white/85 transition hover:text-white hover:shadow-[0_0_20px_rgba(16,185,129,0.35)]"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
