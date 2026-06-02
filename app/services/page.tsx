import type { Metadata } from "next";
import { ArrowRight, MapPin, Sparkles } from "lucide-react";
import {
  businessLogo,
  businessName,
  contactPhone,
  serviceAreaName,
  servicePages,
  siteDescription,
  siteUrl,
} from "../seo";

export const metadata: Metadata = {
  title: "Georgia Concrete Services",
  description:
    "Concrete service pages for driveways, slabs, patios, walkways, pool decks, stamped concrete, demolition, grading, and site prep in Georgia.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    type: "website",
    url: "/services",
    title: `Georgia Concrete Services | ${businessName}`,
    description: siteDescription,
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": `${siteUrl}/services#webpage`,
      name: `Georgia Concrete Services | ${businessName}`,
      url: `${siteUrl}/services`,
      description:
        "Concrete service pages for driveways, slabs, patios, walkways, pool decks, stamped concrete, demolition, grading, and site prep in Georgia.",
      inLanguage: "en-US",
      about: {
        "@id": `${siteUrl}/#business`,
      },
      mainEntity: {
        "@id": `${siteUrl}/services#service-list`,
      },
    },
    {
      "@type": "ItemList",
      "@id": `${siteUrl}/services#service-list`,
      name: "Georgia concrete service pages",
      itemListElement: servicePages.map((service, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: `${siteUrl}${service.path}`,
        name: service.title,
      })),
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${siteUrl}/services#breadcrumbs`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: siteUrl,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Services",
          item: `${siteUrl}/services`,
        },
      ],
    },
  ],
};

export default function ServicesPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />
      <nav className="nav" aria-label="Main navigation">
        <a className="brand" href="/" aria-label="Colquitt Concrete home">
          <span className="brandMark" aria-hidden="true">
            <img src={businessLogo} alt="" />
          </span>
          <span>
            Colquitt Concrete
            <small>Outdoor Solutions</small>
          </span>
        </a>
        <div className="navLinks">
          <a href="/#services">Services</a>
          <a href="/#work">Work</a>
          <a href="/#contact">Contact</a>
        </div>
      </nav>

      <section className="servicePageHero">
        <div>
          <p className="eyebrow">
            <MapPin size={15} />
            {serviceAreaName} organic service pages
          </p>
          <h1>Concrete services built into search-friendly pages.</h1>
          <p className="heroCopy">
            Each service has its own clear URL, page title, description,
            keyword targets, structured data, and estimate path.
          </p>
          <div className="heroActions">
            <a className="button primary" href="/#contact">
              Request an estimate <ArrowRight size={17} />
            </a>
            <a className="button secondary" href={`tel:${contactPhone.replace(/\D/g, "")}`}>
              {contactPhone}
            </a>
          </div>
        </div>
      </section>

      <section className="section serviceDirectory">
        <div className="sectionHeader">
          <div>
            <p className="eyebrow dark">
              <Sparkles size={15} />
              Organic SEO targets
            </p>
            <h2>Dedicated pages for the work customers search for.</h2>
          </div>
          <p>
            These pages are designed to help Google understand the business by
            actual service category instead of relying on one generic homepage.
          </p>
        </div>
        <div className="servicePageGrid">
          {servicePages.map((service) => (
            <article className="serviceCard" key={service.slug}>
              <img src={service.image} alt={service.imageAlt} loading="lazy" />
              <div>
                <h3>{service.cardTitle}</h3>
                <p>{service.summary}</p>
                <a className="button serviceLink" href={service.path}>
                  Open service page <ArrowRight size={15} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
