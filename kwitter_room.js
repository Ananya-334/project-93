
//ADD YOUR FIREBASE LINKS HERE
  // Your web app's Firebase configuration
  var firebaseConfig = {
      apiKey: "AIzaSyAlo7qeLDCWfEXpSmFO-lYreMDcdyFZLYk",
      authDomain: "twitter-fbe2f.firebaseapp.com",
      databaseURL: "https://twitter-fbe2f-default-rtdb.firebaseio.com",
      projectId: "twitter-fbe2f",
      storageBucket: "twitter-fbe2f.appspot.com",
      messagingSenderId: "839357188751",
      appId: "1:839357188751:web:94099da45d3a0e7d047efa"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
