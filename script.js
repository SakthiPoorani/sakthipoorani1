var firebaseConfig = {
    apiKey: "AIzaSyC-6NwwedJPe7pLPzAVu2gno3sUgFFjJio",
    authDomain: "sports-4729d.firebaseapp.com",
    projectId: "sports-4729d",
    storageBucket: "sports-4729d.appspot.com",
    messagingSenderId: "486439438602",
    appId: "1:486439438602:web:695df070fcc8b046ba12f3"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  var UserInputsRef=firebase.database().ref('UserInputs')
  document.getElementById('ipl').addEventListener('submit',submitForm);