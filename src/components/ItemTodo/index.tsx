//images
import IconEdit from "../../assets/images/icon_edit.svg";
import IconDelete from "../../assets/images/icon_delete.svg";

//components
import ButtonSecondary from "../Shared/ButtonSecondary";

//styles
import "./item-todo.scss";

interface Props {}

const ItemTodo = (props: Props) => {
  return (
    <div className="itemTodo">
      <span className="itemTodo__title">Pug JS - Inducción Extends Block</span>
      <div className="itemTodo__boxActions">
        <ButtonSecondary
          icon={IconEdit}
          onClick={() => console.log("editando...")}
        />
        <ButtonSecondary
          icon={IconDelete}
          onClick={() => console.log("editando...")}
        />
      </div>
    </div>
  );
};

export default ItemTodo;
