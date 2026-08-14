import type { MetadataRoute } from "next";
import { SERVICES } from "@/lib/services";

const BASE_URL = "https://heracorp.com.br";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/sobre", "/servicos", "/contato"];
  const serviceRoutes = SERVICES.map((s) => `/servicos/${s.slug}`);

  return [...routes, ...serviceRoutes].map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : route.startsWith("/servicos/") ? 0.7 : 0.8,
  }));
}
