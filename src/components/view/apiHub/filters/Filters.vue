<template>
  <div
    class="filter-position duration-200"
    :class="{ toggledFilterPos: isFilterToggled, FilterPos: !isFilterToggled }"
  >
    <div class="closeBtn w-full flex justify-end">
      <button
        @click="toggleFilter"
        :class="{ 'rotate-180 ': isFilterToggled }"
        class="hidden transition-all duration-200 md:flex h-full text-white text-3xl hover:scale-110"
      >
        <ion-icon name="chevron-back-circle-outline"></ion-icon>
      </button>
    </div>

    <div class="flex flex-row justify-between items-center">
      <div class="filter-heading ms-5 md:ms-0">Filters</div>
      <div @click="toggleFilterMobile" class="filterToggle text-3xl me-3 md:hidden">
        <ion-icon name="close-circle-outline"></ion-icon>
      </div>
    </div>

    <!-- Filter components -->
    <div class="wrapper" :class="{ wrapperToggled: isFilterToggled }">
      <TagsComponent />
      <TagsComponent />
      <TagsComponent />
    </div>
  </div>
</template>

<script>
import TagsComponent from "./Tags.vue";

export default {
  name: "FilterComponent",
  data() {
    return {
      isFilterToggled: false,
    };
  },
  components: {
    TagsComponent,
  },
  methods: {
    toggleFilterMobile() {
      this.$emit("isFilterHidden", true);
    },
    toggleFilter() {
      this.isFilterToggled = !this.isFilterToggled;
    },
  },
};
</script>

<style>
.toggledFilterPos {
  @apply overflow-hidden md:w-[100px];
}
.wrapperToggled {
  @apply blur;
}
.FilterPos {
  @apply overflow-y-auto md:w-full;
}
</style>
