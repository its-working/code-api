<template>
  <div
    class="filter-position">
    <div class="wrapper">
      <button class="hidden md:flex text-white self-end text-3xl -mt-2 mb-3 duration-300 hover:scale-110">
        <ion-icon name="chevron-back-circle-outline"></ion-icon>
      </button>
      
      <div class="heading ms-5 md:ms-0">
        Filters
      </div>
      <div @click="toggleFilter" class="filterToggle text-3xl me-3 md:hidden"><ion-icon name="close-circle-outline"></ion-icon></div>
    </div>

    <TagsComponent />
  
  </div>
</template>

<script>
import TagsComponent from "./Tags.vue";

export default {
  name: "FilterComponent",
  components: {
    TagsComponent,
  },
  methods: {
    toggleFilter() {
      this.$emit("isFilterHidden", true);
    },
  },
};
</script>
