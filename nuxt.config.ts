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
      ['@storyblok/nuxt', { accessToken: process.env.STORYBLOK_ACCESS_TOKEN }]
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
  })


