import { TODO } from "./Todo.interface";

export interface useTodoInterface {
  textNewTodo: string;
  isEditing: {
    todo: boolean;
    id: string;
  };
  textSearch: string;
  listAllTodos: TODO[];
  buttonDisabled: boolean;
  loading: boolean;
  handleGetTodos: () => Promise<void>;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  handleAddTodo: () => Promise<void>;
  prepareFormForEdit: (todo: TODO) => void;
  handleEditTodo: () => Promise<void>;
  searchingItemTodo: (term: string) => (item: TODO) => boolean;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleChangeSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
