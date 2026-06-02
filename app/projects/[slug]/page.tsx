import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Check, Camera, Search } from "lucide-react";
import { findProject, projectSeoPages } from "../../project-data";
import {
  businessLogo,
  businessName,
  contactEmail,
  contactPhone,
  contactPhoneInternational,
  serviceAreaName,
  serviceAreaRegion,
  siteUrl,
} from "../../seo";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

function getProjectEstimateHref(project: (typeof projectSeoPages)[number]) {
  const body = [
    `I am interested in a concrete project like this: ${project.title}`,
    `Project type: ${project.type}`,
    `Project example: ${siteUrl}${project.path}`,
    "",
    "Name:",
    "Phone or email:",
    "Project address:",
    "Approximate size:",
    "",
    "Details:",
  ].join("\n");

  return `mailto:${contactEmail}?subject=${encodeURIComponent(
    `Concrete estimate request - ${project.title}`
  )}&body=${encodeURIComponent(body)}`;
}

export function generateStaticParams() {
  return projectSeoPages.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = findProject(slug);

  if (!project) {
    return {};
  }

  return {
    title: {
      absolute: project.metaTitle,
    },
    description: project.metaDescription,
    keywords: project.keywordTargets,
    alternates: {
      canonical: project.path,
    },
    openGraph: {
      type: "article",
      url: project.path,
      siteName: businessName,
      title: project.metaTitle,
      description: project.metaDescription,
      phoneNumbers: [contactPhoneInternational],
      emails: [contactEmail],
      images: [
        {
          url: project.afterImage,
          alt: project.imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: project.metaTitle,
      description: project.metaDescription,
      images: [project.afterImage],
    },
    other: {
      "geo.region": serviceAreaRegion,
      "geo.placename": serviceAreaName,
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = findProject(slug);

  if (!project) {
    notFound();
  }

  const estimateHref = getProjectEstimateHref(project);
  const visibleImages = [...project.before.slice(0, 2), ...project.after.slice(0, 4)];
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${siteUrl}${project.path}#webpage`,
        name: project.metaTitle,
        url: `${siteUrl}${project.path}`,
        description: project.metaDescription,
        inLanguage: "en-US",
        isPartOf: {
          "@id": `${siteUrl}/#website`,
        },
        about: {
          "@id": `${siteUrl}/#business`,
        },
        primaryImageOfPage: {
          "@id": `${siteUrl}${project.path}#primaryimage`,
        },
      },
      {
        "@type": "CreativeWork",
        "@id": `${siteUrl}${project.path}#project`,
        name: project.title,
        headline: project.metaTitle,
        description: project.metaDescription,
        image: project.after.map((image) => `${siteUrl}${image}`),
        about: project.keywordTargets,
        creator: {
          "@id": `${siteUrl}/#business`,
        },
        provider: {
          "@id": `${siteUrl}/#business`,
        },
        areaServed: {
          "@type": "State",
          name: serviceAreaName,
        },
      },
      {
        "@type": "ImageObject",
        "@id": `${siteUrl}${project.path}#primaryimage`,
        url: `${siteUrl}${project.afterImage}`,
        contentUrl: `${siteUrl}${project.afterImage}`,
        caption: project.imageAlt,
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${siteUrl}${project.path}#breadcrumbs`,
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
          {
            "@type": "ListItem",
            position: 3,
            name: project.title,
            item: `${siteUrl}${project.path}`,
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
          <a href="/projects">Projects</a>
          <a href="/#contact">Contact</a>
        </div>
      </nav>

      <section className="projectDetailHero">
        <div className="projectHeroCopy">
          <a className="backLink" href="/projects">
            <ArrowLeft size={15} />
            All projects
          </a>
          <p className="eyebrow">
            <Camera size={15} />
            {project.type} project
          </p>
          <h1>{project.title}</h1>
          <p className="heroCopy">{project.summary}</p>
          <div className="heroActions">
            <a className="button primary" href={estimateHref}>
              Request project like this <ArrowRight size={17} />
            </a>
            <a className="button secondary" href={`tel:${contactPhone.replace(/\D/g, "")}`}>
              {contactPhone}
            </a>
          </div>
        </div>
        <img src={project.heroImage} alt={project.imageAlt} />
      </section>

      <section className="section projectDetailBody">
        <div className="sectionHeader">
          <div>
            <p className="eyebrow dark">
              <Search size={15} />
              Project proof
            </p>
            <h2>Actual photos tied to a crawlable project page.</h2>
          </div>
          <p>
            This page gives customers and search engines a concrete example of
            the work, with project-specific metadata and photo descriptions.
          </p>
        </div>

        <div className="projectProofGrid">
          <article className="listPanel">
            <h3>What this page proves</h3>
            <ul>
              <li>
                <Check size={16} />
                <span>Real {project.type.toLowerCase()} project photos.</span>
              </li>
              <li>
                <Check size={16} />
                <span>Unique project title, description, and canonical URL.</span>
              </li>
              <li>
                <Check size={16} />
                <span>Estimate email preloaded with this project type.</span>
              </li>
              <li>
                <Check size={16} />
                <span>Project schema, image schema, and breadcrumbs.</span>
              </li>
            </ul>
          </article>
          <article className="listPanel">
            <h3>Keyword targets</h3>
            <div className="keywordPills">
              {project.keywordTargets.map((keyword) => (
                <span key={keyword}>{keyword}</span>
              ))}
            </div>
          </article>
        </div>

        {project.beforeImage ? (
          <div className="projectBeforeAfter">
            <div>
              <h3>Before</h3>
              <img
                src={project.beforeImage}
                alt={`${project.title} before concrete work`}
                loading="lazy"
              />
            </div>
            <div>
              <h3>After</h3>
              <img
                src={project.afterImage}
                alt={`${project.title} after finished concrete work`}
                loading="lazy"
              />
            </div>
          </div>
        ) : null}

        <div className="projectPhotoGrid" aria-label={`${project.title} photos`}>
          {visibleImages.map((image, index) => (
            <img
              key={image}
              src={image}
              alt={`${project.title} project photo ${index + 1}`}
              loading="lazy"
            />
          ))}
        </div>
      </section>
    </main>
  );
}
