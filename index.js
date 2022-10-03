const SitemapGenerator = require("sitemap-generator");

// create generator
const generator = SitemapGenerator("https://easyfilmes.me", {
  stripQuerystring: false,
  filepath: "./sitemap.xml",
  lastMod: true,
  maxConcurrency: 10,
  changeFreq: "yearly",
});

// register event listeners
generator.on("add", (url) => {
  console.log(url);
});

generator.on("done", () => {
  console.log("Done!");
});

// start the crawler
generator.start();
