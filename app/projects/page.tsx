import type { Metadata } from "next";
import { ArrowRight, Camera, MapPin } from "lucide-react";
import { projectSeoPages } from "../project-data";
import {
  businessLogo,
  businessName,
  contactPhone,
  serviceAreaName,
  siteDescription,
  siteUrl,
} from "../seo";

export const metadata: Metadata = {
  title: {
    absolute: `Georgia Concrete Project Gallery | ${businessName}`,
  },
  description:
    "Real Colquitt Concrete project pages with driveway, slab, pool deck, patio, walkway, stamped concrete, demolition, and site prep photos.",
  alternates: {
    canonical: "/projects",
  },
  openGraph: {
    type: "website",
    url: "/projects",
    title: `Georgia Concrete Project Gallery | ${businessName}`,
    description: siteDescription,
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": `${siteUrl}/projects#webpage`,
      name: `Georgia Concrete Project Gallery | ${businessName}`,
      url: `${siteUrl}/projects`,
      description:
        "Real Colquitt Concrete project pages with concrete driveway, slab, pool deck, patio, walkway, stamped concrete, demolition, and site prep photos.",
      inLanguage: "en-US",
      about: {
        "@id": `${siteUrl}/#business`,
      },
      mainEntity: {
        "@id": `${siteUrl}/projects#project-list`,
      },
    },
    {
      "@type": "ItemList",
      "@id": `${siteUrl}/projects#project-list`,
      name: "Concrete project pages",
      itemListElement: projectSeoPages.map((project, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: `${siteUrl}${project.path}`,
        name: project.title,
      })),
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${siteUrl}/projects#breadcrumbs`,
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
          name: "Projects",
          item: `${siteUrl}/projects`,
        },
      ],
    },
  ],
};

export default function ProjectsPage() {
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
          <a href="/projects">Projects</a>
          <a href="/#contact">Contact</a>
        </div>
      </nav>

      <section className="projectPageHero">
        <div>
          <p className="eyebrow">
            <Camera size={15} />
            {serviceAreaName} concrete project pages
          </p>
          <h1>Real project pages for real concrete work.</h1>
          <p className="heroCopy">
            Every project page gives customers and search engines a clearer look
            at the work: the surface type, before/after photos, project proof,
            and an estimate path.
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

      <section className="section projectDirectory">
        <div className="sectionHeader">
          <div>
            <p className="eyebrow dark">
              <MapPin size={15} />
              Project SEO layer
            </p>
            <h2>One crawlable page per concrete job type.</h2>
          </div>
          <p>
            These are not fake landing pages. They are real project pages built
            from the actual before and after photo library.
          </p>
        </div>
        <div className="projectDirectoryGrid">
          {projectSeoPages.map((project) => (
            <article className="projectTile" key={project.slug}>
              <img
                src={project.afterImage}
                alt={project.imageAlt}
                title={project.photoMeta.find((photo) => photo.src === project.afterImage)?.title}
                loading="lazy"
              />
              <div>
                <span>{project.type}</span>
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
                <a className="button serviceLink" href={project.path}>
                  Open project page <ArrowRight size={15} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
