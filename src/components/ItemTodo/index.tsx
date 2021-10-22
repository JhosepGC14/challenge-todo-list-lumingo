//images
import IconEdit from "../../assets/images/icon_edit.svg";
import IconDelete from "../../assets/images/icon_delete.svg";

//components
import ButtonSecondary from "../Shared/ButtonSecondary";

//services
import { deleteTodo } from "../../infrastructure/services";

//styles
import "./item-todo.scss";

interface Props {
  name: string | undefined;
  id?: string;
  updateList: () => void;
}

const ItemTodo = (props: Props) => {
  const { name, id, updateList } = props;

  const handleDeleteTodo = async (id: string) => {
    try {
      await deleteTodo(id);
      updateList();
    } catch (error) {
      console.log("handleDeleteTodo : ", error);
    }
  };

  return (
    <div className="itemTodo">
      <span className="itemTodo__title">{name || "-"}</span>
      <div className="itemTodo__boxActions">
        <ButtonSecondary
          icon={IconEdit}
          onClick={() => console.log("editando...", id)}
        />
        <ButtonSecondary
          icon={IconDelete}
          onClick={() => handleDeleteTodo(id!)}
        />
      </div>
    </div>
  );
};

export default ItemTodo;
