<template>
	<Navigation />
	<RouterView />
</template>

<script>
import Navigation from "./components/Navigation.vue";
export default {
  name: "app",
  components: { Navigation },
}

</script>


<style>
	@import "@/assets/main.css";
</style>
