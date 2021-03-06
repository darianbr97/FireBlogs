<template>
  <header
    class="relative w-full h-14 flex items-center justify-center px-4 shadow"
  >
    <nav class="w-full flex justify-between xl:justify-around">
      <div class="flex items-center">
        <router-link :to="{ name: 'home' }" class="text-2xl font-semibold"
          >FireBlogs</router-link
        >
      </div>
      <div v-if="!state.mobileMode">
        <ul class="flex items-center">
          <router-link
            :to="{ name: 'home' }"
            class="p-3 uppercase hover:text-green-400 font-semibold"
            >Home</router-link
          >
          <router-link
            :to="{ name: 'blogs' }"
            class="p-3 uppercase hover:text-green-400 font-semibold"
            >Blogs</router-link
          >
          <router-link
            v-if="store.user"
            :to="{ name: 'CreatePost' }"
            class="p-3 uppercase hover:text-green-400 font-semibold"
            >Create Post</router-link
          >
          <router-link
            v-if="!store.user"
            :to="{ name: 'Login' }"
            class="p-3 uppercase hover:text-green-400 font-semibold"
            >Login/Register</router-link
          >
          <div v-if="isLogin" class="relative">
            <span
              @click="state.showUserMenu = !state.showUserMenu"
              v-if="store.user"
              class="
                px-2
                py-[10px]
                bg-slate-800
                rounded-full
                text-white text-sm
                font-semibold
                select-none
                shadow-lg
              "
              >{{ store.profileInitials }}</span
            >
            <ProfileMenu v-if="state.showUserMenu" />
          </div>
        </ul>
      </div>
    </nav>
    <img
      v-if="state.mobileMode"
      @click="toggleMobileNav"
      src="../assets/Icons/bars-regular.svg"
      alt="bar menu"
      class="w-6 h-6"
    />
    <transition name="mobile-nav">
      <ul
        v-if="state.mobileNav"
        id="mobile-links"
        class="
          absolute
          z-50
          top-0
          left-0
          w-52
          h-screen
          flex flex-col
          p-4
          bg-gray-800
        "
      >
        <router-link :to="{ name: 'home' }" class="text-white p-2"
          >Home</router-link
        >
        <router-link :to="{ name: 'blogs' }" class="text-white p-2"
          >Blogs</router-link
        >
        <router-link
          v-show="store.user"
          :to="{ name: 'CreatePost' }"
          class="text-white p-2"
          >Create Post</router-link
        >
        <router-link
          v-show="!store.user"
          :to="{ name: 'Login' }"
          class="text-white p-2"
          >Login/Register</router-link
        >
      </ul>
    </transition>
  </header>
</template>

<script>
import { reactive } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";
import { useStore } from "../stores/store";
import ProfileMenu from "../components/ProfileMenu.vue";
export default {
  components: { ProfileMenu },
  setup() {
    const store = useStore();
    const state = reactive({
      mobileMode: null,
      mobileNav: null,
      showUserMenu: false,
    });

    onMounted(() => {
      window.addEventListener("resize", checkScreen);
      checkScreen();
    });

    function checkScreen() {
      store.windowWidth = window.innerWidth;
      if (store.windowWidth < 768) {
        state.mobileMode = true;
        return;
      }
      state.mobileMode = false;
      state.mobileNav = false;
    }

    function toggleMobileNav() {
      state.mobileNav = !state.mobileNav;
    }

    return { state, store, toggleMobileNav };
  },
  computed: {
    isLogin() {
      return this.store.user;
    },
  },
};
</script>

<style>
.mobile-nav-enter-active,
.mobile-nav-leave-active {
  transition: all 0.5s ease-in-out;
}

.mobile-nav-enter-from {
  transform: translateX(-100%);
}
.mobile-nav-enter-to {
  transform: translateX(0%);
}

.mobile-nav-leave-from {
  transform: translateX(0%);
}
.mobile-nav-leave-to {
  transform: translateX(-100%);
}
</style>