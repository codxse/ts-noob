import { ITodo, Action, ActionTypes } from "../actions";

export const todosReducer = (
  state: ITodo[] = [],
  actions: Action
) => {
  switch (actions.type) {
    case ActionTypes.fetchTodos:
      return actions.payload;
    case ActionTypes.deleteTodo:
      return state.filter((todo: ITodo): boolean => todo.id !== actions.payload);  
    default:
      return state;  
  }
};