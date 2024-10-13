import remarkGfm from "remark-gfm";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  css: ["~/assets/css/main.postcss"],
  app: { baseURL: "/" },
  ssr: false,
  modules: [
    "@nuxt/content",
    "@nuxt/icon",
    "@nuxt/image",
    "@nuxt/ui",
    "@nuxtjs/color-mode",
    "@nuxtjs/tailwindcss",
  ],
  content: {
    documentDriven: false,
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
  ui: {},
});
