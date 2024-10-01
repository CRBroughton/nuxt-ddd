import type { StorybookConfig } from "@storybook-vue/nuxt";
import { mergeConfig } from 'vite';

const config: StorybookConfig = {
  stories: [
    "../app/**/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook-vue/nuxt",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  async viteFinal(config) {
    return mergeConfig(config, {
     optimizeDeps: {
       include: ['jsdoc-type-pratt-parser'],
     }
   });
 }
};
export default config;
