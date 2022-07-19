<template>
  <div
    class="
      absolute
      w-full
      h-full
      z-50
      top-0
      flex
      justify-center
      items-center
      bg-black/75
    "
  >
    <div
      class="
        w-[250px]
        min-h-[140px]
        bg-white
        shadow
        rounded-md
        flex flex-col
        justify-between
        items-center
        p-6
      "
    >
      <p class="text-center text-lg font-semibold">{{ msg }}</p>
      <button
        @click="closeModal"
        class="
          py-3
          px-5
          bg-slate-800
          text-white
          font-semibold
          rounded-3xl
          shadow-md
          hover:scale-110
          active:bg-gray-300 active:text-black
        "
      >
        CLOSE
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["msg"],
  setup(_, { emit }) {
    const closeModal = () => emit("close-modal");

    return { closeModal };
  },
};
</script>

<style>
</style>