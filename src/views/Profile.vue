<template>
  <div
    class="
      w-full
      h-full
      flex flex-col
      justify-center
      items-center
      my-auto
      gap-5
    "
  >
    <Modal
      v-if="state.activeModal"
      :msg="state.msgModal"
      @close-modal="state.activeModal = false"
    />
    <Loading v-if="state.loading" />
    <h2 class="text-2xl">Account Settings</h2>
    <article
      class="
        w-[80%]
        max-w-[520px]
        rounded-md
        bg-gray-300
        flex flex-col
        justify-center
        items-center
        py-7
        gap-3
      "
    >
      <div
        class="
          w-14
          h-14
          flex
          justify-center
          items-center
          rounded-full
          bg-slate-800
        "
      >
        <span class="text-white text-lg text-center font-semibold"
          >{{ store.profileInitials }}
        </span>
      </div>
      <router-link
        :to="{ name: 'Administration' }"
        class="
          flex
          items-center
          justify-around
          gap-1
          px-4
          py-1
          bg-slate-800
          text-gray-200
          rounded-md
          hover:opacity-90
        "
        ><img
          src="../assets/Icons/user-crown-light.svg"
          alt="admin icon"
          class="w-3 h-3 invert"
        />
        Admin</router-link
      >
      <div class="w-[90%]">
        <span class="text-sm font-semibold">First Name:</span>
        <input
          class="w-full px-3 py-1 bg-gray-100 rounded-md"
          v-model="state.firstName"
        />
      </div>
      <div class="w-[90%]">
        <span class="text-sm font-semibold">Last Name:</span>
        <input
          class="w-full px-3 py-1 bg-gray-100 rounded-md"
          v-model="state.lastName"
        />
      </div>
      <div class="w-[90%]">
        <span class="text-sm font-semibold">Username:</span>
        <input
          class="w-full px-3 py-1 bg-gray-100 rounded-md"
          v-model="state.userName"
        />
      </div>
      <div class="w-[90%] mb-4">
        <span class="text-sm font-semibold">Email:</span>
        <input
          class="w-full px-3 py-1 bg-gray-100 rounded-md"
          v-model="state.email"
        />
      </div>
      <button
        @click="saveChanges"
        class="
          px-6
          py-2
          bg-slate-800
          text-white text-sm
          rounded-3xl
          hover:scale-110
          active:bg-gray-400 active:text-black
          font-semibold
        "
      >
        SAVE CHANGES
      </button>
    </article>
  </div>
</template>

<script>
import { useStore } from "../stores/store";
import Modal from "../components/Modal.vue";
import Loading from "../components/Loading.vue";
import { reactive } from "@vue/reactivity";
import { doc, setDoc } from "firebase/firestore/lite";
import { db } from "../firebase/firebaseInit";

export default {
  name: "Profile",
  components: { Modal, Loading },
  setup() {
    const store = useStore();
    const state = reactive({
      activeModal: false,
      msgModal: "",
      loading: false,
      initials: store.profileInitials,
      firstName: store.profileFirstName,
      lastName: store.profileLastName,
      userName: store.profileUserName,
      email: store.profileEmail,
    });

    function saveChanges() {
      state.loading = true;
      setDoc(doc(db, "users", store.profileId), {
        firstName: state.firstName,
        lastName: state.lastName,
        userName: state.userName,
        email: state.email,
      })
        .then(() => {
          state.loading = false;
          state.msgModal = "User Updated";
          state.activeModal = true;
          store.getCurrentUser();
        })
        .catch(() => {
          state.msgModal = err.message;
          state.loading = false;
          state.activeModal = true;
        });
    }

    return { state, store, saveChanges };
  },
};
</script>

<style>
</style>