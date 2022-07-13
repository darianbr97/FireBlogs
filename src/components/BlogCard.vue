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
    <div class="absolute top-1 right-1 flex gap-3">
      <div
        class="p-2 bg-white rounded-full shadow cursor-pointer hover:scale-110"
      >
        <img
          src="../assets/Icons/edit-regular.svg"
          alt="edit icon"
          class="w-4 h-4"
        />
      </div>
      <div
        class="p-2 bg-white rounded-full shadow cursor-pointer hover:scale-110"
        hover:invert
      >
        <img
          src="../assets/Icons/trash-regular.svg"
          alt="edit icon"
          class="w-4 h-4"
        />
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
        class="absolute bottom-4 flex items-center gap-2 text-xs font-semibold"
        >VIEW THE POST
        <img
          src="../assets/Icons/arrow-right-light.svg"
          alt="arrow icon"
          class="w-4 h-4 rounded-t-md"
      /></router-link>
    </div>
  </article>
</template>

<script>
export default {
  props: ["post"],
  computed: {
    picture({ post }) {
      return `./src/assets/blogCards/${post.blogCoverPhoto}.jpg`;
    },
  },
};
</script>

<style>
</style>