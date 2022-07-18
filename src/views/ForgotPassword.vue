<template>
  <div class="w-full h-screen flex overflow-hidden">
    <Modal
      v-if="state.activeModal"
      :msg="state.msgModal"
      @close-modal="closeModal"
    />
    <Loading v-if="state.loading" />
    <div class="w-full h-full flex justify-center items-center bg-white">
      <form
        @submit.prevent="resetPassword"
        class="w-[390px] sm:w-[490px] flex flex-col justify-center items-center"
      >
        <p class="text-center text-base font-semibold mb-4">
          Back to
          <router-link :to="{ name: 'Login' }" class="underline"
            >Login</router-link
          >
        </p>
        <h2 class="text-[30px] sm:text-[40px] font-bold">Reset Password</h2>
        <p class="text-center text-xs font-semibold mb-6">
          Forgot your password? Enter your email to reset it
        </p>
        <div class="w-full flex flex-col items-center gap-2">
          <div class="relative w-[255px] sm:w-[300px] flex items-center mb-6">
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
        </div>
        <input
          type="submit"
          value="RESET"
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
import { reactive, ref } from "@vue/reactivity";
import Modal from "../components/Modal.vue";
import Loading from "../components/Loading.vue";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
export default {
  components: { Modal, Loading },
  setup() {
    const state = reactive({
      email: "",
      activeModal: false,
      msgModal: "hola",
      loading: false,
    });

    function closeModal() {
      state.activeModal = false;
      state.email = "";
    }

    function resetPassword() {
      if (state.email !== "") {
        state.error = true;
        state.errorMsg = "";
        state.loading = true;
        const auth = getAuth();
        sendPasswordResetEmail(auth, state.email)
          .then(() => {
            state.msgModal = "If your account exists, you will receive a email";
            state.loading = false;
            state.activeModal = true;
          })
          .catch((err) => {
            state.loading = false;
            state.msgModal = err.message;
            state.activeModal = true;
          });
        return;
      }
      state.error = true;
      state.errorMsg = "Please fill out all the fields!";
      return;
    }

    return { state, closeModal, resetPassword };
  },
};
</script>

<style>
</style>