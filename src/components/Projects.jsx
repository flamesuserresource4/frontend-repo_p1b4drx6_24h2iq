import React from 'react';
import { ShieldCheck, Bug, Lock, Cloud } from 'lucide-react';

const projects = [
  {
    icon: ShieldCheck,
    title: 'Banking Platform Penetration Test',
    desc: 'Led web and API pentest for a fintech platform; discovered auth bypass and chained misconfigurations to demonstrate account takeover.',
    tags: ['OWASP', 'API', 'Auth', 'Reporting'],
  },
  {
    icon: Bug,
    title: 'Bug Bounty: Critical IDOR',
    desc: 'Identified IDOR impacting invoice exposure; coordinated disclosure and helped implement defense-in-depth authorization checks.',
    tags: ['Bug Bounty', 'IDOR', 'RBAC'],
  },
  {
    icon: Lock,
    title: 'Secure SDLC Rollout',
    desc: 'Built lightweight security checks into CI for a microservices org, reducing vulns-to-prod by 60% while keeping deploy speed.',
    tags: ['DevSecOps', 'CI/CD', 'SAST', 'Secret Scanning'],
  },
  {
    icon: Cloud,
    title: 'Cloud Hardening Playbook',
    desc: 'Created baseline guardrails and IaC templates for hardened cloud workloads with automated drift detection.',
    tags: ['Cloud', 'IaC', 'Guardrails'],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="relative w-full bg-black py-24 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(59,130,246,0.10),transparent_55%)]" />
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="mb-10 flex items-center gap-3">
          <span className="h-6 w-1 rounded-full bg-emerald-500" />
          <h2 className="text-2xl font-semibold sm:text-3xl">Selected Work</h2>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {projects.map((p, idx) => (
            <article key={idx} className="group rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:border-emerald-400/30">
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400">
                <p.icon className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-medium">{p.title}</h3>
              <p className="mt-2 text-white/75">{p.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="rounded-full bg-white/5 px-2.5 py-1 text-xs text-white/70 ring-1 ring-white/10">{t}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
