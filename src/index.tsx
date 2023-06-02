import React from "react"
import { createRoot } from "react-dom/client"
// import { initializeApp } from "firebase/app"
import { 
  Kingmakers,
  // onUpdate,
} from "./Kingmakers"
// import {store} from "./Kingmakers/redux/store"
// import { collection, query, orderBy, limit, onSnapshot, getFirestore } from "firebase/firestore"
// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGEBUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGINGSENDERID,
//   appId: process.env.REACT_APP_FIREBASE_APPID,
// }
// const app = initializeApp(firebaseConfig)
// if(!app) console.warn("config error")
// const db = getFirestore(app)
// const sRef = collection(db, "kingmakers");
// const q = query(sRef, orderBy("serverTime", "desc"), limit(100));
// const unsubscribe = onSnapshot(q, (querySnapshot) => {
//   const data: Array<any> = []
//   querySnapshot.forEach((doc) => {
//     data.push(doc.data())
//   })
//   // @ts-ignore
//   store.dispatch(onUpdate(data))
// })
// if (!unsubscribe) console.warn("firebase error")

const container = document.getElementById("kingmakers")!
const root = createRoot(container)

root.render(
  <React.StrictMode>
    <Kingmakers />
  </React.StrictMode>
)
