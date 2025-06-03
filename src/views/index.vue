<template>
  <div class="index">
    <Header />
    <div :class="['indexContent', router.currentRoute.value.name === 'home' && 'negative']">
      <router-view />
    </div>
    <Footer />
  </div>
</template>

<script setup>
/**
 *@index
*/
defineComponent({ name: "index" })
// props
const props = defineProps({})

const router = useRouter()
console.log(router, "router");


</script>

<style lang="scss" scoped>
.index {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #F7F9FC;

  .indexContent {
    width: 100%;
    flex: 1;
    background-color: #F7F9FC;
    overflow-y: auto;
    // margin-bottom: 22px;

    &.negative {
      margin-top: -20px;
    }
  }
}
</style>