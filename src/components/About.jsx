import { useScrollReveal } from "../hooks/useScrollReveal";
import { portfolioData } from "../data/portfolio";

const { personal } = portfolioData;

const infoCards = [
  { label: "Email", value: personal.email, span: false },
  { label: "Phone", value: personal.phone, span: false },
  { label: "Location", value: personal.location, span: false },
  { label: "Status", value: `● ${personal.status}`, span: false, accent: true },
  {
    label: "Current Role",
    value: `Analyst @ ${personal.currentCompany}`,
    span: true,
  },
];

export default function About() {
  const ref = useScrollReveal();

  return (
    <section id="about" className="border-t border-border py-28 px-8 md:px-16 max-w-screen-xl mx-auto">
      <div className="section-label">01 — About</div>
      <h2 className="section-title">Who I Am</h2>

      <div ref={ref} className="reveal grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        {/* Left: text */}
        <div className="space-y-5 text-muted leading-loose text-[0.95rem] reveal-item" style={{ transitionDelay: "120ms" }}>
          <p>
            I'm a <span className="text-white font-semibold">Technical Consultant</span> with
            around 3 years of experience in Microsoft Dynamics 365 Business
            Central, delivering production-ready ERP customizations and
            integrations.
          </p>
          <p>
            I build Business Central extensions, custom reports, APIs, and
            integrations using <span className="text-white font-semibold">AL</span>,
            <span className="text-white font-semibold"> Azure Functions</span>,
            <span className="text-white font-semibold"> REST</span>, and
            <span className="text-white font-semibold"> OData</span>.
          </p>
          <p>
            I thrive in Agile environments, collaborate with business users and
            functional consultants, and take pride in delivering reliable ERP
            solutions that improve process efficiency and support post-go-live
            stability.
          </p>
        </div>

        {/* Right: info cards */}
        <div className="grid grid-cols-2 gap-3">
          {infoCards.map((card, index) => (
            <div
              key={card.label}
              className={`bg-card border border-border p-4 rounded card-animate reveal-item hover:border-accent/30 transition-colors duration-200 ${
                card.span ? "col-span-2" : ""
              }`}
              style={{ transitionDelay: `${180 + index * 80}ms` }}
            >
              <div className="font-mono text-[0.62rem] text-muted tracking-widest uppercase mb-1.5">
                {card.label}
              </div>
              <div
                className={`text-sm font-semibold break-all ${
                  card.accent ? "text-accent3" : "text-white"
                }`}
              >
                {card.value}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
