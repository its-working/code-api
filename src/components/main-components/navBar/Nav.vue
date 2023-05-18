<template>
  <div id="navBarContainer" class="fixed top-0 w-screen">

      <img class="logo w-[9rem] absolute ms-[2rem] -translate-y-10" :src="require('../../../images/logo.png')">
      
    <ul class="nav-items ms-[12rem]">
      <LinkItem v-for="(route, key) in routes" :key="key" :itemName="route.name" :itemPath="route.path" />
    </ul>
    <ul class="nav-items">
      <li class="nav-link"><router-link to="/">Login</router-link></li>
    </ul>
  </div>

</template>


<script>
import LinkItem from './NavLink.vue';
import routes from '../../../routers/routes.json';

export default {
  name: 'MainNav', 
  components: {
    LinkItem
  },
  data() {
    return {
      routes: routes
    };
  }
}
</script>
<style>
#navBarContainer{
  z-index: 100;
}
</style>