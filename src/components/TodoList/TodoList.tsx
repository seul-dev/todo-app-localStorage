import { useContext } from 'react';
import { TodoContext } from '../../context/TodoContext';
import type { Filter, Todo } from '../../types';
import TodoItem from '../TodoItem/TodoItem';
import styles from './TodoList.module.css';

type Props = {
  filter: Filter;
};

export default function TodoList({ filter }: Props) {
  const { todos } = useContext(TodoContext);
  const filteredTodos = getFilteredTodoList(todos, filter);
  return (
    <ul className={styles.list}>
      {filteredTodos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}

const getFilteredTodoList = (todos: Todo[], filter: Filter) => {
  if (filter === 'All') {
    return todos;
  }
  return todos.filter((todo) => todo.status === filter);
};
