import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Check, MapPin, Search } from "lucide-react";
import {
  businessLogo,
  businessName,
  contactEmail,
  contactPhone,
  contactPhoneInternational,
  serviceAreaName,
  serviceAreaRegion,
  servicePages,
  siteUrl,
} from "../../seo";

type ServicePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

function findService(slug: string) {
  return servicePages.find((service) => service.slug === slug);
}

function getEstimateHref(service: (typeof servicePages)[number]) {
  const body = [
    `I am interested in: ${service.title}`,
    `Service type: ${service.serviceType}`,
    `Service area: ${serviceAreaName}`,
    "",
    "Name:",
    "Phone or email:",
    "Project address:",
    "Approximate size:",
    "",
    "Details:",
  ].join("\n");

  return `mailto:${contactEmail}?subject=${encodeURIComponent(
    service.requestSubject
  )}&body=${encodeURIComponent(body)}`;
}

export function generateStaticParams() {
  return servicePages.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = findService(slug);

  if (!service) {
    return {};
  }

  return {
    title: {
      absolute: service.metaTitle,
    },
    description: service.metaDescription,
    keywords: service.keywordTargets,
    alternates: {
      canonical: service.path,
    },
    openGraph: {
      type: "website",
      url: service.path,
      siteName: businessName,
      title: service.metaTitle,
      description: service.metaDescription,
      phoneNumbers: [contactPhoneInternational],
      emails: [contactEmail],
      images: [
        {
          url: service.image,
          alt: service.imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: service.metaTitle,
      description: service.metaDescription,
      images: [service.image],
    },
    other: {
      "geo.region": serviceAreaRegion,
      "geo.placename": serviceAreaName,
    },
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = findService(slug);

  if (!service) {
    notFound();
  }

  const estimateHref = getEstimateHref(service);
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${siteUrl}${service.path}#webpage`,
        name: service.metaTitle,
        url: `${siteUrl}${service.path}`,
        description: service.metaDescription,
        inLanguage: "en-US",
        isPartOf: {
          "@id": `${siteUrl}/#website`,
        },
        about: {
          "@id": `${siteUrl}/#business`,
        },
        primaryImageOfPage: {
          "@id": `${siteUrl}${service.path}#primaryimage`,
        },
        mainEntity: {
          "@id": `${siteUrl}${service.path}#service`,
        },
      },
      {
        "@type": "Service",
        "@id": `${siteUrl}${service.path}#service`,
        name: service.title,
        serviceType: service.serviceType,
        description: service.metaDescription,
        provider: {
          "@id": `${siteUrl}/#business`,
        },
        areaServed: {
          "@type": "State",
          name: serviceAreaName,
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: `${service.cardTitle} estimate options`,
          itemListElement: [
            {
              "@type": "Offer",
              name: service.requestSubject,
              url: `${siteUrl}${service.path}`,
              priceCurrency: "USD",
              availability: "https://schema.org/InStock",
              itemOffered: {
                "@type": "Service",
                name: service.title,
              },
            },
          ],
        },
      },
      {
        "@type": "ImageObject",
        "@id": `${siteUrl}${service.path}#primaryimage`,
        url: `${siteUrl}${service.image}`,
        contentUrl: `${siteUrl}${service.image}`,
        caption: service.imageAlt,
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${siteUrl}${service.path}#breadcrumbs`,
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
          {
            "@type": "ListItem",
            position: 3,
            name: service.cardTitle,
            item: `${siteUrl}${service.path}`,
          },
        ],
      },
    ],
  };

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

      <section className="serviceDetailHero">
        <div className="serviceHeroCopy">
          <a className="backLink" href="/services">
            <ArrowLeft size={15} />
            All services
          </a>
          <p className="eyebrow">
            <MapPin size={15} />
            {serviceAreaName} concrete service
          </p>
          <h1>{service.title}</h1>
          <p className="heroCopy">{service.intro}</p>
          <div className="heroActions">
            <a className="button primary" href={estimateHref}>
              Request this service <ArrowRight size={17} />
            </a>
            <a className="button secondary" href={`tel:${contactPhone.replace(/\D/g, "")}`}>
              {contactPhone}
            </a>
          </div>
        </div>
        <img src={service.image} alt={service.imageAlt} />
      </section>

      <section className="section serviceSeoProof">
        <div className="sectionHeader">
          <div>
            <p className="eyebrow dark">
              <Search size={15} />
              Organic search signals
            </p>
            <h2>What this page tells Google and customers.</h2>
          </div>
          <p>
            The page title, meta description, visible content, image alt text,
            structured data, and estimate subject all match this service.
          </p>
        </div>

        <div className="serviceDetailGrid">
          <article className="listPanel">
            <h3>Work covered</h3>
            <ul>
              {service.proofPoints.map((point) => (
                <li key={point}>
                  <Check size={16} />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="listPanel">
            <h3>Keyword targets</h3>
            <div className="keywordPills">
              {service.keywordTargets.map((keyword) => (
                <span key={keyword}>{keyword}</span>
              ))}
            </div>
          </article>

          <article className="listPanel">
            <h3>Customer searches this helps answer</h3>
            <ul>
              {service.customerSearches.map((search) => (
                <li key={search}>
                  <Check size={16} />
                  <span>{search}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>
    </main>
  );
}
