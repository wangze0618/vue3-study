<template>
  <div class="container">
    <h1>子组件</h1>
    {{ money }}
    <button @click="changeMoney">-50</button>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "Son",
  // 子组件接收父组件数据使用 props即可
  props: {
    money: {
      type: Number,
      default: 0,
    },
  },
  // 获得父组件数据， 可以在setup() 里传props参数
  setup(props, context) {
    // 获取到了父组件数据的money
    console.log(props.money);

    console.log(context);
    // 向父组件传值
    const changeMoney = () => {
      context.emit("update:money", 50);
    };
    return { changeMoney };
  },
};
</script>

<style scoped lang="scss"></style>
