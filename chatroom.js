
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyBIzhv_HDkVgjOd3_6Ntl4SlUuM4JwLgfI",
  authDomain: "chat-app-62039.firebaseapp.com",
  databaseURL: "https://chat-app-62039-default-rtdb.firebaseio.com",
  projectId: "chat-app-62039",
  storageBucket: "chat-app-62039.appspot.com",
  messagingSenderId: "131036443905",
  appId: "1:131036443905:web:3b386a429ef3b4969a5700"
    };
    
    // Initialize Firebase
   firebase.initializeApp(firebaseConfig);

   user_name=localStorage.getItem("user_name");

   document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";

   function addroom(){
         room_name=document.getElementById("room_name").value;
          firebase.database().ref("/").child(room_name).update({
                purpose:"adding room name"
          });
          localStorage.setItem("room_name",room_name);
          window.location="chat_page.html";

   }


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
     console.log("Room Names -"+Room_names);
     row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
     document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("roomname",name);
      window.location="chat_page.html";
}
 
function logout(){
localStorage.removeItem("user_name");
localStorage.removeItem("roomname");
window.location="index.html";
}