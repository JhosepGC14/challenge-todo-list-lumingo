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
  showLoading: (loading: boolean) => void;
}

const ItemTodo = (props: Props) => {
  const { name, id, updateList, editTodo, showLoading } = props;

  const handleDeleteTodo = async (id: string) => {
    try {
      showLoading(true);
      await deleteTodoService(id);
      updateList();
      showLoading(false);
    } catch (error) {
      console.log("handleDeleteTodo : ", error);
      showLoading(false);
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
