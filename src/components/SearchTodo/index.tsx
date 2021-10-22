import { useState } from "react";

//components
import Input from "../Shared/Input";

//interfaces
import { TODO } from "../../interfaces/Todo.interface";
interface Props {
  data: TODO[];
  updateList: (todo: TODO[]) => void;
}

const SearchTodo = (props: Props) => {
  //props destructuring
  const { data, updateList } = props;

  //state
  const [textSearch, setTextSearch] = useState("");


  return (
    <div>
      
    </div>
  );
};

export default SearchTodo;
