<template>
  <div class="container">
    <h2>
      作者：周杰伦
      <button @click="followFn">
        {{ loading ? "following" : "followed" }}
      </button>
    </h2>
  </div>
</template>

<script>
import { ref } from "vue";
import { followMixin } from "../mixins/mixins";
export default {
  name: "Son4",
  setup() {
    return {};
  },
  mixins: [followMixin],
};
</script>

<style scoped lang="scss"></style>
