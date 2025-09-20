    const { SitemapStream, streamToPromise } = require("sitemap");
const { createWriteStream } = require("fs");
const { router } = require("./src/App.jsx"); // استورد routes من React Router
const SITE_URL = "https://yourdomain.com";

async function generateSitemap() {
  const sitemap = new SitemapStream({ hostname: SITE_URL });

  // استخرج كل الـ routes (اللي فيها path بس)
  router.routes.forEach((route) => {
    if (route.path) {
      sitemap.write({
        url: route.path === "/" ? "/" : route.path,
        changefreq: "weekly",
        priority: route.path === "/" ? 1.0 : 0.8,
      });
    }
  });

  sitemap.end();

  const data = await streamToPromise(sitemap);

  // حفظ الملف جوه public
  createWriteStream("./public/sitemap.xml").write(data.toString());
}

generateSitemap();
