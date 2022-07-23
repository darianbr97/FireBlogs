import { getAuth } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore/lite";
import { defineStore } from "pinia";
import { db } from "../firebase/firebaseInit";

export const useStore = defineStore({
  id: "store",
  state: () => ({
    windowWidth: 0,
    editPost: false,
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
    blogHTML: "Write your blog title here...",
    blogTitle: "",
    blogPhotoName: "",
    blogPhotoFileURL: null,
    blogPhotoPreview: null,
    user: null,
    profileEmail: null,
    profileFirstName: null,
    profileLastName: null,
    profileUserName: null,
    profileId: null,
    profileInitials: null,
  }),
  actions: {
    async getCurrentUser () {
      const userData = await doc(db, "users", getAuth().currentUser.uid);
      const dbResults = await getDoc(userData);
      this.profileId = dbResults.id;
      this.profileEmail = dbResults.data().email;
      this.profileFirstName = dbResults.data().firstName;
      this.profileLastName = dbResults.data().lastName;
      this.profileUserName = dbResults.data().userName;
      this.profileInitials = this.profileFirstName.match(/(\b\S)/g).join('') + this.profileLastName.match(/(\b\S)/g).join('');
      console.log(dbResults)
    }
  }
});
