<template>
  <footer
    class="
      w-full
      h-40
      mt-auto
      p-6
      bg-gray-900
      flex flex-col
      justify-center
      items-center
      md:flex-row md:justify-between
    "
  >
    <div class="md:flex">
      <div class="flex flex-col items-center">
        <h2 class="pb-3 text-white text-2xl text-center md:text-left">
          FireBlogs
        </h2>
        <div id="social-media" class="flex pb-3 gap-2">
          <img
            src="../assets/Icons/youtube-brands.svg"
            alt="youtube's icon"
            class="w-5 h-5 invert"
          />
          <img
            src="../assets/Icons/twitter-brands.svg"
            alt="twitter'a icon"
            class="w-5 h-5 invert"
          />
          <img
            src="../assets/Icons/instagram-brands.svg"
            alt="instagram's icon"
            class="w-5 h-5 invert"
          />
          <img
            src="../assets/Icons/linkedin-brands.svg"
            alt="linkedin's icon"
            class="w-5 h-5 invert"
          />
        </div>
      </div>
      <div>
        <ul class="flex md:flex-col px-10">
          <router-link to="#" class="p-1 uppercase text-sm text-white"
            >Home</router-link
          >
          <router-link to="#" class="p-1 uppercase text-sm text-white"
            >Blogs</router-link
          >
          <router-link to="#" class="p-1 uppercase text-sm text-white"
            >Login/Register</router-link
          >
        </ul>
      </div>
    </div>
    <p class="p-3 text-white text-xs">Copyright 2021 All Rights Reserved</p>
  </footer>
</template>

<script>
export default {};
</script>

<style>
</style>