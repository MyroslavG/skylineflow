import Image from "next/image";
import type { CSSProperties } from "react";
import { RequestServiceForm } from "./request-service-form";
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

const serviceArea = "Serving Toronto & the GTA";

const trustItems = [
  "Residential & condo experience",
  "Renovation plumbing",
  "Professional workmanship",
  "Toronto & GTA",
];

const serviceSections = [
  {
    kicker: "Residential Plumbing",
    title: "Reliable plumbing service for houses and condo units.",
    text: "Whether it is a small repair or a more complicated plumbing problem, Skyline Flow focuses on proper diagnosis and a professional solution.",
    items: [
      "Faucet repair & replacement",
      "Toilet repair & installation",
      "Shower & tub valves",
      "Shut-off valve replacement",
      "Leaking pipes",
      "Sink & vanity plumbing",
      "Dishwasher connections",
      "Refrigerator water lines",
      "Laundry plumbing",
      "Water pressure problems",
      "Fixture installation",
      "General plumbing repairs",
    ],
    cta: "Request residential service",
    featured: true,
  },
  {
    kicker: "Bathroom & Kitchen Renovations",
    title: "From rough-in to final fixtures.",
    text: "Good renovation plumbing starts behind the walls. We support bathroom, kitchen and basement renovation projects from piping changes to finish plumbing.",
    items: [
      "Bathroom rough-ins",
      "Shower valve installation",
      "Tub & shower plumbing",
      "Vanity plumbing",
      "Toilet relocation",
      "Kitchen sink plumbing",
      "Faucet installation",
      "Drain & water line modifications",
      "Fixture relocation",
      "Finish plumbing",
    ],
    cta: "Request a renovation quote",
    featured: true,
  },
  {
    kicker: "Drain Cleaning & Camera Inspection",
    title: "Find the problem, not just the symptom.",
    text: "Slow or blocked drains can be caused by more than a simple clog. Cleaning and camera inspection help identify what is happening inside the system.",
    items: [
      "Kitchen drain blockages",
      "Bathroom drain blockages",
      "Slow drains",
      "Recurring backups",
      "Drain cleaning",
      "Camera inspection",
      "Cleanout service",
      "Drain troubleshooting",
    ],
    cta: "Request drain service",
  },
  {
    kicker: "Leak Detection & Diagnostics",
    title: "Difficult problem? Let's find the cause.",
    text: "Water pressure issues, intermittent leaks, unusual noises and hot-water problems often need careful troubleshooting before anything is replaced.",
    items: [
      "Leak investigation",
      "Water pressure problems",
      "Hot & cold water issues",
      "Plumbing crossover problems",
      "Water hammer investigation",
      "Fixture troubleshooting",
      "Valve problems",
      "Difficult diagnostics",
    ],
    cta: "Request plumbing diagnostics",
  },
  {
    kicker: "Sump Pumps & Flood Protection",
    title: "Help protect your home from water damage.",
    text: "A properly operating sump pump is an important part of protecting many GTA homes from groundwater and basement flooding.",
    items: [
      "Sump pump installation",
      "Sump pump replacement",
      "Pump troubleshooting",
      "Discharge piping",
      "Check valve replacement",
      "Backup system plumbing",
      "Existing system inspection",
    ],
    cta: "Request sump pump service",
  },
  {
    kicker: "Condo Plumbing",
    title: "Condo plumbing requires a different understanding.",
    text: "In-suite plumbing connects to a larger building system. High-rise experience helps when diagnosing pressure, risers, valves, drainage and crossover issues.",
    items: [
      "In-suite plumbing repairs",
      "Bathroom renovations",
      "Kitchen renovations",
      "Fixture replacement",
      "Shut-off valves",
      "Pressure problems",
      "Leak investigation",
      "Building coordination when required",
    ],
    cta: "Condo plumbing services",
  },
  {
    kicker: "Renovation Contractors",
    title: "A plumbing partner for residential projects.",
    text: "Skyline Flow works with renovation contractors who need reliable plumbing support through rough-ins, fixture relocation and finish plumbing.",
    items: [
      "Bathroom renovations",
      "Kitchen renovations",
      "Basement plumbing",
      "Plumbing rough-ins",
      "Fixture relocation",
      "Shower & tub installations",
      "Finish plumbing",
      "Plumbing modifications",
    ],
    cta: "Work with Skyline Flow",
  },
];

const workPhotos = [
  {
    src: "/1.jpeg",
    title: "Sump pump service and flood protection plumbing",
  },
  {
    src: "/2.jpeg",
    title: "Mechanical piping with clean copper workmanship",
  },
  {
    src: "/3.jpeg",
    title: "Copper pipe reroute for renovation requirements",
  },
  {
    src: "/4.jpeg",
    title: "Riser and valve work in a condo plumbing system",
  },
  {
    src: "/5.jpeg",
    title: "Overhead piping prepared for reliable service access",
  },
  {
    src: "/6.jpeg",
    title: "Drain cleanout installation for future maintenance",
  },
  {
    src: "/7.jpeg",
    title: "Copper fabrication for a clean finished installation",
  },
];

