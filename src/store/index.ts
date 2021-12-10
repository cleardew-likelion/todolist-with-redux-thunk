import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { combineReducers } from "redux";
import todoReducer from "./todo/reducer";

export const RootReducer = combineReducers({ todo: todoReducer });

const store = createStore(todoReducer, applyMiddleware(thunk));

export type RootStore = ReturnType<typeof RootReducer>;

export default store;
