<template>
  <div class="container">
    <p>鼠标坐标</p>
    <p>X:{{ point.x }}</p>
    <p>Y:{{ point.y }}</p>
    <hr />
    <p>累加:{{ count }}</p>
    <button @click="add">Add</button>
  </div>
</template>

<script>
import { onMounted, reactive, ref } from "vue";

export default {
  name: "App",
  setup() {
    // 累加功能
    const count = ref(0);
    const add = () => {
      count.value++;
    };

    // 鼠标坐标
    const point = reactive({
      x: 0,
      y: 0,
    });
    const move = (e) => {
      (point.x = e.pageX), (point.y = e.pageY);
    };
    onMounted(() => {
      document.addEventListener("mousemove", move);
    });
    return { count, add, point };
  },
};
</script>

<style scoped lang="scss"></style>
