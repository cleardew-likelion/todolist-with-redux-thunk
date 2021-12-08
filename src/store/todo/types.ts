import {
  LOAD_TODOS_SUCCESSED,
  LOAD_TODOS_FAILED,
  ADD_TODO,
  REMOVE_TODO,
} from "./actions";

export type ITodo = {
  id: number;
  text: string;
  done: boolean;
  due: string;
};

interface LoadTodosSuccessed {
  type: typeof LOAD_TODOS_SUCCESSED;
}

interface LoadTodosFailed {
  type: typeof LOAD_TODOS_FAILED;
}

interface AddTodo {
  type: typeof ADD_TODO;
}

interface RemoveTodo {
  type: typeof REMOVE_TODO;
}

export type TodoDispatchTypes = LoadTodosSuccessed | LoadTodosFailed;
