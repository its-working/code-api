<template>
  <div class="gradientCreateApiNav">
    <div class="text-2xl font-bold text-gray-100">Create API</div>
    <div class="text-gray-100 ml-2 bg-gray-700 hover:bg-gray-600 font-medium p-2 rounded-lg px-3">Create your own API</div>
  </div>
</template>
  
  <script>
  
  export default {
    name: "ApiCreate",
    components: {
    },
  };
  </script>
  
  <style>
.gradientCreateApiNav{
  @apply bg-gradient-to-r from-gray-800 via-gray-900 to-black mt-3 h-[4rem] text-gray-200 rounded-lg px-3 flex justify-between items-center
}
</style>