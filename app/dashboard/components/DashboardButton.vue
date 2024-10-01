<script setup lang="ts">
import { cva, type VariantProps } from 'class-variance-authority'

type ButtonProps = VariantProps<typeof button>
withDefaults(
  defineProps<{ type: ButtonProps['type'], size: ButtonProps['size'] }>(),
  {
    type: 'primary',
    size: 'medium',
  },
)

const button = cva('', {
  variants: {
    type: {
      primary: 'mb-2 me-2 rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800',
      tailwind: 'mb-2 me-2 rounded-lg bg-red-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-red-600 dark:hover:bg-blue-700 dark:focus:ring-red-800',
    },
    size: {
      small: 'mx-2',
      medium: 'mx-4',
    },
  },
  compoundVariants: [
    { type: 'primary', size: 'medium', class: 'primaryMedium' },
  ],
})
</script>

<template>
  <button :class="button({ type, size })">
    <slot />
  </button>
</template>
