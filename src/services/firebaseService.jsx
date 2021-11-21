import firebase from "firebase";
import 'firebase/firestore'



const firebaseConfig = {
    apiKey: "AIzaSyBwrZy7TgqKgZehoaDodiQB51FMFdK5hsw",
    authDomain: "proyecto-reactjscoder.firebaseapp.com",
    projectId: "proyecto-reactjscoder",
    storageBucket: "proyecto-reactjscoder.appspot.com",
    messagingSenderId: "1004169254005",
    appId: "1:1004169254005:web:46e666953d6d0f5360143c"
};
  
const app = firebase.initializeApp(firebaseConfig);

export function getFirebase(){
    return app
}
export function getFirestore(){
    return firebase.firestore(app)
}