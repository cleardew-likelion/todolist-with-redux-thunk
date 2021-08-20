interface Todo {
  id: number;
  text: string;
  complete: boolean;
}

type ToggleTodo = (seletedtodo: Todo) => void;

type AddTodo = (text: string) => void;
