import { initializeApp } from "firebase/app";
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

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

const signInWithGoogle = async (user, navigate) => {
  const { displayName, photoURL, uid } = user;
  localStorage.setItem("isSignedIn", true);
  localStorage.setItem("name", displayName);
  localStorage.setItem("photoUrl", photoURL);
  localStorage.setItem("uid", uid);
  // navigate(0);
};

const prepareStat = async (user, userRef) => {
  const updatedUserData = Object.assign(user, {
    stats: {
      health: 1,
      intelligence: 1,
      strength: 1,
      happiness: 1,
      creativity: 1,
    },
  });

  await setDoc(userRef, updatedUserData);
};

const signUpWithGoogle = async (navigate) => {
  signInWithPopup(auth, provider)
    .then(async (result) => {
      const user = result.user;

      const isSignedUp = await checkIfSignedUp(user.uid);
      if (isSignedUp) {
        const { uid } = user;
        const userRef = doc(db, "users", uid);
        const snapshot = await getDoc(userRef);

        if (snapshot.exists()) {
          const userData = snapshot.data();
          if (!userData.stats) {
            await prepareStat(userData, userRef);
          }
        }

        signInWithGoogle(user, navigate);
      } else {
        const userDocRef = doc(db, "users", user.uid);
        const userData = {
          email: user.email,
          displayName: user.displayName,
          photoURL: user.photoURL,
          uid: user.uid,
          numFollowers: 0,
          numFollowings: 0,
          quests: {},
          stats: {
            health: 1,
            intelligence: 1,
            strength: 1,
            happiness: 1,
            creativity: 1,
          },
        };

        await setDoc(userDocRef, userData, { merge: true });
        signInWithGoogle(user, navigate);
      }
    })
    .catch((error) => {
      console.error(error);
    });
};

const checkIfLoggedIn = () => {
  const isSignedIn = localStorage.getItem("isSignedIn");
  return isSignedIn;
};

const checkIfSignedUp = async (uid) => {
  const authDocRef = doc(db, "users", uid);
  const snapshot = await getDoc(authDocRef);

  return snapshot.exists();
};

const handleLogOut = () => {
  signOut(auth);
  localStorage.removeItem("isSignedIn");
  localStorage.removeItem("name");
  localStorage.removeItem("photoUrl");
  localStorage.removeItem("uid");
  window.location.reload();
};

const deleteUserFirestore = async (uid) => {
  const userDocRef = doc(db, "users", uid);
  await deleteDoc(userDocRef);
};

const handleDelete = async () => {
  const auth = getAuth();
  const user = auth.currentUser;

  if (user) {
    try {
      //need to delete all firebase data somehow
      await deleteUserFirestore(user.uid);
      await deleteUser(user);

      localStorage.removeItem("isSignedIn");
      localStorage.removeItem("name");
      localStorage.removeItem("photoUrl");
      localStorage.removeItem("uid");

      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  } else {
    console.log("no user exist");
  }
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

const fetchAllUsers = async () => {
  const userDocument = await getDocs(collection(db, "users"));
  let userData = {};
  userDocument.forEach((doc) => {
    userData[doc.id] = doc.data();
  });

  return userData;
};

export {
  db,
  auth,
  signUpWithGoogle,
  checkIfLoggedIn,
  handleLogOut,
  handleDelete,
  getUserData,
  fetchAllUsers,
};
