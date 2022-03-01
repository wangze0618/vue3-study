<template>
  <div class="container">
    <div>今年：{{ age }}岁</div>
    <div>后年：{{ newAge }}岁</div>
    <input v-model.number="newAge" type="text" />
  </div>
</template>

<script>
import { ref, computed } from "vue";
export default {
  name: "App",
  setup() {
    let age = ref(0);
    // 1. 计算属性：当需要依赖现有的响应式数据，根据一定的逻辑得到一个新的数据
    // const newAge = computed(() => {
    //   // 该函数的返回值就是计算属性的值
    //   return age.value + 2;
    // });
    const newAge = computed({
      // get()函数，获取计算属性的值
      get() {
        return age.value + 2;
      },
      // set()函数，当你给计算属性设置值的时候触发
      set(value) {
        age.value = value - 2;
      },
    });
    return { newAge, age };
  },
};
</script>

<style scoped lang="scss"></style>
