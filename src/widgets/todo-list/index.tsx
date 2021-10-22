import { useEffect } from "react";

//components
import Layout from "../../components/Shared/Layout";
import ItemTodo from "../../components/ItemTodo";
import Input from "../../components/Shared/Input";
import Button from "../../components/Shared/Button";

//services
import { getListTodos } from "../../infrastructure/services/firebase";

//styles
import "./todo-list.scss";

interface Props {}

const TodoListWidget = (props: Props) => {
  // useEffect(() => {
  //   getListTodos().then((e) => console.log(e));
  // }, []);

  return (
    <Layout>
      <section className="boxTodoList">
        <div>
          <Input />
          <Button />
        </div>
        <div>
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
