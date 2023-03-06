// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQVikUWA1QvVvi3FBTYpe-g7CPsSXnJK4",
  authDomain: "book-shop-8a8b7.firebaseapp.com",
  projectId: "book-shop-8a8b7",
  storageBucket: "book-shop-8a8b7.appspot.com",
  messagingSenderId: "547177433489",
  appId: "1:547177433489:web:1e82b09a110c7fe488f230"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;