// @ts-check

import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import { defineConfig } from 'astro/config'

export default defineConfig({
  site: 'https://chadgauth.github.io',
  base: '/ai-coengineer-guide',
  integrations: [mdx(), sitemap()],
})
