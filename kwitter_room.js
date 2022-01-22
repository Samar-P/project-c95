firebaseConfig = {
  apiKey: "AIzaSyBuVMINQ1MGEPIei93zMMHUdCqUJgkayxw",
  authDomain: "projectc93letschatapp.firebaseapp.com",
  databaseURL: "https://projectc93letschatapp-default-rtdb.firebaseio.com",
  projectId: "projectc93letschatapp",
  storageBucket: "projectc93letschatapp.appspot.com",
  messagingSenderId: "120800523648", 
  appId: "1:120800523648:web:6af821f289b739a563fd65"
};

   // Initialize Firebase
   firebase.initializeApp(firebaseConfig);

   user_name = localStorage.getItem("Username");
   document.getElementById("welcome_user_name").innerHTML = "Hi there "+user_name+"!";

   function addroom() {
          room_name = document.getElementById("room_name").value;

          firebase.database().ref("/").child(room_name).update({
               purpose: "Adding Room Name"
         });
 
         localStorage.setItem("Roomname",room_name);
     
         window.location = "kwitter_page.html";
   }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code
         console.log("room_name - " + Room_names);
         row = "<div class='room_name' id="+Room_names+" onclick='redirectToroomname(this.id)'>#"+Room_names+"</div><hr>";
         document.getElementById("output").innerHTML += row;
   //End code
   });});}
getData();
function redirectToroomname(name){
   console.log(name);
   localStorage.setItem("Roomname",name);
   window.location = "kwitter_page.html";
}
function logout() {
   localStorage.removeItem("Username");
   localStorage.removeItem("Roomname");
   window.location = "index.html";
}