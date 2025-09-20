
    const { SitemapStream, streamToPromise } = require("sitemap");
    const { createWriteStream } = require("fs");
    const routes = require("./src/routes.js");
    const SITE_URL = "https://my-portfolio-7ves.vercel.app";

    async function generateSitemap() {
      const sitemap = new SitemapStream({ hostname: SITE_URL });

      routes.forEach((route) => {
        if (route.path) {
          sitemap.write({
            url: route.path,
            changefreq: "weekly",
            priority: route.path === "/" ? 1.0 : 0.8,
          });
        }
      });

      sitemap.end();

      const data = await streamToPromise(sitemap);
      createWriteStream("./public/sitemap.xml").write(data.toString());
    }

    generateSitemap();
