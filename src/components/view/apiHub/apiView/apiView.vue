<template>
  <div class="w-full text-slate-50 p-3 flex justify-center flex-row items-center">
    <div class="card w-full p-3 m-0" @mousemove="handleOnMouseMove">
      <h2 class="text-2xl font-bold mb-4">{{ data.name }}</h2>
      <p class="text-lg">{{ data.description }}</p>
    </div>
      <button
        class="h-full ms-3 font-semibold font-mono slate-btn-color"
      >
        Try it now
      </button>
  </div>
</template>

<script>
export default {
  name: "ApiView",
  props: {
    data: Object,
  },
  methods: {
    handleOnMouseMove(event) {
      const rect = event.currentTarget.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      event.currentTarget.style.setProperty("--mouse-x", `${x}px`);
      event.currentTarget.style.setProperty("--mouse-y", `${y}px`);
    },
  },
};
</script>