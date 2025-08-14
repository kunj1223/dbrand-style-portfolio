import React, { useRef,useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Github, Linkedin, Mail, Menu, X, Download } from "lucide-react";

// Full dbrand‑inspired portfolio — complete site with animated KPIs
// TailwindCSS + Framer Motion; single React component

const LINKS = {
  email: "mailto:ku4120@gmail.com",
  github: "https://github.com/kunj1223",
  linkedin: "https://www.linkedin.com/in/kunj-prajapati/",
  resume: "/kunj_resume.pdf", // replace with hosted file URL
};

const SKILLS = [
  "AWS", "Azure", "Kubernetes", "Docker", "Git", "Linux",
  "Dynatrace", "Splunk", "Grafana", "Ansible", "Jenkins",
  "MySQL", "PostgreSQL", "MongoDB", "REST APIs", "ETL",
  ".NET", "Java", "JavaScript", "PowerShell", "Bash", "Tableau",
  "SDLC", "Jira", "Confluence", "Terraform", "AAP", "Elastic"
];

const CERTS = [
  "AWS Certified Cloud Practitioner",
  "Splunk Search Optimization (Splunk)",
  "Introduction to Cybersecurity (Cisco)",
];

const EXPERIENCE = [
  {
    org: "Royal Bank of Canada",
    role: "Site Reliability Engineer, Mobile Banking",
    period: "Jan 2024 – Present",
    bullets: [
      "Triaged and remediated high‑severity incidents using Dynatrace, Splunk, and Grafana; led RCA to stabilize critical services.",
      "Ensured infrastructure compliance; participated in DR exercises to validate resilience and continuity.",
      "Partnered with developers and FE teams to ship features; deepened end‑to‑end knowledge of architecture and pipelines.",
    ],
  },
  {
    org: "Royal Bank of Canada",
    role: "Site Reliability Engineer (Co‑op), Mobile Banking",
    period: "Jan 2023 – Aug 2023",
    bullets: [
      "Built a Slack app (Bolt SDK + Flask) integrating multiple systems; accelerated incident workflows by ~15–20 minutes.",
      "Designed Grafana dashboards for real‑time insights to stakeholders.",
      "Implemented automated API testing to improve reliability and QA.",
    ],
  },
  {
    org: "Hamilton Health Sciences",
    role: "Tech Support",
    period: "Apr 2022 – Jul 2023",
    bullets: [
      "Trained users on secure login, navigation, and accurate data entry for EHR systems.",
      "Bridged communication between end users and software teams for timely resolution.",
    ],
  },
];

const VOLUNTEERING = [
  {
    org: "Royal Bank of Canada",
    role: "Technology & Enterprise Operations Team Community Lead",
    period: "Jan 2023 – Apr 2023",
    bullets: [
      "Advisor and ambassador for the T&O Student Program.",
      "Hosted monthly huddles and weekly check‑ins to foster community and belonging.",
      "Promoted events, workshops, and resources to support members.",
      "Monthly check‑ins with program team to develop leadership and communication skills.",
    ],
  },
];

// Publicly hosted images (logos/illustrative). Swap with your own when ready.
const PROJECTS = [
  {
    title: "Azure Migration & HSBC Integration — RBC Mobile Banking",
    blurb: "Orchestrated migration of 100+ applications to Microsoft Azure and supported strategic integration of HSBC systems into RBC's mobile ecosystem.",
    impact: "Improved scalability and readiness while maintaining compliance and resiliency.",
    tags: ["Azure", "Kubernetes", "CI/CD", "IaC", "Security"],
    image: "https://upload.wikimedia.org/wikipedia/commons/a/a8/Microsoft_Azure_Logo.svg",
  },
  {
    title: "Incident Response Optimization (Slack App)",
    blurb: "Built a Slack app (Bolt SDK + Flask + REST) to streamline triage and handoffs across systems.",
    impact: "Reduced incident response time by ~15–20 minutes across teams.",
    tags: ["Python", "Bolt SDK", "Flask", "REST", "Automation"],
    image: "https://upload.wikimedia.org/wikipedia/commons/7/76/Slack_Icon.png",
  },
  {
    title: "Observability Dashboards",
    blurb: "Designed and implemented Grafana dashboards to surface real‑time KPIs and increase system observability.",
    impact: "Enabled faster RCA and data‑driven decision making.",
    tags: ["Grafana", "Dynatrace", "Splunk", "SLOs"],
    image: "https://upload.wikimedia.org/wikipedia/commons/3/3b/Grafana_icon.svg",
  },
  {
    title: "Automated API Testing",
    blurb: "Implemented automated API validation and regression checks to harden integration points.",
    impact: "Increased reliability and reduced manual QA overhead in pipelines.",
    tags: ["Python", "CI/CD", "APIs", "QA"],
    image: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
  },
];



