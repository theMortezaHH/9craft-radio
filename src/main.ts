import { createApp } from "vue"
import "./style.scss"
import App from "./App.vue"
import router from "@/router/routes.ts"
import PrimeVue from "primevue/config"
import "primeicons/primeicons.css"

import "primevue/resources/themes/aura-light-green/theme.css"

const app = createApp(App)
app.use(router)
app.use(PrimeVue)
app.mount("#app")
