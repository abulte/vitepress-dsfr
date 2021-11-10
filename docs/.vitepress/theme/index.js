// .vitepress/theme/index.js
import DefaultTheme from 'vitepress/theme'
import VueDsfr from '@laruiss/vue-dsfr'
import Layout from './Layout.vue'

import '@laruiss/vue-dsfr/dist/vue-dsfr.css'

export default {
  ...DefaultTheme,
  Layout,
  enhanceApp({ app }) {
      app.use(VueDsfr)
  }
}
