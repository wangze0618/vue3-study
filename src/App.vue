<template>
  <div class="container">
    <h1>
      作者：周杰伦
      <a href="javascript:;" @click="followFn">{{
        loading ? "正在关注" : "关注"
      }}</a>
    </h1>
    <hr />
  </div>
  <Son4></Son4>
</template>

<script>
import { ref } from "vue";
import Son4 from "./components/Son4.vue";
import { followMixin } from "./mixins/mixins";
export default {
  components: { Son4 },
  name: "App",
  setup() {
    return {};
  },
  mixins: [followMixin],
};
</script>

<style scoped lang="scss"></style>
