import router from "./index"
import { useUserStore } from "@/store/modules/user"

router.beforeEach((to, from, next) => {
  const store = useUserStore()
  if (to.path === "/" || to.path === "/login") {
    next()
  } else {
    store.isLogin ? next() : next("/login")
  }
})
