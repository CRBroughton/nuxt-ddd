import { defineNuxtModule } from '@nuxt/kit'
import { join } from 'path'
import type { Nuxt } from '@nuxt/schema'
import { createResolver } from 'nuxt/kit'

export default defineNuxtModule({
  meta: {
    // Usually the npm package name of your module - in this case a local modal
    name: 'product-module',
    // The key in `nuxt.config` that holds the
    configKey: 'product-module',
    // Compatibility constraints
    compatibility: {
      // Semver version of supported nuxt versions
      nuxt: '^3.9.0',
    },
  },
  async setup(options: any, nuxt: Nuxt) {
  const { resolve } = createResolver(import.meta.url)
    // Auto register components
    nuxt.hook('components:dirs', (dirs) => {
      dirs.push({
        path: join(__dirname, './components'),
      })
    })

    // Auto register composables
    nuxt.hook('imports:dirs', (dirs) => {
      dirs.push(resolve(__dirname, './composables'))
    })

    // Auto register pages
    nuxt.hook('pages:extend', (pages) => {
      pages.push({
        name: 'product',
        path: '/product',
        file: resolve(__dirname, './pages/product.vue'),
      })
    })

  },
})
