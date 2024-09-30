// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  /* Modules are automatically imported from the modules directory
    See: https://nuxt.com/docs/guide/directory-structure/modules
  */
 future: {
  compatibilityVersion: 4
 },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      meta: [
        {
          name: 'viewport',
          content:
            'viewport-fit=cover, width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no',
        },
      ],
    },
  },

  devtools: {
    enabled: true,
  },

  modules: ['@nuxtjs/tailwindcss', 'shadcn-nuxt'],

  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: '',
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: './app/base/components/ui'
  },

  compatibilityDate: '2024-09-30',
  extends: [
    'app/base',
    'app/dashboard',
    'app/orders',
    'app/product'
  ],
})