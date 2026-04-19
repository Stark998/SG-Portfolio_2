import { useScrollReveal } from "../hooks/useScrollReveal";
import { portfolioData } from "../data/portfolio";

const { personal } = portfolioData;

const contactLinks = [
  {
    label: "Email",
    value: personal.email,
    icon: "✉️",
    href: `mailto:${personal.email}`,
  },
  {
    label: "Phone",
    value: personal.phone,
    icon: "📞",
    href: `tel:${personal.phone}`,
  },
];

export default function Contact() {
  const ref = useScrollReveal();

  return (
    <section
      id="contact"
      className="border-t border-border py-28 px-8 md:px-16 max-w-screen-xl mx-auto"
    >
      <div className="section-label">06 — Contact</div>
      <h2 className="section-title">Let's Connect</h2>

      <div ref={ref} className="reveal grid grid-cols-1 md:grid-cols-2 gap-16 items-start max-w-3xl">
        {/* Left */}
        <div className="reveal-item" style={{ transitionDelay: "120ms" }}>
          <p className="text-muted leading-loose text-[0.95rem] mb-6">
            I'm currently open to new opportunities and collaborations. Whether
            you're looking for Business Central customizations, integrations,
            implementation support, or technical consulting — my inbox is always
            open.
          </p>
          <p className="font-mono text-[0.78rem] text-accent tracking-widest">
            ◉ Currently @ {personal.currentCompany}
          </p>

          {/* Decorative box */}
          <div className="mt-8 border border-border p-5 bg-card rounded">
            <div className="font-mono text-[0.65rem] text-muted tracking-widest uppercase mb-3">
              Quick Facts
            </div>
            <div className="space-y-2 text-sm text-muted">
              <div className="flex gap-2">
                <span className="text-accent3">▸</span>
                Around 3 years Dynamics 365 Business Central experience
              </div>
              <div className="flex gap-2">
                <span className="text-accent3">▸</span>
                Microsoft Dynamics 365 Business Central technical consultant
              </div>
              <div className="flex gap-2">
                <span className="text-accent3">▸</span>
                Experienced in AL development, custom reports, and integrations
              </div>
              <div className="flex gap-2">
                <span className="text-accent3">▸</span>
                B.Tech CSE — Parul University, 2024
              </div>
            </div>
          </div>
        </div>

        {/* Right: links */}
        <div className="space-y-3">
          {contactLinks.map((link, index) => (
            <a
              key={link.label}
              href={link.href}
              data-hover
              className="flex items-center gap-4 p-4 bg-card border border-border rounded text-white no-underline card-animate reveal-item hover:border-accent/30 hover:translate-x-1 transition-all duration-200"
              style={{ transitionDelay: `${140 + index * 70}ms` }}
            >
              <div className="w-10 h-10 bg-accent/8 border border-border rounded flex items-center justify-center text-lg shrink-0">
                {link.icon}
              </div>
              <div>
                <div className="font-mono text-[0.62rem] text-muted tracking-widest uppercase mb-0.5">
                  {link.label}
                </div>
                <div className="text-sm font-semibold break-all">{link.value}</div>
              </div>
              <svg
                className="ml-auto text-muted shrink-0"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          ))}

          {/* CTA */}
          <div className="pt-4 reveal-item" style={{ transitionDelay: "300ms" }}>
            <a
              href={`mailto:${personal.email}`}
              data-hover
              className="btn-primary w-full justify-center card-animate"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              Send Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
