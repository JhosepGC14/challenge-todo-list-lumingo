import { useEffect, useState } from "react";

//components
import Layout from "../../components/Shared/Layout";
import ItemTodo from "../../components/ItemTodo";
import Input from "../../components/Shared/Input";
import Button from "../../components/Shared/Button";
import IconAdd from "../../assets/images/icon_add.svg";

//services
import { getListTodos } from "../../infrastructure/services/firebase";

//styles
import "./todo-list.scss";

interface Props {}

const TodoListWidget = (props: Props) => {
  const [textNewTodo, setTextNewTodo] = useState<string>("");

  // useEffect(() => {
  //   getListTodos().then((e) => console.log(e));
  // }, []);

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
              hasIcon
              icon={IconAdd}
              onClick={() => console.log("enviando...")}
              content="Add"
              type="button"
            />
          </div>
        </div>
        {/* BODY */}
        <div className="boxTodoList__body">
          <div>
            <h2>Todo List</h2>
          </div>
          <ItemTodo />
          <ItemTodo />
          <ItemTodo />
          <ItemTodo />
        </div>
      </section>
    </Layout>
  );
};

export default TodoListWidget;
