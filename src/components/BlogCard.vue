<template>
  <article
    class="
      relative
      w-[235px]
      h-[270px]
      flex flex-col
      rounded-md
      shadow-md
      bg-white
      transition-all
      hover:-rotate-2 hover:shadow-xl
    "
  >
    <div v-show="editPost" class="absolute top-1 right-1 flex gap-3">
      <div
        class="
          w-8
          h-8
          bg-white
          rounded-full
          shadow
          cursor-pointer
          hover:bg-[#303030]
        "
      >
        <div
          class="w-full h-full flex justify-center items-center hover:invert"
        >
          <img
            src="../assets/Icons/edit-regular.svg"
            alt="edit icon"
            class="w-4 h-4"
          />
        </div>
      </div>
      <div
        class="
          w-8
          h-8
          bg-white
          rounded-full
          shadow
          cursor-pointer
          hover:bg-[#303030]
        "
      >
        <div
          class="w-full h-full flex justify-center items-center hover:invert"
        >
          <img
            src="../assets/Icons/trash-regular.svg"
            alt="edit icon"
            class="w-4 h-4"
          />
        </div>
      </div>
    </div>
    <img :src="picture" alt="blog picture" class="w-full h-auto rounded-t-md" />
    <div class="p-3">
      <div>
        <h4 class="text-xl font-bold mb-1">{{ post.blogTitle }}</h4>
        <p class="text-xs">{{ post.blogDate }}</p>
      </div>
      <router-link
        to="#"
        class="
          absolute
          bottom-4
          flex
          items-center
          gap-2
          text-xs
          font-semibold
          hover:scale-110
        "
        >VIEW THE POST
        <img
          src="../assets/Icons/arrow-right-light.svg"
          alt="arrow icon"
          class="w-3 h-3 rounded-t-md"
      /></router-link>
    </div>
  </article>
</template>

<script>
import { useStore } from "../stores/store";
export default {
  props: ["post"],
  setup() {
    const store = useStore();

    return { store };
  },
  computed: {
    picture({ post }) {
      return `./src/assets/blogCards/${post.blogCoverPhoto}.jpg`;
    },
    editPost() {
      return this.store.editPost;
    },
  },
};
</script>

<style>
</style>