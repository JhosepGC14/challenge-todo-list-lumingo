//images
import IconEdit from "../../assets/images/icon_edit.svg";
import IconDelete from "../../assets/images/icon_delete.svg";

//components
import ButtonSecondary from "../Shared/ButtonSecondary";

//services
import { deleteTodoService } from "../../infrastructure/services";

//styles
import "./item-todo.scss";

//interfaces
import { TODO } from "../../interfaces/Todo.interface";
interface Props {
  name: string | undefined;
  id?: string;
  updateList: () => void;
  editTodo: (todo: TODO) => void;
}

const ItemTodo = (props: Props) => {
  const { name, id, updateList, editTodo } = props;

  const handleDeleteTodo = async (id: string) => {
    try {
      await deleteTodoService(id);
      updateList();
    } catch (error) {
      console.log("handleDeleteTodo : ", error);
    }
  };

  const handleEditTodo = () => {
    let currentTodo: TODO = {
      id,
      name,
    };
    editTodo(currentTodo);
  };

  return (
    <div className="itemTodo">
      <span className="itemTodo__title">{name || "-"}</span>
      <div className="itemTodo__boxActions">
        <ButtonSecondary icon={IconEdit} onClick={handleEditTodo} />
        <ButtonSecondary
          icon={IconDelete}
          onClick={() => handleDeleteTodo(id!)}
        />
      </div>
    </div>
  );
};

export default ItemTodo;
