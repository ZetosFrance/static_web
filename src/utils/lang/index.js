import { lang } from "./lang"
import { createI18n } from "vue-i18n"

const messages = {
  "fr-FR": lang["fr-FR"],
  "en-US": lang["en-US"],
}

const i18n = createI18n({
  globalInjection: true,
  locale: localStorage.getItem("lang") || "fr-FR",
  fallbackLocale: "en-US",
  messages,
})

export default i18n
