<template>
  <div>
    <ApiForm :formVisibility="apiFormVisibility"   @form-visibility="toggleApiForm" />
  </div>
  <div
    class="gradientCreateApiNav navAlign"
  >
    <h1 class="text-2xl font-bold me-3 magic">API Playground</h1>
    <!-- Create api btn -->
    <button @click="toggleApiForm"
      class="text-sm md:text-lg font-semibold flex-center flex-row  slate-btn-color my-3 mx-auto md:mx-0"
    >
      <p>Code your API</p>
      <ion-icon class="ms-2" name="add-circle-outline"></ion-icon>
    </button>

    <!-- Filter toggle btn -->
    <div
      @click="toggleFilter"
      class="navFilterBtn"
    >
      <p class="font-semibold">Filter</p>
      <ion-icon class="ms-2 text-2xl" name="filter-circle-outline"></ion-icon>
    </div>
  </div>
</template>

<script>
import APIForm from './APIForm.vue';

export default {
  name: "ApiCreate",
  data(){
    return {
      apiFormVisibility: false,
    };
  },
  components: {
      'ApiForm': APIForm,
    },
  methods: {
    toggleFilter() {
      this.$emit("isFilterHidden", false);
    },
    toggleApiForm(){
      this.apiFormVisibility = !this.apiFormVisibility;
    }
  },
};
</script>
