<template>
  <div class="gradientCreateApiNav text-sm md:text-lg font-mono flex justify-between items-center flex-row flex-wrap">
    <h1 class=" text-2xl font-bold me-3 magic">API Playground</h1>
    <!-- Create api btn -->
    <button class="text-sm md:text-lg font-semibold flex flex-row items-center justify-center slate-btn-color my-3 mx-auto md:mx-0 ">
      <p>Code your API</p>
      <ion-icon class="ms-2 " name="add-circle-outline"></ion-icon>
    </button>

    <!-- Filter toggle btn -->
    <div @click="toggleFilter" class="m-3 p-2 border-2 border-white hover:bg-white hover:text-black  rounded-md mx-auto flex md:hidden flex-row items-center justify-center">
      <p class="font-semibold ">Filter</p>
      <ion-icon class="ms-2 text-2xl" name="filter-circle-outline"></ion-icon>
    </div>
  </div>

</template>
  
  <script>
  
  export default {
    name: "ApiCreate",
    methods: {
      toggleFilter() {
        this.$emit("isFilterHidden", false)
      },
    },
  };
  </script>