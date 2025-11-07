import React from 'react';
import { Shield, Code2, Brain } from 'lucide-react';

const SkillTag = ({ icon: Icon, label }) => (
  <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-white/80">
    <Icon className="h-4 w-4 text-emerald-400" />
    {label}
  </div>
);

const About = () => {
  return (
    <section id="about" className="relative w-full bg-black py-24 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.12),transparent_50%)]" />
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="mb-10 flex items-center gap-3">
          <span className="h-6 w-1 rounded-full bg-emerald-500" />
          <h2 className="text-2xl font-semibold sm:text-3xl">About</h2>
        </div>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          <div>
            <p className="text-lg text-white/80">
              I’m a cybersecurity analyst and penetration tester with a strong foundation in full‑stack development. I combine offensive security with software craftsmanship to help teams ship secure products without slowing down innovation.
            </p>
            <p className="mt-4 text-white/70">
              My approach is pragmatic: threat‑model early, automate where possible, and validate continuously with real‑world attack simulations. I thrive at the intersection of code, infrastructure, and adversarial thinking.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              <SkillTag icon={Shield} label="Red/Blue Teaming" />
              <SkillTag icon={Code2} label="Secure SDLC" />
              <SkillTag icon={Brain} label="Threat Modeling" />
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {[ 
              { title: 'Pentesting', desc: 'Web, API, cloud, mobile' },
              { title: 'Automation', desc: 'CI security gates & tooling' },
              { title: 'AppSec Reviews', desc: 'Code review & design audits' },
              { title: 'Incident Readiness', desc: 'Detection & response playbooks' },
            ].map((card, i) => (
              <div key={i} className="rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur transition hover:border-emerald-400/30">
                <h3 className="text-lg font-medium">{card.title}</h3>
                <p className="mt-1 text-sm text-white/70">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
