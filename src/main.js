import { createApp } from "vue"
import "./style.css"
import App from "./App.vue"
import router from "./router"
import pinia from "./store"
import i18n from "./utils/lang"
import * as ElementPlusIconsVue from "@element-plus/icons-vue"

import "@/router/premission"

const app = createApp(App)
app.use(router)
app.use(pinia)
app.use(i18n)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.mount("#app")
