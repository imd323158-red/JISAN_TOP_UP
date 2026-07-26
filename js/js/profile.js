import { auth } from "../firebase-config.js";

import {
onAuthStateChanged,
signOut
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

onAuthStateChanged(auth,(user)=>{

if(user){

document.getElementById("email").innerText=user.email;

document.getElementById("uid").innerText="UID : "+user.uid;

}else{

window.location.href="login.html";

}

});

document.getElementById("logoutBtn").onclick=async()=>{

await signOut(auth);

localStorage.clear();

alert("Logout Successful");

window.location.href="login.html";

};
