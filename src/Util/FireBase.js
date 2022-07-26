import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, onValue } from "firebase/database";
import { getAuth } from "firebase/auth";


export const firebaseConfig = {
    apiKey: process.env.REACT_APP_apiKey,
    authDomain: process.env.REACT_APP_authDomain,
    databaseURL: process.env.REACT_APP_databaseURL,
    projectId: process.env.REACT_APP_projectId,
    storageBucket: process.env.REACT_APP_storageBucket,
    messagingSenderId: process.env.REACT_APP_messagingSenderId,
    appId: process.env.REACT_APP_appId,
    measurementId: process.env.REACT_APP_measurementId
  };

const app = initializeApp(firebaseConfig);
const db=getDatabase();
export const reader=ref(db);
onValue(reader, (snapshot)=>{
    console.log(snapshot.val())
})
export const auth = getAuth(app);

// export const anonymousSignIn = () => {
//   signInAnonymously(auth)
//     .then((result) => {
//       const uid = result.user.uid;

//       localStorage.setItem("uid", uid);

//       alert(`Hello Stranger ${uid}`);
//     })
//     .catch((error) => {
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       console.log(errorMessage);
//       // ...
//     });
// };



// export const writeUserData = (userId, name, email) => {
//   const db = getDatabase(app);
//   set(ref(db, "users/" + userId), {
//     username: name,
//     email: email,
//     highScore: 0,
//   });
// };

// export const readUserData = (userId) => {
//   const db = getDatabase(app);
//   const userRef = ref(db, "users/" + userId + "/username");

//   onValue(userRef, (snapshot) => {
//     const data = snapshot.val();
//     console.log(data);
//     return data;
//   });
// };
