<template>
  <div class="relative w-full h-full py-3 flex justify-center">
    <BlogCoverPreview
      v-if="state.closeCoverPreview"
      @close-window="state.closeCoverPreview = false"
      :photo="store.blogPhotoFileURL"
    />
    <div class="w-[80%] max-w-[1000px] h-full flex flex-col gap-3">
      <p
        class="text-red-500 font-semibold"
        :class="{ invisible: !state.error }"
      >
        Error: {{ state.errorMsg }}
      </p>
      <div class="w-full flex flex-col md:flex-row gap-2">
        <input
          type="text"
          name="title"
          class="outline-none border-b-2 border-b-slate-800"
          v-model="store.blogTitle"
          placeholder="Enter Blog Title"
        />
        <label
          for="file"
          class="
            bg-slate-800
            px-3
            py-2
            rounded-3xl
            text-white text-xs text-center
            font-semibold
            hover:opacity-90
            active:bg-gray-300 active:text-black active:opacity-100
          "
          >UPLOAD COVER PHOTO</label
        >
        <input
          type="file"
          name="file"
          ref="blogPhoto"
          id="file"
          accept=".png, .jpg, .jpeg"
          @change="setFile"
          class="hidden"
        />
        <Button
          @click="state.closeCoverPreview = true"
          :label="'PREVIEW PHOTO'"
          :class="{
            'opacity-50 cursor-not-allowed pointer-events-none':
              !store.blogPhotoFileURL,
          }"
        />
        <div class="w-ful h-ful flex items-center">
          <p class="text-xs font-semibold">File Chosen: {{ fileName }}</p>
        </div>
      </div>
      <div>
        <QuillEditor
          theme="snow"
          class="editor"
          Type="String"
          toolbar="full"
          v-model:content="store.blogHTML"
          contentType="html"
          @textChange="imageHandler"
        />
      </div>
      <div class="w-full flex justify-start gap-3">
        <Button :label="'PUBLISH BLOG'" />
        <Link :label="'POST PREVIEW'" />
      </div>
    </div>
  </div>
</template>

<script>
import Button from "../components/Button.vue";
import Link from "../components/Link.vue";
import BlogCoverPreview from "../components/BlogCoverPreview.vue";
import { reactive, ref } from "@vue/reactivity";
import { useStore } from "../stores/store";
import { uploadImage } from "../firebase/firebaseInit";

export default {
  name: "CreatePost",
  components: { Button, Link, BlogCoverPreview },
  setup() {
    const store = useStore();
    const blogPhoto = ref(null);
    const state = reactive({
      error: false,
      errorMsg: "",
      file: null,
      closeCoverPreview: false,
    });

    const setFile = () => {
      console.log(blogPhoto);
      if (blogPhoto.value.files.length !== 0) {
        state.file = blogPhoto.value.files[0];
        store.blogPhotoName = state.file.name;
        store.blogPhotoFileURL = URL.createObjectURL(state.file);
      }
    };

    const imageHandler = (delta) => {
      //   console.log(delta);
      const imageAdded = delta.delta.ops.find((ops) => ops.insert);
      if (imageAdded.insert.image) {
        uploadImage(store.blogPhotoName, imageAdded.insert.image);

        console.log("imagen cargada", imageAdded);
      }
    };

    return { state, blogPhoto, store, setFile, imageHandler };
  },
  computed: {
    fileName() {
      if (this.state.file) {
        if (this.state.file.name.length > 30)
          return this.state.file.name.slice(0, 30) + "...";
        else return this.state.file.name;
      }
    },
  },
};
</script>

<style>
.ql-container {
  height: 50vh;
}
.editor .ql-editor {
  overflow-y: scroll;
  border: none;
}
</style>