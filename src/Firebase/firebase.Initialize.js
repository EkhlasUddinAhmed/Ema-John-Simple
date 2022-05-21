import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.Config";

const firebaseInitialize =()=>{
    initializeApp(firebaseConfig);

}

export default firebaseInitialize;