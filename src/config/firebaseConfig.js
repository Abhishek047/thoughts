import * as firebase from 'firebase/app';
import 'firebase/storage'
import 'firebase/firestore'
import 'firebase/analytics'

// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyAxHcadlStgsZNMcoB9cR0WTWYsgtIzKqU",
    authDomain: "app-thoughts.firebaseapp.com",
    databaseURL: "https://app-thoughts.firebaseio.com",
    projectId: "app-thoughts",
    storageBucket: "app-thoughts.appspot.com",
    messagingSenderId: "402023576952",
    appId: "1:402023576952:web:db2178b4530b355ea6848d",
    measurementId: "G-J20JYB90E2"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

const firebaseStore = firebase.storage();
const firebaseFireStore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { firebaseFireStore, firebaseStore, timestamp };
