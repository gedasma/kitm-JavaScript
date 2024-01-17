import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore'


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAUXtkxIrZmB_J0llmSDw24hrCO_muT7Ro",
    authDomain: "imagegallery-16cc2.firebaseapp.com",
    projectId: "imagegallery-16cc2",
    storageBucket: "imagegallery-16cc2.appspot.com",
    messagingSenderId: "789641485309",
    appId: "1:789641485309:web:f1b9a9883eb10f782c9794"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export default firebase

export{
  app
}