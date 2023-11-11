//import './assets/main.css'
import 'primevue/resources/themes/lara-light-blue/theme.css'
import 'primeicons/primeicons.css'
import '/node_modules/primeflex/primeflex.css'
import Tooltip from 'primevue/tooltip'
import Dialog from 'primevue/dialog'
import InputText from 'primevue/inputtext'
import FileUpload from 'primevue/fileupload'

import { createApp } from 'vue'
//import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config'
import Button from 'primevue/button'
import Menubar from 'primevue/menubar'

import App from './App.vue'
import router from './router'

const app = createApp(App)

//app.use(createPinia())
app.use(router)
app.use(PrimeVue)
app.component('Button', Button)
app.component('Menubar', Menubar)
app.component('Dialog', Dialog)
app.directive('tooltip', Tooltip)
app.component('InputText', InputText)
app.component('FileUpload', FileUpload)
app.mount('#app')
