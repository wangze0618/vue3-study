<template>
  <div class="container">
    <h1>父组件 {{ money }}</h1>
    <button @click="money = 1000">发钱->1000</button>
    <hr />
    <Son2></Son2>
  </div>
</template>

<script>
import { provide, ref } from "vue";
import Son2 from "./components/Son2.vue";
export default {
  name: "App",
  setup() {
    const money = ref(100);
    const changeMoney = (data) => {
      money.value -= data;
      console.log("changeMoney");
    };

    // provide() 将数据提供给后代组件
    provide("money", money);
    provide("changeMoney", changeMoney);

    return { money };
  },
  components: { Son2 },
};
</script>

<style scoped lang="scss"></style>
