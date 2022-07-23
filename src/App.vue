<template>
  <div class="relative w-full min-h-screen flex flex-col">
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
import { getAuth, onAuthStateChanged } from "@firebase/auth";
import { doc, getDoc } from "firebase/firestore/lite";
import { db } from "./firebase/firebaseInit";
import { useStore } from "./stores/store";
export default {
  name: "App",
  components: { Navigation, Footer },
  created() {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      this.store.user = user;
      console.log(user);
      if (this.store.user) {
        this.store.getCurrentUser();
      }
    });
  },
  setup() {
    const store = useStore();
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

    return { store, NavFootEnabled };
  },
};
</script>

<style>
@import "@/assets/main.css";
</style>
