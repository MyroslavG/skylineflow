import Image from "next/image";
import type { CSSProperties } from "react";
import { WorkGallery } from "./work-gallery";

const primaryPhone = {
  label: "Main line",
  display: "(437) 229-0543",
  href: "tel:+14372290543",
};
const secondaryPhone = {
  label: "Second line",
  display: "(289) 885-3134",
  href: "tel:+12898853134",
};
const address = "36 Brentcliffe Rd, Toronto";

const services = [
  {
    title: "Leak Investigation",
    text: "Leak investigation, leak repair, fan coil leaks, pipe repair, and pipe replacement.",
  },
  {
    title: "Drain Camera & Cleaning",
    text: "Camera drain inspection, drain cleaning, clogged drains, clean outs, and kitchen backups.",
  },
  {
    title: "Sump Pump Service",
    text: "Sump pump installation, servicing, pump replacement, and urgent pump support.",
  },
  {
    title: "Fixture & Appliance Installs",
    text: "Dishwasher installs, faucets, toilets, valves, recirc lines, and fixture upgrades.",
  },
  {
    title: "Risers, Valves & PRV",
    text: "Main shut off valves, PRV replacement, manifolds, riser shutdowns, and building repairs.",
  },
  {
    title: "Plumbing Diagnostics",
    text: "Inspect plumbing, crossover checks, noise investigation, Kitec replacement, and DHW issues.",
  },
];

const workPhotos = [
  {
    src: "/1.jpeg",
    title: "Sump pump service",
  },
  {
    src: "/2.jpeg",
    title: "Mechanical room piping",
  },
  {
    src: "/3.jpeg",
    title: "Copper reroute",
  },
  {
    src: "/4.jpeg",
    title: "Valve and riser work",
  },
  {
    src: "/5.jpeg",
    title: "Overhead piping",
  },
  {
    src: "/6.jpeg",
    title: "Drain clean out",
  },
  {
    src: "/7.jpeg",
    title: "Copper fabrication",
  },
];

const steps = [
  "Tell us what is happening",
  "Get a clear arrival plan",
  "Approve the fix before work begins",
];

