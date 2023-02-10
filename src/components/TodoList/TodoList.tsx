import { useTodoContext } from '../../context/TodoContext';
import type { Filter, Todo } from '../../types';
import TodoItem from '../TodoItem/TodoItem';
import styles from './TodoList.module.css';

export default function TodoList() {
  const { todos, filter } = useTodoContext();
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
