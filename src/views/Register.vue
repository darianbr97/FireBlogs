<template>
  <div class="w-full h-screen flex overflow-hidden">
    <div class="w-full h-full flex justify-center items-center bg-white">
      <form
        @submit.prevent="register"
        class="w-[390px] sm:w-[490px] flex flex-col justify-center items-center"
      >
        <p class="text-base font-semibold mb-6">
          Already have an acount?
          <router-link :to="{ name: 'Login' }" class="underline"
            >Login</router-link
          >
        </p>
        <h2 class="text-[30px] text-center sm:text-[40px] font-bold mb-6">
          Create Your FireBlog Account
        </h2>
        <div class="w-full flex flex-col items-center gap-2">
          <div class="relative w-[255px] sm:w-[300px] flex items-center">
            <input
              type="text"
              placeholder="First Name"
              v-model="state.firstName"
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
              src="../assets/Icons/user-alt-light.svg"
              alt="user icon"
              class="absolute z-10 left-2 w-3 h-3"
            />
          </div>
          <div class="relative w-[255px] sm:w-[300px] flex items-center">
            <input
              type="text"
              placeholder="Second Name"
              v-model="state.lastName"
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
              src="../assets/Icons/user-alt-light.svg"
              alt="user icon"
              class="absolute z-10 left-2 w-3 h-3"
            />
          </div>
          <div class="relative w-[255px] sm:w-[300px] flex items-center">
            <input
              type="text"
              placeholder="User Name"
              v-model="state.userName"
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
              src="../assets/Icons/user-alt-light.svg"
              alt="user icon"
              class="absolute z-10 left-2 w-3 h-3"
            />
          </div>
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
        <p v-if="state.error" class="text-red-500 text-sm font-semibold mb-4">
          {{ state.errorMsg }}
        </p>
        <input
          type="submit"
          value="SIGN UP"
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
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { db } from "../firebase/firebaseInit";
import { collection, addDoc, setDoc, doc } from "firebase/firestore/lite";
import { useRouter } from "vue-router";

export default {
  name: "Register",
  setup() {
    const router = useRouter();
    const state = reactive({
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      userName: "",
      error: false,
      errorMsg: "",
    });

    const register = async () => {
      if (
        state.email !== "" &&
        state.password !== "" &&
        state.firstName !== "" &&
        state.lastName !== "" &&
        state.userName !== ""
      ) {
        state.error = false;
        state.errorMsg = "";

        try {
          const auth = await getAuth();
          const createUser = await createUserWithEmailAndPassword(
            auth,
            state.email,
            state.password
          );
          //   const dataBase = await addDoc(collection(db, "users"), {
          //     firstName: state.firstName,
          //     lastName: state.lastName,
          //     userName: state.userName,
          //     email: state.email,
          //   });

          const userCredential = await createUser.user;
          const dataBase = doc(db, "users", userCredential.uid);
          await setDoc(dataBase, {
            firstName: state.firstName,
            lastName: state.lastName,
            userName: state.userName,
            email: state.email,
          });

          router.push({ name: "home" });
        } catch (err) {
          console.log(err.code);
          console.log(err.message);
        }

        return;
      }

      state.error = true;
      state.errorMsg = "Please fill out all the fields!";
      return;
    };

    return { state, register };
  },
};
</script>

<style></style>
