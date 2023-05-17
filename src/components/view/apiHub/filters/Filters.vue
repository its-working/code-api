<template>
  <div
    class="flex flex-col justify-between mt-[4.4rem] h-[calc(100vh-5rem)]  bg-slate-800 rounded-lg px-2 py-3 overflow-y-auto scrollbar-customized w-1/5 fixed">
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
