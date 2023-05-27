<template>
  <div class="bg-slate-900 min-h-screen text-white">
    <Navbar />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
import MainNav from './components/main-components/navBar/Nav.vue';
import Footer from './components/main-components/footer/Footer.vue';

export default {
    name: 'App',
  components: {
    'Navbar' : MainNav,
    'Footer' : Footer
  }
}
</script>
