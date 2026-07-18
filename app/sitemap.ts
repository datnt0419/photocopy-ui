import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://xuanthanhphotocopy.com";

  const routes = [
    { url: "", lastModified: new Date(), changeFrequency: "daily" as const, priority: 1.0 },
    { url: "/services", lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.8 },
    { url: "/process", lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },
    { url: "/districts", lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.7 },
    { url: "/faq", lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.5 },
    { url: "/contact", lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route.url}`,
    lastModified: route.lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
