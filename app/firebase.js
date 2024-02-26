import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

import {
  getFirestore,
  doc,
  addDoc,
  getDocs,
  setDoc,
  updateDoc,
  getDoc,
  collection,
  arrayUnion,
  query,
  deleteDoc,
  where,
  deleteField,
} from "firebase/firestore";

import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
  fetchSignInMethodsForEmail,
  deleteUser,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD3hr7o3Jbf6l4mJo8yJEKjptn5dWY_p74",
  authDomain: "echoexpert-c13ad.firebaseapp.com",
  databaseURL: "https://echoexpert-c13ad-default-rtdb.firebaseio.com",
  projectId: "echoexpert-c13ad",
  storageBucket: "echoexpert-c13ad.appspot.com",
  messagingSenderId: "534936099874",
  appId: "1:534936099874:web:2d683baf0060c260f77e7b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const db = getFirestore(app);
const auth = getAuth(app);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

const signInWithGoogle = async (user) => {
  const { displayName, photoURL, uid } = user;
  localStorage.setItem("lastSignIn", new Date().toISOString());
  localStorage.setItem("name", displayName);
  localStorage.setItem("photoUrl", photoURL);
  localStorage.setItem("uid", uid);

  const userRef = doc(db, "users", uid);
  const snapshot = await getDoc(userRef);
  const settings = snapshot.data()?.settings;
  localStorage.setItem("sendEmail", settings?.sendEmail);
  localStorage.setItem("sendBefore", settings?.sendBefore);
  localStorage.setItem("sendTime", settings?.sendTime);
};

const checkIfSignedUp = async (uid) => {
  const authDocRef = doc(db, "users", uid);
  const snapshot = await getDoc(authDocRef);

  return snapshot.exists();
};

const signUpWithGoogle = async (navigate) => {
  signInWithPopup(auth, provider)
    .then(async (result) => {
      const user = result.user;
      const isSignedUp = await checkIfSignedUp(user.uid);
      if (isSignedUp) {
        signInWithGoogle(user, navigate);
      } else {
        const userDocRef = doc(db, "users", user.uid);
        const userData = {
          email: user.email,
          displayName: user.displayName,
          photoURL: user.photoURL,
          uid: user.uid,
        };
        await setDoc(userDocRef, userData, { merge: true });
        signInWithGoogle(user, navigate);
      }
    })
    .catch((error) => {
      console.error(error);
    });
};

const handleLogOut = () => {
  signOut(auth);
  localStorage.removeItem("isSignedIn");
  localStorage.removeItem("name");
  localStorage.removeItem("photoUrl");
  localStorage.removeItem("uid");
  localStorage.clear();
  window.location.reload();
};

const checkIfLoggedIn = () => {
  const lastSignIn = localStorage.getItem("lastSignIn");
  if (lastSignIn) {
    const lastSignInTime = new Date(lastSignIn).getTime();
    const currentTime = new Date().getTime();
    // Check if the last sign-in was within the last 24 hours
    return currentTime - lastSignInTime <= 86400000; // 86400000 ms = 24 hours
  }
  return false;
};

const getUserData = async () => {
  const uid = localStorage.getItem("uid");
  const userRef = doc(db, "users", uid);
  const snapshot = await getDoc(userRef);

  if (snapshot.exists()) {
    const data = snapshot.data();
    return data;
  }

  return null;
};

const updateUserSettings = async (uid, settings) => {
  console.log("updating settings", settings);
  const userRef = doc(db, "users", uid);
  await updateDoc(userRef, settings);
};

export {
  db,
  auth,
  storage,
  signUpWithGoogle,
  checkIfLoggedIn,
  getUserData,
  handleLogOut,
  updateUserSettings,
};
