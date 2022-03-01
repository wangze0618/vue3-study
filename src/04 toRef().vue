<template>
  <div class="container">
    {{ name }}
    <button @click="updateName">updateName</button>
  </div>
</template>

<script>
import { reactive, toRef } from "vue";

export default {
  name: "App",
  // 注意 ！！！ 从响应式对象里解构出的属性数据，不是响应式数据，需要使用toRef
  // 转换为响应式数据
  setup() {
    const obj = reactive({
      name: "ls",
      age: 22,
    });
    let name = toRef(obj, "name");
    // toRef() 将属性数据 包装为对象，value存放的就是值
    const updateName = () => {
      name.value = "wz";
      console.log(name);
    };
    console.log(obj);
    return { name, updateName };
  },
};
</script>

<style scoped lang="scss"></style>
