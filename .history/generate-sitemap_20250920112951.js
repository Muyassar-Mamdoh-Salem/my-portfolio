// generate-sitemap.js
import { createWriteStream } from "fs";
import { SitemapStream, streamToPromise } from "sitemap";

async function generateSitemap() {
  const sitemap = new SitemapStream({ hostname: "https://my-portfolio-7ves.vercel.app" });

  sitemap.write({ url: "/", changefreq: "daily", priority: 1.0 });
  sitemap.write({ url: "/projects", changefreq: "weekly", priority: 0.8 });
  sitemap.write({ url: "/contact", changefreq: "monthly", priority: 0.5 });

  sitemap.end();

  const data = await streamToPromise(sitemap);
  const writeStream = createWriteStream("./public/sitemap.xml");
  writeStream.write(data.toString());
}

generateSitemap();
