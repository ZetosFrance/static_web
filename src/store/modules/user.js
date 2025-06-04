import { defineStore } from "pinia"

export const useUserStore = defineStore("user", {
  state: () => ({
    isLogin: false,
  }),
  actions: {
    setIsLogin(isLogin) {
      this.isLogin = isLogin
    },
  },
  persist: {
    enabled: true,
  },
})
