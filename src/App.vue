<template>
	<Navigation />
	<RouterView />
	<Footer />
</template>

<script>
import Navigation from "./components/Navigation.vue";
import Footer from "./components/Footer.vue";
export default {
  name: "app",
  components: { Navigation, Footer },
}

</script>


<style>
	@import "@/assets/main.css";
</style>
