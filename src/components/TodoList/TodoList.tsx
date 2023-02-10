import { useTodoContext } from '../../context/TodoContext';
import TodoItem from '../TodoItem/TodoItem';
import styles from './TodoList.module.css';

export default function TodoList() {
  const { todos } = useTodoContext();

  return (
    <ul className={styles.list}>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}
