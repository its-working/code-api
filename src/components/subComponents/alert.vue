<template>
  <div>
    <div
      class="alert my-3 bg-opacity-70 bg-red-600 w-full text-center text-md p-3 rounded-lg flex flex-row justify-between"
    >
      <label for="error-message">{{ message }}</label>
      <button v-on:click="hideAlert" class="text-2xl me-1 ms-3">
        <ion-icon name="close-outline"></ion-icon>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "AlertView",
  props: {
    message: String,
  },
  data() {
    return {
      showAlert: true,
    };
  },
  methods: {
    hideAlert() {
      this.$emit("hideAlert");
    },
  },
  watch: {
    message() {
      console.log("hi");
      this.showAlert = true;
    },
  },
};
</script>
