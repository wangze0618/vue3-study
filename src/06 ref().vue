<template>
  <div class="container">
    <div>{{ name }}</div>
    <button @click="updateName">click</button>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "App",
  setup() {
    let name = ref("wz");
    console.log(name.value);

    const updateName = () => {
      name.value = "ss";
    };
    return { name, updateName };
  },
};
</script>

<style scoped lang="scss"></style>
