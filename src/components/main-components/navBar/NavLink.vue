<template>
    <li class="nav-link"><router-link :to="itemPath" :class="{ active: $route.path === '{{ itemPath }}' }">{{itemName}}</router-link></li>
</template>
  
  <script>
  export default {
    name: 'LinkItem', 
    props: {
      itemName: String,
      itemPath: String
    } 
  }
  </script>
  