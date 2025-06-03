<template>
  <div class="App">
    <el-config-provider :locale="locale">
      <router-view />
    </el-config-provider>
  </div>
</template>

<script setup>
import { ElConfigProvider } from "element-plus"
import frFR from "element-plus/es/locale/lang/fr"
import enUS from "element-plus/es/locale/lang/en"
/**
 *@App
*/
defineComponent({ name: "App" })

const locale = computed(() => {
  return localStorage.getItem("lang") === "en-US" ? enUS : frFR
})
</script>

<style lang="scss" scoped></style>