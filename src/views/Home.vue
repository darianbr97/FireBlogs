<template>
	<div></div>
</template>

<script>
import { reactive } from '@vue/reactivity'
export default {
    setup() {
        const state = reactive({
            welcomeScreen: {
                title: "Welcome!",
                blogPost: "Weekly blog articles with all programing including HTML, CSS, JavaScript and more. Register today to never miss...",
                welcomeScreen:true,
                photo: "coding",
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
                    blogCoverPhoto: "beautiful-stories",
                },
            ]
        })

        return { state }
    }
}
</script>

<style>
</style>