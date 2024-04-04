import { createResolver } from "@nuxt/kit";
const { resolve } = createResolver(import.meta.url);

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    // "@nuxtjs/eslint-module", // https://github.com/nuxt-modules/eslint/issues/121
    "@nuxtjs/tailwindcss",
    "nuxt-headlessui",
    "@nuxtjs/color-mode",
    "@pinia/nuxt",
    // todo: feat/localization
    // '@nuxtjs/i18n'
    "@nuxt/content",
    "@nuxt/image",
  ],

  css: [
    resolve("./assets/scss/_variables.scss"),
    resolve("./assets/scss/app.scss"),
  ],

  components: [
    {
      prefix: "Layout",
      path: resolve("./components/layouts"),
      global: true,
    },
    {
      prefix: "Unquiet",
      path: resolve("./components/unquiet"),
      global: true,
    },
  ],
  // module::color-mode
  colorMode: {
    classSuffix: "",
  },

  image: {
    // Options
  },
  // module::content
  content: {
    markdown: {
      mdc: true,
      anchorLinks: false,
    },
    highlight: {
      theme: "github-dark",
    },
  },
});
