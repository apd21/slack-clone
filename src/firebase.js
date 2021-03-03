import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDAg8_GuQ2rt2CFouHgohrV-u6Bz0m0RxU",
    authDomain: "slack-839cf.firebaseapp.com",
    projectId: "slack-839cf",
    storageBucket: "slack-839cf.appspot.com",
    messagingSenderId: "919361681488",
    appId: "1:919361681488:web:2e87d32bd81311867cb955",
    measurementId: "G-11RB2BYC06"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider }
  export default db;
 
