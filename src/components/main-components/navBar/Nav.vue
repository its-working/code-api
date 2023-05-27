<template>
  <!-- Nav Bar Wrapper -->
  <div id="navBarContainer" class="fixed top-0 w-screen z-20">

      <img class="logo w-[9rem] absolute ms-[2rem] -translate-y-10" :src="require('../../../images/logo.png')">
    
      <div @click="toggleSideBarContent" class="pe-5 flex md:hidden h-full w-full justify-end items-center">
        <ion-icon class="text-4xl" name="menu-outline"></ion-icon> 
      </div>

        <!-- Nav Bar content -->
        <div id="navBarContent" :class="{'hidden': isContentHidden}" class="duration-500 ease-in-out md:flex">
    
        <!-- CLose Icon -->
        <div @click="toggleSideBarContent" class="flex pe-5 md:hidden w-full justify-end items-center p-3 m-2">
          <ion-icon class="text-4xl" name="close-outline"></ion-icon>
        </div>
          <!-- Nav Items -->
          <div class="items md:ms-[12rem]">
            <ul class="nav-items">
              <LinkItem v-for="(route, key) in routes" :key="key" :itemName="route.name" :itemPath="route.path" />
            </ul>
          </div>
          <!-- Nav Auth Item -->
          <ul class="nav-items">
            <li class="nav-link"><router-link to="/login">Login</router-link></li>
          </ul>

        </div>

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
      routes: routes,
      isContentHidden: true
    };
  },
  methods: {
  toggleSideBarContent() {
    this.isContentHidden = !this.isContentHidden;
  }
}
}
</script>
