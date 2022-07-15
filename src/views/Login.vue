<template>
  <div class="w-full h-screen flex overflow-hidden">
    <div class="w-full h-full flex justify-center items-center bg-white">
      <form
        @submit.prevent=""
        class="w-[390px] sm:w-[490px] flex flex-col justify-center items-center"
      >
        <p class="text-base font-semibold mb-6">
          Don't have an acount?
          <router-link :to="{ name: 'Register' }" class="underline"
            >Register</router-link
          >
        </p>
        <h2 class="text-[30px] sm:text-[40px] font-bold mb-6">
          Login to FireBlogs
        </h2>
        <div class="w-full flex flex-col items-center gap-2">
          <div class="relative w-[255px] sm:w-[300px] flex items-center">
            <input
              type="email"
              placeholder="Email"
              v-model="email"
              class="
                w-full
                p-2
                pl-8
                bg-gray-100
                rounded-md
                placeholder:text-gray-500 placeholder:text-sm
              "
            />
            <img
              src="../assets/Icons/envelope-regular.svg"
              alt="email icon"
              class="absolute z-10 left-2 w-3 h-3"
            />
          </div>
          <div class="relative w-[255px] sm:w-[300px] flex items-center mb-4">
            <input
              type="password"
              placeholder="Password"
              v-model="password"
              class="
                w-full
                p-2
                pl-8
                bg-gray-100
                rounded-md
                placeholder:text-gray-500 placeholder:text-sm
              "
            />
            <img
              src="../assets/Icons/lock-alt-solid.svg"
              alt="lock icon"
              class="absolute z-10 left-2 w-3 h-3"
            />
          </div>
        </div>
        <router-link
          :to="{ name: 'ForgotPassword' }"
          class="text-base font-semibold mb-6 hover:underline"
          >Forgot your password?</router-link
        >
        <input
          type="submit"
          value="SIGN IN"
          class="
            py-3
            px-5
            bg-slate-800
            text-white
            font-semibold
            rounded-3xl
            shadow-md
            hover:scale-110
            active:bg-gray-300 active:text-black
          "
        />
      </form>
    </div>
    <div
      class="
        invisible
        w-0
        absolute
        sm:visible sm:w-[90px]
        h-[100.5%]
        -top-1
        bg-white
        rotate-3
        translate-x-[440px]
      "
    ></div>
    <img
      src="../assets/background.png"
      alt="background"
      class="invisible w-0 sm:visible sm:w-full object-cover"
    />
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
export default {
  name: "Login",
  setup() {
    const email = ref("");
    const password = ref("");

    return { email, password };
  },
};
</script>

<style>
</style>