<template>
  <div class="container">
    <div>{{ name }}</div>
    <div>{{ age }}</div>
    <button @click="updateName">updateName</button>
  </div>
</template>

<script>
import { reactive, toRef, toRefs } from "vue";

export default {
  name: "App",

  setup() {
    const obj = reactive({
      name: "ls",
      age: 22,
    });
    const o1 = toRefs(obj);
    const updateName = () => {
      o1.name.value = "ss";
      obj.age = 999;
    };
    return { ...o1, updateName };
  },
};
</script>

<style scoped lang="scss"></style>
