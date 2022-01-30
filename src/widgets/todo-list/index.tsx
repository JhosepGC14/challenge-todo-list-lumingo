import { useTodoList } from "../../hooks/useTodo";

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

//interfaces
import Loader from "../../components/Shared/Loader";

const TodoListWidget = () => {
  const {
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
  } = useTodoList();

  return (
    <Layout>
      <Loader show={loading} />
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
              onClick={!isEditing.todo ? handleAddTodo : handleEditTodo}
              content={isEditing.todo ? "Edit" : "Add"}
              type="button"
              disabled={buttonDisabled}
            />
          </div>
        </div>
        {/* BODY */}
        <div className="boxTodoList__body">
          <div className="boxTodoList__body__boxTitle">
            <h2>Todo List</h2>
            <div className="boxTodoList__body__boxTitle__boxSerach">
              <Input
                type="text"
                placeholder="Buscar tarea..."
                name="textNewTodo"
                value={textSearch}
                onChange={handleChangeSearch}
              />
            </div>
          </div>
          <div className="boxTodoList__body__boxItems">
            {listAllTodos &&
              listAllTodos.length > 0 &&
              listAllTodos.filter(searchingItemTodo(textSearch)).map((item) => {
                return (
                  <ItemTodo
                    key={uuidv4()}
                    name={item.name}
                    id={item.id}
                    updateList={handleGetTodos}
                    editTodo={prepareFormForEdit}
                    showLoading={setLoading}
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
