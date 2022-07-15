<template>
  <div class="w-full">
    <BlogPost :post="state.welcomeScreen" class="bg-gray-700 text-white" />
    <BlogPost
      v-for="(post, index) in state.sampleBlogPost"
      :key="index"
      :post="post"
    />
    <div class="w-full flex justify-center py-16 bg-gray-200">
      <div class="flex flex-col items-center lg:items-start">
        <h2 class="text-2xl mb-2 pl-3">View More Recent Blogs</h2>
        <div class="w-full flex flex-wrap justify-center gap-4">
          <BlogCard
            v-for="(post, index) in sampleBlogCards"
            :post="post"
            :key="index"
          />
        </div>
      </div>
    </div>
    <div class="w-full p-10 flex flex-col justify-center items-center gap-5">
      <h1 class="text-center text-2xl">
        NEVER MISS A POST. REGISTER FOR YOUR FREE ACCOUNT TODAY!
      </h1>
      <router-link
        to="#"
        class="
          flex
          items-center
          gap-2
          bg-[#303030]
          py-2
          px-4
          rounded-3xl
          text-white text-xs
          font-semibold
          hover:scale-110
        "
        >REGISTER FOR FIREBLOGS
        <img
          src="../assets/Icons/arrow-right-light.svg"
          alt="edit icon"
          class="w-3 h-3 invert"
      /></router-link>
    </div>
  </div>
</template>

<script>
import BlogPost from "../components/BlogPost.vue";
import { reactive } from "@vue/reactivity";
import BlogCard from "../components/BlogCard.vue";
import { useStore } from "../stores/store";
export default {
  name: "home",
  components: { BlogPost, BlogCard },
  setup() {
    const store = useStore();
    const state = reactive({
      welcomeScreen: {
        title: "Welcome!",
        blogHTML:
          "Weekly blog articles with all programing including HTML, CSS, JavaScript and more. Register today to never miss...",
        blogCoverPhoto: "coding",
        welcomeScreen: true,
      },
      sampleBlogPost: [
        {
          title: "This is a Filler Title!",
          blogHTML: "This is a filler bog post title!",
          blogCoverPhoto: "beautiful-stories",
        },
        {
          title: "This is a Filler Title!",
          blogHTML: "This is a filler bog post title!",
          blogCoverPhoto: "designed-for-everyone",
        },
      ],
    });

    return { state, store };
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