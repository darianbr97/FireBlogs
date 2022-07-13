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
            v-for="(post, index) in state.sampleBlogCards"
            :post="post"
            :key="index"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BlogPost from "../components/BlogPost.vue";
import { reactive } from "@vue/reactivity";
import BlogCard from "../components/BlogCard.vue";
export default {
  name: "Home",
  components: { BlogPost, BlogCard },
  setup() {
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
      sampleBlogCards: [
        {
          blogTitle: "Blog Card #1",
          blogCoverPhoto: "stock-1",
          blogDate: "May 1, 2021",
        },
        {
          blogTitle: "Blog Card #2",
          blogCoverPhoto: "stock-2",
          blogDate: "May 1, 2021",
        },
        {
          blogTitle: "Blog Card #3",
          blogCoverPhoto: "stock-3",
          blogDate: "May 1, 2021",
        },
        {
          blogTitle: "Blog Card #4",
          blogCoverPhoto: "stock-4",
          blogDate: "May 1, 2021",
        },
      ],
    });

    return { state };
  },
};
</script>

<style>
</style>