// Import the functions you need from the SDKs you need
import { firebaseConfig } from "../firebase/config";
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  doc,
  getDocs,
  addDoc,
  setDoc,
  deleteDoc,
} from "firebase/firestore/lite";
import { TODO } from "../../interfaces/Todo.interface";

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const todoDatabase = collection(db, "todos");

// Get a list of todos from database
export const getListTodosService = async () => {
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
export const createTodoService = async (todo: TODO) => {
  const todoAddResponse = await addDoc(todoDatabase, todo);
  return todoAddResponse;
};

//Edit a todo from database
export const editTodoService = async (todo: TODO) => {
  const todoEditResponse = await setDoc(doc(db, "todos", todo.id!), {
    name: todo.name,
  });
  return todoEditResponse;
};

// Delete un todo from database
export const deleteTodoService = async (id: string) => {
  await deleteDoc(doc(db, "todos", id));
};
