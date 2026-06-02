import type { MetadataRoute } from "next";
import { projectSeoPages } from "./project-data";
import { defaultOgImage, servicePages, siteUrl } from "./seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: siteUrl,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
      images: [
        `${siteUrl}${defaultOgImage}`,
        ...projectSeoPages.slice(0, 8).map((project) => `${siteUrl}${project.afterImage}`),
      ],
    },
    {
      url: `${siteUrl}/services`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
      images: servicePages.map((service) => `${siteUrl}${service.image}`),
    },
    {
      url: `${siteUrl}/projects`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.88,
      images: projectSeoPages.map((project) => `${siteUrl}${project.afterImage}`),
    },
    ...servicePages.map((service) => ({
      url: `${siteUrl}${service.path}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.86,
      images: [`${siteUrl}${service.image}`],
    })),
    ...projectSeoPages.map((project) => ({
      url: `${siteUrl}${project.path}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.78,
      images: project.photoMeta.map((photo) => `${siteUrl}${photo.src}`),
    })),
  ];
}
