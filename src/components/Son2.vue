<template>
  <div class="container">
    <h2>子组件 {{ money }}</h2>
    <hr />
    <GrandSon></GrandSon>
  </div>
</template>

<script>
import { inject, ref } from "vue";
import GrandSon from "./GrandSon.vue";
export default {
  name: "Son2",
  setup(props, context) {
    // 接受祖先组件提供的数据
    const money = inject("money");

    return { money };
  },
  components: { GrandSon },
};
</script>

<style scoped lang="scss"></style>
