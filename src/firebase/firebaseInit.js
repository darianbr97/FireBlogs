import { initializeApp } from "firebase/app";
import "firebase/firestore";
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
    apiKey: "AIzaSyBn9o19KHrsf3UNcmAP9hzwm3sfgXva3SM",
    authDomain: "fireblogs-dbacb.firebaseapp.com",
    projectId: "fireblogs-dbacb",
    storageBucket: "fireblogs-dbacb.appspot.com",
    messagingSenderId: "522212790665",
    appId: "1:522212790665:web:cf2eb4e2a96fe4bedfd158",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
// const timestamp = firestore.FieldValue.serverTimestamp;

export { db };
// export { timestamp };
// export default firestore();
