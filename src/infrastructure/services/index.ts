// Import the functions you need from the SDKs you need
import { firebaseConfig } from "../firebase/config";
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  doc,
  getDocs,
  addDoc,
  deleteDoc,
} from "firebase/firestore/lite";
import { TODO } from "../../interfaces/Todo.interface";

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const todoDatabase = collection(db, "todos");

// Get a list of todos from database
export const getListTodos = async () => {
  const todosListSnapshot = await getDocs(todoDatabase);
  const todoList = todosListSnapshot.docs.map((doc) => {
    return {
      id: doc.id,
      ...doc.data(),
    };
  });
  return todoList;
};

// Create a todos from database
export const createTodo = async (todo: TODO) => {
  const todoAddResponse = await addDoc(todoDatabase, todo);
  return todoAddResponse;
};

// Delete un todo from database
export const deleteTodo = async (id: string) => {
  await deleteDoc(doc(db, "todos", id));
};
