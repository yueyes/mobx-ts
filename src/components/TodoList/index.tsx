import React from 'react';
import TodoItem from '../TodoItem';
import { IStore } from '../../stores';

interface IProps extends IStore {}

class TodoList extends React.Component<IProps> {
  render() {
    return (
      <div>
        {this.props.todoList!.data.map((item) => (
          <TodoItem
            key={item.id}
            todo={item}
            onDeleteClick={() => {
              this.props.todoList!.deleteTodo(item.id);
            }}
            onDoneClick={() => {
              this.props.todoList!.toggleDone(item.id);
            }}
          />
        ))}
      </div>
    );
  }
}

export default TodoList;
