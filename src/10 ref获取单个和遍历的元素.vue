<template>
  <div class="container">
    <!-- 单个元素 -->
    <div ref="box">我是box</div>
    <!-- 被遍历的元素 -->
    <ul>
      <li :ref="setDom" v-for="item in 4" :key="item">第{{ item }}li</li>
    </ul>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
export default {
  name: "App",
  setup() {
    // 单个DOM元素
    // 1. 先定义一个空的响应式数据ref()来定义
    // 2. setup()中返回该数据，你想获取哪个dom元素，
    //就在哪个元素上使用ref属性绑定该数据即可
    const box = ref(null);
    // onMounted(() => {
    //   console.log(box.value);
    // });

    // v-for 遍历的元素
    //1. 定义一个空数组，接受所有的li
    //2. 定义一个函数，在空数组里push DOM
    const domList = [];
    const setDom = (dom) => {
      domList.push(dom);
    };
    // onMounted(() => {
    //   console.log(domList);
    // });
    return { box, domList, setDom };
  },
};
</script>

<style scoped lang="scss"></style>
