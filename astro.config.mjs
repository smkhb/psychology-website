// @ts-check
import { defineConfig } from "astro/config";

import sanity from "@sanity/astro";
import react from "@astrojs/react";
import node from "@astrojs/node";

export default defineConfig({
  adapter: node({ mode: "standalone" }),
  integrations: [
    sanity({
      projectId: "",
      dataset: "",
      useCdn: false, // See note on using the CDN
      apiVersion: "2025-01-28", // insert the current date to access the latest version of the API
      studioBasePath: "/studio",
      stega: {
        studioUrl: "/studio",
      },
    }),
    react(),
  ],
  vite: {
    optimizeDeps: {
      include: [
        "react/compiler-runtime",
        "lodash/isObject.js",
        "lodash/groupBy.js",
        "lodash/keyBy.js",
        "lodash/partition.js",
        "lodash/sortedIndex.js",
      ],
    },
  },
});
