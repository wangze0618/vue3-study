<template>
  <div class="container">
    <h1 @click="$event.target.style.color = 'red'">父组件 {{ count }}</h1>
    <hr />
    <!-- <Son3 :modelValue="count" @update:modelValue="count = $event"></Son3> -->
    <Son3 v-model:modelValue="count"></Son3>
  </div>
</template>

<script>
import { ref } from "vue";
import Son3 from "./components/Son3.vue";
export default {
  name: "App",
  setup() {
    const count = ref(10);
    return { count };
  },
  components: { Son3 },
};
</script>

<style scoped lang="scss">
hr {
  border: 1px solid black;
}
</style>
