import React from 'react';
import { connect } from "react-redux";
import { ITodo, fetchTodos, deleteTodo } from "../actions";
import { IStoreState } from "../reducers";


interface IAppProps {
  todos?: ITodo[];
  fetchTodos: Function;
  deleteTodo: typeof deleteTodo;
}

type voidFunction = () => void;

interface IAppState {
  isFetcing: boolean;
}

class _App extends React.Component<IAppProps, IAppState> {

  constructor(props: IAppProps) {
    super(props);
    this.state = {
      isFetcing: false,
    }
  }

  private _updateIsFetching = async (isFetching: boolean, callback: voidFunction): Promise<void> => {
    const updateState = new Promise((resolve, reject) => {
      this.setState((prevState: IAppState): IAppState => ({
        ...prevState,
        isFetcing: isFetching,
      }), () => {
        callback();
        resolve(null);
      });
    });

    await updateState;
  };

  private _onButtonClick = async (): Promise<void> => {
    await this._updateIsFetching(true, () => this.props.fetchTodos());
    await this._updateIsFetching(false, () => null);
  }

  private _onClickTodo = (id: number): void => { 
    this.props.deleteTodo(id);
  }

  private _renderList(): JSX.Element[] {
    const safeTodos: ITodo[] = this.props.todos ?? [];
    return safeTodos.map((todo: ITodo): JSX.Element => {
      return (
        <div
          key={todo.id}
          onClick={(): void => this._onClickTodo(todo.id)}
        >
          {todo.title}
        </div>
      )
    });
  }
 
  render() {
    return (
      <div>
        <button
          onClick={this._onButtonClick}
        >
          Fetch
        </button>
        { this.state.isFetcing ? <h1>Loading</h1> : this._renderList() }
      </div>
    );
  }
}

interface ITodosState {
  todos: ITodo[];
}

const mapStateToProps = (state: IStoreState): ITodosState => {
  return { todos: state.todos }
}

export const App = connect(mapStateToProps, { fetchTodos, deleteTodo } )(_App);
