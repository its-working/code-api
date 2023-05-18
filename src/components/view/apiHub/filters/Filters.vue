<template>
  <div
    class="bg-gradient-to-r from-slate-950 to-slate-900 flex flex-col mt-[4.4rem] h-[calc(100vh-5rem)]  rounded-lg px-2 py-3 overflow-y-auto scrollbar-customized w-1/5 fixed">
    <div class="wrapper">
      <div class="heading">
        Filters
      </div>
    </div>
    <TagsComponent />
    <span class="text-slate-400">I am Filter component</span>
  </div>
</template>

<script>
import TagsComponent from "./Tags.vue";

export default {
  name: "FilterComponent",
  components: {
    TagsComponent,
  },
};
</script>
