import React from 'react';
import PropTypes from 'prop-types';

const ToDoList = (props) => {
  const { todos, onToDoClick } = props;
  const handleOnCLick = (todo) => {
    if (typeof onToDoClick === 'function') {
      onToDoClick(todo);
    }
  }
  return (
    <ul className="todo-list">
      {todos.map(todo => (
        <li
          key={todo.id}
          onClick={() => handleOnCLick(todo)}
        >
          {todo.title}
        </li>
      ))}
    </ul>
  );
}

export default ToDoList;

ToDoList.propTypes = {
  todos: PropTypes.array,
  onToDoClick: PropTypes.func,
};

ToDoList.defaultProps = {
  todos: [],
  onToDoClick: null,
};