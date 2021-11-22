import firebase from 'firebase'
require("@firebase/firestore")


// Initialize Firebase

  
    const firebaseConfig = {
      apiKey: "AIzaSyD4Bl01ZOhb15l_E4yvkfFhjfKyqZJz31E",
      authDomain: "wily-96b11.firebaseapp.com",
      projectId: "wily-96b11",
      storageBucket: "wily-96b11.appspot.com",
      messagingSenderId: "1006853199865",
      appId: "1:1006853199865:web:54843bcd3305175ab2cf28"
    
  };


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default  firebase.firestore()
