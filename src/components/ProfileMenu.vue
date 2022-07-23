<template>
  <div>
    <div
      class="
        absolute
        z-50
        right-[10px]
        top-[26px]
        w-2
        h-2
        border-[8px]
        border-t-transparent
        border-r-transparent
        border-b-slate-800
        border-l-transparent
      "
    ></div>
    <div
      class="
        absolute
        min-w-[170px]
        z-50
        right-0
        mt-4
        p-3
        bg-slate-800
        rounded-md
        flex flex-col
      "
    >
      <div
        class="
          w-full
          flex
          justify-between
          items-center
          border-b-2 border-b-white
          pb-2
        "
      >
        <span
          v-if="store.user"
          class="
            px-2
            py-[10px]
            mr-2
            bg-white
            rounded-full
            text-black text-sm
            font-semibold
          "
          >{{ store.profileInitials }}
        </span>
        <div class="text-white text-xs">
          <p>{{ store.profileFirstName }} {{ store.profileLastName }}</p>
          <p>{{ store.profileUserName }}</p>
          <p>{{ store.profileEmail }}</p>
        </div>
      </div>
      <div class="w-full flex flex-col gap-1 mt-2">
        <router-link
          :to="{ name: 'Profile' }"
          class="flex items-center gap-3 text-white hover:opacity-70"
        >
          <img
            class="w-4 h-4 invert"
            src="../assets/Icons/user-alt-light.svg"
            alt="user icon"
          />
          Profile
        </router-link>

        <button
          @click.stop="signOutSession"
          class="flex items-center gap-3 text-white hover:opacity-70"
        >
          <img
            class="w-4 h-4 invert"
            src="../assets/Icons/sign-out-alt-regular.svg"
            alt="sign out icon"
          />
          Sign Out
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { getAuth, signOut } from "firebase/auth";

import { useStore } from "../stores/store";

export default {
  setup() {
    const store = useStore();

    function signOutSession() {
      const auth = getAuth();
      signOut(auth)
        .then(() => {
          // Sign-out successful.
        })
        .catch((error) => {
          // An error happened.
        });
    }

    return { store, signOutSession };
  },
};
</script>

<style>
</style>