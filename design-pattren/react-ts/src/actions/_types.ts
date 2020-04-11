import { IFetchTodosActions, IDeleteAction } from "./_todos";

export enum ActionTypes {
  fetchTodos = "FETCH_TODOS",
  deleteTodo = "DELETE_TODO",
};

export type Action = IFetchTodosActions | IDeleteAction;