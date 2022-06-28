<template>
	<div class="blog-presentacion w-full grid grid-cols-3 items-center">
		<div
			class="
				introduction-blog
				w-full
				h-full
				flex
				justify-center
				items-center
			"
		>
			<div
				class="
					w-[50%]
					h-[50%]
					flex flex-col
					justify-center
					items-center
					gap-4
				"
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
						class="w-4 h-4"
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
		<div class="image-blog col-span-2">
			<img :src="putImage" alt="cover photo" class="w-full h-auto" />
		</div>
	</div>
</template>

<script>
export default {
    name: "blogPost",
    props: ["post"], 
    setup() {
    },
    computed: {
        putImage({post}) {
            return `./src/assets/blogPhotos/${post.blogCoverPhoto}.jpg`
        }
    }
}
</script>

<style>
	.blog-presentacion:nth-child(even) .introduction-blog {
		order: 2;
	}
	.blog-presentacion:nth-child(even) .image-blog {
		order: 1;
	}
</style>