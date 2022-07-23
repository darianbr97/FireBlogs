<template>
  <router-link
    to="#"
    class="
      bg-slate-800
      px-3
      py-2
      rounded-3xl
      text-white text-xs text-center
      font-semibold
      cursor-default
      shadow-lg
      hover:opacity-90
      active:bg-gray-300 active:text-black active:opacity-100
    "
    >{{ label }}
  </router-link>
</template>

<script>
export default {
  props: ["label"],
};
</script>

<style>
</style>