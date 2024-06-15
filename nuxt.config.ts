import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  css: [
    "bootstrap/dist/css/bootstrap.min.css",
    "@/assets/scss/style.scss"
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/scss/_variables.scss";'
        },
      },
    },
  },
  plugins: ["@/plugins/aos"],
  modules: ['@nuxt/content'],
})
