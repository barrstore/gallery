import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyCsLqalciPWANOfh7_-gm7WSQUjiTJCv_4",
  authDomain: "circular-light-416212.firebaseapp.com",
  databaseURL: "https://circular-light-416212.firebaseio.com",
  projectId: "circular-light-416212",
  storageBucket: "circular-light-416212.appspot.com",
  messagingSenderId: "443909519735",
  appId: "1:443909519735:web:20218a1d4f09af91428972"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
