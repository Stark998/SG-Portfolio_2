import { useScrollReveal } from "../hooks/useScrollReveal";
import { portfolioData } from "../data/portfolio";

export default function Experience() {
  const ref = useScrollReveal();

  return (
    <section id="experience" className="border-t border-border py-28 px-8 md:px-16 max-w-screen-xl mx-auto">
      <div className="section-label">03 — Experience</div>
      <h2 className="section-title">Work History</h2>

      <div ref={ref} className="reveal">
        {/* Timeline */}
        <div className="relative pl-8">
          {/* Timeline line */}
          <div
            className="absolute left-0 top-2 w-px"
            style={{
              height: "calc(100% - 8px)",
              background: "linear-gradient(to bottom, #00e5ff, transparent)",
              opacity: 0.3,
            }}
          />

          {portfolioData.experience.map((exp, i) => (
            <div key={i} className="relative mb-0 reveal-item" style={{ transitionDelay: `${120 + i * 90}ms` }}>
              {/* Dot */}
              <div
                className="absolute -left-[2.35rem] top-2 w-2.5 h-2.5 rounded-full bg-accent"
                style={{ boxShadow: "0 0 10px rgba(0,229,255,0.5)" }}
              />

              {/* Card */}
              <div className="bg-card border border-border p-8 rounded card-animate hover:border-accent/20 transition-colors duration-200">
                {/* Meta */}
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <span className="font-mono text-[0.72rem] text-accent tracking-widest uppercase">
                    {exp.company}
                  </span>
                  <span className="font-mono text-[0.65rem] text-muted px-2 py-0.5 border border-border">
                    {exp.period}
                  </span>
                  <span className="font-mono text-[0.65rem] text-accent3 px-2 py-0.5 border border-accent3/20 bg-accent3/5">
                    {exp.type}
                  </span>
                  {i === 0 && (
                    <span className="font-mono text-[0.65rem] text-accent px-2 py-0.5 border border-accent/30 bg-accent/10">
                      Current Role
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-bold mb-4">{exp.role}</h3>
                <p className="text-muted text-sm leading-loose mb-6">{exp.description}</p>

                {/* Highlights */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {exp.highlights.map((h, j) => (
                    <div key={j} className="flex items-start gap-2 text-sm text-muted">
                      <span className="text-accent mt-0.5 shrink-0">▸</span>
                      {h}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Roles & Responsibilities */}
        <div className="mt-12 bg-card border border-border p-8 rounded reveal-item card-animate" style={{ transitionDelay: "200ms" }}>
          <h3 className="font-mono text-[0.72rem] text-accent tracking-widest uppercase mb-6">
            Roles & Responsibilities
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {portfolioData.responsibilities.map((r, i) => (
              <div key={i} className="flex items-start gap-2 text-sm text-muted">
                <span className="text-accent3 mt-0.5 shrink-0 font-mono text-xs">
                  {String(i + 1).padStart(2, "0")}.
                </span>
                {r}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