const washroomPhotos = [
  {
    src: "/washroom1.jpeg",
    title: "Washroom renovation plumbing",
  },
  {
    src: "/washroom2.jpeg",
    title: "Washroom rough-in preparation",
  },
  {
    src: "/washroom3.jpeg",
    title: "Fixture wall plumbing layout",
  },
  {
    src: "/washroom4.jpeg",
    title: "Bathroom water line work",
  },
  {
    src: "/washroom5.jpeg",
    title: "Drain and supply preparation",
  },
  {
    src: "/washroom6.jpeg",
    title: "Renovation plumbing detail",
  },
  {
    src: "/washroom7.jpeg",
    title: "Clean washroom installation work",
  },
  {
    src: "/washroom8.jpeg",
    title: "Vanity and fixture plumbing",
  },
  {
    src: "/washroom9.jpeg",
    title: "Washroom plumbing progress",
  },
  {
    src: "/washroom10.jpeg",
    title: "Finished renovation plumbing detail",
  },
  {
    src: "/washroom11.jpeg",
    title: "Washroom fixture installation",
  },
  {
    src: "/washroom12.jpeg",
    title: "Completed washroom renovation work",
  },
];

const whyItems = [
  {
    title: "Residential & Renovation Experience",
    text: "From everyday repairs to complete bathroom and kitchen plumbing, we understand service calls and renovation work.",
  },
  {
    title: "High-Rise Plumbing Knowledge",
    text: "Condo system experience gives us added insight when diagnosing pressure, drainage, valve and water-distribution problems.",
  },
  {
    title: "Diagnose Before We Repair",
    text: "We focus on identifying the cause of the problem rather than replacing parts and hoping for the best.",
  },
  {
    title: "Clear Communication",
    text: "We explain what we find, discuss the recommended solution and get approval before proceeding.",
  },
  {
    title: "Clean, Professional Work",
    text: "We respect homes, condos and renovation sites, and aim to leave the work area clean when the job is complete.",
  },
  {
    title: "Practical Project Coordination",
    text: "Renovation plumbing is planned around rough-in, finish stages and the next trade's schedule.",
  },
];

