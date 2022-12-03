// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: 'ucamp-proyecto-4',
  storageBucket: import.meta.env.VITE_APP_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_APP_MESSAGE_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
initializeApp(firebaseConfig);
export const db = getFirestore();

/*
  import { db } from './firebase';
  import  { collection, getDocs, addDoc, onSnapshot, deleteDoc, doc }  from  'firebase/firestore';

  const getData = async () => {
    onSnapshot(collection(db, 'usuarios'), (snapshot) => {
      setUsers(snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })))
    });
    // setUsers(snapshot.docs.map(doc => doc.data()))
  };

  const deleteData = async (id) => {
    await deleteDoc(doc(db, 'usuarios', id));
  }

  const addData = async (user) => {
    const docRef = await addDoc(collection(db, "usuarios"), user)
    console.log("Document written with ID: ", docRef.id);
  }

*/
