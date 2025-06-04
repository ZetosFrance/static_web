<template>
  <div class="App">
    <a-config-provider :locale="locale">
      <router-view />
    </a-config-provider>
  </div>
</template>

<script setup>
import enUS from 'ant-design-vue/es/locale/en_US';
import frFR from 'ant-design-vue/es/locale/fr_FR';
/**
 *@App
*/
defineComponent({ name: "App" })

const locale = computed(() => {
  return localStorage.getItem("lang") === "en-US" ? enUS : frFR
})
</script>

<style lang="scss" scoped></style>