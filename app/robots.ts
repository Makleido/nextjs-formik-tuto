import { MetadataRoute } from "next";
import { BASE_URL } from "./constants/config";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      disallow: "/",
    },
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