const schema = {
  "@context": "https://schema.org",
  "@type": "Plumber",
  name: "Skyline Flow Toronto Plumbing",
  telephone: primaryPhone.href.replace("tel:", ""),
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: primaryPhone.href.replace("tel:", ""),
      contactType: "customer service",
    },
    {
      "@type": "ContactPoint",
      telephone: secondaryPhone.href.replace("tel:", ""),
      contactType: "customer service",
    },
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: "36 Brentcliffe Rd",
    addressLocality: "Toronto",
    addressRegion: "ON",
    addressCountry: "CA",
  },
  areaServed: "Toronto",
  sameAs: [
    "https://www.instagram.com/skylineflowtoronto/",
    "https://www.facebook.com/share/19Ubgd1d2r/?mibextid=wwXIfr",
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <header className="site-header">
        <a className="brand" href="#top" aria-label="Skyline Flow home">
          <span className="brand-mark" aria-hidden="true">
            <Image src="/logo.jpeg" alt="" width={46} height={46} priority />
          </span>
          <span>Skyline Flow</span>
        </a>
        <nav className="nav-links" aria-label="Page sections">
          <a href="#services">Services</a>
          <a href="#work">Work</a>
          <a href="#process">Process</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="header-call" href={primaryPhone.href}>
          Call {primaryPhone.display}
        </a>
      </header>

      <main id="top">
        <section className="hero" aria-labelledby="hero-title">
          <Image
            className="hero-image"
            src="/4.jpeg"
            alt=""
            aria-hidden="true"
            fill
            priority
            sizes="100vw"
          />
          <div className="hero-shade" aria-hidden="true" />
          <div className="flow-line" aria-hidden="true" />

          <div className="hero-content">
            <p className="eyebrow">Premium Toronto plumbing service</p>
            <h1 id="hero-title">Skyline Flow Toronto Plumbing</h1>
            <p className="hero-copy">
              Refined plumbing support for Toronto homes and small businesses:
              leaks, drains, sump pumps, fixture upgrades, and pipe repairs
              handled with a clean finish and calm communication.
            </p>
            <div className="hero-actions" aria-label="Primary contact actions">
              <a className="button button-primary" href={primaryPhone.href}>
                Call {primaryPhone.display}
              </a>
              <a className="button button-secondary" href={secondaryPhone.href}>
                Call {secondaryPhone.display}
              </a>
            </div>
          </div>
        </section>

        <section className="quick-contact" aria-label="Quick contact details">
          <a href={primaryPhone.href}>
            <span>{primaryPhone.label}</span>
            {primaryPhone.display}
          </a>
          <a href={secondaryPhone.href}>
            <span>{secondaryPhone.label}</span>
            {secondaryPhone.display}
          </a>
          <a
            href="https://www.instagram.com/skylineflowtoronto/"
            target="_blank"
            rel="noreferrer"
          >
            <span>Instagram</span>
            @skylineflowtoronto
          </a>
          <a
            href="https://www.google.com/maps/search/?api=1&query=36+Brentcliffe+Rd+Toronto"
            target="_blank"
            rel="noreferrer"
          >
            <span>Location</span>
            {address}
          </a>
        </section>

        <section className="section service-section" id="services">
          <div className="section-heading reveal">
            <p className="eyebrow">What we handle</p>
            <h2>Careful plumbing work with a cleaner finish.</h2>
            <p>
              Built for the calls people actually make: leaks, drain backups,
              sump pump issues, camera inspections, and clean repairs that need
              to be done properly.
            </p>
          </div>

          <div className="service-grid">
            {services.map((service, index) => (
              <article
                className="service-card reveal"
                key={service.title}
                style={{ "--delay": `${index * 70}ms` } as CSSProperties}
              >
                <span aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section work-section" id="work">
          <div className="section-heading reveal">
            <p className="eyebrow">Selected work</p>
            <h2>Real plumbing work, cleanly finished.</h2>
          </div>

          <WorkGallery photos={workPhotos} />
        </section>

        <section className="process-band" id="process">
          <div className="process-copy reveal">
            <p className="eyebrow">Simple process</p>
            <h2>A calm process from first call to final check.</h2>
          </div>
          <ol className="process-list">
            {steps.map((step, index) => (
              <li
                className="reveal"
                key={step}
                style={{ "--delay": `${index * 90}ms` } as CSSProperties}
              >
                <span>{index + 1}</span>
                {step}
              </li>
            ))}
          </ol>
        </section>

        <section className="section contact-section" id="contact">
          <div className="contact-copy reveal">
            <p className="eyebrow">Contact</p>
            <h2>Book plumbing help in Toronto.</h2>
            <p>
              For the fastest response, call directly. You can also reach
              Skyline Flow Toronto Plumbing through Instagram or Facebook.
            </p>
          </div>

          <div className="contact-grid">
            <div className="contact-card contact-card-static reveal">
              <span>Call</span>
              <div className="phone-list">
                <a href={primaryPhone.href}>{primaryPhone.display}</a>
                <a href={secondaryPhone.href}>{secondaryPhone.display}</a>
              </div>
              <small>Tap either number to start a phone call</small>
            </div>
            <a
              className="contact-card reveal"
              href="https://www.instagram.com/skylineflowtoronto/"
              target="_blank"
              rel="noreferrer"
            >
              <span>Instagram</span>
              <strong>@skylineflowtoronto</strong>
              <small>Message or follow on Instagram</small>
            </a>
            <a
              className="contact-card reveal"
              href="https://www.facebook.com/share/19Ubgd1d2r/?mibextid=wwXIfr"
              target="_blank"
              rel="noreferrer"
            >
              <span>Facebook</span>
              <strong>Skyline Flow Toronto</strong>
              <small>Open the Facebook page</small>
            </a>
            <a
              className="contact-card reveal"
              href="https://www.google.com/maps/search/?api=1&query=36+Brentcliffe+Rd+Toronto"
              target="_blank"
              rel="noreferrer"
            >
              <span>Location</span>
              <strong>{address}</strong>
              <small>View on Google Maps</small>
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <span>Skyline Flow Toronto Plumbing</span>
        <div className="footer-phones">
          <a href={primaryPhone.href}>{primaryPhone.display}</a>
          <a href={secondaryPhone.href}>{secondaryPhone.display}</a>
        </div>
      </footer>
    </>
  );
}
