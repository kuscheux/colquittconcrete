import type { MetadataRoute } from "next";
import { projectSeoPages } from "./project-data";
import { servicePages, siteUrl } from "./seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: siteUrl,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${siteUrl}/services`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/projects`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.88,
    },
    ...servicePages.map((service) => ({
      url: `${siteUrl}${service.path}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.86,
    })),
    ...projectSeoPages.map((project) => ({
      url: `${siteUrl}${project.path}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.78,
    })),
  ];
}
