<template>
  <div class="w-full text-slate-50 p-3 flex justify-center flex-col md:flex-row items-center">
    <div class="card w-full p-3 m-0" @mousemove="handleOnMouseMove">
      <h2 class="text-2xl font-bold mb-4">{{ data.apiName }}</h2>
      <p class="text-lg">{{ data.Description }}</p>
    </div>
    <button @click="toggleApiInfo" class="h-full ms-3 font-semibold font-mono slate-btn-color my-3 md:mt-0">
      Try it now
    </button>
  </div>
</template>

<script>
export default {
  name: "ApiView",
  props: {
    data: Array,
    isApiInfoVisible: Boolean,
  },
  methods: {
    handleOnMouseMove(event) {
      const rect = event.currentTarget.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      event.currentTarget.style.setProperty("--mouse-x", `${x}px`);
      event.currentTarget.style.setProperty("--mouse-y", `${y}px`);
    },
    toggleApiInfo() {
      let currData = this.data;
      this.$emit("ToggleApiInfo", true, currData);
    }
  },
};
</script>