// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  css: ["~/assets/css/main.css"],
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
  },
  router: {
    options: {
      linkExactActiveClass: "active",
    },
  },
});
