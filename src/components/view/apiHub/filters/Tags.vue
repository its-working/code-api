<template >
  <div  class="tags flex flex-row flex-wrap  justify-center">
    <div v-for="index in 10" :key="index" class="bg-slate-900 font-medium hover:bg-slate-950 text-slate-300 w-fit p-1 px-4 m-1 rounded-full text-sm">
      Sorting
    </div>
  </div>
</template>
  
<script>

export default {
  name: 'TagsComponent',
  components: {
  }
}
</script>
  