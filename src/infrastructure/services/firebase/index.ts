// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyCinLkmF63tU058eXz67HKe1SZOamQfavM",
  authDomain: "todo-list-challenge-d0a4f.firebaseapp.com",
  projectId: "todo-list-challenge-d0a4f",
  storageBucket: "todo-list-challenge-d0a4f.appspot.com",
  messagingSenderId: "660848722758",
  appId: "1:660848722758:web:9a4af924484c8fd0d21b47",
  measurementId: "G-6N70W0S1TV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Get a list of cities from your database
export async function getListTodos() {
  const todosList = collection(db, "todos");
  const todosListSnapshot = await getDocs(todosList);
  const todoList = todosListSnapshot.docs.map((doc) => doc.data());
  return todoList;
}
