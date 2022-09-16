import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import CoreuiVue from '@coreui/vue'
import CIcon from '@coreui/icons-vue'
import { iconsSet as icons } from '@/assets/icons'
import DocsCallout from '@/components/DocsCallout'
import DocsExample from '@/components/DocsExample'
// import GAuth from 'vue3-google-oauth2'
//
// const gAuthOption = {
//   clientId:
//     '991236955760-mr048renbcsorqpqqkjm1q19i6lblano.apps.googleusercontent.com',
// }

const app = createApp(App)
// app.use(GAuth, gAuthOption)
app.use(store)
app.use(router)
app.use(CoreuiVue)
app.provide('icons', icons)
app.component('CIcon', CIcon)
app.component('DocsCallout', DocsCallout)
app.component('DocsExample', DocsExample)

app.mount('#app')
