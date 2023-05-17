<template>
    <div class="">
       <ApiView v-for="index in 40" :key="index" />
    </div>
</template>
  
  <script>
  import ApiView from './apiView.vue'

  export default {
    name: "AllApi",
    components: {
      ApiView,
    },
  };
  </script>
  