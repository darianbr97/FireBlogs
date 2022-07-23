import { initializeApp } from "firebase/app";
import "firebase/firestore";
import { getFirestore } from 'firebase/firestore/lite';
import { getStorage, ref, uploadBytes } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBFJfTmFRv01lTIBAm-HQYLm5TmqP0E2WQ",
    authDomain: "blogsonfire-81ab1.firebaseapp.com",
    projectId: "blogsonfire-81ab1",
    storageBucket: "blogsonfire-81ab1.appspot.com",
    messagingSenderId: "970179849949",
    appId: "1:970179849949:web:82dd983b9386336936f534"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const uploadImage = (imageName, file) => {
    const storage = getStorage();
    const storageRef = ref(storage, 'some-child');

    // 'file' comes from the Blob or File API
    uploadBytes(storageRef, file).then((snapshot) => {
    console.log('Uploaded a blob or file!');
    });
}
// const timestamp = firestore.FieldValue.serverTimestamp;

export { db, uploadImage };
// export { timestamp };
// export default firestore();
