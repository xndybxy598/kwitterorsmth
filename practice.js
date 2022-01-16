var firebaseConfig = {
    apiKey: "AIzaSyBsoAjAt-CZE_vfHfwnZNmWBWGVK6qK5gU",
    authDomain: "kwitter-test-14df4.firebaseapp.com",
    databaseURL: "https://kwitter-test-14df4-default-rtdb.firebaseio.com",
    projectId: "kwitter-test-14df4",
    storageBucket: "kwitter-test-14df4.appspot.com",
    messagingSenderId: "359817861764",
    appId: "1:359817861764:web:9293a11665be76762680d1"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS

function addUser(){
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
}