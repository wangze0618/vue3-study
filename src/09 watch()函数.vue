<template>
  <div class="container">
    <div>
      <p>count的值：{{ count }}</p>
      <button @click="add">改数据</button>
    </div>
    <hr />
    <div>
      <p>{{ obj.name }}</p>
      <p>{{ obj.age }}</p>
      <p>{{ obj.brand.car.name }}</p>
      <button @click="updateName">改名字</button>
      <button @click="updateBrandName">改品牌名字</button>
    </div>
  </div>
</template>

<script>
import { reactive, ref, watch } from "vue";
export default {
  name: "App",
  setup() {
    // 当需要监听数据的变化可以使用 watch

    // 1. 监听一个 ref响应式数据
    // 第一个参数：需要监听的目标
    // 第二个参数：改变后触发的参数 newVal oldVal
    const count = ref(0);
    const add = () => {
      count.value++;
    };
    // watch(count, (newVal, oldVal) => {
    //   console.log(newVal, oldVal);
    // });

    // 2. 监听一个 reactive响应式对象
    const obj = reactive({
      name: "ls",
      age: 10,
      brand: {
        car: {
          id: 1,
          name: "宝马",
        },
      },
    });
    const updateName = () => {
      obj.name = "wz";
    };
    const updateBrandName = () => {
      obj.brand.car.name = "奔驰";
    };
    watch(obj, (newVal, oldVal) => {
      console.log("数据改变了");
    });
    watch(
      () => obj.brand.car.name,
      () => {
        console.log("深度改变了");
      },
      {
        deep: true,
      }
    );
    // 3. 监听多个数据的变化
    // watch([count, obj], () => {
    //   console.log("监听多个数据改变了");
    // });

    // 4. 对象中某一个属性的变化 例如：obj.name
    // 需要写成函数返回该属性的方式才能监听到！！！
    // watch(
    //   () => obj.name,
    //   () => {
    //     console.log("监听obj.name");
    //   }
    // );
    return { count, add, obj, updateName, updateBrandName };
  },
};
</script>

<style scoped lang="scss"></style>
