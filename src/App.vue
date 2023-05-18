<template>
  <div class="bg-slate-900 min-h-screen text-white">
    <Navbar />
    <router-view></router-view>
  </div>
</template>

<script>
import MainNav from './components/main-components/navBar/Nav.vue';

export default {
    name: 'App',
  components: {
    'Navbar' : MainNav
  }
}
</script>
