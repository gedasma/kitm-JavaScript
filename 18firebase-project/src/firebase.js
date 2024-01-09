import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore'


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB1591CgHnnJ-Dcxg-6PZPbIdXxu3ImSxw",
  authDomain: "js-timetable.firebaseapp.com",
  projectId: "js-timetable",
  storageBucket: "js-timetable.appspot.com",
  messagingSenderId: "106123333596",
  appId: "1:106123333596:web:fe5ab2d35314bd0b860919"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export default firebase

export{
  app
}