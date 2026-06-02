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
    "Real Colquitt Concrete project gallery with driveway, slab, pool deck, patio, walkway, stamped concrete, demolition, and site prep photos.",
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
        "Real Colquitt Concrete project gallery with concrete driveway, slab, pool deck, patio, walkway, stamped concrete, demolition, and site prep photos.",
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
      name: "Concrete projects",
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
            {serviceAreaName} concrete work
          </p>
          <h1>Recent concrete projects.</h1>
          <p className="heroCopy">
            Browse real driveways, slabs, pool decks, patios, walkways, and
            decorative concrete work completed with practical prep and clean
            finish details.
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
              Project gallery
            </p>
            <h2>A closer look at the work.</h2>
          </div>
          <p>
            These examples are built from the actual project photo library, with
            finished work and before-and-after views where available.
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
                  View project <ArrowRight size={15} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
