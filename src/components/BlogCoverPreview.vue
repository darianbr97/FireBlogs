<template>
  <div
    class="
      absolute
      z-50
      w-screen
      h-screen
      -top-[56px]
      bg-black/75
      flex
      justify-center
      items-center
    "
  >
    <div
      class="
        relative
        w-[80%]
        h-[300px]
        max-w-[400px]
        bg-white
        rounded-lg
        p-3
        flex flex-col
        gap-1
      "
    >
      <div class="w-full flex justify-end">
        <img
          @click="closeWindow"
          src="../assets/Icons/times-circle-light.svg"
          alt="close icon"
          class="w-4 h-4 hover:scale-125"
        />
      </div>
      <div class="w-full h-[255px] p-2 flex justify-center items-center">
        <img
          :src="photo"
          alt="cover photo"
          class="w-full h-full bg-contain rounded-md"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BlogCoverPreview",
  props: {
    photo: { type: String },
  },
  setup(_, { emit }) {
    const closeWindow = () => emit("close-window");

    return { closeWindow };
  },
};
</script>

<style>
</style>