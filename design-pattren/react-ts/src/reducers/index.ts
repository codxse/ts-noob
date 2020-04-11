import { combineReducers, Reducer } from "redux";
import { todosReducer } from "./_todos";
import { ITodo } from "../actions";

export interface IStoreState {
  todos: ITodo[];
}

export const reducers = combineReducers<IStoreState>({
  todos: todosReducer
});