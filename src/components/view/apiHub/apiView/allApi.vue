<template>
    <div class="cards mt-2 mx-auto">
    {{ console.log(data) }}
       <ApiView v-for="api in data['apis']" :key="api.name" :data="api" />
    </div>
</template>
  
  <script>
  import ApiView from './apiView.vue'
  import data from '/src/data/data.json';

  export default {
    name: "AllApi",
    components: {
      ApiView,
    },
    data() {
      return {
        data: data,
      };
    },
  };
  </script>
  