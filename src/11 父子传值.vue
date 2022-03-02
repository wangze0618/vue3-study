<template>
  <div class="container">
    <h1>父组件</h1>
    {{ money }}
    <hr />
    <!-- <Son :money="money" @updateMoney="updateMoney"></Son> -->
    <!-- <Son :money="money" @update:money="updateMoney"></Son> -->
    <Son v-model:money="money"></Son>
  </div>
</template>

<script>
import { ref } from "vue";
import Son from "./components/Son.vue";
export default {
  name: "App",
  setup() {
    const money = ref(100);
    const updateMoney = (data) => {
      console.log(data);
      money.value -= data;
    };
    return { money, updateMoney };
  },
  components: { Son },
};
</script>

<style scoped lang="scss"></style>