const processSteps = [
  {
    title: "Tell us what is happening",
    text: "Call us or submit a service request with the main details about the issue.",
  },
  {
    title: "Arrange the visit",
    text: "We confirm the location, service type and an appropriate appointment window.",
  },
  {
    title: "Diagnose & explain",
    text: "We inspect the issue and explain what we find before recommending a solution.",
  },
  {
    title: "Approve the work",
    text: "You approve the plan before repair or installation work begins.",
  },
  {
    title: "Repair & final check",
    text: "We complete the work, test the system and make sure everything is operating properly.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "Plumber",
  name: "Skyline Flow Toronto Plumbing",
  description:
    "Residential, renovation and condo plumbing services throughout Toronto and the GTA.",
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
  areaServed: [
    {
      "@type": "City",
      name: "Toronto",
    },
    {
      "@type": "AdministrativeArea",
      name: "Greater Toronto Area",
    },
  ],
  serviceType: [
    "Residential plumbing",
    "Renovation plumbing",
    "Washroom renovation",
    "Condo plumbing",
    "Drain cleaning",
    "Camera inspection",
    "Leak diagnostics",
    "Sump pumps",
  ],
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
          <a href="#washroom-renovation">Washrooms</a>
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#request-service">Request</a>
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
            <p className="eyebrow">Professional plumbing services - Toronto & GTA</p>
            <h1 id="hero-title">Residential Plumbing & Renovation Services</h1>
            <p className="hero-copy">
              Professional plumbing for homes, condos and renovation projects
              throughout Toronto and the GTA. From everyday repairs to fixture
              installations, bathroom renovations, drain problems, sump pumps
              and complex diagnostics, Skyline Flow focuses on finding the
              right solution and doing the job properly.
            </p>
            <div className="hero-actions" aria-label="Primary contact actions">
              <a className="button button-primary" href="#request-service">
                Request service
              </a>
              <a className="button button-secondary" href={primaryPhone.href}>
                Call now
              </a>
            </div>
            <p className="hero-note">
              Residential plumbing - Renovations - Condo plumbing
            </p>
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
          <div className="quick-contact-item">
            <span>Service area</span>
            {serviceArea}
          </div>
          <a
            href="https://www.instagram.com/skylineflowtoronto/"
            target="_blank"
            rel="noreferrer"
          >
            <span>Instagram</span>
            @skylineflowtoronto
          </a>
        </section>

        <section className="trust-band" aria-label="Skyline Flow strengths">
          {trustItems.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </section>

        <section className="section service-section" id="services">
          <div className="section-heading reveal">
            <p className="eyebrow">Plumbing services</p>
            <h2>Residential and renovation plumbing with practical diagnosis.</h2>
            <p>
              From small repairs to renovation rough-ins and condo service
              calls, each job starts with understanding the problem and choosing
              the right way to solve it.
            </p>
          </div>

          <div className="service-detail-grid">
            {serviceSections.map((service, index) => (
              <article
                className={`service-detail-card reveal ${
                  service.featured ? "service-detail-card-wide" : ""
                }`}
                id={index === 1 ? "renovations" : undefined}
                key={service.title}
                style={{ "--delay": `${index * 55}ms` } as CSSProperties}
              >
                <span className="card-kicker">{service.kicker}</span>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <ul>
                  {service.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <a className="text-link" href="#request-service">
                  {service.cta}
                </a>
              </article>
            ))}
          </div>
        </section>

        <section
          className="section washroom-section"
          id="washroom-renovation"
        >
          <div className="section-heading reveal">
            <p className="eyebrow">Washroom renovation</p>
            <h2>Washroom renovation plumbing with a clean finish.</h2>
            <p>
              Rough-ins, fixture relocation, drain and water line changes, and
              finish plumbing planned around the renovation sequence.
            </p>
          </div>

          <WorkGallery photos={washroomPhotos} />
        </section>

        <section className="section work-section" id="work">
          <div className="section-heading reveal">
            <p className="eyebrow">Real work. Real experience.</p>
            <h2>See the work behind the walls.</h2>
            <p>
              Project photos show actual plumbing work completed by the Skyline
              Flow team throughout the GTA.
            </p>
          </div>

          <WorkGallery photos={workPhotos} />
        </section>

        <section className="about-band" id="about">
          <div className="about-media reveal">
            <Image
              src="/2.jpeg"
              alt="Clean copper plumbing work by Skyline Flow"
              width={760}
              height={900}
              sizes="(max-width: 980px) 100vw, 42vw"
            />
          </div>
          <div className="about-copy reveal">
            <p className="eyebrow">About Skyline Flow</p>
            <h2>Plumbing experience you can rely on.</h2>
            <p>
              Skyline Flow is a Toronto-based plumbing company providing
              residential, condominium and renovation plumbing services
              throughout Toronto and the GTA.
            </p>
            <p>
              Our hands-on experience ranges from everyday residential repairs
              and renovations to complex plumbing systems found in high-rise
              buildings. That experience has taught us an important lesson:
              good plumbing starts with understanding the problem.
            </p>
            <div className="brand-message">
              <span>Core message</span>
              Diagnose properly. Do clean work. Communicate clearly.
            </div>
          </div>
        </section>

        <section className="section why-section">
          <div className="section-heading reveal">
            <p className="eyebrow">Why choose Skyline Flow?</p>
            <h2>Professional plumbing without the guesswork.</h2>
          </div>

          <div className="why-grid">
            {whyItems.map((item, index) => (
              <article
                className="why-item reveal"
                key={item.title}
                style={{ "--delay": `${index * 55}ms` } as CSSProperties}
              >
                <span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="process-band" id="process">
          <div className="process-copy reveal">
            <p className="eyebrow">How it works</p>
            <h2>Simple, clear plumbing service.</h2>
          </div>
          <ol className="process-list">
            {processSteps.map((step, index) => (
              <li
                className="reveal"
                key={step.title}
                style={{ "--delay": `${index * 70}ms` } as CSSProperties}
              >
                <span>{index + 1}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="area-band">
          <div className="area-copy reveal">
            <p className="eyebrow">Serving Toronto & the GTA</p>
            <h2>Residential and renovation plumbing across the service area.</h2>
            <p>
              Skyline Flow provides residential and renovation plumbing across
              Toronto and surrounding GTA communities. Not sure if you are
              within range? Give us a call and we will be happy to let you know.
            </p>
          </div>
          <a className="button button-primary" href={primaryPhone.href}>
            Call Skyline Flow
          </a>
        </section>

        <section className="section request-section" id="request-service">
          <div className="contact-copy reveal">
            <p className="eyebrow">Need a plumber?</p>
            <h2>Tell us what is happening.</h2>
            <p>
              Whether it is a leaking faucet, toilet replacement, bathroom
              renovation, drain problem, sump pump or a difficult issue that
              needs proper diagnosis, send a few details and we will follow up.
            </p>
            <div className="contact-methods">
              <a href={primaryPhone.href}>
                <span>{primaryPhone.label}</span>
                {primaryPhone.display}
              </a>
              <a href={secondaryPhone.href}>
                <span>{secondaryPhone.label}</span>
                {secondaryPhone.display}
              </a>
              <a
                href="https://www.facebook.com/share/19Ubgd1d2r/?mibextid=wwXIfr"
                target="_blank"
                rel="noreferrer"
              >
                <span>Facebook</span>
                Skyline Flow Toronto
              </a>
            </div>
          </div>

          <RequestServiceForm
            phoneDisplay={primaryPhone.display}
            phoneHref={primaryPhone.href}
          />
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
