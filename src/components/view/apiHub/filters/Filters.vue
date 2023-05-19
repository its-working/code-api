<template>
  <div
    class="w-screen h-screen md:h-[calc(100vh-5rem)] mt-[4.4rem] md:w-2/5 lg:w-2/6 z-10 bg-gradient-to-r from-slate-950 to-slate-900  flex-col  rounded-lg px-2 py-3 overflow-y-auto scrollbar-customized fixed right-0">
    <div class="wrapper">
      <div class="heading ms-5">
        Filters
      </div>
      <div @click="toggleFilter" class="filterToggle text-3xl me-3"><ion-icon name="close-circle-outline"></ion-icon></div>
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
