<template>
  <div
    id="container"
    class="relative w-full min-h-screen flex flex-col overflow-hidden"
  >
    <Navigation v-if="NavFootEnabled" />
    <RouterView />
    <Footer v-if="NavFootEnabled" />
  </div>
</template>

<script>
import { useRoute } from "vue-router";
import Navigation from "./components/Navigation.vue";
import Footer from "./components/Footer.vue";
import { ref, watch } from "@vue/runtime-core";
export default {
  name: "App",
  components: { Navigation, Footer },
  setup() {
    const route = useRoute();
    const NavFootEnabled = ref(true);

    function checkRoute() {
      if (
        route.name === "Login" ||
        route.name === "Register" ||
        route.name === "ForgotPassword"
      ) {
        NavFootEnabled.value = false;
      } else NavFootEnabled.value = true;
    }

    watch(() => route.name, checkRoute);

    return { NavFootEnabled };
  },
};
</script>

<style>
@import "@/assets/main.css";
</style>
