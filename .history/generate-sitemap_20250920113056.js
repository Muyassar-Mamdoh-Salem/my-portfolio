// generate-sitemap.js
import { SitemapStream, streamToPromise } from "sitemap";
import { createWriteStream } from "fs";
import { resolve } from "path";

const links = [
  { url: "/", changefreq: "daily", priority: 1.0 },
  { url: "/projects", changefreq: "weekly", priority: 0.8 },
  { url: "/contact", changefreq: "monthly", priority: 0.5 },
];

async function generateSitemap() {
  const sitemap = new SitemapStream({ hostname: "https://my-portfolio-7ves.vercel.app" });

  links.forEach((link) => sitemap.write(link));
  sitemap.end();

  const sitemapData = await streamToPromise(sitemap);
  const path = resolve("dist", "sitemap.xml");

  const writeStream = createWriteStream(path);
  writeStream.write(sitemapData.toString());
  writeStream.end();

  console.log("✅ Sitemap generated at:", path);
}

generateSitemap().catch(console.error);
