<template>
  <div class="absolute w-full flex justify-end">
    <div class="w-[104px] flex items-center justify-between mr-8">
      <span class="font-semibold">Edit Post</span>
      <div class="w-8 h-4 shadow rounded-3xl bg-white">
        <div
          @click="toggleEdit"
          class="
            w-4
            h-4
            bg-gray-900
            rounded-full
            border-2 border-gray-300
            cursor-pointer
            transition-all
            hover:shadow hover:border-4
          "
          :class="editPost ? 'translate-x-4' : ''"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
import { useStore } from "../stores/store";
export default {
  setup() {
    const store = useStore();

    const toggleEdit = () => (store.editPost = !store.editPost);

    return { store, toggleEdit };
  },
  computed: {
    editPost() {
      return this.store.editPost;
    },
  },
};
</script>

<style>
</style>