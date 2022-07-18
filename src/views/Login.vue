<template>
  <div class="w-full h-screen flex overflow-hidden">
    <Loading v-if="state.loading" />
    <div class="w-full h-full flex justify-center items-center bg-white">
      <form
        @submit.prevent="signIn"
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
              v-model="state.email"
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
              v-model="state.password"
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
        <p v-show="state.error" class="text-red-500 text-sm font-semibold mb-4">
          {{ state.errorMsg }}
        </p>
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
import { reactive } from "@vue/reactivity";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "vue-router";
import Loading from "../components/Loading.vue";
export default {
  name: "Login",
  components: { Loading },
  setup() {
    const router = useRouter();
    const state = reactive({
      loading: false,
      email: "",
      password: "",
      error: false,
      errorMsg: "",
    });

    function signIn() {
      if (state.email !== "" && state.password !== "") {
        state.loading = true;
        const auth = getAuth();
        signInWithEmailAndPassword(auth, state.email, state.password)
          .then((userCredential) => {
            state.loading = false;
            state.error = false;
            state.errorMsg = "";
            router.push({ name: "home" });
            console.log("user uid:", userCredential.user.uid);
          })
          .catch((err) => {
            state.loading = false;
            state.error = true;
            state.errorMsg = err.message;
          });
        return;
      }
      state.error = true;
      state.errorMsg = "Please fill out all the fields!";
      return;
    }

    return { state, signIn };
  },
};
</script>

<style>
</style>