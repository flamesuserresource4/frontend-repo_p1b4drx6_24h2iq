import React, { useState } from 'react';
import { Send } from 'lucide-react';

const Contact = () => {
  const [status, setStatus] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    setStatus('Thanks! Your message has been sent.');
  };

  return (
    <section id="contact" className="relative w-full bg-black py-24 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.10),transparent_50%)]" />
      <div className="relative z-10 mx-auto max-w-4xl px-6">
        <div className="mb-10 flex items-center gap-3">
          <span className="h-6 w-1 rounded-full bg-emerald-500" />
          <h2 className="text-2xl font-semibold sm:text-3xl">Let’s collaborate</h2>
        </div>
        <form onSubmit={onSubmit} className="grid gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <input className="rounded-lg border border-white/10 bg-black/40 px-4 py-3 outline-none ring-emerald-500/40 placeholder-white/40 focus:ring-2" placeholder="Name" required />
            <input type="email" className="rounded-lg border border-white/10 bg-black/40 px-4 py-3 outline-none ring-emerald-500/40 placeholder-white/40 focus:ring-2" placeholder="Email" required />
          </div>
          <input className="rounded-lg border border-white/10 bg-black/40 px-4 py-3 outline-none ring-emerald-500/40 placeholder-white/40 focus:ring-2" placeholder="Subject" />
          <textarea rows="5" className="rounded-lg border border-white/10 bg-black/40 px-4 py-3 outline-none ring-emerald-500/40 placeholder-white/40 focus:ring-2" placeholder="How can I help?" />
          <div className="flex items-center justify-between gap-3">
            <p className="text-sm text-white/60">I usually respond within 24 hours.</p>
            <button type="submit" className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-5 py-3 font-medium text-black transition hover:bg-emerald-400">
              Send Message
              <Send className="h-4 w-4" />
            </button>
          </div>
          {status && <p className="text-emerald-400">{status}</p>}
        </form>
        <p className="mt-6 text-center text-sm text-white/50">Prefer email? contact@mabdulmalik.dev</p>
      </div>
    </section>
  );
};

export default Contact;
