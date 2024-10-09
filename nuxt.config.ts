import remarkGfm from "remark-gfm";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  css: ["~/assets/css/main.postcss"],
  devtools: { enabled: true },
  modules: [
    "nuxt-lucide-icons",
    "@nuxt/content",
    "@nuxt/ui",
    "@nuxt/icon",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/color-mode",
  ],
  content: {
    documentDriven: true,
    markdown: {
      remarkPlugins: { "remark-gfm": remarkGfm },
      rehypePlugins: [],
    },
  },
  router: {
    options: {
      linkExactActiveClass: "active",
    },
  },
});
