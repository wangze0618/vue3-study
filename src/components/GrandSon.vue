<template>
  <div class="container">
    <h3>孙组件 {{ money }}</h3>
    <button @click="fn">消费20元</button>
  </div>
</template>

<script>
import { inject, ref } from "vue";
export default {
  name: "GrandSon",
  setup() {
    const money = inject("money");
    const changeMoney = inject("changeMoney");
    const fn = () => {
      changeMoney(20);
    };
    return { money, fn };
  },
};
</script>

<style scoped lang="scss"></style>
