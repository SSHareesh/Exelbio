import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";
import Reveal from "../components/Reveal";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      <section className="relative hero-radial-bg text-ink pt-40 pb-24 grain border-b border-border">
        <div className="container-page">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-teal flex items-center gap-2 font-bold">
              <span className="inline-block h-px w-6 bg-teal" /> Contact
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-6 max-w-2xl font-display text-4xl sm:text-5xl lg:text-[3.2rem] leading-[1.08] tracking-tight text-primary font-bold">
              Tell us about the study. We'll tell you what it needs.
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 max-w-xl text-ink-soft text-lg leading-relaxed">
              Most first conversations run thirty minutes and cost nothing — a walk
              through the protocol with a senior statistician before anything is scoped.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="container-page">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-14">
            <div className="lg:col-span-5">
              <Reveal>
                <div className="rounded-3xl border border-border bg-paper p-8 h-full shadow-sm">
                  <h2 className="font-display text-2xl text-primary font-bold tracking-tight">Reach us directly</h2>
                  <ul className="mt-8 space-y-6 text-sm">
                    <li className="flex items-start gap-3.5">
                      <MapPin size={18} className="text-teal mt-0.5 shrink-0" />
                      <span className="text-ink-soft">401 Laurel Street, Suite 220<br />Cambridge, MA 02141</span>
                    </li>
                    <li className="flex items-center gap-3.5">
                      <Phone size={18} className="text-teal shrink-0" />
                      <span className="text-ink-soft">+1 (617) 555-0148</span>
                    </li>
                    <li className="flex items-center gap-3.5">
                      <Mail size={18} className="text-teal shrink-0" />
                      <span className="text-ink-soft">hello@ExelBiobiostat.example</span>
                    </li>
                  </ul>
                  <div className="mt-10 pt-8 border-t border-border">
                    <p className="font-mono text-xs uppercase tracking-widest text-teal font-bold mb-2">Response time</p>
                    <p className="text-ink-soft text-sm leading-relaxed">
                      We reply to every inquiry within one business day, usually with a
                      scheduling link for a call with the statistician best suited to
                      your indication.
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-7">
              <Reveal delay={0.1}>
                <div className="rounded-3xl border border-border bg-surface p-8 shadow-sm">
                  {submitted ? (
                    <div className="flex flex-col items-center justify-center text-center py-16">
                      <CheckCircle2 size={40} className="text-green" />
                      <h3 className="mt-5 font-display text-2xl text-primary font-bold">Message sent</h3>
                      <p className="mt-2 text-ink-soft max-w-sm">
                        Thanks for reaching out — someone from our team will follow up
                        within one business day.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="sm:col-span-1">
                        <label className="block text-xs font-mono uppercase tracking-wide text-ink-soft mb-2 font-semibold">Name</label>
                        <input required type="text" className="w-full rounded-xl border border-border bg-paper focus:bg-white px-4 py-3 text-sm text-ink focus-ring focus:border-teal transition-colors" placeholder="Jordan Ellis" />
                      </div>
                      <div className="sm:col-span-1">
                        <label className="block text-xs font-mono uppercase tracking-wide text-ink-soft mb-2 font-semibold">Work email</label>
                        <input required type="email" className="w-full rounded-xl border border-border bg-paper focus:bg-white px-4 py-3 text-sm text-ink focus-ring focus:border-teal transition-colors" placeholder="jordan@sponsor.com" />
                      </div>
                      <div className="sm:col-span-1">
                        <label className="block text-xs font-mono uppercase tracking-wide text-ink-soft mb-2 font-semibold">Company</label>
                        <input type="text" className="w-full rounded-xl border border-border bg-paper focus:bg-white px-4 py-3 text-sm text-ink focus-ring focus:border-teal transition-colors" placeholder="Company name" />
                      </div>
                      <div className="sm:col-span-1">
                        <label className="block text-xs font-mono uppercase tracking-wide text-ink-soft mb-2 font-semibold">Trial phase</label>
                        <select className="w-full rounded-xl border border-border bg-paper focus:bg-white px-4 py-3 text-sm text-ink focus-ring focus:border-teal transition-colors">
                          <option>Phase I</option>
                          <option>Phase II</option>
                          <option>Phase III</option>
                          <option>Phase IV</option>
                          <option>Not sure yet</option>
                        </select>
                      </div>
                      <div className="sm:col-span-2">
                        <label className="block text-xs font-mono uppercase tracking-wide text-ink-soft mb-2 font-semibold">What can we help with?</label>
                        <textarea rows={5} className="w-full rounded-xl border border-border bg-paper focus:bg-white px-4 py-3 text-sm text-ink focus-ring focus:border-teal transition-colors" placeholder="A short description of the study and where you're stuck." />
                      </div>
                      <div className="sm:col-span-2">
                        <button type="submit" className="group inline-flex items-center gap-2 rounded-full bg-teal px-7 py-3.5 text-sm font-bold text-white transition-all shadow-[0_8px_22px_rgba(18,167,165,0.22)] hover:bg-teal-hover focus-ring hover:-translate-y-0.5">
                          Send message
                          <Send size={15} className="transition-transform duration-300 group-hover:translate-x-0.5" />
                        </button>
                      </div>
                    </form>
                  )}
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
