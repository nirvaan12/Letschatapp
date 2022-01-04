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
   room_name=localStorage.getItem("roomname");

   function send(){
         msg=document.getElementById("msg").value;
         firebase.database().ref(room_name).push({
               name:user_name,
               message:msg,
               like:0
         });
         document.getElementById("msg").value="";
   }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
namee=message_data["name"];
message=message_data["message"];
like=message_data["like"];
name_with_tag="<h4>"+namee+"<img class='user_tick' src='tick.png'> </h4>";
message_with_tag="<h4 class='message_h4'>"+message+"</h4>";
like_button="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updatelike(this.id)'>";
span_with_tag="<span class='glyphicon glyphicon-thumbs-up'>Like : "+like+"</span></button><hr>";
row= name_with_tag+message_with_tag+like_button+span_with_tag;
document.getElementById("output").innerHTML+=row;

//End code
      } });  }); }
getData();

function updatelike(message_id){
button_id= message_id;
likes=document.getElementById(button_id).value;
updatedlikes=Number(likes)+1;
firebase.database().ref(room_name).child(message_id).update({
      like:updatedlikes
});

}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("roomname");
      window.location="index.html";
}