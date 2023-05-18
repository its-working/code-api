<template>
  <div class="w-full text-slate-50 p-3 flex justify-center flex-row items-center">
    <div class="card w-full p-3 m-0" @mousemove="handleOnMouseMove">
      <h2 class="text-2xl font-bold mb-4">{{ data.name }}</h2>
      <p class="text-lg">{{ data.description }}</p>
    </div>
      <button
        class="h-full bg-slate-600 rounded-lg ms-3 p-3 font-semibold font-mono hover:bg-slate-500"
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

<style>
.card {
  background-color: rgba(255, 255, 255, 0.02);
  border-radius: 10px;
  position: relative;
  border: 1px solid rgba(255, 255, 255, 0.1);
  cursor: pointer;
}

.card:hover::before {
  opacity: 1;
}

.card::before {
  background: radial-gradient(
    800px circle at var(--mouse-x) var(--mouse-y),
    rgba(160, 160, 160, 0.199),
    transparent 40%
  );

  border-radius: inherit;
  content: "";
  opacity: 0;
  height: 100%;
  left: 0;
  transition: opacity 500ms;
  position: absolute;
  top: 0px;
  width: 100%;
  z-index: 2;
}
</style>
