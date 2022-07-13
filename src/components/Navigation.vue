<template>
	<header
		class="
			relative
			w-full
			h-14
			flex
			items-center
			justify-center
			px-4
			shadow
		"
	>
		<nav class="w-full flex justify-between">
			<div class="flex items-center">
				<router-link
					:to="{ name: 'home' }"
					class="text-2xl font-semibold"
					>FireBlogs</router-link
				>
			</div>
			<div v-if="!state.mobileMode">
				<ul class="flex items-center">
					<router-link
						to="#"
						class="p-3 uppercase"
						style="text-shadow: 0px 1px 0.5px gray"
						>Home</router-link
					>
					<router-link
						to="#"
						class="p-3 uppercase"
						style="text-shadow: 0px 1px 0.5px gray"
						>Blogs</router-link
					>
					<router-link
						to="#"
						class="p-3 uppercase"
						style="text-shadow: 0px 1px 0.5px gray"
						>Create Post</router-link
					>
					<router-link
						to="#"
						class="p-3 uppercase"
						style="text-shadow: 0px 1px 0.5px gray"
						>Login/Register</router-link
					>
				</ul>
			</div>
		</nav>
		<img
			v-if="state.mobileMode"
			@click="toggleMobileNav"
			src="../assets/Icons/bars-regular.svg"
			alt="bar menu"
			class="w-6 h-6"
		/>
		<transition name="mobile-nav">
			<ul
				v-if="state.mobileNav"
				id="mobile-links"
				class="
					absolute
					top-0
					left-0
					w-52
					h-screen
					flex flex-col
					p-4
					bg-gray-800
				"
			>
				<router-link to="#" class="text-white p-2">Home</router-link>
				<router-link to="#" class="text-white p-2">Blogs</router-link>
				<router-link to="#" class="text-white p-2"
					>Create Post</router-link
				>
				<router-link to="#" class="text-white p-2"
					>Login/Register</router-link
				>
			</ul>
		</transition>
	</header>
</template>

<script>
import { reactive } from '@vue/reactivity'
import { onMounted } from '@vue/runtime-core'
export default {
    setup() {
        const state = reactive({
            mobileMode: null,
            mobileNav: null,
            windowWidth: null,
        })

        onMounted(() => {
            window.addEventListener('resize',checkScreen)
            checkScreen();
        })

        function checkScreen() {
            state.windowWidth = window.innerWidth;
            if(state.windowWidth <= 750) {
                state.mobileMode = true;
                return;
            }
            state.mobileMode = false;
            state.mobileNav = false;
        }

        function toggleMobileNav() {
            state.mobileNav = !state.mobileNav
        }

        return {state, toggleMobileNav};
    }
}
</script>

<style>
	.mobile-nav-enter-active,
	.mobile-nav-leave-active {
		transition: all 0.5s ease-in-out;
	}

	.mobile-nav-enter-from {
		transform: translateX(-100%);
	}
	.mobile-nav-enter-to {
		transform: translateX(0%);
	}

	.mobile-nav-leave-from {
		transform: translateX(0%);
	}
	.mobile-nav-leave-to {
		transform: translateX(-100%);
	}
</style>