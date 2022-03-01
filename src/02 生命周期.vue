<template>
  <div class="container">根组件</div>
</template>

<script>
import { onBeforeMount, onMounted } from "vue";
export default {
  name: "App",
  setup() {
    // 1 DOM 渲染前钩子
    onBeforeMount(() => {
      console.log("onBeforeMount", document.querySelector(".container"));
    });
    // 2 DOM 渲染后钩子
    onMounted(() => {
      console.log("onMount", document.querySelector(".container"));
    });
    // return { onBeforeMount, onMounted };
  },
};
</script>

<style scoped lang="scss"></style>
