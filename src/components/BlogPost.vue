<template>
  <div
    class="
      w-full
      grid grid-cols-1 grid-rows-2
      md:grid-cols-3 md:grid-rows-1
      items-center
    "
    :class="onDesktop ? 'blog-order' : ''"
  >
    <div
      class="
        introduction-blog
        w-full
        h-full
        flex
        justify-center
        items-center
        row-start-2 row-end-3
        md:row-auto
      "
    >
      <div
        class="w-[50%] h-[50%] flex flex-col justify-center items-center gap-4"
      >
        <h2 class="text-4xl">{{ post.title }}</h2>
        <p>{{ post.blogHTML }}</p>
        <router-link
          v-if="post.welcomeScreen"
          to="#"
          class="flex items-center gap-2"
          >Login/Register
          <img
            src="../assets/Icons/arrow-right-light.svg"
            alt="arrow icon"
            class="w-4 h-4 invert"
        /></router-link>
        <router-link v-else to="#" class="flex items-center gap-2"
          >View The Post
          <img
            src="../assets/Icons/arrow-right-light.svg"
            alt="arrow icon"
            class="w-4 h-4"
        /></router-link>
      </div>
    </div>
    <div class="image-blog row-start-1 row-end-2 md:col-span-2 md:row-auto">
      <img :src="putImage" alt="cover photo" class="w-full h-auto bg-cover" />
    </div>
  </div>
</template>

<script>
import { useStore } from "../stores/store";
export default {
  name: "blogPost",
  props: ["post"],
  setup() {
    const store = useStore();

    return { store };
  },
  computed: {
    putImage({ post }) {
      return `./src/assets/blogPhotos/${post.blogCoverPhoto}.jpg`;
    },
    onDesktop() {
      return this.store.windowWidth >= 768;
    },
  },
};
</script>

<style>
.blog-order:nth-child(even) .introduction-blog {
  grid-column-start: 3;
  grid-column-end: 4;
}
.blog-order:nth-child(even) .image-blog {
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 2;
}
</style>