// .vitepress/theme/index.js
import DefaultTheme from 'vitepress/theme'
import VueDsfr from '@laruiss/vue-dsfr'

import '@laruiss/vue-dsfr/dist/vue-dsfr.css'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
      app.use(VueDsfr)
  }
}
