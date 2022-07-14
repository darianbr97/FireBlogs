<template>
  <div
    id="container"
    class="relative w-full min-h-screen flex flex-col overflow-x-hidden"
  >
    <Navigation />
    <RouterView />
    <Footer />
  </div>
</template>

<script>
import Navigation from "./components/Navigation.vue";
import Footer from "./components/Footer.vue";
export default {
  name: "app",
  components: { Navigation, Footer },
};
</script>

<style>
@import "@/assets/main.css";
</style>
