<template>
  <div>
    <div
      class="
        absolute
        z-20
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
      class="absolute right-0 mt-4 p-3 bg-slate-800 rounded-md flex flex-col"
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
            p-2
            mr-2
            bg-white
            rounded-full
            text-black text-sm
            font-semibold
          "
          >{{ store.profileInitials }}</span
        >
        <div class="text-white text-xs">
          <p>{{ store.profileFirstName }} {{ store.profileLastName }}</p>
          <p>{{ store.profileUserName }}</p>
          <p>{{ store.profileEmail }}</p>
        </div>
      </div>
      <div class="w-full flex flex-col gap-1 mt-2">
        <button class="flex items-center gap-3 text-white hover:opacity-70">
          <img
            class="w-4 h-4 invert"
            src="../assets/Icons/user-alt-light.svg"
            alt="user icon"
          />
          Profile
        </button>
        <button class="flex items-center gap-3 text-white hover:opacity-70">
          <img
            class="w-4 h-4 invert"
            src="../assets/Icons/user-crown-light.svg"
            alt="admin icon"
          />
          Admin
        </button>
        <button class="flex items-center gap-3 text-white hover:opacity-70">
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
import { useStore } from "../stores/store";
export default {
  setup() {
    const store = useStore();

    return { store };
  },
};
</script>

<style>
</style>