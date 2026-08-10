import Image from "next/image";
import type { CSSProperties } from "react";

const phoneDisplay = "(437) 229-0543";
const phoneHref = "tel:+14372290543";
const address = "36 Brentcliffe Rd, Toronto";

const services = [
  {
    title: "Leak Repair",
    text: "Targeted help for dripping fixtures, visible pipe leaks, and small water issues before they spread.",
  },
  {
    title: "Drain Clearing",
    text: "Kitchen, bath, laundry, and floor drains cleared with a tidy, practical approach.",
  },
  {
    title: "Fixture Installs",
    text: "Faucets, toilets, valves, vanities, and appliance hookups fitted cleanly and checked before handoff.",
  },
  {
    title: "Pipe Work",
    text: "Repairs and replacements for worn connections, exposed lines, shutoffs, and supply issues.",
  },
  {
    title: "Urgent Calls",
    text: "Fast response for active leaks, blocked drains, and plumbing problems that cannot wait.",
  },
  {
    title: "Small Business",
    text: "Reliable plumbing support for offices, shops, salons, cafes, and Toronto service spaces.",
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
  telephone: "+14372290543",
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
            SF
          </span>
          <span>Skyline Flow</span>
        </a>
        <nav className="nav-links" aria-label="Page sections">
          <a href="#services">Services</a>
          <a href="#process">Process</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="header-call" href={phoneHref}>
          Call {phoneDisplay}
        </a>
      </header>

      <main id="top">
        <section className="hero" aria-labelledby="hero-title">
          <Image
            className="hero-image"
            src="/skyline-flow-hero.png"
            alt=""
            aria-hidden="true"
            fill
            priority
            sizes="100vw"
          />
          <div className="hero-shade" aria-hidden="true" />
          <div className="flow-line" aria-hidden="true" />

          <div className="hero-content">
            <p className="eyebrow">Toronto plumbing service</p>
            <h1 id="hero-title">Skyline Flow Toronto Plumbing</h1>
            <p className="hero-copy">
              Clean, responsive plumbing help for Toronto homes and small
              businesses. Call for leaks, drains, installs, and pipe repairs
              handled with clear communication.
            </p>
            <div className="hero-actions" aria-label="Primary contact actions">
              <a className="button button-primary" href={phoneHref}>
                Call {phoneDisplay}
              </a>
              <a className="button button-secondary" href="#contact">
                Get contact details
              </a>
            </div>
          </div>
        </section>

        <section className="quick-contact" aria-label="Quick contact details">
          <a href={phoneHref}>
            <span>Phone</span>
            {phoneDisplay}
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
            <h2>Practical plumbing work, cleanly done.</h2>
            <p>
              Built for the calls people actually make: a leak under the sink,
              a drain that stopped moving, a fixture that needs replacing, or a
              pipe that needs attention.
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

        <section className="process-band" id="process">
          <div className="process-copy reveal">
            <p className="eyebrow">Simple process</p>
            <h2>Quick call. Clear next step. No drama.</h2>
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
            <a className="contact-card reveal" href={phoneHref}>
              <span>Call</span>
              <strong>{phoneDisplay}</strong>
              <small>Tap to start a phone call</small>
            </a>
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
        <a href={phoneHref}>{phoneDisplay}</a>
      </footer>
    </>
  );
}
