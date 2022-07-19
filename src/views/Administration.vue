<template>
  <div
    class="
      w-full
      h-full
      flex flex-col
      justify-center
      items-center
      my-auto
      gap-5
    "
  >
    <h2 class="text-2xl">Adminstration</h2>
    <article
      class="
        w-[80%]
        max-w-[520px]
        rounded-md
        bg-gray-300
        flex flex-col
        justify-center
        items-center
        py-7
        gap-3
      "
    >
      <h2 class="text-2xl">Add Admin</h2>
      <div class="w-[90%] mb-4">
        <input
          class="w-full px-3 py-1 bg-gray-100 rounded-md"
          placeholder="Enter user email"
        />
      </div>
      <button
        class="
          px-6
          py-2
          bg-slate-800
          text-white text-sm
          rounded-3xl
          hover:scale-110
          active:bg-gray-400 active:text-black
          font-semibold
        "
      >
        SUBMIT
      </button>
    </article>
  </div>
</template>

<script>
export default {
  name: "Administration",
};
</script>

<style>
</style>