import { useState, useEffect } from "react";
import {
  createTodoService,
  editTodoService,
  getListTodosService,
} from "../infrastructure/services";
import { TODO } from "../interfaces/Todo.interface";
import { useTodoInterface } from "../interfaces/useTodo.interface";

export const useTodoList = (): useTodoInterface => {
  //states
  const [textNewTodo, setTextNewTodo] = useState<string>("");
  const [textSearch, setTextSearch] = useState("");
  const [listAllTodos, setlistAllTodos] = useState<TODO[]>([]);
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [loading, setLoading] = useState(false);
  const [isEditing, setIsEditing] = useState({
    todo: false,
    id: "",
  });

  //useEffect para obtener los datos
  useEffect(() => {
    handleGetTodos();
  }, []);

  //useEffect para validar la creacion de todos
  useEffect(() => {
    if (textNewTodo.trim() !== "" && textNewTodo.length > 5) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [textNewTodo]);

  //funcion para obetener los datos de todos
  const handleGetTodos = async () => {
    try {
      setLoading(true);
      const response = await getListTodosService();
      setlistAllTodos(response);
      setLoading(false);
    } catch (error) {
      console.log("Error handleGetTodos: ", error);
      setLoading(false);
    }
  };

  //funcion para crear un todos
  const handleAddTodo = async () => {
    try {
      setLoading(true);
      let query: TODO = {
        name: textNewTodo,
      };
      await createTodoService(query);
      await handleGetTodos();
      setTextNewTodo("");
      setLoading(false);
    } catch (error) {
      console.log("error handleAddTodo : ", error);
      setLoading(false);
    }
  };

  //funcion que prepara el form para editar
  const prepareFormForEdit = (todo: TODO) => {
    setIsEditing({
      todo: true,
      id: todo.id!,
    });
    setTextNewTodo(todo.name!);
  };

  //funcion que prepara el form para crear
  const prepareFormForAdd = () => {
    setIsEditing({
      todo: false,
      id: "",
    });
    setTextNewTodo("");
  };

  //funcion que edita un todo
  const handleEditTodo = async () => {
    try {
      setLoading(true);
      let query: TODO = {
        id: isEditing.id,
        name: textNewTodo,
      };
      await editTodoService(query);
      await handleGetTodos();
      prepareFormForAdd();
      setLoading(false);
    } catch (error) {
      console.log("error handleEditTodo : ", error);
      setLoading(false);
    }
  };

  //searchTodo
  const searchingItemTodo = (term: string) => {
    return (item: TODO) => {
      return item.name?.toLowerCase().includes(term.toLowerCase()) || !term;
    };
  };

  //controlador del input texto
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTextNewTodo(e.target.value);
  };

  const handleChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTextSearch(e.target.value);
  };

  return {
    textNewTodo,
    isEditing,
    textSearch,
    listAllTodos,
    buttonDisabled,
    loading,
    handleGetTodos,
    setLoading,
    handleAddTodo,
    prepareFormForEdit,
    handleEditTodo,
    searchingItemTodo,
    handleChange,
    handleChangeSearch,
  };
};
