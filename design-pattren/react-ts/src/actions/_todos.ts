import axios, { AxiosResponse } from "axios";
import { Dispatch } from "redux";
import { ActionTypes } from "./_types";

export interface ITodo {
  id: number;
  title: string;
  completed: boolean;
};

export interface IFetchTodosActions {
  type: ActionTypes.fetchTodos;
  payload: ITodo[];
};

export interface IDeleteAction {
  type: ActionTypes.deleteTodo;
  payload: number;
}

const url: string = "https://jsonplaceholder.typicode.com/todos";

export const fetchTodos = () => {
  return async (dispatch: Dispatch) => {
    const response: AxiosResponse<ITodo[]> = await axios.get<ITodo[]>(url);

    dispatch<IFetchTodosActions>({
      type: ActionTypes.fetchTodos,
      payload: response.data
    });
  }
};

export const deleteTodo = (id: number): IDeleteAction => {
  return {
    type: ActionTypes.deleteTodo,
    payload: id,
  }
};