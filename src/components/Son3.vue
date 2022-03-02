<template>
  <div class="container">
    <h2>子组件 {{ modelValue }}</h2>
    <button @click="fn">改变数据</button>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "Son3",
  setup(props, ctx) {
    const fn = () => {
      ctx.emit("update:modelValue", 100);
    };
    return { fn };
  },
  props: {
    modelValue: {
      type: Number,
    },
  },
};
</script>

<style scoped lang="scss"></style>
