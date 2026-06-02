import projectData from "../public/media/projects/projects.json";

export type PhotoProject = {
  slug: string;
  title: string;
  type: string;
  before: string[];
  after: string[];
};

export type ProjectSeo = PhotoProject & {
  path: string;
  heroImage: string;
  beforeImage?: string;
  afterImage: string;
  metaTitle: string;
  metaDescription: string;
  imageAlt: string;
  summary: string;
  keywordTargets: string[];
};

const concreteTypeKeywords: Record<string, string[]> = {
  "Decorative concrete": [
    "stamped concrete Georgia",
    "decorative concrete GA",
    "patterned concrete finish",
  ],
  "Pool deck": [
    "pool deck concrete Georgia",
    "pool deck extension",
    "concrete around pool",
  ],
  "Driveway and pad": [
    "concrete driveway Georgia",
    "parking pad concrete",
    "large concrete slab",
  ],
  Driveway: [
    "concrete driveway Georgia",
    "driveway extension",
    "driveway concrete contractor",
  ],
  Walkway: [
    "concrete walkway Georgia",
    "curved concrete walkway",
    "sidewalk concrete Georgia",
  ],
  "Shop slab": [
    "shop apron slab",
    "concrete slab Georgia",
    "garage slab concrete",
  ],
  "Pad replacement": [
    "concrete pad replacement",
    "basement pad concrete",
    "concrete slab replacement",
  ],
  "Patio and walkway": [
    "patio concrete Georgia",
    "walkway concrete GA",
    "rear patio concrete",
  ],
};

export const photoProjects = projectData as PhotoProject[];

export const projectSeoPages: ProjectSeo[] = photoProjects.map((project) => {
  const afterImage = project.after[0] ?? project.before[0];
  const beforeImage = project.before[0];
  const readableType = project.type.toLowerCase();

  return {
    ...project,
    path: `/projects/${project.slug}`,
    heroImage: afterImage,
    beforeImage,
    afterImage,
    metaTitle: `${project.title} | Georgia Concrete Project`,
    metaDescription: `View the ${project.title.toLowerCase()} ${readableType} project by Colquitt Concrete, with real ${beforeImage ? "before and after" : "finished"} concrete photos and an estimate request path.`,
    imageAlt: `${project.title} ${readableType} concrete project completed by Colquitt Concrete in Georgia`,
    summary: `A real ${readableType} project showing the concrete surface, prep, finish, and outdoor layout work customers can request from Colquitt Concrete.`,
    keywordTargets: [
      project.title.toLowerCase(),
      `${readableType} concrete project`,
      `${readableType} concrete Georgia`,
      ...(concreteTypeKeywords[project.type] ?? ["concrete contractor Georgia"]),
    ],
  };
});

export function findProject(slug: string) {
  return projectSeoPages.find((project) => project.slug === slug);
}
