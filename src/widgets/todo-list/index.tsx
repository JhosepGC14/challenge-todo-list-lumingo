import { useEffect, useState } from "react";

//components
import Layout from "../../components/Shared/Layout";
import ItemTodo from "../../components/ItemTodo";
import Input from "../../components/Shared/Input";
import Button from "../../components/Shared/Button";
import IconAdd from "../../assets/images/icon_add.svg";

//services
import { v4 as uuidv4 } from "uuid";

//styles
import "./todo-list.scss";
import { createTodo, getListTodos } from "../../infrastructure/services";

//interfaces
import { TODO } from "../../interfaces/Todo.interface";

const TodoListWidget = () => {
  //states
  const [textNewTodo, setTextNewTodo] = useState<string>("");
  const [listAllTodos, setlistAllTodos] = useState<TODO[]>([]);
  const [buttonDisabled, setButtonDisabled] = useState(true);

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
      const response = await getListTodos();
      setlistAllTodos(response);
    } catch (error) {
      console.log("Error handleGetTodos: ", error);
    }
  };

  //funcion para crear un todos
  const handleAddTodo = async () => {
    try {
      let query: TODO = {
        name: textNewTodo,
      };
      await createTodo(query);
      await handleGetTodos();
      setTextNewTodo("");
    } catch (error) {
      console.log("error handleAddTodo : ", error);
    }
  };

  //controlador del input texto
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTextNewTodo(e.target.value);
  };

  return (
    <Layout>
      <section className="boxTodoList">
        {/* HEADER */}
        <div className="boxTodoList__header">
          <Input
            type="text"
            placeholder="Agrega el tema a revisar..."
            name="textNewTodo"
            value={textNewTodo}
            onChange={handleChange}
          />
          <div className="boxTodoList__header__boxButton">
            <Button
              icon={IconAdd}
              onClick={handleAddTodo}
              content="Add"
              type="button"
              disabled={buttonDisabled}
            />
          </div>
        </div>
        {/* BODY */}
        <div className="boxTodoList__body">
          <div className="boxTodoList__body__boxTitle">
            <h2>Todo List</h2>
          </div>
          <div className="boxTodoList__body__boxItems">
            {listAllTodos &&
              listAllTodos.length > 0 &&
              listAllTodos.map((item) => {
                return (
                  <ItemTodo
                    key={item.id}
                    name={item.name}
                    id={item.id}
                    updateList={handleGetTodos}
                  />
                );
              })}
            {listAllTodos && listAllTodos.length === 0 && (
              <div className="boxTodoList__body__boxItems__boxMessage">
                <p>No hay ninguna tarea a realizar :)</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default TodoListWidget;
