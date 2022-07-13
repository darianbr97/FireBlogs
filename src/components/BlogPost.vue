<template>
  <div
    class="
      w-full
      flex flex-col
      items-start
      md:grid md:grid-cols-3 md:grid-rows-1 md:items-center
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
        order-2
        md:order-none
        py-6
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
          class="
            flex
            items-center
            gap-2
            py-2
            px-4
            rounded-3xl
            bg-slate-50
            text-black
            font-semibold
            hover:scale-110
          "
          >Login/Register
          <img
            src="../assets/Icons/arrow-right-light.svg"
            alt="arrow icon"
            class="w-3 h-3"
        /></router-link>
        <router-link
          v-else
          to="#"
          class="
            flex
            items-center
            gap-2
            py-2
            px-4
            rounded-3xl
            bg-[#303030]
            text-white
            font-semibold
            hover:scale-110
          "
          >View The Post
          <img
            src="../assets/Icons/arrow-right-light.svg"
            alt="arrow icon"
            class="w-3 h-3 invert"
        /></router-link>
      </div>
    </div>
    <div
      class="w-full image-blog order-1 md:order-none md:col-span-2 md:row-auto"
    >
      <img :src="putImage" alt="cover photo" class="w-full h-auto" />
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