var firebaseConfig = { 
  apiKey: "AIzaSyCnw-PNRHlfSEdDbjAXRKMhUuHKCPWSykg", 
  authDomain: "adv-c100clase-2faa8.firebaseapp.com", 
  databaseURL: "https://adv-c100clase-2faa8-default-rtdb.firebaseio.com",
  projectId: "adv-c100clase-2faa8", 
  storageBucket: "adv-c100clase-2faa8.appspot.com", 
  messagingSenderId: "166574670917", 
  appId: "1:166574670917:web:c6e0d1cc6e54b574d20f2c", 
  measurementId: "G-PDVQ0Z7ZSX" 
}; 
  
  firebase.initializeApp(firebaseConfig);

function addUser() {

  user_name = document.getElementById("user_name").value;

  localStorage.setItem("user_name", user_name);
  
    window.location = "kwitter_room.html";
}

