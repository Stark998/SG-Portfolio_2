import { portfolioData } from "../data/portfolio";

const { personal } = portfolioData;

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-28 pb-16 px-8 md:px-16 overflow-hidden"
    >
      {/* Glow orbs */}
      <div
        className="absolute top-[-100px] right-[-100px] w-[600px] h-[600px] rounded-full pointer-events-none animate-pulse-glow"
        style={{
          background: "radial-gradient(circle, rgba(0,229,255,0.1) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-0 left-[200px] w-[400px] h-[400px] rounded-full pointer-events-none animate-pulse-glow2"
        style={{
          background: "radial-gradient(circle, rgba(124,58,237,0.08) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-3xl">
        {/* Available badge */}
        <div
          className="inline-flex items-center gap-2 font-mono text-[0.72rem] text-accent border border-accent/30 px-4 py-1.5 mb-8 tracking-widest"
          style={{ animation: "fadeUp 0.8s ease both" }}
        >
          <span
            className="w-1.5 h-1.5 rounded-full bg-accent animate-blink"
          />
          Available for Opportunities
        </div>

        {/* Name */}
        <h1
          className="text-5xl md:text-7xl font-extrabold leading-[1.05] tracking-tight"
          style={{ animation: "fadeUp 0.8s 0.1s ease both" }}
        >
          {personal.firstName}
          <span
            className="block"
            style={{
              background: "linear-gradient(135deg, #00e5ff, #7c3aed)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            {personal.lastName}
          </span>
        </h1>

        {/* Role */}
        <p
          className="mt-4 font-mono text-sm text-accent tracking-widest uppercase"
          style={{ animation: "fadeUp 0.8s 0.15s ease both" }}
        >
          {personal.title}
        </p>

        {/* Subtitle */}
        <p
          className="mt-6 text-base text-muted max-w-xl leading-loose"
          style={{ animation: "fadeUp 0.8s 0.2s ease both" }}
        >
          Specializing in Microsoft Dynamics 365 Business Central consulting —{" "}
          {personal.subtitle}
        </p>

        {/* CTA Buttons */}
        <div
          className="flex flex-wrap gap-4 mt-10"
          style={{ animation: "fadeUp 0.8s 0.3s ease both" }}
        >
          <a href="#projects" className="btn-primary" data-hover>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
            View Projects
          </a>
          <a href="#contact" className="btn-outline" data-hover>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            Get in Touch
          </a>
        </div>

        {/* Stats */}
        <div
          className="flex flex-wrap gap-12 mt-16"
          style={{ animation: "fadeUp 0.8s 0.4s ease both" }}
        >
          {[
            { num: personal.yearsExperience, label: "Years Experience" },
            { num: personal.deployments, label: "Deployments" },
          ].map((s) => (
            <div key={s.label}>
              <div
                className="text-4xl font-extrabold"
                style={{
                  background: "linear-gradient(135deg, #00e5ff, #06d6a0)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {s.num}
              </div>
              <div className="font-mono text-[0.68rem] text-muted tracking-widest uppercase mt-1">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30 animate-float">
        <span className="font-mono text-[0.6rem] tracking-widest text-muted uppercase">Scroll</span>
        <svg width="16" height="24" viewBox="0 0 16 24" fill="none" stroke="#64748b" strokeWidth="1.5">
          <rect x="1" y="1" width="14" height="22" rx="7" />
          <circle cx="8" cy="7" r="2" fill="#64748b" className="animate-float" />
        </svg>
      </div>
    </section>
  );
}
