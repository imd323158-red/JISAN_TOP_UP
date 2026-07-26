import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
getAuth,
signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {
apiKey: "তোমার apiKey",
authDomain: "তোমার authDomain",
projectId: "তোমার projectId",
storageBucket: "তোমার storageBucket",
messagingSenderId: "তোমার messagingSenderId",
appId: "তোমার appId"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

document
.getElementById("loginForm")
.addEventListener("submit", async(e)=>{

e.preventDefault();

const email =
document.getElementById("email").value;

const password =
document.getElementById("password").value;

try{

await signInWithEmailAndPassword(
auth,
email,
password
);

alert("✅ Login Successful");

window.location.href="index.html";

}catch(err){

alert(err.message);

}

});
