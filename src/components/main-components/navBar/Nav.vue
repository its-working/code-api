<template>
  <div id="navBarContainer" class="fixed top-0 w-screen">

    <ul class="nav-items">
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
console.log(routes);
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
