export default defineNuxtConfig({
  modules: [
    [
      '@storyblok/nuxt',
      {
        accessToken: process.env.STORYBLOK_TOKEN,
        // usePlugin: false,
      },
    ],
    '@nuxtjs/tailwindcss',
  ],
  css: ['@/assets/css/fonts.css'],
  // ssr: true,
  // nitro: {
  //   prerender: {
  //     crawlLinks: true,
  //   },
  // },
  runtimeConfig: {
    public: {
      templateToken: process.env.STORYBLOK_TOKEN,
      customParent: process.env.STORYBLOK_CUSTOM_PARENT,
    },
  },
})
