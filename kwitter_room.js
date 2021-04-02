
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
//sgetData();



function logout(){
     localStorage.removeItem("username");
      window.location="index.html";
}
var username=localStorage.getItem("username");
document.getElementById("name").innerHTML="Welcome "+username;
function addroom() {
 var roomname=document.getElementById("input").value;
 localStorage.setItem("roomname",roomname)
}