//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
  apiKey: "AIzaSyCLLxeIesrnUkrO81vPuxivL6sZZJb3A08",
  authDomain: "kwitter-19afd.firebaseapp.com",
  databaseURL: "https://kwitter-19afd-default-rtdb.firebaseio.com",
  projectId: "kwitter-19afd",
  storageBucket: "kwitter-19afd.appspot.com",
  messagingSenderId: "682342181339",
  appId: "1:682342181339:web:d99cd4fa45e37b00815ffe",
  measurementId: "G-QEJ3P3D6QM",
};
// Initialize Firebase
function getData() {
  firebase
    .database()
    .ref("/")
    .on("value", function (snapshot) {
      document.getElementById("output").innerHTML = "";
      snapshot.forEach(function (childSnapshot) {
        childKey = childSnapshot.key;
        Room_names = childKey;
        //Start code  
        row =
        "<div class='room_name' id=" +
        Room_names +
        " onclick='redirectToRoomName(x)' >#" +
        Room_names +
        "</div><hr>";
      document.getElementById("output").innerHTML += row;
        //End code
      });
    });
}
//sgetData();

function logout() {
  localStorage.removeItem("username");
  window.location = "index.html";
}
var username = localStorage.getItem("username");
document.getElementById("name").innerHTML = "Welcome " + username;
function addroom() {
  var roomname = document.getElementById("input").value;
  localStorage.setItem("roomname", roomname);
  firebase.database().ref("/").child(roomname).update({
      purpose: "adding room name",
    });
    window.location="kwitter_page.html"
}
