import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase.config";


let InitFirebase = ()=>{
    initializeApp(firebaseConfig);
}

export default InitFirebase;