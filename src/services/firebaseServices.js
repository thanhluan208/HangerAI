import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  FacebookAuthProvider,
} from "firebase/auth";

class firebaseService {
  constructor() {
    this.firebaseConfig = {
      apiKey: "AIzaSyAgSrUgahmkEY1UMfpWQEVVe56EDIuiq0A",
      authDomain: "fir-71712.firebaseapp.com",
      projectId: "fir-71712",
      storageBucket: "fir-71712.appspot.com",
      messagingSenderId: "181690405587",
      appId: "1:181690405587:web:719e5a648970ab9dbb7a26",
      measurementId: "G-N1ZHPQZ75X",
    };

    this.app = initializeApp(this.firebaseConfig);
    this.auth = getAuth(this.app);
    this.googleProvider = new GoogleAuthProvider();
    this.facebookProvider = new FacebookAuthProvider();
  }

  logInWithGoogle = async () => {
    const res = await signInWithPopup(this.auth, this.googleProvider);
    const user = res.user;

    return user;
  };

  logInWithFacebook = async () => {
    const res = await signInWithPopup(this.auth, this.facebookProvider);
    const user = res.user;

    return user;
  };
}

const FirebaseServices = new firebaseService();
export default FirebaseServices;
