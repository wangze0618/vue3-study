// 提供mixin 逻辑
export const followMixin = {
  data() {
    return {
      loading: false,
    };
  },
  methods: {
    followFn() {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
      }, 2000);
    },
  },
};