// Marquee items (text only for a crisp, brand‑like feel)
const CLIENT_LOGOS = ["Azure", "AWS", "Dynatrace", "Splunk", "Grafana", "Terraform", "Ansible", "Elastic"];

function classNames(...c) { return c.filter(Boolean).join(" "); }

export default function Portfolio() {
  // ✅ hooks must be inside here
  const [menuOpen, setMenuOpen] = useState(false);
  const [solidNav, setSolidNav] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const aRef = useRef(null);

  const handleSend = () => {
    const subject = encodeURIComponent(`Portfolio Contact from ${name || "Someone"}`);
    const body = encodeURIComponent(`${message || ""}\n\nFrom: ${name || ""} (${email || ""})`);
    const to = "ku41208@gmail.com";
    const mailto = `mailto:${to}?subject=${subject}&body=${body}`;
    if (aRef.current) {
      aRef.current.setAttribute("href", mailto);
      aRef.current.click();
    } else {
      window.location.href = mailto;
    }
  };

  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 600], [0, -120]);

  useEffect(() => {
    const onScroll = () => setSolidNav(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);


  return (
    <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
      {/* Ambient glow background */}
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 left-1/2 h-[60rem] w-[60rem] -translate-x-1/2 rounded-full bg-gradient-to-br from-neutral-900 via-neutral-800 to-black blur-[120px] opacity-70"/>
        <div className="absolute bottom-[-25rem] right-[-10rem] h-[40rem] w-[40rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),rgba(0,0,0,0))]"/>
      </div>

      {/* Navbar */}
      <header className={classNames(
        "sticky top-0 z-50 backdrop-blur-md transition-colors",
        solidNav ? "bg-black/70 border-b border-white/10" : "bg-transparent"
      )}>
        <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4">
          <a href="#home" className="group inline-flex items-center gap-2">
            <div className="h-7 w-7 rounded-md bg-white text-black grid place-items-center font-black">K</div>
            <span className="font-semibold tracking-wider">KUNJ PRAJAPATI</span>
          </a>
          <div className="hidden items-center gap-8 md:flex">
            <a href="#work" className="text-sm text-white/80 hover:text-white">Work</a>
            <a href="#experience" className="text-sm text-white/80 hover:text-white">Experience</a>
            <a href="#volunteering" className="text-sm text-white/80 hover:text-white">Volunteering</a>
            <a href="#about" className="text-sm text-white/80 hover:text-white">About</a>
            <a href="#education" className="text-sm text-white/80 hover:text-white">Education</a>
            <a href="#contact" className="text-sm text-white/80 hover:text-white">Contact</a>
            <a
                href={LINKS.resume}
                download="Kunj_Prajapati_Resume.pdf"
                className="group inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm hover:border-white/40"
              >
                <Download className="h-4 w-4" />
                <span>Download CV</span>
          </a>
          </div>
          <button className="md:hidden rounded-md border border-white/15 p-2" onClick={() => setMenuOpen(v=>!v)} aria-label="Toggle menu">
            {menuOpen ? <X className="h-5 w-5"/> : <Menu className="h-5 w-5"/>}
          </button>
        </nav>
        {menuOpen && (
          <div className="md:hidden border-t border-white/10 bg-black/80">
            <div className="mx-auto max-w-7xl px-4 py-4 grid gap-3">
              {[ ["Work","#work"],["Experience","#experience"],["Volunteering","#volunteering"],["About","#about"],["Education","#education"],["Contact","#contact"] ].map(([label,href]) => (
                <a key={label} href={href} className="text-white/80 hover:text-white" onClick={()=>setMenuOpen(false)}>{label}</a>
              ))}
              <a href={LINKS.resume} className="inline-flex w-max items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm hover:border-white/40">
                <Download className="h-4 w-4"/>
                <span>Download CV</span>
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Hero */}
      <section id="home" className="relative">
        <motion.div style={{ y: y1 }} className="absolute inset-x-0 -top-24 -z-10 mx-auto h-[28rem] max-w-6xl rounded-[2.5rem] border border-white/10 bg-[linear-gradient(0deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]"/>
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 px-4 pb-24 pt-16 md:grid-cols-2 md:gap-12">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 px-3 py-1 text-xs text-white/70">
              <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-emerald-400"/> Open to roles & freelance
            </div>
            <h1 className="mb-4 text-5xl font-black leading-[1.05] tracking-tight md:text-6xl">
              Site Reliability <span className="text-white/60">Engineer</span> &<br/> Cloud Developer
            </h1>
            <p className="mb-8 max-w-xl text-white/70">
              I turn fragile services into fast, reliable, and observable platforms — building guardrails, crushing toil, and automating the boring parts so teams can ship with confidence, even when everything else is on fire.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <a href="#work" className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 font-semibold text-black">
                View Work
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-5 py-3 font-semibold text-white hover:border-white/40">
                Contact Me
              </a>
            </div>
            <div className="mt-8 flex flex-wrap gap-2 text-xs text-white/50">
              {SKILLS.join(" · ")}
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-6 -z-10 rounded-3xl bg-[radial-gradient(60%_60%_at_50%_50%,rgba(255,255,255,0.12),rgba(0,0,0,0))]"/>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-white/10">
              <div className="absolute inset-0 bg-[conic-gradient(from_90deg_at_50%_50%,#000,rgba(255,255,255,0.08),#000)]" />
              <div className="absolute inset-0 p-6">
                {/* Animated KPI bars */}
                <div className="rounded-2xl border border-white/10 bg-black/50 p-4 overflow-hidden">
                  <div className="mb-3 text-xs uppercase tracking-wider text-white/60">Operational KPIs</div>
                  <div className="grid grid-cols-6 gap-2 text-[10px] text-white/70">
                    {Array.from({ length: 18 }).map((_, i) => (
                      <motion.div
                        key={i}
                        className="h-6 origin-left rounded bg-white/10"
                        initial={{ scaleX: 0.3, opacity: 0.8 }}
                        animate={{ scaleX: [0.25, 0.95, 0.4, 0.75, 0.6], opacity: [0.7, 1, 0.85, 1, 0.9] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: i * 0.12 }}
                      />
                    ))}
                  </div>
                  {/* shimmer sweep */}
                  <div className="pointer-events-none absolute inset-0">
                    <div className="h-full w-1/3 -skew-x-12 bg-[linear-gradient(90deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.08)_50%,rgba(255,255,255,0)_100%)] animate-[sweep_3.2s_linear_infinite]"/>
                  </div>
                </div>
                {/* Animated mini-metrics */}
                <div className="mt-4 grid grid-cols-3 gap-4">
                  {["Latency", "Error Rate", "Requests"].map((m, idx) => (
                    <div key={m} className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/50 p-4">
                      <div className="mb-2 text-xs text-white/60">{m}</div>
                      <div className="h-16 w-full rounded bg-white/10 relative overflow-hidden">
                        <div className="absolute inset-2">
                          <div className="grid h-full grid-cols-12 gap-[2px]">
                            {Array.from({ length: 12 }).map((_, i) => (
                              <motion.div
                                key={i}
                                className="h-full w-full origin-bottom rounded-sm bg-white/20"
                                initial={{ scaleY: 0.2, opacity: 0.7 }}
                                animate={{ scaleY: [0.2, 0.9, 0.35, 0.7, 0.5], opacity: [0.6, 1, 0.8, 1, 0.9] }}
                                transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut", delay: (i * 0.08) + idx * 0.2 }}
                              />
                            ))}
                          </div>
                        </div>
                        <div className="pointer-events-none absolute inset-0 animate-[sweep_2.8s_linear_infinite] bg-[linear-gradient(90deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.06)_50%,rgba(255,255,255,0)_100%)]"/>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tools marquee */}
      <section className="border-y border-white/10 bg-black/60">
        <div className="mx-auto max-w-7xl px-4 py-6">
          <div className="mb-3 text-xs uppercase tracking-widest text-white/50">Tooled up with</div>
          <div className="relative overflow-hidden">
            <div className="animate-[marquee_18s_linear_infinite] whitespace-nowrap [--gap:4rem]">
              {CLIENT_LOGOS.concat(CLIENT_LOGOS).map((logo, i) => (
                <span key={i} className="mx-[var(--gap)] inline-flex items-center gap-2 text-white/60">
                  <span className="h-2 w-2 rounded-full bg-white/30"/>{logo}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section id="work" className="mx-auto max-w-7xl px-4 py-20">
        <div className="mb-10 flex items-end justify-between gap-4">
          <h2 className="text-3xl font-extrabold md:text-4xl">Featured Work</h2>
          <a href="#contact" className="text-sm text-white/70 hover:text-white">Start a project</a>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {PROJECTS.map((p, idx) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.07 }}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(0,0,0,0))]"
            >
              {p.image && (
                <div className="h-44 w-full overflow-hidden border-b border-white/10 bg-white">
                  <img src={p.image} alt={p.title} className="h-full w-full object-contain p-4" />
                </div>
              )}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">{p.title}</h3>
                <p className="mb-2 text-white/80">{p.blurb}</p>
                <p className="mb-4 text-white/60">{p.impact}</p>
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="rounded-full border border-white/15 px-2.5 py-1 text-xs text-white/60">{t}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="mx-auto max-w-7xl px-4 pb-16">
        <h2 className="mb-8 text-3xl font-extrabold md:text-4xl">Experience</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {EXPERIENCE.map((job, i) => (
            <div key={i} className="rounded-3xl border border-white/10 p-6 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(0,0,0,0))]">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <div className="text-lg font-semibold">{job.org}</div>
                  <div className="text-white/70">{job.role}</div>
                </div>
                <div className="text-sm text-white/50">{job.period}</div>
              </div>
              <ul className="mt-4 grid gap-2 text-sm text-white/80">
                {job.bullets.map((b, j) => (
                  <li key={j} className="flex items-start gap-2">
                    <span className="mt-[6px] inline-block h-1.5 w-1.5 rounded-full bg-white/50"/>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Volunteering */}
      <section id="volunteering" className="mx-auto max-w-7xl px-4 pb-16">
        <h2 className="text-3xl font-extrabold mb-8">Volunteering</h2>
        {VOLUNTEERING.map((v, i) => (
          <div key={i} className="rounded-3xl border border-white/10 p-6 mb-6 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(0,0,0,0))]">
            <div className="flex items-center justify-between gap-4">
              <div>
                <div className="text-lg font-semibold">{v.org}</div>
                <div className="text-white/70">{v.role}</div>
              </div>
              <div className="text-sm text-white/50">{v.period}</div>
            </div>
            <ul className="mt-4 grid gap-2 text-sm text-white/80">
              {v.bullets.map((b, j) => (
                <li key={j} className="flex items-start gap-2">
                  <span className="mt-[6px] inline-block h-1.5 w-1.5 rounded-full bg-white/50"/>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      {/* About */}
      <section id="about" className="mx-auto max-w-7xl px-4 pb-16">
        <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-3">
          <div className="md:col-span-2">
            <h2 className="mb-4 text-3xl font-extrabold md:text-4xl">About</h2>
            <p className="mb-4 text-white/70">
              I’m Kunj Prajapati — a Site Reliability Engineer focused on cloud platforms, observability, and automation.
              I turn ambiguity into reliable systems through repeatable pipelines, actionable dashboards, and sensible guardrails.
            </p>
            <ul className="grid grid-cols-1 gap-3 text-sm text-white/80 md:grid-cols-2">
              {[
                "Incident automation and response tooling",
                "Infrastructure compliance & DR readiness",
                "Reusable IaC modules across Azure & AWS",
                "SLOs, error budgets, and pragmatic alerts",
              ].map((li) => (
                <li key={li} className="flex items-start gap-2">
                  <span className="mt-[6px] inline-block h-1.5 w-1.5 rounded-full bg-white/60"/>
                  <span>{li}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border border-white/10 p-6">
            <div className="mb-3 text-xs uppercase tracking-wider text-white/60">Quick Stats</div>
            <dl className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <dt className="text-white/50">Experience</dt>
                <dd className="text-lg font-semibold">3+ years</dd>
              </div>
              <div>
                <dt className="text-white/50">Stack</dt>
                <dd className="font-semibold">Azure · AWS · K8s · Python · Java</dd>
              </div>
              <div>
                <dt className="text-white/50">Certs</dt>
                <dd className="font-semibold">{CERTS[0]}</dd>
              </div>
              <div>
                <dt className="text-white/50">Location</dt>
                <dd className="font-semibold">Toronto, CA</dd>
              </div>
            </dl>
            <div className="mt-4 text-xs text-white/60">Also: {CERTS.slice(1).join(" · ")}</div>
          </div>
        </div>
      </section>

      {/* Education */}
      <section id="education" className="mx-auto max-w-7xl px-4 pb-16">
        <div className="rounded-3xl border border-white/10 p-6">
          <h2 className="mb-3 text-3xl font-extrabold md:text-4xl">Education</h2>
          <div className="flex flex-col gap-2 text-white/80 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="text-lg font-semibold">Sheridan College Institute of Technology and Advanced Learning</div>
              <div className="text-white/70">Brampton, ON</div>
              <div className="mt-1">Diploma of Software Engineering, Honours</div>
              <div className="text-white/60">GPA: 3.69/4.00</div>
            </div>
            <div className="text-white/60">Dec 2023</div>
          </div>
          <div className="mt-4 text-sm text-white/70">Relevant Coursework: Object Oriented Programming – Java · Cloud Enabled Networks</div>
        </div>
      </section>

      {/* CTA banner */}
      <section className="mx-auto max-w-7xl px-4 pb-20">
        <div className="overflow-hidden rounded-3xl border border-white/10">
          <div className="bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(0,0,0,0))] px-6 py-10 md:px-12 md:py-16">
            <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-3">
              <div className="md:col-span-2">
                <h3 className="text-2xl font-bold md:text-3xl">Let’s harden your platform and ship faster.</h3>
                <p className="mt-2 max-w-xl text-white/70">I help teams remove toil, add guardrails, and make deploys boring. Need help with migration, observability, or incident tooling?</p>
              </div>
            
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-7xl px-4 pb-28">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <div>
            <h2 className="mb-3 text-3xl font-extrabold md:text-4xl">Contact</h2>
            <p className="text-white/70">Reach out for roles, consulting, or a friendly chat.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href={LINKS.email} className="inline-flex items-center gap-2 rounded-xl border border-white/15 px-4 py-2 text-sm text-white/80 hover:border-white/40"><Mail className="h-4 w-4"/> Email</a>
              <a href={LINKS.github} className="inline-flex items-center gap-2 rounded-xl border border-white/15 px-4 py-2 text-sm text-white/80 hover:border-white/40"><Github className="h-4 w-4"/> GitHub</a>
              <a href={LINKS.linkedin} className="inline-flex items-center gap-2 rounded-xl border border-white/15 px-4 py-2 text-sm text-white/80 hover:border-white/40"><Linkedin className="h-4 w-4"/> LinkedIn</a>
            </div>
          </div>
          <form onSubmit={(e) => e.preventDefault()} className="md:col-span-2 grid grid-cols-1 gap-4">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your name"
          className="rounded-xl border border-white/15 bg-black/40 px-4 py-3"
        />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="rounded-xl border border-white/15 bg-black/40 px-4 py-3"
        />
        <textarea
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Tell me about your project"
          className="rounded-xl border border-white/15 bg-black/40 px-4 py-3"
        />
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={handleSend}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 font-semibold text-black"
          >
            Send
          </button>
          <a ref={aRef} style={{ display: "none" }}>hidden</a>
        </div>
      </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-10">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div className="text-sm text-white/60">© {new Date().getFullYear()} Kunj Prajapati. All rights reserved.</div>
            <div className="flex items-center gap-4 text-sm text-white/60">
              <a href="#" className="hover:text-white">Privacy</a>
              <a href="#" className="hover:text-white">Imprint</a>
              <a href="#home" className="inline-flex items-center gap-1 rounded-full border border-white/15 px-3 py-1 text-xs hover:border-white/40">Back to top</a>
            </div>
          </div>
        </div>
      </footer>

      <style>{`
        @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        @keyframes sweep { 0% { transform: translateX(-120%); } 100% { transform: translateX(220%); } }
      `}</style>
    </div>
  );
}
