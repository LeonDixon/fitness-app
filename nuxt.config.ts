// https://Nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    'nuxt-module-eslint-config',
    '@nuxtjs/supabase',
    '@nuxtjs/tailwindcss'
  ],
  app: {
    head: {
      script: [
        { src: 'https://accounts.google.com/gsi/client', async: true }
      ],
      meta: [
        { name: 'google-signin-client_id', content: '228434616456-ouefvqnatgf3nk72jgrjhtm2n1q2dfcu.apps.googleusercontent.com' }
      ]
    }
  },
  supabase: {
    redirectOptions: {
      login: '/login',
      callback: '/confirm',
      exclude: ['/register']
    }
  }
})
