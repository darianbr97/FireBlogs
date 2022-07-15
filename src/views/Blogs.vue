<template>
  <div class="w-full h-full bg-gray-200 flex flex-col items-center grow py-10">
    <div class="relative max-w-6x">
      <ToggleEditBtn />
      <div class="w-full px-8">
        <div class="w-full flex flex-wrap justify-center gap-4 py-10">
          <BlogCard
            v-for="(post, index) in sampleBlogCards"
            :post="post"
            :key="index"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { onUnmounted } from "@vue/runtime-core";
import BlogCard from "../components/BlogCard.vue";
import ToggleEditBtn from "../components/ToggleEditBtn.vue";
import { useStore } from "../stores/store";
export default {
  name: "blogs",
  components: { BlogCard, ToggleEditBtn },
  setup() {
    const store = useStore();

    onUnmounted(() => (store.editPost = false));

    return { store };
  },
  computed: {
    sampleBlogCards() {
      return this.store.sampleBlogCards;
    },
  },
};
</script>

<style>
</style>