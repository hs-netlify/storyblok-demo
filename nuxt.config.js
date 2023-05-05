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
  ssr: false,
  css: ['@/assets/css/fonts.css'],
  runtimeConfig: {
    public: {
      templateToken: process.env.STORYBLOK_TOKEN,
      customParent: process.env.STORYBLOK_CUSTOM_PARENT,
    },
  },
})
