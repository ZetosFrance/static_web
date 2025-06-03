import { createRouter, createWebHistory } from "vue-router"
import routes from "./router"
// 路由
const router = createRouter({
  history: createWebHistory(),
  routes,
})
// 导出
export default router
