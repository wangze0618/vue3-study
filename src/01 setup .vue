<template>
  <div class="container">{{ msg }}</div>
  <div class="container">{{ say() }}</div>
</template>

<script>
export default {
  name: "App",
  // 1. 组合API的起点
  // 2. 可以理解为：在beforeCreate钩子执行前执行，组件实例创建前
  // 3. 不可以用this， 因为实例还未创建 this => undefined
  // 4. setup 可以提供模板中需要使用的数据和函数，需要在setup中返回

  setup() {
    console.log("setup", this);
    const msg = "hello v3";
    const say = () => {
      return "sss";
    };

    return { msg, say };
  },
  //   beforeCreate() {
  //     console.log("beforeCreate", this);
  //   },
};
</script>

<style></style>
