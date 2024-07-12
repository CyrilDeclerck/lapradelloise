// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,

  typescript: {
    shim: false
  },

  build: {
    //   extractCSS: false,
      transpile: ["vuetify"],
    },

  modules: [
    '@pinia/nuxt',
  ],

  vite: {
    define: {
      "process.env.DEBUG": false,
    },
  },

  nitro: {
    serveStatic: true,
  },

  devServerHandlers: [],

  hooks: {
  },

  compatibilityDate: "2024-07-12"
})