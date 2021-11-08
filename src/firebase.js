import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
    apiKey: "AIzaSyBR3xE85TqqGLRUdwNrSMeaU10ex0kaDSY",
    authDomain: "twitterapp-eddc5.firebaseapp.com",
    projectId: "twitterapp-eddc5",
    storageBucket: "twitterapp-eddc5.appspot.com",
    messagingSenderId: "851383658358",
    appId: "1:851383658358:web:9cbf1c3f0dcdbbd0a3fc57",
    measurementId: "G-0E27WHC2SV"
};

let app = initializeApp(firebaseConfig);

let firestore = getFirestore(app);

export default firestore;