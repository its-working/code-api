<template>
  <div class="bg-slate-900 min-h-screen text-white">
    <template v-if="!isApiResponsePage">
      <Navbar />
    </template>

    <router-view></router-view>

    <template v-if="!isApiResponsePage">
      <Footer />
    </template>
  </div>
</template>

<script>
import MainNav from './components/main-components/navBar/Nav.vue';
import Footer from './components/main-components/footer/Footer.vue';

export default {
  name: 'App',
  components: {
    Navbar: MainNav,
    Footer: Footer
  },
  computed: {
    isApiResponsePage() {
      return this.$route.path.includes('apiResponse');
    }
  }
}
</script>
