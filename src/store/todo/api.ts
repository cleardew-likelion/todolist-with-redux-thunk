import axios from "axios";
import { ITodo } from "./types";

export const requestTodos = async () => {
  const resp = await axios.get<ITodo[]>("/data/todos.json");

  return resp.data;
};
