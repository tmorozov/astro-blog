import rss, { pagesGlobToRssItems, type RSSOptions } from "@astrojs/rss";

export async function GET(context: { site: any }) {
  const options: RSSOptions = {
    title: "Astro Learner | Blog",
    description: "My journey learning Astro",
    site: context.site,
    items: await pagesGlobToRssItems(import.meta.glob("./**/*.md")),
    customData: `<language>en-us</language>`,
  };

  return rss(options);
}
