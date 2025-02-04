import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import CoreuiVue from '@coreui/vue'
import CIcon from '@coreui/icons-vue'
import { iconsSet as icons } from '@/assets/icons'
import DocsCallout from '@/components/DocsCallout'
import DocsExample from '@/components/DocsExample'
import GAuth from 'vue3-google-login'

const gAuthOption = {
  clientId:
    '991587744543-s1ng0b8r4pm7hfu25bhhc4p8hu1ljs29.apps.googleusercontent.com',
}

const app = createApp(App)
app.use(GAuth, gAuthOption)
app.use(store)
app.use(router)
app.use(CoreuiVue)
app.provide('icons', icons)
app.component('CIcon', CIcon)
app.component('DocsCallout', DocsCallout)
app.component('DocsExample', DocsExample)

app.mount('#app')
