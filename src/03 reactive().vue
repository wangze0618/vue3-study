<template>
  <div class="container">
    <p>{{ obj.name }}</p>
    <p>{{ obj.age }}</p>
    <button @click="updateName">修改数据</button>
  </div>
</template>

<script>
import { reactive } from "vue";
export default {
  name: "App",
  setup() {
    // reactive() 可以将对象和数组转化为 响应式数据
    const obj = reactive({
      name: "wz",
      age: 22,
    });

    // 修改名字
    const updateName = () => {
      obj.name = "ls";
    };

    return { obj, updateName };
  },
};
</script>

<style scoped lang="scss"></style>
